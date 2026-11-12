'use strict';

(() => {
  const DATA = window.CHECK_DATA;
  const CATS = DATA.categories;
  const state = { query: '', category: 'alle' };

  const el = {
    list: document.getElementById('list'),
    chips: document.getElementById('chips'),
    q: document.getElementById('q'),
    intro: document.getElementById('intro'),
    stand: document.getElementById('stand'),
    legend: document.getElementById('legend')
  };

  const ALL_ENTRIES = DATA.topics.flatMap((t) =>
    t.entries.map((e) => Object.assign({}, e, { topic: t.title, topicId: t.id }))
  );

  function esc(v) {
    return String(v)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function catMeta(id) {
    return CATS.find((c) => c.id === id) || CATS[0];
  }

  // Umlaute angleichen, damit „Hoecke“ und „Höcke“ dasselbe finden.
  function norm(value) {
    return String(value)
      .toLowerCase()
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss');
  }

  function matches(entry, q) {
    if (!q) return true;
    const hay = norm(
      [
        entry.claim,
        entry.verdict,
        entry.nuance || '',
        entry.topic,
        ...entry.sources.map((s) => s.title + ' ' + s.publisher)
      ].join(' ')
    );
    return hay.includes(norm(q));
  }

  function renderChips() {
    const counts = { alle: ALL_ENTRIES.length };
    CATS.forEach((c) => {
      counts[c.id] = ALL_ENTRIES.filter((e) => e.category === c.id).length;
    });

    const items = [{ id: 'alle', label: 'Alle' }].concat(CATS);
    el.chips.innerHTML = items
      .map(
        (c) =>
          `<button class="chip${c.id === 'alle' ? '' : ' c-' + c.id}${state.category === c.id ? ' is-active' : ''}"` +
          ` data-cat="${c.id}" aria-pressed="${state.category === c.id}">` +
          `${esc(c.label)}<strong>${counts[c.id]}</strong></button>`
      )
      .join('');
  }

  function renderCard(entry) {
    const meta = catMeta(entry.category);
    const sources = entry.sources
      .map(
        (s) =>
          `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}` +
          `<span class="src-meta">${esc(s.publisher)} · ${esc(s.date)}</span></a></li>`
      )
      .join('');

    return (
      `<article class="card" data-id="${esc(entry.id)}">` +
      `<span class="badge b-${esc(entry.category)}">${esc(meta.label)}</span>` +
      `<h3 class="claim">${esc(entry.claim)}</h3>` +
      `<p class="verdict">${esc(entry.verdict)}</p>` +
      (entry.nuance
        ? `<p class="nuance"><b>Was daraus nicht folgt:</b> ${esc(entry.nuance)}</p>`
        : '') +
      `<div class="sources"><div class="sources-title">Quellen (${entry.sources.length})</div>` +
      `<ul>${sources}</ul></div>` +
      `</article>`
    );
  }

  function render() {
    const q = state.query.trim();

    const visible = ALL_ENTRIES.filter(
      (e) => (state.category === 'alle' || e.category === state.category) && matches(e, q)
    );

    renderChips();

    if (!visible.length) {
      const cat = state.category === 'alle' ? '' : ` in der Kategorie „${catMeta(state.category).label}“`;
      el.list.innerHTML =
        `<p class="empty">Kein Eintrag${esc(cat)}.<br />Versuchen Sie einen kürzeren Begriff – etwa „Höcke“, „Remigration“ oder „Verfassungsschutz“.</p>`;
      return;
    }

    let html = '';
    DATA.topics.forEach((topic) => {
      const entries = visible.filter((e) => e.topicId === topic.id);
      if (!entries.length) return;
      html +=
        `<div class="topic-head"><h2>${esc(topic.title)}</h2>` +
        `<p class="topic-meta">${entries.length} ${entries.length === 1 ? 'Eintrag' : 'Einträge'} · ${esc(topic.intro)}</p></div>`;
      html += entries.map(renderCard).join('');
    });

    html +=
      `<p class="result-line">${visible.length} von ${ALL_ENTRIES.length} Einträgen` +
      (q ? ` für „${esc(state.query.trim())}“` : '') +
      `</p>`;

    el.list.innerHTML = html;
  }

  el.q.addEventListener('input', () => {
    state.query = el.q.value;
    render();
  });

  el.chips.addEventListener('click', (ev) => {
    const btn = ev.target.closest('[data-cat]');
    if (!btn) return;
    state.category = btn.dataset.cat;
    render();
  });

  el.intro.textContent = DATA.intro;
  el.stand.textContent = DATA.stand;
  el.legend.innerHTML = CATS.map(
    (c) => `<dt>${esc(c.label)}</dt><dd>${esc(c.hint)}</dd>`
  ).join('');

  render();

  window.__CHECK_STATS__ = {
    entries: ALL_ENTRIES.length,
    sources: ALL_ENTRIES.reduce((n, e) => n + e.sources.length, 0),
    categories: CATS.map((c) => c.id)
  };
  window.__CHECK_OK__ = true;
})();
