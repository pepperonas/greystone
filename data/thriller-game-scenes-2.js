// Interaktiver Thriller im Stil von Shutter Island
// Szenen 6-10

const gameData = {
    scene_surveillance: {
        text: "Der Überwachungsraum ist kühl und blau erleuchtet vom Flimmern dutzender Monitore. Eine Frau mit streng zurückgebundenem Haar dreht sich zu euch um. 'Lena Vogt, Sicherheitschefin', stellt Dr. Hoffmann vor. Auf ihre Tastatur tippend, spult sie die Aufnahmen zurück. 'Hier, 22:43 Uhr. Schäfer geht zurück zu seinem Zimmer.' Ihr seht, wie der hagere Patient durch einen Korridor läuft. Bei Minute 22:47 wird das Bild plötzlich unscharf, statisch. Als es sich stabilisiert - 22:53 Uhr - ist der Korridor leer. Sechs Minuten fehlen. 'Ein technischer Fehler', erklärt Vogt rasch. 'Kommt bei Gewittern vor.' Du bemerkst einen dunklen Fleck am Rand des verschwommenen Bildes, unmöglich zu identifizieren. 'Können wir andere Kameras sehen?' fragst du. Vogt tauscht einen kurzen Blick mit Hoffmann.",
        choices: [
            {
                text: "Auf der Untersuchung weiterer Kamerawinkel bestehen",
                nextId: "scene_more_footage",
                addClue: {
                    id: "mysterious_figure",
                    text: "Auf einem anderen Kamerawinkel ist eine schemenhafte Figur zu erkennen, die Schäfer folgt."
                }
            },
            {
                text: "Den dunklen Fleck auf dem Video genauer analysieren lassen",
                nextId: "scene_enhance_video",
                addClue: {
                    id: "blood_trace",
                    text: "Die Bildvergrößerung zeigt, was wie eine Blutspur aussehen könnte."
                }
            },
            {
                text: "Nach früheren 'technischen Fehlern' in der Überwachung fragen",
                nextId: "scene_previous_failures",
                addClue: {
                    id: "pattern_outages",
                    text: "Es gab auffällig regelmäßige Ausfälle im Überwachungssystem, immer um ähnliche Uhrzeiten."
                }
            }
        ]
    },

    scene_lighthouse_info: {
        text: "Dr. Hoffmann führt dich in sein Büro zurück und holt eine vergilbte Karte der Insel hervor. 'Der Leuchtturm...' Er zeigt auf den nördlichsten Punkt. 'Ein Relikt aus vergangenen Zeiten. Seit Jahrzehnten außer Betrieb.' Seine Finger trommeln nervös auf dem Schreibtisch. 'Eigentlich ist der Bereich für Patienten unzugänglich. Zu gefährlich, die Klippen, das baufällige Gebäude.' Er zögert. 'Es gab Gerüchte unter den Patienten. Über den Leuchtturm als... Zufluchtsort.' Der Regen prasselt gegen die Fensterscheiben. 'Schäfer hat einmal erwähnt, dass er dort Stimmen hört. Wir haben es als Teil seiner Wahnvorstellungen abgetan.' In seinen Augen liegt etwas, das du nicht deuten kannst - Angst? Schuld?",
        choices: [
            {
                text: "Den Leuchtturm so bald wie möglich untersuchen",
                nextId: "scene_lighthouse_exploration",
                addClue: {
                    id: "lighthouse_key",
                    text: "In Dr. Hoffmanns Schlüsselschrank hängt ein alter, rostiger Schlüssel mit der Aufschrift 'LT'."
                }
            },
            {
                text: "Mehr über die 'Gerüchte' unter den Patienten erfahren wollen",
                nextId: "scene_patient_rumors",
                addClue: {
                    id: "cult_whispers",
                    text: "Einige Patienten sprechen von nächtlichen Versammlungen und rituellen Gesängen aus Richtung des Leuchtturms."
                }
            },
            {
                text: "Nach der Geschichte der Klinik und des Leuchtturms fragen",
                nextId: "scene_island_history",
                addClue: {
                    id: "military_past",
                    text: "Vor der psychiatrischen Einrichtung befand sich auf der Insel eine militärische Forschungsstation."
                }
            }
        ]
    },

    scene_missing_pages: {
        text: "'Fehlende Seiten?' Dr. Hoffmann blinzelt irritiert, nimmt die Akte und blättert darin. 'Tatsächlich... seltsam.' Er runzelt die Stirn. 'Die Seiten zu seinem Behandlungsverlauf der letzten drei Monate sollten hier sein.' Er greift zum Telefon, wählt eine Nummer. 'Dr. Schneider? Die Akte von Patient Schäfer scheint unvollständig. Könnten Sie...' Eine Pause. 'Verstehe. Nein, kein Problem.' Er legt auf, sein Gesichtsausdruck nun maskenhaft neutral. 'Offenbar wurden Teile seiner Akte für eine Fallstudie ausgeliehen. Ein administratives Versehen.' Du glaubst ihm kein Wort. Auf dem Schreibtisch liegt sein Tablet. Eine E-Mail ist geöffnet: 'RE: Projekt Rabe - Phase 3 initiiert'. Als er deinen Blick bemerkt, dreht er das Tablet hastig um.",
        choices: [
            {
                text: "Nach dem 'Projekt Rabe' fragen",
                nextId: "scene_project_raven",
                addClue: {
                    id: "secret_project",
                    text: "Projekt Rabe scheint ein geheimes Forschungsprogramm in der Klinik zu sein."
                }
            },
            {
                text: "Auf die vollständige Akte bestehen",
                nextId: "scene_insist_file",
                addClue: {
                    id: "resistance",
                    text: "Das Personal zeigt ungewöhnlichen Widerstand, dir vollständigen Zugang zu gewähren."
                }
            },
            {
                text: "Das Gespräch auf Dr. Schneider lenken",
                nextId: "scene_about_schneider",
                addClue: {
                    id: "schneider_role",
                    text: "Dr. Schneider leitet die experimentelle Therapieabteilung und hat ein besonderes Interesse an Schäfers Fall."
                }
            }
        ]
    },

    scene_note: {
        text: "Du hebst das zerknitterte Papier auf. Es ist ein Stück kariertes Papier, wie aus einem Notizbuch gerissen. Die Handschrift ist hastig, krakelig: 'Rabeninsel birgt mehr als nur Wahnsinn. Treffen am alten Ort. 23 Uhr.' Auf der Rückseite ist eine Art Symbol skizziert - ein Kreis mit einem vertikalen Strich dadurch. Dr. Hoffmann versucht, einen Blick darauf zu werfen. 'Was haben Sie da gefunden?' Du beschließt instinktiv, ihm nicht die ganze Wahrheit zu sagen. 'Nur ein Stück Papier. Nichts Wichtiges.' Sein durchdringender Blick verrät Misstrauen. 'Wir sollten weiter', sagt er knapp. Als ihr den Raum verlasst, bemerkst du eine Patientin im Flur, die euch beobachtet. Ihre Augen weiten sich, als sie das Papier in deiner Hand sieht.",
        choices: [
            {
                text: "Die Patientin später heimlich aufsuchen",
                nextId: "scene_female_patient",
                addClue: {
                    id: "elena_contact",
                    text: "Die Patientin Elena Krüger hatte eine enge Verbindung zu Schäfer und kennt die Bedeutung des Symbols."
                }
            },
            {
                text: "Das Symbol recherchieren",
                nextId: "scene_symbol_research",
                addClue: {
                    id: "ancient_symbol",
                    text: "Das Symbol ähnelt einem alten Zeichen für 'Durchgang' oder 'Portal' und wird mit okkulten Praktiken in Verbindung gebracht."
                }
            },
            {
                text: "Den 'alten Ort' im Kontext der Insel interpretieren",
                nextId: "scene_old_place",
                addClue: {
                    id: "meeting_spot",
                    text: "Der 'alte Ort' könnte sich auf die Ruinen unter dem Leuchtturm beziehen, die älter sind als die Klinik selbst."
                }
            }
        ]
    },

    scene_lock: {
        text: "Du kniest dich nieder und untersuchst das Türschloss. Feine Kratzer im Metall, nicht zufällig, sondern methodisch. Jemand hat es mit einem improvisierten Werkzeug manipuliert. 'Interessant', murmelst du. Dr. Hoffmann beugt sich zu dir. 'Was meinen Sie?' - 'Dieses Schloss wurde geknackt. Nicht aufgebrochen, sondern präzise manipuliert.' Hoffmann schüttelt den Kopf. 'Unmöglich. Diese Schlösser sind speziell gesichert.' - 'Offenbar nicht gut genug', entgegnest du. In einem Winkel des Metallrahmens entdeckst du etwas - ein winziges Stück Draht, verbogen zu einem Haken. Professionelle Arbeit. 'War Schäfer vor seiner Einweisung ein Schlosser?' fragst du. Hoffmann wirkt plötzlich beunruhigt. 'Nein... er war Chemiker. Bei einem Pharmaunternehmen.'",
        choices: [
            {
                text: "Nach Schäfers genauer Tätigkeit in der Pharmaindustrie fragen",
                nextId: "scene_pharma_background",
                addClue: {
                    id: "research_history",
                    text: "Schäfer arbeitete an einem geheimen Forschungsprojekt zur Bewusstseinsmanipulation, bevor er 'durchdrehte'."
                }
            },
            {
                text: "Den Draht sicherstellen und nach Werkzeugen suchen, die Patienten zugänglich sein könnten",
                nextId: "scene_tool_search",
                addClue: {
                    id: "hidden_tools",
                    text: "In der Kunsttherapie-Abteilung fehlen seit Wochen verschiedene Metallwerkzeuge."
                }
            },
            {
                text: "Fragen, ob andere Schlösser in der Einrichtung manipuliert wurden",
                nextId: "scene_other_locks",
                addClue: {
                    id: "systematic_breach",
                    text: "Es wurden weitere manipulierte Schlösser gefunden, die einen regelrechten Fluchtkorridor bilden."
                }
            }
        ]
    }
};
