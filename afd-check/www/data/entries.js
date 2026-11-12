/* Inhaltsbestand der AfD-Check-App.
   Jeder Eintrag: Behauptung im Wortlaut, Kategorie, Begründung, Quelle(n) mit Datum und Link.
   Die Einträge ab "Was AfD-Anhänger sagen" sind wörtlich aus dem Dossier übernommen;
   Titel, Herausgeber, Datum und Link stammen zeichengenau aus dem Quellenregister. */
window.CHECK_DATA = {
  "stand": "12. November 2026",
  "intro": "Dieses Werkzeug prüft wiederkehrende Behauptungen über die AfD einzeln. Jeder Eintrag nennt den Wortlaut der Behauptung, eine Einordnung in vier Kategorien, eine kurze Begründung und mindestens eine datierte Quelle. Wo ein Vorwurf zutrifft, steht das genauso drin wie eine widerlegte Falschbehauptung.",
  "categories": [
    {
      "id": "belegt",
      "label": "Belegt",
      "hint": "Die Aussage trifft nachprüfbar zu."
    },
    {
      "id": "widerlegt",
      "label": "Widerlegt",
      "hint": "Die Aussage ist nachprüfbar falsch."
    },
    {
      "id": "nicht-belegt",
      "label": "Nicht belegt",
      "hint": "Für die Aussage gibt es keinen Beleg."
    },
    {
      "id": "umstritten",
      "label": "Umstritten",
      "hint": "Belege stützen beide Seiten; offen."
    }
  ],
  "topics": [
    {
      "id": "verfassungsschutz",
      "title": "Verfassungsschutz & Extremismus",
      "intro": "Was Behörden und Gerichte tatsächlich festgestellt haben – und was daraus nicht folgt.",
      "entries": [
        {
          "id": "vs-einstufung",
          "claim": "„Das Bundesamt für Verfassungsschutz hat die AfD als gesichert rechtsextremistische Bestrebung eingestuft.“",
          "category": "belegt",
          "verdict": "Zutreffend für den 2. Mai 2025: An diesem Tag stufte das Bundesamt für Verfassungsschutz die Gesamtpartei so ein und veröffentlichte die Begründung in einem rund 1.100 Seiten umfassenden Gutachten. Die Einstufung ist eine behördliche Bewertung, keine gerichtliche Feststellung – sie war anschließend Gegenstand von Eilverfahren.",
          "nuance": "Die Einstufung sagt nichts über einzelne Wähler. Der Vollzug der Einstufung ist derzeit ausgesetzt; die behördliche Bewertung selbst bleibt davon unberührt.",
          "sources": [
            {
              "title": "AfD laut Verfassungsschutz gesichert rechtsextremistisch",
              "publisher": "Deutsche Welle",
              "date": "02.05.2025",
              "url": "https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368"
            },
            {
              "title": "Medien veröffentlichen Verfassungsschutz-Gutachten zur AfD (mit Nachtrag zur Eilentscheidung des VG Köln im Februar 2026)",
              "publisher": "tagesschau.de",
              "date": "14.05.2025",
              "url": "https://www.tagesschau.de/inland/afd-medien-publizieren-verfassungsschutz-gutachten-100.html"
            }
          ]
        },
        {
          "id": "vs-rechtskraft",
          "claim": "„Die Einstufung der AfD als gesichert rechtsextremistisch ist rechtskräftig.“",
          "category": "widerlegt",
          "verdict": "Falsch. Rechtskräftig ist die Einstufung als Verdachtsfall: Das Bundesverwaltungsgericht ließ am 22. Juli 2025 die Revision gegen die Urteile des OVG Münster nicht zu. Für die höherstufige Einstufung als gesichert rechtsextremistisch gab das Bundesamt im Mai 2025 dagegen eine Stillhaltezusage ab; das Verwaltungsgericht Köln entschied im Eilverfahren, dass die Einstufung bis zur Hauptsache nicht vollzogen wird.",
          "nuance": "Wer „rechtskräftig“ sagt, verwechselt zwei verschiedene Einstufungen mit unterschiedlichem Verfahrensstand.",
          "sources": [
            {
              "title": "Keine Zulassung der Revision gegen die Urteile des OVG Münster zur Einstufung der AfD als „Verdachtsfall“ (BVerwG 6 B 23.24)",
              "publisher": "Bundesverwaltungsgericht",
              "date": "22.07.2025",
              "url": "https://www.bverwg.de/pm/2025/54"
            },
            {
              "title": "Bundesamt für Verfassungsschutz erklärt „Stillhaltezusage“ im AfD-Eilverfahren, Az. 13 L 1109/25",
              "publisher": "Verwaltungsgericht Köln",
              "date": "08.05.2025",
              "url": "https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/Archiv/2025/05_08052025/"
            },
            {
              "title": "Gerichte: Ab wann gilt die Partei als „gesichert rechtsextremistisch“?",
              "publisher": "CORRECTIV",
              "date": "05.03.2026",
              "url": "https://correctiv.org/aktuelles/afd/2026/03/05/justiz-ab-wann-ist-die-afd-gesichert-rechtsextrem/"
            }
          ]
        },
        {
          "id": "vs-laender",
          "claim": "„Die AfD ist in allen Bundesländern als gesichert rechtsextremistisch eingestuft.“",
          "category": "widerlegt",
          "verdict": "Falsch. Die Landesverfassungsschutzämter bewerten die Landesverbände unterschiedlich: Einige sind als gesichert rechtsextremistische Bestrebung eingestuft – etwa Sachsen, wo das Sächsische Oberverwaltungsgericht die Einstufung 2025 bestätigte –, andere nur als Verdachtsfall oder gar nicht. Eine einheitliche Einstufung aller Landesverbände gibt es nicht.",
          "sources": [
            {
              "title": "Wie stuft der Verfassungsschutz die AfD in den Bundesländern ein?",
              "publisher": "CORRECTIV",
              "date": "17.06.2026",
              "url": "https://correctiv.org/aktuelles/afd/2026/06/17/wie-stuft-der-verfassungsschutz-die-afd-in-den-bundeslaendern-ein"
            },
            {
              "title": "Sächsischer AfD-Landesverband als gesichert rechtsextremistische Bestrebung eingestuft (134-seitiges Gutachten)",
              "publisher": "Landesamt für Verfassungsschutz Sachsen",
              "date": "08.12.2023",
              "url": "https://www.medienservice.sachsen.de/medien/news/1071656/download_pdf"
            },
            {
              "title": "Beschwerde des AfD-Landesverbands Sachsen gegen die Einstufung erfolglos (SächsOVG 3 B 127/24)",
              "publisher": "Sächsisches Oberverwaltungsgericht",
              "date": "21.01.2025",
              "url": "https://www.medienservice.sachsen.de/medien/news/1083988/download_pdf"
            }
          ]
        },
        {
          "id": "vs-verbot",
          "claim": "„Die AfD ist inzwischen verboten.“",
          "category": "widerlegt",
          "verdict": "Falsch. Ein Parteiverbot kann nach Artikel 21 des Grundgesetzes nur das Bundesverfassungsgericht aussprechen. Ein solches Verfahren ist nicht abgeschlossen, ein Verbot nicht ausgesprochen. Die Partei tritt weiter zu Wahlen an – 2025 mit 20,8 Prozent der Zweitstimmen.",
          "sources": [
            {
              "title": "Grundgesetz, Artikel 21 (Parteien)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_21.html"
            },
            {
              "title": "Nach Wahlsieg: Wie liefe ein AfD-Verbotsverfahren?",
              "publisher": "WDR",
              "date": "08.09.2026",
              "url": "https://www1.wdr.de/politik/afd-ablauf-parteiverbotsverfahren-100.html"
            }
          ]
        }
      ]
    },
    {
      "id": "ns-bezuege",
      "title": "Hitler-Vergleich & NS-Bezüge",
      "intro": "Was sich belegen lässt – und warum der große Vergleich nicht dazu gehört.",
      "entries": [
        {
          "id": "ns-vergleich",
          "claim": "„Die AfD ist der neue Hitler.“ / „Die AfD ist eine Nazi-Partei.“",
          "category": "nicht-belegt",
          "verdict": "Als Tatsachenbehauptung nicht belegbar. Ein historischer Vergleich dieser Art lässt sich nicht überprüfen, und für eine kollektive Gleichsetzung von Partei und NS-Regime gibt es keine belastbare Grundlage. Belegbar sind dagegen einzelne NS-Bezüge und Verurteilungen – etwa die rechtskräftige Verurteilung Björn Höckes wegen der SA-Parole „Alles für Deutschland“.",
          "nuance": "Der Vergleich erklärt nichts und verschiebt das Gespräch von prüfbaren Fakten zu einer Wertung. Wer ihn nutzt, sollte ihn als Wertung kennzeichnen – nicht als Feststellung.",
          "sources": [
            {
              "title": "Verurteilungen des thüringischen AfD-Fraktionsvorsitzenden wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (3 StR 484/24, 3 StR 519/24)",
              "publisher": "Bundesgerichtshof",
              "date": "11.09.2025",
              "url": "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
            },
            {
              "title": "Die Höcke-Rede von Dresden in Wortlaut-Auszügen",
              "publisher": "DIE ZEIT / dpa",
              "date": "18.01.2017",
              "url": "https://www.zeit.de/news/2017-01/18/parteien-die-hoecke-rede-von-dresden-in-wortlaut-auszuegen-18171207"
            },
            {
              "title": "Zentralrat der Juden empört über Rede des AfD-Politikers",
              "publisher": "DER SPIEGEL",
              "date": "18.01.2017",
              "url": "https://www.spiegel.de/politik/deutschland/bjoern-hoecke-zentralrat-der-juden-ist-empoert-ueber-rede-des-afd-politikers-a-1130520.html"
            }
          ]
        },
        {
          "id": "hoecke-urteil",
          "claim": "„Björn Höcke ist wegen der Verwendung einer NS-Parole rechtskräftig verurteilt.“",
          "category": "belegt",
          "verdict": "Zutreffend. Das Landgericht Halle verurteilte Höcke am 14. Mai 2024 zu 100 Tagessätzen à 130 Euro, weil er bei einer Wahlkampfveranstaltung 2021 die SA-Parole „Alles für Deutschland“ verwendet hatte. Der Bundesgerichtshof bestätigte die Verurteilung am 11. September 2025; sie ist damit rechtskräftig.",
          "sources": [
            {
              "title": "Verurteilungen des thüringischen AfD-Fraktionsvorsitzenden wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (3 StR 484/24, 3 StR 519/24)",
              "publisher": "Bundesgerichtshof",
              "date": "11.09.2025",
              "url": "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
            },
            {
              "title": "BGH: Urteile gegen Höcke wegen NS-Parole rechtskräftig",
              "publisher": "tagesschau.de",
              "date": "11.09.2025",
              "url": "https://www.tagesschau.de/inland/innenpolitik/urteil-bestaetigung-hoecke-100.html"
            }
          ]
        },
        {
          "id": "hoecke-freispruch",
          "claim": "„Höcke wurde von den Vorwürfen freigesprochen.“",
          "category": "widerlegt",
          "verdict": "Falsch. In der Sache gab es keinen Freispruch: Das Landgericht Halle verurteilte ihn 2024, der Bundesgerichtshof bestätigte die Verurteilung im September 2025. Ein früheres Ermittlungsverfahren aus dem Jahr 2017 wurde eingestellt – eine Einstellung ist kein Freispruch.",
          "sources": [
            {
              "title": "Verurteilungen des thüringischen AfD-Fraktionsvorsitzenden wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (3 StR 484/24, 3 StR 519/24)",
              "publisher": "Bundesgerichtshof",
              "date": "11.09.2025",
              "url": "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
            },
            {
              "title": "BGH: Urteile gegen Höcke wegen NS-Parole rechtskräftig",
              "publisher": "tagesschau.de",
              "date": "11.09.2025",
              "url": "https://www.tagesschau.de/inland/innenpolitik/urteil-bestaetigung-hoecke-100.html"
            },
            {
              "title": "Ermittlungen gegen Höcke eingestellt",
              "publisher": "Deutsche Welle",
              "date": "01.03.2017",
              "url": "https://www.dw.com/de/ermittlungen-gegen-afd-mann-h%C3%B6cke-eingestellt/a-37772192"
            }
          ]
        },
        {
          "id": "programm-demokratie",
          "claim": "„Die AfD will die Demokratie abschaffen.“",
          "category": "umstritten",
          "verdict": "Umstritten. Die Partei tritt zu Wahlen an, und ihr Programm enthält parlamentarische Forderungen. Das Bundesamt für Verfassungsschutz sieht in seinem Gutachten jedoch verfassungsfeindliche Ziele und stufte die Partei 2025 als gesichert rechtsextremistische Bestrebung ein. Ob Programm und Auftreten auf die Abschaffung der freiheitlichen demokratischen Grundordnung zielen, ist eine politische und juristische Bewertung – gerichtlich festgestellt ist das nicht.",
          "nuance": "Für die Behauptung braucht es mehr als Wahlteilnahme, dagegen mehr als eine Behördenbewertung.",
          "sources": [
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            },
            {
              "title": "AfD laut Verfassungsschutz gesichert rechtsextremistisch",
              "publisher": "Deutsche Welle",
              "date": "02.05.2025",
              "url": "https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368"
            },
            {
              "title": "Grundgesetz, Artikel 21 (Parteien)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_21.html"
            }
          ]
        },
        {
          "id": "antisemitismus",
          "claim": "„Die AfD ist antisemitisch.“",
          "category": "umstritten",
          "verdict": "Pauschal nicht belegbar. Dokumentiert ist der Fall Höcke: Am 17. Januar 2017 sprach er in Dresden vom „Denkmal der Schande“ und forderte eine „Wende um 180 Grad“ in der Erinnerungskultur. Der Zentralrat der Juden nannte die Äußerungen „zutiefst empörend“; die Staatsanwaltschaft Dresden stellte die Ermittlungen wegen Volksverhetzung im März 2017 ein.",
          "nuance": "Das Zitat ist dokumentiert, die Bewertung „antisemitisch“ ist eine Einordnung – und die Partei als Ganze noch einmal eine andere Frage. Wer den Vorwurf erhebt, sollte den Wortlaut kennen; wer ihn bestreitet, die Reaktion der Partei erklären.",
          "sources": [
            {
              "title": "Die Höcke-Rede von Dresden in Wortlaut-Auszügen",
              "publisher": "DIE ZEIT / dpa",
              "date": "18.01.2017",
              "url": "https://www.zeit.de/news/2017-01/18/parteien-die-hoecke-rede-von-dresden-in-wortlaut-auszuegen-18171207"
            },
            {
              "title": "Zentralrat der Juden empört über Rede des AfD-Politikers",
              "publisher": "DER SPIEGEL",
              "date": "18.01.2017",
              "url": "https://www.spiegel.de/politik/deutschland/bjoern-hoecke-zentralrat-der-juden-ist-empoert-ueber-rede-des-afd-politikers-a-1130520.html"
            },
            {
              "title": "Ermittlungen gegen Höcke eingestellt",
              "publisher": "Deutsche Welle",
              "date": "01.03.2017",
              "url": "https://www.dw.com/de/ermittlungen-gegen-afd-mann-h%C3%B6cke-eingestellt/a-37772192"
            }
          ]
        },
        {
          "id": "rechte-kontakte",
          "claim": "„Die AfD pflegt Kontakte zu gewaltbereiten Rechtsextremen.“",
          "category": "belegt",
          "verdict": "Belegt für konkrete Personen und Anlässe. Mario Müller, mehrfach unter anderem wegen gefährlicher Körperverletzung verurteilt, arbeitete als wissenschaftlicher Mitarbeiter in einem AfD-Bundestagsbüro und nahm am Potsdamer Treffen vom 25. November 2023 teil. Dort waren nach Recherchen von CORRECTIV, WDR, NDR und SZ auch der Rechtsextremist Martin Sellner und der persönliche Referent von Alice Weidel anwesend.",
          "nuance": "Ein Netzwerk mit Verbindungen in Fraktion und Parteispitze ist kein Parteitagsbeschluss. Die Partei nannte das Treffen „kein AfD-Termin“ – erklären muss sie die personellen Verbindungen trotzdem.",
          "sources": [
            {
              "title": "Geheimtreffen in Potsdam: AfD-Mitarbeiter brüstet sich mit Gewalt",
              "publisher": "CORRECTIV",
              "date": "17.01.2024",
              "url": "https://correctiv.org/aktuelles/neue-rechte/2024/01/17/geheimtreffen-in-potsdam-afd-mitarbeiter-bruestet-sich-mit-gewalt"
            },
            {
              "title": "AfD-Politiker diskutieren offenbar Vertreibungsplan",
              "publisher": "tagesschau.de",
              "date": "10.01.2024",
              "url": "https://www.tagesschau.de/inland/innenpolitik/afd-neonazis-geheimtreffen-100.html"
            },
            {
              "title": "Rechtsextremisten berieten mit AfD-Politikern über Massenausweisungen",
              "publisher": "Deutschlandfunk",
              "date": "11.01.2024",
              "url": "https://www.deutschlandfunk.de/rechtsextremisten-berieten-mit-afd-politikern-ueber-massenausweisungen-von-menschen-mit-migrationshi-100.html"
            }
          ]
        },
        {
          "id": "hoecke-dresden",
          "claim": "„Höcke hat das Holocaust-Mahnmal eine Schande genannt.“",
          "category": "belegt",
          "verdict": "Belegt. Der Satz ist dokumentiert – Höcke bestreitet allerdings, das Mahnmal selbst gemeint zu haben. Die Staatsanwaltschaft sah keinen Straftatbestand.",
          "sources": [
            {
              "title": "Die Höcke-Rede von Dresden in Wortlaut-Auszügen",
              "publisher": "DIE ZEIT / dpa",
              "date": "18.01.2017",
              "url": "https://www.zeit.de/news/2017-01/18/parteien-die-hoecke-rede-von-dresden-in-wortlaut-auszuegen-18171207"
            },
            {
              "title": "Björn Höckes Dresden-Rede: Zurück in die Vergangenheit",
              "publisher": "taz",
              "date": "18.01.2017",
              "url": "https://taz.de/Bjoern-Hoeckes-Dresden-Rede/!5372797"
            },
            {
              "title": "Zentralrat der Juden empört über Rede des AfD-Politikers",
              "publisher": "DER SPIEGEL",
              "date": "18.01.2017",
              "url": "https://www.spiegel.de/politik/deutschland/bjoern-hoecke-zentralrat-der-juden-ist-empoert-ueber-rede-des-afd-politikers-a-1130520.html"
            },
            {
              "title": "Ermittlungen gegen Höcke eingestellt",
              "publisher": "Deutsche Welle",
              "date": "01.03.2017",
              "url": "https://www.dw.com/de/ermittlungen-gegen-afd-mann-h%C3%B6cke-eingestellt/a-37772192"
            },
            {
              "title": "„Denkmal der Schande“: Provokation ist Höckes Handwerk, die Empörung sein Lohn",
              "publisher": "Berliner Zeitung",
              "date": "18.01.2017",
              "url": "https://www.berliner-zeitung.de/article/denkmal-der-schande-provokation-ist-hoeckes-handwerk-die-empfoerung-sein-lohn-29912"
            }
          ]
        },
        {
          "id": "fluegel",
          "claim": "„Der rechtsextreme Flügel war eine Randgruppe ohne Einfluss.“",
          "category": "belegt",
          "verdict": "Falsch. Der „Flügel“ war die interne Sammlungsbewegung um Höcke; der Verfassungsschutz stufte ihn als gesichert rechtsextremistisch ein, 2020 wurde er aufgelöst.",
          "sources": [
            {
              "title": "Keine Zulassung der Revision gegen die Urteile des OVG Münster zur Einstufung der AfD als „Verdachtsfall“ (BVerwG 6 B 23.24)",
              "publisher": "Bundesverwaltungsgericht",
              "date": "22.07.2025",
              "url": "https://www.bverwg.de/pm/2025/54"
            },
            {
              "title": "AfD laut Verfassungsschutz gesichert rechtsextremistisch",
              "publisher": "Deutsche Welle",
              "date": "02.05.2025",
              "url": "https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368"
            }
          ]
        }
      ]
    },
    {
      "id": "migration",
      "title": "Migration, Mitglieder, Wähler",
      "intro": "Zahlen statt Zuschreibungen – auch dort, wo sie der eigenen Erzählung widersprechen.",
      "entries": [
        {
          "id": "keine-migranten",
          "claim": "„In der AfD sind keine Migrationsdeutschen.“",
          "category": "widerlegt",
          "verdict": "Falsch. Der AfD-Fraktion im Bundestag gehören nach der Wahl 2025 neun Abgeordnete mit Migrationshintergrund an – das sind 5,9 Prozent der 152 Abgeordneten. Insgesamt haben 73 Abgeordnete aller Fraktionen einen Migrationshintergrund. Der Anteil ist klein, aber nicht null.",
          "nuance": "Die Zahl beschreibt Abgeordnete, nicht Mitglieder oder Wähler. Über die Zusammensetzung der Mitgliedschaft gibt es keine amtliche Erhebung nach Herkunft.",
          "sources": [
            {
              "title": "73 Abgeordnete mit Migrationshintergrund",
              "publisher": "Mediendienst Integration",
              "date": "27.02.2025",
              "url": "https://mediendienst-integration.de/artikel/73-abgeordnete-mit-migrationshintergrund.html"
            },
            {
              "title": "Abgeordneten-Statistik: Der neue Bundestag in Zahlen",
              "publisher": "Deutscher Bundestag",
              "date": "24.02.2025",
              "url": "https://www.bundestag.de/dokumente/textarchiv/2025/kw09-wahlergebnis-statistik-1055550"
            },
            {
              "title": "Migrantische AfD-Wähler wollen weniger Zuwanderung",
              "publisher": "Schweizer Radio und Fernsehen (SRF)",
              "date": "15.02.2025",
              "url": "https://www.srf.ch/news/international/deutschland-wahlen-2025/bundestagswahlen-2025-migrantische-afd-waehler-wollen-weniger-zuwanderung"
            }
          ]
        },
        {
          "id": "waehler-nazis",
          "claim": "„Alle AfD-Wähler sind Nazis.“",
          "category": "nicht-belegt",
          "verdict": "Nicht belegt. 2025 wählten rund 10,3 Millionen Menschen die AfD. Wählerbefragungen zeigen unterschiedliche Motive – Migration, Unzufriedenheit mit der Regierung, wirtschaftliche Sorgen. Eine kollektive Zuschreibung ist keine überprüfbare Aussage über Millionen Menschen, sondern eine Wertung.",
          "sources": [
            {
              "title": "Bundestagswahl 2025: Endgültiges Ergebnis",
              "publisher": "Die Bundeswahlleiterin",
              "date": "14.03.2025",
              "url": "https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html"
            },
            {
              "title": "Wahlergebnisse und Wählerschaft der AfD",
              "publisher": "Bundeszentrale für politische Bildung",
              "date": "16.05.2026",
              "url": "https://www.bpb.de/themen/parteien/parteien-in-deutschland/afd/273131/wahlergebnisse-und-waehlerschaft-der-afd/"
            },
            {
              "title": "Migrantisch, deutsch, AfD-Wähler: „Wir stehen immer noch auf einer Stufe mit Flüchtlingen“ (mit KAS-Wählerdaten)",
              "publisher": "Der Tagesspiegel",
              "date": "02.07.2026",
              "url": "https://www.tagesspiegel.de/berlin/migrantisch-deutsch-afd-wahler-wir-stehen-immer-noch-auf-einer-stufe-mit-fluchtlingen-15748778.html"
            }
          ]
        },
        {
          "id": "alle-abschieben",
          "claim": "„Die AfD will alle Ausländer abschieben.“",
          "category": "umstritten",
          "verdict": "Umstritten. Das Wahlprogramm fordert die konsequente Abschiebung ausreisepflichtiger Personen und die Forderung „Remigration“; es fordert nicht die Abschiebung aller Ausländer. Wie weit „Remigration“ reichen soll, ist nicht verbindlich geklärt: Bei dem Treffen in Potsdam im November 2023 ging es nach den Recherchen von CORRECTIV auch um deutsche Staatsangehörige mit Migrationsgeschichte.",
          "nuance": "Die Formel „alle Ausländer“ ist zu weit; die Formel „nur Straftäter“ ist zu eng. Beides steht so nicht im Programm.",
          "sources": [
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            },
            {
              "title": "AfD-Parteitag nimmt Forderung nach „Remigration“ ins Wahlprogramm auf",
              "publisher": "Stuttgarter Zeitung / dpa",
              "date": "11.01.2025",
              "url": "https://www.stuttgarter-zeitung.de/politik/bundestagswahl-2025-afd-parteitag-nimmt-forderung-nach-remigration-ins-wahlprogramm-auf-79031156.html"
            },
            {
              "title": "Making-Of zur Geheimplan-Recherche",
              "publisher": "CORRECTIV",
              "date": "10.01.2024",
              "url": "https://correctiv.org/aktuelles/neue-rechte/2024/01/10/making-of-zur-geheimplan-recherche/"
            }
          ]
        },
        {
          "id": "ost-partei",
          "claim": "„Die AfD ist eine ostdeutsche Regionalpartei.“",
          "category": "widerlegt",
          "verdict": "Falsch. 2025 erreichte die AfD im Osten rund 32 Prozent, im Westen rund 18 Prozent – aber 70 Prozent ihrer Zweitstimmen kamen aus den alten Bundesländern, weil dort deutlich mehr Menschen wählen. In allen ostdeutschen Flächenländern war sie mit 32,5 bis 38,6 Prozent stärkste Kraft.",
          "nuance": "Der Ost-West-Unterschied ist real, beschreibt aber eine Gewichtung, keine Regionalpartei. Wer die AfD als Ost-Phänomen abtut, rechnet rund 7,2 Millionen westdeutsche Wählerstimmen weg.",
          "sources": [
            {
              "title": "Wahlergebnisse und Wählerschaft der AfD",
              "publisher": "Bundeszentrale für politische Bildung",
              "date": "16.05.2026",
              "url": "https://www.bpb.de/themen/parteien/parteien-in-deutschland/afd/273131/wahlergebnisse-und-waehlerschaft-der-afd/"
            },
            {
              "title": "Bundestagswahl 2025: Endgültiges Ergebnis",
              "publisher": "Die Bundeswahlleiterin",
              "date": "14.03.2025",
              "url": "https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html"
            }
          ]
        },
        {
          "id": "migrantische-waehler",
          "claim": "„Menschen mit Migrationshintergrund wählen die AfD kaum.“",
          "category": "belegt",
          "verdict": "Falsch pauschal. Bei russlanddeutschen, polnischstämmigen und spätausgesiedelten Wählern ist die AfD überdurchschnittlich stark; bei türkeistämmigen Wählern schwach.",
          "sources": [
            {
              "title": "Migrantisch, deutsch, AfD-Wähler: „Wir stehen immer noch auf einer Stufe mit Flüchtlingen“ (mit KAS-Wählerdaten)",
              "publisher": "Der Tagesspiegel",
              "date": "02.07.2026",
              "url": "https://www.tagesspiegel.de/berlin/migrantisch-deutsch-afd-wahler-wir-stehen-immer-noch-auf-einer-stufe-mit-fluchtlingen-15748778.html"
            }
          ]
        },
        {
          "id": "bremen",
          "claim": "„In der AfD engagieren sich keine Menschen mit Migrationsgeschichte.“",
          "category": "belegt",
          "verdict": "Falsch. Es gibt sie – in Funktionen, in Landesverbänden und als Wähler. Ein belegtes Beispiel ist Bremen.",
          "sources": [
            {
              "title": "Migrantische AfD-Wähler wollen weniger Zuwanderung",
              "publisher": "Schweizer Radio und Fernsehen (SRF)",
              "date": "15.02.2025",
              "url": "https://www.srf.ch/news/international/deutschland-wahlen-2025/bundestagswahlen-2025-migrantische-afd-waehler-wollen-weniger-zuwanderung"
            }
          ]
        },
        {
          "id": "staatsangehoerigkeit",
          "claim": "„Wer Migrantenmitglieder als Argument nennt, muss das Programm erklären.“",
          "category": "umstritten",
          "verdict": "Die offene Flanke: Das Programm will die Staatsangehörigkeit restriktiver vergeben. Wer mit Migrationsdeutschen in der Partei argumentiert, sollte diese Passage kennen.",
          "sources": [
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            },
            {
              "title": "AfD-Parteitag nimmt Forderung nach „Remigration“ ins Wahlprogramm auf",
              "publisher": "Stuttgarter Zeitung / dpa",
              "date": "11.01.2025",
              "url": "https://www.stuttgarter-zeitung.de/politik/bundestagswahl-2025-afd-parteitag-nimmt-forderung-nach-remigration-ins-wahlprogramm-auf-79031156.html"
            }
          ]
        }
      ]
    },
    {
      "id": "demokratie",
      "title": "Demokratie, Wahlen, Brandmauer",
      "intro": "Wo Verfassungsrecht endet und politische Bewertung beginnt.",
      "entries": [
        {
          "id": "brandmauer",
          "claim": "„Die Brandmauer ist undemokratisch, weil sie 20,8 Prozent der Wähler von der Regierung ausschließt.“",
          "category": "umstritten",
          "verdict": "Umstritten. Richtig ist: Koalitionen sind Sache der Parteien, ein Anspruch auf Regierungsbeteiligung besteht nicht; das Bundesverfassungsgericht hat ein solches Recht auch für Parlamentsämter verneint. Die demokratietheoretische Kritik – dauerhafter Ausschluss einer großen Wählergruppe – ist eine politische Bewertung, keine Rechtsverletzung.",
          "sources": [
            {
              "title": "Grundgesetz, Artikel 21 (Parteien)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_21.html"
            },
            {
              "title": "Merz, AfD und Migration: Was passiert da gerade?",
              "publisher": "WDR",
              "date": "31.01.2025",
              "url": "https://www1.wdr.de/politik/wahlen/bundestagswahl/merz-cdu-afd-abstimmung-brandmauer-100.html"
            },
            {
              "title": "Mehrheit stimmt nach Regierungserklärung für Migrationsantrag der Union",
              "publisher": "Deutscher Bundestag",
              "date": "29.01.2025",
              "url": "https://www.bundestag.de/dokumente/textarchiv/2025/kw05-de-regierungserklaerung-1041594"
            }
          ]
        },
        {
          "id": "union-afd-mehrheit",
          "claim": "„Die Union hat im Bundestag eine Mehrheit nur mit AfD-Stimmen erreicht.“",
          "category": "belegt",
          "verdict": "Zutreffend für den 29. Januar 2025: Der Fünf-Punkte-Antrag der Union wurde mit 348 zu 345 Stimmen angenommen – die Mehrheit kam mit den 75 Stimmen der AfD zustande. Das Abstimmungsergebnis ist im Bundestag dokumentiert.",
          "sources": [
            {
              "title": "Mehrheit stimmt nach Regierungserklärung für Migrationsantrag der Union",
              "publisher": "Deutscher Bundestag",
              "date": "29.01.2025",
              "url": "https://www.bundestag.de/dokumente/textarchiv/2025/kw05-de-regierungserklaerung-1041594"
            },
            {
              "title": "Fünf-Punkte-Plan der Union erhält Mehrheit im Bundestag",
              "publisher": "ZDFheute",
              "date": "29.01.2025",
              "url": "https://www.zdfheute.de/politik/deutschland/migration-antraege-cdu-abstimmung-ergebnisse-100.html"
            },
            {
              "title": "Ein Tabubruch mit Ansage",
              "publisher": "tagesschau.de",
              "date": "29.01.2025",
              "url": "https://www.tagesschau.de/inland/innenpolitik/bundestag-debatte-migration-102.html"
            }
          ]
        },
        {
          "id": "vizepraesident",
          "claim": "„Der AfD wird das Recht auf einen Bundestags-Vizepräsidenten rechtswidrig verweigert.“",
          "category": "widerlegt",
          "verdict": "Falsch. Das Bundesverfassungsgericht hat 2022 eine Organklage der AfD abgelehnt: Ein Anspruch auf den Posten besteht nicht, das Plenum wählt in geheimer Wahl. Die AfD-Kandidaten sind mehrfach durchgefallen – im März 2025 scheiterte Gerold Otten als einziger Bewerber.",
          "sources": [
            {
              "title": "Kein AfD-Recht auf Bundestags-Vize (Organklage abgelehnt)",
              "publisher": "taz / dpa",
              "date": "22.03.2022",
              "url": "https://taz.de/Entscheidungen-des-Verfassungsgerichts/!5843742"
            },
            {
              "title": "Bundestags-Vize: AfD-Mann fällt als einziger durch",
              "publisher": "t-online / dpa",
              "date": "25.03.2025",
              "url": "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_100651758/bundestags-vizepraesident-afd-mann-gerold-otten-scheitert-als-einziger.html"
            },
            {
              "title": "Erneut kein Bundestags-Vizepräsident aus den Reihen der AfD",
              "publisher": "Deutschlandfunk",
              "date": "14.11.2024",
              "url": "https://www.deutschlandfunk.de/erneut-kein-bundestags-vizepraesident-aus-den-reihen-der-afd-104.html"
            }
          ]
        },
        {
          "id": "thueringen",
          "claim": "„Die AfD ist in Thüringen stärkste Kraft.“",
          "category": "belegt",
          "verdict": "Zutreffend. Bei der Landtagswahl am 1. September 2024 kam die AfD auf 32,8 Prozent und wurde stärkste Fraktion mit 32 Sitzen.",
          "sources": [
            {
              "title": "Landtagswahl 2024 in Thüringen – endgültiges Ergebnis",
              "publisher": "Der Landeswahlleiter Thüringen",
              "date": "12.09.2024",
              "url": "https://wahlen.thueringen.de/datenbank/wahl1/wahl.asp?wJahr=2024&wahlart=LW&zeigeErg=LAND"
            },
            {
              "title": "Landtagswahl in Thüringen 2024 – Wahlanalyse",
              "publisher": "Forschungsgruppe Wahlen",
              "date": "02.09.2024",
              "url": "https://www.forschungsgruppe.de/Wahlen/Wahlanalysen/Newsl_Thue_240902.pdf"
            }
          ]
        },
        {
          "id": "bundestagswahl",
          "claim": "„Die AfD wurde bei der Bundestagswahl 2025 mit 20,8 Prozent zweitstärkste Kraft.“",
          "category": "belegt",
          "verdict": "Zutreffend. Nach dem endgültigen Ergebnis kam die AfD auf 20,8 Prozent und 10.328.780 Zweitstimmen; mit 152 Sitzen ist sie zweitstärkste Fraktion.",
          "sources": [
            {
              "title": "Bundestagswahl 2025: Endgültiges Ergebnis",
              "publisher": "Die Bundeswahlleiterin",
              "date": "14.03.2025",
              "url": "https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html"
            },
            {
              "title": "Wahlergebnisse und Wählerschaft der AfD",
              "publisher": "Bundeszentrale für politische Bildung",
              "date": "16.05.2026",
              "url": "https://www.bpb.de/themen/parteien/parteien-in-deutschland/afd/273131/wahlergebnisse-und-waehlerschaft-der-afd/"
            }
          ]
        },
        {
          "id": "aemter-laender",
          "claim": "„Die AfD wird in Hessen, Thüringen und Sachsen pauschal aus allen Ämtern ausgegrenzt.“",
          "category": "umstritten",
          "verdict": "Pauschal falsch. In Hessen scheiterten AfD-Kandidaten für das Vizepräsidentenamt mehr als ein Dutzend Mal; in Thüringen verlor die AfD das Präsidentenamt mit 32 zu 54 Stimmen. In Sachsen sitzt André Wendt dagegen als Zweiter Vizepräsident im Präsidium, und die AfD führt vier Ausschüsse.",
          "nuance": "Ausgrenzung und Mehrheitsentscheidung sind nicht dasselbe: Aus der Geschäftsordnung folgt kein einklagbarer Anspruch auf einen Vize-Posten – das hat das Bundesverfassungsgericht 2022 entschieden. Politisch umstritten bleibt die Praxis trotzdem.",
          "sources": [
            {
              "title": "Hessen: AfD kritisiert Rhein in Brandmauer-Debatte („Verhöhnung der Wähler“, mehr als ein Dutzend gescheiterte Vize-Kandidaten)",
              "publisher": "Hessenschau / hr",
              "date": "05.10.2026",
              "url": "https://www.hessenschau.de/politik/afd-kritisiert-rhein-in-brandmauer-debatte-scharf-verhoehnung-der-waehler-v1,reaktionen-rhein-brandmauer-afd-100.html"
            },
            {
              "title": "Präsidium des Sächsischen Landtags, 8. Wahlperiode (André Wendt, AfD, Zweiter Vizepräsident)",
              "publisher": "Sächsischer Landtag",
              "date": "laufend",
              "url": "https://www.landtag.sachsen.de/de/parlament/praesidium/index.cshtml"
            },
            {
              "title": "Dr. Thadäus König ist neuer Landtagspräsident (54 Stimmen, Muhsal 32)",
              "publisher": "Thüringer Landtag",
              "date": "28.09.2024",
              "url": "https://www.thueringer-landtag.de/presse/pressemitteilungen/2024/dr-thadaeus-koenig-ist-neuer-landtagspraesident"
            },
            {
              "title": "Kein AfD-Recht auf Bundestags-Vize (Organklage abgelehnt)",
              "publisher": "taz / dpa",
              "date": "22.03.2022",
              "url": "https://taz.de/Entscheidungen-des-Verfassungsgerichts/!5843742"
            }
          ]
        },
        {
          "id": "ausschluss",
          "claim": "„Die AfD wird systematisch aus den Parlamentsämtern herausgehalten.“",
          "category": "belegt",
          "verdict": "Belegt. Seit 2017 stellt die AfD als einzige Fraktion keinen Vizepräsidenten des Bundestags – alle Kandidaten scheiterten, das Bundesverfassungsgericht verneinte einen Anspruch.",
          "sources": [
            {
              "title": "Bundestags-Vize: AfD-Mann fällt als einziger durch",
              "publisher": "t-online / dpa",
              "date": "25.03.2025",
              "url": "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_100651758/bundestags-vizepraesident-afd-mann-gerold-otten-scheitert-als-einziger.html"
            },
            {
              "title": "Erneut kein Bundestags-Vizepräsident aus den Reihen der AfD",
              "publisher": "Deutschlandfunk",
              "date": "14.11.2024",
              "url": "https://www.deutschlandfunk.de/erneut-kein-bundestags-vizepraesident-aus-den-reihen-der-afd-104.html"
            },
            {
              "title": "Kein AfD-Recht auf Bundestags-Vize (Organklage abgelehnt)",
              "publisher": "taz / dpa",
              "date": "22.03.2022",
              "url": "https://taz.de/Entscheidungen-des-Verfassungsgerichts/!5843742"
            }
          ]
        },
        {
          "id": "cdu-schnittpunkte",
          "claim": "„CDU und AfD sind in Wahrheit eine Kraft – die Brandmauer ist nur Fassade.“",
          "category": "umstritten",
          "verdict": "Übertrieben. Richtig ist: Auf kommunaler Ebene und am 29.01.2025 gab es gemeinsame Mehrheiten. Falsch ist: Die CDU habe die Brandmauer aufgegeben – sie hält sie formal für Landtags- und Bundesregierungen und hat das Gesetz zwei Tage nach dem Antrag scheitern lassen.",
          "sources": [
            {
              "title": "Mehrheit stimmt nach Regierungserklärung für Migrationsantrag der Union",
              "publisher": "Deutscher Bundestag",
              "date": "29.01.2025",
              "url": "https://www.bundestag.de/dokumente/textarchiv/2025/kw05-de-regierungserklaerung-1041594"
            },
            {
              "title": "„Zustrombegrenzungsgesetz“ der Fraktion der CDU/CSU – Abstimmungsergebnis",
              "publisher": "Deutscher Bundestag",
              "date": "31.01.2025",
              "url": "https://www.bundestag.de/parlament/plenum/abstimmung/abstimmung?id=946"
            },
            {
              "title": "Brandmauer in sächsischen Kommunen: In Sachsen bröckelt’s (Kreistag Meißen, AfD-Vizelandrätin mit CDU-Stimmen)",
              "publisher": "taz",
              "date": "26.01.2025",
              "url": "https://taz.de/Brandmauer-in-saechsischen-Kommunen/!6064675"
            },
            {
              "title": "Brandmauer-Aufreger in Hessen: CDU und AfD empören mit gemeinsamer Liste (Biebesheim, Gemeindevorstand)",
              "publisher": "WELT",
              "date": "27.04.2026",
              "url": "https://www.welt.de/politik/deutschland/article69ef136eb22d448bed5b0ca0/brandmauer-aufreger-in-hessen-cdu-und-afd-empoeren-mit-gemeinsamer-liste-jetzt-drohen-parteiausschluesse.html"
            },
            {
              "title": "Merz, AfD und Migration: Was passiert da gerade?",
              "publisher": "WDR",
              "date": "31.01.2025",
              "url": "https://www1.wdr.de/politik/wahlen/bundestagswahl/merz-cdu-afd-abstimmung-brandmauer-100.html"
            },
            {
              "title": "Grundgesetz, Artikel 21 (Parteien)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_21.html"
            }
          ]
        },
        {
          "id": "thueringen-voigt",
          "claim": "„Voigt wurde wegen Betrugs der Doktortitel aberkannt, und über Nacht änderte der Verfassungsgerichtshof die Thüringer Verfassung, damit Höcke kein Ministerpräsident werden konnte.“",
          "category": "umstritten",
          "verdict": "In dieser Form nicht haltbar. Die TU Chemnitz entzog Voigt den Doktorgrad wegen Fehlern in der Dissertation – ein Gerichtsurteil wegen Betrugs gab es nicht. Der Verfassungsgerichtshof änderte nicht die Verfassung, sondern stoppte den Alterspräsidenten; Höcke scheiterte danach an fehlenden Mehrheiten, nicht an einer Sperre.",
          "sources": [
            {
              "title": "Voigt will vor Gericht um seinen Doktortitel kämpfen (TU Chemnitz entzieht Doktorgrad, externes Gutachten Februar 2025 ohne Entzugs-Voraussetzungen, neue Regeln Mai 2025)",
              "publisher": "forschung-und-lehre.de",
              "date": "05.02.2026",
              "url": "https://www.forschung-und-lehre.de/karriere/voigt-will-vor-gericht-um-seinen-doktortitel-kaempfen-7514"
            },
            {
              "title": "Voigt scheitert mit Widerspruch gegen aberkannten Doktortitel (Fakultätsrat TU Chemnitz weist Widerspruch zurück)",
              "publisher": "forschung-und-lehre.de / dpa",
              "date": "11.08.2026",
              "url": "https://www.forschung-und-lehre.de/recht/voigt-scheitert-mit-widerspruch-gegen-aberkannten-doktortitel-7837"
            },
            {
              "title": "Thüringens Ministerpräsident Mario Voigt gibt Rechtsstreit um Doktortitel auf (keine Klage, Plagiatsvorwürfe)",
              "publisher": "DER SPIEGEL",
              "date": "07.10.2026",
              "url": "https://www.spiegel.de/politik/deutschland/thueringens-ministerpraesident-mario-voigt-gibt-rechtsstreit-um-doktortitel-auf-a-c0d2f4ca-7ba5-4637-b2e2-7c4a79fb5d77"
            },
            {
              "title": "Thüringer Verfassungsgericht gibt CDU-Antrag in Landtagsstreit statt (Treutler muss Geschäftsordnungsantrag zur Abstimmung stellen)",
              "publisher": "tagesschau.de",
              "date": "27.09.2024",
              "url": "https://www.tagesschau.de/eilmeldung/gericht-thueringen-landtag-100.html"
            },
            {
              "title": "Dr. Thadäus König ist neuer Landtagspräsident (54 Stimmen, Muhsal 32)",
              "publisher": "Thüringer Landtag",
              "date": "28.09.2024",
              "url": "https://www.thueringer-landtag.de/presse/pressemitteilungen/2024/dr-thadaeus-koenig-ist-neuer-landtagspraesident"
            },
            {
              "title": "CDU-Politiker Voigt mit 51 Stimmen zum Regierungschef von Thüringen gewählt (Brombeer-Koalition, Linke stützt)",
              "publisher": "tagesschau.de",
              "date": "12.12.2024",
              "url": "https://www.tagesschau.de/inland/innenpolitik/thueringen-voigt-ministerpraesident-100.html"
            },
            {
              "title": "Was vom Misstrauensvotum gegen Voigt bleibt (Höcke 33 Stimmen, nötig 45, Februar und August 2026 gescheitert)",
              "publisher": "tagesschau.de",
              "date": "28.08.2026",
              "url": "https://www.tagesschau.de/inland/regional/thueringen/hoecke-afd-debatte-erkenntnisse,misstrauensvotum-voigt-102.html"
            }
          ]
        },
        {
          "id": "ngo-staat",
          "claim": "„Omas gegen Rechts und ähnliche Initiativen werden vom Staat beauftragt, gegen die AfD zu demonstrieren – Steuergeld-Propaganda.“",
          "category": "umstritten",
          "verdict": "Die Pauschale ist nicht belegt. Belegt ist projektbezogene Bundesförderung einzelner lokaler Gruppen aus dem Programm „Demokratie leben!“. Die Proteste im Januar 2024 wurden von der Bundesregierung nach Aktenlage weder beauftragt noch finanziert – mobilisiert haben sie Gewerkschaften, Kirchen und zivilgesellschaftliche Bündnisse.",
          "sources": [
            {
              "title": "Antwort der Bundesregierung auf AfD-Anfrage: 5.000 Euro für „OMAS GEGEN RECHTS – Buxtehude“ (Modellprojekt), 18.294,22 Euro über lokale Partnerschaften für Demokratie",
              "publisher": "Deutscher Bundestag (BT-Drs. 20/12484)",
              "date": "09.08.2024",
              "url": "https://dserver.bundestag.de/btd/20/124/2012484.pdf"
            },
            {
              "title": "Stellungnahme der Omas gegen Rechts Deutschland e. V.: ehrenamtliches Engagement, keine Finanzierung über Steuermittel (einzelne Regionalgruppen mit Projektmitteln)",
              "publisher": "Omas gegen Rechts Deutschland e. V.",
              "date": "07.02.2025",
              "url": "https://www.omas-gegen-rechts.org/2025/02/07/wir-omas-gegen-rechts-engagieren-uns-ehrenamtlich-keine-finanzierung-ueber-steuermittel/"
            },
            {
              "title": "Antwort der Bundesregierung auf AfD-Anfrage zum Bundesprogramm „Demokratie leben!“ (2023: 182 Mio. Euro bereitgestellt, 165,7 Mio. Euro ausgezahlt)",
              "publisher": "Deutscher Bundestag (BT-Drs. 20/11255)",
              "date": "29.04.2024",
              "url": "https://dserver.bundestag.de/btd/20/112/2011255.pdf"
            },
            {
              "title": "Antwort der Bundesregierung: Kampagne „Wir sind die Brandmauer“ weder initiiert noch finanziell unterstützt",
              "publisher": "Deutscher Bundestag (BT-Drs. 20/11099)",
              "date": "17.04.2024",
              "url": "https://dserver.bundestag.de/btd/20/110/2011099.pdf"
            },
            {
              "title": "DGB ruft zur Teilnahme an Demonstrationen und Kundgebungen gegen Rechtsextremismus auf",
              "publisher": "DGB Bayern",
              "date": "18.01.2024",
              "url": "https://bayern.dgb.de/presse/pressemitteilungen/pressemitteilung/aktionen-gegen-rechtsextremismus-der-dgb-ruft-zur-teilnahme-an-demonstrationen-und-kundgebungen-auf"
            }
          ]
        },
        {
          "id": "rundfunk-staat",
          "claim": "„Der öffentlich-rechtliche Rundfunk wird vom Staat gegen die Opposition gesteuert und bekämpft die AfD mit Steuergeldern.“",
          "category": "nicht-belegt",
          "verdict": "Nicht belegt. Für staatliche Weisungen an Redaktionen gibt es keinen Beleg – das Bundesverfassungsgericht hat 2014 gerade die Staatsferne des Rundfunks geschützt. Belegt ist dagegen, dass die Berichterstattung über Parteien überwiegend negativ ausfällt – das ist aber keine Steuerung.",
          "sources": [
            {
              "title": "Bundesverfassungsgericht: Staatsferne des öffentlich-rechtlichen Rundfunks, begrenzter staatlicher Einfluss in Aufsichtsgremien (1 BvF 1/11)",
              "publisher": "Bundesverfassungsgericht",
              "date": "25.03.2014",
              "url": "https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2014/03/fs20140325_1bvf000111.html"
            },
            {
              "title": "Studie der Universität Mainz (9.389 Beiträge, 47 Medien): überwiegend negative Parteienberichterstattung, AfD in rund 5 Prozent der Beiträge",
              "publisher": "MDR (Studienbericht)",
              "date": "02.05.2024",
              "url": "https://www.mdr.de/nachrichten/sachsen-anhalt/landespolitik/rundfunk-reform-enquete-kommission-landtag-berichterstattung-100.html"
            },
            {
              "title": "Antwort der Bundesregierung auf AfD-Anfrage zum Bundesprogramm „Demokratie leben!“ (2023: 182 Mio. Euro bereitgestellt, 165,7 Mio. Euro ausgezahlt)",
              "publisher": "Deutscher Bundestag (BT-Drs. 20/11255)",
              "date": "29.04.2024",
              "url": "https://dserver.bundestag.de/btd/20/112/2011255.pdf"
            }
          ]
        },
        {
          "id": "siegmund-schulze",
          "claim": "„Ulrich Siegmund wird lächerlich angegriffen, weil er eine Alleinregierung will, und Sven Schulze grenzt die AfD mit allen Methoden aus.“",
          "category": "umstritten",
          "verdict": "Halbwahr. Siegmund hat die Alleinregierung in Sachsen-Anhalt tatsächlich gefordert – das ist ein demokratisches Ziel, kein Skandal. Die Kritik richtete sich gegen seine Positionen und nicht gegen den Satz allein. Schulze persönlich hat die AfD nicht generell ausgeschlossen; die dokumentierten Fälle sind Mehrheitsentscheidungen des Landtags und ein umstrittener Verzicht auf den MPK-Vorsitz.",
          "sources": [
            {
              "title": "AfD Sachsen-Anhalt: „Wir haben das klare Ziel, eine Alleinregierung zu stellen“ (Ulrich Siegmund)",
              "publisher": "t-online",
              "date": "22.05.2025",
              "url": "https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_100735518/afd-in-sachsen-anhalt-erreicht-sie-die-absolute-mehrheit-.html"
            },
            {
              "title": "AfD-Kandidat Siegmund will Alleinregierung in Sachsen-Anhalt (stabile Mehrheit, keine Minderheitsregierung)",
              "publisher": "Stern",
              "date": "07.09.2025",
              "url": "https://www.stern.de/politik/deutschland/afd-kandidat-siegmund-will-alleinregierung-in-sachsen-anhalt-36034130.html"
            },
            {
              "title": "Landtag Sachsen-Anhalt: Abberufung Ulrich Siegmunds als Vorsitzender des Sozialausschusses (71:21, Potsdam-Treffen als Grund)",
              "publisher": "Landtag Sachsen-Anhalt",
              "date": "21.02.2024",
              "url": "https://www.landtag.sachsen-anhalt.de/abberufung"
            },
            {
              "title": "Sachsen-Anhalts Landesregierung verzichtet nach AfD-Wahlsieg auf Vorsitz der Ministerpräsidentenkonferenz (Schulze: unsichere Regierungsbildung)",
              "publisher": "Deutschlandfunk",
              "date": "08.09.2026",
              "url": "https://www.deutschlandfunk.de/sachsen-anhalts-landesregierung-verzichtet-nach-afd-wahlsieg-auf-vorsitz-der-ministerpraesidentenkon-100.html"
            }
          ]
        },
        {
          "id": "wahl-ausschluesse",
          "claim": "„Etliche AfD-Leute werden nicht zur Wahl zugelassen, weil die SPD die Gesetze verbiegt.“",
          "category": "umstritten",
          "verdict": "Die Nichtzulassungen sind belegt, die „Gesetzesbiegerei“ nicht. Die Fälle beruhen auf bestehenden Wählbarkeitsregeln (Verfassungstreue, Formfehler, Unterschriften). Eine konkrete Verfahrensreform hat 2026 die SPD-Fraktion mit den Grünen in Niedersachsen durchgesetzt – die AfD nannte sie „Lex AfD“, die Regierung verweist auf eine vorher geltende Regel. Gerichte haben die Ausschlüsse nicht abschließend in der Sache bestätigt.",
          "sources": [
            {
              "title": "Staatsgerichtshof Bremen: Beschwerden gegen Nichtzulassung der AfD-Wahlvorschläge zurückgewiesen (fehlende gültige Unterzeichnung)",
              "publisher": "Staatsgerichtshof Bremen",
              "date": "16.08.2024",
              "url": "https://www.staatsgerichtshof.bremen.de/sixcms/media.php/13/St_12_23_Urteil_Internetfassung%20mit%20LS.pdf"
            },
            {
              "title": "Verfassungsgerichtshof Rheinland-Pfalz: Verfassungsbeschwerde von Joachim Paul gegen Nichtzulassung zur Oberbürgermeisterwahl in Ludwigshafen ohne Erfolg",
              "publisher": "Verfassungsgerichtshof Rheinland-Pfalz",
              "date": "17.09.2025",
              "url": "https://verfgh.justiz.rlp.de/presse-aktuelles/pressemitteilungen/detail/verfassungsbeschwerde-von-joachim-paul-gegen-nichtzulassung-zur-oberbuergermeisterwahl-in-ludwigshafen-bleibt-ohne-erfolg"
            },
            {
              "title": "Bundesverfassungsgericht: Beschwerde Joachim Pauls nicht angenommen (unzureichende Begründung, keine Sachentscheidung zur Nichtzulassung)",
              "publisher": "Bundesverfassungsgericht",
              "date": "16.09.2025",
              "url": "https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2025/09/rk20250916_2bvr139925.html"
            },
            {
              "title": "VG Oldenburg lehnt Eilantrag auf Zulassung des AfD-Kandidaten Martin Sichert zur Landratswahl im Landkreis Friesland ab (Verweis auf Wahlprüfung)",
              "publisher": "Verwaltungsgericht Oldenburg",
              "date": "17.08.2026",
              "url": "https://verwaltungsgericht-oldenburg.niedersachsen.de/aktuelles/vg-oldenburg-lehnt-eilantrag-auf-zulassung-des-kandidaten-der-afd-zur-landratswahl-im-landkreis-friesland-ab-253154.html"
            },
            {
              "title": "WDR: Wahlausschuss weist AfD-Liste in Jüchen zur Kommunalwahl 2025 zurück (Formfehler, falscher Vorstand)",
              "publisher": "WDR",
              "date": "11.07.2025",
              "url": "https://www1.wdr.de/nachrichten/wahlen/kommunalwahlen-2025/juechen-afd-kommunalwahl-ausgeschlossen-100.html"
            },
            {
              "title": "Landtag beschließt Änderung des niedersächsischen Kommunalwahlgesetzes (SPD/Grüne: Prüfverfahren bei Zweifeln an Verfassungstreue, AfD: „Lex AfD“)",
              "publisher": "Niedersächsisches Innenministerium",
              "date": "28.04.2026",
              "url": "https://www.mi.niedersachsen.de/startseite/aktuelles/presseinformationen/landtag-beschliesst-anderung-des-niedersachsischen-kommunalwahlgesetzes-der-niedersaechsischen-kommunalwahlordnung-und-des-niedersachsischen-kommunalverfassungsgesetzes-250532.html"
            }
          ]
        }
      ]
    },
    {
      "id": "programm",
      "title": "Programm & Außenpolitik",
      "intro": "Was im Wahlprogramm steht – und was daraus in der Debatte gemacht wird.",
      "entries": [
        {
          "id": "eu-austritt",
          "claim": "„Die AfD will aus der Europäischen Union austreten.“",
          "category": "belegt",
          "verdict": "Zutreffend. Das Bundestagswahlprogramm vom Januar 2025 fordert den Austritt aus der EU beziehungsweise eine Neugründung; der Parteitag in Riesa beschloss das Programm. Berichte fassen den Punkt unter „Ausstieg aus der EU“ zusammen.",
          "sources": [
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            },
            {
              "title": "AfD-Wahlprogramm: Vater, Mutter, Kind – und der Ausstieg aus der EU",
              "publisher": "ZDFheute",
              "date": "12.01.2025",
              "url": "https://www.zdfheute.de/politik/deutschland/afd-parteitag-riesa-wahlprogramm-100.html"
            }
          ]
        },
        {
          "id": "russland-finanzierung",
          "claim": "„Die AfD wird von Russland finanziert.“",
          "category": "nicht-belegt",
          "verdict": "Nicht belegt. Recherchen von tagesschau, WDR, NDR und SZ dokumentieren Geldflüsse und eine „Bargeldreserve“ im Umfeld des Abgeordneten Maximilian Krah sowie Verbindungen zu einem russischen Netzwerk. Eine Finanzierung der Partei durch den russischen Staat ist damit nicht nachgewiesen; für die Beteiligten gilt die Unschuldsvermutung.",
          "nuance": "Dokumentierte Geldflüsse im Umfeld sind nicht dasselbe wie eine Parteifinanzierung aus Moskau.",
          "sources": [
            {
              "title": "Ermittlungen zu russischer Einflussnahme: AfD-Politiker Krah und seine „Bargeldreserve“",
              "publisher": "tagesschau.de (WDR/NDR/SZ)",
              "date": "17.04.2024",
              "url": "https://www.tagesschau.de/investigativ/ndr-wdr/afd-krah-byston-voice-of-europe-russland-100.html"
            },
            {
              "title": "Ist Geld aus China auch bei AfD-Politiker Krah gelandet?",
              "publisher": "tagesschau.de (WDR/NDR/SZ)",
              "date": "16.05.2024",
              "url": "https://www.tagesschau.de/investigativ/ndr-wdr/afd-krah-102.html"
            }
          ]
        },
        {
          "id": "china-spionage",
          "claim": "„Ein Mitarbeiter des AfD-Abgeordneten Maximilian Krah wurde wegen Spionage für China verurteilt.“",
          "category": "belegt",
          "verdict": "Zutreffend. Jian G., Mitarbeiter von Krah, wurde im April 2024 festgenommen und am 30. September 2025 wegen geheimdienstlicher Tätigkeit für China verurteilt. Das ist ein Fall im persönlichen Umfeld – keine Feststellung über die Partei.",
          "sources": [
            {
              "title": "Haftbefehl gegen AfD-Mitarbeiter Jian G. wegen China-Spionageverdacht",
              "publisher": "tagesschau.de",
              "date": "24.04.2024",
              "url": "https://www.tagesschau.de/inland/innenpolitik/haftbefehl-jian-g-afd-100.html"
            },
            {
              "title": "Ehemaliger Krah-Mitarbeiter wegen Spionage verurteilt",
              "publisher": "ZDFheute",
              "date": "30.09.2025",
              "url": "https://www.zdfheute.de/politik/deutschland/prozess-urteil-krah-spionage-china-100.html"
            }
          ]
        }
      ]
    },
    {
      "id": "wirtschaft",
      "title": "Wirtschaft, Sozialstaat, Klima",
      "intro": "Der Teil, in dem sich Behauptungen am häufigsten an einer Programmstelle prüfen lassen – und in dem Beleg und Bewertung oft verwechselt werden.",
      "entries": [
        {
          "id": "klima-paris",
          "claim": "„Die AfD will aus dem Pariser Klimaabkommen aussteigen und die CO₂-Abgabe abschaffen.“",
          "category": "belegt",
          "verdict": "Zutreffend. Das Wahlprogramm 2025 fordert den Austritt aus dem Pariser Klimaabkommen, die Abschaffung der CO₂-Abgabe, längere Laufzeiten für Kohlekraftwerke und die Rückkehr zur Kernkraft. Die Zusammenfassung des RND nennt dieselben Punkte.",
          "nuance": "Belegt ist die Programmforderung, nicht ihre Begründung. Ob der Ausstieg klimapolitisch tragfähig ist, ist eine andere Frage – und eine, die sich mit Zahlen führen lässt.",
          "sources": [
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            },
            {
              "title": "AfD-Wahlprogramm 2025 als Zusammenfassung: Die wichtigsten Punkte",
              "publisher": "RND",
              "date": "23.02.2025",
              "url": "https://www.rnd.de/politik/afd-wahlprogramm-2025-als-zusammenfassung-die-wichtigsten-punkte-5CSVGADJX5HNPFL2OIWYKPUSME.html"
            }
          ]
        },
        {
          "id": "sozialstaat",
          "claim": "„Die AfD will den Sozialstaat abschaffen.“",
          "category": "nicht-belegt",
          "verdict": "Nicht belegt. Das Programm beginnt wirtschaftspolitisch mit der sozialen Marktwirtschaft und bekennt sich zur staatlichen Absicherung; eine Abschaffung der Sozialversicherungen steht dort nicht. Belegt sind dagegen Einschnitte für Ausländer und Ausreisepflichtige: Umbau des Bürgergelds, Sachleistungen für Asylbewerber, Leistungen auf dem Existenzminimum.",
          "nuance": "„Sozialstaat abschaffen“ ist ein Strohmann. Die belegte Forderung lautet, Leistungen für Nichtdeutsche zu kürzen – eine harte politische Frage, aber eine andere Aussage.",
          "sources": [
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            },
            {
              "title": "AfD-Wahlprogramm 2025 als Zusammenfassung: Die wichtigsten Punkte",
              "publisher": "RND",
              "date": "23.02.2025",
              "url": "https://www.rnd.de/politik/afd-wahlprogramm-2025-als-zusammenfassung-die-wichtigsten-punkte-5CSVGADJX5HNPFL2OIWYKPUSME.html"
            },
            {
              "title": "AfD-Wahlprogramm: Vater, Mutter, Kind – und der Ausstieg aus der EU",
              "publisher": "ZDFheute",
              "date": "12.01.2025",
              "url": "https://www.zdfheute.de/politik/deutschland/afd-parteitag-riesa-wahlprogramm-100.html"
            }
          ]
        },
        {
          "id": "sozialpolitik-reiche",
          "claim": "„Die AfD macht Politik für Reiche und gegen kleine Leute.“",
          "category": "umstritten",
          "verdict": "Zugespitzt, aber nicht aus der Luft. Das Programm will Vermögen- und Erbschaftsteuer abschaffen und verspricht Entlastungen, die der DIW-Forscher Stefan Bach nach RND-Berechnungen auf 182 Milliarden Euro beziffert – ohne Gegenfinanzierung. Gleichzeitig sollen Sozialleistungen für Ausländer gekürzt werden.",
          "nuance": "Die Richtung der Maßnahmen ist belegbar, das Etikett „für Reiche“ ist eine Bewertung. Wer es benutzt, sollte die Zahl nennen, aus der es folgt.",
          "sources": [
            {
              "title": "AfD-Wahlprogramm 2025 als Zusammenfassung: Die wichtigsten Punkte",
              "publisher": "RND",
              "date": "23.02.2025",
              "url": "https://www.rnd.de/politik/afd-wahlprogramm-2025-als-zusammenfassung-die-wichtigsten-punkte-5CSVGADJX5HNPFL2OIWYKPUSME.html"
            },
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            }
          ]
        },
        {
          "id": "wirtschaft-unfaehig",
          "claim": "„Die AfD ist wirtschaftlich unfähig.“",
          "category": "umstritten",
          "verdict": "Ein Urteil, kein Messwert. Prüfbar ist etwas anderes: Die versprochenen Entlastungen von 182 Milliarden Euro sind nicht gegenfinanziert, und zugleich fordert das Programm den Austritt aus EU und Euro. Das ist der Kern des wirtschaftspolitischen Risikos – nicht die Charakterfrage.",
          "nuance": "„Unfähig“ beschreibt Personen, nicht Programme. Die belastbaren Fragen lauten: Wie werden die 182 Milliarden gegenfinanziert, was kostet der Austritt aus dem Binnenmarkt, welche Übergangsregeln gelten für Schulden, Verträge und Lieferketten?",
          "sources": [
            {
              "title": "AfD-Wahlprogramm 2025 als Zusammenfassung: Die wichtigsten Punkte",
              "publisher": "RND",
              "date": "23.02.2025",
              "url": "https://www.rnd.de/politik/afd-wahlprogramm-2025-als-zusammenfassung-die-wichtigsten-punkte-5CSVGADJX5HNPFL2OIWYKPUSME.html"
            },
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "russland",
      "title": "Russland, NATO, EU",
      "intro": "Außenpolitik ist der Bereich mit den klarsten Programmaussagen – und den größten Beleglücken bei Vorwürfen über Geld und Motive.",
      "entries": [
        {
          "id": "russland-freundlich",
          "claim": "„Die AfD betreibt eine russlandfreundliche Politik.“",
          "category": "belegt",
          "verdict": "Zutreffend. Das Programm fordert die sofortige Aufhebung der Russland-Sanktionen und die Reparatur von Nord Stream; eine Verurteilung des russischen Angriffs auf die Ukraine enthält es nicht. Einen Änderungsantrag, der sie aufnehmen sollte, lehnten die Delegierten in Riesa mit 69 Prozent Nichtbefassung ab.",
          "nuance": "Eine Programmlage ist keine Finanzierung. Die russlandfreundliche Position lässt sich aus dem Text belegen, Zahlungen aus Moskau an die Partei nicht – dafür gibt es einen eigenen Eintrag.",
          "sources": [
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            },
            {
              "title": "AfD-Wahlprogramm 2025 als Zusammenfassung: Die wichtigsten Punkte",
              "publisher": "RND",
              "date": "23.02.2025",
              "url": "https://www.rnd.de/politik/afd-wahlprogramm-2025-als-zusammenfassung-die-wichtigsten-punkte-5CSVGADJX5HNPFL2OIWYKPUSME.html"
            },
            {
              "title": "AfD-Wahlprogramm: Weidel übernimmt „Remigration“ – kontroverse Russland-Haltung",
              "publisher": "Frankfurter Rundschau",
              "date": "16.01.2025",
              "url": "https://www.fr.de/politik/afd-wahlprogramm-weidel-uebernimmt-remigration-kontroverse-russland-haltung-93510171.html"
            },
            {
              "title": "Was zur Außenpolitik in den Wahlprogrammen steht",
              "publisher": "tagesschau.de",
              "date": "13.02.2025",
              "url": "https://www.tagesschau.de/inland/bundestagswahl/programmvergleich/wahlprogramme-aussenpolitik-sicherheit-frieden-100.html"
            }
          ]
        },
        {
          "id": "nato-eu",
          "claim": "„Die AfD will aus NATO und EU raus.“",
          "category": "umstritten",
          "verdict": "Halb richtig, halb falsch. Der Austritt aus EU und Euro steht im Programm. Bei der NATO bekennt sich das Programm zur Mitgliedschaft, bis ein unabhängiges europäisches Militärbündnis aufgebaut ist – ein Austritt steht dort nicht, wird aber von führenden Politikern bezweifelt.",
          "nuance": "Wer beides in einen Satz packt, wird an der NATO-Stelle widerlegt. Sauber ist: EU-Austritt ja, NATO-Austritt nein – jedenfalls nicht im Programm.",
          "sources": [
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            },
            {
              "title": "AfD-Wahlprogramm: Vater, Mutter, Kind – und der Ausstieg aus der EU",
              "publisher": "ZDFheute",
              "date": "12.01.2025",
              "url": "https://www.zdfheute.de/politik/deutschland/afd-parteitag-riesa-wahlprogramm-100.html"
            },
            {
              "title": "Was zur Außenpolitik in den Wahlprogrammen steht",
              "publisher": "tagesschau.de",
              "date": "13.02.2025",
              "url": "https://www.tagesschau.de/inland/bundestagswahl/programmvergleich/wahlprogramme-aussenpolitik-sicherheit-frieden-100.html"
            }
          ]
        }
      ]
    },
    {
      "id": "partei",
      "title": "Partei, Personal, Finanzen",
      "intro": "Überprüfbare Aussagen über Organisation und Abgeordnete.",
      "entries": [
        {
          "id": "parteispende",
          "claim": "„Die AfD musste wegen illegaler Parteispenden Strafzahlungen leisten.“",
          "category": "belegt",
          "verdict": "Zutreffend. Wegen einer 2017 über eine Schweizer Firma abgewickelten Spende an den Kreisverband Bodensee verhängte die Bundestagsverwaltung eine Sanktion; das Oberverwaltungsgericht Berlin-Brandenburg bestätigte die Zahlungspflicht 2023. Die Summe lag bei rund 396.000 Euro.",
          "sources": [
            {
              "title": "AfD muss Sanktionszahlungen wegen Parteispende leisten (OVG Berlin-Brandenburg 3 B 28/21)",
              "publisher": "NVwZ / C.H. Beck",
              "date": "03.03.2023",
              "url": "https://rsw.beck.de/zeitschriften/nvwz/startseite/2023/03/03/afd-muss-sanktionszahlungen-wegen-parteispende-leisten"
            },
            {
              "title": "Parteispende an AfD war wohl illegal",
              "publisher": "Süddeutsche Zeitung",
              "date": "24.10.2019",
              "url": "https://www.sueddeutsche.de/politik/afd-spenden-strafe-1.4655156"
            },
            {
              "title": "Strafzahlung für Weidel-Spende: AfD scheitert vor Gericht",
              "publisher": "BKZ / dpa",
              "date": "23.10.2026",
              "url": "https://www.bkz.de/nachrichten/strafzahlung-fuer-weidel-spende-afd-scheitert-vor-gericht-108909.html"
            }
          ]
        },
        {
          "id": "frauenanteil",
          "claim": "„Die AfD-Fraktion hat den niedrigsten Frauenanteil aller Fraktionen.“",
          "category": "belegt",
          "verdict": "Zutreffend. Nach der Wahl 2025 liegt der Frauenanteil der AfD-Fraktion bei 11,8 Prozent; keine andere Fraktion hat einen niedrigeren Wert.",
          "sources": [
            {
              "title": "Abgeordneten-Statistik: Der neue Bundestag in Zahlen",
              "publisher": "Deutscher Bundestag",
              "date": "24.02.2025",
              "url": "https://www.bundestag.de/dokumente/textarchiv/2025/kw09-wahlergebnis-statistik-1055550"
            },
            {
              "title": "Gewählte Abgeordnete – Bundestagswahl 2025",
              "publisher": "Bundeszentrale für politische Bildung",
              "date": "02.04.2025",
              "url": "https://www.bpb.de/kurz-knapp/zahlen-und-fakten/bundestagswahlen/560747/gewaehlte-abgeordnete"
            }
          ]
        },
        {
          "id": "letzte-kraft",
          "claim": "„Die AfD ist eine der letzten demokratischen Kräfte im Land.“",
          "category": "nicht-belegt",
          "verdict": "Nicht belegt. Das ist eine politische Selbstbeschreibung, keine überprüfbare Tatsache. Ihr steht die behördliche Bewertung des Bundesamts für Verfassungsschutz gegenüber, das die Partei 2025 als gesichert rechtsextremistische Bestrebung einstufte. Zugleich ist die Partei zugelassen, tritt zu Wahlen an und stellt Mandate. Beides gehört in die Bewertung.",
          "sources": [
            {
              "title": "AfD laut Verfassungsschutz gesichert rechtsextremistisch",
              "publisher": "Deutsche Welle",
              "date": "02.05.2025",
              "url": "https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368"
            },
            {
              "title": "Grundgesetz, Artikel 21 (Parteien)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_21.html"
            },
            {
              "title": "Bundestagswahl 2025: Endgültiges Ergebnis",
              "publisher": "Die Bundeswahlleiterin",
              "date": "14.03.2025",
              "url": "https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html"
            }
          ]
        }
      ]
    },
    {
      "id": "anhaenger",
      "title": "Was AfD-Anhänger sagen",
      "intro": "Die Sätze, die in Diskussionen für die Partei vorgebracht werden – und was davon belegbar ist.",
      "entries": [
        {
          "id": "altparteien-kartell",
          "claim": "„Die Altparteien sind ein korruptes Kartell – nur die AfD ist sauber.“",
          "category": "umstritten",
          "verdict": "Dass die Etablierten ein Kartell bilden, lässt sich aus Wahlergebnissen und Koalitionsverhalten nicht ablesen. Belegt ist: Keine Partei ist „sauber“ im Sinne des Parteifinanzierungsrechts – die AfD selbst zahlte 396.000 Euro Sanktionen wegen einer anonymen Spende.",
          "sources": [
            {
              "title": "AfD muss Sanktionszahlungen wegen Parteispende leisten (OVG Berlin-Brandenburg 3 B 28/21)",
              "publisher": "NVwZ / C.H. Beck",
              "date": "03.03.2023",
              "url": "https://rsw.beck.de/zeitschriften/nvwz/startseite/2023/03/03/afd-muss-sanktionszahlungen-wegen-parteispende-leisten"
            },
            {
              "title": "Haftbefehl gegen AfD-Mitarbeiter Jian G. wegen China-Spionageverdacht",
              "publisher": "tagesschau.de",
              "date": "24.04.2024",
              "url": "https://www.tagesschau.de/inland/innenpolitik/haftbefehl-jian-g-afd-100.html"
            },
            {
              "title": "Grundgesetz, Artikel 21 (Parteien)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_21.html"
            }
          ]
        },
        {
          "id": "letzte-demokratische-kraft",
          "claim": "„Die AfD ist die letzte demokratische Kraft im Land.“",
          "category": "umstritten",
          "verdict": "Belegt ist nur der erste Teil: Die AfD ist die einzige große Partei, die die Bundesregierung nicht stützt, und mit 20,8 Prozent die zweitstärkste Kraft. Ob sie demokratisch ist, beantwortet das Grundgesetz nicht über Selbstbeschreibung, sondern über das Verhalten – und dazu liegt eine behördliche Einschätzung vor.",
          "sources": [
            {
              "title": "Bundestagswahl 2025: Endgültiges Ergebnis",
              "publisher": "Die Bundeswahlleiterin",
              "date": "14.03.2025",
              "url": "https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html"
            },
            {
              "title": "AfD laut Verfassungsschutz gesichert rechtsextremistisch",
              "publisher": "Deutsche Welle",
              "date": "02.05.2025",
              "url": "https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368"
            },
            {
              "title": "Keine Zulassung der Revision gegen die Urteile des OVG Münster zur Einstufung der AfD als „Verdachtsfall“ (BVerwG 6 B 23.24)",
              "publisher": "Bundesverwaltungsgericht",
              "date": "22.07.2025",
              "url": "https://www.bverwg.de/pm/2025/54"
            },
            {
              "title": "Verurteilungen des thüringischen AfD-Fraktionsvorsitzenden wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (3 StR 484/24, 3 StR 519/24)",
              "publisher": "Bundesgerichtshof",
              "date": "11.09.2025",
              "url": "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
            },
            {
              "title": "Grundgesetz, Artikel 21 (Parteien)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_21.html"
            }
          ]
        },
        {
          "id": "brandmauer-undemokratisch",
          "claim": "„Die Brandmauer ist undemokratisch, weil sie den Willen der Mehrheit missachtet.“",
          "category": "umstritten",
          "verdict": "Als politische Kritik legitim, rechtlich falsch: Parteien dürfen nicht zur Zusammenarbeit gezwungen werden. Artikel 21 Grundgesetz schützt die Koalitionsfreiheit. Was stimmt: Die Brandmauer schließt 20,8 Prozent der Wähler dauerhaft von Regierungsverantwortung aus.",
          "sources": [
            {
              "title": "Mehrheit stimmt nach Regierungserklärung für Migrationsantrag der Union",
              "publisher": "Deutscher Bundestag",
              "date": "29.01.2025",
              "url": "https://www.bundestag.de/dokumente/textarchiv/2025/kw05-de-regierungserklaerung-1041594"
            },
            {
              "title": "„Zustrombegrenzungsgesetz“ der Fraktion der CDU/CSU – Abstimmungsergebnis",
              "publisher": "Deutscher Bundestag",
              "date": "31.01.2025",
              "url": "https://www.bundestag.de/parlament/plenum/abstimmung/abstimmung?id=946"
            },
            {
              "title": "Merz, AfD und Migration: Was passiert da gerade?",
              "publisher": "WDR",
              "date": "31.01.2025",
              "url": "https://www1.wdr.de/politik/wahlen/bundestagswahl/merz-cdu-afd-abstimmung-brandmauer-100.html"
            },
            {
              "title": "Grundgesetz, Artikel 21 (Parteien)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_21.html"
            }
          ]
        },
        {
          "id": "remigration-nur-kriminelle",
          "claim": "„Remigration heißt nur: Kriminelle und abgelehnte Asylbewerber abschieben.“",
          "category": "umstritten",
          "verdict": "Für das Wahlprogramm stimmt das. Für das Potsdamer Treffen nicht: Dort wurde ein Konzept vorgestellt, das auch deutsche Staatsbürger einbezog. Beide Aussagen lassen sich nicht zu einer machen.",
          "sources": [
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            },
            {
              "title": "AfD-Politiker diskutieren offenbar Vertreibungsplan",
              "publisher": "tagesschau.de",
              "date": "10.01.2024",
              "url": "https://www.tagesschau.de/inland/innenpolitik/afd-neonazis-geheimtreffen-100.html"
            },
            {
              "title": "Potsdam-Treffen im Landtag: „Teilnehmer haben sich demaskiert“",
              "publisher": "MDR Sachsen-Anhalt",
              "date": "25.01.2024",
              "url": "https://www.mdr.de/nachrichten/sachsen-anhalt/landespolitik/landtag-correctiv-potsdam-treffen-afd-debatte-100.html"
            },
            {
              "title": "Rechtsextremisten berieten mit AfD-Politikern über Massenausweisungen",
              "publisher": "Deutschlandfunk",
              "date": "11.01.2024",
              "url": "https://www.deutschlandfunk.de/rechtsextremisten-berieten-mit-afd-politikern-ueber-massenausweisungen-von-menschen-mit-migrationshi-100.html"
            }
          ]
        },
        {
          "id": "verfassungsschutz-weisungsgebunden",
          "claim": "„Der Verfassungsschutz ist weisungsgebunden und wird gegen die AfD missbraucht.“",
          "category": "umstritten",
          "verdict": "Weisungsgebunden ist er – das steht im Gesetz. Missbraucht worden ist er in diesem Fall nicht, soweit Gerichte das geprüft haben. Der Selen-Fall zeigt allerdings, dass politische Einflussnahme real ist. Beides ist wahr.",
          "sources": [
            {
              "title": "Bundesverfassungsschutzgesetz, § 2 (Verfassungsschutzbehörden) und § 7 (Weisungsrechte des Bundes)",
              "publisher": "Bundesministerium der Justiz (gesetze-im-internet.de)",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/bverfschg/"
            },
            {
              "title": "Aufsicht und Kontrolle: Dienst- und Fachaufsicht BMI, PKGr, Vertrauensgremium, BfDI, Bundesrechnungshof, gerichtliche und öffentliche Kontrolle",
              "publisher": "Bundesamt für Verfassungsschutz",
              "date": "laufend",
              "url": "https://www.verfassungsschutz.de/DE/verfassungsschutz/auftrag-und-arbeitsweise/aufsicht-und-kontrolle/aufsicht-und-kontrolle_node.html"
            },
            {
              "title": "Keine Zulassung der Revision gegen die Urteile des OVG Münster zur Einstufung der AfD als „Verdachtsfall“ (BVerwG 6 B 23.24)",
              "publisher": "Bundesverwaltungsgericht",
              "date": "22.07.2025",
              "url": "https://www.bverwg.de/pm/2025/54"
            },
            {
              "title": "AfD laut Verfassungsschutz gesichert rechtsextremistisch",
              "publisher": "Deutsche Welle",
              "date": "02.05.2025",
              "url": "https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368"
            }
          ]
        },
        {
          "id": "hoecke-opfer",
          "claim": "„Höcke wird verfolgt, weil er die Wahrheit sagt – er ist ein politisches Opfer.“",
          "category": "umstritten",
          "verdict": "Verfolgt wird er nicht. Er wurde zweimal nach § 86a StGB verurteilt, weil er den SA-Leitspruch „Alles für Deutschland“ verwendete; der Bundesgerichtshof bestätigte die Urteile 2025. Ob die Norm selbst richtig ist, ist eine politische Frage – der Verstoß ist gerichtlich festgestellt.",
          "sources": [
            {
              "title": "Verurteilungen des thüringischen AfD-Fraktionsvorsitzenden wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (3 StR 484/24, 3 StR 519/24)",
              "publisher": "Bundesgerichtshof",
              "date": "11.09.2025",
              "url": "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
            },
            {
              "title": "Höcke-Prozess: Gericht lehnt zahlreiche Beweisanträge ab (SA-Leitspruch unstrittig, Prominenz unerheblich)",
              "publisher": "epd / evangelisch.de",
              "date": "01.07.2024",
              "url": "https://www.evangelisch.de/inhalte/231392/01-07-2024/hoecke-prozess-gericht-lehnt-zahlreiche-beweisantraege-ab"
            }
          ]
        },
        {
          "id": "russland",
          "claim": "„Die AfD wird von Russland bezahlt.“",
          "category": "nicht-belegt",
          "verdict": "Eine Parteifinanzierung aus Russland ist nicht belegt. Belegt sind Ermittlungen zu russischen Zahlungen an einzelne Funktionäre und ein rechtskräftig verurteilter Mitarbeiter, der für China spionierte.",
          "sources": [
            {
              "title": "Haftbefehl gegen AfD-Mitarbeiter Jian G. wegen China-Spionageverdacht",
              "publisher": "tagesschau.de",
              "date": "24.04.2024",
              "url": "https://www.tagesschau.de/inland/innenpolitik/haftbefehl-jian-g-afd-100.html"
            },
            {
              "title": "Ehemaliger Krah-Mitarbeiter wegen Spionage verurteilt",
              "publisher": "ZDFheute",
              "date": "30.09.2025",
              "url": "https://www.zdfheute.de/politik/deutschland/prozess-urteil-krah-spionage-china-100.html"
            },
            {
              "title": "Ermittlungen zu russischer Einflussnahme: AfD-Politiker Krah und seine „Bargeldreserve“",
              "publisher": "tagesschau.de (WDR/NDR/SZ)",
              "date": "17.04.2024",
              "url": "https://www.tagesschau.de/investigativ/ndr-wdr/afd-krah-byston-voice-of-europe-russland-100.html"
            },
            {
              "title": "Ist Geld aus China auch bei AfD-Politiker Krah gelandet?",
              "publisher": "tagesschau.de (WDR/NDR/SZ)",
              "date": "16.05.2024",
              "url": "https://www.tagesschau.de/investigativ/ndr-wdr/afd-krah-102.html"
            },
            {
              "title": "AfD laut Verfassungsschutz gesichert rechtsextremistisch",
              "publisher": "Deutsche Welle",
              "date": "02.05.2025",
              "url": "https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368"
            }
          ]
        },
        {
          "id": "nur-protest",
          "claim": "„Die 20,8 Prozent sind nur Protestwähler ohne Überzeugung.“",
          "category": "umstritten",
          "verdict": "Eine Deutung, keine Messung. Die Wählerschaft ist nach Geschlecht, Region und Migrationsgeschichte sehr unterschiedlich zusammengesetzt.",
          "sources": [
            {
              "title": "Wahlergebnisse und Wählerschaft der AfD",
              "publisher": "Bundeszentrale für politische Bildung",
              "date": "16.05.2026",
              "url": "https://www.bpb.de/themen/parteien/parteien-in-deutschland/afd/273131/wahlergebnisse-und-waehlerschaft-der-afd/"
            },
            {
              "title": "Migrantisch, deutsch, AfD-Wähler: „Wir stehen immer noch auf einer Stufe mit Flüchtlingen“ (mit KAS-Wählerdaten)",
              "publisher": "Der Tagesspiegel",
              "date": "02.07.2026",
              "url": "https://www.tagesspiegel.de/berlin/migrantisch-deutsch-afd-wahler-wir-stehen-immer-noch-auf-einer-stufe-mit-fluchtlingen-15748778.html"
            }
          ]
        },
        {
          "id": "asylrecht",
          "claim": "„Die AfD will das Asylrecht abschaffen.“",
          "category": "umstritten",
          "verdict": "Zugespitzt. Das Programm will das individuelle Asylrecht in eine institutionelle Garantie oder einfachgesetzliche Regelung umwandeln – ein tiefgreifender Eingriff, aber keine ersatzlose Streichung.",
          "sources": [
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            },
            {
              "title": "Gegensätzliche Rezepte in der Asyl- und Zuwanderungspolitik",
              "publisher": "Das Parlament",
              "date": "13.02.2025",
              "url": "https://www.das-parlament.de/inland/innenpolitik/gegensaetzliche-rezepte-in-der-asyl-und-zuwanderungspolitik"
            }
          ]
        },
        {
          "id": "mitgliederzahl",
          "claim": "„Die AfD hat einen Mitgliederrekord – 73.108 Mitglieder.“",
          "category": "umstritten",
          "verdict": "Die Zahl stammt von der Partei selbst. Ein belastbarer Vorjahresvergleich fehlt, weil die AfD keine präzise Vergleichszahl geliefert hat.",
          "sources": [
            {
              "title": "Mitgliederboom bei Linken – CDU und SPD verlieren Mitglieder",
              "publisher": "Deutschlandfunk",
              "date": "08.03.2026",
              "url": "https://www.deutschlandfunk.de/mitgliederboom-bei-linken-cdu-und-spd-verlieren-mitglieder-100.html"
            }
          ]
        }
      ]
    },
    {
      "id": "gegenargumente",
      "title": "Häufige Gegenargumente",
      "intro": "Die Einwände, die gegen Kritik an der AfD meist kommen – einzeln geprüft.",
      "entries": [
        {
          "id": "wahl-verboten",
          "claim": "„Eine verfassungsfeindliche Partei darf man nicht wählen – das ist doch verboten.“",
          "category": "nicht-belegt",
          "verdict": "Rechtlich falsch. Ein Parteiverbot gibt es nur durch das Bundesverfassungsgericht, und die AfD ist nicht verboten. Die Einstufung durch den Verfassungsschutz ist kein Wahlverbot.",
          "sources": [
            {
              "title": "Grundgesetz, Artikel 21 (Parteien)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_21.html"
            },
            {
              "title": "Nach Wahlsieg: Wie liefe ein AfD-Verbotsverfahren?",
              "publisher": "WDR",
              "date": "08.09.2026",
              "url": "https://www1.wdr.de/politik/afd-ablauf-parteiverbotsverfahren-100.html"
            },
            {
              "title": "Keine Zulassung der Revision gegen die Urteile des OVG Münster zur Einstufung der AfD als „Verdachtsfall“ (BVerwG 6 B 23.24)",
              "publisher": "Bundesverwaltungsgericht",
              "date": "22.07.2025",
              "url": "https://www.bverwg.de/pm/2025/54"
            }
          ]
        },
        {
          "id": "einzelfall",
          "claim": "„Höcke, Krah, Potsdam – das sind Einzelfälle, die nichts über die Partei sagen.“",
          "category": "umstritten",
          "verdict": "Einzelfälle sind keine Kollektivschuld. Aber der Verfassungsschutz prüft nicht Einzelfälle, sondern die Gesamtpartei – und begründet seine Einstufung mit der Prägung der Partei als Ganzes.",
          "sources": [
            {
              "title": "AfD laut Verfassungsschutz gesichert rechtsextremistisch",
              "publisher": "Deutsche Welle",
              "date": "02.05.2025",
              "url": "https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368"
            },
            {
              "title": "Medien veröffentlichen Verfassungsschutz-Gutachten zur AfD (mit Nachtrag zur Eilentscheidung des VG Köln im Februar 2026)",
              "publisher": "tagesschau.de",
              "date": "14.05.2025",
              "url": "https://www.tagesschau.de/inland/afd-medien-publizieren-verfassungsschutz-gutachten-100.html"
            },
            {
              "title": "Keine Zulassung der Revision gegen die Urteile des OVG Münster zur Einstufung der AfD als „Verdachtsfall“ (BVerwG 6 B 23.24)",
              "publisher": "Bundesverwaltungsgericht",
              "date": "22.07.2025",
              "url": "https://www.bverwg.de/pm/2025/54"
            },
            {
              "title": "Wie stuft der Verfassungsschutz die AfD in den Bundesländern ein?",
              "publisher": "CORRECTIV",
              "date": "17.06.2026",
              "url": "https://correctiv.org/aktuelles/afd/2026/06/17/wie-stuft-der-verfassungsschutz-die-afd-in-den-bundeslaendern-ein"
            },
            {
              "title": "AfD-Politiker diskutieren offenbar Vertreibungsplan",
              "publisher": "tagesschau.de",
              "date": "10.01.2024",
              "url": "https://www.tagesschau.de/inland/innenpolitik/afd-neonazis-geheimtreffen-100.html"
            }
          ]
        },
        {
          "id": "remigration-millionen",
          "claim": "„Remigration heißt Vertreibung von Millionen – auch von Deutschen mit Migrationshintergrund.“",
          "category": "umstritten",
          "verdict": "Für das Wahlprogramm nicht belegt, für das Potsdamer Konzept dokumentiert. Wer beides gleichsetzt, hat den Punkt – verliert aber die Debatte um das Programm.",
          "sources": [
            {
              "title": "AfD-Parteitag nimmt Forderung nach „Remigration“ ins Wahlprogramm auf",
              "publisher": "Stuttgarter Zeitung / dpa",
              "date": "11.01.2025",
              "url": "https://www.stuttgarter-zeitung.de/politik/bundestagswahl-2025-afd-parteitag-nimmt-forderung-nach-remigration-ins-wahlprogramm-auf-79031156.html"
            },
            {
              "title": "AfD-Politiker diskutieren offenbar Vertreibungsplan",
              "publisher": "tagesschau.de",
              "date": "10.01.2024",
              "url": "https://www.tagesschau.de/inland/innenpolitik/afd-neonazis-geheimtreffen-100.html"
            },
            {
              "title": "Rechtsextremisten berieten mit AfD-Politikern über Massenausweisungen",
              "publisher": "Deutschlandfunk",
              "date": "11.01.2024",
              "url": "https://www.deutschlandfunk.de/rechtsextremisten-berieten-mit-afd-politikern-ueber-massenausweisungen-von-menschen-mit-migrationshi-100.html"
            },
            {
              "title": "Potsdam-Treffen im Landtag: „Teilnehmer haben sich demaskiert“",
              "publisher": "MDR Sachsen-Anhalt",
              "date": "25.01.2024",
              "url": "https://www.mdr.de/nachrichten/sachsen-anhalt/landespolitik/landtag-correctiv-potsdam-treffen-afd-debatte-100.html"
            },
            {
              "title": "Potsdamer Treffen vom 25. November 2023 und Correctiv-Bericht (Antwort der Bundesregierung, 20/13179)",
              "publisher": "Deutscher Bundestag",
              "date": "09.10.2024",
              "url": "https://www.bundestag.de/presse/hib/kurzmeldungen-1023376"
            }
          ]
        },
        {
          "id": "brandmauer-legitim",
          "claim": "„Die Brandmauer ist legitim, weil die AfD verfassungsfeindlich ist.“",
          "category": "umstritten",
          "verdict": "Als politische Haltung legitim. Als Begründung wird sie zirkulär, wenn die Einstufung zugleich der Beweis für die Einstufung sein soll.",
          "sources": [
            {
              "title": "AfD laut Verfassungsschutz gesichert rechtsextremistisch",
              "publisher": "Deutsche Welle",
              "date": "02.05.2025",
              "url": "https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368"
            },
            {
              "title": "Medien veröffentlichen Verfassungsschutz-Gutachten zur AfD (mit Nachtrag zur Eilentscheidung des VG Köln im Februar 2026)",
              "publisher": "tagesschau.de",
              "date": "14.05.2025",
              "url": "https://www.tagesschau.de/inland/afd-medien-publizieren-verfassungsschutz-gutachten-100.html"
            },
            {
              "title": "Keine Zulassung der Revision gegen die Urteile des OVG Münster zur Einstufung der AfD als „Verdachtsfall“ (BVerwG 6 B 23.24)",
              "publisher": "Bundesverwaltungsgericht",
              "date": "22.07.2025",
              "url": "https://www.bverwg.de/pm/2025/54"
            },
            {
              "title": "Grundgesetz, Artikel 21 (Parteien)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_21.html"
            },
            {
              "title": "Grundgesetz, Artikel 38 (Wahl, freies Mandat)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_38.html"
            },
            {
              "title": "Bundestagswahl 2025: Endgültiges Ergebnis",
              "publisher": "Die Bundeswahlleiterin",
              "date": "14.03.2025",
              "url": "https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html"
            }
          ]
        },
        {
          "id": "keine-migranten-2",
          "claim": "„Die AfD hat keine Migranten in ihren Reihen – das ist eine rein deutsche Partei.“",
          "category": "nicht-belegt",
          "verdict": "Falsch. Sie hat welche – aber den niedrigsten Anteil aller Fraktionen. Das Argument funktioniert nur, wenn man beides sagt.",
          "sources": [
            {
              "title": "73 Abgeordnete mit Migrationshintergrund",
              "publisher": "Mediendienst Integration",
              "date": "27.02.2025",
              "url": "https://mediendienst-integration.de/artikel/73-abgeordnete-mit-migrationshintergrund.html"
            },
            {
              "title": "Migrantisch, deutsch, AfD-Wähler: „Wir stehen immer noch auf einer Stufe mit Flüchtlingen“ (mit KAS-Wählerdaten)",
              "publisher": "Der Tagesspiegel",
              "date": "02.07.2026",
              "url": "https://www.tagesspiegel.de/berlin/migrantisch-deutsch-afd-wahler-wir-stehen-immer-noch-auf-einer-stufe-mit-fluchtlingen-15748778.html"
            },
            {
              "title": "Zeit für Deutschland – Programm der AfD zur Wahl zum 21. Deutschen Bundestag",
              "publisher": "AfD-Bundesverband",
              "date": "12.01.2025",
              "url": "https://www.afd.de/wp-content/uploads/2025/02/AfD_Bundestagswahlprogramm2025_web.pdf"
            }
          ]
        },
        {
          "id": "zirkulaeres-argument",
          "claim": "„Die AfD will die Demokratie abschaffen – deshalb ist das Argument mit der Demokratie zirkulär.“",
          "category": "umstritten",
          "verdict": "Der Zirkularitätsvorwurf ist berechtigt, solange „verfassungsfeindlich“ als Prämisse gesetzt wird. Er verschwindet, sobald man konkrete Handlungen, Urteile und Programmstellen benennt.",
          "sources": [
            {
              "title": "Grundgesetz, Artikel 21 (Parteien)",
              "publisher": "Bundesministerium der Justiz",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/gg/art_21.html"
            },
            {
              "title": "AfD laut Verfassungsschutz gesichert rechtsextremistisch",
              "publisher": "Deutsche Welle",
              "date": "02.05.2025",
              "url": "https://www.dw.com/de/afd-laut-verfassungsschutz-gesichert-rechtsextremistisch/a-72413368"
            },
            {
              "title": "Verurteilungen des thüringischen AfD-Fraktionsvorsitzenden wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (3 StR 484/24, 3 StR 519/24)",
              "publisher": "Bundesgerichtshof",
              "date": "11.09.2025",
              "url": "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
            },
            {
              "title": "Medien veröffentlichen Verfassungsschutz-Gutachten zur AfD (mit Nachtrag zur Eilentscheidung des VG Köln im Februar 2026)",
              "publisher": "tagesschau.de",
              "date": "14.05.2025",
              "url": "https://www.tagesschau.de/inland/afd-medien-publizieren-verfassungsschutz-gutachten-100.html"
            },
            {
              "title": "Mehrheit stimmt nach Regierungserklärung für Migrationsantrag der Union",
              "publisher": "Deutscher Bundestag",
              "date": "29.01.2025",
              "url": "https://www.bundestag.de/dokumente/textarchiv/2025/kw05-de-regierungserklaerung-1041594"
            }
          ]
        }
      ]
    },
    {
      "id": "medien",
      "title": "Medien & Weidel",
      "intro": "Was an der Rede von Manipulation belegt ist, was nicht – und wie sich das trennen lässt.",
      "entries": [
        {
          "id": "mw-wirkung",
          "claim": "„Sie beantwortet keine Fragen und ist unfreundlich“ – was davon ist Wahrnehmung, was ist belegbar?",
          "category": "umstritten",
          "verdict": "Einordnung: „Unfreundlich“ ist eine Wahrnehmungsbeschreibung, keine belegte Persönlichkeitseigenschaft. Belegbar sind dagegen knappe, ausweichende oder prämissenangreifende Antworten, Gegenfragen und Interviewabbrüche – als Antwortstrategien unter Gesprächssteuerung und Zeitdruck. Daraus folgt weder, dass die Frage immer unfair war, noch, dass das Fernsehen sie gezielt so inszeniert hat.",
          "sources": [
            {
              "title": "Phoenix-Interview mit Alice Weidel – Abbruch nach „sozialnationalistisch“-Frage (Aufzeichnung)",
              "publisher": "Phoenix / ZDF",
              "date": "28.11.2020",
              "url": "https://www.youtube.com/watch?v=iMYpjhe78z8"
            },
            {
              "title": "AfD-Parteitag: Alice Weidel bricht Interview nach Frage zur Sozialpolitik ab",
              "publisher": "RND",
              "date": "2020",
              "url": "https://www.rnd.de/politik/afd-parteitag-alice-weidel-bricht-interview-nach-frage-zur-sozialpolitik-ab-S2SA6U4HEBCIDABC5EXHHBAGOU.html"
            },
            {
              "title": "Studie zu Frageumgehung (equivocal response) bei politischen Interviews",
              "publisher": "John Benjamins (TTWIA 78.04)",
              "date": "laufend",
              "url": "https://www.benjamins.com/catalog/ttwia.78.04hul"
            },
            {
              "title": "Studie über politische Gegenfragen im TV-Interview",
              "publisher": "ScienceDirect",
              "date": "laufend",
              "url": "https://www.sciencedirect.com/science/article/abs/pii/S037821661830852X"
            },
            {
              "title": "Alice Weidel im ZDF-Sommerinterview: vage Antworten, Gegenangriffe (Einschätzung)",
              "publisher": "WEB.DE",
              "date": "2022",
              "url": "https://web.de/magazine/politik/alice-weidel-afd-sommerinterview-zdf-opfer-verfassungsschutz-russland-37176650"
            }
          ]
        },
        {
          "id": "mw-fachbegriffe",
          "claim": "Fachbegriff-Tabelle: Was Fernsehen und Interviewforschung wirklich so nennen – und was nicht.",
          "category": "belegt",
          "verdict": "Belegt: Die Begriffe Framing, Suggestiv-/Prämissenfrage, Konfrontationsinterview, Redezeit/Unterbrechung, Einspieler/O-Ton, B-Roll und Cutaway/Reaktionsbild sind etabliert. „O-Ton-Falle“, „Jäger-Falle“, „Zeitknechtschaft“, „Blackout durch Einwurf“ und „Mikroschnitt“ konnten als allgemein anerkannte Fachbegriffe für politische Fernsehinterviews nicht verifiziert werden.",
          "sources": [
            {
              "title": "Studie zu Frageumgehung (equivocal response) bei politischen Interviews",
              "publisher": "John Benjamins (TTWIA 78.04)",
              "date": "laufend",
              "url": "https://www.benjamins.com/catalog/ttwia.78.04hul"
            },
            {
              "title": "Studie über politische Gegenfragen im TV-Interview",
              "publisher": "ScienceDirect",
              "date": "laufend",
              "url": "https://www.sciencedirect.com/science/article/abs/pii/S037821661830852X"
            },
            {
              "title": "Gesprächsanalyse zu Redezeit, Einwürfen und Einspielern in „hart aber fair“",
              "publisher": "Universität Innsbruck (ULB)",
              "date": "laufend",
              "url": "https://ulb-dok.uibk.ac.at/download/pdf/10250682.pdf"
            },
            {
              "title": "Pressekodex des Deutschen Presserats (u. a. Richtlinie 2.4 zur wahrheitsgemäßen Wiedergabe)",
              "publisher": "Deutscher Presserat",
              "date": "laufend",
              "url": "https://www.presserat.de/pressekodex.html"
            },
            {
              "title": "ZDF: Verfahren für Programmbeschwerden beim Fernsehrat",
              "publisher": "ZDF",
              "date": "laufend",
              "url": "https://www.zdf.de/unternehmen/organisation/gremien/fernsehrat/eingaben-102.html"
            }
          ]
        },
        {
          "id": "mw-beispiele",
          "claim": "Vier belegbare Auftritte: Maischberger 2022, Phoenix 2020, ARD-Sommerinterview 2025, ZDF-Porträt 2025.",
          "category": "belegt",
          "verdict": "Belegt sind die Abläufe der vier Auftritte. Sie zeigen zugespitzte Frageformen, Prämissen-Konflikte, externe Störung und redaktionelle Kontextualisierung – aber keinen Beweis für gezielte Benachteiligung Weidels durch Schnitt, Redezeit oder Regie.",
          "sources": [
            {
              "title": "Maischberger: Weidel und Strack-Zimmermann streiten über Ukraine-Krieg und Sanktionen (Ja/Nein-Runde)",
              "publisher": "Frankfurter Rundschau",
              "date": "20.09.2022",
              "url": "https://www.fr.de/politik/maischberger-ukraine-krieg-sanktionen-weidel-strack-zimmermann-kalkofe-ard-talk-zr-91802197.html"
            },
            {
              "title": "Phoenix-Interview mit Alice Weidel – Abbruch nach „sozialnationalistisch“-Frage (Aufzeichnung)",
              "publisher": "Phoenix / ZDF",
              "date": "28.11.2020",
              "url": "https://www.youtube.com/watch?v=iMYpjhe78z8"
            },
            {
              "title": "AfD-Parteitag: Alice Weidel bricht Interview nach Frage zur Sozialpolitik ab",
              "publisher": "RND",
              "date": "2020",
              "url": "https://www.rnd.de/politik/afd-parteitag-alice-weidel-bricht-interview-nach-frage-zur-sozialpolitik-ab-S2SA6U4HEBCIDABC5EXHHBAGOU.html"
            },
            {
              "title": "ARD-Sommerinterview: Weidel durch Protestlärm gestört, macht weiter",
              "publisher": "tagesschau.de",
              "date": "20.07.2025",
              "url": "https://www.tagesschau.de/inland/sommerinterview-weidel-100.html"
            },
            {
              "title": "Alice Weidel im ARD-Sommerinterview: Lärm, Demo, Verständlichkeit",
              "publisher": "ZDFheute",
              "date": "20.07.2025",
              "url": "https://www.zdfheute.de/politik/deutschland/alice-weidel-afd-sommerinterview-laerm-demo-100.html"
            },
            {
              "title": "ZDF-Porträt „Alice Weidel“ – Wohnsitz-Fragen, Einwohnerstimmen, Kontrast mit Chrupalla",
              "publisher": "ZDFheute",
              "date": "Februar 2025",
              "url": "https://www.zdfheute.de/politik/deutschland/gauland-weidel-interview-hitler-aussage-100.html"
            },
            {
              "title": "„Nee, ich hab jetzt keine Lust mehr“: Weidel bricht Interview nach Frage zu ihrem Wohnsitz ab",
              "publisher": "Der Tagesspiegel / Blick",
              "date": "18.02.2025",
              "url": "https://www.tagesspiegel.de/politik/nee-ich-hab-jetzt-keine-lust-mehr-alice-weidel-bricht-interview-nach-frage-zu-ihrem-wohnsitz-ab-13228141.html"
            }
          ]
        },
        {
          "id": "mw-schnitt-manipulation",
          "claim": "„Das Fernsehen schneidet sie mit Verzögerungen und Reaktionsschnitten in schlechtem Licht“ – was ist belegt, was ist nicht belegt?",
          "category": "nicht-belegt",
          "verdict": "Nicht belegt: Eine gezielte Manipulation Weidels durch Reaktionsschnitt, verkürzte Redezeit, Verzögerung oder Regieeingriffe. Belegt ist nur die allgemeine Tatsache, dass Schnitt, Bildauswahl, Einspieler, Redezeit und Reaktionsbilder die Wahrnehmung beeinflussen können. Ohne Vollaufnahme-Vergleich bleibt ein Manipulationsvorwurf eine unbewiesene Behauptung.",
          "sources": [
            {
              "title": "Pressekodex des Deutschen Presserats (u. a. Richtlinie 2.4 zur wahrheitsgemäßen Wiedergabe)",
              "publisher": "Deutscher Presserat",
              "date": "laufend",
              "url": "https://www.presserat.de/pressekodex.html"
            },
            {
              "title": "ZDF: Verfahren für Programmbeschwerden beim Fernsehrat",
              "publisher": "ZDF",
              "date": "laufend",
              "url": "https://www.zdf.de/unternehmen/organisation/gremien/fernsehrat/eingaben-102.html"
            },
            {
              "title": "ZDF: Beschwerdeberichte des Fernsehrats",
              "publisher": "ZDF",
              "date": "laufend",
              "url": "https://www.zdf.de/unternehmen/organisation/gremien/fernsehrat/eingaben-beschwerdeberichte-100.html"
            },
            {
              "title": "ZDF-Porträt „Alice Weidel“ – Wohnsitz-Fragen, Einwohnerstimmen, Kontrast mit Chrupalla",
              "publisher": "ZDFheute",
              "date": "Februar 2025",
              "url": "https://www.zdfheute.de/politik/deutschland/gauland-weidel-interview-hitler-aussage-100.html"
            },
            {
              "title": "Gesprächsanalyse zu Redezeit, Einwürfen und Einspielern in „hart aber fair“",
              "publisher": "Universität Innsbruck (ULB)",
              "date": "laufend",
              "url": "https://ulb-dok.uibk.ac.at/download/pdf/10250682.pdf"
            }
          ]
        },
        {
          "id": "mw-pressestrategie",
          "claim": "Weidels Umgang mit der Presse: etablierte Medien weiter nutzen, eigene Kanäle ausbauen.",
          "category": "belegt",
          "verdict": "Belegt ist eine Doppelstrategie der Kanäle: Teilnahme an großen Medienformaten und zugleich Ausbau eigener Reichweite auf X und YouTube mit wiederholbaren Botschaften. Eine offiziell so benannte Strategie „kontrollierte Kommunikation“ ist nicht belegt – sie ist eine plausible Beschreibung des beobachtbaren Musters, keine von ihr belegte Bezeichnung.",
          "sources": [
            {
              "title": "Medien-Schelte: „Das ist der miese Weidel-Trick“ – Pressestelle: keine Reduzierung der Interviews geplant",
              "publisher": "BILD",
              "date": "10.12.2025",
              "url": "https://www.bild.de/politik/inland/medien-schelte-das-ist-der-miese-weidel-trick-69394ad511f914c89b858df1"
            },
            {
              "title": "Social-Media-Auswertung Bundestagswahlkampf 2025: Weidel rund 2,74 Mio. Follower (14.01.2025)",
              "publisher": "Netzschreier / Internet Weekly",
              "date": "14.01.2025",
              "url": "https://internet-weekly.de/bundestagswahl-diese-abgeordneten-sind-die-groessten-influencer"
            },
            {
              "title": "Neuer Bundestag: Social-Media-Vergleich August 2025 (Weidel X rund 1,16 Mio., YouTube rund 296.000)",
              "publisher": "Netzschreier",
              "date": "August 2025",
              "url": "https://netzschreier.com/presse/neuer-bundestag-social-media-vergleich/"
            },
            {
              "title": "Online-Video-Monitor 2025, Sonderanalyse Bundestagswahl: Weidel 2,08 Mio. Abonnenten/Follower (06.02.2025)",
              "publisher": "BLM / LFK / Goldmedia",
              "date": "06.02.2025",
              "url": "https://www.blm.de/files/pdf2/251012-blm_lfk_goldmedia_sonderanalyse-zur-bundestagswahl_ovm-2025.pdf"
            },
            {
              "title": "Weidel und Musk auf X: bis zu 210.000 gleichzeitige Zuschauer, unstrukturiert, ohne Widerspruch",
              "publisher": "tagesschau.de",
              "date": "Januar 2025",
              "url": "https://www.tagesschau.de/inland/bundestagswahl/parteien/weidel-musk-100.html"
            },
            {
              "title": "Alice Weidel: „Aus dem Ruder laufende Messergewalt an Bahnhöfen – Ergebnis von jahrelangem Regierungsversagen“",
              "publisher": "AfD-Bundesverband",
              "date": "16.06.2025",
              "url": "https://www.afd.de/alice-weidel-aus-dem-ruder-laufende-messergewalt-an-bahnhoefen-ergebnis-von-jahrelangem-regierungsversagen/"
            },
            {
              "title": "Alice Weidel: Migrationspolitik bleibt gefährlich und ohne Konzept",
              "publisher": "AfD-Bundesverband",
              "date": "30.04.2025",
              "url": "https://www.afd.de/alice-weidel-migrationspolitik-bleibt-gefaehrlich-und-ohne-konzept"
            },
            {
              "title": "Generalaussprache Haushaltsdebatte: Weidels Eröffnung mit „ungewöhnlich heftigen Angriffen“ auf Merz",
              "publisher": "Deutscher Bundestag",
              "date": "09.07.2025",
              "url": "https://www.bundestag.de/dokumente/textarchiv/2025/kw28-de-generaldebatte-1094206"
            },
            {
              "title": "AfD vor Bundestagswahl 2025 in „Wahlarena“: alle schütteln freundlich die Hand von Alice Weidel",
              "publisher": "FAZ",
              "date": "2025",
              "url": "https://www.faz.net/aktuell/feuilleton/medien-und-film/afd-vor-bundestagswahl-2025-in-wahlarena-schuetteln-alle-freundlich-hand-von-alice-weidel-110303454.html"
            }
          ]
        },
        {
          "id": "mw-auftreten-situativ",
          "claim": "Situativ unterschiedlich: ruhiges Weitermachen, scharfe Reaktionen, Gesprächsabbrüche.",
          "category": "belegt",
          "verdict": "Belegt: Es gibt Belege für beides – ruhiges Weitermachen unter äußerem Druck und scharfe Gegenwehr, Ausweichen oder Gesprächsabbruch bei bestimmten Fragen. Eine pauschale Beschreibung als stets ruhig oder stets konfrontativ wäre nicht treffend.",
          "sources": [
            {
              "title": "Alice Weidel im ARD-Sommerinterview: Lärm, Demo, Verständlichkeit",
              "publisher": "ZDFheute",
              "date": "20.07.2025",
              "url": "https://www.zdfheute.de/politik/deutschland/alice-weidel-afd-sommerinterview-laerm-demo-100.html"
            },
            {
              "title": "ARD-Sommerinterview: Weidel durch Protestlärm gestört, macht weiter",
              "publisher": "tagesschau.de",
              "date": "20.07.2025",
              "url": "https://www.tagesschau.de/inland/sommerinterview-weidel-100.html"
            },
            {
              "title": "ZDF-„Klartext“: Manipulationsvorwürfe gegen Fragestellerauswahl – ZDF-Stellungnahme",
              "publisher": "Berliner Zeitung",
              "date": "2025",
              "url": "https://www.berliner-zeitung.de/article/klartext-das-sagt-das-zdf-zu-den-manipulationsvorwuerfen-2295272"
            },
            {
              "title": "ZDF-Sendung „Klartext“: Weidel gegen Weidel",
              "publisher": "taz",
              "date": "2025",
              "url": "https://taz.de/ZDF-Sendung-Klartext/!6069601"
            },
            {
              "title": "Medien-Schelte: „Das ist der miese Weidel-Trick“ – Pressestelle: keine Reduzierung der Interviews geplant",
              "publisher": "BILD",
              "date": "10.12.2025",
              "url": "https://www.bild.de/politik/inland/medien-schelte-das-ist-der-miese-weidel-trick-69394ad511f914c89b858df1"
            },
            {
              "title": "„Nee, ich hab jetzt keine Lust mehr“: Weidel bricht Interview nach Frage zu ihrem Wohnsitz ab",
              "publisher": "Der Tagesspiegel / Blick",
              "date": "18.02.2025",
              "url": "https://www.tagesspiegel.de/politik/nee-ich-hab-jetzt-keine-lust-mehr-alice-weidel-bricht-interview-nach-frage-zu-ihrem-wohnsitz-ab-13228141.html"
            },
            {
              "title": "Alice Weidel im ZDF-Sommerinterview: vage Antworten, Gegenangriffe (Einschätzung)",
              "publisher": "WEB.DE",
              "date": "2022",
              "url": "https://web.de/magazine/politik/alice-weidel-afd-sommerinterview-zdf-opfer-verfassungsschutz-russland-37176650"
            }
          ]
        },
        {
          "id": "mw-rechtsfaelle-belegt",
          "claim": "Belegte Rechtsfälle: NDR/„extra 3“ 2017 und angekündigte SPIEGEL-Strafanzeige 2017.",
          "category": "belegt",
          "verdict": "Belegt sind der NDR-Rechtsstreit von 2017 und die 2017 angekündigte Strafanzeige gegen einen SPIEGEL-Journalisten. In beiden Fällen ist der Ausgang nicht gleichzusetzen mit einem Erfolg für Weidel – der NDR-Antrag wurde abgelehnt, die Beschwerde zurückgenommen.",
          "sources": [
            {
              "title": "Rechtsstreit Weidel gegen NDR/„extra 3“-Satire 2017: Unterlassungsantrag abgelehnt, Beschwerde zurückgenommen",
              "publisher": "CMS (Anwaltskanzlei NDR)",
              "date": "2017",
              "url": "https://cms.law/en/content/download/303186"
            },
            {
              "title": "Streit um Satire: Alice Weidel zieht Beschwerde zurück (Nazi-„Schlampe“)",
              "publisher": "Legal Tribune Online",
              "date": "2017",
              "url": "https://www.lto.de/recht/nachrichten/n/streit-um-satire-alice-weidel-zieht-beschwerde-zurueck-afd-nazi-schlampe"
            },
            {
              "title": "Alice Weidel sues journalist (SPIEGEL, angebliche falsche Gesundheitsangaben)",
              "publisher": "POLITICO",
              "date": "08.09.2017",
              "url": "https://www.politico.eu/article/alice-weidel-sues-journalist-german-election"
            }
          ]
        },
        {
          "id": "mw-klagen-nichtbelegt",
          "claim": "Nicht belegt: Klagen oder Ombudsrat-Beschwerden gegen ZDF, phoenix, ORF oder BILD.",
          "category": "nicht-belegt",
          "verdict": "Nicht belegt: Eine Klage Weidels gegen ZDF oder phoenix wegen Talkshows, eine förmliche Beschwerde beim ZDF-Ombudsrat über Talkshows, eine Beschwerde oder Klage gegen den ORF sowie eine förmliche Beschwerde oder Klage gegen BILD. Belegt sind nur öffentliche Kritik und Nachkommentare – das ist keine Klage.",
          "sources": [
            {
              "title": "ZDF-„Klartext“: Manipulationsvorwürfe gegen Fragestellerauswahl – ZDF-Stellungnahme",
              "publisher": "Berliner Zeitung",
              "date": "2025",
              "url": "https://www.berliner-zeitung.de/article/klartext-das-sagt-das-zdf-zu-den-manipulationsvorwuerfen-2295272"
            },
            {
              "title": "ZDF-Sendung „Klartext“: Weidel gegen Weidel",
              "publisher": "taz",
              "date": "2025",
              "url": "https://taz.de/ZDF-Sendung-Klartext/!6069601"
            },
            {
              "title": "Medien-Schelte: „Das ist der miese Weidel-Trick“ – Pressestelle: keine Reduzierung der Interviews geplant",
              "publisher": "BILD",
              "date": "10.12.2025",
              "url": "https://www.bild.de/politik/inland/medien-schelte-das-ist-der-miese-weidel-trick-69394ad511f914c89b858df1"
            },
            {
              "title": "ZDF: Verfahren für Programmbeschwerden beim Fernsehrat",
              "publisher": "ZDF",
              "date": "laufend",
              "url": "https://www.zdf.de/unternehmen/organisation/gremien/fernsehrat/eingaben-102.html"
            }
          ]
        }
      ]
    },
    {
      "id": "parole",
      "title": "Parole & Begriffe",
      "intro": "Wörter, die in Debatten als Waffe dienen: Rechtslage, Verwendung und was Begriffe verschleiern.",
      "entries": [
        {
          "id": "86a-rechtslage",
          "claim": "„Alles für Deutschland“ ist verboten, weil die SA es benutzt hat – und das gilt nicht nur für Höcke.",
          "category": "belegt",
          "verdict": "Belegt: Das OLG Hamm stellte schon 2006 fest, dass die SA-Parole allgemein bekannt und nach § 86a StGB strafbar ist; der Bundesgerichtshof bestätigte Höckes Verurteilungen am 11.09.2025 (3 StR 484/24, 3 StR 519/24). Die Verteidigung mit dem „Allerweltsspruch“ wurde gerichtlich zurückgewiesen.",
          "sources": [
            {
              "title": "Verurteilungen des thüringischen AfD-Fraktionsvorsitzenden wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (3 StR 484/24, 3 StR 519/24)",
              "publisher": "Bundesgerichtshof",
              "date": "11.09.2025",
              "url": "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
            },
            {
              "title": "Verurteilungen des Herrn Björn U. Höcke wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (5 KLs 6/23, 5 KLs 8/24)",
              "publisher": "Landgericht Halle",
              "date": "11.09.2025",
              "url": "https://lg-hal.sachsen-anhalt.de/aktuelles/pressemitteilungen?tx_tsarssinclude_pi1%5Baction%5D=single&tx_tsarssinclude_pi1%5Bcontroller%5D=Base&tx_tsarssinclude_pi1%5Buid%5D=598221&cHash=f7d40c60f8cb5b03c9e191bec69cdb75"
            },
            {
              "title": "Höcke-Prozess: Gericht lehnt zahlreiche Beweisanträge ab (SA-Leitspruch unstrittig, Prominenz unerheblich)",
              "publisher": "epd / evangelisch.de",
              "date": "01.07.2024",
              "url": "https://www.evangelisch.de/inhalte/231392/01-07-2024/hoecke-prozess-gericht-lehnt-zahlreiche-beweisantraege-ab"
            },
            {
              "title": "OLG Hamm hatte die SA-Parole „Alles für Deutschland“ bereits 2006 für strafbar erklärt",
              "publisher": "Deutschlandfunk",
              "date": "2025",
              "url": "https://www.deutschlandfunk.de/bjoern-hoecke-afd-prozess-wahlrecht-100.html"
            },
            {
              "title": "Historiker Mendel über Höckes Strategie: „typisches Spiel“ der vermeintlichen Naivität",
              "publisher": "TableMedia",
              "date": "2025",
              "url": "https://table.media/berlin/interview/historiker-mendel-ueber-hoecke-strategie-diese-art-von-vermeintlicher-naivitaet-ist-das-typische-spiel"
            }
          ]
        },
        {
          "id": "parole-verwendung",
          "claim": "Wer benutzt die Parole noch – und warum passiert den anderen „nichts“?",
          "category": "belegt",
          "verdict": "Belegt ist beides: Andere Verurteilte (z. B. 81-Jährige, OLG Hamm 2025) und ein reales Durchsetzungsproblem – etwa bei AfD-Wahlplakaten in Bayern 2023, für die kein Verfahren bekannt wurde. Dass Plakate nicht verfolgt wurden, macht die Parole aber nicht legal.",
          "sources": [
            {
              "title": "OLG Hamm bestätigt rechtskräftig Verurteilung einer 81-Jährigen für die SA-Parole",
              "publisher": "Legal Tribune Online",
              "date": "23.09.2025",
              "url": "https://www.lto.de/recht/nachrichten/n/verwendung-von-sa-parole"
            },
            {
              "title": "AfD-Wahlplakate in Bayern mit der Parole werden abgenommen; Protschka: nicht genehmigt",
              "publisher": "Deutschlandfunk",
              "date": "September 2023",
              "url": "https://www.deutschlandfunk.de/strafverfahren-gegen-afd-politiker-hoecke-wegen-verwendung-von-ns-vokabular-100.html"
            },
            {
              "title": "Sächsischer AfD-Politiker Ulrich Oehme druckt die SA-Losung im Bundestagswahlkampf 2017",
              "publisher": "taz",
              "date": "2017",
              "url": "https://taz.de/AfD-Politiker-zitierte-SA-Losung/!5906821/"
            },
            {
              "title": "„Jedem das Seine“: Nazi-Sprüche in der Werbung – Höcke nimmt Telekom-Behauptung als unrichtig zurück",
              "publisher": "MDR",
              "date": "27.03.2019",
              "url": "https://www.mdr.de/fernsehen/mdr-zeitreise/zeitgeschichte-gegenwart/wirtschaft/nazi-vergleiche-sprueche-werbung-zahlen-propaganda-mdr-100.html"
            },
            {
              "title": "Verurteilungen des thüringischen AfD-Fraktionsvorsitzenden wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (3 StR 484/24, 3 StR 519/24)",
              "publisher": "Bundesgerichtshof",
              "date": "11.09.2025",
              "url": "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
            }
          ]
        },
        {
          "id": "begriffe-tabelle",
          "claim": "„Experte“, „kriegstauglich“, „Lügenpresse“, „völkisch“, „Umvolkung“, „Volksverräter“, „Systemparteien“ – von wem benutzt?",
          "category": "belegt",
          "verdict": "Belegt: „Experte“ ist kein NS-Begriff. „Kriegstauglich/kriegstüchtig“ ist preußisch-militärisch (schon 1826 belegt), kein NS-Erfindung – und wird vor allem von SPD-Verteidigungsminister Boris Pistorius benutzt. Lügenpresse, völkisch, Umvolkung, Volksverräter, Systemparteien dagegen werden heute nachweislich vor allem im rechten Milieu verwendet.",
          "sources": [
            {
              "title": "Politischer Wortschatz: „Kriegstüchtig“ – Pistorius verteidigt das „hässliche Wort“",
              "publisher": "Tichys Einblick",
              "date": "12.11.2023",
              "url": "https://www.tichyseinblick.de/feuilleton/politischer-wortschatz-kriegstuechtig-pistorius"
            },
            {
              "title": "Pistorius: „Wir müssen kriegstüchtig werden“ – Söder kritisiert die Ausrichtung",
              "publisher": "tagesschau.de",
              "date": "12.11.2023",
              "url": "https://www.tagesschau.de/inland/innenpolitik/pistorius-bundeswehr-114.html"
            },
            {
              "title": "Söder kritisiert Pistorius: Bundeswehr nicht auf „Kriegstauglichkeit“ ausgerichtet, sondern verteidigungsbereit",
              "publisher": "Schwäbische Zeitung",
              "date": "2023",
              "url": "https://www.schwaebische.de/regional/bayern/soeder-kritisiert-pistorius-bundeswehr-nicht-kriegsbereit-2048740"
            },
            {
              "title": "How Nazi terminology is creeping back into German politics (Lügenpresse, Umvolkung)",
              "publisher": "The Local",
              "date": "13.10.2016",
              "url": "https://www.thelocal.de/20161013/how-nazi-terminology-is-creeping-back-into-german-politics"
            },
            {
              "title": "Nazi jargon revival rings warning bells in Germany (Petry zu „völkisch“)",
              "publisher": "Daily Sabah",
              "date": "13.10.2016",
              "url": "https://www.dailysabah.com/europe/2016/10/13/nazi-jargon-revival-after-decades-rings-warning-bells-in-germany"
            },
            {
              "title": "Umvolkung: Herkunft und heutige Verwendung des völkischen Begriffs",
              "publisher": "DWDS",
              "date": "laufend",
              "url": "https://www.dwds.de/wb/Umvolkung"
            },
            {
              "title": "„Systemparteien“, „Volksverrat“, Ketten brechen: Kickl und die Sprache der Nazis",
              "publisher": "Der Standard",
              "date": "2025",
              "url": "https://www.derstandard.at/story/3000000203911/systemparteien-volksverrat-ketten-brechen-kickl-und-die-sprache-der-nazis"
            }
          ]
        },
        {
          "id": "esken-zib2",
          "claim": "„Saskia Esken hat im österreichischen TV den Nationalsozialismus verunglimpft.“",
          "category": "belegt",
          "verdict": "Belegt ist: Esken sagte am 01.05.2024 in der ORF-„ZIB 2“ (Moderator Armin Wolf), die AfD sei „eine Nazi-Partei“, verknüpft mit einem Goebbels-Vergleich. Es gingen zwei Anzeigen ein (Gerald Grosz in Wien nach Verbotsgesetz § 86g; Markus Haintz in Berlin nach § 130 Abs. 3 StGB). Verurteilt wurde sie nicht; Correctiv stellte fest: kein Gefängnis, kein bekanntes Ermittlungsverfahren.",
          "sources": [
            {
              "title": "SPD-Co-Chefin Saskia Esken: AfD ist „Nazi-Partei“ (ZIB 2 mit Armin Wolf, Goebbels-Vergleich)",
              "publisher": "Kurier",
              "date": "01.05.2024",
              "url": "https://kurier.at/politik/ausland/spd-co-chefin-saskia-esken-afd-nazi-partei-zib-2-armin-wolf-goebbels/402880724"
            },
            {
              "title": "„Nazi-Partei“: Die AfD und das Panikorchester (Esken-Begründung in ZIB 2)",
              "publisher": "Profil",
              "date": "02.05.2024",
              "url": "https://www.profil.at/meinung/nazi-partei-die-afd-und-das-panikorchester/402882353"
            },
            {
              "title": "Falschbehauptungen nach Saskia Eskens AfD-Nazi-Vergleich im österreichischen Fernsehen",
              "publisher": "CORRECTIV",
              "date": "14.05.2024",
              "url": "https://correctiv.org/faktencheck/2024/05/14/falschbehauptungen-nach-saskia-eskens-afd-nazi-vergleich-im-oesterreichischen-fernsehen/"
            },
            {
              "title": "Gerald Grosz zeigt SPD-Chefin Saskia Esken nach ZIB-2-Interview an (Verbotsgesetz)",
              "publisher": "oe24.at",
              "date": "02.05.2024",
              "url": "https://www.oe24.at/oesterreich/politik/gerald-grosz-zeigt-spd-chefin-saskia-esken-nach-zib2-interview-an/593420315"
            },
            {
              "title": "Anzeige nach § 130 Abs. 3 StGB gegen Saskia Esken (Staatsanwaltschaft Berlin, Markus Haintz)",
              "publisher": "Der runde Tisch",
              "date": "02.05.2024",
              "url": "https://www.der-runde-tisch.com/_files/ugd/adb082_47f21027403140cd9e422e53809ae87d.pdf"
            },
            {
              "title": "SPD, Esken, AfD, ORF, Nazi: Inflationierung des Nazi-Begriffs (Rudolf Adam/Ferdinand Knauss)",
              "publisher": "Cicero",
              "date": "03.05.2024",
              "url": "https://www.cicero.de/innenpolitik/spd-esken-afd-orf-nazi"
            },
            {
              "title": "„Wollt ihr den totalen Stuss?“ – Jeder Nazi-Vergleich banalisiere den Nationalsozialismus (Claudio Casula)",
              "publisher": "Achgut",
              "date": "04.05.2024",
              "url": "https://www.achgut.com/artikel/wollt_ihr_den_totalen_stuss/asc/P14"
            },
            {
              "title": "Warum sich SPD-Chefin Esken eigentlich selbst anzeigen müsste",
              "publisher": "Reitschuster",
              "date": "09.05.2024",
              "url": "https://reitschuster.de/post/warum-sich-spd-chefin-esken-eigentlich-selbst-anzeigen-muesste"
            }
          ]
        },
        {
          "id": "ehrliche-gespraechspunkte",
          "claim": "Vier ehrliche Sätze für das Gespräch über Parole, Begriffe und Esken.",
          "category": "umstritten",
          "verdict": "Einordnung – das sind die vier Punkte aus dem Fazit der Analyse, an denen kein Gesprächspartner ein Dementi ansetzen kann.",
          "sources": [
            {
              "title": "Verurteilungen des thüringischen AfD-Fraktionsvorsitzenden wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (3 StR 484/24, 3 StR 519/24)",
              "publisher": "Bundesgerichtshof",
              "date": "11.09.2025",
              "url": "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
            },
            {
              "title": "OLG Hamm hatte die SA-Parole „Alles für Deutschland“ bereits 2006 für strafbar erklärt",
              "publisher": "Deutschlandfunk",
              "date": "2025",
              "url": "https://www.deutschlandfunk.de/bjoern-hoecke-afd-prozess-wahlrecht-100.html"
            },
            {
              "title": "OLG Hamm bestätigt rechtskräftig Verurteilung einer 81-Jährigen für die SA-Parole",
              "publisher": "Legal Tribune Online",
              "date": "23.09.2025",
              "url": "https://www.lto.de/recht/nachrichten/n/verwendung-von-sa-parole"
            },
            {
              "title": "AfD-Wahlplakate in Bayern mit der Parole werden abgenommen; Protschka: nicht genehmigt",
              "publisher": "Deutschlandfunk",
              "date": "September 2023",
              "url": "https://www.deutschlandfunk.de/strafverfahren-gegen-afd-politiker-hoecke-wegen-verwendung-von-ns-vokabular-100.html"
            },
            {
              "title": "Pistorius: „Wir müssen kriegstüchtig werden“ – Söder kritisiert die Ausrichtung",
              "publisher": "tagesschau.de",
              "date": "12.11.2023",
              "url": "https://www.tagesschau.de/inland/innenpolitik/pistorius-bundeswehr-114.html"
            },
            {
              "title": "Falschbehauptungen nach Saskia Eskens AfD-Nazi-Vergleich im österreichischen Fernsehen",
              "publisher": "CORRECTIV",
              "date": "14.05.2024",
              "url": "https://correctiv.org/faktencheck/2024/05/14/falschbehauptungen-nach-saskia-eskens-afd-nazi-vergleich-im-oesterreichischen-fernsehen/"
            }
          ]
        }
      ]
    },
    {
      "id": "vorwuerfe",
      "title": "Die größten Vorwürfe",
      "intro": "Die schwersten Sätze, die über die Partei fallen – mit dem, was davon trägt.",
      "entries": [
        {
          "id": "bfv-weisung",
          "claim": "„Der Verfassungsschutz ist keine unabhängige Behörde, sondern dem Innenministerium weisungsgebunden.“",
          "category": "umstritten",
          "verdict": "Organisationsrechtlich stimmt die Beschreibung: Das BfV unterliegt der Dienst- und Fachaufsicht des Bundesinnenministeriums, sein Präsident wird vom Minister ernannt. Ob die Aufsicht im konkreten AfD-Verfahren tatsächlich weisungsgebunden entschieden hat, dafür fehlt jeder Beleg.",
          "sources": [
            {
              "title": "AfD-Antrag für Transparenz beim Verfassungsschutz – „Weisungsgebundenheit ... für jedermann kenntlich machen“ (Drucksache 20/13767)",
              "publisher": "Deutscher Bundestag",
              "date": "20.11.2024",
              "url": "https://www.bundestag.de/presse/hib/kurzmeldungen-1030380"
            },
            {
              "title": "Verfassungsschutz in der Demokratie – 70 Jahre Bundesamt für Verfassungsschutz",
              "publisher": "Bundesministerium des Innern",
              "date": "16.03.2020",
              "url": "https://www.bmi.bund.de/SharedDocs/downloads/DE/behoerden/70-jahre-bfv.pdf?__blob=publicationFile&v=4"
            },
            {
              "title": "Neuer Präsident des Bundesamtes für Verfassungsschutz: Amtsantritt von Sinan Selen",
              "publisher": "Bundesamt für Verfassungsschutz",
              "date": "08.10.2025",
              "url": "https://www.verfassungsschutz.de/SharedDocs/pressemitteilungen/DE/2025/pressemitteilung-2025-10-08-ernennung.html"
            },
            {
              "title": "Aufsicht und Kontrolle: Dienst- und Fachaufsicht BMI, PKGr, Vertrauensgremium, BfDI, Bundesrechnungshof, gerichtliche und öffentliche Kontrolle",
              "publisher": "Bundesamt für Verfassungsschutz",
              "date": "laufend",
              "url": "https://www.verfassungsschutz.de/DE/verfassungsschutz/auftrag-und-arbeitsweise/aufsicht-und-kontrolle/aufsicht-und-kontrolle_node.html"
            },
            {
              "title": "Bundesverfassungsschutzgesetz, § 2 (Verfassungsschutzbehörden) und § 7 (Weisungsrechte des Bundes)",
              "publisher": "Bundesministerium der Justiz (gesetze-im-internet.de)",
              "date": "laufend",
              "url": "https://www.gesetze-im-internet.de/bverfschg/"
            },
            {
              "title": "Keine Zulassung der Revision gegen die Urteile des OVG Münster zur Einstufung der AfD als „Verdachtsfall“ (BVerwG 6 B 23.24)",
              "publisher": "Bundesverwaltungsgericht",
              "date": "22.07.2025",
              "url": "https://www.bverwg.de/pm/2025/54"
            },
            {
              "title": "Bundesamt für Verfassungsschutz erklärt „Stillhaltezusage“ im AfD-Eilverfahren, Az. 13 L 1109/25",
              "publisher": "Verwaltungsgericht Köln",
              "date": "08.05.2025",
              "url": "https://www.vg-koeln.nrw.de/behoerde/presse/Pressemitteilungen/Archiv/2025/05_08052025/"
            }
          ]
        },
        {
          "id": "hoecke-beweise",
          "claim": "„Höcke wurde verurteilt, obwohl im Verfahren keine Beweise zugelassen wurden.“",
          "category": "nicht-belegt",
          "verdict": "Nicht haltbar. Beweise wurden zugelassen und gewürdigt: ein rund 90-minütiges Video der Merseburger Rede, die Aussage des Angeklagten und ein von der Verteidigung benannter Sachzeuge. Zahlreiche weitere Beweisanträge wurden am 01.07.2024 abgelehnt – aber mit einer Begründung, die das Gegenteil der Behauptung belegt: Die SA-Herkunft der Parole galt dem Gericht als unstrittig. Strittig war nur die Kenntnis.",
          "sources": [
            {
              "title": "Verurteilungen des Herrn Björn U. Höcke wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (5 KLs 6/23, 5 KLs 8/24)",
              "publisher": "Landgericht Halle",
              "date": "11.09.2025",
              "url": "https://lg-hal.sachsen-anhalt.de/aktuelles/pressemitteilungen?tx_tsarssinclude_pi1%5Baction%5D=single&tx_tsarssinclude_pi1%5Bcontroller%5D=Base&tx_tsarssinclude_pi1%5Buid%5D=598221&cHash=f7d40c60f8cb5b03c9e191bec69cdb75"
            },
            {
              "title": "Höcke am zweiten Verhandlungstag: „Ich bin unschuldig“",
              "publisher": "Legal Tribune Online",
              "date": "23.04.2024",
              "url": "https://www.lto.de/recht/hintergruende/h/bjoern-hoecke-zweiter-verhandlungstag-lg-halle-sa-parole-alles-fuer-deutschland"
            },
            {
              "title": "Verurteilungen des thüringischen AfD-Fraktionsvorsitzenden wegen Verwendens von Kennzeichen verfassungswidriger Organisationen rechtskräftig (3 StR 484/24, 3 StR 519/24)",
              "publisher": "Bundesgerichtshof",
              "date": "11.09.2025",
              "url": "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025168.html"
            },
            {
              "title": "BGH: Urteile gegen Höcke wegen NS-Parole rechtskräftig",
              "publisher": "tagesschau.de",
              "date": "11.09.2025",
              "url": "https://www.tagesschau.de/inland/innenpolitik/urteil-bestaetigung-hoecke-100.html"
            },
            {
              "title": "Ermittlungen gegen Höcke eingestellt",
              "publisher": "Deutsche Welle",
              "date": "01.03.2017",
              "url": "https://www.dw.com/de/ermittlungen-gegen-afd-mann-h%C3%B6cke-eingestellt/a-37772192"
            },
            {
              "title": "Höcke-Prozess: Gericht lehnt zahlreiche Beweisanträge ab (SA-Leitspruch unstrittig, Prominenz unerheblich)",
              "publisher": "epd / evangelisch.de",
              "date": "01.07.2024",
              "url": "https://www.evangelisch.de/inhalte/231392/01-07-2024/hoecke-prozess-gericht-lehnt-zahlreiche-beweisantraege-ab"
            }
          ]
        },
        {
          "id": "potsdam-widerlegt",
          "claim": "„Die Potsdam-Recherche wurde widerlegt, und man musste sich entschuldigen.“",
          "category": "umstritten",
          "verdict": "Nur ein Teil: Das Landgericht Berlin II untersagte Correctiv mehrere zugespitzte Formulierungen – darunter den „Masterplan zur Ausweisung deutscher Staatsbürger“. Das Urteil ist nicht rechtskräftig, Correctiv geht in Berufung. Das Treffen selbst, die Teilnehmer und Sellners Vortrag blieben unbestritten; das Landgericht Hamburg wies die Klagen gegen Correctiv ab. Eine Entschuldigung oder ein Widerruf des Kernberichts sind nicht erfolgt.",
          "sources": [
            {
              "title": "Landgericht Berlin II untersagt CORRECTIV Äußerungen im Zusammenhang mit dem „Potsdamer Treffen“ vom 25. November 2023 (Az. 27 O 379/25)",
              "publisher": "Landgericht Berlin II",
              "date": "17.03.2026",
              "url": "https://www.berlin.de/gerichte/presse/pressemitteilungen-der-ordentlichen-gerichtsbarkeit/2026/pressemitteilung.1653487.php"
            },
            {
              "title": "„Potsdamer Treffen“ – Niederlage für „Correctiv“ vor Gericht, Berufung angekündigt",
              "publisher": "Deutschlandfunk",
              "date": "18.03.2026",
              "url": "https://www.deutschlandfunk.de/niederlage-fuer-correctiv-vor-gericht-berufung-angekuendigt-102.html"
            },
            {
              "title": "„Geheimtreffen“ in Potsdam: „Correctiv“ siegt vor Gericht gegen Vosgerau",
              "publisher": "t-online",
              "date": "19.12.2025",
              "url": "https://www.t-online.de/nachrichten/deutschland/gesellschaft/id_101051092/-geheimtreffen-in-potsdam-correctiv-siegt-vor-gericht-gegen-vosgerau.html"
            },
            {
              "title": "Kammergericht: Treffen in Potsdam darf als „Deportationskonferenz“ bezeichnet werden",
              "publisher": "CORRECTIV",
              "date": "19.05.2026",
              "url": "https://correctiv.org/aktuelles/afd/2026/05/19/kammergericht-treffen-in-potsdam-darf-als-deportationskonferenz-bezeichnet-werden"
            },
            {
              "title": "Potsdamer Treffen vom 25. November 2023 und Correctiv-Bericht (Antwort der Bundesregierung, 20/13179)",
              "publisher": "Deutscher Bundestag",
              "date": "09.10.2024",
              "url": "https://www.bundestag.de/presse/hib/kurzmeldungen-1023376"
            },
            {
              "title": "Making-Of zur Geheimplan-Recherche",
              "publisher": "CORRECTIV",
              "date": "10.01.2024",
              "url": "https://correctiv.org/aktuelles/neue-rechte/2024/01/10/making-of-zur-geheimplan-recherche/"
            },
            {
              "title": "Geheimplan gegen Deutschland (Original-Recherche zum Potsdamer Treffen vom 25. November 2023)",
              "publisher": "CORRECTIV",
              "date": "10.01.2024",
              "url": "https://correctiv.org/aktuelles/neue-rechte/2024/01/10/geheimplan-remigration-vertreibung-afd-rechtsextreme"
            },
            {
              "title": "Landgericht Hamburg: Klagen von Vosgerau (324 O 6/25) und Mörig (324 O 7/25) gegen Correctiv-Berichterstattung abgewiesen",
              "publisher": "Gerichtspressestelle Hamburg (justiz.hamburg.de)",
              "date": "19.12.2025",
              "url": "https://justiz.hamburg.de/resource/blob/1129950/e130b6f44e569fbbb495d2dd91fcd979/lg-hamburg-klagen-gegen-correctiv-berichterstattung-data.pdf"
            },
            {
              "title": "LG Berlin II: Vosgerau siegt im Hauptverfahren gegen Correctiv – Umformulierung eines Halbsatzes und Satzes verlangt (27 O 135/25)",
              "publisher": "Legal Tribune Online",
              "date": "24.09.2025",
              "url": "https://www.lto.de/recht/nachrichten/n/lg-berlin-ii-27o13525-ulrich-vosgerau-correctiv-muss-aussagen-unterlassen-geheimplan-deutschland"
            }
          ]
        }
      ]
    }
  ]
};
