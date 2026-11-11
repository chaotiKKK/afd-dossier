'use strict';

const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const path = require('path');

const SMOKE = process.argv.includes('--smoke');
const SHOTS = process.argv.includes('--shots');
const PDF = process.argv.includes('--pdf');
const CHECKS = process.argv.includes('--checks');
const OUT_DIR = process.env.DOSSIER_OUT || process.cwd();
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 920,
    minWidth: 980,
    minHeight: 640,
    show: !SMOKE,
    backgroundColor: '#11131a',
    title: 'AfD-Dossier',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Externe Quellen immer im Systembrowser öffnen, nie in der App.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) {
      event.preventDefault();
      if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (SMOKE) {
    mainWindow.webContents.once('did-finish-load', async () => {
      try {
        const script = [
          '(async () => {',
          '  const out = {};',
          '  const ids = window.DOSSIER_SECTIONS.map((s) => s.id);',
          '  for (const id of ids) {',
          '    location.hash = "#/" + id;',
          '    await new Promise((r) => setTimeout(r, 80));',
          '    out[id] = document.querySelectorAll(".entry").length;',
          '  }',
          '  location.hash = "#/quellen";',
          '  await new Promise((r) => setTimeout(r, 80));',
          '  out.quellen = document.querySelectorAll(".source-list li").length;',
          '  location.hash = "#/gespraech";',
          '  await new Promise((r) => setTimeout(r, 80));',
          '  out.gespraech = document.querySelectorAll(".principle").length;',
          '  location.hash = "#/start";',
          '  await new Promise((r) => setTimeout(r, 80));',
          '  out.thesen = document.querySelectorAll(".these").length;',
          '  out.expected = Object.fromEntries(window.DOSSIER_SECTIONS.map((s) => [s.id, s.entries.length]));',
          '  out.sources = window.DOSSIER_SOURCES.length;',
          '  out.flag = window.__DOSSIER_OK__ === true;',
          '  return JSON.stringify(out);',
          '})()'
        ].join('\n');
        const report = JSON.parse(await mainWindow.webContents.executeJavaScript(script));
        const sectionsOk = Object.keys(report.expected).every((id) => report[id] === report.expected[id]);
        const ok = report.flag && sectionsOk && report.quellen === report.sources && report.gespraech === 6 && report.thesen === 4;
        console.log((ok ? 'SMOKE_OK ' : 'SMOKE_FAIL ') + JSON.stringify(report));
        app.exit(ok ? 0 : 1);
      } catch (err) {
        console.log('SMOKE_ERROR ' + err.message);
        app.exit(1);
      }
    });
  }

  if (SHOTS) {
    mainWindow.webContents.once('did-finish-load', async () => {
      const fs = require('fs');
      try {
        const dir = path.join(OUT_DIR, 'screens');
        fs.mkdirSync(dir, { recursive: true });
        mainWindow.setMinimumSize(480, 480);
        const shots = [
          ['01-start', 'start', 'light', 0, 0],
          ['02-vorwuerfe', 'vorwuerfe', 'light', 0, 0],
          ['03-vorwuerfe-scroll', 'vorwuerfe', 'light', 1200, 0],
          ['04-mitglieder', 'mitglieder', 'light', 0, 0],
          ['05-demokratie', 'demokratie', 'light', 0, 0],
          ['06-hitler', 'hitler', 'light', 0, 0],
          ['07-gegenargumente', 'gegenargumente', 'light', 0, 0],
          ['08-gegenargumente-scroll', 'gegenargumente', 'light', 900, 0],
          ['15-afd-argumente', 'afd-argumente', 'light', 0, 0],
          ['16-parole-begriffe', 'parole-begriffe', 'light', 0, 0],
          ['17-medien-weidel', 'medien-weidel', 'light', 0, 0],
          ['09-gespraech', 'gespraech', 'light', 0, 0],
          ['10-quellen', 'quellen', 'light', 0, 0],
          ['11-start-dark', 'start', 'dark', 0, 0],
          ['12-quellen-dark', 'quellen', 'dark', 0, 0],
          ['13-schmal-vorwuerfe', 'vorwuerfe', 'light', 0, 760]
        ];
        for (const shot of shots) {
          const name = shot[0];
          const route = shot[1];
          const theme = shot[2];
          const scroll = shot[3];
          const width = shot[4] || 1280;
          mainWindow.setSize(width, 900);
          await mainWindow.webContents.executeJavaScript("location.hash = '#/" + route + "';");
          await sleep(650);
          await mainWindow.webContents.executeJavaScript(
            "document.documentElement.dataset.theme = '" + theme + "';" +
            "var m = document.querySelector('.main'); if (m) { m.scrollTop = " + scroll + "; }"
          );
          await sleep(300);
          const heading = await mainWindow.webContents.executeJavaScript(
            "(document.querySelector('.view h1') || {}).textContent || ''"
          );
          const image = await mainWindow.webContents.capturePage();
          fs.writeFileSync(path.join(dir, name + '.png'), image.toPNG());
          console.log('SHOT ' + name + ' ' + width + 'px ' + theme + ' h1="' + String(heading).trim() + '"');
        }
        mainWindow.setSize(760, 900);
        await mainWindow.webContents.executeJavaScript("location.hash = '#/vorwuerfe';");
        await sleep(650);
        await mainWindow.webContents.executeJavaScript(
          "document.documentElement.dataset.theme = 'light'; document.getElementById('menuBtn').click();"
        );
        await sleep(420);
        const menuImage = await mainWindow.webContents.capturePage();
        fs.writeFileSync(path.join(dir, '14-schmal-menu.png'), menuImage.toPNG());
        console.log('SHOT 14-schmal-menu 760px light (Navigation offen)');

        console.log('SHOTS_DONE ' + dir);
        app.exit(0);
      } catch (err) {
        console.log('SHOTS_ERROR ' + err.stack);
        app.exit(1);
      }
    });
  }

  if (PDF) {
    mainWindow.webContents.once('did-finish-load', async () => {
      const fs = require('fs');
      try {
        const dir = path.join(OUT_DIR, 'print');
        fs.mkdirSync(dir, { recursive: true });
        await mainWindow.webContents.executeJavaScript("location.hash = '#/druck';");
        await sleep(1200);
        const diag = await mainWindow.webContents.executeJavaScript(
          "JSON.stringify({ theme: document.documentElement.dataset.theme, scheme: getComputedStyle(document.documentElement).colorScheme })"
        );
        console.log('PDF_DIAG ' + diag);
        mainWindow.setBackgroundColor('#ffffff');
        await sleep(200);
        const data = await mainWindow.webContents.printToPDF({ printBackground: true, pageSize: 'A4' });
        const file = path.join(dir, 'AfD-Dossier.pdf');
        fs.writeFileSync(file, data);
        console.log('PDF_OK ' + file + ' bytes=' + data.length);
        app.exit(0);
      } catch (err) {
        console.log('PDF_ERROR ' + err.stack);
        app.exit(1);
      }
    });
  }

  if (CHECKS) {
    mainWindow.webContents.once('did-finish-load', async () => {
      try {
        const script = [
          '(async () => {',
          '  const q = (s) => document.querySelector(s);',
          '  const qa = (s) => Array.from(document.querySelectorAll(s));',
          '  const wait = (ms) => new Promise((r) => setTimeout(r, ms));',
          '  const out = { sections: {}, errors: [] };',
          '  window.addEventListener("error", (e) => out.errors.push(String(e.message)));',
          '  const input = q("#search");',
          '  input.value = "Höcke";',
          '  input.dispatchEvent(new Event("input", { bubbles: true }));',
          '  await wait(180);',
          '  out.searchHits = qa(".hit").length;',
          '  out.searchMarks = qa("mark").length;',
          '  input.value = "";',
          '  input.dispatchEvent(new Event("input", { bubbles: true }));',
          '  await wait(140);',
          '  location.hash = "#/vorwuerfe";',
          '  await wait(320);',
          '  const byLabel = (label) => qa(".filter").find((b) => b.textContent.trim() === label);',
          '  byLabel("Belegt").click();',
          '  await wait(180);',
          '  out.filtered = qa(".entry").length;',
          '  out.filteredAllBelegt = qa(".entry").every((e) => e.classList.contains("t-belegt"));',
          '  byLabel("Alle").click();',
          '  await wait(160);',
          '  out.unfiltered = qa(".entry").length;',
          '  const box = q("[data-read]");',
          '  box.click();',
          '  await wait(160);',
          '  out.progressAfterRead = q("#progressText").textContent.trim();',
          '  box.click();',
          '  await wait(100);',
          '  out.progressAfterUnread = q("#progressText").textContent.trim();',
          '  location.hash = "#/quellen";',
          '  await wait(320);',
          '  const links = qa(".source-list a");',
          '  out.sourceLinks = links.length;',
          '  out.badLinks = links.filter((a) => !/^https:\\/\\//.test(a.getAttribute("href"))).length;',
          '  for (const s of window.DOSSIER_SECTIONS) {',
          '    location.hash = "#/" + s.id;',
          '    await wait(240);',
          '    out.sections[s.id] = qa(".entry").length;',
          '  }',
          '  out.expected = Object.fromEntries(window.DOSSIER_SECTIONS.map((s) => [s.id, s.entries.length]));',
          '  out.stats = window.__DOSSIER_STATS__;',
          '  return JSON.stringify(out);',
          '})()'
        ].join('\n');

        const report = JSON.parse(await mainWindow.webContents.executeJavaScript(script));
        const sectionsOk = Object.keys(report.expected).every((id) => report.sections[id] === report.expected[id]);
        const ok =
          report.searchHits > 0 &&
          report.searchMarks > 0 &&
          report.filtered > 0 &&
          report.filteredAllBelegt &&
          report.unfiltered === report.expected.vorwuerfe &&
          report.progressAfterRead.startsWith('1 /') &&
          report.progressAfterUnread.startsWith('0 /') &&
          report.sourceLinks === report.stats.sources &&
          report.badLinks === 0 &&
          sectionsOk &&
          report.errors.length === 0;

        console.log((ok ? 'CHECKS_OK ' : 'CHECKS_FAIL ') + JSON.stringify(report));
        app.exit(ok ? 0 : 1);
      } catch (err) {
        console.log('CHECKS_ERROR ' + err.stack);
        app.exit(1);
      }
    });
  }

  return mainWindow;
}

function buildMenu() {
  const template = [
    {
      label: 'Datei',
      submenu: [
        {
          label: 'Als PDF drucken / speichern',
          accelerator: 'CmdOrCtrl+P',
          click: () => {
            if (!mainWindow) return;
            mainWindow.webContents.print({ silent: false, printBackground: true });
          }
        },
        { type: 'separator' },
        { role: 'quit', label: 'Beenden' }
      ]
    },
    {
      label: 'Ansicht',
      submenu: [
        { role: 'reload', label: 'Neu laden' },
        { role: 'resetZoom', label: 'Zoom zurücksetzen' },
        { role: 'zoomIn', label: 'Vergrößern' },
        { role: 'zoomOut', label: 'Verkleinern' },
        { type: 'separator' },
        { role: 'togglefullscreen', label: 'Vollbild' }
      ]
    },
    {
      label: 'Hilfe',
      submenu: [
        {
          label: 'Über dieses Dossier',
          click: () => {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'Über dieses Dossier',
              message: 'AfD-Dossier',
              detail:
                'Ein quellenbasiertes Nachschlagewerk für politische Gespräche.\n\n' +
                'Alle Aussagen sind mit Quelle, Datum und Link hinterlegt. ' +
                'Bewertungen sind als Einordnung gekennzeichnet und von belegten Fakten getrennt.\n\n' +
                'Keine Verbindung ins Internet außer den Quellenlinks, die im Systembrowser geöffnet werden.'
            });
          }
        }
      ]
    }
  ];
  return Menu.buildFromTemplate(template);
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(buildMenu());
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
