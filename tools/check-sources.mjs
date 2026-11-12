#!/usr/bin/env node
/**
 * Prüft alle Quellen-URLs der Check-App auf Erreichbarkeit und Weiterleitungen.
 *
 * Aufruf:  npm run check:sources
 * Ergebnis: reports/quellen-check.md (lesbar) und reports/quellen-check.json (maschinenlesbar)
 *
 * Geprüft wird mit echten HTTP-Anfragen: GET mit kleiner Range-Anfrage, Weiterleitungen
 * werden manuell verfolgt (max. 6 Sprünge), damit die Kette im Bericht steht.
 * Exit-Code 1, sobald eine Quelle fehlt (404/410), einen Serverfehler oder einen
 * Netzwerkfehler liefert. 401/403/429 gelten als Warnung, weil das oft Bot-Schutz ist.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_FILE = join(ROOT, 'afd-check', 'www', 'data', 'entries.js');
const OUT_DIR = join(ROOT, 'reports');
const CONCURRENCY = 6;
const TIMEOUT_MS = 20000;
const MAX_HOPS = 6;
const RETRY_DELAY_MS = 1200;

const UA_DESKTOP =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

const VARIANTS = [
  { range: true, ua: UA_DESKTOP },
  { range: false, ua: UA_DESKTOP },
  { range: false, ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15' }
];

function loadData() {
  const code = readFileSync(DATA_FILE, 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: DATA_FILE });
  const data = sandbox.window.CHECK_DATA;
  if (!data || !Array.isArray(data.topics)) {
    throw new Error('CHECK_DATA fehlt oder ist unvollständig: ' + DATA_FILE);
  }
  return data;
}

function collectSources(data) {
  const rows = [];
  data.topics.forEach((topic) => {
    topic.entries.forEach((entry) => {
      entry.sources.forEach((source, index) => {
        rows.push({
          topicId: topic.id,
          topicTitle: topic.title,
          entryId: entry.id,
          category: entry.category,
          claim: entry.claim,
          nuance: entry.nuance || '',
          index,
          title: source.title,
          publisher: source.publisher,
          date: source.date,
          url: source.url
        });
      });
    });
  });
  return rows;
}

const sleep = (ms) => new Promise((done) => setTimeout(done, ms));

async function requestOnce(url, variant, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const headers = {
    'user-agent': variant.ua,
    accept: 'text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8',
    'accept-language': 'de-DE,de;q=0.9,en;q=0.8',
    'cache-control': 'no-cache'
  };
  if (variant.range) headers.range = 'bytes=0-2047';

  try {
    const response = await fetch(url, { redirect: 'manual', headers, signal: controller.signal });
    const result = {
      status: response.status,
      location: response.headers.get('location'),
      contentType: response.headers.get('content-type'),
      contentLength: response.headers.get('content-length')
    };
    if (options.body) {
      const length = Number(response.headers.get('content-length') || 0);
      if (length > 6_000_000) {
        try {
          if (response.body) await response.body.cancel();
        } catch {
          /* egal */
        }
        return { ...result, text: null, tooLarge: true };
      }
      const text = await response.text();
      return { ...result, text: text.slice(0, 900_000), textBytes: text.length };
    }
    try {
      if (response.body) await response.body.cancel();
    } catch {
      /* Body war schon zu; nicht relevant. */
    }
    return result;
  } finally {
    clearTimeout(timer);
  }
}

function describeError(error) {
  if (!error) return 'unbekannter Fehler';
  if (error.name === 'AbortError') return 'Zeitüberschreitung nach ' + TIMEOUT_MS / 1000 + ' s';
  const cause = error.cause && (error.cause.code || error.cause.message);
  return cause ? error.message + ' (' + cause + ')' : error.message;
}

async function requestWithFallback(url) {
  let lastError = null;
  for (let i = 0; i < VARIANTS.length; i += 1) {
    try {
      const result = await requestOnce(url, VARIANTS[i]);
      const retryable = result.status === 403 || result.status === 429 || result.status >= 500;
      if (!retryable || i === VARIANTS.length - 1) return result;
    } catch (error) {
      lastError = error;
      if (i === VARIANTS.length - 1) throw error;
      await sleep(RETRY_DELAY_MS);
    }
    await sleep(RETRY_DELAY_MS);
  }
  throw lastError || new Error('keine Antwort');
}

function classify(originalUrl, chain) {
  const last = chain[chain.length - 1];
  const finalUrl = last.url;
  const redirected = chain.length > 1;
  const hostChanged = new URL(finalUrl).host !== new URL(originalUrl).host;
  const base = { http: last.status, finalUrl, chain, hostChanged, redirected, contentType: last.contentType || null };

  if (last.status >= 200 && last.status < 300) {
    return { ...base, verdict: redirected ? 'redirect' : 'ok' };
  }
  if (last.status === 401 || last.status === 403 || last.status === 407) {
    return {
      ...base,
      verdict: 'blocked',
      message: 'Antwort ' + last.status + ' – meist Bot-Schutz; im Browser normalerweise abrufbar'
    };
  }
  if (last.status === 429) {
    return { ...base, verdict: 'throttled', message: 'Antwort 429 – Rate-Limit des Servers' };
  }
  if (last.status === 404 || last.status === 410) {
    return { ...base, verdict: 'missing', message: 'Antwort ' + last.status + ' – Inhalt nicht mehr vorhanden' };
  }
  if (last.status >= 500) {
    return { ...base, verdict: 'server', message: 'Antwort ' + last.status + ' – Serverfehler' };
  }
  if (last.status === 400) {
    return {
      ...base,
      verdict: 'blocked',
      message: 'Antwort 400 – Zugriffs- oder Cookie-Schutz, im Browser prüfbar'
    };
  }
  if (last.status >= 300 && last.status < 400) {
    return {
      ...base,
      verdict: 'blocked',
      message: 'Weiterleitung ohne Ziel – Bot- oder Consent-Schutz'
    };
  }
  return { ...base, verdict: 'other', message: 'unerwartete Antwort ' + last.status };
}

async function probe(url) {
  const chain = [];
  let current = url;
  for (let hop = 0; hop <= MAX_HOPS; hop += 1) {
    let result;
    try {
      result = await requestWithFallback(current);
    } catch (error) {
      return {
        url,
        verdict: 'error',
        http: 0,
        finalUrl: current,
        hostChanged: false,
        redirected: chain.length > 0,
        chain,
        message: describeError(error)
      };
    }
    chain.push({
      url: current,
      status: result.status,
      location: result.location || null,
      contentType: result.contentType || null
    });

    if (result.status >= 300 && result.status < 400 && result.location) {
      let next;
      try {
        next = new URL(result.location, current).toString();
      } catch {
        return { ...classify(url, chain), url, verdict: 'other', message: 'unlesbares Location-Ziel: ' + result.location };
      }
      if (chain.some((step) => step.url === next)) {
        return { ...classify(url, chain), url, verdict: 'other', message: 'Weiterleitungsschleife' };
      }
      current = next;
      continue;
    }
    return { ...classify(url, chain), url };
  }
  return {
    url,
    verdict: 'other',
    http: chain.length ? chain[chain.length - 1].status : 0,
    finalUrl: current,
    hostChanged: false,
    redirected: true,
    chain,
    message: 'mehr als ' + MAX_HOPS + ' Weiterleitungen'
  };
}

async function pool(items, size, worker) {
  const results = new Array(items.length);
  let next = 0;
  const runners = Array.from({ length: Math.min(size, items.length) }, async () => {
    for (;;) {
      const index = next;
      next += 1;
      if (index >= items.length) return;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(runners);
  return results;
}

const STOPWORDS = new Set(
  ('aber alle allem allen aller alles als also am an andere anderen auch auf aus bei beim bin bis bist da damit dann der den des dem die das dass dazu dein deine denn denen der deren dessen dich dies diese diesem diesen dieser dieses dir doch dort du durch ein eine einem einen einer eines einige er es etwas euch euer fuer gegen gewesen hab habe haben hat hatte hatten hier hin hinter ich im in indem ins ist jede jedem jeden jeder jedes jene jetzt kann kein keine koennen koennte machen man manche mein meine mit muss musste nach nicht nichts noch nun nur ob oder ohne sehr sein seine seinem seinen seiner seit selbst sich sie sind so solche soll sollte sondern sonst ueber um und uns unsere unter viel vom von vor war waren warst was weil weiter welche welchem welchen welcher welches wenn werde werden wie wieder will wir wird wirst wo wollen wollte worden wuerde wuerden zwar zwischen').split(
    ' '
  )
);

function fold(value) {
  return String(value)
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss');
}

const ENTITIES = {
  amp: '&',
  quot: '"',
  apos: "'",
  lt: '<',
  gt: '>',
  nbsp: ' ',
  auml: 'ä',
  ouml: 'ö',
  uuml: 'ü',
  szlig: 'ß',
  ndash: '–',
  mdash: '—',
  hellip: '…',
  euro: '€',
  sect: '§'
};

function decodeEntities(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => ENTITIES[name.toLowerCase()] ?? match);
}

function htmlToText(html) {
  const withoutNoise = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, ' ');
  return fold(decodeEntities(withoutNoise.replace(/<[^>]+>/g, ' ')))
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchPageText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': UA_DESKTOP,
        accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.5',
        'accept-language': 'de-DE,de;q=0.9,en;q=0.8'
      }
    });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const type = response.headers.get('content-type') || '';
    if (!/text\/html/i.test(type)) throw new Error('kein HTML (' + (type || 'unbekannt') + ')');
    const html = await response.text();
    return { text: htmlToText(html.slice(0, 1_500_000)), bytes: html.length };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Schlüsselbegriffe aus Quellentitel und Behauptung. Titel zuerst, weil er beschreibt,
 * was die Quelle ist; die Behauptung liefert die inhaltlichen Anker.
 */
function keywordsFor(row) {
  const seen = new Set();
  const chosen = [];

  const add = (value, limit) => {
    let added = 0;
    for (const raw of String(value || '').split(/[^\p{L}\p{N}]+/u)) {
      const folded = fold(raw).replace(/[^a-z0-9]/g, '');
      if (folded.length < 5 || STOPWORDS.has(folded) || seen.has(folded)) continue;
      seen.add(folded);
      chosen.push({ raw, folded, prefix: folded.slice(0, Math.min(6, folded.length)) });
      added += 1;
      if (added >= limit) break;
    }
  };

  add(row.title, 6);
  add(row.claim, 6);
  return chosen.slice(0, 10);
}

function checkContent(row, text) {
  const keywords = keywordsFor(row);
  if (!text) return { checked: false, reason: 'kein Text geladen' };
  if (!keywords.length) return { checked: false, reason: 'keine Schlüsselbegriffe' };

  const found = [];
  const missing = [];
  for (const keyword of keywords) {
    if (text.includes(keyword.prefix)) found.push(keyword.raw);
    else missing.push(keyword.raw);
  }
  const ratio = found.length / keywords.length;
  // „ohne Treffer“ nur, wenn wirklich kein einziger Begriff vorkommt: Quellen nennen
  // Personen oft anders („der thüringische AfD-Fraktionsvorsitzende“ statt „Höcke“).
  const verdict = ratio >= 0.6 ? 'ok' : found.length > 0 ? 'partial' : 'missing';
  return {
    checked: true,
    verdict,
    ratio: Math.round(ratio * 100) / 100,
    found: found.length,
    total: keywords.length,
    missing: missing.slice(0, 8),
    matched: found.slice(0, 8)
  };
}

function judgeContent(row, result, text) {
  if (!result) return { checked: false, reason: 'nicht geprüft' };
  if (result.contentError) return { checked: false, reason: result.contentError };
  if (result.verdict !== 'ok' && result.verdict !== 'redirect') {
    return { checked: false, reason: LABELS[result.verdict] || result.verdict };
  }
  if (!/text\/html/i.test(result.contentType || '')) {
    return { checked: false, reason: 'kein HTML (PDF oder Datei)' };
  }
  if (!text) return { checked: false, reason: 'kein Text geladen' };
  return checkContent(row, text);
}

const LABELS = {
  ok: 'erreichbar',
  redirect: 'erreichbar, weitergeleitet',
  blocked: 'Zugriff verweigert',
  throttled: 'gedrosselt',
  missing: 'fehlt',
  server: 'Serverfehler',
  error: 'Netzwerkfehler',
  other: 'unklar'
};

function mdEscape(value) {
  return String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function renderMarkdown(data, rows, unique, results, stamp) {
  const byVerdict = Object.fromEntries(Object.keys(LABELS).map((key) => [key, 0]));
  results.forEach((result) => {
    byVerdict[result.verdict] = (byVerdict[result.verdict] || 0) + 1;
  });

  const resultFor = new Map(results.map((result) => [result.url, result]));
  const lines = [];
  lines.push('# Quellenprüfung der Check-App');
  lines.push('');
  lines.push('Stand: ' + stamp + ' · automatisch erzeugt mit `npm run check:sources`');
  lines.push('');
  lines.push(
    rows.length +
      ' Quellenangaben in ' +
      unique.length +
      ' eindeutigen URLs auf ' +
      new Set(unique.map(hostOf)).size +
      ' Hosts. Jede URL wurde mit einer echten HTTP-Anfrage geprüft; Weiterleitungen wurden verfolgt.'
  );
  lines.push('');
  lines.push('| Ergebnis | Anzahl |');
  lines.push('| --- | ---: |');
  Object.entries(LABELS).forEach(([key, label]) => {
    lines.push('| ' + label + ' | ' + byVerdict[key] + ' |');
  });
  lines.push('');

  const contentCounts = { ok: 0, partial: 0, missing: 0, unchecked: 0 };
  rows.forEach((row) => {
    if (row.content && row.content.checked) contentCounts[row.content.verdict] += 1;
    else contentCounts.unchecked += 1;
  });

  lines.push('## Stichwortprüfung');
  lines.push('');
  lines.push(
    'Zusätzlich wurde der HTML-Text jeder erreichbaren Quelle nachgeladen und geprüft, ob die Schlüsselbegriffe aus Quellentitel und Behauptung dort noch vorkommen. Das ist ein Hinweis, kein Beweis: Formulierungen ändern sich, Quellen nennen Personen mitunter anders (etwa „der thüringische AfD-Fraktionsvorsitzende“ statt „Höcke“), und PDFs, Bezahlschranken oder Bot-Schutz lassen sich so nicht prüfen.'
  );
  lines.push('');
  lines.push('| Stichwörter im Seitentext | Quellen |');
  lines.push('| --- | ---: |');
  lines.push('| überwiegend gefunden (ab 60 %) | ' + contentCounts.ok + ' |');
  lines.push('| teilweise gefunden (unter 60 %) | ' + contentCounts.partial + ' |');
  lines.push('| kein einziger Begriff gefunden | ' + contentCounts.missing + ' |');
  lines.push('| nicht prüfbar (PDF, Sperre, Fehler) | ' + contentCounts.unchecked + ' |');
  lines.push('');

  const contentIssues = rows.filter(
    (row) => row.content && row.content.checked && row.content.verdict !== 'ok'
  );
  if (contentIssues.length) {
    lines.push('Quellen, in denen die zitierten Begriffe ganz oder teilweise fehlen:');
    lines.push('');
    lines.push('| Quelle | Eintrag | Treffer | fehlende Begriffe |');
    lines.push('| --- | --- | ---: | --- |');
    contentIssues.forEach((row) => {
      lines.push(
        '| ' +
          mdEscape(row.title) +
          ' | ' +
          mdEscape(row.entryId) +
          ' | ' +
          row.content.found +
          '/' +
          row.content.total +
          ' | ' +
          mdEscape((row.content.missing || []).join(', ') || '–') +
          ' |'
      );
    });
    lines.push('');
  }

  const redirects = results.filter((result) => result.redirected && result.verdict !== 'error');
  lines.push('## Weiterleitungen (' + redirects.length + ')');
  lines.push('');
  if (!redirects.length) {
    lines.push('Keine URL wurde weitergeleitet.');
  } else {
    lines.push('| Quelle | Kette | Endziel |');
    lines.push('| --- | --- | --- |');
    redirects.forEach((result) => {
      const chain = result.chain
        .map((step) => step.status + ' ' + hostOf(step.url))
        .join(' → ');
      lines.push(
        '| ' +
          mdEscape(hostOf(result.url)) +
          ' | ' +
          chain +
          ' | ' +
          (result.hostChanged ? '**anderer Host:** ' : '') +
          mdEscape(result.finalUrl) +
          ' |'
      );
    });
  }
  lines.push('');

  const problems = results.filter((result) => ['blocked', 'throttled', 'missing', 'server', 'error', 'other'].includes(result.verdict));
  lines.push('## Auffällige Quellen (' + problems.length + ')');
  lines.push('');
  if (!problems.length) {
    lines.push('Keine Auffälligkeiten.');
  } else {
    lines.push('| Status | HTTP | Quelle | Hinweis |');
    lines.push('| --- | ---: | --- | --- |');
    problems.forEach((result) => {
      lines.push(
        '| ' +
          LABELS[result.verdict] +
          ' | ' +
          (result.http || '–') +
          ' | ' +
                    mdEscape(result.url) +
          ' | ' +
          mdEscape(
            (result.message || '') +
              (result.finalUrl && result.finalUrl !== result.url ? ' · Ziel: ' + result.finalUrl : '')
          ) +
          ' | '
      );
    });
  }
  lines.push('');

  lines.push('## Alle Quellen');
  lines.push('');
  lines.push('| Thema | Eintrag | Quelle | Herausgeber · Datum | HTTP | Ergebnis | Stichwörter |');
  lines.push('| --- | --- | --- | --- | ---: | --- | ---: |');
  rows.forEach((row) => {
    const result = resultFor.get(row.url);
    lines.push(
      '| ' +
        mdEscape(row.topicTitle) +
        ' | ' +
        mdEscape(row.entryId) +
        ' | ' +
        mdEscape(row.title) +
        ' | ' +
        mdEscape(row.publisher + ' · ' + row.date) +
        ' | ' +
        (result ? result.http || '–' : '–') +
        ' | ' +
        (result ? LABELS[result.verdict] : 'nicht geprüft') +
        ' | ' +
        (row.content && row.content.checked ? row.content.found + '/' + row.content.total : '–') +
        ' |'
    );
  });
  lines.push('');
  lines.push(
    'Hinweis: `Zugriff verweigert` und `gedrosselt` bedeuten meist Bot-Schutz oder Rate-Limits, nicht dass die Quelle verschwunden ist. ' +
      'Für die Prüfung wurde eine kleine Range-Anfrage mit Browser-Kennung gesendet; Inhalte wurden nicht ausgewertet.'
  );
  lines.push('');
  lines.push(
    'Ein HTTP-Status belegt nur die Erreichbarkeit der Adresse, nicht ihren Inhalt. Ob die Quelle die Behauptung tatsächlich stützt, ' +
      'steht im Datensatz und wurde dort geprüft.'
  );
  lines.push('');
  lines.push(
    'Die Prüfung ist eine Momentaufnahme: Bot-Schutz und Rate-Limits können beim nächsten Lauf anders antworten.'
  );
  lines.push('');
  return lines.join('\n');
}

function summarize(rows, results) {
  const counts = {};
  results.forEach((result) => {
    counts[result.verdict] = (counts[result.verdict] || 0) + 1;
  });
  const line = Object.keys(LABELS)
    .filter((key) => counts[key])
    .map((key) => LABELS[key] + ': ' + counts[key])
    .join(' · ');
  return line || 'keine Ergebnisse';
}

async function main() {
  const data = loadData();
  const rows = collectSources(data);
  const unique = [...new Set(rows.map((row) => row.url))];
  console.log(
    'Prüfe ' + rows.length + ' Quellenangaben (' + unique.length + ' eindeutige URLs, ' +
      new Set(unique.map(hostOf)).size + ' Hosts) …'
  );

  const pageTexts = new Map();
  const results = await pool(unique, CONCURRENCY, async (url) => {
    const result = await probe(url);

    // Für die Stichwortprüfung den HTML-Text der erreichbaren Seite nachladen.
    if (
      (result.verdict === 'ok' || result.verdict === 'redirect') &&
      /text\/html/i.test(result.contentType || '')
    ) {
      try {
        const page = await fetchPageText(result.finalUrl);
        pageTexts.set(url, page.text);
        result.textBytes = page.bytes;
      } catch (error) {
        result.contentError = describeError(error);
      }
    }

    const status = result.http || '–';
    console.log(String(status).padStart(3, ' ') + '  ' + LABELS[result.verdict].padEnd(24, ' ') + ' ' + url);
    return result;
  });

  const resultsByUrl = new Map(results.map((result) => [result.url, result]));
  rows.forEach((row) => {
    row.content = judgeContent(row, resultsByUrl.get(row.url), pageTexts.get(row.url));
  });

  const stamp = new Date().toLocaleString('de-DE', {
    timeZone: 'Europe/Berlin',
    dateStyle: 'long',
    timeStyle: 'short'
  });

  const report = {
    generatedAt: new Date().toISOString(),
    generatedAtLocal: stamp,
    totals: {
      references: rows.length,
      uniqueUrls: unique.length,
      hosts: new Set(unique.map(hostOf)).size
    },
    counts: results.reduce((acc, result) => {
      acc[result.verdict] = (acc[result.verdict] || 0) + 1;
      return acc;
    }, {}),
    sources: rows,
    results
  };

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, 'quellen-check.json'), JSON.stringify(report, null, 2) + '\n', 'utf8');
  writeFileSync(join(OUT_DIR, 'quellen-check.md'), renderMarkdown(data, rows, unique, results, stamp), 'utf8');

  const contentCounts = { ok: 0, partial: 0, missing: 0, unchecked: 0 };
  rows.forEach((row) => {
    if (row.content && row.content.checked) contentCounts[row.content.verdict] += 1;
    else contentCounts.unchecked += 1;
  });

  console.log('');
  console.log('Ergebnis: ' + summarize(rows, results));
  console.log(
    'Stichwörter: ' +
      contentCounts.ok +
      ' vollständig · ' +
      contentCounts.partial +
      ' teilweise · ' +
      contentCounts.missing +
      ' ohne Treffer · ' +
      contentCounts.unchecked +
      ' nicht prüfbar'
  );
  console.log('Bericht:  reports/quellen-check.md');
  console.log('Rohdaten: reports/quellen-check.json');

  const hardFailures = results.filter((result) =>
    ['missing', 'server', 'error', 'other'].includes(result.verdict)
  );
  if (hardFailures.length) {
    console.error('');
    console.error(hardFailures.length + ' Quelle(n) sind nicht erreichbar oder fehlerhaft:');
    hardFailures.forEach((result) => {
      console.error('  ' + (result.http || '–') + '  ' + result.url + (result.message ? '  (' + result.message + ')' : ''));
    });
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error('Prüfung abgebrochen:', error);
  process.exitCode = 2;
});
