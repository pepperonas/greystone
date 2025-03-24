// Interaktiver Thriller im Stil von Shutter Island
// Mit drei Handlungssträngen und drei verschiedenen Enden
// Umfang: 50 Szenen

const gameData = {
    start: {
        text: "Nebel umhüllt die kleine Insel, als dein Boot am Anleger von 'Raven Island' festmacht. Als Privatdetektiv Robert Weber wurdest du hierher gerufen, um den mysteriösen Verschwinden eines Patienten aus der psychiatrischen Einrichtung nachzugehen. Der Direktor, Dr. Klaus Hoffmann, erwartet dich bereits. 'Willkommen auf Raven Island, Herr Weber. Wir stehen vor einem Rätsel. Der Patient Eric Schäfer ist vor drei Tagen spurlos verschwunden. Er war hochgradig gefährlich.' Ein Sturm zieht auf, während ihr zum Hauptgebäude geht. Du spürst, dass diese Insel mehr Geheimnisse birgt, als es auf den ersten Blick scheint.",
        choices: [
            {
                text: "Frage nach den Sicherheitsmaßnahmen der Einrichtung",
                nextId: "scene_security"
            },
            {
                text: "Erkundige dich nach der Vorgeschichte des Patienten",
                nextId: "scene_patient_history"
            },
            {
                text: "Bitte darum, den letzten bekannten Aufenthaltsort des Patienten zu sehen",
                nextId: "scene_last_seen"
            }
        ]
    },

    scene_security: {
        text: "Dr. Hoffmann führt dich durch einen langen, klinisch weißen Korridor. 'Unsere Sicherheitsmaßnahmen sind erstklassig. Überwachungskameras, elektronische Schlösser, Wachpersonal rund um die Uhr.' Er senkt die Stimme. 'Dennoch gibt es Bereiche der Insel, die schwer zu überwachen sind. Der alte Leuchtturm im Norden, die Klippen im Osten.' Du bemerkst ein Zucken in seinem Gesicht. 'Seltsam ist nur, dass keine der Kameras etwas aufgezeichnet hat. Als wäre Schäfer... einfach verschwunden.' Ein uniformierter Wachmann nickt euch zu, während ihr vorbeigeht. Du spürst seinen prüfenden Blick in deinem Rücken.",
        choices: [
            {
                text: "Den Wachmann direkt ansprechen und nach seiner Einschätzung fragen",
                nextId: "scene_guard",
                addClue: {
                    id: "suspicious_guard",
                    text: "Der Wachmann Michael Berger verhält sich nervös und scheint mehr zu wissen."
                }
            },
            {
                text: "Nach dem Überwachungsmaterial fragen",
                nextId: "scene_surveillance",
                addClue: {
                    id: "missing_footage",
                    text: "Die Überwachungsaufnahmen der Nacht des Verschwindens weisen unerklärliche Lücken auf."
                }
            },
            {
                text: "Nach dem alten Leuchtturm fragen",
                nextId: "scene_lighthouse_info",
                addClue: {
                    id: "lighthouse_clue",
                    text: "Der alte Leuchtturm im Norden der Insel könnte eine Rolle beim Verschwinden spielen."
                }
            }
        ]
    },

    scene_patient_history: {
        text: "In seinem Büro blättert Dr. Hoffmann durch eine dicke Akte. 'Eric Schäfer, 38 Jahre alt. Eingeliefert vor zwei Jahren nach einem... Vorfall.' Er zögert merklich. 'Er tötete seine Frau in einem psychotischen Schub. Glaubte, sie sei durch einen Doppelgänger ersetzt worden.' Hoffmann schiebt dir ein Foto zu - ein hagerer Mann mit leerem Blick. 'Er entwickelte komplexe Wahnvorstellungen. Sprach von Experimenten auf der Insel, von einem geheimen Programm.' Der Doktor lacht nervös. 'Alles Unsinn natürlich. Aber seine Intelligenz machte ihn gefährlich. Er manipulierte andere Patienten, sogar Personal.' Du bemerkst, dass einige Seiten in der Akte fehlen.",
        choices: [
            {
                text: "Nach den fehlenden Seiten in der Akte fragen",
                nextId: "scene_missing_pages",
                addClue: {
                    id: "incomplete_file",
                    text: "In Schäfers Akte fehlen mehrere Seiten, die wichtige Informationen enthalten könnten."
                }
            },
            {
                text: "Erkundige dich nach Schäfers Beziehungen zu anderen Patienten",
                nextId: "scene_patient_connections",
                addClue: {
                    id: "patient_connections",
                    text: "Schäfer hatte auffällig engen Kontakt zu anderen Patienten, besonders zu einer Frau namens Elena Krüger."
                }
            },
            {
                text: "Frage, ob es Anzeichen für sein Verschwinden gab",
                nextId: "scene_disappearance_signs",
                addClue: {
                    id: "behavior_change",
                    text: "Schäfer zeigte in den Tagen vor seinem Verschwinden ein verändertes Verhalten."
                }
            }
        ]
    },

    scene_last_seen: {
        text: "Dr. Hoffmann führt dich in einen Therapieraum. 'Hier wurde Schäfer zuletzt gesehen, bei einer Gruppensitzung mit Dr. Mertens.' Der Raum ist kreisförmig, mit Stühlen in einer Runde angeordnet. Eine Seite des Raumes besteht aus dickem Glas mit Blick aufs Meer. Der Sturm draußen wird stärker, Regentropfen peitschen gegen die Scheibe. 'Nach der Sitzung verließ er den Raum mit den anderen Patienten. Auf dem Weg zurück zu seinem Zimmer verlieren wir seine Spur.' Du bemerkst Kratzer am Türschloss und ein zerknittertes Papier unter einem der Stühle.",
        choices: [
            {
                text: "Das Papier aufheben und untersuchen",
                nextId: "scene_note",
                addClue: {
                    id: "hidden_note",
                    text: "Ein zerknitterter Zettel mit kryptischer Nachricht: 'Rabeninsel birgt mehr als nur Wahnsinn. Treffen am alten Ort. 23 Uhr.'"
                }
            },
            {
                text: "Die Kratzer am Türschloss genauer betrachten",
                nextId: "scene_lock",
                addClue: {
                    id: "tampered_lock",
                    text: "Das Türschloss wurde manipuliert, möglicherweise mit einem improvisierten Werkzeug."
                }
            },
            {
                text: "Mit Dr. Mertens sprechen wollen",
                nextId: "scene_dr_mertens",
                addClue: {
                    id: "therapy_session",
                    text: "Die letzte Therapiesitzung könnte Hinweise auf Schäfers Pläne enthalten."
                }
            }
        ]
    },

    scene_guard: {
        text: "Du gehst auf den Wachmann zu. 'Michael Berger', liest du auf seinem Namensschild. 'Einen Moment bitte.' Dr. Hoffmann wirkt ungehalten über deine Initiative, lässt dich aber gewähren. 'Herr Berger, waren Sie in der Nacht des Verschwindens im Dienst?' Der Mann wirkt nervös, seine Hand wandert unwillkürlich zur Dienstwaffe. 'Ja, Sir. Ich hatte die Nordflügelschicht.' Er schluckt. 'Nichts Ungewöhnliches gesehen. Alles ruhig.' Seine Augen verraten ihn - er lügt. Als ihr weitergeht, flüstert Hoffmann: 'Berger ist neu hier. Erst seit drei Monaten. Aber sein Hintergrund ist einwandfrei.' Ein Blitz erhellt den Gang, gefolgt von Donnergrollen. Für einen kurzen Moment flackert das Licht.",
        choices: [
            {
                text: "Später heimlich Bergers Dienstplan überprüfen",
                nextId: "scene_duty_roster",
                addClue: {
                    id: "berger_schedule",
                    text: "Bergers Dienstpläne zeigen, dass er ungewöhnlich oft Schichten tauschte, um im Nordflügel zu sein."
                }
            },
            {
                text: "Dr. Hoffmann nach der Personalauswahl fragen",
                nextId: "scene_staff_vetting",
                addClue: {
                    id: "hiring_process",
                    text: "Das Einstellungsverfahren für neues Personal auf Raven Island erscheint ungewöhnlich hastig."
                }
            },
            {
                text: "Den Nordflügel untersuchen wollen",
                nextId: "scene_north_wing",
                addClue: {
                    id: "north_wing",
                    text: "Der Nordflügel beherbergt die Hochsicherheitsabteilung und grenzt an einen älteren, teilweise ungenutzten Gebäudeteil."
                }
            }
        ]
    }
};
