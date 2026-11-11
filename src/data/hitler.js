/* Abschnitt: Hitler-Vergleich */
window.DOSSIER_SECTIONS.push({
  id: 'hitler',
  title: 'Hitler-Vergleich',
  kicker: 'Was trägt – was nicht',
  intro:
    'Der wichtigste Abschnitt für Gespräche mit überzeugten Anhängern und mit überzeugten Gegnern. ' +
    'Denn der Vergleich ist keine Analyse, sondern ein Gesprächsabbruch – in beide Richtungen.',
  entries: [
    {
      id: 'vergleich',
      tag: 'einordnung',
      claim: '„Die AfD ist der neue Hitler.“',
      verdict:
        'Als historische Gleichsetzung nicht belegbar. Als Warnung vor rechtsextremen Tendenzen hat sie eine belegbare Grundlage – aber sie ersetzt keine Argumentation.',
      blocks: [
        {
          type: 'p',
          text:
            'Was den Vergleich erklärbar macht: Das Bundesamt für Verfassungsschutz sieht in der AfD Bestrebungen gegen die freiheitliche demokratische Grundordnung und begründet das mit einem „ethnisch-abstammungsmäßigen Volksverständnis“. ' +
            'Der thüringische AfD-Fraktionsvorsitzende Björn Höcke ist wegen der Verwendung einer SA-Parole rechtskräftig verurteilt. Bei dem Potsdamer Treffen 2023 wurde ein Konzept vorgestellt, das die „Remigration“ auch deutscher Staatsbürger mit Migrationsgeschichte vorsah.'
        },
        {
          type: 'p',
          text:
            'Was den Vergleich nicht trägt: Die AfD ist keine Führerpartei. Es gibt keinen Parteiführer mit unbeschränkter Befehlsgewalt, keine Partearmee, keinen paramilitärischen Arm, kein Programm, das die Abschaffung der Demokratie als Staatsform fordert. ' +
            'Sie tritt zu Wahlen an, ihre Abgeordneten arbeiten in Parlamenten, sie klagt vor Gerichten – und sie verliert diese Verfahren auch.'
        },
        {
          type: 'p',
          text:
            'Der Vergleich verwechselt außerdem Ebenen: Die NSDAP war eine Massenbewegung, die den Staat übernahm und einen Weltkrieg begann. Die AfD ist eine Oppositionspartei in einem gefestigten Rechtsstaat mit Verfassungsgericht, freien Medien und einer Zivilgesellschaft, die sie bekämpft. ' +
            'Das macht ihre Positionen nicht harmlos – aber es macht den Vergleich analytisch wertlos.'
        },
        {
          type: 'note',
          text:
            'Der Satz, der in beide Richtungen funktioniert: „Ich vergleiche die AfD nicht mit Hitler. Ich schaue mir an, was der Verfassungsschutz schreibt, was Höcke gesagt hat und was im Programm steht.“ Danach kann man streiten – vorher nicht.'
        }
      ],
      sources: ['bfv', 'vblog', 'bgh', 'ts-potsdam', 'programm']
    },
    {
      id: 'hoecke-dresden',
      tag: 'belegt',
      claim: '„Höcke hat das Holocaust-Mahnmal eine Schande genannt.“',
      verdict:
        'Belegt. Der Satz ist dokumentiert – Höcke bestreitet allerdings, das Mahnmal selbst gemeint zu haben. Die Staatsanwaltschaft sah keinen Straftatbestand.',
      blocks: [
        {
          type: 'quote',
          text:
            'Wir Deutschen, also unser Volk, sind das einzige Volk der Welt, das sich ein Denkmal der Schande in das Herz seiner Hauptstadt gepflanzt hat.',
          source: 'zeit-hoecke'
        },
        {
          type: 'p',
          text:
            'Höcke sagte den Satz am 17. Januar 2017 in Dresden auf Einladung der Jungen Alternative. Er sprach von „dämlicher Bewältigungspolitik“, von Deutschland im „Gemütszustand eines total besiegten Volkes“ und forderte eine „Wende um 180 Grad“ in der Erinnerungskultur.'
        },
        {
          type: 'p',
          text:
            'Der Zentralrat der Juden reagierte mit den Worten, die Äußerungen seien „zutiefst empörend und völlig inakzeptabel“. Höcke erklärte einen Tag später, er habe nicht das Denkmal als Schande bezeichnen wollen; ' +
            'man habe ihn „böswillig, bewusst verleumdend interpretiert“. Die Staatsanwaltschaft Dresden stellte die Ermittlungen wegen Volksverhetzung am 1. März 2017 ein.'
        }
      ],
      sources: ['zeit-hoecke', 'taz-hoecke', 'spiegel-hoecke', 'dw-hoecke', 'bz-hoecke']
    },
    {
      id: 'hoecke-urteil',
      tag: 'belegt',
      claim: '„Höcke ist ein verurteilter Straftäter.“',
      verdict:
        'Belegt. Der Bundesgerichtshof bestätigte 2025 zwei Geldstrafen wegen der Verwendung der SA-Parole „Alles für Deutschland“.',
      blocks: [
        {
          type: 'p',
          text:
            'Das Landgericht Halle verurteilte Höcke am 14. Mai 2024 zu 100 Tagessätzen zu je 130 Euro (13.000 Euro) und am 1. Juli 2024 zu 130 Tagessätzen zu je 130 Euro (16.900 Euro). ' +
            'Es ging um Reden in Merseburg am 29. Mai 2021 und in Gera am 12. Dezember 2023, in denen er die Parole der SA verwendete.'
        },
        {
          type: 'p',
          text:
            'Der Bundesgerichtshof verwarf die Revisionen mit Beschlüssen vom 20. August 2025; die Urteile sind damit rechtskräftig. ' +
            'Der BGH betonte, die Äußerungen seien nicht in Ausübung des Abgeordnetenmandats gefallen – die Strafbarkeit sei deshalb nicht durch die Immunität ausgeschlossen.'
        },
        {
          type: 'note',
          text:
            'Das ist der belastbarste Einzelfakt in der ganzen Debatte: kein Zitat, keine Interpretation, sondern ein rechtskräftiges Urteil. Wer die AfD verteidigt, muss dazu eine Antwort haben.'
        }
      ],
      sources: ['bgh', 'tagesschau-hoecke']
    },
    {
      id: 'fluegel',
      tag: 'belegt',
      claim: '„Der rechtsextreme Flügel war eine Randgruppe ohne Einfluss.“',
      verdict:
        'Falsch. Der „Flügel“ war die interne Sammlungsbewegung um Höcke; der Verfassungsschutz stufte ihn als gesichert rechtsextremistisch ein, 2020 wurde er aufgelöst.',
      blocks: [
        {
          type: 'p',
          text:
            'Das Bundesamt für Verfassungsschutz hatte den „Flügel“ vor seiner Auflösung als gesichert rechtsextremistische Bestrebung eingestuft und beobachtet. ' +
            'Das Bundesverwaltungsgericht bestätigte diese Bewertung 2025: Die Revisionen gegen die Urteile des OVG Münster, die die Beobachtung des Flügels und der Jungen Alternative bestätigten, wurden nicht zugelassen.'
        },
        {
          type: 'p',
          text:
            'Der Flügel wurde im März 2020 formal aufgelöst – nach massivem Druck, auch weil die Beobachtung der Gesamtpartei drohte. ' +
            'Ob die Auflösung mehr als ein Namenswechsel war, ist eine der offenen Fragen, an denen sich die Bewertung der Partei entscheidet.'
        }
      ],
      sources: ['bverwg', 'bfv']
    }
  ]
});
