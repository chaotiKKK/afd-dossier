#!/usr/bin/env node
/**
 * Übernimmt alle Dossier-Einträge in den Bestand der Check-App, die dort noch fehlen.
 *
 * Aufruf:  node tools/import-dossier.mjs [--dry]
 *
 * Regeln:
 * - Behauptung, Begründung und Quellen werden wörtlich aus dem Dossier übernommen.
 * - Quellen werden über ihre ID aus dem Register aufgelöst; Titel, Herausgeber, Datum
 *   und Link kommen zeichengenau von dort. Einträge ohne auflösbare Quelle werden
 *   übersprungen und am Ende gemeldet.
 * - Die Dossier-Tags werden auf die vier Kategorien der App abgebildet:
 *   belegt -> belegt, nicht-belegt -> nicht belegt, teilweise/einordnung -> umstritten.
 * - Bereits vorhandene App-Einträge bleiben unangetastet; COVERED bildet sie auf die
 *   Dossier-Einträge ab, die sie inhaltlich schon abdecken.
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = join(ROOT, 'src', 'data');
const APP_FILE = join(ROOT, 'afd-check', 'www', 'data', 'entries.js');

// App-Eintrag -> Dossier-Eintrag, den er inhaltlich schon abdeckt.
const COVERED = {
  'vs-einstufung': 'nazi-partei',
  'vs-laender': 'landesverfassungsschutz',
  'vs-verbot': 'verbot',
  'ns-vergleich': 'vergleich',
  'hoecke-urteil': 'hoecke-urteil',
  'programm-demokratie': 'putsch',
  'keine-migranten': 'keine-migranten',
  'alle-abschieben': 'alle-abschieben',
  brandmauer: 'brandmauer',
  bundestagswahl: 'ergebnis-2025',
  'eu-austritt': 'dexit',
  'russland-finanzierung': 'russland-bezahlt',
  parteispende: 'spendenaffaere',
  frauenanteil: 'frauenanteil',
  'letzte-kraft': 'letzte-kraft',
  'klima-paris': 'klima',
  sozialstaat: 'sozialstaat-abschaffen',
  'sozialpolitik-reiche': 'sozialpolitik',
  'wirtschaft-unfaehig': 'wirtschaftlich-unfaehig',
  'russland-freundlich': 'russland-nato',
  'nato-eu': 'nato-eu-raus',
  antisemitismus: 'antisemitisch',
  'rechte-kontakte': 'rechtsextreme-kontakte',
  'aemter-laender': 'aemter-laender',
  'ost-partei': 'ost-partei'
};

const CATEGORY = {
  belegt: 'belegt',
  widerlegt: 'widerlegt',
  'nicht-belegt': 'nicht-belegt',
  teilweise: 'umstritten',
  einordnung: 'umstritten'
};

// Dossier-Abschnitte, die ein eigenes Themenfeld in der App bekommen.
const NEW_TOPICS = {
  'Was AfD-Anhänger sagen – die belegte Antwort': {
    id: 'anhaenger',
    title: 'Was AfD-Anhänger sagen',
    intro: 'Die Sätze, die in Diskussionen für die Partei vorgebracht werden – und was davon belegbar ist.'
  },
  'Die zehn häufigsten Gegenargumente': {
    id: 'gegenargumente',
    title: 'Häufige Gegenargumente',
    intro: 'Die Einwände, die gegen Kritik an der AfD meist kommen – einzeln geprüft.'
  },
  'Medien & Weidel': {
    id: 'medien',
    title: 'Medien & Weidel',
    intro: 'Was an der Rede von Manipulation belegt ist, was nicht – und wie sich das trennen lässt.'
  },
  'Parole & Begriffe': {
    id: 'parole',
    title: 'Parole & Begriffe',
    intro: 'Wörter, die in Debatten als Waffe dienen: Rechtslage, Verwendung und was Begriffe verschleiern.'
  },
  'Die größten Vorwürfe': {
    id: 'vorwuerfe',
    title: 'Die größten Vorwürfe',
    intro: 'Die schwersten Sätze, die über die Partei fallen – mit dem, was davon trägt.'
  }
};

// Dossier-Abschnitte, deren Einträge in bestehende Themenfelder wandern.
const APPEND_TO = {
  'Demokratie & Brandmauer': 'demokratie',
  'Hitler-Vergleich': 'ns-bezuege',
  'Migrationsdeutsche in der AfD': 'migration'
};

const APP_ORDER = [
  'verfassungsschutz',
  'ns-bezuege',
  'migration',
  'demokratie',
  'programm',
  'wirtschaft',
  'russland',
  'partei'
];

function loadDossier() {
  const context = vm.createContext({ window: { DOSSIER_SECTIONS: [], DOSSIER_SOURCES: [] } });
  for (const file of readdirSync(DATA_DIR).filter((name) => name.endsWith('.js'))) {
    vm.runInContext(readFileSync(join(DATA_DIR, file), 'utf8'), context, { filename: file });
  }
  const sections = context.window.DOSSIER_SECTIONS;
  const sources = new Map(context.window.DOSSIER_SOURCES.map((source) => [source.id, source]));
  if (!sections || !sections.length) throw new Error('Dossier-Daten fehlen');
  return { sections, sources };
}

function loadApp() {
  const sandbox = { window: {} };
  vm.runInNewContext(readFileSync(APP_FILE, 'utf8'), sandbox, { filename: APP_FILE });
  if (!sandbox.window.CHECK_DATA) throw new Error('CHECK_DATA fehlt');
  return sandbox.window.CHECK_DATA;
}

function sourceObject(source) {
  return {
    title: source.title,
    publisher: source.publisher,
    date: source.date,
    url: source.url
  };
}

function buildEntry(entry, sources) {
  const mapped = (entry.sources || []).map((id) => sources.get(id)).filter(Boolean);
  if (!mapped.length) {
    return { skipped: true, reason: 'keine auflösbare Quelle' };
  }
  const category = CATEGORY[entry.tag];
  if (!category) {
    return { skipped: true, reason: 'unbekannter Tag ' + entry.tag };
  }
  return {
    entry: {
      id: entry.id,
      claim: entry.claim,
      category,
      verdict: entry.verdict,
      sources: mapped.map(sourceObject)
    }
  };
}

/**
 * Setzt Titel, Herausgeber und Datum jeder Quelle auf den Registerwert.
 * Nötig, weil ältere App-Einträge Quellen gekürzt wiedergegeben haben.
 */
function normalizeSources(app, sources) {
  const byUrl = new Map([...sources.values()].map((source) => [source.url, source]));
  let changed = 0;
  let unknown = 0;
  for (const topic of app.topics) {
    for (const entry of topic.entries) {
      for (const source of entry.sources) {
        const original = byUrl.get(source.url);
        if (!original) {
          unknown += 1;
          continue;
        }
        if (
          source.title !== original.title ||
          source.publisher !== original.publisher ||
          source.date !== original.date
        ) {
          source.title = original.title;
          source.publisher = original.publisher;
          source.date = original.date;
          changed += 1;
        }
      }
    }
  }
  return { changed, unknown };
}

function main() {
  const dry = process.argv.includes('--dry');
  const { sections, sources } = loadDossier();
  const app = loadApp();

  const coveredIds = new Set(Object.values(COVERED));
  const appIds = new Set(app.topics.flatMap((topic) => topic.entries.map((entry) => entry.id)));
  const existingTopics = new Map(app.topics.map((topic) => [topic.id, topic]));

  const skipped = [];
  const added = [];
  const newTopics = new Map();

  for (const section of sections) {
    const target = NEW_TOPICS[section.title];
    const appendTo = APPEND_TO[section.title];
    if (!target && !appendTo) {
      console.log('Abschnitt ohne Ziel:', section.title);
      continue;
    }

    for (const entry of section.entries) {
      if (coveredIds.has(entry.id)) continue;

      const built = buildEntry(entry, sources);
      if (built.skipped) {
        skipped.push({ id: entry.id, section: section.title, reason: built.reason });
        continue;
      }
      if (appIds.has(entry.id)) {
        skipped.push({ id: entry.id, section: section.title, reason: 'ID bereits in der App' });
        continue;
      }

      added.push({ id: entry.id, section: section.title, target: target ? target.id : appendTo });

      if (target) {
        if (!newTopics.has(section.title)) {
          newTopics.set(section.title, { ...target, entries: [] });
        }
        newTopics.get(section.title).entries.push(built.entry);
      } else {
        const topic = existingTopics.get(appendTo);
        if (!topic) throw new Error('Zielthema fehlt: ' + appendTo);
        topic.entries.push(built.entry);
      }
      appIds.add(entry.id);
    }
  }

  // Neue Themen in fester Reihenfolge anhängen.
  for (const sectionTitle of Object.keys(NEW_TOPICS)) {
    const topic = newTopics.get(sectionTitle);
    if (topic && topic.entries.length) app.topics.push(topic);
  }

  // Bestehende Themen in eine stabile Reihenfolge bringen (neue Themen bleiben hinten).
  app.topics.sort((a, b) => {
    const ai = APP_ORDER.indexOf(a.id);
    const bi = APP_ORDER.indexOf(b.id);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  const normalized = normalizeSources(app, sources);
  console.log('Quellen normalisiert:', normalized.changed, '| nicht im Register:', normalized.unknown);

  const dossierIds = sections.flatMap((section) => section.entries.map((entry) => entry.id));
  // Abgedeckt ist, was auf ein Dossier-ID abgebildet ist oder bereits unter dieser ID
  // in der App steht (auch aus früheren Läufen).
  const coveredNow = new Set([...coveredIds, ...dossierIds.filter((id) => appIds.has(id))]);
  const missing = dossierIds.filter((id) => !coveredNow.has(id));

  console.log('Dossier:', dossierIds.length, '| bereits abgedeckt:', coveredIds.size, '| neu:', added.length);
  console.log('Übersprungen:', skipped.length, skipped);
  console.log('Nicht abgedeckt:', missing.length, missing);
  console.log('App danach:', app.topics.reduce((n, topic) => n + topic.entries.length, 0), 'Einträge in', app.topics.length, 'Themen');

  if (dry) return;

  const header =
    '/* Inhaltsbestand der AfD-Check-App.\n' +
    '   Jeder Eintrag: Behauptung im Wortlaut, Kategorie, Begründung, Quelle(n) mit Datum und Link.\n' +
    '   Die Einträge ab "Was AfD-Anhänger sagen" sind wörtlich aus dem Dossier übernommen;\n' +
    '   Titel, Herausgeber, Datum und Link stammen zeichengenau aus dem Quellenregister. */\n';
  writeFileSync(APP_FILE, header + 'window.CHECK_DATA = ' + JSON.stringify(app, null, 2) + ';\n', 'utf8');
  console.log('Geschrieben:', APP_FILE);
}

main();
