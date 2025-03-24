// Interaktiver Thriller im Stil von Shutter Island
// Mit drei Handlungssträngen und drei verschiedenen Enden
// Umfang: 50 Szenen

const gameData = {
    start: {
        text: "Nebel umhüllt die kleine Insel, als dein Boot am Anleger von 'Raven Island' festmacht. Als Privatdetektiv Robert Weber wurdest du hierher gerufen, um den mysteriösen Verschwinden eines Patienten aus der psychiatrischen Einrichtung nachzugehen. Der Direktor, Dr. Klaus Hoffmann, erwartet dich bereits. 'Willkommen auf Raven Island, Herr Weber. Wir stehen vor einem Rätsel. Der Patient Eric Schäfer ist vor drei Tagen spurlos verschwunden. Er war hochgradig gefährlich.' Ein Sturm zieht auf, während ihr zum Hauptgebäude geht. Du spürst, dass diese Insel mehr Geheimnisse birgt, als es auf den ersten Blick scheint.",
        choices: [{
            text: "Frage nach den Sicherheitsmaßnahmen der Einrichtung", nextId: "scene_security"
        }, {
            text: "Erkundige dich nach der Vorgeschichte des Patienten",
            nextId: "scene_patient_history"
        }, {
            text: "Bitte darum, den letzten bekannten Aufenthaltsort des Patienten zu sehen",
            nextId: "scene_last_seen"
        }]
    },

    scene_security: {
        text: "Dr. Hoffmann führt dich durch einen langen, klinisch weißen Korridor. 'Unsere Sicherheitsmaßnahmen sind erstklassig. Überwachungskameras, elektronische Schlösser, Wachpersonal rund um die Uhr.' Er senkt die Stimme. 'Dennoch gibt es Bereiche der Insel, die schwer zu überwachen sind. Der alte Leuchtturm im Norden, die Klippen im Osten.' Du bemerkst ein Zucken in seinem Gesicht. 'Seltsam ist nur, dass keine der Kameras etwas aufgezeichnet hat. Als wäre Schäfer... einfach verschwunden.' Ein uniformierter Wachmann nickt euch zu, während ihr vorbeigeht. Du spürst seinen prüfenden Blick in deinem Rücken.",
        choices: [{
            text: "Den Wachmann direkt ansprechen und nach seiner Einschätzung fragen",
            nextId: "scene_guard",
            addClue: {
                id: "suspicious_guard",
                text: "Der Wachmann Michael Berger verhält sich nervös und scheint mehr zu wissen."
            }
        }, {
            text: "Nach dem Überwachungsmaterial fragen", nextId: "scene_surveillance", addClue: {
                id: "missing_footage",
                text: "Die Überwachungsaufnahmen der Nacht des Verschwindens weisen unerklärliche Lücken auf."
            }
        }, {
            text: "Nach dem alten Leuchtturm fragen", nextId: "scene_lighthouse_info", addClue: {
                id: "lighthouse_clue",
                text: "Der alte Leuchtturm im Norden der Insel könnte eine Rolle beim Verschwinden spielen."
            }
        }]
    },

    scene_patient_history: {
        text: "In seinem Büro blättert Dr. Hoffmann durch eine dicke Akte. 'Eric Schäfer, 38 Jahre alt. Eingeliefert vor zwei Jahren nach einem... Vorfall.' Er zögert merklich. 'Er tötete seine Frau in einem psychotischen Schub. Glaubte, sie sei durch einen Doppelgänger ersetzt worden.' Hoffmann schiebt dir ein Foto zu - ein hagerer Mann mit leerem Blick. 'Er entwickelte komplexe Wahnvorstellungen. Sprach von Experimenten auf der Insel, von einem geheimen Programm.' Der Doktor lacht nervös. 'Alles Unsinn natürlich. Aber seine Intelligenz machte ihn gefährlich. Er manipulierte andere Patienten, sogar Personal.' Du bemerkst, dass einige Seiten in der Akte fehlen.",
        choices: [{
            text: "Nach den fehlenden Seiten in der Akte fragen",
            nextId: "scene_missing_pages",
            addClue: {
                id: "incomplete_file",
                text: "In Schäfers Akte fehlen mehrere Seiten, die wichtige Informationen enthalten könnten."
            }
        }, {
            text: "Erkundige dich nach Schäfers Beziehungen zu anderen Patienten",
            nextId: "scene_patient_connections",
            addClue: {
                id: "patient_connections",
                text: "Schäfer hatte auffällig engen Kontakt zu anderen Patienten, besonders zu einer Frau namens Elena Krüger."
            }
        }, {
            text: "Frage, ob es Anzeichen für sein Verschwinden gab",
            nextId: "scene_disappearance_signs",
            addClue: {
                id: "behavior_change",
                text: "Schäfer zeigte in den Tagen vor seinem Verschwinden ein verändertes Verhalten."
            }
        }]
    },

    scene_last_seen: {
        text: "Dr. Hoffmann führt dich in einen Therapieraum. 'Hier wurde Schäfer zuletzt gesehen, bei einer Gruppensitzung mit Dr. Mertens.' Der Raum ist kreisförmig, mit Stühlen in einer Runde angeordnet. Eine Seite des Raumes besteht aus dickem Glas mit Blick aufs Meer. Der Sturm draußen wird stärker, Regentropfen peitschen gegen die Scheibe. 'Nach der Sitzung verließ er den Raum mit den anderen Patienten. Auf dem Weg zurück zu seinem Zimmer verlieren wir seine Spur.' Du bemerkst Kratzer am Türschloss und ein zerknittertes Papier unter einem der Stühle.",
        choices: [{
            text: "Das Papier aufheben und untersuchen", nextId: "scene_note", addClue: {
                id: "hidden_note",
                text: "Ein zerknitterter Zettel mit kryptischer Nachricht: 'Rabeninsel birgt mehr als nur Wahnsinn. Treffen am alten Ort. 23 Uhr.'"
            }
        }, {
            text: "Die Kratzer am Türschloss genauer betrachten", nextId: "scene_lock", addClue: {
                id: "tampered_lock",
                text: "Das Türschloss wurde manipuliert, möglicherweise mit einem improvisierten Werkzeug."
            }
        }, {
            text: "Mit Dr. Mertens sprechen wollen", nextId: "scene_dr_mertens", addClue: {
                id: "therapy_session",
                text: "Die letzte Therapiesitzung könnte Hinweise auf Schäfers Pläne enthalten."
            }
        }]
    },

    scene_guard: {
        text: "Du gehst auf den Wachmann zu. 'Michael Berger', liest du auf seinem Namensschild. 'Einen Moment bitte.' Dr. Hoffmann wirkt ungehalten über deine Initiative, lässt dich aber gewähren. 'Herr Berger, waren Sie in der Nacht des Verschwindens im Dienst?' Der Mann wirkt nervös, seine Hand wandert unwillkürlich zur Dienstwaffe. 'Ja, Sir. Ich hatte die Nordflügelschicht.' Er schluckt. 'Nichts Ungewöhnliches gesehen. Alles ruhig.' Seine Augen verraten ihn - er lügt. Als ihr weitergeht, flüstert Hoffmann: 'Berger ist neu hier. Erst seit drei Monaten. Aber sein Hintergrund ist einwandfrei.' Ein Blitz erhellt den Gang, gefolgt von Donnergrollen. Für einen kurzen Moment flackert das Licht.",
        choices: [{
            text: "Später heimlich Bergers Dienstplan überprüfen",
            nextId: "scene_duty_roster",
            addClue: {
                id: "berger_schedule",
                text: "Bergers Dienstpläne zeigen, dass er ungewöhnlich oft Schichten tauschte, um im Nordflügel zu sein."
            }
        }, {
            text: "Dr. Hoffmann nach der Personalauswahl fragen",
            nextId: "scene_staff_vetting",
            addClue: {
                id: "hiring_process",
                text: "Das Einstellungsverfahren für neues Personal auf Raven Island erscheint ungewöhnlich hastig."
            }
        }, {
            text: "Den Nordflügel untersuchen wollen", nextId: "scene_north_wing", addClue: {
                id: "north_wing",
                text: "Der Nordflügel beherbergt die Hochsicherheitsabteilung und grenzt an einen älteren, teilweise ungenutzten Gebäudeteil."
            }
        }]
    }, scene_surveillance: {
        text: "Der Überwachungsraum ist kühl und blau erleuchtet vom Flimmern dutzender Monitore. Eine Frau mit streng zurückgebundenem Haar dreht sich zu euch um. 'Lena Vogt, Sicherheitschefin', stellt Dr. Hoffmann vor. Auf ihre Tastatur tippend, spult sie die Aufnahmen zurück. 'Hier, 22:43 Uhr. Schäfer geht zurück zu seinem Zimmer.' Ihr seht, wie der hagere Patient durch einen Korridor läuft. Bei Minute 22:47 wird das Bild plötzlich unscharf, statisch. Als es sich stabilisiert - 22:53 Uhr - ist der Korridor leer. Sechs Minuten fehlen. 'Ein technischer Fehler', erklärt Vogt rasch. 'Kommt bei Gewittern vor.' Du bemerkst einen dunklen Fleck am Rand des verschwommenen Bildes, unmöglich zu identifizieren. 'Können wir andere Kameras sehen?' fragst du. Vogt tauscht einen kurzen Blick mit Hoffmann.",
        choices: [{
            text: "Auf der Untersuchung weiterer Kamerawinkel bestehen",
            nextId: "scene_more_footage",
            addClue: {
                id: "mysterious_figure",
                text: "Auf einem anderen Kamerawinkel ist eine schemenhafte Figur zu erkennen, die Schäfer folgt."
            }
        }, {
            text: "Den dunklen Fleck auf dem Video genauer analysieren lassen",
            nextId: "scene_enhance_video",
            addClue: {
                id: "blood_trace",
                text: "Die Bildvergrößerung zeigt, was wie eine Blutspur aussehen könnte."
            }
        }, {
            text: "Nach früheren 'technischen Fehlern' in der Überwachung fragen",
            nextId: "scene_previous_failures",
            addClue: {
                id: "pattern_outages",
                text: "Es gab auffällig regelmäßige Ausfälle im Überwachungssystem, immer um ähnliche Uhrzeiten."
            }
        }]
    },

    scene_lighthouse_info: {
        text: "Dr. Hoffmann führt dich in sein Büro zurück und holt eine vergilbte Karte der Insel hervor. 'Der Leuchtturm...' Er zeigt auf den nördlichsten Punkt. 'Ein Relikt aus vergangenen Zeiten. Seit Jahrzehnten außer Betrieb.' Seine Finger trommeln nervös auf dem Schreibtisch. 'Eigentlich ist der Bereich für Patienten unzugänglich. Zu gefährlich, die Klippen, das baufällige Gebäude.' Er zögert. 'Es gab Gerüchte unter den Patienten. Über den Leuchtturm als... Zufluchtsort.' Der Regen prasselt gegen die Fensterscheiben. 'Schäfer hat einmal erwähnt, dass er dort Stimmen hört. Wir haben es als Teil seiner Wahnvorstellungen abgetan.' In seinen Augen liegt etwas, das du nicht deuten kannst - Angst? Schuld?",
        choices: [{
            text: "Den Leuchtturm so bald wie möglich untersuchen",
            nextId: "scene_lighthouse_exploration",
            addClue: {
                id: "lighthouse_key",
                text: "In Dr. Hoffmanns Schlüsselschrank hängt ein alter, rostiger Schlüssel mit der Aufschrift 'LT'."
            }
        }, {
            text: "Mehr über die 'Gerüchte' unter den Patienten erfahren wollen",
            nextId: "scene_patient_rumors",
            addClue: {
                id: "cult_whispers",
                text: "Einige Patienten sprechen von nächtlichen Versammlungen und rituellen Gesängen aus Richtung des Leuchtturms."
            }
        }, {
            text: "Nach der Geschichte der Klinik und des Leuchtturms fragen",
            nextId: "scene_island_history",
            addClue: {
                id: "military_past",
                text: "Vor der psychiatrischen Einrichtung befand sich auf der Insel eine militärische Forschungsstation."
            }
        }]
    },

    scene_missing_pages: {
        text: "'Fehlende Seiten?' Dr. Hoffmann blinzelt irritiert, nimmt die Akte und blättert darin. 'Tatsächlich... seltsam.' Er runzelt die Stirn. 'Die Seiten zu seinem Behandlungsverlauf der letzten drei Monate sollten hier sein.' Er greift zum Telefon, wählt eine Nummer. 'Dr. Schneider? Die Akte von Patient Schäfer scheint unvollständig. Könnten Sie...' Eine Pause. 'Verstehe. Nein, kein Problem.' Er legt auf, sein Gesichtsausdruck nun maskenhaft neutral. 'Offenbar wurden Teile seiner Akte für eine Fallstudie ausgeliehen. Ein administratives Versehen.' Du glaubst ihm kein Wort. Auf dem Schreibtisch liegt sein Tablet. Eine E-Mail ist geöffnet: 'RE: Projekt Rabe - Phase 3 initiiert'. Als er deinen Blick bemerkt, dreht er das Tablet hastig um.",
        choices: [{
            text: "Nach dem 'Projekt Rabe' fragen", nextId: "scene_project_raven", addClue: {
                id: "secret_project",
                text: "Projekt Rabe scheint ein geheimes Forschungsprogramm in der Klinik zu sein."
            }
        }, {
            text: "Auf die vollständige Akte bestehen", nextId: "scene_insist_file", addClue: {
                id: "resistance",
                text: "Das Personal zeigt ungewöhnlichen Widerstand, dir vollständigen Zugang zu gewähren."
            }
        }, {
            text: "Das Gespräch auf Dr. Schneider lenken",
            nextId: "scene_about_schneider",
            addClue: {
                id: "schneider_role",
                text: "Dr. Schneider leitet die experimentelle Therapieabteilung und hat ein besonderes Interesse an Schäfers Fall."
            }
        }]
    },

    scene_note: {
        text: "Du hebst das zerknitterte Papier auf. Es ist ein Stück kariertes Papier, wie aus einem Notizbuch gerissen. Die Handschrift ist hastig, krakelig: 'Rabeninsel birgt mehr als nur Wahnsinn. Treffen am alten Ort. 23 Uhr.' Auf der Rückseite ist eine Art Symbol skizziert - ein Kreis mit einem vertikalen Strich dadurch. Dr. Hoffmann versucht, einen Blick darauf zu werfen. 'Was haben Sie da gefunden?' Du beschließt instinktiv, ihm nicht die ganze Wahrheit zu sagen. 'Nur ein Stück Papier. Nichts Wichtiges.' Sein durchdringender Blick verrät Misstrauen. 'Wir sollten weiter', sagt er knapp. Als ihr den Raum verlasst, bemerkst du eine Patientin im Flur, die euch beobachtet. Ihre Augen weiten sich, als sie das Papier in deiner Hand sieht.",
        choices: [{
            text: "Die Patientin später heimlich aufsuchen",
            nextId: "scene_female_patient",
            addClue: {
                id: "elena_contact",
                text: "Die Patientin Elena Krüger hatte eine enge Verbindung zu Schäfer und kennt die Bedeutung des Symbols."
            }
        }, {
            text: "Das Symbol recherchieren", nextId: "scene_symbol_research", addClue: {
                id: "ancient_symbol",
                text: "Das Symbol ähnelt einem alten Zeichen für 'Durchgang' oder 'Portal' und wird mit okkulten Praktiken in Verbindung gebracht."
            }
        }, {
            text: "Den 'alten Ort' im Kontext der Insel interpretieren",
            nextId: "scene_old_place",
            addClue: {
                id: "meeting_spot",
                text: "Der 'alte Ort' könnte sich auf die Ruinen unter dem Leuchtturm beziehen, die älter sind als die Klinik selbst."
            }
        }]
    },

    scene_lock: {
        text: "Du kniest dich nieder und untersuchst das Türschloss. Feine Kratzer im Metall, nicht zufällig, sondern methodisch. Jemand hat es mit einem improvisierten Werkzeug manipuliert. 'Interessant', murmelst du. Dr. Hoffmann beugt sich zu dir. 'Was meinen Sie?' - 'Dieses Schloss wurde geknackt. Nicht aufgebrochen, sondern präzise manipuliert.' Hoffmann schüttelt den Kopf. 'Unmöglich. Diese Schlösser sind speziell gesichert.' - 'Offenbar nicht gut genug', entgegnest du. In einem Winkel des Metallrahmens entdeckst du etwas - ein winziges Stück Draht, verbogen zu einem Haken. Professionelle Arbeit. 'War Schäfer vor seiner Einweisung ein Schlosser?' fragst du. Hoffmann wirkt plötzlich beunruhigt. 'Nein... er war Chemiker. Bei einem Pharmaunternehmen.'",
        choices: [{
            text: "Nach Schäfers genauer Tätigkeit in der Pharmaindustrie fragen",
            nextId: "scene_pharma_background",
            addClue: {
                id: "research_history",
                text: "Schäfer arbeitete an einem geheimen Forschungsprojekt zur Bewusstseinsmanipulation, bevor er 'durchdrehte'."
            }
        }, {
            text: "Den Draht sicherstellen und nach Werkzeugen suchen, die Patienten zugänglich sein könnten",
            nextId: "scene_tool_search",
            addClue: {
                id: "hidden_tools",
                text: "In der Kunsttherapie-Abteilung fehlen seit Wochen verschiedene Metallwerkzeuge."
            }
        }, {
            text: "Fragen, ob andere Schlösser in der Einrichtung manipuliert wurden",
            nextId: "scene_other_locks",
            addClue: {
                id: "systematic_breach",
                text: "Es wurden weitere manipulierte Schlösser gefunden, die einen regelrechten Fluchtkorridor bilden."
            }
        }]
    }, scene_female_patient: {
        text: "Du findest einen Vorwand, dich von Dr. Hoffmann zu trennen, und machst dich auf die Suche nach der Patientin. In einem Gemeinschaftsraum entdeckst du sie, allein an einem Fenster sitzend, den Blick auf den stürmischen Ozean gerichtet. 'Elena Krüger', steht auf ihrem Patientenarmband. Sie dreht sich zu dir, als spürte sie deine Anwesenheit. 'Sie suchen nach ihm.' Keine Frage, eine Feststellung. 'Er hat gesagt, dass jemand kommen würde.' Du zeigst ihr vorsichtig den Zettel. Sie lächelt traurig. 'Der Rabe fliegt zur Mitternacht.' Ihr Blick ist klar, nicht wie der einer Verwirrten. 'Eric war nicht verrückt. Keiner von uns ist es. Nicht so, wie sie behaupten.' Sie senkt die Stimme. 'Sie experimentieren an uns. Machen uns zu etwas... Anderem.' Plötzlich verstummt sie, ihr Blick wandert über deine Schulter. Eine Schwester nähert sich.",
        choices: [{
            text: "Elena schnell nach dem Symbol auf dem Zettel fragen",
            nextId: "scene_symbol_meaning",
            addClue: {
                id: "doorway_symbol",
                text: "Das Symbol stellt einen 'Durchgang' zwischen Realitäten dar, ein zentrales Element in den Ritualen unter dem Leuchtturm."
            }
        }, {
            text: "Wissen wollen, was sie mit 'zu etwas Anderem machen' meint",
            nextId: "scene_transformation",
            addClue: {
                id: "experiments",
                text: "Die 'Behandlungen' in der Klinik scheinen das Bewusstsein der Patienten auf unnatürliche Weise zu verändern."
            }
        }, {
            text: "So tun, als hättest du nur nach dem Weg gefragt, um keinen Verdacht zu erregen",
            nextId: "scene_retreat",
            addClue: {
                id: "being_watched",
                text: "Das Personal überwacht bestimmte Patienten besonders intensiv, besonders die, die mit Schäfer Kontakt hatten."
            }
        }]
    },

    scene_project_raven: {
        text: "Hoffmanns Gesicht versteint, als du das 'Projekt Rabe' erwähnst. 'Woher wissen Sie davon?' Seine Stimme ist leise, bedrohlich. Du entscheidest dich für eine halbwahre Antwort: 'Schäfer hat es in seinen Notizen erwähnt.' Er entspannt sich leicht. 'Projekt Rabe ist lediglich der interne Name für ein experimentelles Therapieprogramm. Neuartige Methoden zur Behandlung schwerer Wahnvorstellungen.' Er seufzt. 'Schäfer war einer der Testpatienten. Mit vielversprechenden Ergebnissen, bis...' Er verstummt. Auf seinem Schreibtisch steht ein Foto – Hoffmann mit einem älteren Mann in Militäruniform. Als er deinen Blick bemerkt, dreht er es um. 'General Weiss. Ein alter Freund. Er hat die Finanzierung für unser Programm sichergestellt.' Er lächelt dünn. 'Die Behörden interessieren sich nicht für psychisch Kranke. Das Militär schon.'",
        choices: [{
            text: "Nach der Art der 'experimentellen Therapie' fragen",
            nextId: "scene_experimental_therapy",
            addClue: {
                id: "drug_trials",
                text: "Die experimentelle Therapie beinhaltet neuartige psychoaktive Substanzen, die direkt auf das Unterbewusstsein wirken sollen."
            }
        }, {
            text: "Das Interesse des Militärs an psychiatrischen Patienten hinterfragen",
            nextId: "scene_military_interest",
            addClue: {
                id: "weapon_potential",
                text: "General Weiss sieht in den Experimenten potenzielle militärische Anwendungen im Bereich psychologischer Kriegsführung."
            }
        }, {
            text: "Vorgeben, selbst mehr über das Projekt zu wissen, um Hoffmann aus der Reserve zu locken",
            nextId: "scene_bluff",
            requireClue: "secret_project",
            addClue: {
                id: "phase_three",
                text: "Phase 3 des Projekts beinhaltet Tests an unwissenden Subjekten - möglicherweise auch an Personal der Einrichtung."
            }
        }]
    },

    scene_lighthouse_exploration: {
        text: "Der Regen hat nachgelassen, als du dich allein auf den Weg zum Leuchtturm machst. Der schmale Pfad führt durch dichtes Unterholz, die Luft riecht nach Salz und Verfall. Der Leuchtturm selbst ist ein gespenstischer Anblick - verwittert, mit abblätternder weißer Farbe. Die Tür ist verschlossen, aber der Schlüssel, den du heimlich aus Hoffmanns Büro genommen hast, passt. Innen ist es kalt und feucht. Eine Wendeltreppe führt nach oben. Als du sie erklimmst, hörst du etwas - ein rhythmisches Klopfen von unten. Im Kontrollraum oben findest du Schäfers Spuren: ein improvisiertes Lager, Bücher, Notizen an den Wänden. Ein Fernglas liegt auf der Fensterbank, direkt auf die Klinik gerichtet. Eine der Notizen fällt dir besonders auf: 'Sie sind nicht, wer sie zu sein glauben. Ich bin nicht, wer ich zu sein glaube.'",
        choices: [{
            text: "Die Quelle des Klopfgeräusches untersuchen",
            nextId: "scene_underground",
            addClue: {
                id: "hidden_passage",
                text: "Unter dem Leuchtturm befindet sich ein verborgener Durchgang zu einem älteren Teil der Insel-Infrastruktur."
            }
        }, {
            text: "Schäfers Notizen gründlich studieren", nextId: "scene_schaefer_notes", addClue: {
                id: "reality_doubts",
                text: "Schäfer zweifelte zunehmend an seiner eigenen Identität und der Natur der Realität um ihn herum."
            }
        }, {
            text: "Mit dem Fernglas die Klinik beobachten", nextId: "scene_observation", addClue: {
                id: "night_activities",
                text: "Nachts werden bestimmte Patienten heimlich in einen abgelegenen Teil der Klinik gebracht."
            }
        }]
    },

    scene_more_footage: {
        text: "Lena Vogt zögert, tauscht einen weiteren Blick mit Dr. Hoffmann, der kaum merklich nickt. 'In Ordnung.' Sie tippt eine Reihe von Befehlen ein. 'Hier ist die Außenkamera des Nordflügels, etwa zur selben Zeit.' Das Bild zeigt einen leeren Hof im Regen. 22:49 Uhr: Eine Gestalt huscht durch das Bild - zu schnell für eine klare Identifikation, aber die Größe passt zu Schäfer. Sie ist nicht allein. Eine zweite Person folgt ihr, in einem weißen Kittel. 'Das könnte Dr. Schneider sein', bemerkt Hoffmann stirnrunzelnd. 'Was macht er zu dieser Zeit dort?' - 'Vielleicht hat er Schäfer gefunden und verfolgt?', schlägt Vogt vor. Du bemerkst ein Detail am Rand des Bildes - eine weitere Gestalt, teilweise verdeckt, die etwas Glänzendes in der Hand hält. Als du darauf hinweisen willst, friert der Bildschirm plötzlich ein. 'Systemfehler', erklärt Vogt knapp.",
        choices: [{
            text: "Auf der Wiederherstellung des Bildes bestehen",
            nextId: "scene_tech_confrontation",
            addClue: {
                id: "deliberate_erasure",
                text: "Die Sicherheitschefin scheint bewusst Beweise zu manipulieren oder zu verbergen."
            }
        }, {
            text: "Nach Dr. Schneider fragen und ihn sprechen wollen",
            nextId: "scene_find_schneider",
            addClue: {
                id: "schneider_involvement",
                text: "Dr. Schneider scheint in Schäfers Verschwinden verwickelt zu sein, möglicherweise nicht als Verfolger, sondern als Helfer."
            }
        }, {
            text: "Später heimlich in den Überwachungsraum zurückkehren",
            nextId: "scene_midnight_surveillance",
            addClue: {
                id: "deleted_files",
                text: "In einem versteckten Ordner auf dem System finden sich gelöschte Aufnahmen, die nächtliche Aktivitäten im abgesperrten Ostflügel zeigen."
            }
        }]
    },

    scene_pharma_background: {
        text: "'Ein Chemiker, sagen Sie?' Du siehst Hoffmann durchdringend an. Nach kurzem Zögern gibt er nach. 'Schäfer arbeitete für NeuroSynth, ein Pharmaunternehmen, das sich auf Psychopharmaka spezialisiert hat. Er leitete ein Forschungsteam, das an...' Er räuspert sich. 'An bewusstseinserweiternden Substanzen forschte. Militärische Aufträge, streng geheim.' Er senkt die Stimme. 'Sein Team entwickelte ein Serum, das die Grenzen zwischen bewusster und unbewusster Wahrnehmung verwischt. Der Durchbruch kam, als sie eine Substanz entdeckten, die die Grenze zwischen Realität und Halluzination manipulieren konnte.' Seine Augen glänzen. 'Stellen Sie sich die Möglichkeiten vor!' Dann verfinstert sich sein Blick. 'Aber Schäfer bekam Skrupel. Wollte aussteigen, drohte mit Enthüllungen. Kurz darauf tötete er seine Frau in einem vermeintlichen Wahnschub.' Du bemerkst, dass dein Kopf plötzlich schmerzt, als hätte dieses Gespräch eine schmerzhafte Erinnerung geweckt.",
        choices: [{
            text: "Fragen, ob die Klinik Schäfers Forschung fortsetzt",
            nextId: "scene_continued_research",
            addClue: {
                id: "research_connection",
                text: "Die 'Therapien' auf Raven Island sind tatsächlich Fortsetzungen und Erweiterungen von Schäfers ursprünglicher Forschung."
            }
        }, {
            text: "Nach deinen plötzlichen Kopfschmerzen fragen",
            nextId: "scene_headache",
            addClue: {
                id: "memory_gaps",
                text: "Du leidest unter unerklärlichen Gedächtnislücken und Kopfschmerzen, besonders wenn bestimmte Themen angesprochen werden."
            }
        }, {
            text: "Nach dem Zusammenhang zwischen NeuroSynth und der Klinik fragen",
            nextId: "scene_company_clinic",
            addClue: {
                id: "front_operation",
                text: "Die psychiatrische Einrichtung auf Raven Island wird heimlich von NeuroSynth finanziert und dient als Testgelände."
            }
        }]
    }, scene_symbol_meaning: {
        text: "Die Schwester kommt näher. Elena greift hastig nach deiner Hand, drückt sie fest. 'Das Symbol ist der Schlüssel', flüstert sie eindringlich. 'Es ist ein Durchgang - zwischen hier und dort, zwischen dem, was wir zu wissen glauben und der Wahrheit.' Ihre Finger graben sich in deinen Arm. 'Sie öffnen Türen in unseren Köpfen, die geschlossen bleiben sollten.' Die Schwester ist nur noch wenige Meter entfernt. 'Mitternacht. Im Keller unter dem Leuchtturm. Wenn die Flut niedrig ist.' Dann lässt sie dich los, ihr Gesicht wird ausdruckslos. 'Danke für das nette Gespräch', sagt sie laut. Die Schwester lächelt mechanisch. 'Zeit für Ihre Medikamente, Frau Krüger.' Du bemerkst ein kurzes Flackern von Panik in Elenas Augen, bevor sie sich fügt. Die Schwester wirft dir einen prüfenden Blick zu, als kenne sie dich irgendwoher.",
        choices: [{
            text: "Nach den 'Türen in unseren Köpfen' recherchieren",
            nextId: "scene_consciousness_research",
            addClue: {
                id: "mind_control",
                text: "Schäfers Forschung zielte darauf ab, das menschliche Bewusstsein zu erweitern und gleichzeitig manipulierbar zu machen."
            }
        }, {
            text: "Den Keller unter dem Leuchtturm bei Ebbe aufsuchen",
            nextId: "scene_lighthouse_cellar",
            requireClue: "lighthouse_clue",
            addClue: {
                id: "ritual_chamber",
                text: "Der Keller unter dem Leuchtturm wurde zu einer Art Ritualkammer umfunktioniert, mit seltsamen Symbolen an den Wänden."
            }
        }, {
            text: "Die Schwester konfrontieren, warum sie dich seltsam anschaut",
            nextId: "scene_nurse_confrontation",
            addClue: {
                id: "recognition",
                text: "Die Schwester Maria Becker scheint dich zu erkennen, verweigert aber jede direkte Antwort."
            }
        }]
    },

    scene_experimental_therapy: {
        text: "'Experimentelle Therapie?' wiederholst du, während du Hoffmann genau beobachtest. Er steht auf, schließt die Tür seines Büros. 'Was ich Ihnen jetzt sage, ist streng vertraulich.' Seine Stimme wird leiser. 'Wir haben traditionelle Therapiemethoden an ihre Grenzen gebracht. Medikamente, Gesprächstherapie - bei manchen Patienten reicht das nicht.' Er holt tief Luft. 'Projekt Rabe kombiniert neuartige psychoaktive Substanzen mit gezielter neuraler Stimulation. Wir können damit direkt... nun, sagen wir, direkt an den Fundamenten der Persönlichkeit arbeiten.' Seine Augen leuchten ungesund. 'Wir haben Patienten, die jahrelang in Wahnwelten lebten, zurück in die Realität geholt. Andere konnten traumatische Erinnerungen vollständig neu kontextualisieren.' Er zögert. 'Schäfer war ein Spezialfall. Er half uns anfangs sogar bei der Weiterentwicklung der Substanzen. Bis zu seinem... Rückfall.'",
        choices: [{
            text: "Nach den Nebenwirkungen der Behandlung fragen",
            nextId: "scene_side_effects",
            addClue: {
                id: "identity_loss",
                text: "Einige Patienten verlieren nach der Behandlung jegliches Gefühl für ihre eigene Identität oder entwickeln vollkommen neue Persönlichkeiten."
            }
        }, {
            text: "Fragen, warum Schäfer 'zurückfiel'", nextId: "scene_schaefer_relapse", addClue: {
                id: "rebellion",
                text: "Schäfers 'Rückfall' war möglicherweise eine bewusste Rebellion gegen das Projekt, nachdem er dessen wahren Zweck erkannte."
            }
        }, {
            text: "Wissen wollen, wie viele Patienten bereits behandelt wurden",
            nextId: "scene_patient_numbers",
            addClue: {
                id: "expanding_tests",
                text: "Die Tests wurden von einzelnen Patienten auf ganze Stationen ausgeweitet - inzwischen auch auf Personal, das nichts davon weiß."
            }
        }]
    },

    scene_underground: {
        text: "Das rhythmische Klopfen lockt dich nach unten. Im Erdgeschoss des Leuchtturms findest du nichts Auffälliges, doch das Geräusch scheint aus dem Boden zu kommen. Du entdeckst eine verborgene Falltür unter einem alten Teppich. Sie ist nicht verschlossen. Eine feuchte, modrige Steintreppe führt in die Dunkelheit. Mit der Taschenlampe deines Handys leuchtest du den Weg. Der Tunnel ist älter als der Leuchtturm, aus grob behauenen Steinen. Das Klopfen wird lauter. Nach etwa fünfzig Metern öffnet sich der Gang in einen runden Raum. Dein Atem stockt. An den Wänden sind hunderte von Symbolen eingeritzt - das gleiche Symbol wie auf dem Zettel. In der Mitte des Raumes steht ein steinerner Altar. Das Klopfen verstummt plötzlich. Stattdessen hörst du nun ein leises Flüstern, das aus den Wänden selbst zu kommen scheint. Du findest ein Notizbuch auf dem Altar, daneben eine seltsame Apparatur - medizinische Technik vermischt mit altertümlichen Elementen.",
        choices: [{
            text: "Das Notizbuch untersuchen", nextId: "scene_altar_notebook", addClue: {
                id: "ritual_details",
                text: "Das Notizbuch dokumentiert 'Übergänge' - scheinbar bewusstseinsverändernde Rituale, die mit Schäfers Medikamenten durchgeführt wurden."
            }
        }, {
            text: "Die Apparatur genauer betrachten", nextId: "scene_strange_device", addClue: {
                id: "consciousness_machine",
                text: "Die Apparatur scheint dafür konzipiert zu sein, bewusstseinsverändernde Substanzen mit elektrischen Impulsen zu synchronisieren."
            }
        }, {
            text: "Dem Flüstern der Wände lauschen", nextId: "scene_whispers", addClue: {
                id: "other_side",
                text: "Das Flüstern besteht aus Stimmen, die teilweise von 'der anderen Seite' zu kommen scheinen - möglicherweise Halluzinationen oder etwas Unheimlicheres."
            }
        }]
    },

    scene_tech_confrontation: {
        text: "'Das ist kein Systemfehler', sagst du bestimmt und deutest auf den eingefrorenen Bildschirm. 'Ich habe deutlich eine dritte Person gesehen.' Lena Vogt und Dr. Hoffmann tauschen beunruhigte Blicke aus. 'Robert, seien Sie vernünftig', beginnt Hoffmann. Die Verwendung deines Vornamens irritiert dich - hat er ihn überhaupt schon einmal benutzt? 'Wir haben nichts zu verbergen.' Vogt tippt unterdessen hektisch auf ihrer Tastatur. 'Es tut mir leid, aber diese Dateien sind beschädigt. Wir können sie nicht wiederherstellen.' Ihre Finger bewegen sich jedoch in einer Weise, die mehr nach Löschen als nach Reparieren aussieht. Als du einen Schritt näher trittst, stellt sich Hoffmann dir in den Weg. 'Vielleicht sollten Sie sich ausruhen. Der Sturm, die Anspannung... Sie sehen erschöpft aus.' Seine Hand greift nach etwas in seiner Tasche. Du bemerkst eine kleine Kamera in der Ecke des Raumes, die sich direkt auf dich richtet.",
        choices: [{
            text: "Vorgeben nachzugeben, aber später heimlich zurückkehren",
            nextId: "scene_late_night_investigation",
            addClue: {
                id: "evidence_tampering",
                text: "Nachts werden systematisch Überwachungsaufnahmen gelöscht und manipuliert, um bestimmte Aktivitäten zu verbergen."
            }
        }, {
            text: "Auf der Stelle Antworten verlangen und Hoffmann konfrontieren",
            nextId: "scene_direct_confrontation",
            addClue: {
                id: "defensive_reaction",
                text: "Wenn direkt konfrontiert, werden Hoffmann und sein Personal sofort defensiv und versuchen, dich zu sedieren."
            }
        }, {
            text: "Die Kamera in der Ecke fixieren und fragen, wer alles überwacht wird",
            nextId: "scene_surveillance_question",
            addClue: {
                id: "watched_detective",
                text: "Du wirst seit deiner Ankunft auf der Insel besonders intensiv überwacht, als wäre deine Präsenz selbst Teil eines Experiments."
            }
        }]
    },

    scene_headache: {
        text: "Du reibst dir die Schläfen. 'Entschuldigung, ich habe plötzlich starke Kopfschmerzen.' Dr. Hoffmann betrachtet dich mit einer seltsamen Mischung aus Besorgnis und... Interesse? 'Das ist nicht ungewöhnlich. Der Sturm, der Luftdruck.' Er greift nach einer Schublade seines Schreibtisches. 'Ich kann Ihnen etwas geben, das hilft.' - 'Nein danke', lehnst du ab, 'es geht schon.' Der Schmerz pulsiert hinter deinen Augen, begleitet von Bildern, die keinen Sinn ergeben: ein Krankenzimmer, eine Frau, die schreit, deine Hände mit Blut bedeckt. Hoffmann beobachtet dich aufmerksam. 'Haben Sie Erinnerungslücken, Robert? Momente der Verwirrung?' Seine Stimme klingt nun sanfter, therapeutischer. 'Viele Menschen, die traumatische Erlebnisse hatten, erschaffen sich Schutzschilde in ihrem Bewusstsein.' Du willst antworten, doch der Schmerz verstärkt sich. 'Was wissen Sie über mich?', fragst du mit plötzlichem Misstrauen.",
        choices: [{
            text: "Nach Wasser fragen und die angebotene Medizin akzeptieren",
            nextId: "scene_medication",
            addClue: {
                id: "strange_pills",
                text: "Die Medikamente, die dir Hoffmann gibt, verursachen seltsame Träume, in denen du dich selbst als Patient auf Raven Island siehst."
            }
        }, {
            text: "Auf deine eigene Vergangenheit bestehen und mehr Informationen verlangen",
            nextId: "scene_identity_crisis",
            addClue: {
                id: "forgotten_past",
                text: "In deinen Unterlagen und persönlichen Gegenständen gibt es widersprüchliche Hinweise auf deine wahre Identität."
            }
        }, {
            text: "Die beunruhigenden Bilder in deinem Kopf genauer analysieren",
            nextId: "scene_vision_analysis",
            addClue: {
                id: "suppressed_memories",
                text: "Die aufblitzenden Erinnerungen könnten auf ein traumatisches Ereignis hindeuten, das mit dem Tod einer Frau zusammenhängt."
            }
        }]
    }, scene_altar_notebook: {
        text: "Mit zitternden Händen schlägst du das Notizbuch auf. Die ersten Seiten sind mit schematischen Zeichnungen des Symbols gefüllt, mit Anmerkungen in einer präzisen Handschrift - Schäfers Handschrift, wie du vermutest. 'Der Durchgang ist keine Metapher', liest du. 'Realitätsebenen sind durchlässiger als angenommen.' Weiter hinten werden die Einträge systematischer, fast wie Laborprotokolle. 'Versuch 17: Kombination von Substanz R-7 mit elektrischer Stimulation während des Rituals. Proband zeigte 72 Sekunden lang Anzeichen von Dissoziation, berichtete anschließend von 'Stimmen jenseits der Schwelle'.' Auf den letzten beschriebenen Seiten wird die Handschrift hektischer. 'Sie benutzen uns alle. Weber hatte Recht. Die Tür geht in beide Richtungen. Was auf der anderen Seite ist, will HEREIN.' Die letzte Seite enthält nur einen Satz: 'Wenn du das liest, Robert, dann weißt du bereits zu viel oder zu wenig.'",
        choices: [{
            text: "Über die Erwähnung deines Namens nachdenken",
            nextId: "scene_name_mention",
            addClue: {
                id: "prior_connection",
                text: "Du scheinst eine vorherige Verbindung zu Schäfer zu haben, die aus deinem Gedächtnis gelöscht wurde."
            }
        }, {
            text: "Nach weiteren Informationen zu 'Substanz R-7' suchen",
            nextId: "scene_substance_search",
            addClue: {
                id: "raven_serum",
                text: "Substanz R-7 ('Raven Serum') ist eine Weiterentwicklung von Schäfers ursprünglicher Forschung, die Wahrnehmungsbarrieren auflösen kann."
            }
        }, {
            text: "Die Lage des Ortes verlassen, bevor jemand dich entdeckt",
            nextId: "scene_escape_chamber",
            addClue: {
                id: "followed",
                text: "Auf dem Rückweg bemerkst du Fußspuren im feuchten Boden, die nicht von dir stammen – jemand war nach Schäfer hier oder beobachtet den Ort."
            }
        }]
    },

    scene_identity_crisis: {
        text: "'Meine Vergangenheit?' fragst du scharf. 'Was wissen Sie über mich?' Hoffmann betrachtet dich mit einem Ausdruck, der zwischen Mitgefühl und Kalkül schwankt. 'Robert Weber, 41 Jahre alt. Privatdetektiv seit zwölf Jahren, spezialisiert auf Vermisste. Vorher...' Er zögert bedeutungsvoll. 'Vorher Polizist, bis zu dem... Vorfall.' Dein Kopf schmerzt stärker. Welcher Vorfall? Du erinnerst dich an deine Polizeizeit, aber da war nichts Besonderes. Oder? 'Ihre Frau, Robert', sagt Hoffmann sanft. 'Sie haben nie darüber gesprochen?' Ein Bild blitzt vor deinem inneren Auge auf: eine Frau mit langen dunklen Haaren, ein Lächeln. Dann Blut. So viel Blut. 'Ich bin nicht verheiratet', sagst du, aber deine Stimme klingt unsicher. Hoffmann seufzt. 'Interessant.' Er öffnet eine Schublade, nimmt eine Akte heraus. 'Vielleicht wird es Zeit, dass wir ehrlich zueinander sind.'",
        choices: [{
            text: "Die Akte anschauen, die Hoffmann dir anbietet",
            nextId: "scene_personal_file",
            addClue: {
                id: "patient_weber",
                text: "Die Akte enthält Aufnahmeunterlagen für einen Patienten namens Robert Weber, mit deinem Foto, aber einer anderen Lebensgeschichte."
            }
        }, {
            text: "Dich auf deine Erinnerungen konzentrieren und versuchen, den 'Vorfall' zu rekonstruieren",
            nextId: "scene_memory_reconstruction",
            addClue: {
                id: "trauma_flashbacks",
                text: "Bruchstücke einer traumatischen Erinnerung tauchen auf: Stimmen, ein Streit, eine Waffe in deiner Hand, eine Frau, die zu Boden fällt."
            }
        }, {
            text: "Hoffmann beschuldigen, mit deinem Verstand zu spielen und Druck machen",
            nextId: "scene_hoffmann_confrontation",
            addClue: {
                id: "defensive_doctor",
                text: "Hoffmann reagiert defensiv und ruft Sicherheitspersonal, als würde er ein vorbereitetes Protokoll für einen 'instabilen Patienten' befolgen."
            }
        }]
    },

    scene_lighthouse_cellar: {
        text: "Bei Ebbe kehrst du zum Leuchtturm zurück. Die unterirdische Kammer, die du zuvor entdeckt hast, führt weiter, als du zunächst dachtest. Ein schmaler Durchgang, nur bei Niedrigwasser zugänglich, verläuft in die felsige Küste hinein. Du zwängst dich hindurch, das Wasser reicht dir noch bis zu den Knöcheln. Der Gang mündet in eine größere natürliche Höhle, die kunstvoll erweitert wurde. Was du siehst, verschlägt dir den Atem: Ein kreisförmiger Raum mit sieben steinernen Säulen. Zwischen ihnen sind moderne medizinische Geräte aufgebaut - Monitore, Infusionsständer, EEG-Maschinen. In der Mitte steht ein Stuhl, der an einen elektrischen Stuhl erinnert, mit Gurten und Elektroden. Die Wände sind mit dem Symbol übersät, das du nun schon kennst. Auf einem der Monitore läuft eine Videoschleife: Patienten, die an den Stuhl geschnallt werden, Ärzte in Kitteln, die Injektionen verabreichen. Die Patienten schreien stumm, ihre Körper verkrampfen sich. Dann erschlaffen sie, bevor sie mit leeren Augen aufwachen und zu sprechen beginnen - aber ihre Lippen bewegen sich nicht synchron mit den Worten.",
        choices: [{
            text: "Das Video genauer analysieren", nextId: "scene_ritual_recording", addClue: {
                id: "possession_evidence",
                text: "Das Video dokumentiert, was wie eine Art Persönlichkeitstransfer oder -überlagerung aussieht, bei der die Patienten eine fremdartige Präsenz zu beherbergen scheinen."
            }
        }, {
            text: "Die medizinischen Geräte untersuchen",
            nextId: "scene_equipment_analysis",
            addClue: {
                id: "reality_manipulation",
                text: "Die Geräte sind für 'gezielte Bewusstseinsmodifikation' konzipiert, mit Einstellungen für 'Auflösung der Ich-Grenzen' und 'Öffnung der mentalen Schwelle'."
            }
        }, {
            text: "Nach Hinweisen auf Schäfers Verbleib suchen",
            nextId: "scene_schaefer_traces",
            addClue: {
                id: "escape_plan",
                text: "Schäfer hat einen Plan hinterlassen, wie er die Insel verlassen wollte - mit einem Boot, das an der Westküste versteckt ist."
            }
        }]
    },

    scene_side_effects: {
        text: "'Nebenwirkungen?' wiederholst du. 'Bei experimentellen Behandlungen gibt es doch immer unerwartete Effekte.' Hoffmann zuckt leicht zusammen, fasst sich aber schnell wieder. 'Natürlich, wie bei jeder Pionierarbeit.' Er räuspert sich. 'Manche Patienten erleben vorübergehende Desorientierung. Andere berichten von... nun, sagen wir, verstärkten Sinneswahrnehmungen. Synästhesie, erweiterte Wahrnehmung.' Er senkt die Stimme. 'Einige wenige Fälle waren problematischer. Persönlichkeitsveränderungen. Identitätsverlust.' Seine Augen fixieren dich durchdringend. 'Stellen Sie sich vor, wer Sie sind, Ihre ganze Identität, löst sich auf. Und was bleibt, ist ein... leeres Gefäß.' Ein kalter Schauer läuft dir über den Rücken. 'Glücklicherweise konnten wir bei fast allen Patienten wieder eine stabile Persönlichkeit etablieren.' - 'Fast allen?', hakst du nach. 'Nun', entgegnet Hoffmann mit einem dünnen Lächeln, 'manche sind noch in Behandlung. Die Frage ist immer: Wer willst du sein, wenn du die Wahl hast?'",
        choices: [{
            text: "Nach den aktuellen 'Problemfällen' fragen",
            nextId: "scene_problem_cases",
            addClue: {
                id: "special_patients",
                text: "Im Ostflügel werden Patienten mit besonders schweren 'Nebenwirkungen' isoliert - einige scheinen multiple Persönlichkeiten entwickelt zu haben."
            }
        }, {
            text: "Wissen wollen, wie genau die 'stabile Persönlichkeit' wieder etabliert wird",
            nextId: "scene_personality_reconstruction",
            addClue: {
                id: "identity_implantation",
                text: "Mit einer Kombination aus Medikamenten, Hypnose und gefälschten 'Erinnerungsstützen' werden Patienten neue Identitäten implantiert."
            }
        }, {
            text: "Nach der ethischen Grundlage des Projekts fragen",
            nextId: "scene_ethics_question",
            addClue: {
                id: "military_oversight",
                text: "Das Projekt untersteht keiner normalen ethischen Aufsicht, sondern einer militärischen Sondererlaubnis für 'Forschung im nationalen Interesse'."
            }
        }]
    },

    scene_late_night_investigation: {
        text: "Lange nach Mitternacht schleichst du zurück zum Überwachungsraum. Die Gänge der Klinik sind gespenstisch still, nur gedämpfte Geräusche dringen aus manchen Patientenzimmern. Mit dem Schlüssel, den du heimlich kopiert hast, öffnest du die Tür. Der Raum liegt im Dunkeln, nur die Monitore werfen ein bläuliches Licht. Du setzt dich an den Hauptcomputer. Das Passwort zu knacken dauert länger als erhofft, aber schließlich gewährst du dir Zugang zu den Archiven. Was du findest, bestätigt deine Befürchtungen: Systematisch gelöschte Dateien, manipulierte Zeitstempel. In einem versteckten Ordner entdeckst du die originalen Aufnahmen: Patienten, die nachts aus ihren Zimmern geholt werden. Ärzte, die seltsame Apparaturen transportieren. Und dann findest du eine Aufnahme, die dich erstarren lässt: Du selbst, in Patientenkleidung, wirst von zwei Pflegern durch einen Korridor geführt. Das Datum: zwei Wochen vor deiner vermeintlichen Ankunft als Detektiv. Ein Geräusch an der Tür lässt dich aufschrecken.",
        choices: [{
            text: "Die Datei schnell auf einen USB-Stick kopieren und fliehen",
            nextId: "scene_evidence_secured",
            addClue: {
                id: "video_proof",
                text: "Du besitzt nun Beweise, dass du bereits vor deiner 'Ankunft' als Patient auf der Insel warst."
            }
        }, {
            text: "Dich verstecken und beobachten, wer den Raum betritt",
            nextId: "scene_midnight_visitor",
            addClue: {
                id: "night_protocol",
                text: "Dr. Schneider und Schwester Maria führen nächtliche Kontrollen durch, um sicherzustellen, dass keine Beweise zurückbleiben."
            }
        }, {
            text: "Nach weiteren Aufnahmen von dir suchen",
            nextId: "scene_self_recordings",
            addClue: {
                id: "treatment_sessions",
                text: "Es existieren mehrere Aufnahmen deiner 'Behandlungssitzungen', in denen du einer Gehirnwäsche unterzogen wirst, um dich glauben zu lassen, du seist ein Detektiv."
            }
        }]
    }, scene_evidence_secured: {
        text: "Mit zitternden Fingern kopierst du die Datei auf einen USB-Stick, den du in der Schreibtischschublade gefunden hast. Das Geräusch an der Tür wird lauter – jemand versucht, hereinzukommen. Du ziehst den Stick ab, schaltest den Computer aus und hetzt zum Fenster. Es ist klein, aber du kannst dich hindurchzwängen. Gerade als die Tür aufgeht, gleitest du ins Freie. In der Dunkelheit hörst du eine verärgerte Stimme: 'Er war hier. Verdammt!' Es ist Dr. Schneider. Du drückst dich an die Wand, während Taschenlampen den Boden absuchen. Mit dem Stick fest in deiner Hand schleichst du zurück zu deinem Zimmer – nicht dem Gästezimmer, das man dir als 'Detektiv' zugewiesen hat, sondern zu den Patientenunterkünften im Westflügel. Ein Impuls, den du nicht erklären kannst, führt dich zu Zimmer W-117. Der Schlüssel in deiner Tasche passt. Im Inneren findest du ein spartanisch eingerichtetes Zimmer mit einem Bett, einem Schreibtisch und persönlichen Gegenständen – deinen persönlichen Gegenständen. Ein Foto deiner Frau. Briefe mit deiner Handschrift. Tagebucheinträge, die deine 'Behandlung' dokumentieren. Die Wahrheit ist unausweichlich: Du bist Patient Robert Weber, nicht Detektiv.",
        choices: [{
            text: "Die Beweise analysieren und die Wahrheit über deine Vergangenheit herausfinden",
            nextId: "scene_truth_revealed",
            addClue: {
                id: "real_identity",
                text: "Du warst ein Polizist, der nach dem Tod seiner Frau einen Nervenzusammenbruch erlitt und eine alternative Realität erschuf, in der du als Detektiv arbeitest."
            }
        }, {
            text: "Die Beweise als Teil der Verschwörung betrachten – ein ausgeklügelter Versuch, dich in den Wahnsinn zu treiben",
            nextId: "scene_conspiracy_fight",
            addClue: {
                id: "elaborate_setup",
                text: "Die Raven Island-Klinik könnte ein komplexes Setup sein, um dich zu diskreditieren, weil du der Verschwörung zu nahe gekommen bist."
            }
        }, {
            text: "Schäfers Notizen und das Video zusammenbringen – könnte eine 'Persönlichkeitsübertragung' stattgefunden haben?",
            nextId: "scene_transfer_theory",
            addClue: {
                id: "identity_transfer",
                text: "Die Experimente könnten dazu geführt haben, dass Schäfers Bewusstsein oder Persönlichkeitselemente auf dich übertragen wurden."
            }
        }]
    },

    scene_ritual_recording: {
        text: "Du spulst das Video zurück und beobachtest den Prozess von Anfang an. Ärzte in weißen Kitteln, darunter Hoffmann und Schneider, bereiten einen Patienten vor. Er bekommt eine Injektion – vermutlich Substanz R-7. Elektroden werden an seinem Kopf befestigt. Sieben Personen stellen sich um den Stuhl, jede neben einer der Säulen. Sie tragen Masken – nicht medizinische, sondern rituelle, mit dem Symbol darauf. Sie beginnen einen monotonen Gesang, während die Maschinen summen. Der Patient verkrampft sich, sein Körper bäumt sich auf. Auf den Monitoren siehst du wilde EEG-Ausschläge, als würde sein Gehirn überaktiviert. Dann erschlafft er plötzlich. Stille. Als er die Augen wieder öffnet, scheint etwas anders. Er spricht, aber seine Stimme klingt fremd, tiefer, mit einem seltsamen Akzent. 'Transfer erfolgreich', notiert Schneider. 'Subjekt C-7 hat die Schwelle überschritten.' Der Patient – oder was auch immer jetzt in ihm ist – schaut direkt in die Kamera und lächelt auf eine Weise, die dir das Blut in den Adern gefrieren lässt. 'Weitere Gefäße werden benötigt', sagt die fremde Stimme. 'Die Durchquerung beginnt.'",
        choices: [{
            text: "Nach weiteren Informationen über 'Subjekt C-7' und die 'Durchquerung' suchen",
            nextId: "scene_crossing_research",
            addClue: {
                id: "invasion_plan",
                text: "Die 'Durchquerung' scheint ein Plan zu sein, bei dem Wesenheiten aus einer anderen Realitätsebene in menschliche 'Gefäße' transferiert werden."
            }
        }, {
            text: "Die Identitäten der maskierten Personen herausfinden wollen",
            nextId: "scene_cultists_identities",
            addClue: {
                id: "inner_circle",
                text: "Der 'innere Kreis' besteht aus Schlüsselfiguren der Klinik sowie einflussreichen externen Personen, darunter General Weiss."
            }
        }, {
            text: "Eine Kopie des Videos sichern und fliehen",
            nextId: "scene_escape_with_evidence",
            addClue: {
                id: "cult_exposure",
                text: "Das Video ist ein entscheidender Beweis für die wahre Natur der Experimente und könnte die Verschwörung aufdecken."
            }
        }]
    },

    scene_personal_file: {
        text: "Du nimmst die Akte, die Hoffmann dir reicht. Dein Herz rast, während du sie öffnest. Das erste Blatt trifft dich wie ein Schlag: ein Aufnahmebogen für die psychiatrische Einrichtung Raven Island. Patient: Robert Weber. Dein Name. Dein Geburtsdatum. Dein Foto, aber du siehst anders aus – erschöpft, verwirrt, mit leerem Blick. Diagnose: Akute Psychose mit dissoziativen Elementen nach traumatischem Ereignis. Du blätterst weiter, liest Behandlungsnotizen, Medikamentenlisten. Aufnahmedatum: drei Monate zuvor. Der letzte Eintrag, von vor zwei Wochen: 'Patient zeigt gutes Ansprechen auf experimentelle Therapie. Rollenspiel-Ansatz implementiert. Überwachte Wiedereinführung in kontrollierte Umgebung geplant.' Hoffmann beobachtet deine Reaktion. 'Es tut mir leid, Robert', sagt er sanft. 'Wir dachten, dieser Ansatz könnte helfen. Dich Schritt für Schritt zur Wahrheit führen.' Er nimmt ein Foto aus der Akte – du und eine dunkelhaarige Frau, lächelnd. 'Erinnerst du dich an Christine? Deine Frau?'",
        choices: [{
            text: "Die Echtheit der Akte anzweifeln und Hoffmann der Manipulation beschuldigen",
            nextId: "scene_denial",
            addClue: {
                id: "fabricated_evidence",
                text: "Die Dokumente könnten gefälscht sein, um dich an deiner eigenen Identität zweifeln zu lassen – Teil des Experiments."
            }
        }, {
            text: "Versuchen, dich an Christine zu erinnern",
            nextId: "scene_wife_memory",
            addClue: {
                id: "tragedy_truth",
                text: "Erinnerungsfragmente kehren zurück: ein Streit, eine Waffe, ein schrecklicher Unfall – du hast deine Frau getötet und konntest die Schuld nicht ertragen."
            }
        }, {
            text: "Nach den Details der 'experimentellen Therapie' und des 'Rollenspiel-Ansatzes' fragen",
            nextId: "scene_therapy_details",
            addClue: {
                id: "controlled_delusion",
                text: "Die Klinik nutzt kontrollierte Wahnvorstellungen als Therapie, lässt Patienten Rollen spielen, um traumatische Erinnerungen schrittweise zu verarbeiten."
            }
        }]
    },

    scene_personality_reconstruction: {
        text: "'Wie genau stellen Sie eine 'stabile Persönlichkeit' wieder her?', fragst du, während du Hoffmann scharf beobachtest. Er wirkt kurz unbehaglich, entscheidet sich dann aber für Offenheit. 'Der menschliche Geist braucht eine kohärente Erzählung. Eine Geschichte, die Sinn ergibt.' Er steht auf, geht zum Fenster. 'Wenn die ursprüngliche Persönlichkeit... kompromittiert ist, können wir eine neue schaffen.' Er dreht sich zu dir um, seine Augen glänzen fast fanatisch. 'Wir verwenden eine Kombination aus gezielter Medikation, Hypnosetechniken und sogenannten Ankerreizen – Fotos, Briefe, persönliche Gegenstände – um eine neue Identität zu verankern.' Er lächelt dünn. 'Es ist erstaunlich, wie leicht das Gehirn eine neue Geschichte akzeptiert, wenn die alte zu schmerzhaft ist. Die Kunst liegt darin, eine Identität zu konstruieren, die zum Grundgerüst der Persönlichkeit passt.' Er fixiert dich intensiv. 'Manchmal ist die neue Identität sogar besser als die ursprüngliche. Stabiler. Nützlicher.'",
        choices: [{
            text: "Nach der ethischen Grundlage dieser Praktiken fragen",
            nextId: "scene_ethics_dilemma",
            addClue: {
                id: "utilitarian_approach",
                text: "Die Klinikleitung rechtfertigt ihre Methoden mit dem 'größeren Wohl' und der 'Heilung' von sonst unheilbaren Patienten."
            }
        }, {
            text: "Wissen wollen, wie viele Patienten dieser Prozedur unterzogen wurden",
            nextId: "scene_experiment_scale",
            addClue: {
                id: "mass_manipulation",
                text: "Fast alle Patienten auf Raven Island sind 'rekonstruierte Persönlichkeiten', einige mehrfach – ein Experiment in beispiellosem Ausmaß."
            }
        }, {
            text: "Fragen, ob dieser Prozess bei dir angewendet wurde",
            nextId: "scene_personal_reconstruction",
            addClue: {
                id: "detective_identity",
                text: "Deine Identität als Detektiv könnte eine sorgfältig konstruierte Illusion sein, erschaffen, um einen traumatischen Zusammenbruch zu überdecken."
            }
        }]
    },

    scene_name_mention: {
        text: "Dein Name in Schäfers Notizbuch lässt dich erstarren. 'Wenn du das liest, Robert, dann weißt du bereits zu viel oder zu wenig.' Es ist, als hätte er gewusst, dass du kommen würdest. Als hätte er dich gekannt. Aber wie? Du durchsuchst das Notizbuch erneut, suchst nach weiteren Erwähnungen deines Namens. Auf einer der frühen Seiten findest du einen Eintrag: 'Weber macht Fortschritte. Seine Widerstandsfähigkeit gegen R-7 ist bemerkenswert. Möglicherweise der ideale Kandidat für Phase 3.' Und später: 'Weber verändert sich. Er beginnt Fragen zu stellen. Zu gefährlich. Hoffmann will ihn zurücksetzen.' Auf der vorletzten Seite ein hastig geschriebener Absatz: 'Sie haben Weber neu programmiert. Aus dem Forscher einen Detektiv gemacht. Ironisch. Sie wissen nicht, dass ich Vorkehrungen getroffen habe. Erinnerungsfragmente, eingebettet in seinem Unterbewusstsein. Die Wahrheit wird durchsickern.' Ein Geräusch lässt dich aufschrecken – Schritte nähern sich dem Leuchtturm.",
        choices: [{
            text: "Fliehen und das Notizbuch mitnehmen",
            nextId: "scene_escape_with_diary",
            addClue: {
                id: "embedded_memories",
                text: "Schäfer hat 'Erinnerungsfragmente' in deinem Bewusstsein versteckt, die durch bestimmte Trigger aktiviert werden können."
            }
        }, {
            text: "Dich verstecken und beobachten, wer kommt",
            nextId: "scene_lighthouse_visitor",
            addClue: {
                id: "elena_connection",
                text: "Elena Krüger hat den Leuchtturm aufgesucht und scheint mit Schäfers Plan verbunden zu sein, dir zu helfen."
            }
        }, {
            text: "Über deine mögliche Rolle als 'Forscher' nachdenken",
            nextId: "scene_researcher_past",
            addClue: {
                id: "former_scientist",
                text: "Du warst möglicherweise Teil des Forschungsteams von Projekt Rabe, bevor deine Erinnerungen manipuliert wurden."
            }
        }]
    }, scene_truth_revealed: {
        text: "Mit zitternden Händen sichtest du die Beweise in deinem – in Robert Webers – Patientenzimmer. Ein Tagebuch dokumentiert deinen Zusammenbruch nach dem Tod deiner Frau. Mit jedem Wort, das du liest, kehren Erinnerungsfragmente zurück. Der Streit in jener Nacht. Du hattest getrunken. Christine wollte gehen, dich verlassen. Deine Dienstwaffe lag auf dem Tisch. Was als Einschüchterung gedacht war, endete in einer Tragödie. Die Waffe ging los. Ihr Blut an deinen Händen. Dein Verstand zerbrach unter der Last der Schuld. Du blätterst weiter – Aufzeichnungen deiner Behandlung, zunächst konventionell, dann der Transfer in das experimentelle Programm auf Raven Island. 'Patient hat alternative Realität erschaffen, in der er als Detektiv Verbrechen aufklärt – klassischer Kompensationsmechanismus.' Mit jedem gelesenen Wort wird die Illusion brüchiger. Dein angeblicher 'Fall' – das Verschwinden von Eric Schäfer – war nur ein therapeutisches Konstrukt, eine kontrollierte Umgebung, in der du dich deiner Schuld stellen solltest. Als die letzte Seite umgeblättert ist, sitzt du in Stille. Die Wahrheit ist unwiderlegbar. Du bist nicht hier, um einen Fall zu lösen. Du bist der Fall.",
        choices: [{
            text: "Die Wahrheit akzeptieren und dich freiwillig der Behandlung stellen",
            nextId: "scene_acceptance",
            addClue: {
                id: "path_to_healing",
                text: "Der Weg zur Heilung beginnt mit der Akzeptanz der eigenen Schuld und Identität – ein schwerer, aber notwendiger Schritt."
            }
        }, {
            text: "Trotz der Beweise an deiner Identität als Detektiv festhalten",
            nextId: "scene_stubborn_denial",
            addClue: {
                id: "delusion_persistence",
                text: "Dein Verstand klammert sich an die Detektiv-Identität, möglicherweise als letzten Schutz vor der unerträglichen Wahrheit."
            }
        }, {
            text: "Einen dritten Weg suchen – war Schäfer wirklich nur ein Konstrukt?",
            nextId: "scene_third_option",
            requireClue: "researcher_past",
            addClue: {
                id: "dual_truth",
                text: "Zwei Wahrheiten können koexistieren: Du bist Patient mit traumatischer Vergangenheit UND Zeuge einer realen Verschwörung auf der Insel."
            }
        }]
    },

    scene_crossing_research: {
        text: "In einer versteckten Ecke des Kellerraums entdeckst du einen versiegelten Metallschrank. Das Schloss zu knacken dauert, aber schließlich öffnet er sich und gibt den Blick auf ordentlich gestapelte Forschungsunterlagen frei. 'Projekt Durchquerung – Streng Geheim' steht auf dem obersten Ordner. Die Dokumente enthüllen eine erschreckende Wahrheit: Was als medizinisches Experiment begann, hat sich in etwas völlig anderes verwandelt. Die ersten Seiten dokumentieren Schäfers ursprüngliche Forschung zu Bewusstseinsmanipulation. Dann ein unerwarteter Durchbruch: Während eines Tests mit Substanz R-7 berichtete ein Patient von 'Stimmen aus einer anderen Dimension'. Weitere Tests bestätigten das Phänomen. Eine Notiz von Dr. Hoffmann: 'Wir haben versehentlich eine Tür geöffnet.' Die folgenden Protokolle dokumentieren zunehmend strukturierte 'Kommunikation' mit Wesenheiten, die sich selbst als 'Die Wartenden' bezeichnen. Ihre Botschaft: Sie existieren in einer Parallelrealität und suchen 'Gefäße' für die 'Durchquerung'. Der letzte Eintrag, unterzeichnet von General Weiss: 'Phase 3 genehmigt. Vollständige Integration von sieben Primär-Entitäten in vorbereitete Wirte. Massendurchquerung in Vorbereitung.'",
        choices: [{
            text: "Die Unterlagen sichern und die Insel verlassen, um Hilfe zu holen",
            nextId: "scene_escape_attempt",
            addClue: {
                id: "invasion_evidence",
                text: "Die Dokumente beweisen einen Plan zur systematischen 'Übernahme' menschlicher Wirte durch außerdimensionale Wesenheiten."
            }
        }, {
            text: "Versuchen, die 'Primär-Entitäten' und ihre 'Wirte' zu identifizieren",
            nextId: "scene_hosts_identification",
            addClue: {
                id: "possessed_leaders",
                text: "Die sieben 'Primär-Wirte' umfassen Hoffmann, Schneider und fünf weitere Schlüsselfiguren, die bereits vollständig 'übernommen' wurden."
            }
        }, {
            text: "Nach einer Möglichkeit suchen, die 'Tür' wieder zu schließen",
            nextId: "scene_door_closing",
            addClue: {
                id: "reversal_protocol",
                text: "Schäfer hat heimlich an einem 'Umkehrprotokoll' gearbeitet, um die Verbindung zu kappen und die bereits durchgedrungenen Entitäten zu vertreiben."
            }
        }]
    },

    scene_wife_memory: {
        text: "Du starrst auf das Foto, das Hoffmann dir gezeigt hat. Christine. Der Name allein löst eine Flut von Erinnerungen aus. Ihr erstes Treffen in der Polizeikantine. Der Heiratsantrag am Strand. Die kleinen Streitigkeiten und tiefen Versöhnungen. Und dann – jene Nacht. Ihr Gesicht, verzerrt vor Angst, als du die Waffe hobst. 'Es war nur ein Unfall', hattest du immer wieder gemurmelt, während die Sirenen näher kamen. Aber war es das wirklich? Du erinnerst dich an euren Streit. An ihre Drohung, dich zu verlassen. An deine Wut, deinen Kontrollverlust. 'Ich erinnere mich', flüsterst du. Hoffmanns Gesicht zeigt echtes Mitgefühl. 'Das ist gut, Robert. Sehr gut.' Er reicht dir ein Taschentuch – erst jetzt bemerkst du deine Tränen. 'Der Unfall hat dich zerbrochen. Dein Verstand erschuf diese Detektiv-Identität als Schutz. Eine Möglichkeit, Kontrolle und Gerechtigkeit in einer Welt zu finden, die plötzlich keinen Sinn mehr ergab.' Er lehnt sich vor. 'Aber um zu heilen, musst du die Wahrheit akzeptieren. Du bist nicht hier, um einen Vermissten zu finden. Du bist hier, um dich selbst zu finden.'",
        choices: [{
            text: "Die Wahrheit akzeptieren und um Hilfe bei deiner Genesung bitten",
            nextId: "scene_healing_begins",
            addClue: {
                id: "redemption_path",
                text: "Die Akzeptanz deiner wahren Geschichte öffnet den Weg zur Heilung und möglicherweise zur Vergebung."
            }
        }, {
            text: "Nach weiteren Beweisen für deine Identität als Patient suchen",
            nextId: "scene_evidence_hunt",
            addClue: {
                id: "medical_records",
                text: "Deine vollständige Krankenakte enthält Details über deinen Zusammenbruch und die fortschreitende Behandlung auf Raven Island."
            }
        }, {
            text: "Fragen, wie Schäfers Geschichte in deine Behandlung passt",
            nextId: "scene_schaefer_connection",
            requireClue: "secret_project",
            addClue: {
                id: "dual_purpose",
                text: "Deine 'Detektiv'-Therapie hatte einen Doppelzweck: deine Heilung und gleichzeitig die Suche nach dem tatsächlich verschwundenen Schäfer."
            }
        }]
    },

    scene_researcher_past: {
        text: "Die Erwähnung deiner möglichen Vergangenheit als Forscher löst eine Kaskade fragmentierter Erinnerungen aus. Bilder von Laboren, Computern, endlosen Datenreihen. Du erinnerst dich an Gespräche mit... Schäfer? Ja, ihr wart Kollegen. Freunde sogar. Du siehst dich selbst in einem weißen Kittel, diskutierend über 'Bewusstseinsbarrieren' und 'neuronale Restrukturierung'. Mit jedem Atemzug werden die Erinnerungen klarer. Du warst Dr. Robert Weber, Neuropharmakologie, spezialisiert auf bewusstseinsverändernde Substanzen. Du und Schäfer hattet an dem ursprünglichen Projekt gearbeitet – bis ihr entdecktet, was Hoffmann und General Weiss wirklich damit vorhatten. Du hattest Beweise gesammelt, wolltest an die Öffentlichkeit gehen. Dann Dunkelheit. Eine Injektion in der Nacht. Als du aufwachtest, warst du ein Patient mit einer implantierten Wahnvorstellung vom Tod deiner Frau. Aber Christine lebt. Sie sucht dich wahrscheinlich. Schäfer muss das gewusst haben. Er hat dir Hinweise hinterlassen, um dein wahres Ich wiederzufinden. Eine schwindelerregende Erkenntnis trifft dich: Du bist sowohl Detektiv als auch Patient – aber aus völlig anderen Gründen als gedacht.",
        choices: [{
            text: "Versuchen, deine Forschungsnotizen zu finden",
            nextId: "scene_find_research",
            addClue: {
                id: "hidden_data",
                text: "Deine ursprünglichen Forschungsdaten könnten auf einem versteckten Server oder in einem geheimen Versteck auf der Insel existieren."
            }
        }, {
            text: "Nach einem Weg suchen, Kontakt mit Christine aufzunehmen",
            nextId: "scene_contact_attempt",
            addClue: {
                id: "outside_ally",
                text: "Christine arbeitet mit einer Journalistin zusammen, um die Vorgänge auf Raven Island aufzudecken und dich zu finden."
            }
        }, {
            text: "Die doppelte Manipulation gegen Hoffmann verwenden",
            nextId: "scene_double_agent",
            addClue: {
                id: "strategic_deception",
                text: "Du kannst vorgeben, deine 'Patientenrolle' zu akzeptieren, um Hoffmanns Vertrauen zu gewinnen und mehr über die 'Durchquerung' zu erfahren."
            }
        }]
    },

    scene_escape_with_evidence: {
        text: "Mit klopfendem Herzen kopierst du das Video auf einen USB-Stick, den du in einer Schublade gefunden hast. Du musst von der Insel entkommen, diese Beweise zur Außenwelt bringen. Beim Verlassen des Kellerraums hörst du Stimmen – jemand kommt. Du schleichst durch einen Seitenausgang, der zum Ufer führt. Der Sturm hat nachgelassen, das Meer ist ruhiger geworden. Im schwachen Mondlicht entdeckst du einen kleinen Bootsschuppen. Drinnen: ein Motorboot. Schäfers Fluchtfahrzeug? Als du das Boot startklar machst, bemerkst du eine wasserfeste Tasche unter der Sitzbank. Darin ein Handy, Bargeld, gefälschte Ausweisdokumente auf den Namen 'Thomas Müller' und eine Notiz: 'Wenn du das findest, Robert, dann hast du angefangen, die Wahrheit zu sehen. Vertraue niemandem. Bring die Beweise zu Christine – sie weiß Bescheid. Koordinaten unten.' Plötzlich durchschneiden Scheinwerfer die Dunkelheit. Stimmen rufen, Hunde bellen. Sie haben deine Flucht bemerkt. Das Boot ist startbereit, aber die Verfolger nähern sich schnell.",
        choices: [{
            text: "Sofort fliehen, bevor sie dich erreichen", nextId: "scene_sea_escape", addClue: {
                id: "mainland_journey",
                text: "Die Flucht zum Festland ist riskant, aber deine einzige Chance, die Beweise in Sicherheit zu bringen und die Wahrheit aufzudecken."
            }
        }, {
            text: "Den USB-Stick verstecken und dich stellen, um später einen besseren Fluchtversuch zu unternehmen",
            nextId: "scene_strategic_surrender",
            addClue: {
                id: "playing_patient",
                text: "Indem du dich als verwirrter Patient ausgibst, könntest du Zeit gewinnen und gleichzeitig mehr Informationen sammeln."
            }
        }, {
            text: "Die Konfrontation suchen – du hast genug Beweise, um Hoffmann zu erpressen",
            nextId: "scene_confrontation",
            addClue: {
                id: "leverage_position",
                text: "Mit den Beweisen in deiner Hand könntest du Hoffmann zwingen, dir die ganze Wahrheit zu erzählen und einen Deal auszuhandeln."
            }
        }]
    }, scene_acceptance: {
        text: "Nach stundenlangem Ringen mit dir selbst triffst du eine Entscheidung. Die Beweise sind überwältigend, die zurückkehrenden Erinnerungen zu klar, um sie zu leugnen. Du suchst Dr. Hoffmann in seinem Büro auf. 'Ich bin bereit', sagst du schlicht. 'Ich verstehe jetzt.' Seine Augen weiten sich kurz in Überraschung, dann nickt er anerkennend. 'Das ist ein mutiger Schritt, Robert.' Er führt dich in einen ruhigen Therapieraum, nicht die kalten medizinischen Räume, die du befürchtet hast. Ihr sprecht stundenlang. Über Christine. Über die Nacht, die alles veränderte. Über deine Schuld, deine Trauer, deinen Zusammenbruch. Über die Detektiv-Identität, die dein Verstand erschuf, um dem Unerträglichen zu entfliehen. 'Der Heilungsprozess wird nicht leicht sein', warnt Hoffmann, 'aber du hast den schwersten Schritt bereits getan.' Als du am Fenster stehst und auf das nun ruhige Meer blickst, spürst du etwas, das du lange nicht gefühlt hast: nicht vollständige Erlösung, aber den ersten Hauch von Frieden.",
        choices: [{
            text: "Dich vollständig auf die Therapie einlassen",
            nextId: "scene_intensive_therapy",
            addClue: {
                id: "genuine_treatment",
                text: "Trotz aller Zweifel scheint ein Teil des Behandlungsprogramms tatsächlich auf deine Heilung ausgerichtet zu sein."
            }
        }, {
            text: "Nach den seltsamen Vorfällen und Hinweisen fragen, die du entdeckt hast",
            nextId: "scene_questioning_reality",
            addClue: {
                id: "partial_truth",
                text: "Hoffmann gibt zu, dass bestimmte Aspekte deiner 'Detektiv-Ermittlung' bewusst inszeniert wurden, um dir zu helfen, dich deiner Wahrheit zu stellen."
            }
        }, {
            text: "Um ein Treffen mit anderen Patienten bitten, insbesondere Elena Krüger",
            nextId: "scene_patient_group",
            addClue: {
                id: "shared_delusions",
                text: "Andere Patienten auf der Insel haben ähnliche 'therapeutische Szenarien' durchlaufen, mit unterschiedlichen Ergebnissen."
            }
        }]
    },

    scene_hosts_identification: {
        text: "Zurück in deinem provisorischen Versteck analysierst du die Unterlagen zur Identifizierung der 'Primär-Wirte'. Die Dokumente sind kodiert, aber mit deinem wiedererwachten analytischen Verstand – vielleicht ein Überbleibsel deiner Forscher-Vergangenheit – kannst du die Muster entschlüsseln. Die sieben 'Wirte' werden durch Symbole dargestellt: Rabe, Eule, Schlange, Wolf, Spinne, Falke und Hirsch. Aus verschiedenen Notizen rekonstruierst du die Zuordnungen: Rabe ist eindeutig Dr. Hoffmann, der Projektleiter. Eule ist Dr. Schneider, der Forschungsleiter. Schlange entspricht Lena Vogt, die Sicherheitschefin. Die restlichen vier sind schwieriger zu identifizieren, aber eine Notiz gibt den entscheidenden Hinweis: 'Wolf erwartet Bericht bei Inspektion am 15.'. General Weiss, der militärische Auftraggeber. Die letzten drei scheinen externe Kontakte zu sein – eine Politikerin, ein Medienmagnat und ein Pharmaunternehmer. Am beunruhigendsten ist jedoch die Liste der 'Sekundär-Wirte': fast hundert Namen, darunter viele Patienten und Personal der Klinik – die nächste Welle der 'Durchquerung'.",
        choices: [{
            text: "Eine Strategie entwickeln, um die 'Primär-Wirte' zu konfrontieren",
            nextId: "scene_confrontation_plan",
            addClue: {
                id: "weakness_discovery",
                text: "Die Entitäten haben eine zentrale Schwäche: Sie sind an ihre 'Ankerpunkte' in den Wirten gebunden – zerstöre den Anker, vertreibe die Entität."
            }
        }, {
            text: "Versuchen, die nächsten potentiellen 'Wirte' zu warnen",
            nextId: "scene_warning_attempt",
            addClue: {
                id: "resistance_network",
                text: "Unter den Patienten und dem Personal gibt es bereits einen geheimen Widerstand, angeführt von Elena Krüger und Dr. Mertens."
            }
        }, {
            text: "Nach Informationen zu den Entitäten selbst suchen – was sind 'Die Wartenden' wirklich?",
            nextId: "scene_entities_research",
            addClue: {
                id: "ancient_presence",
                text: "Die Entitäten scheinen keine Neuankömmlinge zu sein – sie versuchen seit Jahrhunderten, in unsere Realität einzudringen, bisher immer durch okkulte Praktiken."
            }
        }]
    },

    scene_healing_begins: {
        text: "'Ich brauche Hilfe', sagst du leise zu Hoffmann. 'Ich will... ich muss verstehen, was geschehen ist.' Hoffmann nickt ernst, aber in seinen Augen siehst du aufrichtige Erleichterung. Die folgenden Tage vergehen in einer intensiven, aber vorsichtigen therapeutischen Arbeit. Ihr rekonstruiert gemeinsam die tatsächlichen Ereignisse: deine Karriere als Polizist, deine Ehe mit Christine, die zunehmenden Spannungen aufgrund deines Alkoholproblems, der verhängnisvolle Streit. In behutsam dosierten Sitzungen konfrontierst du dich mit dem Moment, in dem die Waffe sich löste, mit Christines Tod, mit deinem Zusammenbruch. Jede Sitzung ist schmerzhaft, aber auch klärend – wie Wasser, das eine verschmutzte Wunde reinigt. 'Dein Fall ist bemerkenswert, Robert', sagt Dr. Mertens, die jetzt ebenfalls an deiner Behandlung teilnimmt. 'Die Detektiv-Persona war so detailliert, so überzeugend.' Sie zögert. 'Fast als hätte ein Teil von dir gewusst, dass du nach etwas suchst – nicht nach Schäfer, sondern nach dir selbst.'",
        choices: [{
            text: "Die Therapie fortsetzen und an deiner Entlassung aus der Klinik arbeiten",
            nextId: "scene_rehabilitation",
            addClue: {
                id: "recovery_path",
                text: "Mit fortschreitender Therapie erkennst du einen realistischen Weg zur Rehabilitation und eventuellen Wiedereingliederung in die Gesellschaft."
            }
        }, {
            text: "Nach Schäfer fragen – war er ein realer Patient oder nur Teil deiner Wahnvorstellung?",
            nextId: "scene_schaefer_reality",
            addClue: {
                id: "real_patient",
                text: "Eric Schäfer war tatsächlich ein Patient, der vor kurzem verschwand – dein therapeutisches Szenario wurde um diesen realen Vorfall herum konstruiert."
            }
        }, {
            text: "Dr. Mertens' seltsame Formulierung hinterfragen",
            nextId: "scene_mertens_insight",
            requireClue: "researcher_past",
            addClue: {
                id: "therapy_sabotage",
                text: "Dr. Mertens gehört insgeheim zu jenen, die an der Legitimität des Projekts zweifeln, und versucht, durch subtile Hinweise dein wahres Ich zu wecken."
            }
        }]
    },

    scene_find_research: {
        text: "Mit deinen wiedererwachten Erinnerungen als Forscher weißt du genau, wo du suchen musst. In einer ruhigen Nacht schleichst du in den östlichen Flügel der Klinik – den Forschungsbereich, zu dem nur autorisiertes Personal Zugang hat. Dein alter Zugangscode funktioniert überraschenderweise noch an einer Nebentür. Im Inneren findest du modernste Laboreinrichtungen. Du gehst zielstrebig zu einem bestimmten Server-Raum. Hinter einem Lüftungsgitter, genau wo du es versteckt hast, findest du eine wasserdichte Metallbox. Darin: ein verschlüsselter Laptop und ein Notizbuch mit deiner Handschrift. 'Versicherungspolice', steht auf der ersten Seite. Was folgt, ist eine detaillierte Dokumentation deiner und Schäfers Entdeckungen über Projekt Rabe. Ihr hattet zunächst begeistert mitgearbeitet, überzeugt von den therapeutischen Möglichkeiten. Dann die unheimliche Wende: seltsame 'Kommunikation' während der Tests, Hoffmanns obsessives Interesse an den 'Stimmen', General Weiss' plötzliches militärisches Engagement. Und schließlich eure erschreckende Schlussfolgerung: Was auch immer durch die 'Tür' kam, wollte die Kontrolle übernehmen.",
        choices: [{
            text: "Den Laptop aktivieren und die gesicherten Daten überprüfen",
            nextId: "scene_data_review",
            addClue: {
                id: "reversal_protocol",
                text: "Unter deinen Forschungsdaten findest du Pläne für ein 'Umkehrprotokoll' – eine Methode, um die Verbindung zu den Entitäten zu kappen und sie zurückzudrängen."
            }
        }, {
            text: "Nach Hinweisen suchen, was mit Schäfer geschehen ist",
            nextId: "scene_schaefer_fate",
            addClue: {
                id: "escape_plan",
                text: "Schäfer hat einen verzweifelten Plan umgesetzt, um zu fliehen und externe Hilfe zu holen – aber ob er erfolgreich war, bleibt unklar."
            }
        }, {
            text: "Untersuchen, wer sonst noch von der Wahrheit weiß",
            nextId: "scene_allies_search",
            addClue: {
                id: "resistance_network",
                text: "Es gibt eine kleine Gruppe von Mitarbeitern und Patienten, die die Wahrheit kennen oder ahnen – darunter Elena Krüger und Dr. Mertens."
            }
        }]
    },

    scene_sea_escape: {
        text: "Du startest den Motor des Boots und steuerst in die offene See hinaus, während hinter dir die Scheinwerfer wild durch die Nacht tanzen. Schüsse fallen, aber du bist bereits außer Reichweite. Mit der Tasche und dem USB-Stick sicher verstaut navigierst du nach den Koordinaten, die Schäfer hinterlassen hat. Der Sturm hat sich vollständig gelegt, die Nacht ist klar, der Mond dein Wegweiser. Nach zwei Stunden auf See erreichst du eine kleine Bucht an der Küste – weit entfernt von den offiziellen Häfen. Dort wartet eine Frau auf einem Steg, angespannt, wachsam. Als sie dich sieht, stürzt sie zum Ufer. 'Robert? Mein Gott, er hat es geschafft! Er hat dich tatsächlich herausgeholt!' Es ist Christine – deine angeblich tote Frau. Lebend, atmend, real. Sie umarmt dich fest, während du erstarrst, deine Realität erneut ins Wanken gerät. 'Ich weiß, du bist verwirrt', sagt sie sanft. 'Sie haben mit deinem Verstand gespielt. Mit deinen Erinnerungen.' Sie greift nach dem USB-Stick. 'Hast du Beweise mitgebracht? Wir müssen sie aufhalten, bevor die Durchquerung beginnt.'",
        choices: [{
            text: "Christine vertrauen und die Beweise übergeben",
            nextId: "scene_christine_alliance",
            addClue: {
                id: "journalist_contact",
                text: "Christine arbeitet mit einer Investigativjournalistin zusammen, die bereits Hinweise auf die unethischen Experimente gesammelt hat."
            }
        }, {
            text: "Misstrauisch bleiben – könnte auch dies eine Manipulation sein?",
            nextId: "scene_trust_issues",
            addClue: {
                id: "reality_test",
                text: "Du findest Wege, die Echtheit von Christine zu überprüfen – Details aus eurer Vergangenheit, die niemand manipulieren könnte."
            }
        }, {
            text: "Nach Schäfer fragen – hat er es ebenfalls geschafft?",
            nextId: "scene_schaefer_status",
            addClue: {
                id: "friend_sacrifice",
                text: "Schäfer wurde beim Versuch, weitere Beweise zu sammeln, gefasst – sein Schicksal ist ungewiss, aber seine Aufzeichnungen haben den Weg für deine Flucht geebnet."
            }
        }]
    }, scene_intensive_therapy: {
        text: "Die kommenden Tage verlaufen in einem intensiven Rhythmus therapeutischer Sitzungen. Du arbeitest mit Dr. Hoffmann und Dr. Mertens, lässt dich vollständig auf den Heilungsprozess ein. Langsam sortieren sich die fragmentierten Teile deiner Erinnerung. Das Bild wird klarer, wenn auch nicht weniger schmerzhaft. In einer besonders intensiven Sitzung durchlebst du erneut die Nacht von Christines Tod - diesmal ohne die schützende Barriere deiner Detektiv-Persona. 'Es war meine Schuld', flüsterst du, Tränen laufen über dein Gesicht. 'Ich war betrunken. Wütend. Sie wollte mich verlassen.' Dr. Mertens nickt mitfühlend. 'Akzeptanz ist der erste Schritt zur Heilung, Robert.' In den Therapiepausen führst du ein Tagebuch, dokumentierst deine Fortschritte, deine Gefühle. Du beginnst, andere Patienten kennenzulernen - nicht als Detektiv auf der Suche nach Hinweisen, sondern als Mitpatient auf dem Weg der Genesung. Eines Abends gibt dir Dr. Hoffmann ein Dokument. 'Dein Behandlungsplan für die nächsten Monate. Und, wenn alles gut geht, ein Weg zurück in ein selbstbestimmtes Leben.'",
        choices: [{
            text: "Den Behandlungsplan annehmen und auf deine Rehabilitation fokussieren",
            nextId: "scene_path_to_freedom",
            addClue: {
                id: "redemption_possibility",
                text: "Trotz deiner Vergangenheit gibt es einen Weg zur Rehabilitation und eventuell zu einem neuen Leben außerhalb der Klinik."
            }
        }, {
            text: "Fragen, ob die seltsamen Ereignisse während deiner 'Ermittlung' Teil der Therapie waren",
            nextId: "scene_therapy_explanation",
            addClue: {
                id: "orchestrated_treatment",
                text: "Viele der 'Hinweise' und merkwürdigen Vorfälle waren tatsächlich inszeniert, um dich behutsam zur Wahrheit zu führen."
            }
        }, {
            text: "Dr. Mertens unter vier Augen sprechen wollen",
            nextId: "scene_mertens_private",
            requireClue: "therapy_sabotage",
            addClue: {
                id: "hidden_agenda",
                text: "Dr. Mertens verrät dir, dass einige deiner Wahnvorstellungen auf realen Experimenten in der Klinik basieren könnten."
            }
        }]
    },

    scene_confrontation_plan: {
        text: "Mit der neu gewonnenen Erkenntnis über die 'Ankerpunkte' der Entitäten beginnst du, einen Konfrontationsplan zu entwickeln. In deinem provisorischen Versteck – einem verlassenen Lagerraum im Keller – breitest du alle gesammelten Dokumente aus. Die 'Ankerpunkte' scheinen physische Objekte zu sein, die während des Rituals als Fokus für die Übernahme dienten. Für Hoffmann: ein antikes Medaillon, das er stets trägt. Für Schneider: ein sonderbarer Schreibstift, den er nie ablegt. Lena Vogt: ein Ring an ihrer rechten Hand. Für die anderen vier: verschiedene persönliche Gegenstände. Zerstöre den Anker, vertreibe die Entität – so die Theorie. Aber du bist einer gegen sieben, und sie kontrollieren die gesamte Insel. Du brauchst Verbündete. In einer sorgsam verschlüsselten Notiz liest du von einem 'Widerstandsnetzwerk', angeführt von Elena Krüger. Ausgerechnet eine Patientin. Oder... ist sie überhaupt eine Patientin? Laut den Dokumenten war sie einst Neurowissenschaftlerin, spezialisiert auf Bewusstseinsphänomene, bevor sie angeblich einen 'psychotischen Zusammenbruch' erlitt.",
        choices: [{
            text: "Elena Krüger kontaktieren und eine Allianz vorschlagen",
            nextId: "scene_resistance_alliance",
            addClue: {
                id: "insider_network",
                text: "Elenas 'Widerstandsgruppe' umfasst mehrere Patienten und Personal, die die Wahrheit ahnen oder eigene unheimliche Erfahrungen gemacht haben."
            }
        }, {
            text: "Den schwächsten der 'Primär-Wirte' identifizieren und zuerst angreifen",
            nextId: "scene_first_target",
            addClue: {
                id: "chain_reaction",
                text: "Die Entitäten sind miteinander verbunden – die Vertreibung einer könnte die anderen schwächen oder zumindest ihre Pläne verzögern."
            }
        }, {
            text: "Einen Plan entwickeln, um mehrere Ankerpunkte gleichzeitig zu zerstören",
            nextId: "scene_synchronized_attack",
            addClue: {
                id: "ritual_disruption",
                text: "Ein koordinierter Angriff auf mehrere Ankerpunkte während des Hauptrituals könnte den gesamten 'Durchquerungs'-Prozess umkehren."
            }
        }]
    },

    scene_christine_alliance: {
        text: "Du reichst Christine den USB-Stick, deine Hand zittert. 'Ich verstehe das alles nicht', gestehst du. 'In meinem Kopf bist du tot. Ich habe dich...' - 'Getötet?', ergänzt sie sanft. 'Das haben sie dir eingepflanzt, Robert. Eine falsche Erinnerung, um dich zu brechen, dich kontrollierbar zu machen.' Sie führt dich zu einem abgelegenen Ferienhaus am Strand. Drinnen wartet eine weitere Frau – schlank, mit scharfem Blick. 'Das ist Sophia Berger, Investigativjournalistin', stellt Christine vor. Sophia nimmt den Stick, steckt ihn in ihren Laptop. Während die Dateien laden, erklärt Christine: 'Du und Schäfer habt als Wissenschaftler für das Projekt gearbeitet. Als ihr entdeckt habt, was wirklich vor sich geht, wolltet ihr an die Öffentlichkeit gehen. Sie haben euch gefangen und... neu programmiert.' Die Bilder und Dokumente erscheinen auf dem Bildschirm. Sophias Augen weiten sich. 'Das ist unglaublich. Aber ohne weitere Beweise wird man uns für verrückt erklären.' Sie blickt dich durchdringend an. 'Wir brauchen mehr, Dr. Weber. Und wir müssen schnell handeln. In drei Tagen findet laut unseren Quellen die 'Hauptdurchquerung' statt.'",
        choices: [{
            text: "Zustimmen, auf die Insel zurückzukehren, um weitere Beweise zu sammeln",
            nextId: "scene_infiltration_plan",
            addClue: {
                id: "insider_knowledge",
                text: "Mit deinem wiedererlangten Wissen über die Anlage und Christines Hilfe könntest du unbemerkt zurückkehren und entscheidende Beweise sichern."
            }
        }, {
            text: "Vorschlagen, staatliche Behörden einzuschalten, trotz fehlender 'harter' Beweise",
            nextId: "scene_authorities",
            addClue: {
                id: "official_suspicion",
                text: "Einige hochrangige Beamte haben bereits Verdacht geschöpft, brauchen aber eine formale Grundlage für ein Eingreifen."
            }
        }, {
            text: "Nach einer Möglichkeit fragen, die 'Durchquerung' von außen zu sabotieren",
            nextId: "scene_sabotage_plan",
            addClue: {
                id: "external_disruption",
                text: "Die Energieversorgung der Insel könnte ein Schwachpunkt sein – ein gezielter Ausfall während des Rituals könnte katastrophale Folgen für die Entitäten haben."
            }
        }]
    },

    scene_data_review: {
        text: "Du aktivierst den Laptop mit einem Passwort, das aus der Tiefe deiner wiedergewonnenen Erinnerungen auftaucht. Die Dateien sind verschlüsselt, aber mit dem Schlüssel aus deinem Notizbuch erhältst du Zugang. Was du findest, bestätigt deine schlimmsten Befürchtungen – und eröffnet einen Hoffnungsschimmer. Monatelange Forschungsberichte dokumentieren die Entwicklung von Projekt Rabe: von der ursprünglichen Idee einer revolutionären Therapiemethode bis zur verhängnisvollen Entdeckung der 'Stimmen'. Du und Schäfer hattet jedoch nicht nur dokumentiert, sondern auch weitergedacht. In einem streng gesicherten Ordner findest du Pläne für ein 'Umkehrprotokoll': eine Methode, die Verbindung zu den Entitäten zu kappen und sie zurückzudrängen. Die Schlüsselkomponente: eine modifizierte Version von Substanz R-7, kombiniert mit spezifischen elektromagnetischen Frequenzen, angewendet während des Höhepunkts eines Durchquerungsrituals. Es könnte funktionieren – aber du bräuchtest Zugang zum Labor, zu den Chemikalien und zur Ausrüstung. Und das alles unter der Nase von sieben Wesen, die nicht mehr vollständig menschlich sind.",
        choices: [{
            text: "Versuchen, die modifizierte Substanz heimlich herzustellen",
            nextId: "scene_substance_creation",
            addClue: {
                id: "chemical_expertise",
                text: "Mit deiner wiedererwachten Expertise als Neuropharmakologie könntest du das Gegenmittel synthetisieren – aber du brauchst Zugang zum Labor."
            }
        }, {
            text: "Nach Verbündeten unter dem Klinikpersonal suchen",
            nextId: "scene_staff_allies",
            addClue: {
                id: "insider_help",
                text: "Nicht alle Mitarbeiter sind eingeweiht oder übernommen – einige könnten dir aus ethischen Gründen helfen."
            }
        }, {
            text: "Die Pläne für das Umkehrprotokoll weiter analysieren und verfeinern",
            nextId: "scene_protocol_refinement",
            addClue: {
                id: "critical_timing",
                text: "Das Timing ist entscheidend – das Umkehrprotokoll muss genau während der 'Hauptdurchquerung' in drei Tagen aktiviert werden."
            }
        }]
    },

    scene_schaefer_reality: {
        text: "Nach einer besonders intensiven Therapiesitzung bleibst du allein mit Dr. Mertens zurück. 'Eine Frage beschäftigt mich', sagst du. 'Eric Schäfer... war er real? Oder nur Teil meiner Wahnvorstellung?' Dr. Mertens zögert, schaut zur Tür, als wolle sie sichergehen, dass niemand lauscht. 'Eric Schäfer war – ist – sehr real, Robert.' Sie senkt die Stimme. 'Ein Patient mit paranoider Schizophrenie, so die offizielle Diagnose. Er verschwand tatsächlich vor etwa zwei Wochen.' Sie scheint mit sich zu ringen, dann fährt sie fort: 'Schäfer war... anders. Seine Wahnvorstellungen waren ungewöhnlich kohärent. Er sprach von Experimenten, von einer Verschwörung. Die therapeutische Leitung beschloss, deine... Situation zu nutzen. Ein Detektiv auf der Suche nach einem Vermissten – es schien perfekt. Eine kontrollierte Umgebung für dich, gleichzeitig ein Versuch, Schäfer zu finden.' Sie schaut dich direkt an. 'Aber ich beginne mich zu fragen, ob einige von Schäfers 'Wahnvorstellungen' nicht vielleicht...' Sie verstummt, als Schritte im Flur zu hören sind. 'Genug für heute', sagt sie laut. 'Gute Fortschritte, Robert.'",
        choices: [{
            text: "Dr. Mertens später heimlich aufsuchen und mehr erfahren wollen",
            nextId: "scene_mertens_secret",
            addClue: {
                id: "staff_suspicions",
                text: "Einige Mitarbeiter, darunter Dr. Mertens, hegen zunehmend Zweifel an der ethischen Grundlage bestimmter 'experimenteller Behandlungen' auf der Insel."
            }
        }, {
            text: "Selbst nach Beweisen für unethische Experimente suchen",
            nextId: "scene_evidence_hunt",
            addClue: {
                id: "treatment_records",
                text: "In den Archiven findest du Hinweise auf ungewöhnliche Behandlungsmethoden und unerklärliche 'Nebenwirkungen' bei bestimmten Patienten."
            }
        }, {
            text: "Dich auf deine eigene Heilung konzentrieren, aber wachsam bleiben",
            nextId: "scene_cautious_recovery",
            addClue: {
                id: "dual_awareness",
                text: "Du findest einen Weg, deine Genesung fortzusetzen und gleichzeitig subtil nach der Wahrheit hinter Schäfers Verschwinden zu suchen."
            }
        }]
    }, scene_path_to_freedom: {
        text: "Die Wochen vergehen in einem Rhythmus aus Therapiesitzungen, Gruppenaktivitäten und stillen Momenten der Selbstreflexion. Du akzeptierst den Behandlungsplan vollständig, arbeitest aktiv an deiner Genesung. Die Erinnerungen an Christine sind nicht mehr so schmerzhaft – nicht vergessen, aber integriert in dein neues Selbstverständnis. Dr. Hoffmann ist beeindruckt von deinen Fortschritten. 'Sie haben eine bemerkenswerte Resilienz bewiesen, Robert', sagt er bei einer eurer letzten Sitzungen. 'Ich denke, wir können über die nächsten Schritte sprechen.' Er reicht dir ein Dokument – einen Antrag auf bedingte Entlassung. 'Sie würden zunächst in einer betreuten Wohneinrichtung auf dem Festland leben. Regelmäßige Therapiesitzungen, natürlich. Aber auch die Möglichkeit, wieder ein selbstbestimmtes Leben aufzubauen.' Du starrst auf das Papier, spürst ein vorsichtiges Aufkeimen von Hoffnung. 'Es wird nicht leicht', warnt Hoffmann. 'Die Welt da draußen hat sich weitergedreht. Aber ich glaube, Sie sind bereit für diesen Schritt.'",
        choices: [{
            text: "Das Angebot dankbar annehmen und dich auf ein neues Leben vorbereiten",
            nextId: "ending_redemption",
            addClue: {
                id: "new_beginning",
                text: "Die Akzeptanz deiner Vergangenheit eröffnet die Möglichkeit einer echten Zukunft – nicht ohne Schmerz, aber mit neuer Perspektive."
            }
        }, {
            text: "Dr. Mertens um ihre Einschätzung bitten, bevor du unterschreibst",
            nextId: "scene_mertens_warning",
            requireClue: "staff_suspicions",
            addClue: {
                id: "hidden_condition",
                text: "Dr. Mertens warnt dich heimlich, dass deine Entlassung an Bedingungen geknüpft sein könnte, die in den offiziellen Dokumenten nicht erwähnt werden."
            }
        }, {
            text: "Um Bedenkzeit bitten – etwas fühlt sich nicht richtig an",
            nextId: "scene_final_investigation",
            requireClue: "dual_awareness",
            addClue: {
                id: "last_puzzle",
                text: "Dein wiedererwachendes kritisches Denken erkennt subtile Unstimmigkeiten in Hoffmanns Verhalten und dem Entlassungsprozess."
            }
        }]
    },

    scene_resistance_alliance: {
        text: "Du findest Elena Krüger in der Kunsttherapie, scheinbar vertieft in ein Gemälde. Als du dich neben sie setzt, spricht sie ohne aufzusehen. 'Ich hatte mich schon gefragt, wann du kommen würdest.' Ihr Pinsel formt das inzwischen vertraute Symbol auf der Leinwand – den Kreis mit dem vertikalen Strich. 'Ich kenne dich, Robert Weber. Den echten Robert Weber.' Ihr Blick trifft deinen. 'Wir haben zusammengearbeitet, bevor sie dich... verändert haben.' In den folgenden Stunden, in vorsichtigen, unauffälligen Gesprächen, erfährst du von der Widerstandsgruppe. Fünf Patienten, drei Pflegekräfte, ein Sicherheitsmann, Dr. Mertens – alle mit verschiedenen Graden der Erkenntnis über die wahre Natur von Projekt Rabe. 'Wir warten seit Wochen auf eine Gelegenheit', erklärt Elena später in ihrem Zimmer, wo ihr unbeobachtet sprechen könnt. Sie zeigt dir einen handgezeichneten Plan der Insel, markiert mit Überwachungspunkten, Patrouillen und sicheren Wegen. 'In drei Tagen ist die Hauptdurchquerung. Unser einziger Zeitpunkt zum Handeln.'",
        choices: [{
            text: "Der Gruppe beitreten und einen koordinierten Angriff auf die Ankerpunkte planen",
            nextId: "scene_resistance_plan",
            addClue: {
                id: "coordinated_attack",
                text: "Mit genügend Verbündeten könnte ein simultaner Angriff auf alle sieben Ankerpunkte während des Rituals die Entitäten permanent vertreiben."
            }
        }, {
            text: "Dein Wissen über das Umkehrprotokoll teilen und nach Unterstützung bei der Herstellung suchen",
            nextId: "scene_reversal_collaboration",
            requireClue: "reversal_protocol",
            addClue: {
                id: "formula_synthesis",
                text: "Elena und Dr. Mertens können dir Zugang zum Labor verschaffen, um die modifizierte Substanz R-7 für das Umkehrprotokoll zu synthetisieren."
            }
        }, {
            text: "Einen alternativen Plan vorschlagen: Beweise sammeln und externe Hilfe holen",
            nextId: "scene_evidence_gathering",
            addClue: {
                id: "outside_contact",
                text: "Die Widerstandsgruppe hat einen potenziellen Kommunikationskanal zum Festland, der bisher aus Sicherheitsgründen nicht genutzt wurde."
            }
        }]
    },

    scene_infiltration_plan: {
        text: "Die nächsten 48 Stunden verbringt ihr mit intensiver Planung. Christine kennt die Sicherheitsroutinen der Insel, Sophia bringt ihre investigativen Fähigkeiten ein, und deine wiedergewonnenen Erinnerungen an die Anlage vervollständigen das Bild. 'Wir brauchen unwiderlegbare Beweise', erklärt Sophia. 'Video, Dokumente, Proben der Substanz R-7. Und idealerweise einen Insider, der aussagen wird.' Christine breitet eine detaillierte Karte von Raven Island aus. 'Der Sicherheitszaun hat eine Schwachstelle hier im Nordosten. Die Patrouillen sind vorhersehbar, alle 30 Minuten. Mit dem Boot können wir dich in dieser Bucht absetzen.' Sie markiert einen Ort. 'Du hast etwa fünf Stunden, bevor dein Fehlen bemerkt wird.' Während der Nacht bereitet ihr die Ausrüstung vor: Aufnahmegeräte, Nachtsichtgeräte, Kommunikationsmittel. Christine drückt dir einen kleinen schwarzen Gegenstand in die Hand. 'Ein EMP-Generator. Sollte alles schiefgehen, kann er die elektronischen Systeme der Insel kurzzeitig lahmlegen.' Ihr Blick ist intensiv. 'Genug für eine Flucht. Oder um das Ritual zu stören.'",
        choices: [{
            text: "Den Plan ausführen und nach handfesten Beweisen suchen",
            nextId: "scene_evidence_mission",
            addClue: {
                id: "concrete_evidence",
                text: "Mit konkreten Beweisen könnte Sophia die Geschichte veröffentlichen und staatliche Ermittlungen erzwingen, bevor die Hauptdurchquerung stattfindet."
            }
        }, {
            text: "Versuchen, Elena Krüger und andere potenzielle Verbündete auf der Insel zu kontaktieren",
            nextId: "scene_inside_allies",
            addClue: {
                id: "internal_resistance",
                text: "Es gibt bereits eine Widerstandsgruppe auf der Insel, die mit externen Kontakten ein koordiniertes Vorgehen planen könnte."
            }
        }, {
            text: "Den ursprünglichen Plan ändern – keine Beweise sammeln, sondern direkt die Hauptdurchquerung sabotieren",
            nextId: "scene_sabotage_mission",
            addClue: {
                id: "critical_disruption",
                text: "Mit dem EMP-Generator an der richtigen Stelle und zum richtigen Zeitpunkt könntest du das Ritual komplett unterbrechen und möglicherweise die Entitäten zurückdrängen."
            }
        }]
    },

    scene_substance_creation: {
        text: "Mit deinem wiedererwachten Fachwissen weißt du genau, was du für die Herstellung der modifizierten Substanz R-7 brauchst. Die Herausforderung: Zugang zum Labor gewinnen, ohne Verdacht zu erregen. Du beobachtest die Routinen, identifizierst ein Zeitfenster um Mitternacht, wenn die Labors minimal besetzt sind. Mit einem gestohlenen Sicherheitsausweis gelangst du in den Forschungsbereich. Das Labor ist ein vertrauter Anblick – hier hast du früher gearbeitet. Du findest die Grundsubstanzen genau dort, wo du sie vermutest. Die Synthese ist komplex, erfordert absolute Präzision. Jede Komponente muss exakt dosiert werden: die neuroinhibitorischen Elemente, die die synaptischen Brücken blockieren; die molekularen Verstärker, die die Wirkung potenzieren; die stabilisierenden Faktoren. Stunden vergehen in angespannter Konzentration. Endlich hältst du eine kleine Phiole mit blau schimmernder Flüssigkeit in den Händen – das Gegenmittel. Plötzlich hörst du Schritte im Korridor. Eilig versteckst du die Phiole in deiner Kleidung und beginnst, aufzuräumen. Die Tür öffnet sich – Dr. Schneider betritt das Labor, sein Blick sofort misstrauisch.",
        choices: [{
            text: "Eine Ausrede improvisieren – du konntest nicht schlafen und wolltest dich mit Arbeit ablenken",
            nextId: "scene_lab_excuse",
            addClue: {
                id: "believable_cover",
                text: "Schneider scheint deine Erklärung zu akzeptieren, bleibt aber wachsam – du hast wenig Zeit, bevor er oder andere Verdacht schöpfen."
            }
        }, {
            text: "Schneider direkt konfrontieren – du weißt, was er ist",
            nextId: "scene_entity_confrontation",
            addClue: {
                id: "direct_challenge",
                text: "Schneider reagiert mit überraschender Offenheit, bestätigt deine Vermutungen teilweise und offenbart Details über die wahre Natur der 'Wartenden'."
            }
        }, {
            text: "Fliehen und das Gegenmittel in Sicherheit bringen",
            nextId: "scene_lab_escape",
            addClue: {
                id: "pursuit_initiated",
                text: "Deine Flucht löst Alarm aus – die gesamte Insel wird in höchste Alarmbereitschaft versetzt, was die Umsetzung des Umkehrprotokolls erschwert, aber auch das Hauptritual stören könnte."
            }
        }]
    },

    scene_mertens_secret: {
        text: "Nach Mitternacht schleichst du zu Dr. Mertens' Büro. Du hast ihre Routine beobachtet – sie arbeitet oft spät. Ein schwacher Lichtschein unter der Tür bestätigt deine Vermutung. Du klopfst leise. Nach kurzem Zögern öffnet sie, wirkt nicht überrascht, dich zu sehen. 'Ich hatte gehofft, dass du kommst.' Sie schließt sorgfältig die Tür, überprüft, ob die Jalousien vollständig geschlossen sind, und schaltet ein kleines Gerät ein, das ein leises Rauschen erzeugt. 'Gegen Abhörgeräte', erklärt sie. Was sie dir dann eröffnet, erschüttert deine gerade gewonnene Stabilität erneut. 'Schäfer hatte Recht, Robert. Etwas Unheimliches geschieht hier. Ich bin mir nicht sicher, ob es sich um unethische Experimente handelt oder um etwas... anderes.' Sie holt eine Akte aus einem versteckten Safe. 'Ich habe heimlich Daten gesammelt. Patienten mit identischen 'Wahnvorstellungen', ohne vorherigen Kontakt. Personal mit plötzlichen, drastischen Persönlichkeitsveränderungen. Und dann die nächtlichen 'Sitzungen' im Ostflügel, zu denen nur Hoffmann und sein engster Kreis Zugang haben.'",
        choices: [{
            text: "Dr. Mertens als Verbündete gewinnen und gemeinsam nach weiteren Beweisen suchen",
            nextId: "scene_mertens_alliance",
            addClue: {
                id: "medical_authority",
                text: "Dr. Mertens' professionelle Autorität und Zugang könnten entscheidend sein, um die Vorgänge auf Raven Island zu dokumentieren und aufzudecken."
            }
        }, {
            text: "Ihr von deinen 'Wahnvorstellungen' über Entitäten und Durchquerungen erzählen",
            nextId: "scene_sharing_truth",
            requireClue: "ancient_presence",
            addClue: {
                id: "scientific_perspective",
                text: "Dr. Mertens betrachtet die 'Entitäten' aus wissenschaftlicher Perspektive – möglicherweise Manifestationen kollektiver psychischer Energie oder eine bisher unbekannte Form von Bewusstsein."
            }
        }, {
            text: "Nach einer Möglichkeit fragen, die Insel zu verlassen und externe Hilfe zu holen",
            nextId: "scene_escape_planning",
            addClue: {
                id: "mainland_contact",
                text: "Dr. Mertens hat einen Kontakt auf dem Festland – einen ehemaligen Kollegen bei der Gesundheitsbehörde, der bereits Zweifel an den Praktiken auf Raven Island geäußert hat."
            }
        }]
    }, ending_redemption: {
        text: "Sechs Monate später sitzt du auf einer Bank am Hafen des Festlands, blickst über das Wasser zur silhouette von Raven Island in der Ferne. Die betreute Wohneinrichtung, in der du jetzt lebst, liegt nur wenige Straßen entfernt. Neben dir sitzt Dr. Mertens, die nach einigen Differenzen mit der Klinikleitung ihre Stelle auf der Insel aufgegeben hat und nun deine ambulante Therapie übernommen hat. 'Wie fühlen Sie sich heute, Robert?', fragt sie. Du denkst nach, bevor du antwortest. 'In Frieden', sagst du schließlich. 'Nicht immer, nicht vollständig. Aber öfter.' Die Erinnerungen an Christine sind nun ein Teil von dir - ein schmerzhafter Teil, aber einer, den du akzeptieren kannst. Die Schuldgefühle werden nie ganz verschwinden, aber sie definieren dich nicht mehr. In deiner Tasche ist ein Brief von Christines Eltern, die nach langem Zögern deiner Bitte um ein Treffen zugestimmt haben. Ein kleiner Schritt auf einem langen Weg der Versöhnung. Die merkwürdigen Erlebnisse auf der Insel - die Hinweise auf Experimente, die Andeutungen von etwas Übernatürlichem - sie erscheinen dir jetzt wie Echos deines damaligen Geisteszustands. Dr. Mertens hat dir geholfen zu verstehen, wie das traumatisierte Gehirn Realität verzerren kann. 'Es wird Zeit für unsere Gruppensitzung', erinnert dich Dr. Mertens sanft. Du nickst, stehst auf, bereit, weiterzugehen - sowohl buchstäblich als auch im übertragenen Sinne. Während ihr euch von der Insel wegbewegt, spürst du zum ersten Mal seit langem die vorsichtige Hoffnung, dass es eine Zukunft gibt. Eine Zukunft, in der du eines Tages nicht nur überleben, sondern wieder leben kannst.",
        choices: [{
            text: "Spiel neu starten", nextId: "start"
        }]
    },

    ending_conspiracy_exposed: {
        text: "Die Pressekonferenz ist überfüllt, Kamerablitze zucken durch den Raum. Du sitzt neben Sophia Berger, deren investigative Serie über die 'Raven Island-Verschwörung' die Nation erschüttert hat. Auf deiner anderen Seite: Christine, deren Hand fest in deiner ruht. Die letzten Wochen waren ein Wirbelwind aus Verhören, Zeugenaussagen und endlosen Erklärungen. Nach der erfolgreichen Sabotage der 'Hauptdurchquerung' und eurer Flucht mit den Beweisen brach alles zusammen. Militärpolizei und Bundesbehörden stürmten die Insel. Dr. Hoffmann, Dr. Schneider und die anderen 'Primär-Wirte' wurden verhaftet, zusammen mit General Weiss und mehreren hochrangigen Beamten. Die Beweise waren erdrückend: illegal durchgeführte Bewusstseinsexperimente, Menschenrechtsverbrechen, Missbrauch staatlicher Gelder. Die bizarre Wahrheit hinter Projekt Rabe hat für Kontroversen gesorgt. Einige sehen darin nur die Wahnvorstellungen eines machthungrigen Kreises von Wissenschaftlern und Militärs. Andere - darunter ihr - wisst, dass die 'Entitäten' mehr waren als nur Einbildung. Die Untersuchung der Substanz R-7 und der modifizierten Variante hat neue wissenschaftliche Debatten über das Wesen des Bewusstseins ausgelöst. Elena Krüger, inzwischen rehabilitiert und wieder als Neurowissenschaftlerin tätig, leitet nun ein ethisch überwachtes Forschungsprogramm, das die positiven Aspekte der ursprünglichen Forschung retten soll. 'Wir haben noch Fragen für Dr. Weber', ruft ein Journalist. Du lehnst dich zum Mikrofon. 'Mein Name ist Dr. Robert Weber. Ich bin Neuropharmakologie-Spezialist und ein Überlebender von Raven Island. Und ich bin hier, um die Wahrheit zu erzählen.'",
        choices: [{
            text: "Spiel neu starten", nextId: "start"
        }]
    },

    ending_otherworldly_defeat: {
        text: "Donnergroll erschüttert die Luft, als du mit Elena und den anderen Mitgliedern des Widerstands in den unterirdischen Keller unter dem Leuchtturm stürmst. Das Ritual hat bereits begonnen. Die sieben 'Primär-Wirte', darunter Hoffmann und Schneider, stehen im Kreis um den zentralen Altar, auf dem ein pulsierendes, schwach leuchtendes Gerät platziert ist. Um sie herum knien Dutzende von 'vorbereiteten' Patienten und Personal - die nächste Welle der 'Gefäße'. Die Luft knistert vor Energie, das Symbol an den Wänden scheint zu pulsieren. Mit koordinierter Präzision setzt ihr den Plan um. Drei deiner Verbündeten stürzen sich auf die Wachleute, während du und Elena euch zum Altar durchkämpft. Dr. Mertens aktiviert den EMP-Generator, der die elektronischen Geräte im Raum lahmlegt. Doch das Ritual scheint davon ungestört weiterzugehen - die Energie kommt nicht von den Maschinen, sondern von etwas Anderem. In dem chaotischen Kampf gelangst du schließlich zum Altar. Du ziehst die Phiole mit der modifizierten Substanz R-7 hervor, während Elena die Ankerpunkte der Wirte - das Medaillon, den Stift, den Ring - sammelt und in eine metallene Schale wirft. Mit zitternden Händen gießt du das blaue Serum über die Gegenstände und aktivierst die vorbereitete elektromagnetische Vorrichtung. Ein greller Lichtblitz. Ein unmenschlicher Schrei, der von sieben Kehlen gleichzeitig kommt. Und dann - Stille. Die 'Primär-Wirte' brechen zusammen, ihre Körper plötzlich nur noch leere Hüllen. Aus dem Altar steigt ein wirbelnder Strudel aus schattenhafter Substanz auf, wird einen Moment lang von unsichtbaren Winden zur Decke gezerrt und verschwindet dann mit einem letzten, zornigen Heulen. Tage später, als die Behörden eingetroffen sind und die Überlebenden befragt werden, versteht niemand wirklich, was auf Raven Island geschehen ist. Die offizielle Erklärung spricht von Massensuggestion, von einer kulthaften Verschwörung ohne übernatürliche Elemente. Nur du, Elena und die wenigen anderen Zeugen kennt die Wahrheit: dass für einen kurzen Moment der Schleier zwischen den Welten dünn wurde - und dass ihr verhindert habt, dass etwas Uraltes und Hungriges hindurchkam. 'Wir sollten wachsam bleiben', sagt Elena, als ihr zum letzten Mal auf die nun verlassene Insel blickt. 'Sie werden andere Wege finden. Andere Türen.' Du nickst still. Manche Türen sollten für immer verschlossen bleiben.",
        choices: [{
            text: "Spiel neu starten", nextId: "start"
        }]
    }
};
