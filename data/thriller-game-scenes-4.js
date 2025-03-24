// Interaktiver Thriller im Stil von Shutter Island
// Szenen 16-20

const gameData = {
    scene_symbol_meaning: {
        text: "Die Schwester kommt näher. Elena greift hastig nach deiner Hand, drückt sie fest. 'Das Symbol ist der Schlüssel', flüstert sie eindringlich. 'Es ist ein Durchgang - zwischen hier und dort, zwischen dem, was wir zu wissen glauben und der Wahrheit.' Ihre Finger graben sich in deinen Arm. 'Sie öffnen Türen in unseren Köpfen, die geschlossen bleiben sollten.' Die Schwester ist nur noch wenige Meter entfernt. 'Mitternacht. Im Keller unter dem Leuchtturm. Wenn die Flut niedrig ist.' Dann lässt sie dich los, ihr Gesicht wird ausdruckslos. 'Danke für das nette Gespräch', sagt sie laut. Die Schwester lächelt mechanisch. 'Zeit für Ihre Medikamente, Frau Krüger.' Du bemerkst ein kurzes Flackern von Panik in Elenas Augen, bevor sie sich fügt. Die Schwester wirft dir einen prüfenden Blick zu, als kenne sie dich irgendwoher.",
        choices: [
            {
                text: "Nach den 'Türen in unseren Köpfen' recherchieren",
                nextId: "scene_consciousness_research",
                addClue: {
                    id: "mind_control",
                    text: "Schäfers Forschung zielte darauf ab, das menschliche Bewusstsein zu erweitern und gleichzeitig manipulierbar zu machen."
                }
            },
            {
                text: "Den Keller unter dem Leuchtturm bei Ebbe aufsuchen",
                nextId: "scene_lighthouse_cellar",
                requireClue: "lighthouse_clue",
                addClue: {
                    id: "ritual_chamber",
                    text: "Der Keller unter dem Leuchtturm wurde zu einer Art Ritualkammer umfunktioniert, mit seltsamen Symbolen an den Wänden."
                }
            },
            {
                text: "Die Schwester konfrontieren, warum sie dich seltsam anschaut",
                nextId: "scene_nurse_confrontation",
                addClue: {
                    id: "recognition",
                    text: "Die Schwester Maria Becker scheint dich zu erkennen, verweigert aber jede direkte Antwort."
                }
            }
        ]
    },

    scene_experimental_therapy: {
        text: "'Experimentelle Therapie?' wiederholst du, während du Hoffmann genau beobachtest. Er steht auf, schließt die Tür seines Büros. 'Was ich Ihnen jetzt sage, ist streng vertraulich.' Seine Stimme wird leiser. 'Wir haben traditionelle Therapiemethoden an ihre Grenzen gebracht. Medikamente, Gesprächstherapie - bei manchen Patienten reicht das nicht.' Er holt tief Luft. 'Projekt Rabe kombiniert neuartige psychoaktive Substanzen mit gezielter neuraler Stimulation. Wir können damit direkt... nun, sagen wir, direkt an den Fundamenten der Persönlichkeit arbeiten.' Seine Augen leuchten ungesund. 'Wir haben Patienten, die jahrelang in Wahnwelten lebten, zurück in die Realität geholt. Andere konnten traumatische Erinnerungen vollständig neu kontextualisieren.' Er zögert. 'Schäfer war ein Spezialfall. Er half uns anfangs sogar bei der Weiterentwicklung der Substanzen. Bis zu seinem... Rückfall.'",
        choices: [
            {
                text: "Nach den Nebenwirkungen der Behandlung fragen",
                nextId: "scene_side_effects",
                addClue: {
                    id: "identity_loss",
                    text: "Einige Patienten verlieren nach der Behandlung jegliches Gefühl für ihre eigene Identität oder entwickeln vollkommen neue Persönlichkeiten."
                }
            },
            {
                text: "Fragen, warum Schäfer 'zurückfiel'",
                nextId: "scene_schaefer_relapse",
                addClue: {
                    id: "rebellion",
                    text: "Schäfers 'Rückfall' war möglicherweise eine bewusste Rebellion gegen das Projekt, nachdem er dessen wahren Zweck erkannte."
                }
            },
            {
                text: "Wissen wollen, wie viele Patienten bereits behandelt wurden",
                nextId: "scene_patient_numbers",
                addClue: {
                    id: "expanding_tests",
                    text: "Die Tests wurden von einzelnen Patienten auf ganze Stationen ausgeweitet - inzwischen auch auf Personal, das nichts davon weiß."
                }
            }
        ]
    },

    scene_underground: {
        text: "Das rhythmische Klopfen lockt dich nach unten. Im Erdgeschoss des Leuchtturms findest du nichts Auffälliges, doch das Geräusch scheint aus dem Boden zu kommen. Du entdeckst eine verborgene Falltür unter einem alten Teppich. Sie ist nicht verschlossen. Eine feuchte, modrige Steintreppe führt in die Dunkelheit. Mit der Taschenlampe deines Handys leuchtest du den Weg. Der Tunnel ist älter als der Leuchtturm, aus grob behauenen Steinen. Das Klopfen wird lauter. Nach etwa fünfzig Metern öffnet sich der Gang in einen runden Raum. Dein Atem stockt. An den Wänden sind hunderte von Symbolen eingeritzt - das gleiche Symbol wie auf dem Zettel. In der Mitte des Raumes steht ein steinerner Altar. Das Klopfen verstummt plötzlich. Stattdessen hörst du nun ein leises Flüstern, das aus den Wänden selbst zu kommen scheint. Du findest ein Notizbuch auf dem Altar, daneben eine seltsame Apparatur - medizinische Technik vermischt mit altertümlichen Elementen.",
        choices: [
            {
                text: "Das Notizbuch untersuchen",
                nextId: "scene_altar_notebook",
                addClue: {
                    id: "ritual_details",
                    text: "Das Notizbuch dokumentiert 'Übergänge' - scheinbar bewusstseinsverändernde Rituale, die mit Schäfers Medikamenten durchgeführt wurden."
                }
            },
            {
                text: "Die Apparatur genauer betrachten",
                nextId: "scene_strange_device",
                addClue: {
                    id: "consciousness_machine",
                    text: "Die Apparatur scheint dafür konzipiert zu sein, bewusstseinsverändernde Substanzen mit elektrischen Impulsen zu synchronisieren."
                }
            },
            {
                text: "Dem Flüstern der Wände lauschen",
                nextId: "scene_whispers",
                addClue: {
                    id: "other_side",
                    text: "Das Flüstern besteht aus Stimmen, die teilweise von 'der anderen Seite' zu kommen scheinen - möglicherweise Halluzinationen oder etwas Unheimlicheres."
                }
            }
        ]
    },

    scene_tech_confrontation: {
        text: "'Das ist kein Systemfehler', sagst du bestimmt und deutest auf den eingefrorenen Bildschirm. 'Ich habe deutlich eine dritte Person gesehen.' Lena Vogt und Dr. Hoffmann tauschen beunruhigte Blicke aus. 'Robert, seien Sie vernünftig', beginnt Hoffmann. Die Verwendung deines Vornamens irritiert dich - hat er ihn überhaupt schon einmal benutzt? 'Wir haben nichts zu verbergen.' Vogt tippt unterdessen hektisch auf ihrer Tastatur. 'Es tut mir leid, aber diese Dateien sind beschädigt. Wir können sie nicht wiederherstellen.' Ihre Finger bewegen sich jedoch in einer Weise, die mehr nach Löschen als nach Reparieren aussieht. Als du einen Schritt näher trittst, stellt sich Hoffmann dir in den Weg. 'Vielleicht sollten Sie sich ausruhen. Der Sturm, die Anspannung... Sie sehen erschöpft aus.' Seine Hand greift nach etwas in seiner Tasche. Du bemerkst eine kleine Kamera in der Ecke des Raumes, die sich direkt auf dich richtet.",
        choices: [
            {
                text: "Vorgeben nachzugeben, aber später heimlich zurückkehren",
                nextId: "scene_late_night_investigation",
                addClue: {
                    id: "evidence_tampering",
                    text: "Nachts werden systematisch Überwachungsaufnahmen gelöscht und manipuliert, um bestimmte Aktivitäten zu verbergen."
                }
            },
            {
                text: "Auf der Stelle Antworten verlangen und Hoffmann konfrontieren",
                nextId: "scene_direct_confrontation",
                addClue: {
                    id: "defensive_reaction",
                    text: "Wenn direkt konfrontiert, werden Hoffmann und sein Personal sofort defensiv und versuchen, dich zu sedieren."
                }
            },
            {
                text: "Die Kamera in der Ecke fixieren und fragen, wer alles überwacht wird",
                nextId: "scene_surveillance_question",
                addClue: {
                    id: "watched_detective",
                    text: "Du wirst seit deiner Ankunft auf der Insel besonders intensiv überwacht, als wäre deine Präsenz selbst Teil eines Experiments."
                }
            }
        ]
    },

    scene_headache: {
        text: "Du reibst dir die Schläfen. 'Entschuldigung, ich habe plötzlich starke Kopfschmerzen.' Dr. Hoffmann betrachtet dich mit einer seltsamen Mischung aus Besorgnis und... Interesse? 'Das ist nicht ungewöhnlich. Der Sturm, der Luftdruck.' Er greift nach einer Schublade seines Schreibtisches. 'Ich kann Ihnen etwas geben, das hilft.' - 'Nein danke', lehnst du ab, 'es geht schon.' Der Schmerz pulsiert hinter deinen Augen, begleitet von Bildern, die keinen Sinn ergeben: ein Krankenzimmer, eine Frau, die schreit, deine Hände mit Blut bedeckt. Hoffmann beobachtet dich aufmerksam. 'Haben Sie Erinnerungslücken, Robert? Momente der Verwirrung?' Seine Stimme klingt nun sanfter, therapeutischer. 'Viele Menschen, die traumatische Erlebnisse hatten, erschaffen sich Schutzschilde in ihrem Bewusstsein.' Du willst antworten, doch der Schmerz verstärkt sich. 'Was wissen Sie über mich?', fragst du mit plötzlichem Misstrauen.",
        choices: [
            {
                text: "Nach Wasser fragen und die angebotene Medizin akzeptieren",
                nextId: "scene_medication",
                addClue: {
                    id: "strange_pills",
                    text: "Die Medikamente, die dir Hoffmann gibt, verursachen seltsame Träume, in denen du dich selbst als Patient auf Raven Island siehst."
                }
            },
            {
                text: "Auf deine eigene Vergangenheit bestehen und mehr Informationen verlangen",
                nextId: "scene_identity_crisis",
                addClue: {
                    id: "forgotten_past",
                    text: "In deinen Unterlagen und persönlichen Gegenständen gibt es widersprüchliche Hinweise auf deine wahre Identität."
                }
            },
            {
                text: "Die beunruhigenden Bilder in deinem Kopf genauer analysieren",
                nextId: "scene_vision_analysis",
                addClue: {
                    id: "suppressed_memories",
                    text: "Die aufblitzenden Erinnerungen könnten auf ein traumatisches Ereignis hindeuten, das mit dem Tod einer Frau zusammenhängt."
                }
            }
        ]
    }
};
