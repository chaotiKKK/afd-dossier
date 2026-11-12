'use strict';

(() => {
  const META = window.DOSSIER_META;
  const NUMBER_ROWS = window.DOSSIER_NUMBERS;
  const SECTIONS = window.DOSSIER_SECTIONS;
  const SOURCE_ROWS = window.DOSSIER_SOURCES;
  const TALK = window.DOSSIER_TALK;

  const SOURCES = Object.fromEntries(SOURCE_ROWS.map((s) => [s.id, s]));
  const ENTRIES = SECTIONS.flatMap((sec) =>
    sec.entries.map((e) => Object.assign({}, e, { section: sec.id, sectionTitle: sec.title }))
  );
  const BY_ID = Object.fromEntries(ENTRIES.map((e) => [e.id, e]));

  const TAGS = {
    belegt: { label: 'Belegt', cls: 'belegt' },
    teilweise: { label: 'Teilweise', cls: 'teilweise' },
    'nicht-belegt': { label: 'Nicht belegt', cls: 'nicht' },
    einordnung: { label: 'Einordnung', cls: 'einordnung' }
  };

  const state = {
    route: 'start',
    query: '',
    tag: 'all',
    read: new Set(loadRead()),
    theme: localStorage.getItem('dossier-theme') || 'light'
  };

  const el = {
    view: document.getElementById('view'),
    nav: document.getElementById('nav'),
    search: document.getElementById('search'),
    searchClear: document.getElementById('searchClear'),
    progressBar: document.getElementById('progressBar'),
    progressText: document.getElementById('progressText'),
    standText: document.getElementById('standText'),
    sidebar: document.getElementById('sidebar'),
    themeBtn: document.getElementById('themeBtn'),
    printBtn: document.getElementById('printBtn'),
    menuBtn: document.getElementById('menuBtn')
  };

  /* ---------- Hilfsfunktionen ---------- */

  function loadRead() {
    try {
      const raw = JSON.parse(localStorage.getItem('dossier-read') || '[]');
      return Array.isArray(raw) ? raw : [];
    } catch (err) {
      return [];
    }
  }

  function saveRead() {
    try {
      localStorage.setItem('dossier-read', JSON.stringify([...state.read]));
    } catch (err) {
      /* Speicher nicht verfügbar – Lesefortschritt bleibt für die Sitzung erhalten. */
    }
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escRe(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function mark(text, query) {
    const safe = esc(text);
    if (!query) return safe;
    return safe.replace(new RegExp(escRe(query), 'gi'), (m) => `<mark>${m}</mark>`);
  }

  function chip(tag) {
    const meta = TAGS[tag] || TAGS.einordnung;
    return `<span class="chip chip-${meta.cls}">${meta.label}</span>`;
  }

  function srcLink(id, index) {
    const s = SOURCES[id];
    if (!s) return '';
    return (
      `<a class="src" href="${esc(s.url)}" target="_blank" rel="noopener" data-url="${esc(s.url)}">` +
      `<span class="src-num">[${index}]</span>${esc(s.title)} ` +
      `<span class="src-meta">– ${esc(s.publisher)}, ${esc(s.date)}</span></a>`
    );
  }

  function entryText(e) {
    const parts = [e.claim, e.verdict];
    (e.blocks || []).forEach((b) => {
      if (b.text) parts.push(b.text);
      if (b.items) parts.push(b.items.join(' '));
    });
    (e.sources || []).forEach((id) => {
      if (SOURCES[id]) parts.push(SOURCES[id].title + ' ' + SOURCES[id].publisher);
    });
    return parts.join(' \n ');
  }

  /* ---------- Navigation ---------- */

  const NAV_ITEMS = [
    { id: 'start', title: 'Start', num: '00' }
  ].concat(
    SECTIONS.map((s, i) => ({
      id: s.id,
      title: s.title,
      num: String(i + 1).padStart(2, '0'),
      count: s.entries.length
    })),
    [
      { id: 'gespraech', title: 'Gesprächsleitfaden', num: String(SECTIONS.length + 1).padStart(2, '0') },
      { id: 'quellen', title: 'Quellen', num: String(SECTIONS.length + 2).padStart(2, '0'), count: SOURCE_ROWS.length }
    ]
  );

  function renderNav() {
    el.nav.innerHTML = NAV_ITEMS.map(
      (item) =>
        `<a class="nav-item${item.id === state.route ? ' active' : ''}" href="#/${item.id}" data-route="${item.id}"${item.id === state.route ? ' aria-current="page"' : ''}>` +
        `<span class="nav-num">${item.num}</span><span>${esc(item.title)}</span>` +
        (item.count ? `<span class="nav-count">${item.count}</span>` : '') +
        `</a>`
    ).join('');
  }

  function updateProgress() {
    const total = ENTRIES.length;
    const done = ENTRIES.filter((e) => state.read.has(e.id)).length;
    el.progressText.textContent = `${done} / ${total}`;
    el.progressBar.style.width = total ? `${(done / total) * 100}%` : '0%';
  }

  /* ---------- Bausteine ---------- */

  function renderBlocks(entry) {
    return (entry.blocks || []).map((b) => {
      if (b.type === 'p') return `<p>${mark(b.text, '')}</p>`;
      if (b.type === 'facts') {
        return `<ul class="facts">${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
      }
      if (b.type === 'quote') {
        const src = SOURCES[b.source];
        const cite = src ? `${esc(src.publisher)}, ${esc(src.date)}` : '';
        return `<blockquote>„${esc(b.text)}“<cite>${cite}</cite></blockquote>`;
      }
      if (b.type === 'note') {
        return `<div class="note"><span class="note-label">Für Gespräche</span>${esc(b.text)}</div>`;
      }
      return '';
    }).join('');
  }

  function renderEntry(entry) {
    const isRead = state.read.has(entry.id);
    const srcs = (entry.sources || []).filter((id) => SOURCES[id]);
    return (
      `<article class="entry t-${entry.tag}${isRead ? ' is-read' : ''}" id="entry-${entry.id}" data-id="${entry.id}">` +
      `<div class="entry-head">${chip(entry.tag)}` +
      `<label class="reader"><input type="checkbox" data-read="${entry.id}"${isRead ? ' checked' : ''} /> gelesen</label>` +
      `</div>` +
      `<h3 class="entry-claim">${esc(entry.claim)}</h3>` +
      `<div class="verdict"><b>Kurzfassung</b>${esc(entry.verdict)}</div>` +
      `<div class="entry-body">${renderBlocks(entry)}</div>` +
      (srcs.length
        ? `<div class="sources"><div class="sources-title">Quellen (${srcs.length})</div>` +
          srcs.map((id, i) => srcLink(id, i + 1)).join('') +
          `</div>`
        : '') +
      `</article>`
    );
  }

  /* ---------- Startseite ---------- */

  function renderStart() {
    const theses = [
      { entry: 'vergleich', quote: '„Die AfD ist der neue Hitler.“' },
      { entry: 'keine-migranten', quote: '„Bei der AfD sind viele Migrationsdeutsche Mitglied.“' },
      { entry: 'letzte-kraft', quote: '„Die AfD ist eine der letzten demokratischen Kräfte.“' },
      { entry: 'brandmauer', quote: '„Die Brandmauer tritt die Demokratie mit Füßen.“' }
    ];

    const thesisHtml = theses.map((t) => {
      const e = BY_ID[t.entry];
      if (!e) return '';
      return (
        `<a class="these" href="#/${e.section}/entry-${e.id}">` +
        `<div class="these-quote">${esc(t.quote)}</div>` +
        `<div class="these-verdict">${esc(e.verdict)}</div>` +
        `<div class="these-link">Prüfen → ${chip(e.tag)}</div>` +
        `</a>`
      );
    }).join('');

    const numbersHtml = NUMBER_ROWS.map((n) => {
      const s = SOURCES[n.source];
      return (
        `<div class="number"><div class="number-value">${esc(n.value)}</div>` +
        `<div class="number-label">${esc(n.label)}</div>` +
        (s ? `<a class="number-src" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.publisher)}</a>` : '') +
        `</div>`
      );
    }).join('');

    return (
      `<section class="hero">` +
      `<div class="kicker">Faktencheck · Gesprächsgrundlage</div>` +
      `<h1>Die AfD im Faktencheck</h1>` +
      `<p class="lead">${esc(META.intro)}</p>` +
      `<div class="hero-meta"><span>Stand: ${esc(META.stand)}</span><span>${ENTRIES.length} Einträge</span><span>${SOURCE_ROWS.length} Quellen</span><span>Offline nutzbar</span></div>` +
      `</section>` +
      `<hr class="rule" />` +
      `<h2>Die vier Sätze, um die es geht</h2>` +
      `<div class="these-grid">${thesisHtml}</div>` +
      `<h2>Zahlen, die man kennen sollte</h2>` +
      `<div class="numbers">${numbersHtml}</div>` +
      `<div class="panel"><div class="panel-title">Lesehinweis</div>` +
      `<p style="margin:0;font-size:14px;color:var(--ink-2)">Dieses Dossier ist parteilich: Es ist für Gespräche geschrieben, in denen jemand die AfD verteidigt. ` +
      `Gerade deshalb steht bei jedem Eintrag die prüfbare Faktenlage vor der Bewertung – auch dort, wo sie der verteidigenden Position widerspricht. ` +
      `Ein Dossier, das sich mit einem einzigen Gegenlink widerlegen lässt, überzeugt niemanden.</p></div>` +
      `<h2>Wie die Einträge aufgebaut sind</h2>` +
      `<p class="section-intro">Jeder Eintrag hat vier Teile: die <b>Behauptung</b>, eine <b>Kurzfassung</b> der Beleglage, die ausführlichen <b>Belege</b> mit Zitaten und Zahlen sowie die <b>Quellen</b> mit Datum und Link. ` +
      `Vier Kennzeichnungen ordnen ein, wie tragfähig eine Aussage ist:</p>` +
      `<div class="legend">${chip('belegt')}${chip('teilweise')}${chip('nicht-belegt')}${chip('einordnung')}</div>` +
      `<p style="margin-top:14px;font-size:13.5px;color:var(--ink-2)"><b>Belegt</b> heißt: durch Dokument, Urteil, Amtsstatistik oder Programm nachweisbar. ` +
      `<b>Teilweise</b> heißt: im Kern richtig, in der Zuspitzung falsch. <b>Nicht belegt</b> heißt: für die Behauptung gibt es keine belastbare Grundlage. ` +
      `<b>Einordnung</b> heißt: Bewertung, Prognose oder Selbstbeschreibung – keine Tatsachenaussage.</p>`
    );
  }

  /* ---------- Abschnittsseite ---------- */

  function renderSection(sec) {
    const activeTag = state.tag;
    const list = sec.entries.filter((e) => activeTag === 'all' || e.tag === activeTag);
    const filters = [['all', 'Alle']].concat(Object.keys(TAGS).map((k) => [k, TAGS[k].label]));

    return (
      `<div class="kicker">${esc(sec.kicker)}</div>` +
      `<h1>${esc(sec.title)}</h1>` +
      `<p class="section-intro">${esc(sec.intro)}</p>` +
      `<div class="filters">` +
      filters.map(([key, label]) => `<button class="filter${activeTag === key ? ' active' : ''}" data-filter="${key}">${label}</button>`).join('') +
      `</div>` +
      `<div class="count-line">${list.length} von ${sec.entries.length} Einträgen</div>` +
      `<div style="margin-top:18px">${list.map(renderEntry).join('') || '<p class="empty">Kein Eintrag mit dieser Kennzeichnung.</p>'}</div>`
    );
  }

  /* ---------- Gesprächsleitfaden ---------- */

  function renderTalk() {
    const principles = TALK.principles.map(
      (p, i) =>
        `<div class="principle"><div class="principle-num">${String(i + 1).padStart(2, '0')}</div>` +
        `<h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`
    ).join('');

    const rows = TALK.replacements.map(
      (r) => `<tr><td>${esc(r.instead)}</td><td>${esc(r.better)}</td></tr>`
    ).join('');

    const media = TALK.mediaGuide;
    const mediaSteps = media
      ? media.steps
          .map(
            (s) =>
              `<div style="margin-bottom:12px"><h3 style="margin:0 0 4px;font-size:16px">${esc(s.title)}</h3>` +
              `<p style="margin:0;font-size:14px;color:var(--ink-2)">${esc(s.text)}</p></div>`
          )
          .join('')
      : '';
    const mediaRows = media
      ? media.swaps
          .map((r) => `<tr><td>${esc(r.instead)}</td><td>${esc(r.better)}</td></tr>`)
          .join('')
      : '';
    const mediaHtml = media
      ? `<h2>${esc(media.title)}</h2><p class="section-intro">${esc(media.intro)} ` +
        `<a href="#/medien-weidel" style="text-decoration:underline">Zum Abschnitt „Medien & Weidel“ →</a></p>` +
        `<div class="panel media-guide">${mediaSteps}</div>` +
        `<h3 style="margin:18px 0 8px">Drei Sätze, die Sie ersetzen können</h3>` +
        `<table class="swap"><thead><tr><th>Statt</th><th>Besser</th></tr></thead><tbody>${mediaRows}</tbody></table>`
      : '';

    return (
      `<div class="kicker">Praxis</div>` +
      `<h1>Gesprächsleitfaden</h1>` +
      `<p class="section-intro">Sechs Regeln und vier Satzersetzungen. Das Ziel ist nicht, jemanden zu besiegen, sondern ein Gespräch zu führen, ` +
      `in dem am Ende ein prüfbarer Satz steht. Wer sein Gegenüber beschämt, gewinnt die Debatte und verliert die Person.</p>` +
      `<div class="principles">${principles}</div>` +
      `<h2>Vier Sätze, die Sie ersetzen können</h2>` +
      `<table class="swap"><thead><tr><th>Statt</th><th>Besser</th></tr></thead><tbody>${rows}</tbody></table>` +
      mediaHtml +
      `<div class="panel"><div class="panel-title">Die schwierigste Frage</div>` +
      `<p style="margin:0;font-size:14px;color:var(--ink-2)">„Warum wählen 10,3 Millionen Menschen eine Partei, die der Verfassungsschutz als rechtsextremistisch einstuft?“ ` +
      `Diese Frage sollte man nicht mit „weil sie Nazis sind“ beantworten. Wer sie ernst nimmt, bekommt Antworten über Unzufriedenheit, Migration, Kosten und Vertrauen – ` +
      `und kann danach über die AfD reden, statt über ihre Wähler.</p></div>`
    );
  }

  /* ---------- Quellen ---------- */

  function renderSources() {
    const items = SOURCE_ROWS.map((s) => {
      return (
        `<li><div><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a>` +
        `<span class="s-meta">${esc(s.publisher)} · ${esc(s.date)} · ${esc(s.kind)}</span>` +
        `<span class="s-url">${esc(s.url)}</span></div></li>`
      );
    }).join('');

    return (
      `<div class="kicker">Register</div>` +
      `<h1>Quellen</h1>` +
      `<p class="section-intro">${SOURCE_ROWS.length} Belege, sortiert nach erster Verwendung. Alle Links öffnen sich im Systembrowser. ` +
      `Wo Behörden, Gerichte oder Parteien selbst sprechen, ist das als Quelle angegeben – auch dann, wenn die Aussage der Partei unbequem ist.</p>` +
      `<ol class="source-list">${items}</ol>`
    );
  }

  /* ---------- Druckansicht ---------- */

  function renderPrint() {
    const sections = SECTIONS.map(
      (sec) =>
        `<h2 class="print-section">${esc(sec.title)}</h2>` +
        `<p class="section-intro">${esc(sec.intro)}</p>` +
        sec.entries.map(renderEntry).join('')
    ).join('');

    const talk = TALK.principles.map(
      (p, i) =>
        `<div class="principle"><div class="principle-num">${String(i + 1).padStart(2, '0')}</div>` +
        `<h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`
    ).join('');

    const mediaPrint = TALK.mediaGuide
      ? `<h2 class="print-section">${esc(TALK.mediaGuide.title)}</h2>` +
        `<p class="section-intro">${esc(TALK.mediaGuide.intro)}</p>` +
        TALK.mediaGuide.steps
          .map((s) => `<div class="principle" style="grid-column:1/-1"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`)
          .join('') +
        `<table class="swap"><thead><tr><th>Statt</th><th>Besser</th></tr></thead><tbody>` +
        TALK.mediaGuide.swaps.map((r) => `<tr><td>${esc(r.instead)}</td><td>${esc(r.better)}</td></tr>`).join('') +
        `</tbody></table>`
      : '';

    return (
      `<div class="print-head"><div class="kicker">AfD-Dossier</div>` +
      `<h1>Vollständiges Dossier</h1>` +
      `<p class="section-intro">${esc(META.subtitle)}. Stand: ${esc(META.stand)}. ${ENTRIES.length} Einträge, ${SOURCE_ROWS.length} Quellen.</p></div>` +
      sections +
      `<h2 class="print-section">Gesprächsleitfaden</h2><div class="principles">${talk}</div>` + mediaPrint +
      `<h2 class="print-section">Quellen</h2>` +
      `<ol class="source-list">` +
      SOURCE_ROWS.map(
        (s) =>
          `<li><div><a href="${esc(s.url)}">${esc(s.title)}</a>` +
          `<span class="s-meta">${esc(s.publisher)} · ${esc(s.date)} · ${esc(s.kind)}</span>` +
          `<span class="s-url">${esc(s.url)}</span></div></li>`
      ).join('') +
      `</ol>`
    );
  }

  /* ---------- Suche ---------- */

  function renderSearch() {
    const q = state.query.trim().toLowerCase();
    const hits = ENTRIES.map((e) => {
      const hay = entryText(e).toLowerCase();
      if (!hay.includes(q)) return null;
      let score = 0;
      if (e.claim.toLowerCase().includes(q)) score += 5;
      if (e.verdict.toLowerCase().includes(q)) score += 3;
      score += (hay.split(q).length - 1);
      return { entry: e, score: score };
    }).filter(Boolean).sort((a, b) => b.score - a.score);

    if (!hits.length) {
      return (
        `<div class="search-head"><div class="kicker">Suche</div><h1>Kein Treffer</h1>` +
        `<p class="section-intro">Für „${esc(state.query)}“ gibt es keinen Eintrag. Versuchen Sie einen kürzeren Begriff – etwa „Höcke“, „Remigration“, „Brandmauer“ oder „Verfassungsschutz“.</p></div>`
      );
    }

    const rows = hits.map(({ entry }) => {
      const text = entryText(entry);
      const idx = text.toLowerCase().indexOf(q);
      const start = Math.max(0, idx - 90);
      const snippet = (start > 0 ? '… ' : '') + text.slice(start, start + 220).replace(/\s+/g, ' ') + ' …';
      return (
        `<div class="hit"><div class="hit-section">${esc(entry.sectionTitle)} ${chip(entry.tag)}</div>` +
        `<div class="hit-claim"><a href="#/${entry.section}/entry-${entry.id}">${mark(entry.claim, state.query)}</a></div>` +
        `<div class="snippet">${mark(snippet, state.query)}</div></div>`
      );
    }).join('');

    return (
      `<div class="search-head"><div class="kicker">Suche</div><h1>${hits.length} Treffer</h1>` +
      `<p class="section-intro">für „${esc(state.query)}“</p></div>` +
      rows
    );
  }

  /* ---------- Routing ---------- */

  function render() {
    document.documentElement.dataset.theme = state.theme;
    renderNav();
    updateProgress();

    if (state.query.trim()) {
      el.searchClear.hidden = false;
      el.view.innerHTML = renderSearch();
      return;
    }
    el.searchClear.hidden = true;

    const sec = SECTIONS.find((s) => s.id === state.route);
    if (state.route === 'start') el.view.innerHTML = renderStart();
    else if (state.route === 'gespraech') el.view.innerHTML = renderTalk();
    else if (state.route === 'quellen') el.view.innerHTML = renderSources();
    else if (state.route === 'druck') el.view.innerHTML = renderPrint();
    else if (sec) el.view.innerHTML = renderSection(sec);
    else el.view.innerHTML = renderStart();

    el.view.scrollTop = 0;
    document.querySelector('.main').scrollTop = 0;
  }

  function go(route) {
    state.route = route;
    state.query = '';
    el.search.value = '';
    if (location.hash !== '#/' + route) location.hash = '#/' + route;
    render();
  }

  function routeFromHash() {
    const raw = (location.hash || '').replace(/^#\/?/, '');
    if (!raw) return 'start';
    const parts = raw.split('/');
    if (parts[0] === 'start' || parts[0] === 'gespraech' || parts[0] === 'quellen' || parts[0] === 'druck') return parts[0];
    if (SECTIONS.some((s) => s.id === parts[0])) return parts[0];
    return 'start';
  }

  /* ---------- Ereignisse ---------- */

  el.view.addEventListener('click', (ev) => {
    const filterBtn = ev.target.closest('[data-filter]');
    if (filterBtn) {
      state.tag = filterBtn.dataset.filter;
      render();
      return;
    }

    const link = ev.target.closest('a[href^="#/"]');
    if (link) {
      const raw = link.getAttribute('href').replace(/^#\//, '');
      const parts = raw.split('/');
      state.route = parts[0];
      state.query = '';
      state.tag = 'all';
      el.search.value = '';
      el.searchClear.hidden = true;
      if (el.sidebar.classList.contains('open')) el.sidebar.classList.remove('open');
      render();
      if (parts[1]) {
        const target = document.getElementById(parts[1]);
        if (target) window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40);
      }
    }
  });

  el.view.addEventListener('change', (ev) => {
    const box = ev.target.closest('[data-read]');
    if (!box) return;
    const id = box.dataset.read;
    if (box.checked) state.read.add(id);
    else state.read.delete(id);
    saveRead();
    updateProgress();
    const card = document.getElementById('entry-' + id);
    if (card) card.classList.toggle('is-read', box.checked);
  });

  el.search.addEventListener('input', () => {
    state.query = el.search.value;
    render();
  });

  el.searchClear.addEventListener('click', () => {
    el.search.value = '';
    state.query = '';
    render();
    el.search.focus();
  });

  el.themeBtn.addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('dossier-theme', state.theme);
    document.documentElement.dataset.theme = state.theme;
  });

  el.printBtn.addEventListener('click', () => window.print());

  el.menuBtn.addEventListener('click', () => el.sidebar.classList.toggle('open'));

  // Auf schmalen Bildschirmen liegt die Navigation als Schublade über dem Inhalt:
  // nach der Auswahl wieder schließen (Desktop bleibt unberührt, da nie offen).
  el.nav.addEventListener('click', (ev) => {
    if (ev.target.closest('a[href^="#/"]')) el.sidebar.classList.remove('open');
  });

  document.addEventListener('keydown', (ev) => {
    const inField = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
    if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === 'f') {
      ev.preventDefault();
      el.search.focus();
      el.search.select();
      return;
    }
    if (ev.key === '/' && !inField) {
      ev.preventDefault();
      el.search.focus();
      return;
    }
    if (ev.key === 'Escape') {
      if (state.query) {
        el.search.value = '';
        state.query = '';
        render();
      }
      el.sidebar.classList.remove('open');
    }
  });

  window.addEventListener('hashchange', () => {
    state.route = routeFromHash();
    state.tag = 'all';
    render();
  });

  /* ---------- Start ---------- */

  state.route = routeFromHash();
  el.standText.textContent = META.stand;
  document.documentElement.dataset.theme = state.theme;
  render();
  window.__DOSSIER_STATS__ = { entries: ENTRIES.length, sources: SOURCE_ROWS.length };
  window.__DOSSIER_OK__ = true;
})();
