/* Abschnitt: Demokratie, Wahlen, Brandmauer */
window.DOSSIER_SECTIONS.push({
  id: 'demokratie',
  title: 'Demokratie & Brandmauer',
  kicker: 'Verfahren und Macht',
  intro:
    'Hier wird es politisch. Die Frage, ob die AfD demokratisch ist, lässt sich nicht mit einem Satz beantworten – ' +
    'aber man kann sauber trennen zwischen dem, was Wähler tun, was Parlamente tun und was Gerichte entscheiden.',
  entries: [
    {
      id: 'ergebnis-2025',
      tag: 'belegt',
      claim: '„Die AfD ist eine Randerscheinung.“',
      verdict:
        'Falsch. 20,8 Prozent und 152 Sitze machen sie zur zweitstärksten Kraft im Bundestag.',
      blocks: [
        {
          type: 'p',
          text:
            'Bei der Bundestagswahl am 23. Februar 2025 entfielen 10.328.780 Zweitstimmen auf die AfD – 20,8 Prozent. Sie stellt 152 Abgeordnete, 2021 waren es 83. ' +
            'Die Wahlbeteiligung lag bei 82,5 Prozent von 60.510.631 Wahlberechtigten.'
        },
        {
          type: 'p',
          text:
            'In Thüringen wurde die AfD 2024 mit 32,8 Prozent erstmals stärkste Kraft bei einer Landtagswahl und stellt 32 Landtagsabgeordnete. ' +
            'In Sachsen-Anhalt erreichte sie 2026 nach den bei der bpb dokumentierten Zahlen 43,8 Prozent. Das ist keine Randerscheinung, sondern die stärkste Oppositionskraft im Land.'
        }
      ],
      sources: ['wahlleiter', 'thueringen', 'bpb']
    },
    {
      id: 'brandmauer',
      tag: 'einordnung',
      claim: '„Die Brandmauer der Altparteien tritt die Demokratie mit Füßen.“',
      verdict:
        'Die Kritik ist legitim, aber sie ist eine Bewertung. Formal schützt das Grundgesetz die Koalitions- und Bündnisfreiheit der Parteien – niemand ist verpflichtet, mit einer bestimmten Partei zu regieren.',
      blocks: [
        {
          type: 'p',
          text:
            'Die CDU hielt 2018 auf einem Parteitag in einem Unvereinbarkeitsbeschluss fest, nicht mit der AfD zusammenzuarbeiten. Friedrich Merz sprach 2022 von einer „Brandmauer zur AfD“. ' +
            'Auch SPD, Grüne, FDP, Linke und BSW schließen eine Zusammenarbeit aus.'
        },
        {
          type: 'p',
          text:
            'Am 29. Januar 2025 stimmte der Bundestag einem Entschließungsantrag der Union zur Migrationspolitik zu: 348 Ja-Stimmen, 345 Nein, 10 Enthaltungen. ' +
            'Die Mehrheit kam zustande durch 187 Stimmen von CDU/CSU, 80 der FDP, 75 der AfD und 6 fraktionslose Abgeordnete. Damit war die AfD erstmals Mehrheitsbeschafferin im Bundestag.'
        },
        {
          type: 'p',
          text:
            'Zwei Tage später scheiterte das „Zustrombegrenzungsgesetz“ der Union: 338 Abgeordnete stimmten dafür, 349 dagegen, fünf enthielten sich. ' +
            'Beide Abstimmungen sind dokumentiert und lassen sich nachprüfen – an ihnen kann man die These von der „Brandmauer“ präzise prüfen, statt sie nur zu behaupten.'
        },
        {
          type: 'note',
          text:
            'Rechtlich: Artikel 21 Grundgesetz sagt, Parteien wirken an der politischen Willensbildung mit – er begründet kein Recht auf Regierungsbeteiligung. Artikel 38 schützt das freie Mandat. ' +
            'Die Brandmauer ist deshalb politisch umstritten, aber nicht automatisch verfassungswidrig.'
        }
      ],
      sources: ['wdr-brandmauer', 'bt2901', 'bt3101', 'zdf2901', 'ts-analyse', 'gg21', 'gg38']
    },
    {
      id: 'ausschluss',
      tag: 'belegt',
      claim: '„Die AfD wird systematisch aus den Parlamentsämtern herausgehalten.“',
      verdict:
        'Belegt. Seit 2017 stellt die AfD als einzige Fraktion keinen Vizepräsidenten des Bundestags – alle Kandidaten scheiterten, das Bundesverfassungsgericht verneinte einen Anspruch.',
      blocks: [
        {
          type: 'p',
          text:
            'Gerold Otten scheiterte am 25. März 2025 in drei Wahlgängen als AfD-Kandidat für das Amt des Bundestagsvizepräsidenten. ' +
            'Im November 2024 erhielt Stefan Keuter 75 Ja-Stimmen bei 559 Gegenstimmen. Seit dem Einzug 2017 war die AfD nie im Parlamentspräsidium vertreten.'
        },
        {
          type: 'p',
          text:
            'Die Geschäftsordnung des Bundestags sieht seit 1994 vor, dass jede Fraktion durch mindestens einen Vizepräsidenten im Präsidium vertreten ist. ' +
            'Das Bundesverfassungsgericht entschied 2022 dennoch, dass daraus kein einklagbarer Anspruch folgt – die Wahl durch das Plenum bleibt frei.'
        },
        {
          type: 'p',
          text:
            'Auch im Parlamentarischen Kontrollgremium, das die Geheimdienste kontrolliert, war die AfD nicht vertreten. ' +
            'Das ist der belastbarste Teil der Kritik an der „Brandmauer“: Es ist ein faktischer Ausschluss von Kontrollrechten, nicht nur eine Koalitionsfrage.'
        }
      ],
      sources: ['otten', 'keuter', 'bverfg']
    },
    {
      id: 'verbot',
      tag: 'belegt',
      claim: '„Ein AfD-Verbot wäre die schnelle Lösung.“',
      verdict:
        'Politisch gescheitert, rechtlich ungeklärt. Die Initiative im Bundestag fand Anfang 2025 nicht genug Unterstützer; ein Verfahren würde Jahre dauern.',
      blocks: [
        {
          type: 'p',
          text:
            'Eine fraktionsübergreifende Initiative um den früheren CDU-Abgeordneten Marco Wanderwitz scheiterte Anfang 2025. Nur rund 120 Abgeordnete unterstützten sie – zu wenige für einen Beschluss. ' +
            'Ein Verbotsverfahren kann nach Artikel 21 Grundgesetz nur vom Bundestag, vom Bundesrat oder von der Bundesregierung beim Bundesverfassungsgericht beantragt werden.'
        },
        {
          type: 'p',
          text:
            'Seit 1951 gab es vier Verbotsverfahren; das letzte richtete sich gegen die NPD und endete 2017 mit einem Nein. ' +
            'Selbst wenn ein Verfahren heute begänne, wäre eine Entscheidung erst in mehreren Jahren zu erwarten.'
        }
      ],
      sources: ['wdr-verbot', 'gg21']
    },
    {
      id: 'letzte-kraft',
      tag: 'einordnung',
      claim: '„Die AfD ist eine der letzten demokratischen Kräfte im Land.“',
      verdict:
        'Eine Selbstbeschreibung, keine belegbare Tatsache. Belegbar ist: Die AfD ist die größte Oppositionspartei. Ob sie demokratisch ist, bewertet der Verfassungsschutz anders.',
      blocks: [
        {
          type: 'p',
          text:
            'Richtig ist: Die AfD tritt zu Wahlen an, akzeptiert – wie alle zugelassenen Parteien – den Rahmen des Grundgesetzes formal und übt als Oppositionspartei ihre Rechte im Parlament aus. ' +
            'Sie stützt die Bundesregierung nicht und ist damit tatsächlich die einzige große Kraft, die nicht mitregiert.'
        },
        {
          type: 'p',
          text:
            'Nicht richtig ist, daraus einen Tatsachenbefund zu machen. Der Verfassungsschutz sieht in der Partei Bestrebungen gegen die freiheitliche demokratische Grundordnung; ' +
            'die Einstufung als „gesichert rechtsextremistisch“ ist derzeit gerichtlich ausgesetzt, die als „Verdachtsfall“ rechtskräftig.'
        },
        {
          type: 'note',
          text:
            'Der Satz, der hält: „Die AfD ist die einzige große Opposition, die die Regierung nicht stützt.“ Wer mehr behauptet, muss den Verfassungsschutz erklären – und verliert dann meistens.'
        }
      ],
      sources: ['bfv', 'bverwg', 'bpb', 'gg21']
    },
    {
      id: 'cdu-schnittpunkte',
      tag: 'teilweise',
      claim: '„CDU und AfD sind in Wahrheit eine Kraft – die Brandmauer ist nur Fassade.“',
      verdict:
        'Übertrieben. Richtig ist: Auf kommunaler Ebene und am 29.01.2025 gab es gemeinsame Mehrheiten. Falsch ist: Die CDU habe die Brandmauer aufgegeben – sie hält sie formal für Landtags- und Bundesregierungen und hat das Gesetz zwei Tage nach dem Antrag scheitern lassen.',
      blocks: [
        {
          type: 'p',
          text:
            'Belegt ist die indirekte Kooperation im Bund: Am 29.01.2025 kam die zweite Mehrheit für den Unions-Antrag nur mit 75 AfD-Stimmen zustande (348:345). ' +
            'Am 31.01.2025 scheiterte das Zustrombegrenzungsgesetz der Union dagegen 338:349. Die Union gewann also mit der AfD eine unverbindliche Entschließung, verlor mit ihr aber das Gesetz – sie regierte nicht mit der AfD, war aber von ihr abhängig, sobald sie eine Mehrheit brauchte.'
        },
        {
          type: 'p',
          text:
            'Auf kommunaler Ebene gibt es zahlreiche dokumentierte Fälle gemeinsamer Abstimmungen. In Sachsen wählte der Kreistag Meißen im November 2024 eine AfD-Kandidatin zur Vizelandrätin – mit 46 Stimmen, obwohl die AfD nur 27 Mandate hat. ' +
            'In Biebesheim am Rhein (Hessen) verhalfen CDU-Gemeindevertreter der AfD im April 2026 mit einer gemeinsamen Liste zu einem Sitz im Gemeindevorstand; der CDU-Landesverband leitete daraufhin Parteiausschlussverfahren ein. ' +
            'Das ist die belegbare Schnittmenge: vor Ort, wo keine Koalitionsfrage ansteht, stimmen CDU- und AfD-Vertreter regelmäßig gemeinsam.'
        },
        {
          type: 'p',
          text:
            'Ebenso belegt ist die Trennlinie: Der Unvereinbarkeitsbeschluss der CDU von 2018 wurde nie aufgehoben. Nur einen Tag nach der Abstimmung vom 29.01.2025 ermahnte Angela Merkel ihre Partei öffentlich. ' +
            'Die Koalitionen in Thüringen (CDU/BSW/SPD) und Sachsen-Anhalt wurden ausdrücklich gegen eine AfD-Regierungsbeteiligung gebaut. Wer „CDU und AfD sind eine Kraft“ behauptet, muss diese Gegenbelege wegreden – und verliert damit genau die Glaubwürdigkeit, die das Dossier aufbauen will.'
        },
        {
          type: 'note',
          text:
            'Präziser Satz: „Die Brandmauer gilt für Regierungen, nicht für Abstimmungen und Kommunen.“ Das ist die Version, die sich gegen jeden Fakten-Check verteidigen lässt.'
        }
      ],
      sources: ['bt2901', 'bt3101', 'taz-sachsen-kommunen', 'welt-biebesheim', 'wdr-brandmauer', 'gg21']
    },
    {
      id: 'aemter-laender',
      tag: 'teilweise',
      claim: '„Die AfD wird in Hessen, Thüringen und Sachsen pauschal aus allen Ämtern ausgegrenzt.“',
      verdict:
        'Pauschal ist das falsch. Die Lage unterscheidet sich je Land: In Hessen scheitern AfD-Vize-Kandidaten seit Jahren, in Thüringen verlor die AfD das Präsidentenamt, in Sachsen sitzt sie dagegen im Präsidium und führt vier Ausschüsse.',
      blocks: [
        {
          type: 'p',
          text:
            'Hessen: Die AfD-Kandidaten für das Vizepräsidentenamt im Hessischen Landtag sind nach Angaben des hr mehr als ein Dutzend Mal durchgefallen, zuletzt im Oktober 2026. ' +
            'SPD, Grüne und Linke forderten daraufhin die CDU auf, Ministerpräsident Boris Rhein zu stoppen, der öffentlich ein Ende der Ausgrenzung verlangt hatte. ' +
            'In Hessen erhält die AfD aber Ausschussvorsitze entsprechend ihrer Fraktionsstärke – ausgegrenzt wird sie beim Präsidium, nicht überall.'
        },
        {
          type: 'p',
          text:
            'Sachsen ist das Gegenbeispiel: André Wendt (AfD) wurde am 01.10.2024 zum Zweiten Vizepräsidenten des Sächsischen Landtags gewählt und sitzt damit im Präsidium. ' +
            'Am 15.01.2025 vergab das Präsidium vier Ausschussvorsitze an die AfD (Inneres, Haushalt/Finanzen, Schule und Bildung, Verfassung/Recht/Europa). ' +
            'Wer „Ausgrenzung in Sachsen“ behauptet, widerlegt sich an der eigenen Landtagsseite.'
        },
        {
          type: 'p',
          text:
            'Thüringen: Die AfD stellte als stärkste Fraktion den Anspruch auf das Präsidentenamt und nominierte Wiebke Muhsal. Sie erhielt 32 Stimmen – genau die Fraktionsstärke – und verlor gegen Thadäus König (CDU, 54 Stimmen). ' +
            'Auch die Vize-Wahl verlor die AfD-Kandidatin. Ministerpräsident wurde am 12.12.2024 Mario Voigt (CDU) mit 51 Stimmen, gestützt auf eine Vereinbarung mit der Linken, ausdrücklich um eine AfD-abhängige Mehrheit zu verhindern.'
        },
        {
          type: 'note',
          text:
            'Rechtlich: Das Bundesverfassungsgericht hat 2022 entschieden, dass aus der Geschäftsordnung kein einklagbarer Anspruch auf einen Vize-Posten folgt (siehe Eintrag „ausschluss“). Politisch umstritten bleibt das trotzdem – aber es ist eine Entscheidung der jeweiligen Parlamentsmehrheiten, keine einheitliche „Verwährung“ aller drei Länder.'
        }
      ],
      sources: ['hr-hessen-vize', 'sachsen-praesidium', 'sachsen-ausschuesse', 'koenig', 'voigt-wahl', 'bverfg']
    },
    {
      id: 'thueringen-voigt',
      tag: 'teilweise',
      claim: '„Voigt wurde wegen Betrugs der Doktortitel aberkannt, und über Nacht änderte der Verfassungsgerichtshof die Thüringer Verfassung, damit Höcke kein Ministerpräsident werden konnte.“',
      verdict:
        'In dieser Form nicht haltbar. Die TU Chemnitz entzog Voigt den Doktorgrad wegen Fehlern in der Dissertation – ein Gerichtsurteil wegen Betrugs gab es nicht. Der Verfassungsgerichtshof änderte nicht die Verfassung, sondern stoppte den Alterspräsidenten; Höcke scheiterte danach an fehlenden Mehrheiten, nicht an einer Sperre.',
      blocks: [
        {
          type: 'p',
          text:
            'Zum Doktortitel: Die TU Chemnitz entzog Mario Voigt den Doktorgrad im Januar 2026, nachdem im August 2024 eine Plagiatsanzeige eingegangen war. ' +
            'Ein externes Gutachten hatte im Februar 2025 die Entzugs-Voraussetzungen noch nicht feststellen können; die Universität wandte neue Regeln vom Mai 2025 an. ' +
            'Den Widerspruch wies der Fakultätsrat am 11.08.2026 zurück. Voigt kündigte eine Klage an, zog sie nach eigenen Angaben aber am 07.10.2026 zurück und erklärte, nicht mehr um den Titel zu kämpfen. ' +
            'Es liegt also eine Aberkennung durch die Universität vor – aber kein Strafurteil und keine gerichtliche Feststellung von Betrug. Das Wort „Betrug“ ist die politische Aufladung, nicht der Rechtsbefund.'
        },
        {
          type: 'p',
          text:
            'Zum Alterspräsidenten: Jürgen Treutler (AfD, 73 Jahre) eröffnete die konstituierende Sitzung am 26.09.2024. ' +
            'Er ließ die Abstimmung über den CDU/BSW-Antrag zur Geschäftsordnung nicht zu, entzog Abgeordneten das Wort und setzte nach Ordnungsrufen und Unterbrechungen die Sitzung aus. Landtagsdirektor Jörg Hopfe nannte das Verhalten rechtswidrig. ' +
            'Die CDU rief daraufhin den Verfassungsgerichtshof an. In der Nacht zum 27.09.2024 (Beschluss VerfGH 36/24, einstimmig) verpflichtete das Gericht Treutler, die Tagesordnung abstimmen zu lassen, die Beschlussfähigkeit festzustellen und den Geschäftsordnungsantrag zur Abstimmung zu stellen. '
        },
        {
          type: 'p',
          text:
            'Geändert wurde damit keine Verfassung, sondern am 28.09.2024 die Geschäftsordnung: Alle Fraktionen dürfen seither bereits im ersten Wahlgang Kandidaten für das Präsidentenamt vorschlagen – zuvor hatte nur die stärkste Fraktion das Vorschlagsrecht. ' +
            'Thadäus König (CDU, 54 Stimmen) wurde daraufhin Landtagspräsident, Wiebke Muhsal (AfD, 32 Stimmen) unterlag. ' +
            'Björn Höcke war damit nicht von einem Amt ausgeschlossen: Als Ministerpräsidentenkandidat hätte er eine Mehrheit gebraucht. Er erhielt bei den konstruktiven Misstrauensvoten im Februar und am 28.08.2026 jeweils 33 Stimmen, nötig wären 45 gewesen. ' +
            'Voigt blieb Ministerpräsident, weil CDU, BSW, Linke und SPD geschlossen gegen ihn stimmten – nicht weil ein Gericht Höcke gesperrt hätte.'
        },
        {
          type: 'note',
          text:
            'Was stimmt: Die Mehrheit änderte die Geschäftsordnung, um die AfD als stärkste Fraktion am Präsidentenamt zu hindern, und der Verfassungsgerichtshof stoppte Treutlers Vorgehen. Was nicht stimmt: Der Alterspräsident wurde nicht „dauernd unterbrochen“ (er unterbrach selbst), es gab keine Verfassungsänderung über Nacht und keine Höcke-Sperre. Wer die korrigierte Version erzählt, bleibt glaubwürdig, wenn die Gegenseite das Protokoll vorlegt.'
        }
      ],
      sources: ['voigt-doktor-verfahren', 'voigt-doktor-widerspruch', 'voigt-doktor-rueckzug', 'verfgh-36-24', 'ts-verfgh', 'koenig', 'voigt-wahl', 'ts-misstrauen']
    },
    {
      id: 'ngo-staat',
      tag: 'teilweise',
      claim: '„Omas gegen Rechts und ähnliche Initiativen werden vom Staat beauftragt, gegen die AfD zu demonstrieren – Steuergeld-Propaganda.“',
      verdict:
        'Die Pauschale ist nicht belegt. Belegt ist projektbezogene Bundesförderung einzelner lokaler Gruppen aus dem Programm „Demokratie leben!“. Die Proteste im Januar 2024 wurden von der Bundesregierung nach Aktenlage weder beauftragt noch finanziert – mobilisiert haben sie Gewerkschaften, Kirchen und zivilgesellschaftliche Bündnisse.',
      blocks: [
        {
          type: 'p',
          text:
            'Was stimmt: Das Bundesprogramm „Demokratie leben!“ (BMFSFJ) fördert Demokratieförderung und Extremismusprävention. 2023 standen 182 Millionen Euro bereit, ausgezahlt wurden 165,7 Millionen Euro. ' +
            'Für die „OMAS GEGEN RECHTS – Buxtehude“ weist eine Bundestagsdrucksache auf AfD-Anfrage 5.000 Euro aus (Modellprojekt „Stark gegen Rassismus“, 2022 bis 2025); insgesamt gingen 18.294,22 Euro über lokale Partnerschaften für Demokratie an einzelne Omas-Gruppen. ' +
            'Der bundesweite Verein erklärt, er finanziere sich aus Mitgliedsbeiträgen und Spenden; einzelne Regionalgruppen hätten Projektmittel erhalten. Das ist Projektförderung einzelner Gruppen – keine institutionelle Finanzierung des Vereins und keine Bezahlung von Demonstrationen.'
        },
        {
          type: 'p',
          text:
            'Zur Kampagne „Wir sind die Brandmauer“ erklärte die Bundesregierung ausdrücklich, sie sei weder von ihr initiiert noch finanziell unterstützt worden. Zu den Demonstrationen vom 21./22. Januar 2024 erklärte sie zudem, ihr lägen keine Erkenntnisse über eine Förderung durch Bundes- oder Landesmittel vor. ' +
            'Die Mobilisierung ist dagegen dokumentiert: Der DGB rief am 18. Januar 2024 zur Teilnahme an Kundgebungen auf. Regierungsvertreter nahmen an einzelnen Protesten teil – das belegt politische Unterstützung, nicht staatliche Beauftragung.'
        },
        {
          type: 'note',
          text:
            'Ehrliche Version: „Der Bund fördert anti-extremistische Projekte mit zweistelligen Millionenbeträgen, auch einzelne Omas-Gruppen mit kleinen Projektbeträgen. Die großen Proteste selbst waren zivilgesellschaftlich organisiert.“ Wer „vom Staat beauftragt“ behauptet, scheitert an den Bundestagsdrucksachen selbst.'
        }
      ],
      sources: ['bt-omas', 'omas-stellungnahme', 'bt-demokratie-leben', 'bt-brandmauer-kampagne', 'dgb-aufruf']
    },
    {
      id: 'rundfunk-staat',
      tag: 'nicht-belegt',
      claim: '„Der öffentlich-rechtliche Rundfunk wird vom Staat gegen die Opposition gesteuert und bekämpft die AfD mit Steuergeldern.“',
      verdict:
        'Nicht belegt. Für staatliche Weisungen an Redaktionen gibt es keinen Beleg – das Bundesverfassungsgericht hat 2014 gerade die Staatsferne des Rundfunks geschützt. Belegt ist dagegen, dass die Berichterstattung über Parteien überwiegend negativ ausfällt – das ist aber keine Steuerung.',
      blocks: [
        {
          type: 'p',
          text:
            'Richtig ist: Der Rundfunk wird über den Rundfunkbeitrag öffentlich-rechtlich finanziert. Daraus folgt aber keine Weisungsbefugnis der Regierung. ' +
            'Das Bundesverfassungsgericht entschied 2014 (1 BvF 1/11), dass staatliche und staatsnahe Mitglieder in Rundfunkgremien begrenzt werden müssen und der Staat keinen bestimmenden Einfluss auf das Programm ausüben darf. Die Bundesregierung selbst erklärte auf AfD-Anfrage, sie bewerte einzelne Programminhalte nicht – die Programmverantwortung liege bei Intendanzen und Rundfunkräten.'
        },
        {
          type: 'p',
          text:
            'Was Kritik an der Berichterstattung stützt: Eine Studie der Universität Mainz (9.389 Beiträge aus 47 Medien) fand überwiegend negative Berichterstattung über Parteien insgesamt; die AfD kam in rund fünf Prozent der Beiträge vor. ' +
            'Das belegt negative Tonalität und geringe Sichtbarkeit – aber keine staatliche Steuerung. Der WDR-Rundfunkrat wies eine AfD-Beschwerde über WDR-5-Sendungen 2024 als Verstoß gegen die Programmgrundsätze zurück: eine Gremiumsentscheidung, kein Beweis für oder gegen Voreingenommenheit im Einzelfall.'
        },
        {
          type: 'note',
          text:
            'Redaktionelle Kritik an Auswahl und Gewichtung bleibt legitim und ist durch Studien gedeckt. Die Behauptung „der Staat steuert die Redaktionen“ ist dagegen durch nichts gedeckt – und das Bundesverfassungsgericht steht dem Wortlaut nach auf der Gegenseite.'
        }
      ],
      sources: ['bverfg-rundfunk', 'mainz-studie', 'bt-demokratie-leben']
    },
    {
      id: 'siegmund-schulze',
      tag: 'teilweise',
      claim: '„Ulrich Siegmund wird lächerlich angegriffen, weil er eine Alleinregierung will, und Sven Schulze grenzt die AfD mit allen Methoden aus.“',
      verdict:
        'Halbwahr. Siegmund hat die Alleinregierung in Sachsen-Anhalt tatsächlich gefordert – das ist ein demokratisches Ziel, kein Skandal. Die Kritik richtete sich gegen seine Positionen und nicht gegen den Satz allein. Schulze persönlich hat die AfD nicht generell ausgeschlossen; die dokumentierten Fälle sind Mehrheitsentscheidungen des Landtags und ein umstrittener Verzicht auf den MPK-Vorsitz.',
      blocks: [
        {
          type: 'p',
          text:
            'Ulrich Siegmund (AfD Sachsen-Anhalt, Co-Fraktionsvorsitzender und Spitzenkandidat für 2026) sagte am 22.05.2025: „Wir haben in Sachsen-Anhalt das klare Ziel, eine Alleinregierung zu stellen“ – angestrebt seien „40 Prozent plus x“. ' +
            'Am 07.09.2025 bekräftigte er gegenüber dem Stern, er wolle eine stabile Mehrheit und schließe eine Minderheitsregierung aus. Die ZEIT überschrieb ihre Meldung mit „allein regieren“ und sprach von „Alleinherrschaft“ – das ist journalistische Zuspitzung, kein Siegmund-Zitat. ' +
            'Eine Alleinregierung bedeutet: regieren ohne Koalitionspartner. Dass ein Spitzenkandidat das anstrebt, ist für jede Partei normal; lächerlich ist das nicht. Die Kritik an Siegmund speist sich aus seinen politischen Positionen, nicht allein aus diesem Ziel.'
        },
        {
          type: 'p',
          text:
            'Sachsen-Anhalt: Siegmund war Vorsitzender des Sozialausschusses und wurde am 21.02.2024 mit 71:21 Stimmen abberufen – auf Antrag von 56 Abgeordneten, wegen seiner Teilnahme an dem Potsdamer Treffen. Er nannte das „Kontaktschuld“, SPD und CDU hegten Zweifel an seiner Eignung. ' +
            'AfD-Kandidaten für das Vizepräsidentenamt scheiterten mehrfach an der Landtagsmehrheit (Hagen Kohl am 26.01.2023: 32 Ja-, 58 Nein-Stimmen). Das sind Abstimmungen des Plenums, keine persönlichen Entscheidungen Sven Schulzes. ' +
            'Am 08.09.2026 schlug Schulze nach dem AfD-Wahlsieg vor, den turnusmäßigen Vorsitz der Ministerpräsidentenkonferenz nicht zu übernehmen – er nannte die unsichere Regierungsbildung als Grund. ' +
            'Das BSW warf ihm vor, einem Nachfolger Gestaltungsmöglichkeiten zu nehmen; der amtierende MPK-Vorsitzende Schnieder sagte, er lese den Brief nicht als Ausgrenzung, sondern als Bitte um ein geordnetes Verfahren.'
        },
        {
          type: 'note',
          text:
            'Belegt ist: Landtagsmehrheiten haben AfD-Personal mehrfach abgelehnt, und Schulze hat den MPK-Verzichts-Vorschlag gemacht. Nicht belegt ist: eine generelle Ausgrenzung der AfD durch Schulze persönlich. In Sachsen (siehe Eintrag „aemter-laender“) sitzt die AfD dagegen im Präsidium – die Lage ist je Land verschieden.'
        }
      ],
      sources: ['siegmund-tonline', 'siegmund-stern', 'siegmund-abberufung', 'schulze-mpk']
    },
    {
      id: 'wahl-ausschluesse',
      tag: 'teilweise',
      claim: '„Etliche AfD-Leute werden nicht zur Wahl zugelassen, weil die SPD die Gesetze verbiegt.“',
      verdict:
        'Die Nichtzulassungen sind belegt, die „Gesetzesbiegerei“ nicht. Die Fälle beruhen auf bestehenden Wählbarkeitsregeln (Verfassungstreue, Formfehler, Unterschriften). Eine konkrete Verfahrensreform hat 2026 die SPD-Fraktion mit den Grünen in Niedersachsen durchgesetzt – die AfD nannte sie „Lex AfD“, die Regierung verweist auf eine vorher geltende Regel. Gerichte haben die Ausschlüsse nicht abschließend in der Sache bestätigt.',
      blocks: [
        {
          type: 'p',
          text:
            'Belegte Fälle: Bremen 2023 – der Staatsgerichtshof bestätigte am 16.08.2024 die Zurückweisung der AfD-Wahlvorschläge, weil der sogenannte Rumpfvorstand nach parteiinternen Schiedsgerichtsentscheidungen nicht mehr wirksam zeichnen konnte. ' +
            'Jüchen 2025 – die AfD-Liste wurde wegen Formfehlern zurückgewiesen (falscher Vorstand, verspätete Einladung), ohne Gerichtsverfahren. Ludwigshafen 2025 – Joachim Paul wurde wegen Zweifeln an seiner Verfassungstreue nicht zugelassen; das Bundesverfassungsgericht nahm seine Beschwerde am 16.09.2025 nicht an, aber ausdrücklich wegen unzureichender Begründung – keine Sachentscheidung. ' +
            'Landkreis Friesland 2026 – Martin Sichert wurde nicht zugelassen; das VG Oldenburg lehnte den Eilantrag am 17.08.2026 ab und verwies auf die Wahlprüfung nach der Wahl. Keines dieser Verfahren hat die materielle Verfassungstreue des Kandidaten abschließend festgestellt.'
        },
        {
          type: 'p',
          text:
            'Niedersachsen 2026: SPD und Grüne brachten ein Gesetz ein, das bei Zweifeln an der Verfassungstreue von Bewerbern um kommunale Spitzenämter ein Prüfverfahren mit Beteiligung der Kommunalaufsicht und des Verfassungsschutzes schafft. Der Landtag beschloss es am 28.04.2026, in Kraft am 07.05.2026. ' +
            'Die AfD nannte die Reform „Lex AfD“ und forderte, ein Ausschluss müsse eine vorherige gerichtliche Feststellung voraussetzen. Die Landesregierung hält dagegen, die Wählbarkeitsvoraussetzung – Gewähr, jederzeit für die freiheitliche demokratische Grundordnung einzutreten – habe schon vorher für alle Bewerber gegolten; die Reform schaffe nur Rechtssicherheit.'
        },
        {
          type: 'note',
          text:
            'Was man ehrlich sagen kann: Wahlausschüsse schließen AfD-Bewerber aus, oft unter Verweis auf Verfassungsschutz-Erkenntnisse, und die Verfahrenshürden wurden 2026 in Niedersachsen von SPD/Grünen gezielt präzisiert. Was man nicht belegen kann: Dass die SPD materielle Regeln erst gegen die AfD erfunden hat – die Verfassungstreue-Anforderung stand vorher schon im Gesetz.'
        }
      ],
      sources: ['bremen-stgh', 'paul-verfgh', 'bverfg-paul', 'friesland-vg', 'wdr-juechen', 'niedersachsen-reform']
    }
  ]
});
