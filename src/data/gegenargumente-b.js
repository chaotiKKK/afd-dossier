/* Abschnitt: Gegenargumente – Teil 2 */
window.DOSSIER_SECTIONS.find((s) => s.id === 'gegenargumente').entries.push(
  {
    id: 'russland-bezahlt',
    tag: 'nicht-belegt',
    claim: '„Die AfD wird von Russland bezahlt – deshalb ist sie so russlandfreundlich.“',
    verdict:
      'Zahlungen an die Partei sind nicht belegt. Die Russland-Nähe ist belegt – sie braucht kein Geld aus Moskau, um erklärt zu werden.',
    blocks: [
      {
        type: 'p',
        text:
          'Es gibt keine öffentlich belegte Parteifinanzierung aus Russland. Belegt sind Ermittlungen zu angeblichen russischen Zahlungen an einzelne Funktionäre. ' +
          'Im Fall Maximilian Krah leitete die Staatsanwaltschaft 2024 ein Vorermittlungsverfahren ein; Krah war darin nicht Beschuldigter.'
      },
      {
        type: 'p',
        text:
          'Belegt ist dagegen die politische Position: sofortige Aufhebung der Russland-Sanktionen, Reparatur von Nord Stream, keine Verurteilung des Angriffs auf die Ukraine im Programm. ' +
          'Ein Änderungsantrag, der eine Verurteilung aufnehmen sollte, wurde auf dem Parteitag mit 69 Prozent Nichtbefassung abgeräumt.'
      },
      {
        type: 'note',
        text:
          'Der belastbare Satz lautet nicht „bezahlt“, sondern: „Die AfD fordert im Programm die Aufhebung der Russland-Sanktionen und verurteilt den Angriff auf die Ukraine nicht.“ Das ist stärker, weil es stimmt.'
      }
    ],
    sources: ['ts-krah-ru', 'ts-krah', 'zdf-krah', 'programm', 'fr-russland', 'rnd-programm']
  },
  {
    id: 'sozialstaat-abschaffen',
    tag: 'nicht-belegt',
    claim: '„Die AfD will den Sozialstaat abschaffen.“',
    verdict:
      'Nicht belegt. Das Programm bekennt sich zur sozialen Marktwirtschaft. Belegt sind Leistungskürzungen für Ausländer und ein Umbau des Bürgergelds.',
    blocks: [
      {
        type: 'p',
        text:
          'Das Wahlprogramm beginnt wirtschaftspolitisch mit dem Kapitel „Soziale Marktwirtschaft“ und fordert ein freies Unternehmertum bei staatlicher Absicherung. ' +
          'Eine Abschaffung der Sozialversicherungen steht dort nicht.'
      },
      {
        type: 'p',
        text:
          'Belegt sind Einschnitte an anderer Stelle: Das Bürgergeld soll umgebaut und eingeschränkt werden, insbesondere für Empfänger ohne deutsche Staatsbürgerschaft. ' +
          'Sozialleistungen für Asylbewerber sollen als Sachleistungen erbracht, Leistungen für Ausreisepflichtige auf ein „menschenwürdiges Existenzminimum“ gesenkt werden.'
      },
      {
        type: 'note',
        text:
          'Die Unterscheidung ist wichtig: „Sozialstaat abschaffen“ ist ein Strohmann. „Leistungen für Nichtdeutsche kürzen“ ist eine belegte Programmforderung – und eine harte politische Frage.'
      }
    ],
    sources: ['programm', 'rnd-programm', 'zdf-programm']
  },
  {
    id: 'brandmauer-legitim',
    tag: 'einordnung',
    claim: '„Die Brandmauer ist legitim, weil die AfD verfassungsfeindlich ist.“',
    verdict:
      'Als politische Haltung legitim. Als Begründung wird sie zirkulär, wenn die Einstufung zugleich der Beweis für die Einstufung sein soll.',
    blocks: [
      {
        type: 'p',
        text:
          'Der Gedanke dahinter: Wer die freiheitliche Grundordnung angreift, soll keine Regierungsmacht bekommen. Das ist eine nachvollziehbare demokratische Schutzlogik – ' +
          'und Artikel 21 Grundgesetz gibt ihr eine Grundlage, weil er Parteien an die freiheitliche demokratische Grundordnung bindet.'
      },
      {
        type: 'p',
        text:
          'Zirkulär wird es, wenn „verfassungsfeindlich“ als feststehende Tatsache behandelt wird, obwohl die Einstufung der Bundespartei derzeit gerichtlich ausgesetzt ist und das Hauptverfahren noch läuft. ' +
          'Dann begründet die Aussage sich selbst: Die Partei ist verfassungsfeindlich, also darf man sie ausschließen, also ist sie verfassungsfeindlich.'
      },
      {
        type: 'p',
        text:
          'Nicht zirkulär ist der Weg über konkrete Belege: rechtskräftige Urteile (Höcke), Programmstellen (EU-Austritt), Abstimmungen, Äußerungen, die Gutachten der Landesämter. ' +
          'Dann ist die Brandmauer eine begründete politische Entscheidung – keine Selbstverständlichkeit und kein Naturgesetz.'
      }
    ],
    sources: ['bfv', 'gutachten', 'bverwg', 'gg21', 'gg38', 'wahlleiter']
  },
  {
    id: 'keine-migranten-2',
    tag: 'nicht-belegt',
    claim: '„Die AfD hat keine Migranten in ihren Reihen – das ist eine rein deutsche Partei.“',
    verdict:
      'Falsch. Sie hat welche – aber den niedrigsten Anteil aller Fraktionen. Das Argument funktioniert nur, wenn man beides sagt.',
    blocks: [
      {
        type: 'p',
        text:
          '9 der 152 AfD-Bundestagsabgeordneten haben einen Migrationshintergrund – 5,9 Prozent, der niedrigste Wert aller Fraktionen. Acht Abgeordnete haben einen Bezug zu Staaten der früheren Sowjetunion, darunter Spätaussiedler-Familien.'
      },
      {
        type: 'p',
        text:
          'In der Wählerschaft ist das Bild anders: 43 Prozent der Russlanddeutschen, 33 Prozent der Polnischstämmigen und 31 Prozent der Spätaussiedler wählten 2025 die AfD. ' +
          'Bei türkeistämmigen Wählern sind es nur 8 Prozent.'
      },
      {
        type: 'note',
        text:
          'Der Satz, der hält: „Die AfD hat Migranten in ihren Reihen, aber weniger als jede andere Fraktion – und ihr Programm will die Staatsangehörigkeit restriktiver vergeben.“ Wer nur den ersten Teil sagt, wird widerlegt; wer beide sagt, wird ernst genommen.'
      }
    ],
    sources: ['mdi', 'tagesspiegel', 'programm']
  }
);
