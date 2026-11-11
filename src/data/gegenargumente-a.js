/* Abschnitt: Die zehn häufigsten Gegenargumente – Teil 1 */
window.DOSSIER_SECTIONS.push({
  id: 'gegenargumente',
  title: 'Die zehn häufigsten Gegenargumente',
  kicker: 'Dialektik',
  intro:
    'Dieser Abschnitt nimmt die Sätze ernst, die man in Gesprächen tatsächlich hört – von Anhängern und von Gegnern. ' +
    'Jeder Eintrag prüft zuerst, was daran stimmt. Erst danach kommt die Bewertung. Wer ein Gegenargument widerlegen will, ' +
    'muss zugeben, was daran richtig ist.',
  entries: [
    {
      id: 'wahl-verboten',
      tag: 'nicht-belegt',
      claim: '„Eine verfassungsfeindliche Partei darf man nicht wählen – das ist doch verboten.“',
      verdict:
        'Rechtlich falsch. Ein Parteiverbot gibt es nur durch das Bundesverfassungsgericht, und die AfD ist nicht verboten. Die Einstufung durch den Verfassungsschutz ist kein Wahlverbot.',
      blocks: [
        {
          type: 'p',
          text:
            'Artikel 21 Grundgesetz regelt die Parteien. Ein Verbot aussprechen darf ausschließlich das Bundesverfassungsgericht – auf Antrag von Bundestag, Bundesrat oder Bundesregierung. ' +
            'Die AfD ist nicht verboten; eine fraktionsübergreifende Initiative für ein Verbotsverfahren scheiterte Anfang 2025, weil nur rund 120 Abgeordnete sie unterstützten.'
        },
        {
          type: 'p',
          text:
            'Auch die Einstufung als „gesichert rechtsextremistische Bestrebung“ ist keine Verbotsnorm. Sie erlaubt Beobachtung, sie verbietet weder die Partei noch die Wahl oder die Mitgliedschaft. ' +
            'Wer die AfD nicht wählen will, kann das politisch begründen – rechtlich gibt es dafür keinen Tatbestand.'
        },
        {
          type: 'note',
          text:
            'Für Gespräche: „Ein Verbot kann nur Karlsruhe aussprechen, und es gibt keins. Wenn Sie die Partei verfassungsfeindlich finden, ist das ein politisches Argument – kein Rechtsgrund.“'
        }
      ],
      sources: ['gg21', 'wdr-verbot', 'bverwg']
    },
    {
      id: 'einzelfall',
      tag: 'teilweise',
      claim: '„Höcke, Krah, Potsdam – das sind Einzelfälle, die nichts über die Partei sagen.“',
      verdict:
        'Einzelfälle sind keine Kollektivschuld. Aber der Verfassungsschutz prüft nicht Einzelfälle, sondern die Gesamtpartei – und begründet seine Einstufung mit der Prägung der Partei als Ganzes.',
      blocks: [
        {
          type: 'p',
          text:
            'Das Bundesamt für Verfassungsschutz stützte seine Einstufung vom 2. Mai 2025 ausdrücklich auf eine „die Menschenwürde missachtende, extremistische Prägung der Gesamtpartei“ – nicht auf einzelne Reden. ' +
            'Grundlage war ein Gutachten von rund 1.100 Seiten.'
        },
        {
          type: 'p',
          text:
            'Gleichzeitig ist der Einwand ernst zu nehmen: Eine Partei mit 73.000 Mitgliedern besteht nicht nur aus ihren Skandalen. ' +
            'Die entscheidende Frage ist deshalb nicht „Einzelfall oder nicht“, sondern: Wie viele Fälle gibt es, wie schwer wiegen sie, und wie reagiert die Partei darauf?'
        },
        {
          type: 'facts',
          items: [
            'Der „Flügel“ um Höcke war eine interne Sammlungsbewegung, die der Verfassungsschutz als gesichert rechtsextremistisch einstufte und die 2020 aufgelöst wurde.',
            'Fünf Landesverbände gelten als gesichert rechtsextremistisch – in Sachsen ist das gerichtlich bestätigt.',
            'Bei dem Potsdamer Treffen 2023 war Weidels persönlicher Referent anwesend; die Partei sprach von einer privaten Veranstaltung.'
          ]
        }
      ],
      sources: ['bfv', 'gutachten', 'bverwg', 'correctiv-laender', 'ts-potsdam']
    },
    {
      id: 'remigration-millionen',
      tag: 'teilweise',
      claim: '„Remigration heißt Vertreibung von Millionen – auch von Deutschen mit Migrationshintergrund.“',
      verdict:
        'Für das Wahlprogramm nicht belegt, für das Potsdamer Konzept dokumentiert. Wer beides gleichsetzt, hat den Punkt – verliert aber die Debatte um das Programm.',
      blocks: [
        {
          type: 'p',
          text:
            'Das Wahlprogramm definiert Remigration eng: Abschiebung Ausreisepflichtiger, Rückführung von Geflüchteten bei Wegfall des Fluchtgrunds sowie Rückführung von Straftätern und Gefährdern. ' +
            'Von deutschen Staatsbürgern ist dort nicht die Rede.'
        },
        {
          type: 'p',
          text:
            'Bei dem Treffen im Landhaus Adlon bei Potsdam am 25. November 2023 stellte Martin Sellner dagegen ein Konzept vor, das die „Remigration“ auch deutscher Staatsbürger mit Zuwanderungsgeschichte vorsah. ' +
            'Nach Darstellung im Landtag von Sachsen-Anhalt sprach Sellner von 24 Millionen Menschen, die Deutschland verlassen müssten – darunter auch solche mit deutscher Staatsbürgerschaft.'
        },
        {
          type: 'p',
          text:
            'Die AfD distanzierte sich: Das Treffen sei „kein AfD-Termin“ und eine „rein private Veranstaltung“ gewesen. Genau hier liegt die belastbare Frage: Warum nehmen führende Mitarbeiter und Funktionäre an einer solchen Runde teil – und was folgt daraus für die Partei?'
        }
      ],
      sources: ['stz-remigration', 'ts-potsdam', 'dlf-potsdam', 'mdr-sellner', 'bt-potsdam']
    },
    {
      id: 'nato-eu-raus',
      tag: 'teilweise',
      claim: '„Die AfD will aus NATO und EU raus.“',
      verdict:
        'EU: ja, das steht im Programm. NATO: nein – das Programm will in der NATO bleiben, bis ein europäisches Militärbündnis aufgebaut ist.',
      blocks: [
        {
          type: 'p',
          text:
            'Das Wahlprogramm 2025 fordert den Austritt Deutschlands aus der Europäischen Union und aus dem Euro. Das ist eine der klarsten und belastbarsten Aussagen des Programms – hier gibt es nichts zu relativieren.'
        },
        {
          type: 'p',
          text:
            'Bei der NATO ist die Lage anders: Die AfD bekennt sich im Programm zur NATO-Mitgliedschaft „bis zum Aufbau eines unabhängigen und handlungsfähigen europäischen Militärbündnisses“. ' +
            'Führende Politiker wie Tino Chrupalla äußern allerdings Zweifel, ob die NATO deutsche Interessen vertritt. Ein Austritt steht nicht im Programm.'
        },
        {
          type: 'note',
          text:
            'Sauber argumentiert: „Bei der EU steht der Austritt im Programm, bei der NATO nicht. Wer beides behauptet, macht es sich zu leicht – und wird an der Programmstelle widerlegt.“'
        }
      ],
      sources: ['programm', 'zdf-programm', 'rnd-programm', 'tagesschau-aussenpolitik']
    }
  ]
});
