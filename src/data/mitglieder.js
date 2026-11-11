/* Abschnitt: Migrationsdeutsche in der AfD */
window.DOSSIER_SECTIONS.push({
  id: 'mitglieder',
  title: 'Migrationsdeutsche in der AfD',
  kicker: 'Zahlen und Menschen',
  intro:
    'Der Satz „dort sind viele Migrationsdeutsche Mitglied“ ist der Punkt, an dem sich Anhänger und Gegner am häufigsten verrechnen. ' +
    'Die Datenlage ist eindeutig – sie stützt die eine wie die andere Seite nur teilweise.',
  entries: [
    {
      id: 'keine-migranten',
      tag: 'nicht-belegt',
      claim: '„In der AfD sind überhaupt keine Migranten.“',
      verdict:
        'Falsch. Die AfD hat den niedrigsten Anteil an Abgeordneten mit Migrationshintergrund – aber sie hat welche, und in der Wählerschaft sind Menschen mit Migrationsgeschichte deutlich vertreten.',
      blocks: [
        {
          type: 'p',
          text:
            'Im 21. Bundestag haben nach der Erhebung des Mediendienstes Integration 9 der 152 AfD-Abgeordneten einen Migrationshintergrund – 5,9 Prozent. ' +
            'Das ist der niedrigste Anteil aller Fraktionen (Grüne 20,0, Linke 18,8, SPD 17,5, CDU/CSU 6,3). 2021 lag der AfD-Wert bei 7,2 Prozent.'
        },
        {
          type: 'facts',
          items: [
            '8 Abgeordnete haben einen Bezug zu Staaten der früheren Sowjetunion, darunter Menschen aus Spätaussiedler-Familien.',
            'Menschen mit türkeistämmigem Hintergrund sind häufiger in der Linken vertreten – in der AfD nicht.',
            'Die AfD ist damit die Fraktion mit dem geringsten, nicht mit keinem Anteil.'
          ]
        },
        {
          type: 'note',
          text:
            'Für Gespräche: „Keine Migranten“ ist falsch und leicht zu widerlegen. „Weniger als alle anderen Fraktionen, aber nicht null“ ist korrekt – und trotzdem ein Argument, wenn man es mit den absoluten Zahlen und der Wählerschaft verbindet.'
        }
      ],
      sources: ['mdi']
    },
    {
      id: 'migrantische-waehler',
      tag: 'belegt',
      claim: '„Menschen mit Migrationshintergrund wählen die AfD kaum.“',
      verdict:
        'Falsch pauschal. Bei russlanddeutschen, polnischstämmigen und spätausgesiedelten Wählern ist die AfD überdurchschnittlich stark; bei türkeistämmigen Wählern schwach.',
      blocks: [
        {
          type: 'p',
          text:
            'Bei der Bundestagswahl 2025 wählten laut den von der Tagesspiegel zitierten Daten der Konrad-Adenauer-Stiftung 43 Prozent der Russlanddeutschen die AfD, ' +
            '33 Prozent der Polnischstämmigen, 31 Prozent der Spätaussiedler und 8 Prozent der Türkischstämmigen.'
        },
        {
          type: 'p',
          text:
            'Die Zahlen zeigen zweierlei: Die AfD ist bei bestimmten Migrationsgruppen angekommen – vor allem bei Menschen aus der ehemaligen Sowjetunion und aus Osteuropa. ' +
            'Bei türkeistämmigen Wählern ist sie dagegen klar unterrepräsentiert. Wer „die Migranten“ sagt, meint sehr verschiedene Gruppen.'
        },
        {
          type: 'note',
          text:
            'Einschränkung: Es handelt sich um Umfragedaten mit kleinen Fallzahlen. 30 bis 50 Prozent der migrantischen Deutschen geben in Umfragen keine Parteipräferenz an. ' +
            'Die Zahlen sind ein Hinweis, keine Volkszählung.'
        }
      ],
      sources: ['tagesspiegel']
    },
    {
      id: 'bremen',
      tag: 'belegt',
      claim: '„In der AfD engagieren sich keine Menschen mit Migrationsgeschichte.“',
      verdict:
        'Falsch. Es gibt sie – in Funktionen, in Landesverbänden und als Wähler. Ein belegtes Beispiel ist Bremen.',
      blocks: [
        {
          type: 'p',
          text:
            'Der gelernte Elektriker und IT-System-Kaufmann Mertcan Karakaya ist Schatzmeister im AfD-Landesverband Bremen und lokaler Mitarbeiter der Europaabgeordneten Anja Arndt. ' +
            'Er sagt, der Landesverband sei „international gut vertreten“; unter den Mitgliedern seien türkisch- und kurdischstämmige Menschen, Osteuropäer, Spanier und Mexikaner.'
        },
        {
          type: 'p',
          text:
            'Die reportage zeigt auch die Motivation: Karakaya beschreibt, Deutschland habe sich in den letzten Jahren zum Schlechteren verändert. ' +
            'Das ist eine politische Überzeugung – kein Beleg dafür, dass die Partei Menschen mit Migrationsgeschichte freundlich gegenübersteht, aber ein Beleg dafür, dass sie dort Mitglied sind.'
        }
      ],
      sources: ['srf']
    },
    {
      id: 'staatsangehoerigkeit',
      tag: 'einordnung',
      claim: '„Wer Migrantenmitglieder als Argument nennt, muss das Programm erklären.“',
      verdict:
        'Die offene Flanke: Das Programm will die Staatsangehörigkeit restriktiver vergeben. Wer mit Migrationsdeutschen in der Partei argumentiert, sollte diese Passage kennen.',
      blocks: [
        {
          type: 'p',
          text:
            'Das Wahlprogramm enthält ein Kapitel mit der Überschrift „Staatsangehörigkeit darf nicht verschenkt werden“. ' +
            'Gleichzeitig fordert die Partei eine restriktive Migrationspolitik und die „Remigration“ Ausreisepflichtiger.'
        },
        {
          type: 'p',
          text:
            'Das ist kein Widerspruch, der die Existenz migrantischer Mitglieder aufhebt – aber es ist der Grund, warum das Argument „wir haben Migranten“ allein nicht trägt. ' +
            'Es braucht den zweiten Satz: Wie erklärt die Partei, dass Menschen mit Migrationsgeschichte sie trotzdem unterstützen?'
        }
      ],
      sources: ['programm', 'stz-remigration']
    }
  ]
});
