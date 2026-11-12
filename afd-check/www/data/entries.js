/* Inhaltsbestand der AfD-Check-App.
   Jeder Eintrag: Behauptung im Wortlaut, Kategorie, Begründung, Quelle(n) mit Datum und Link.
   Quellen sind durchgehend bereits im Dossier verwendete, nachprüfbare Belege. */
window.CHECK_DATA = {
  stand: '12. November 2026',
  intro:
    'Dieses Werkzeug prüft wiederkehrende Behauptungen über die AfD einzeln. Jeder Eintrag nennt den ' +
    'Wortlaut der Behauptung, eine Einordnung in vier Kategorien, eine kurze Begründung und mindestens ' +
    'eine datierte Quelle. Wo ein Vorwurf zutrifft, steht das genauso drin wie eine widerlegte Falschbehauptung.',
  categories: [
    { id: 'belegt', label: 'Belegt', hint: 'Die Aussage trifft nachprüfbar zu.' },
    { id: 'widerlegt', label: 'Widerlegt', hint: 'Die Aussage ist nachprüfbar falsch.' },
    { id: 'nicht-belegt', label: 'Nicht belegt', hint: 'Für die Aussage gibt es keinen Beleg.' },
    { id: 'umstritten', label: 'Umstritten', hint: 'Belege stützen beide Seiten; offen.' }
  ],
  topics: [
    {
      id: 'verfassungsschutz',
      title: 'Verfassungsschutz & Extremismus',
      intro: 'Was Behörden und Gerichte tatsächlich festgestellt haben – und was daraus nicht folgt.',
      entries: [
        {
          id: 'vs-einstufung',
          claim: '„Das Bundesamt für Verfassungsschutz hat die AfD als gesichert rechtsextremistische Bestrebung eingestuft.“',
          category: 'belegt',
          verdict:
            'Zutreffend für den 2. Mai 2025: An diesem Tag stufte das Bundesamt für Verfassungsschutz die Gesamtpartei ' +
            'so ein und veröffentlichte die Begründung in einem rund 1.100 Seiten umfassenden Gutachten. Die Einstufung ' +
            'ist eine behördliche Bewertung, keine gerichtliche Feststellung – sie war anschließend Gegenstand von Eilverfahren.',
          nuance:
            'Die Einstufung sagt nichts über einzelne Wähler. Der Vollzug der Einstufung ist derzeit ausgesetzt; ' +
            'die behördliche Bewertung selbst bleibt davon unberührt.',
          sources: [
            { title: 'AfD laut Verfassungsschutz gesichert rechtsextremistisch', publisher: 'Deutsche Welle', date: '02.05.2025', url: 'https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368' },
            { title: 'Medien veröffentlichen Verfassungsschutz-Gutachten zur AfD', publisher: 'tagesschau.de', date: '14.05.2025', url: 'https://www.tagesschau.de/inland/afd-medien-publizieren-verfassungsschutz-gutachten-100.html' }
          ]
        },
        {
          id: 'vs-rechtskraft',
          claim: '„Die Einstufung der AfD als gesichert rechtsextremistisch ist rechtskräftig.“',
          category: 'widerlegt',
          verdict:
            'Falsch. Rechtskräftig ist die Einstufung als Verdachtsfall: Das Bundesverwaltungsgericht ließ am 22. Juli 2025 ' +
            'die Revision gegen die Urteile des OVG Münster nicht zu. Für die höherstufige Einstufung als gesichert ' +
            'rechtsextremistisch gab das Bundesamt im Mai 2025 dagegen eine Stillhaltezusage ab; das Verwaltungsgericht Köln ' +
            'entschied im Eilverfahren, dass die Einstufung bis zur Hauptsache nicht vollzogen wird.',
          nuance:
            'Wer „rechtskräftig“ sagt, verwechselt zwei verschiedene Einstufungen mit unterschiedlichem Verfahrensstand.',
          sources: [
            { title: 'Keine Zulassung der Revision zur Einstufung als „Verdachtsfall“ (BVerwG 6 B 23.24)', publisher: 'Bundesverwaltungsgericht', date: '22.07.2025', url: 'https://www.bverwg.de/pm/2025/54' },
            { title: '„Stillhaltezusage“ im AfD-Eilverfahren (Az. 13 L 1109/25)', publisher: 'Verwaltungsgericht Köln', date: '08.05.2025', url: 'https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/Archiv/2025/05_08052025/' },
            { title: 'Gerichte: Ab wann gilt die Partei als „gesichert rechtsextremistisch“?', publisher: 'CORRECTIV', date: '05.03.2026', url: 'https://correctiv.org/aktuelles/afd/2026/03/05/justiz-ab-wann-ist-die-afd-gesichert-rechtsextrem/' }
          ]
        },
        {
          id: 'vs-laender',
          claim: '„Die AfD ist in allen Bundesländern als gesichert rechtsextremistisch eingestuft.“',
          category: 'widerlegt',
          verdict:
            'Falsch. Die Landesverfassungsschutzämter bewerten die Landesverbände unterschiedlich: Einige sind als gesichert ' +
            'rechtsextremistische Bestrebung eingestuft – etwa Sachsen, wo das Sächsische Oberverwaltungsgericht die Einstufung ' +
            '2025 bestätigte –, andere nur als Verdachtsfall oder gar nicht. Eine einheitliche Einstufung aller Landesverbände gibt es nicht.',
          sources: [
            { title: 'Wie stuft der Verfassungsschutz die AfD in den Bundesländern ein?', publisher: 'CORRECTIV', date: '17.06.2026', url: 'https://correctiv.org/aktuelles/afd/2026/06/17/wie-stuft-der-verfassungsschutz-die-afd-in-den-bundeslaendern-ein' },
            { title: 'Sächsischer AfD-Landesverband als gesichert rechtsextremistische Bestrebung eingestuft', publisher: 'Landesamt für Verfassungsschutz Sachsen', date: '08.12.2023', url: 'https://www.medienservice.sachsen.de/medien/news/1071656/download_pdf' },
            { title: 'Beschwerde des AfD-Landesverbands Sachsen erfolglos (SächsOVG 3 B 127/24)', publisher: 'Sächsisches Oberverwaltungsgericht', date: '21.01.2025', url: 'https://www.medienservice.sachsen.de/medien/news/1083988/download_pdf' }
          ]
        },
        {
          id: 'vs-verbot',
          claim: '„Die AfD ist inzwischen verboten.“',
          category: 'widerlegt',
          verdict:
            'Falsch. Ein Parteiverbot kann nach Artikel 21 des Grundgesetzes nur das Bundesverfassungsgericht aussprechen. ' +
            'Ein solches Verfahren ist nicht abgeschlossen, ein Verbot nicht ausgesprochen. Die Partei tritt weiter zu Wahlen an – ' +
            '2025 mit 20,8 Prozent der Zweitstimmen.',
          sources: [
            { title: 'Grundgesetz, Artikel 21 (Parteien)', publisher: 'Bundesministerium der Justiz', date: '24.05.1949, Fassung laufend', url: 'https://www.gesetze-im-internet.de/gg/art_21.html' },
            { title: 'Nach Wahlsieg: Wie liefe ein AfD-Verbotsverfahren?', publisher: 'WDR', date: '08.09.2026', url: 'https://www1.wdr.de/politik/afd-ablauf-parteiverbotsverfahren-100.html' }
          ]
        }
      ]
    },
    {
      id: 'ns-bezuege',
      title: 'Hitler-Vergleich & NS-Bezüge',
      intro: 'Was sich belegen lässt – und warum der große Vergleich nicht dazu gehört.',
      entries: [
        {
          id: 'ns-vergleich',
          claim: '„Die AfD ist der neue Hitler.“ / „Die AfD ist eine Nazi-Partei.“',
          category: 'nicht-belegt',
          verdict:
            'Als Tatsachenbehauptung nicht belegbar. Ein historischer Vergleich dieser Art lässt sich nicht überprüfen, und für ' +
            'eine kollektive Gleichsetzung von Partei und NS-Regime gibt es keine belastbare Grundlage. Belegbar sind dagegen ' +
            'einzelne NS-Bezüge und Verurteilungen – etwa die rechtskräftige Verurteilung Björn Höckes wegen der SA-Parole ' +
            '„Alles für Deutschland“.',
          nuance:
            'Der Vergleich erklärt nichts und verschiebt das Gespräch von prüfbaren Fakten zu einer Wertung. Wer ihn nutzt, ' +
            'sollte ihn als Wertung kennzeichnen – nicht als Feststellung.',
          sources: [
            { title: 'Verurteilungen Höckes wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig', publisher: 'Bundesgerichtshof', date: '11.09.2025', url: 'https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html' },
            { title: 'Die Höcke-Rede von Dresden in Wortlaut-Auszügen', publisher: 'DIE ZEIT / dpa', date: '18.01.2017', url: 'https://www.zeit.de/news/2017-01/18/parteien-die-hoecke-rede-von-dresden-in-wortlaut-auszuegen-18171207' },
            { title: 'Zentralrat der Juden empört über Rede des AfD-Politikers', publisher: 'DER SPIEGEL', date: '18.01.2017', url: 'https://www.spiegel.de/politik/deutschland/bjoern-hoecke-zentralrat-der-juden-ist-empoert-ueber-rede-des-afd-politikers-a-1130520.html' }
          ]
        },
        {
          id: 'hoecke-urteil',
          claim: '„Björn Höcke ist wegen der Verwendung einer NS-Parole rechtskräftig verurteilt.“',
          category: 'belegt',
          verdict:
            'Zutreffend. Das Landgericht Halle verurteilte Höcke am 14. Mai 2024 zu 100 Tagessätzen à 130 Euro, weil er bei einer ' +
            'Wahlkampfveranstaltung 2021 die SA-Parole „Alles für Deutschland“ verwendet hatte. Der Bundesgerichtshof bestätigte ' +
            'die Verurteilung am 11. September 2025; sie ist damit rechtskräftig.',
          sources: [
            { title: 'Verurteilungen des thüringischen AfD-Fraktionsvorsitzenden rechtskräftig (3 StR 484/24, 3 StR 519/24)', publisher: 'Bundesgerichtshof', date: '11.09.2025', url: 'https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html' },
            { title: 'BGH: Urteile gegen Höcke wegen NS-Parole rechtskräftig', publisher: 'tagesschau.de', date: '11.09.2025', url: 'https://www.tagesschau.de/inland/innenpolitik/urteil-bestaetigung-hoecke-100.html' }
          ]
        },
        {
          id: 'hoecke-freispruch',
          claim: '„Höcke wurde von den Vorwürfen freigesprochen.“',
          category: 'widerlegt',
          verdict:
            'Falsch. In der Sache gab es keinen Freispruch: Das Landgericht Halle verurteilte ihn 2024, der Bundesgerichtshof ' +
            'bestätigte die Verurteilung im September 2025. Ein früheres Ermittlungsverfahren aus dem Jahr 2017 wurde eingestellt – ' +
            'eine Einstellung ist kein Freispruch.',
          sources: [
            { title: 'Verurteilungen Höckes rechtskräftig (3 StR 484/24, 3 StR 519/24)', publisher: 'Bundesgerichtshof', date: '11.09.2025', url: 'https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html' },
            { title: 'BGH: Urteile gegen Höcke wegen NS-Parole rechtskräftig', publisher: 'tagesschau.de', date: '11.09.2025', url: 'https://www.tagesschau.de/inland/innenpolitik/urteil-bestaetigung-hoecke-100.html' },
            { title: 'Ermittlungen gegen Höcke eingestellt', publisher: 'Deutsche Welle', date: '01.03.2017', url: 'https://www.dw.com/de/ermittlungen-gegen-afd-mann-h%C3%B6cke-eingestellt/a-37772192' }
          ]
        },
        {
          id: 'programm-demokratie',
          claim: '„Die AfD will die Demokratie abschaffen.“',
          category: 'umstritten',
          verdict:
            'Umstritten. Die Partei tritt zu Wahlen an, und ihr Programm enthält parlamentarische Forderungen. Das Bundesamt für ' +
            'Verfassungsschutz sieht in seinem Gutachten jedoch verfassungsfeindliche Ziele und stufte die Partei 2025 als gesichert ' +
            'rechtsextremistische Bestrebung ein. Ob Programm und Auftreten auf die Abschaffung der freiheitlichen demokratischen ' +
            'Grundordnung zielen, ist eine politische und juristische Bewertung – gerichtlich festgestellt ist das nicht.',
          nuance: 'Für die Behauptung braucht es mehr als Wahlteilnahme, dagegen mehr als eine Behördenbewertung.',
          sources: [
            { title: 'Zeit für Deutschland – Programm zur Wahl zum 21. Deutschen Bundestag', publisher: 'AfD-Bundesverband', date: '12.01.2025', url: 'https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf' },
            { title: 'AfD laut Verfassungsschutz gesichert rechtsextremistisch', publisher: 'Deutsche Welle', date: '02.05.2025', url: 'https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368' },
            { title: 'Grundgesetz, Artikel 21 (Parteien)', publisher: 'Bundesministerium der Justiz', date: '24.05.1949, Fassung laufend', url: 'https://www.gesetze-im-internet.de/gg/art_21.html' }
          ]
        }
      ]
    },
    {
      id: 'migration',
      title: 'Migration, Mitglieder, Wähler',
      intro: 'Zahlen statt Zuschreibungen – auch dort, wo sie der eigenen Erzählung widersprechen.',
      entries: [
        {
          id: 'keine-migranten',
          claim: '„In der AfD sind keine Migrationsdeutschen.“',
          category: 'widerlegt',
          verdict:
            'Falsch. Der AfD-Fraktion im Bundestag gehören nach der Wahl 2025 neun Abgeordnete mit Migrationshintergrund an – ' +
            'das sind 5,9 Prozent der 152 Abgeordneten. Insgesamt haben 73 Abgeordnete aller Fraktionen einen Migrationshintergrund. ' +
            'Der Anteil ist klein, aber nicht null.',
          nuance:
            'Die Zahl beschreibt Abgeordnete, nicht Mitglieder oder Wähler. Über die Zusammensetzung der Mitgliedschaft gibt es ' +
            'keine amtliche Erhebung nach Herkunft.',
          sources: [
            { title: '73 Abgeordnete mit Migrationshintergrund', publisher: 'Mediendienst Integration', date: '27.02.2025', url: 'https://mediendienst-integration.de/artikel/73-abgeordnete-mit-migrationshintergrund.html' },
            { title: 'Abgeordneten-Statistik: Der neue Bundestag in Zahlen', publisher: 'Deutscher Bundestag', date: '24.02.2025', url: 'https://www.bundestag.de/dokumente/textarchiv/2025/kw09-wahlergebnis-statistik-1055550' },
            { title: 'Migrantische AfD-Wähler wollen weniger Zuwanderung', publisher: 'SRF', date: '15.02.2025', url: 'https://www.srf.ch/news/international/deutschland-wahlen-2025/bundestagswahlen-2025-migrantische-afd-waehler-wollen-weniger-zuwanderung' }
          ]
        },
        {
          id: 'waehler-nazis',
          claim: '„Alle AfD-Wähler sind Nazis.“',
          category: 'nicht-belegt',
          verdict:
            'Nicht belegt. 2025 wählten rund 10,3 Millionen Menschen die AfD. Wählerbefragungen zeigen unterschiedliche Motive – ' +
            'Migration, Unzufriedenheit mit der Regierung, wirtschaftliche Sorgen. Eine kollektive Zuschreibung ist keine überprüfbare ' +
            'Aussage über Millionen Menschen, sondern eine Wertung.',
          sources: [
            { title: 'Bundestagswahl 2025: Endgültiges Ergebnis', publisher: 'Die Bundeswahlleiterin', date: '14.03.2025', url: 'https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html' },
            { title: 'Wahlergebnisse und Wählerschaft der AfD', publisher: 'Bundeszentrale für politische Bildung', date: '16.05.2026', url: 'https://www.bpb.de/themen/parteien/parteien-in-deutschland/afd/273131/wahlergebnisse-und-waehlerschaft-der-afd/' },
            { title: 'Migrantisch, deutsch, AfD-Wähler', publisher: 'Der Tagesspiegel', date: '02.07.2026', url: 'https://www.tagesspiegel.de/berlin/migrantisch-deutsch-afd-wahler-wir-stehen-immer-noch-auf-einer-stufe-mit-fluchtlingen-15748778.html' }
          ]
        },
        {
          id: 'alle-abschieben',
          claim: '„Die AfD will alle Ausländer abschieben.“',
          category: 'umstritten',
          verdict:
            'Umstritten. Das Wahlprogramm fordert die konsequente Abschiebung ausreisepflichtiger Personen und die Forderung ' +
            '„Remigration“; es fordert nicht die Abschiebung aller Ausländer. Wie weit „Remigration“ reichen soll, ist nicht ' +
            'verbindlich geklärt: Bei dem Treffen in Potsdam im November 2023 ging es nach den Recherchen von CORRECTIV auch um ' +
            'deutsche Staatsangehörige mit Migrationsgeschichte.',
          nuance:
            'Die Formel „alle Ausländer“ ist zu weit; die Formel „nur Straftäter“ ist zu eng. Beides steht so nicht im Programm.',
          sources: [
            { title: 'Zeit für Deutschland – Programm zur Wahl zum 21. Deutschen Bundestag', publisher: 'AfD-Bundesverband', date: '12.01.2025', url: 'https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf' },
            { title: 'AfD-Parteitag nimmt Forderung nach „Remigration“ ins Wahlprogramm auf', publisher: 'Stuttgarter Zeitung / dpa', date: '11.01.2025', url: 'https://www.stuttgarter-zeitung.de/politik/bundestagswahl-2025-afd-parteitag-nimmt-forderung-nach-remigration-ins-wahlprogramm-auf-79031156.html' },
            { title: 'Making-Of zur Geheimplan-Recherche (Potsdamer Treffen)', publisher: 'CORRECTIV', date: '10.01.2024', url: 'https://correctiv.org/aktuelles/neue-rechte/2024/01/10/making-of-zur-geheimplan-recherche/' }
          ]
        }
      ]
    },
    {
      id: 'demokratie',
      title: 'Demokratie, Wahlen, Brandmauer',
      intro: 'Wo Verfassungsrecht endet und politische Bewertung beginnt.',
      entries: [
        {
          id: 'brandmauer',
          claim: '„Die Brandmauer ist undemokratisch, weil sie 20,8 Prozent der Wähler von der Regierung ausschließt.“',
          category: 'umstritten',
          verdict:
            'Umstritten. Richtig ist: Koalitionen sind Sache der Parteien, ein Anspruch auf Regierungsbeteiligung besteht nicht; ' +
            'das Bundesverfassungsgericht hat ein solches Recht auch für Parlamentsämter verneint. Die demokratietheoretische Kritik – ' +
            'dauerhafter Ausschluss einer großen Wählergruppe – ist eine politische Bewertung, keine Rechtsverletzung.',
          sources: [
            { title: 'Grundgesetz, Artikel 21 (Parteien)', publisher: 'Bundesministerium der Justiz', date: '24.05.1949, Fassung laufend', url: 'https://www.gesetze-im-internet.de/gg/art_21.html' },
            { title: 'Merz, AfD und Migration: Was passiert da gerade?', publisher: 'WDR', date: '31.01.2025', url: 'https://www1.wdr.de/politik/wahlen/bundestagswahl/merz-cdu-afd-abstimmung-brandmauer-100.html' },
            { title: 'Mehrheit stimmt nach Regierungserklärung für Migrationsantrag der Union', publisher: 'Deutscher Bundestag', date: '29.01.2025', url: 'https://www.bundestag.de/dokumente/textarchiv/2025/kw05-de-regierungserklaerung-1041594' }
          ]
        },
        {
          id: 'union-afd-mehrheit',
          claim: '„Die Union hat im Bundestag eine Mehrheit nur mit AfD-Stimmen erreicht.“',
          category: 'belegt',
          verdict:
            'Zutreffend für den 29. Januar 2025: Der Fünf-Punkte-Antrag der Union wurde mit 348 zu 345 Stimmen angenommen – ' +
            'die Mehrheit kam mit den 75 Stimmen der AfD zustande. Das Abstimmungsergebnis ist im Bundestag dokumentiert.',
          sources: [
            { title: 'Mehrheit stimmt nach Regierungserklärung für Migrationsantrag der Union', publisher: 'Deutscher Bundestag', date: '29.01.2025', url: 'https://www.bundestag.de/dokumente/textarchiv/2025/kw05-de-regierungserklaerung-1041594' },
            { title: 'Fünf-Punkte-Plan der Union erhält Mehrheit im Bundestag', publisher: 'ZDFheute', date: '29.01.2025', url: 'https://www.zdfheute.de/politik/deutschland/migration-antraege-cdu-abstimmung-ergebnisse-100.html' },
            { title: 'Ein Tabubruch mit Ansage', publisher: 'tagesschau.de', date: '29.01.2025', url: 'https://www.tagesschau.de/inland/innenpolitik/bundestag-debatte-migration-102.html' }
          ]
        },
        {
          id: 'vizepraesident',
          claim: '„Der AfD wird das Recht auf einen Bundestags-Vizepräsidenten rechtswidrig verweigert.“',
          category: 'widerlegt',
          verdict:
            'Falsch. Das Bundesverfassungsgericht hat 2022 eine Organklage der AfD abgelehnt: Ein Anspruch auf den Posten besteht ' +
            'nicht, das Plenum wählt in geheimer Wahl. Die AfD-Kandidaten sind mehrfach durchgefallen – im März 2025 scheiterte ' +
            'Gerold Otten als einziger Bewerber.',
          sources: [
            { title: 'Kein AfD-Recht auf Bundestags-Vize (Organklage abgelehnt)', publisher: 'taz / dpa', date: '22.03.2022', url: 'https://taz.de/Entscheidungen-des-Verfassungsgerichts/!5843742' },
            { title: 'Bundestags-Vize: AfD-Mann fällt als einziger durch', publisher: 't-online / dpa', date: '25.03.2025', url: 'https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_100651758/bundestags-vizepraesident-afd-mann-gerold-otten-scheitert-als-einziger.html' },
            { title: 'Erneut kein Bundestags-Vizepräsident aus den Reihen der AfD', publisher: 'Deutschlandfunk', date: '14.11.2024', url: 'https://www.deutschlandfunk.de/erneut-kein-bundestags-vizepraesident-aus-den-reihen-der-afd-104.html' }
          ]
        },
        {
          id: 'thueringen',
          claim: '„Die AfD ist in Thüringen stärkste Kraft.“',
          category: 'belegt',
          verdict:
            'Zutreffend. Bei der Landtagswahl am 1. September 2024 kam die AfD auf 32,8 Prozent und wurde stärkste Fraktion mit 32 Sitzen.',
          sources: [
            { title: 'Landtagswahl 2024 in Thüringen – endgültiges Ergebnis', publisher: 'Der Landeswahlleiter Thüringen', date: '12.09.2024', url: 'https://wahlen.thueringen.de/datenbank/wahl1/wahl.asp?wJahr=2024&wahlart=LW&zeigeErg=LAND' },
            { title: 'Landtagswahl in Thüringen 2024 – Wahlanalyse', publisher: 'Forschungsgruppe Wahlen', date: '02.09.2024', url: 'https://www.forschungsgruppe.de/Wahlen/Wahlanalysen/Newsl_Thue_240902.pdf' }
          ]
        },
        {
          id: 'bundestagswahl',
          claim: '„Die AfD wurde bei der Bundestagswahl 2025 mit 20,8 Prozent zweitstärkste Kraft.“',
          category: 'belegt',
          verdict:
            'Zutreffend. Nach dem endgültigen Ergebnis kam die AfD auf 20,8 Prozent und 10.328.780 Zweitstimmen; mit 152 Sitzen ' +
            'ist sie zweitstärkste Fraktion.',
          sources: [
            { title: 'Bundestagswahl 2025: Endgültiges Ergebnis', publisher: 'Die Bundeswahlleiterin', date: '14.03.2025', url: 'https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html' },
            { title: 'Wahlergebnisse und Wählerschaft der AfD', publisher: 'Bundeszentrale für politische Bildung', date: '16.05.2026', url: 'https://www.bpb.de/themen/parteien/parteien-in-deutschland/afd/273131/wahlergebnisse-und-waehlerschaft-der-afd/' }
          ]
        }
      ]
    },
    {
      id: 'programm',
      title: 'Programm & Außenpolitik',
      intro: 'Was im Wahlprogramm steht – und was daraus in der Debatte gemacht wird.',
      entries: [
        {
          id: 'eu-austritt',
          claim: '„Die AfD will aus der Europäischen Union austreten.“',
          category: 'belegt',
          verdict:
            'Zutreffend. Das Bundestagswahlprogramm vom Januar 2025 fordert den Austritt aus der EU beziehungsweise eine ' +
            'Neugründung; der Parteitag in Riesa beschloss das Programm. Berichte fassen den Punkt unter „Ausstieg aus der EU“ zusammen.',
          sources: [
            { title: 'Zeit für Deutschland – Programm zur Wahl zum 21. Deutschen Bundestag', publisher: 'AfD-Bundesverband', date: '12.01.2025', url: 'https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf' },
            { title: 'AfD-Wahlprogramm: Vater, Mutter, Kind – und der Ausstieg aus der EU', publisher: 'ZDFheute', date: '12.01.2025', url: 'https://www.zdfheute.de/politik/deutschland/afd-parteitag-riesa-wahlprogramm-100.html' }
          ]
        },
        {
          id: 'russland-finanzierung',
          claim: '„Die AfD wird von Russland finanziert.“',
          category: 'nicht-belegt',
          verdict:
            'Nicht belegt. Recherchen von tagesschau, WDR, NDR und SZ dokumentieren Geldflüsse und eine „Bargeldreserve“ im Umfeld ' +
            'des Abgeordneten Maximilian Krah sowie Verbindungen zu einem russischen Netzwerk. Eine Finanzierung der Partei durch ' +
            'den russischen Staat ist damit nicht nachgewiesen; für die Beteiligten gilt die Unschuldsvermutung.',
          nuance: 'Dokumentierte Geldflüsse im Umfeld sind nicht dasselbe wie eine Parteifinanzierung aus Moskau.',
          sources: [
            { title: 'Ermittlungen zu russischer Einflussnahme: AfD-Politiker Krah und seine „Bargeldreserve“', publisher: 'tagesschau.de (WDR/NDR/SZ)', date: '17.04.2024', url: 'https://www.tagesschau.de/investigativ/ndr-wdr/afd-krah-byston-voice-of-europe-russland-100.html' },
            { title: 'Ist Geld aus China auch bei AfD-Politiker Krah gelandet?', publisher: 'tagesschau.de (WDR/NDR/SZ)', date: '16.05.2024', url: 'https://www.tagesschau.de/investigativ/ndr-wdr/afd-krah-102.html' }
          ]
        },
        {
          id: 'china-spionage',
          claim: '„Ein Mitarbeiter des AfD-Abgeordneten Maximilian Krah wurde wegen Spionage für China verurteilt.“',
          category: 'belegt',
          verdict:
            'Zutreffend. Jian G., Mitarbeiter von Krah, wurde im April 2024 festgenommen und am 30. September 2025 wegen ' +
            'geheimdienstlicher Tätigkeit für China verurteilt. Das ist ein Fall im persönlichen Umfeld – keine Feststellung über die Partei.',
          sources: [
            { title: 'Haftbefehl gegen AfD-Mitarbeiter Jian G. wegen China-Spionageverdacht', publisher: 'tagesschau.de', date: '24.04.2024', url: 'https://www.tagesschau.de/inland/innenpolitik/haftbefehl-jian-g-afd-100.html' },
            { title: 'Ehemaliger Krah-Mitarbeiter wegen Spionage verurteilt', publisher: 'ZDFheute', date: '30.09.2025', url: 'https://www.zdfheute.de/politik/deutschland/prozess-urteil-krah-spionage-china-100.html' }
          ]
        }
      ]
    },
    {
      id: 'partei',
      title: 'Partei, Personal, Finanzen',
      intro: 'Überprüfbare Aussagen über Organisation und Abgeordnete.',
      entries: [
        {
          id: 'parteispende',
          claim: '„Die AfD musste wegen illegaler Parteispenden Strafzahlungen leisten.“',
          category: 'belegt',
          verdict:
            'Zutreffend. Wegen einer 2017 über eine Schweizer Firma abgewickelten Spende an den Kreisverband Bodensee verhängte ' +
            'die Bundestagsverwaltung eine Sanktion; das Oberverwaltungsgericht Berlin-Brandenburg bestätigte die Zahlungspflicht 2023. ' +
            'Die Summe lag bei rund 396.000 Euro.',
          sources: [
            { title: 'AfD muss Sanktionszahlungen wegen Parteispende leisten (OVG Berlin-Brandenburg 3 B 28/21)', publisher: 'NVwZ / C.H. Beck', date: '03.03.2023', url: 'https://rsw.beck.de/zeitschriften/nvwz/startseite/2023/03/03/afd-muss-sanktionszahlungen-wegen-parteispende-leisten' },
            { title: 'Parteispende an AfD war wohl illegal', publisher: 'Süddeutsche Zeitung', date: '24.10.2019', url: 'https://www.sueddeutsche.de/politik/afd-spenden-strafe-1.4655156' },
            { title: 'Strafzahlung für Weidel-Spende: AfD scheitert vor Gericht', publisher: 'BKZ / dpa', date: '23.10.2026', url: 'https://www.bkz.de/nachrichten/strafzahlung-fuer-weidel-spende-afd-scheitert-vor-gericht-108909.html' }
          ]
        },
        {
          id: 'frauenanteil',
          claim: '„Die AfD-Fraktion hat den niedrigsten Frauenanteil aller Fraktionen.“',
          category: 'belegt',
          verdict:
            'Zutreffend. Nach der Wahl 2025 liegt der Frauenanteil der AfD-Fraktion bei 11,8 Prozent; keine andere Fraktion hat ' +
            'einen niedrigeren Wert.',
          sources: [
            { title: 'Abgeordneten-Statistik: Der neue Bundestag in Zahlen', publisher: 'Deutscher Bundestag', date: '24.02.2025', url: 'https://www.bundestag.de/dokumente/textarchiv/2025/kw09-wahlergebnis-statistik-1055550' },
            { title: 'Gewählte Abgeordnete – Bundestagswahl 2025', publisher: 'Bundeszentrale für politische Bildung', date: '02.04.2025', url: 'https://www.bpb.de/kurz-knapp/zahlen-und-fakten/bundestagswahlen/560747/gewaehlte-abgeordnete' }
          ]
        },
        {
          id: 'letzte-kraft',
          claim: '„Die AfD ist eine der letzten demokratischen Kräfte im Land.“',
          category: 'nicht-belegt',
          verdict:
            'Nicht belegt. Das ist eine politische Selbstbeschreibung, keine überprüfbare Tatsache. Ihr steht die behördliche ' +
            'Bewertung des Bundesamts für Verfassungsschutz gegenüber, das die Partei 2025 als gesichert rechtsextremistische ' +
            'Bestrebung einstufte. Zugleich ist die Partei zugelassen, tritt zu Wahlen an und stellt Mandate. Beides gehört in die Bewertung.',
          sources: [
            { title: 'AfD laut Verfassungsschutz gesichert rechtsextremistisch', publisher: 'Deutsche Welle', date: '02.05.2025', url: 'https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368' },
            { title: 'Grundgesetz, Artikel 21 (Parteien)', publisher: 'Bundesministerium der Justiz', date: '24.05.1949, Fassung laufend', url: 'https://www.gesetze-im-internet.de/gg/art_21.html' },
            { title: 'Bundestagswahl 2025: Endgültiges Ergebnis', publisher: 'Die Bundeswahlleiterin', date: '14.03.2025', url: 'https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html' }
          ]
        }
      ]
    }
  ]
};
