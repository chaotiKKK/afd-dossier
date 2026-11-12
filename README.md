# AfD-Dossier – Windows-Desktop-App

Ein quellenbasiertes Nachschlagewerk für politische Gespräche über die AfD. Jeder Eintrag trennt
**Behauptung**, **Beleglage** und **Bewertung** und nennt Quelle, Datum und Link.

Aktueller Stand: **69 Einträge**, **155 Quellen**, neun Abschnitte.

## Herunterladen

Fertige Windows-Builds liegen unter [Releases](../../releases):

- `AfD-Dossier-<version>.exe` – Installer (NSIS), installiert die App im Benutzerprofil.
- Portable Variante: das Archiv mit `AfD-Dossier.exe` ohne Installation starten.

Die Builds sind nicht code-signiert. Windows zeigt beim ersten Start deshalb den SmartScreen-Hinweis
(„Weitere Informationen“ → „Trotzdem ausführen“). Die App enthält keine Netzwerkverbindung außer den
Quellenlinks, die im Systembrowser geöffnet werden.

## Starten (aus dem Quellcode)

```bash
npm install
npm start
```

## Windows-App bauen

```bash
npm run dist            # portable Anwendung: dist/win-unpacked/AfD-Dossier.exe
npm run dist:installer  # Installer: dist/AfD-Dossier-<version>.exe
```

Ein Tag `v*` löst den Workflow `.github/workflows/release.yml` aus: Er baut den Installer auf
`windows-latest`, setzt die Version aus dem Tag und hängt das Artefakt an das Release.

## Bedienung

- **Navigation** links: Start, Die größten Vorwürfe, Migrationsdeutsche in der AfD,
  Demokratie & Brandmauer, Hitler-Vergleich, Die zehn häufigsten Gegenargumente,
  Was AfD-Anhänger sagen, Parole & Begriffe, Medien & Weidel, Gesprächsleitfaden, Quellen.
- **Suche**: `Strg+F` oder `/`, durchsucht Behauptungen, Belege und Quellentitel.
- **Filter**: Belegt / Teilweise / Nicht belegt / Einordnung.
- **Gelesen-Häkchen** pro Eintrag, Fortschritt wird lokal gespeichert.
- **Drucken / PDF**: `Strg+P`, druckt die aktuelle Ansicht inklusive Quellen-URLs.
- **Hell/Dunkel**: Schaltfläche oben rechts.

## Prüfmodi (nur für Entwicklung)

```bash
./dist/win-unpacked/AfD-Dossier.exe --smoke    # rendert alle Abschnitte, prüft Zähler
./dist/win-unpacked/AfD-Dossier.exe --checks   # testet Suche, Filter, Lesefortschritt, Quellenlinks
./dist/win-unpacked/AfD-Dossier.exe --shots    # schreibt Screenshots aller Ansichten nach screens/
./dist/win-unpacked/AfD-Dossier.exe --pdf      # schreibt print/AfD-Dossier.pdf (Druckansicht)
```

Setzt `DOSSIER_OUT` das Ausgabeverzeichnis, sonst das aktuelle Arbeitsverzeichnis.

## Aufbau

```
src/
  main.js              Electron-Hauptprozess, Menü, externe Links, Prüfmodi
  preload.js           isolierter Kontext
  index.html           Grundgerüst
  styles.css           Gestaltung (Papier/Obsidian, Druckansicht)
  app.js               Rendering, Suche, Filter, Lesefortschritt
  data/
    sources.js         Quellenregister (ID → Titel, Herausgeber, Datum, URL)
    meta.js            Kopfdaten, Kennzahlen, Gesprächsleitfaden
    vorwuerfe-*.js     Faktencheck-Einträge
    mitglieder.js      Migrationsdeutsche in der AfD
    demokratie.js      Wahlen, Brandmauer, Parlamentsämter
    hitler.js          Hitler-Vergleich, Höcke, Flügel
    gegenargumente-*.js  Häufige Gegenargumente und ihre Beleglage
    afd-argumente.js   Argumente von AfD-Anhängern, belegt eingeordnet
    parole-begriffe.js  NS-Vokabular, Urteile, Begriffsklärungen
    medien-weidel.js   Fernsehinterviews, Fachbegriffe, Pressestrategie
```

## Inhaltlicher Grundsatz

Das Dossier ist parteilich – es ist für Gespräche gedacht, in denen jemand die AfD verteidigt.
Gerade deshalb steht bei jedem Eintrag zuerst die prüfbare Faktenlage. Wo die Belege die
verteidigende Position nicht stützen, sagt der Eintrag das. Ein Dossier, das sich mit einem
einzigen Gegenlink widerlegen lässt, überzeugt niemanden.

Jede Kennzeichnung ist nachvollziehbar: **Belegt**, **Teilweise belegt**, **Nicht belegt** und
**Einordnung**. Nicht verifizierbare Behauptungen – etwa eine angebliche Klagewelle gegen Sender
oder erfundene Fachbegriffe – stehen ausdrücklich als „nicht belegt“ im Text, statt als Tatsache.

Quellen sind verlinkt und datiert; die App enthält keine Verbindung ins Netz außer den Links,
die im Systembrowser geöffnet werden. Es werden keine Nutzerdaten erhoben.
