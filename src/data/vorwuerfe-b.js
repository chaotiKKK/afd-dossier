/* Abschnitt: Die größten Vorwürfe – Teil 2 */
window.DOSSIER_SECTIONS[0].entries.push(
  {
    id: 'russland',
    tag: 'nicht-belegt',
    claim: '„Die AfD wird von Russland bezahlt.“',
    verdict:
      'Eine Parteifinanzierung aus Russland ist nicht belegt. Belegt sind Ermittlungen zu russischen Zahlungen an einzelne Funktionäre und ein rechtskräftig verurteilter Mitarbeiter, der für China spionierte.',
    blocks: [
      {
        type: 'p',
        text:
          'Die Sicherheitsbehörden haben wiederholt geprüft, ob Geld aus Russland an AfD-Funktionäre geflossen ist. Im Fall des Europaabgeordneten Maximilian Krah leitete die Staatsanwaltschaft im April 2024 ein Vorermittlungsverfahren im Zusammenhang mit angeblichen russischen Zahlungen ein; Krah war in diesem Verfahren nicht Beschuldigter.'
      },
      {
        type: 'p',
        text:
          'Klar belegt ist ein anderer Fall: Krahs langjähriger Mitarbeiter Jian G. wurde am 22. April 2024 in Dresden festgenommen. Der Vorwurf lautete Agententätigkeit für einen ausländischen Geheimdienst in einem besonders schweren Fall – er soll Informationen aus dem Europäischen Parlament an China weitergegeben haben. ' +
          'Im September 2025 verurteilte das Oberlandesgericht Dresden ihn zu vier Jahren und neun Monaten Haft.'
      },
      {
        type: 'p',
        text:
          'In der Folge hob der Bundestag die Immunität Krahs auf, wegen des Verdachts der Bestechlichkeit und Geldwäsche im Zusammenhang mit chinesischen Geldzahlungen. Krah bestreitet die Vorwürfe. ' +
          'Das ist ein Beleg für ein Sicherheitsproblem in der Umgebung eines AfD-Spitzenpolitikers – aber kein Beleg dafür, dass die Partei als Ganzes aus dem Ausland finanziert wird.'
      },
      {
        type: 'note',
        text:
          'Sauber argumentiert: „Es gibt keine belegte Parteifinanzierung aus Russland. Es gibt Ermittlungen gegen einzelne Funktionäre und einen verurteilten Spion im Büro von Krah. Wer das bestreitet, hat den Fall Jian G. nicht gelesen.“'
      }
    ],
    sources: ['ts-krah', 'zdf-krah', 'ts-krah-ru', 'ts-krah-cn', 'bfv']
  },
  {
    id: 'antisemitisch',
    tag: 'einordnung',
    claim: '„Die AfD ist antisemitisch.“',
    verdict:
      'Ein Pauschalurteil. Belegt sind Aussagen aus der Partei, die als Holocaust-Relativierung kritisiert wurden – und der Streit darüber, wie die Partei damit umgeht.',
    blocks: [
      {
        type: 'p',
        text:
          'Der bekannteste Fall ist Björn Höcke. Am 17. Januar 2017 sagte er in Dresden: „Wir Deutschen, also unser Volk, sind das einzige Volk der Welt, das sich ein Denkmal der Schande in das Herz seiner Hauptstadt gepflanzt hat.“ ' +
          'Er sprach von „dämlicher Bewältigungspolitik“ und forderte eine „Wende um 180 Grad“ in der Erinnerungskultur.'
      },
      {
        type: 'quote',
        text:
          'Wir Deutschen, also unser Volk, sind das einzige Volk der Welt, das sich ein Denkmal der Schande in das Herz seiner Hauptstadt gepflanzt hat.',
        source: 'zeit-hoecke'
      },
      {
        type: 'p',
        text:
          'Der Zentralrat der Juden nannte die Äußerungen „zutiefst empörend und völlig inakzeptabel“. Höcke erklärte anschließend, er habe nicht das Mahnmal selbst als Schande bezeichnen wollen; ' +
          'die Formulierung sei bewusst missverstanden worden. Die Staatsanwaltschaft Dresden stellte die Ermittlungen wegen Volksverhetzung im März 2017 ein.'
      },
      {
        type: 'p',
        text:
          'Für die Bewertung entscheidend ist die Unterscheidung: Der Satz ist dokumentiert. Ob er antisemitisch ist, ist eine Bewertung – und ob die Partei als Ganze so zu nennen ist, eine weitere. ' +
          'Wer den Vorwurf erhebt, sollte das Zitat und die Reaktion der Partei kennen; wer ihn bestreitet, sollte erklären, warum die Formulierung gewählt wurde.'
      }
    ],
    sources: ['zeit-hoecke', 'taz-hoecke', 'spiegel-hoecke', 'dw-hoecke', 'bz-hoecke']
  },
  {
    id: 'ost-partei',
    tag: 'nicht-belegt',
    claim: '„Die AfD ist eine ostdeutsche Regionalpartei.“',
    verdict:
      'Falsch. 70 Prozent ihrer Bundestagsstimmen kamen 2025 aus den alten Bundesländern – fast derselbe Wert wie bei der Linken.',
    blocks: [
      {
        type: 'p',
        text:
          'Die AfD erreichte 2025 im Osten rund 32 Prozent, im Westen rund 18 Prozent. In absoluten Zahlen entfielen dennoch 70 Prozent ihrer Stimmen auf die alten Bundesländer, ' +
          'weil dort deutlich mehr Menschen wählen. In allen ostdeutschen Flächenländern wurde sie mit Zweitstimmenanteilen zwischen 32,5 und 38,6 Prozent stärkste Kraft.'
      },
      {
        type: 'p',
        text:
          'Der Ost-West-Unterschied ist real und erklärungsbedürftig – aber er beschreibt eine Gewichtung, keine Regionalpartei. Wer die AfD als „Ost-Phänomen“ abtut, erklärt 7,2 Millionen Wählerstimmen aus Westdeutschland weg.'
      }
    ],
    sources: ['bpb', 'wahlleiter']
  },
  {
    id: 'nur-protest',
    tag: 'einordnung',
    claim: '„Die 20,8 Prozent sind nur Protestwähler ohne Überzeugung.“',
    verdict:
      'Eine Deutung, keine Messung. Die Wählerschaft ist nach Geschlecht, Region und Migrationsgeschichte sehr unterschiedlich zusammengesetzt.',
    blocks: [
      {
        type: 'p',
        text:
          '2025 wählten 25,1 Prozent der Männer und 16,7 Prozent der Frauen die AfD. In Ostdeutschland liegen die Anteile rund doppelt so hoch wie im Westen. ' +
          'Unter Wählern mit russlanddeutschem Hintergrund lag die AfD laut den bei der Tagesspiegel zitierten KAS-Daten bei 43 Prozent.'
      },
      {
        type: 'p',
        text:
          '„Protest“ ist eine Motiverklärung, die man nicht an der Wahlurne ablesen kann. Sie kann richtig sein – aber sie ist eine Annahme über Gründe, nicht ein Ergebnis der Auszählung. ' +
          'Wer sie benutzt, sollte sie als Vermutung kennzeichnen, nicht als Befund.'
      }
    ],
    sources: ['bpb', 'tagesspiegel']
  }
);
