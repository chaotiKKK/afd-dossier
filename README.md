# AfD-Dossier – Windows- und Android-App

Ein quellenbasiertes Nachschlagewerk für politische Gespräche über die AfD. Jeder Eintrag trennt
**Behauptung**, **Beleglage** und **Bewertung** und nennt Quelle, Datum und Link.

Aktueller Stand: **69 Einträge**, **155 Quellen**, neun Abschnitte.

## Herunterladen

Fertige Builds liegen unter [Releases](../../releases):

- `AfD-Dossier-<version>.exe` – Windows-Installer (NSIS), installiert die App im Benutzerprofil.
- Portable Variante: das Archiv mit `AfD-Dossier.exe` ohne Installation starten.
- `AfD-Dossier-<version>.apk` – Android-App mit dem vollständigen Dossier (ab Android 7.0).
- `AfD-Check-<version>.apk` – eigenständige Android-Check-App: 22 Behauptungen, vier Kategorien, je datierte Quellen.

Beide Android-Apps brauchen keine Netzwerkberechtigung; Installation aus unbekannten Quellen erlauben.

### Prüfsummen (SHA-256)

| Datei | SHA-256 |
| --- | --- |
| `AfD-Check-1.0.0.apk` | `b291322d64625edb22f4490b2b0f4429a64f0e13697eab5fd625066c6092ec33` |
| `AfD-Dossier-1.0.0.apk` | `5b0f3c97bebae773891e242b6fbce2c05a9d77e66ce298fa51d3b0f9608e4eae` |
| `AfD-Dossier-1.0.0.exe` | `65f77cb518c6be9ae26d2d4f5c35f1d2e736d6ed6a558d806506f1b466f0748b` |

Prüfen mit `sha256sum <datei>` (Linux/macOS) oder `Get-FileHash <datei> -Algorithm SHA256` (Windows).
Die Werte gelten für die Dateien im Release `afd-check-1.0.0` bzw. `v1.0.0`.

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

Ein Tag `v*` löst den Workflow `.github/workflows/release.yml` aus: Er baut den Windows-Installer und
die Android-APK, setzt die Version aus dem Tag und hängt beide Artefakte an das Release.

### Android-APK bauen

Voraussetzungen: JDK 17 oder neuer sowie ein Android-SDK mit Plattform 35 und Build-Tools 35.0.0.

```bash
cd android
./gradlew :app:assembleRelease   -PdossierVersion=1.0.0 -PdossierVersionCode=1  # vollständiges Dossier
./gradlew :check:assembleRelease -PdossierVersion=1.0.0 -PdossierVersionCode=1  # AfD-Check
# Ergebnis: app/build/outputs/apk/release/app-release.apk
#           check/build/outputs/apk/release/check-release.apk
```

Ohne `android/keystore/dossier-release.jks` signiert der Build mit dem Debug-Schlüssel. Für die
Release-Signatur die Umgebungsvariablen `DOSSIER_KEYSTORE`, `DOSSIER_KEYSTORE_PASSWORD`,
`DOSSIER_KEY_ALIAS` und `DOSSIER_KEY_PASSWORD` setzen; im CI kommen Schlüssel und Passwort aus
den Repository-Secrets. Die Web-Oberfläche wird beim Build aus `src/` in die App-Assets kopiert –
es gibt nur eine Inhaltsquelle für Windows und Android.

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
afd-check/
  www/               AfD-Check-Oberfläche (HTML/CSS/JS, offline)
  www/data/          Einträge mit Behauptung, Kategorie, Begründung, Quellen
android/
  app/src/main/      Android-Hülle des Dossiers (WebView, Manifest, Theme, Icons)
  app/src/main/java  MainActivity: liefert src/ offline aus, öffnet Quellen im Browser
  check/src/main/    Android-Hülle der Check-App (Assets aus afd-check/www)
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
