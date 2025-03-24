// Interaktiver Thriller im Stil von Shutter Island
// Szenen 11-15

const gameData = {
    scene_female_patient: {
        text: "Du findest einen Vorwand, dich von Dr. Hoffmann zu trennen, und machst dich auf die Suche nach der Patientin. In einem Gemeinschaftsraum entdeckst du sie, allein an einem Fenster sitzend, den Blick auf den stürmischen Ozean gerichtet. 'Elena Krüger', steht auf ihrem Patientenarmband. Sie dreht sich zu dir, als spürte sie deine Anwesenheit. 'Sie suchen nach ihm.' Keine Frage, eine Feststellung. 'Er hat gesagt, dass jemand kommen würde.' Du zeigst ihr vorsichtig den Zettel. Sie lächelt traurig. 'Der Rabe fliegt zur Mitternacht.' Ihr Blick ist klar, nicht wie der einer Verwirrten. 'Eric war nicht verrückt. Keiner von uns ist es. Nicht so, wie sie behaupten.' Sie senkt die Stimme. 'Sie experimentieren an uns. Machen uns zu etwas... Anderem.' Plötzlich verstummt sie, ihr Blick wandert über deine Schulter. Eine Schwester nähert sich.",
        choices: [
            {
                text: "Elena schnell nach dem Symbol auf dem Zettel fragen",
                nextId: "scene_symbol_meaning",
                addClue: {
                    id: "doorway_symbol",
                    text: "Das Symbol stellt einen 'Durchgang' zwischen Realitäten dar, ein zentrales Element in den Ritualen unter dem Leuchtturm."
                }
            },
            {
                text: "Wissen wollen, was sie mit 'zu etwas Anderem machen' meint",
                nextId: "scene_transformation",
                addClue: {
                    id: "experiments",
                    text: "Die 'Behandlungen' in der Klinik scheinen das Bewusstsein der Patienten auf unnatürliche Weise zu verändern."
                }
            },
            {
                text: "So tun, als hättest du nur nach dem Weg gefragt, um keinen Verdacht zu erregen",
                nextId: "scene_retreat",
                addClue: {
                    id: "being_watched",
                    text: "Das Personal überwacht bestimmte Patienten besonders intensiv, besonders die, die mit Schäfer Kontakt hatten."
                }
            }
        ]
    },

    scene_project_raven: {
        text: "Hoffmanns Gesicht versteint, als du das 'Projekt Rabe' erwähnst. 'Woher wissen Sie davon?' Seine Stimme ist leise, bedrohlich. Du entscheidest dich für eine halbwahre Antwort: 'Schäfer hat es in seinen Notizen erwähnt.' Er entspannt sich leicht. 'Projekt Rabe ist lediglich der interne Name für ein experimentelles Therapieprogramm. Neuartige Methoden zur Behandlung schwerer Wahnvorstellungen.' Er seufzt. 'Schäfer war einer der Testpatienten. Mit vielversprechenden Ergebnissen, bis...' Er verstummt. Auf seinem Schreibtisch steht ein Foto – Hoffmann mit einem älteren Mann in Militäruniform. Als er deinen Blick bemerkt, dreht er es um. 'General Weiss. Ein alter Freund. Er hat die Finanzierung für unser Programm sichergestellt.' Er lächelt dünn. 'Die Behörden interessieren sich nicht für psychisch Kranke. Das Militär schon.'",
        choices: [
            {
                text: "Nach der Art der 'experimentellen Therapie' fragen",
                nextId: "scene_experimental_therapy",
                addClue: {
                    id: "drug_trials",
                    text: "Die experimentelle Therapie beinhaltet neuartige psychoaktive Substanzen, die direkt auf das Unterbewusstsein wirken sollen."
                }
            },
            {
                text: "Das Interesse des Militärs an psychiatrischen Patienten hinterfragen",
                nextId: "scene_military_interest",
                addClue: {
                    id: "weapon_potential",
                    text: "General Weiss sieht in den Experimenten potenzielle militärische Anwendungen im Bereich psychologischer Kriegsführung."
                }
            },
            {
                text: "Vorgeben, selbst mehr über das Projekt zu wissen, um Hoffmann aus der Reserve zu locken",
                nextId: "scene_bluff",
                requireClue: "secret_project",
                addClue: {
                    id: "phase_three",
                    text: "Phase 3 des Projekts beinhaltet Tests an unwissenden Subjekten - möglicherweise auch an Personal der Einrichtung."
                }
            }
        ]
    },

    scene_lighthouse_exploration: {
        text: "Der Regen hat nachgelassen, als du dich allein auf den Weg zum Leuchtturm machst. Der schmale Pfad führt durch dichtes Unterholz, die Luft riecht nach Salz und Verfall. Der Leuchtturm selbst ist ein gespenstischer Anblick - verwittert, mit abblätternder weißer Farbe. Die Tür ist verschlossen, aber der Schlüssel, den du heimlich aus Hoffmanns Büro genommen hast, passt. Innen ist es kalt und feucht. Eine Wendeltreppe führt nach oben. Als du sie erklimmst, hörst du etwas - ein rhythmisches Klopfen von unten. Im Kontrollraum oben findest du Schäfers Spuren: ein improvisiertes Lager, Bücher, Notizen an den Wänden. Ein Fernglas liegt auf der Fensterbank, direkt auf die Klinik gerichtet. Eine der Notizen fällt dir besonders auf: 'Sie sind nicht, wer sie zu sein glauben. Ich bin nicht, wer ich zu sein glaube.'",
        choices: [
            {
                text: "Die Quelle des Klopfgeräusches untersuchen",
                nextId: "scene_underground",
                addClue: {
                    id: "hidden_passage",
                    text: "Unter dem Leuchtturm befindet sich ein verborgener Durchgang zu einem älteren Teil der Insel-Infrastruktur."
                }
            },
            {
                text: "Schäfers Notizen gründlich studieren",
                nextId: "scene_schaefer_notes",
                addClue: {
                    id: "reality_doubts",
                    text: "Schäfer zweifelte zunehmend an seiner eigenen Identität und der Natur der Realität um ihn herum."
                }
            },
            {
                text: "Mit dem Fernglas die Klinik beobachten",
                nextId: "scene_observation",
                addClue: {
                    id: "night_activities",
                    text: "Nachts werden bestimmte Patienten heimlich in einen abgelegenen Teil der Klinik gebracht."
                }
            }
        ]
    },

    scene_more_footage: {
        text: "Lena Vogt zögert, tauscht einen weiteren Blick mit Dr. Hoffmann, der kaum merklich nickt. 'In Ordnung.' Sie tippt eine Reihe von Befehlen ein. 'Hier ist die Außenkamera des Nordflügels, etwa zur selben Zeit.' Das Bild zeigt einen leeren Hof im Regen. 22:49 Uhr: Eine Gestalt huscht durch das Bild - zu schnell für eine klare Identifikation, aber die Größe passt zu Schäfer. Sie ist nicht allein. Eine zweite Person folgt ihr, in einem weißen Kittel. 'Das könnte Dr. Schneider sein', bemerkt Hoffmann stirnrunzelnd. 'Was macht er zu dieser Zeit dort?' - 'Vielleicht hat er Schäfer gefunden und verfolgt?', schlägt Vogt vor. Du bemerkst ein Detail am Rand des Bildes - eine weitere Gestalt, teilweise verdeckt, die etwas Glänzendes in der Hand hält. Als du darauf hinweisen willst, friert der Bildschirm plötzlich ein. 'Systemfehler', erklärt Vogt knapp.",
        choices: [
            {
                text: "Auf der Wiederherstellung des Bildes bestehen",
                nextId: "scene_tech_confrontation",
                addClue: {
                    id: "deliberate_erasure",
                    text: "Die Sicherheitschefin scheint bewusst Beweise zu manipulieren oder zu verbergen."
                }
            },
            {
                text: "Nach Dr. Schneider fragen und ihn sprechen wollen",
                nextId: "scene_find_schneider",
                addClue: {
                    id: "schneider_involvement",
                    text: "Dr. Schneider scheint in Schäfers Verschwinden verwickelt zu sein, möglicherweise nicht als Verfolger, sondern als Helfer."
                }
            },
            {
                text: "Später heimlich in den Überwachungsraum zurückkehren",
                nextId: "scene_midnight_surveillance",
                addClue: {
                    id: "deleted_files",
                    text: "In einem versteckten Ordner auf dem System finden sich gelöschte Aufnahmen, die nächtliche Aktivitäten im abgesperrten Ostflügel zeigen."
                }
            }
        ]
    },

    scene_pharma_background: {
        text: "'Ein Chemiker, sagen Sie?' Du siehst Hoffmann durchdringend an. Nach kurzem Zögern gibt er nach. 'Schäfer arbeitete für NeuroSynth, ein Pharmaunternehmen, das sich auf Psychopharmaka spezialisiert hat. Er leitete ein Forschungsteam, das an...' Er räuspert sich. 'An bewusstseinserweiternden Substanzen forschte. Militärische Aufträge, streng geheim.' Er senkt die Stimme. 'Sein Team entwickelte ein Serum, das die Grenzen zwischen bewusster und unbewusster Wahrnehmung verwischt. Der Durchbruch kam, als sie eine Substanz entdeckten, die die Grenze zwischen Realität und Halluzination manipulieren konnte.' Seine Augen glänzen. 'Stellen Sie sich die Möglichkeiten vor!' Dann verfinstert sich sein Blick. 'Aber Schäfer bekam Skrupel. Wollte aussteigen, drohte mit Enthüllungen. Kurz darauf tötete er seine Frau in einem vermeintlichen Wahnschub.' Du bemerkst, dass dein Kopf plötzlich schmerzt, als hätte dieses Gespräch eine schmerzhafte Erinnerung geweckt.",
        choices: [
            {
                text: "Fragen, ob die Klinik Schäfers Forschung fortsetzt",
                nextId: "scene_continued_research",
                addClue: {
                    id: "research_connection",
                    text: "Die 'Therapien' auf Raven Island sind tatsächlich Fortsetzungen und Erweiterungen von Schäfers ursprünglicher Forschung."
                }
            },
            {
                text: "Nach deinen plötzlichen Kopfschmerzen fragen",
                nextId: "scene_headache",
                addClue: {
                    id: "memory_gaps",
                    text: "Du leidest unter unerklärlichen Gedächtnislücken und Kopfschmerzen, besonders wenn bestimmte Themen angesprochen werden."
                }
            },
            {
                text: "Nach dem Zusammenhang zwischen NeuroSynth und der Klinik fragen",
                nextId: "scene_company_clinic",
                addClue: {
                    id: "front_operation",
                    text: "Die psychiatrische Einrichtung auf Raven Island wird heimlich von NeuroSynth finanziert und dient als Testgelände."
                }
            }
        ]
    }
};
