/* Abschnitt: Die größten Vorwürfe – Teil 1 */
window.DOSSIER_SECTIONS = (window.DOSSIER_SECTIONS || []).concat([
  {
    id: 'vorwuerfe',
    title: 'Die größten Vorwürfe',
    kicker: 'Faktencheck',
    intro:
      'Die Sätze, die in Debatten fast täglich fallen. Jeder Eintrag nennt zuerst die Behauptung, dann die Beleglage, dann die Bewertung. ' +
      'Nicht jeder Vorwurf ist falsch – und nicht jeder ist haltbar. Genau darum geht es.',
    entries: [
      {
        id: 'nazi-partei',
        tag: 'teilweise',
        claim: '„Die AfD ist eine Nazi-Partei – und wer sie wählt, ist ein Nazi.“',
        verdict:
          'Als Pauschalurteil über 73.000 Mitglieder und 10,3 Millionen Wähler nicht belegbar. Belegbar ist die behördliche Einstufung der Partei als rechtsextremistische Bestrebung – das ist ein anderer, präziserer Satz.',
        blocks: [
          {
            type: 'p',
            text:
              'Das Bundesamt für Verfassungsschutz stufte die AfD am 2. Mai 2025 als „gesichert rechtsextremistische Bestrebung“ ein. ' +
              'Grundlage war ein Gutachten von rund 1.100 Seiten, das zunächst als Verschlusssache behandelt wurde. ' +
              'Die Behörde begründete die Einstufung mit einer „die Menschenwürde missachtenden, extremistischen Prägung der Gesamtpartei“.'
          },
          {
            type: 'p',
            text:
              'Der weitere Verfahrensweg ist wichtig, wenn man den Satz benutzt: Am 8. Mai 2025 gab das Bundesamt im Eilverfahren vor dem Verwaltungsgericht Köln eine Stillhaltezusage ab – ' +
              'bis zur Gerichtsentscheidung keine öffentliche Bezeichnung als „gesichert rechtsextremistisch“, die Pressemitteilung wurde von der Website entfernt. ' +
              'Im Februar 2026 entschied das Verwaltungsgericht Köln im Eilverfahren, dass das Bundesamt die AfD bis zum Abschluss des Hauptsacheverfahrens nicht so einstufen darf.'
          },
          {
            type: 'p',
            text:
              'Davon unabhängig ist die Einstufung als „Verdachtsfall“ rechtskräftig: Das Bundesverwaltungsgericht ließ am 20. Mai 2025 die Revisionen gegen die Urteile des Oberverwaltungsgerichts Münster vom 13. Mai 2024 nicht zu. ' +
              'Die Beobachtung mit nachrichtendienstlichen Mitteln ist damit gerichtlich bestätigt.'
          },
          {
            type: 'note',
            text:
              'Für Gespräche: „Nazi-Partei“ ist eine Bewertung, die man bestreiten kann. „Vom Verfassungsschutz als rechtsextremistische Bestrebung eingestuft, Einstufung derzeit gerichtlich ausgesetzt“ ist ein Satz, der sitzt – und den man nicht widerlegen kann, ohne die Behörde zu erklären.'
          }
        ],
        sources: ['bfv', 'vgkoeln', 'gutachten', 'bverwg', 'vblog']
      },
      {
        id: 'alle-abschieben',
        tag: 'teilweise',
        claim: '„Die AfD will alle Ausländer abschieben.“',
        verdict:
          'So nicht belegt. Belegt ist eine massive Verschärfung der Abschiebepraxis. Die offene Flanke ist nicht das Programm, sondern das Potsdamer Treffen, bei dem es auch um deutsche Staatsbürger mit Migrationsgeschichte ging.',
        blocks: [
          {
            type: 'p',
            text:
              'Das Wahlprogramm 2025 fordert eine „umfassende Rückführungsoffensive“, Gewahrsamszentren an der Grenze und die Verlagerung von Asylverfahren ins Ausland. ' +
              'Der Begriff „Remigration“ wurde auf dem Parteitag in Riesa per Änderungsantrag in das Programm aufgenommen.'
          },
          {
            type: 'quote',
            text:
              'Remigration bedeute für die AfD die konsequente Abschiebung Ausreisepflichtiger; die Rückführung von Geflüchteten, wenn der Fluchtgrund im Heimatland entfalle – etwa von Syrern; ' +
              'sowie die Rückführung von Straftätern, Gefährdern und Menschen, die „ausländische Konflikte auf deutschem Boden“ austragen.',
            source: 'stz-remigration'
          },
          {
            type: 'p',
            text:
              'Diese Definition ist enger als der Vorwurf „alle Ausländer“. Sie erfasst Ausreisepflichtige, Straftäter und Gefährder – nicht pauschal jeden Menschen mit ausländischem Pass. ' +
              'Wer den Vorwurf erhebt, sollte diese Unterscheidung kennen, sonst wird er an ihr scheitern.'
          },
          {
            type: 'p',
            text:
              'Der belastbare Gegenpunkt liegt woanders: Bei dem Treffen im Landhaus Adlon bei Potsdam am 25. November 2023 stellte der Rechtsextremist Martin Sellner ein Konzept vor, ' +
              'das die „Remigration“ auch von deutschen Staatsbürgern mit Zuwanderungsgeschichte vorsah. Anwesend waren nach den Recherchen unter anderem der persönliche Referent von Alice Weidel, Roland Hartwig, ' +
              'die Bundestagsabgeordnete Gerrit Huy, Sachsen-Anhalts Fraktionschef Ulrich Siegmund und der Potsdamer Kreisvorsitzende Tim Krause.'
          },
          {
            type: 'p',
            text:
              'Die AfD bezeichnete das Treffen als „kein AfD-Termin“ und „rein private Veranstaltung“. Genau diese Distanzierung ist der Punkt, an dem der Vorwurf „alle“ zwar nicht bewiesen, aber auch nicht erledigt ist.'
          }
        ],
        sources: ['programm', 'zdf-programm', 'stz-remigration', 'ts-potsdam', 'dlf-potsdam', 'correctiv', 'bt-potsdam']
      },
      {
        id: 'putsch',
        tag: 'nicht-belegt',
        claim: '„Die AfD plant einen Staatsstreich und will die Demokratie abschaffen.“',
        verdict:
          'Ein Putschplan ist nicht belegt. Belegt ist die behördliche Einschätzung, dass die Partei Bestrebungen gegen die freiheitliche demokratische Grundordnung verfolgt. Zwischen beidem liegt ein großer Unterschied.',
        blocks: [
          {
            type: 'p',
            text:
              'Für einen Umsturzplan gibt es keine öffentlich belegten Beweise. Die AfD tritt zu Wahlen an, stellt 152 Bundestagsabgeordnete und sitzt in allen Landesparlamenten. ' +
              'Ein Parteiverbot ist bisher nicht beantragt: Eine fraktionsübergreifende Initiative um den früheren CDU-Abgeordneten Marco Wanderwitz scheiterte Anfang 2025, ' +
              'nur rund 120 Abgeordnete unterstützten sie – zu wenige für einen Beschluss.'
          },
          {
            type: 'p',
            text:
              'Gleichzeitig ist die Einschätzung des Verfassungsschutzes keine Erfindung: Das Bundesamt begründet sie mit einem „ethnisch-abstammungsmäßigen Volksverständnis“, ' +
              'das mit der Menschenwürdegarantie des Grundgesetzes nicht vereinbar sei. Das ist eine verfassungsrechtliche Bewertung, keine strafrechtliche Verurteilung.'
          },
          {
            type: 'p',
            text:
              'Rechtlich gilt: Ein Verbot setzt nach Artikel 21 Grundgesetz voraus, dass eine Partei nach Zielen oder Verhalten darauf ausgeht, die freiheitliche demokratische Grundordnung zu beeinträchtigen oder zu beseitigen. ' +
              'Ob diese Schwelle erreicht ist, entscheidet allein das Bundesverfassungsgericht – und zwar in einem Verfahren, das Jahre dauert.'
          },
          {
            type: 'note',
            text:
              'Der stärkste Satz ist nicht „die planen einen Putsch“, sondern: „Der Verfassungsschutz traut der Partei den Angriff auf die freiheitliche Grundordnung zu – und die Partei klagt dagegen, statt die Vorwürfe auszuräumen.“'
          }
        ],
        sources: ['bfv', 'vblog', 'bverwg', 'wdr-verbot', 'gg21']
      }
    ]
  }
]);
