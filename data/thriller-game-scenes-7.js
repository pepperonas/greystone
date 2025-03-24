// Interaktiver Thriller im Stil von Shutter Island
// Szenen 31-35

const gameData = {
    scene_truth_revealed: {
        text: "Mit zitternden Händen sichtest du die Beweise in deinem – in Robert Webers – Patientenzimmer. Ein Tagebuch dokumentiert deinen Zusammenbruch nach dem Tod deiner Frau. Mit jedem Wort, das du liest, kehren Erinnerungsfragmente zurück. Der Streit in jener Nacht. Du hattest getrunken. Christine wollte gehen, dich verlassen. Deine Dienstwaffe lag auf dem Tisch. Was als Einschüchterung gedacht war, endete in einer Tragödie. Die Waffe ging los. Ihr Blut an deinen Händen. Dein Verstand zerbrach unter der Last der Schuld. Du blätterst weiter – Aufzeichnungen deiner Behandlung, zunächst konventionell, dann der Transfer in das experimentelle Programm auf Raven Island. 'Patient hat alternative Realität erschaffen, in der er als Detektiv Verbrechen aufklärt – klassischer Kompensationsmechanismus.' Mit jedem gelesenen Wort wird die Illusion brüchiger. Dein angeblicher 'Fall' – das Verschwinden von Eric Schäfer – war nur ein therapeutisches Konstrukt, eine kontrollierte Umgebung, in der du dich deiner Schuld stellen solltest. Als die letzte Seite umgeblättert ist, sitzt du in Stille. Die Wahrheit ist unwiderlegbar. Du bist nicht hier, um einen Fall zu lösen. Du bist der Fall.",
        choices: [
            {
                text: "Die Wahrheit akzeptieren und dich freiwillig der Behandlung stellen",
                nextId: "scene_acceptance",
                addClue: {
                    id: "path_to_healing",
                    text: "Der Weg zur Heilung beginnt mit der Akzeptanz der eigenen Schuld und Identität – ein schwerer, aber notwendiger Schritt."
                }
            },
            {
                text: "Trotz der Beweise an deiner Identität als Detektiv festhalten",
                nextId: "scene_stubborn_denial",
                addClue: {
                    id: "delusion_persistence",
                    text: "Dein Verstand klammert sich an die Detektiv-Identität, möglicherweise als letzten Schutz vor der unerträglichen Wahrheit."
                }
            },
            {
                text: "Einen dritten Weg suchen – war Schäfer wirklich nur ein Konstrukt?",
                nextId: "scene_third_option",
                requireClue: "researcher_past",
                addClue: {
                    id: "dual_truth",
                    text: "Zwei Wahrheiten können koexistieren: Du bist Patient mit traumatischer Vergangenheit UND Zeuge einer realen Verschwörung auf der Insel."
                }
            }
        ]
    },

    scene_crossing_research: {
        text: "In einer versteckten Ecke des Kellerraums entdeckst du einen versiegelten Metallschrank. Das Schloss zu knacken dauert, aber schließlich öffnet er sich und gibt den Blick auf ordentlich gestapelte Forschungsunterlagen frei. 'Projekt Durchquerung – Streng Geheim' steht auf dem obersten Ordner. Die Dokumente enthüllen eine erschreckende Wahrheit: Was als medizinisches Experiment begann, hat sich in etwas völlig anderes verwandelt. Die ersten Seiten dokumentieren Schäfers ursprüngliche Forschung zu Bewusstseinsmanipulation. Dann ein unerwarteter Durchbruch: Während eines Tests mit Substanz R-7 berichtete ein Patient von 'Stimmen aus einer anderen Dimension'. Weitere Tests bestätigten das Phänomen. Eine Notiz von Dr. Hoffmann: 'Wir haben versehentlich eine Tür geöffnet.' Die folgenden Protokolle dokumentieren zunehmend strukturierte 'Kommunikation' mit Wesenheiten, die sich selbst als 'Die Wartenden' bezeichnen. Ihre Botschaft: Sie existieren in einer Parallelrealität und suchen 'Gefäße' für die 'Durchquerung'. Der letzte Eintrag, unterzeichnet von General Weiss: 'Phase 3 genehmigt. Vollständige Integration von sieben Primär-Entitäten in vorbereitete Wirte. Massendurchquerung in Vorbereitung.'",
        choices: [
            {
                text: "Die Unterlagen sichern und die Insel verlassen, um Hilfe zu holen",
                nextId: "scene_escape_attempt",
                addClue: {
                    id: "invasion_evidence",
                    text: "Die Dokumente beweisen einen Plan zur systematischen 'Übernahme' menschlicher Wirte durch außerdimensionale Wesenheiten."
                }
            },
            {
                text: "Versuchen, die 'Primär-Entitäten' und ihre 'Wirte' zu identifizieren",
                nextId: "scene_hosts_identification",
                addClue: {
                    id: "possessed_leaders",
                    text: "Die sieben 'Primär-Wirte' umfassen Hoffmann, Schneider und fünf weitere Schlüsselfiguren, die bereits vollständig 'übernommen' wurden."
                }
            },
            {
                text: "Nach einer Möglichkeit suchen, die 'Tür' wieder zu schließen",
                nextId: "scene_door_closing",
                addClue: {
                    id: "reversal_protocol",
                    text: "Schäfer hat heimlich an einem 'Umkehrprotokoll' gearbeitet, um die Verbindung zu kappen und die bereits durchgedrungenen Entitäten zu vertreiben."
                }
            }
        ]
    },

    scene_wife_memory: {
        text: "Du starrst auf das Foto, das Hoffmann dir gezeigt hat. Christine. Der Name allein löst eine Flut von Erinnerungen aus. Ihr erstes Treffen in der Polizeikantine. Der Heiratsantrag am Strand. Die kleinen Streitigkeiten und tiefen Versöhnungen. Und dann – jene Nacht. Ihr Gesicht, verzerrt vor Angst, als du die Waffe hobst. 'Es war nur ein Unfall', hattest du immer wieder gemurmelt, während die Sirenen näher kamen. Aber war es das wirklich? Du erinnerst dich an euren Streit. An ihre Drohung, dich zu verlassen. An deine Wut, deinen Kontrollverlust. 'Ich erinnere mich', flüsterst du. Hoffmanns Gesicht zeigt echtes Mitgefühl. 'Das ist gut, Robert. Sehr gut.' Er reicht dir ein Taschentuch – erst jetzt bemerkst du deine Tränen. 'Der Unfall hat dich zerbrochen. Dein Verstand erschuf diese Detektiv-Identität als Schutz. Eine Möglichkeit, Kontrolle und Gerechtigkeit in einer Welt zu finden, die plötzlich keinen Sinn mehr ergab.' Er lehnt sich vor. 'Aber um zu heilen, musst du die Wahrheit akzeptieren. Du bist nicht hier, um einen Vermissten zu finden. Du bist hier, um dich selbst zu finden.'",
        choices: [
            {
                text: "Die Wahrheit akzeptieren und um Hilfe bei deiner Genesung bitten",
                nextId: "scene_healing_begins",
                addClue: {
                    id: "redemption_path",
                    text: "Die Akzeptanz deiner wahren Geschichte öffnet den Weg zur Heilung und möglicherweise zur Vergebung."
                }
            },
            {
                text: "Nach weiteren Beweisen für deine Identität als Patient suchen",
                nextId: "scene_evidence_hunt",
                addClue: {
                    id: "medical_records",
                    text: "Deine vollständige Krankenakte enthält Details über deinen Zusammenbruch und die fortschreitende Behandlung auf Raven Island."
                }
            },
            {
                text: "Fragen, wie Schäfers Geschichte in deine Behandlung passt",
                nextId: "scene_schaefer_connection",
                requireClue: "secret_project",
                addClue: {
                    id: "dual_purpose",
                    text: "Deine 'Detektiv'-Therapie hatte einen Doppelzweck: deine Heilung und gleichzeitig die Suche nach dem tatsächlich verschwundenen Schäfer."
                }
            }
        ]
    },

    scene_researcher_past: {
        text: "Die Erwähnung deiner möglichen Vergangenheit als Forscher löst eine Kaskade fragmentierter Erinnerungen aus. Bilder von Laboren, Computern, endlosen Datenreihen. Du erinnerst dich an Gespräche mit... Schäfer? Ja, ihr wart Kollegen. Freunde sogar. Du siehst dich selbst in einem weißen Kittel, diskutierend über 'Bewusstseinsbarrieren' und 'neuronale Restrukturierung'. Mit jedem Atemzug werden die Erinnerungen klarer. Du warst Dr. Robert Weber, Neuropharmakologie, spezialisiert auf bewusstseinsverändernde Substanzen. Du und Schäfer hattet an dem ursprünglichen Projekt gearbeitet – bis ihr entdecktet, was Hoffmann und General Weiss wirklich damit vorhatten. Du hattest Beweise gesammelt, wolltest an die Öffentlichkeit gehen. Dann Dunkelheit. Eine Injektion in der Nacht. Als du aufwachtest, warst du ein Patient mit einer implantierten Wahnvorstellung vom Tod deiner Frau. Aber Christine lebt. Sie sucht dich wahrscheinlich. Schäfer muss das gewusst haben. Er hat dir Hinweise hinterlassen, um dein wahres Ich wiederzufinden. Eine schwindelerregende Erkenntnis trifft dich: Du bist sowohl Detektiv als auch Patient – aber aus völlig anderen Gründen als gedacht.",
        choices: [
            {
                text: "Versuchen, deine Forschungsnotizen zu finden",
                nextId: "scene_find_research",
                addClue: {
                    id: "hidden_data",
                    text: "Deine ursprünglichen Forschungsdaten könnten auf einem versteckten Server oder in einem geheimen Versteck auf der Insel existieren."
                }
            },
            {
                text: "Nach einem Weg suchen, Kontakt mit Christine aufzunehmen",
                nextId: "scene_contact_attempt",
                addClue: {
                    id: "outside_ally",
                    text: "Christine arbeitet mit einer Journalistin zusammen, um die Vorgänge auf Raven Island aufzudecken und dich zu finden."
                }
            },
            {
                text: "Die doppelte Manipulation gegen Hoffmann verwenden",
                nextId: "scene_double_agent",
                addClue: {
                    id: "strategic_deception",
                    text: "Du kannst vorgeben, deine 'Patientenrolle' zu akzeptieren, um Hoffmanns Vertrauen zu gewinnen und mehr über die 'Durchquerung' zu erfahren."
                }
            }
        ]
    },

    scene_escape_with_evidence: {
        text: "Mit klopfendem Herzen kopierst du das Video auf einen USB-Stick, den du in einer Schublade gefunden hast. Du musst von der Insel entkommen, diese Beweise zur Außenwelt bringen. Beim Verlassen des Kellerraums hörst du Stimmen – jemand kommt. Du schleichst durch einen Seitenausgang, der zum Ufer führt. Der Sturm hat nachgelassen, das Meer ist ruhiger geworden. Im schwachen Mondlicht entdeckst du einen kleinen Bootsschuppen. Drinnen: ein Motorboot. Schäfers Fluchtfahrzeug? Als du das Boot startklar machst, bemerkst du eine wasserfeste Tasche unter der Sitzbank. Darin ein Handy, Bargeld, gefälschte Ausweisdokumente auf den Namen 'Thomas Müller' und eine Notiz: 'Wenn du das findest, Robert, dann hast du angefangen, die Wahrheit zu sehen. Vertraue niemandem. Bring die Beweise zu Christine – sie weiß Bescheid. Koordinaten unten.' Plötzlich durchschneiden Scheinwerfer die Dunkelheit. Stimmen rufen, Hunde bellen. Sie haben deine Flucht bemerkt. Das Boot ist startbereit, aber die Verfolger nähern sich schnell.",
        choices: [
            {
                text: "Sofort fliehen, bevor sie dich erreichen",
                nextId: "scene_sea_escape",
                addClue: {
                    id: "mainland_journey",
                    text: "Die Flucht zum Festland ist riskant, aber deine einzige Chance, die Beweise in Sicherheit zu bringen und die Wahrheit aufzudecken."
                }
            },
            {
                text: "Den USB-Stick verstecken und dich stellen, um später einen besseren Fluchtversuch zu unternehmen",
                nextId: "scene_strategic_surrender",
                addClue: {
                    id: "playing_patient",
                    text: "Indem du dich als verwirrter Patient ausgibst, könntest du Zeit gewinnen und gleichzeitig mehr Informationen sammeln."
                }
            },
            {
                text: "Die Konfrontation suchen – du hast genug Beweise, um Hoffmann zu erpressen",
                nextId: "scene_confrontation",
                addClue: {
                    id: "leverage_position",
                    text: "Mit den Beweisen in deiner Hand könntest du Hoffmann zwingen, dir die ganze Wahrheit zu erzählen und einen Deal auszuhandeln."
                }
            }
        ]
    }
};
