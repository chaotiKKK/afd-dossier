/* Abschnitt: Gegenargumente – Teil 3 */
window.DOSSIER_SECTIONS.find((s) => s.id === 'gegenargumente').entries.push(
  {
    id: 'wirtschaftlich-unfaehig',
    tag: 'einordnung',
    claim: '„Die AfD ist wirtschaftlich unfähig.“',
    verdict:
      'Ein Urteil, kein Messwert. Prüfbar ist etwas anderes: Das Programm verspricht 182 Milliarden Euro Entlastung und will zugleich EU und Euro verlassen – die Finanzierung ist die offene Flanke.',
    blocks: [
      {
        type: 'p',
        text:
          'Das Programm verspricht Steuerentlastungen, die der DIW-Forscher Stefan Bach nach Berechnungen des RND auf 182 Milliarden Euro beziffert. ' +
          'Gleichzeitig fordert die AfD den Austritt aus dem Euro und der EU – beides zusammen ist der Kern des wirtschaftspolitischen Risikos.'
      },
      {
        type: 'p',
        text:
          '„Unfähig“ ist eine Bewertung der handelnden Personen; sie lässt sich nicht aus einem Programm ableiten. ' +
          'Prüfbar sind dagegen die Zusagen: Wie werden 182 Milliarden gegenfinanziert? Was kostet der Austritt aus dem Binnenmarkt? Welche Übergangsregeln gelten für Schulden, Verträge und Lieferketten?'
      },
      {
        type: 'note',
        text:
          'Diese Fragen sind der stärkste Teil der Kritik – nicht das Etikett. Wer sie stellt, muss keine Behauptung über Charaktere aufstellen; die Partei muss Zahlen liefern.'
      }
    ],
    sources: ['rnd-programm', 'programm', 'zdf-programm', 'bpb']
  },
  {
    id: 'zirkulaeres-argument',
    tag: 'einordnung',
    claim: '„Die AfD will die Demokratie abschaffen – deshalb ist das Argument mit der Demokratie zirkulär.“',
    verdict:
      'Der Zirkularitätsvorwurf ist berechtigt, solange „verfassungsfeindlich“ als Prämisse gesetzt wird. Er verschwindet, sobald man konkrete Handlungen, Urteile und Programmstellen benennt.',
    blocks: [
      {
        type: 'p',
        text:
          'Der Kreis sieht so aus: Die AfD ist verfassungsfeindlich, deshalb darf man sie ausschließen, deshalb ist der Ausschluss demokratisch, deshalb ist die AfD verfassungsfeindlich. ' +
          'In dieser Form trägt das Argument nichts – es setzt voraus, was es beweisen will.'
      },
      {
        type: 'p',
        text:
          'Der Ausweg ist die Konkretion. Artikel 21 Grundgesetz fragt nach Zielen und Verhalten, nicht nach Etiketten. ' +
          'Belegbar sind: rechtskräftige Urteile gegen Höcke, die Programmforderung eines EU-Austritts, die Einstufungen von fünf Landesämtern, die Gutachten, die Abstimmungen im Bundestag.'
      },
      {
        type: 'p',
        text:
          'Umgekehrt gilt dasselbe: Die Selbstbeschreibung „wir sind die letzten Demokraten“ ist ebenso zirkulär, wenn sie nur behauptet wird. ' +
          'Belegt ist lediglich, dass die AfD die größte Oppositionspartei ist und die Regierung nicht stützt.'
      },
      {
        type: 'note',
        text:
          'Die Frage, die den Kreis durchbricht: „Welche konkrete Entscheidung, Rede oder Abstimmung zeigt, dass diese Partei die Regeln des Grundgesetzes verletzt?“ Wer sie beantwortet, argumentiert. Wer sie nicht beantwortet, behauptet.'
      }
    ],
    sources: ['gg21', 'bfv', 'bgh', 'gutachten', 'bt2901']
  }
);
