// Interaktiver Thriller im Stil von Shutter Island
// Szenen 41-45

const gameData = {
    scene_intensive_therapy: {
        text: "Die kommenden Tage verlaufen in einem intensiven Rhythmus therapeutischer Sitzungen. Du arbeitest mit Dr. Hoffmann und Dr. Mertens, lässt dich vollständig auf den Heilungsprozess ein. Langsam sortieren sich die fragmentierten Teile deiner Erinnerung. Das Bild wird klarer, wenn auch nicht weniger schmerzhaft. In einer besonders intensiven Sitzung durchlebst du erneut die Nacht von Christines Tod - diesmal ohne die schützende Barriere deiner Detektiv-Persona. 'Es war meine Schuld', flüsterst du, Tränen laufen über dein Gesicht. 'Ich war betrunken. Wütend. Sie wollte mich verlassen.' Dr. Mertens nickt mitfühlend. 'Akzeptanz ist der erste Schritt zur Heilung, Robert.' In den Therapiepausen führst du ein Tagebuch, dokumentierst deine Fortschritte, deine Gefühle. Du beginnst, andere Patienten kennenzulernen - nicht als Detektiv auf der Suche nach Hinweisen, sondern als Mitpatient auf dem Weg der Genesung. Eines Abends gibt dir Dr. Hoffmann ein Dokument. 'Dein Behandlungsplan für die nächsten Monate. Und, wenn alles gut geht, ein Weg zurück in ein selbstbestimmtes Leben.'",
        choices: [
            {
                text: "Den Behandlungsplan annehmen und auf deine Rehabilitation fokussieren",
                nextId: "scene_path_to_freedom",
                addClue: {
                    id: "redemption_possibility",
                    text: "Trotz deiner Vergangenheit gibt es einen Weg zur Rehabilitation und eventuell zu einem neuen Leben außerhalb der Klinik."
                }
            },
            {
                text: "Fragen, ob die seltsamen Ereignisse während deiner 'Ermittlung' Teil der Therapie waren",
                nextId: "scene_therapy_explanation",
                addClue: {
                    id: "orchestrated_treatment",
                    text: "Viele der 'Hinweise' und merkwürdigen Vorfälle waren tatsächlich inszeniert, um dich behutsam zur Wahrheit zu führen."
                }
            },
            {
                text: "Dr. Mertens unter vier Augen sprechen wollen",
                nextId: "scene_mertens_private",
                requireClue: "therapy_sabotage",
                addClue: {
                    id: "hidden_agenda",
                    text: "Dr. Mertens verrät dir, dass einige deiner Wahnvorstellungen auf realen Experimenten in der Klinik basieren könnten."
                }
            }
        ]
    },

    scene_confrontation_plan: {
        text: "Mit der neu gewonnenen Erkenntnis über die 'Ankerpunkte' der Entitäten beginnst du, einen Konfrontationsplan zu entwickeln. In deinem provisorischen Versteck – einem verlassenen Lagerraum im Keller – breitest du alle gesammelten Dokumente aus. Die 'Ankerpunkte' scheinen physische Objekte zu sein, die während des Rituals als Fokus für die Übernahme dienten. Für Hoffmann: ein antikes Medaillon, das er stets trägt. Für Schneider: ein sonderbarer Schreibstift, den er nie ablegt. Lena Vogt: ein Ring an ihrer rechten Hand. Für die anderen vier: verschiedene persönliche Gegenstände. Zerstöre den Anker, vertreibe die Entität – so die Theorie. Aber du bist einer gegen sieben, und sie kontrollieren die gesamte Insel. Du brauchst Verbündete. In einer sorgsam verschlüsselten Notiz liest du von einem 'Widerstandsnetzwerk', angeführt von Elena Krüger. Ausgerechnet eine Patientin. Oder... ist sie überhaupt eine Patientin? Laut den Dokumenten war sie einst Neurowissenschaftlerin, spezialisiert auf Bewusstseinsphänomene, bevor sie angeblich einen 'psychotischen Zusammenbruch' erlitt.",
        choices: [
            {
                text: "Elena Krüger kontaktieren und eine Allianz vorschlagen",
                nextId: "scene_resistance_alliance",
                addClue: {
                    id: "insider_network",
                    text: "Elenas 'Widerstandsgruppe' umfasst mehrere Patienten und Personal, die die Wahrheit ahnen oder eigene unheimliche Erfahrungen gemacht haben."
                }
            },
            {
                text: "Den schwächsten der 'Primär-Wirte' identifizieren und zuerst angreifen",
                nextId: "scene_first_target",
                addClue: {
                    id: "chain_reaction",
                    text: "Die Entitäten sind miteinander verbunden – die Vertreibung einer könnte die anderen schwächen oder zumindest ihre Pläne verzögern."
                }
            },
            {
                text: "Einen Plan entwickeln, um mehrere Ankerpunkte gleichzeitig zu zerstören",
                nextId: "scene_synchronized_attack",
                addClue: {
                    id: "ritual_disruption",
                    text: "Ein koordinierter Angriff auf mehrere Ankerpunkte während des Hauptrituals könnte den gesamten 'Durchquerungs'-Prozess umkehren."
                }
            }
        ]
    },

    scene_christine_alliance: {
        text: "Du reichst Christine den USB-Stick, deine Hand zittert. 'Ich verstehe das alles nicht', gestehst du. 'In meinem Kopf bist du tot. Ich habe dich...' - 'Getötet?', ergänzt sie sanft. 'Das haben sie dir eingepflanzt, Robert. Eine falsche Erinnerung, um dich zu brechen, dich kontrollierbar zu machen.' Sie führt dich zu einem abgelegenen Ferienhaus am Strand. Drinnen wartet eine weitere Frau – schlank, mit scharfem Blick. 'Das ist Sophia Berger, Investigativjournalistin', stellt Christine vor. Sophia nimmt den Stick, steckt ihn in ihren Laptop. Während die Dateien laden, erklärt Christine: 'Du und Schäfer habt als Wissenschaftler für das Projekt gearbeitet. Als ihr entdeckt habt, was wirklich vor sich geht, wolltet ihr an die Öffentlichkeit gehen. Sie haben euch gefangen und... neu programmiert.' Die Bilder und Dokumente erscheinen auf dem Bildschirm. Sophias Augen weiten sich. 'Das ist unglaublich. Aber ohne weitere Beweise wird man uns für verrückt erklären.' Sie blickt dich durchdringend an. 'Wir brauchen mehr, Dr. Weber. Und wir müssen schnell handeln. In drei Tagen findet laut unseren Quellen die 'Hauptdurchquerung' statt.'",
        choices: [
            {
                text: "Zustimmen, auf die Insel zurückzukehren, um weitere Beweise zu sammeln",
                nextId: "scene_infiltration_plan",
                addClue: {
                    id: "insider_knowledge",
                    text: "Mit deinem wiedererlangten Wissen über die Anlage und Christines Hilfe könntest du unbemerkt zurückkehren und entscheidende Beweise sichern."
                }
            },
            {
                text: "Vorschlagen, staatliche Behörden einzuschalten, trotz fehlender 'harter' Beweise",
                nextId: "scene_authorities",
                addClue: {
                    id: "official_suspicion",
                    text: "Einige hochrangige Beamte haben bereits Verdacht geschöpft, brauchen aber eine formale Grundlage für ein Eingreifen."
                }
            },
            {
                text: "Nach einer Möglichkeit fragen, die 'Durchquerung' von außen zu sabotieren",
                nextId: "scene_sabotage_plan",
                addClue: {
                    id: "external_disruption",
                    text: "Die Energieversorgung der Insel könnte ein Schwachpunkt sein – ein gezielter Ausfall während des Rituals könnte katastrophale Folgen für die Entitäten haben."
                }
            }
        ]
    },

    scene_data_review: {
        text: "Du aktivierst den Laptop mit einem Passwort, das aus der Tiefe deiner wiedergewonnenen Erinnerungen auftaucht. Die Dateien sind verschlüsselt, aber mit dem Schlüssel aus deinem Notizbuch erhältst du Zugang. Was du findest, bestätigt deine schlimmsten Befürchtungen – und eröffnet einen Hoffnungsschimmer. Monatelange Forschungsberichte dokumentieren die Entwicklung von Projekt Rabe: von der ursprünglichen Idee einer revolutionären Therapiemethode bis zur verhängnisvollen Entdeckung der 'Stimmen'. Du und Schäfer hattet jedoch nicht nur dokumentiert, sondern auch weitergedacht. In einem streng gesicherten Ordner findest du Pläne für ein 'Umkehrprotokoll': eine Methode, die Verbindung zu den Entitäten zu kappen und sie zurückzudrängen. Die Schlüsselkomponente: eine modifizierte Version von Substanz R-7, kombiniert mit spezifischen elektromagnetischen Frequenzen, angewendet während des Höhepunkts eines Durchquerungsrituals. Es könnte funktionieren – aber du bräuchtest Zugang zum Labor, zu den Chemikalien und zur Ausrüstung. Und das alles unter der Nase von sieben Wesen, die nicht mehr vollständig menschlich sind.",
        choices: [
            {
                text: "Versuchen, die modifizierte Substanz heimlich herzustellen",
                nextId: "scene_substance_creation",
                addClue: {
                    id: "chemical_expertise",
                    text: "Mit deiner wiedererwachten Expertise als Neuropharmakologie könntest du das Gegenmittel synthetisieren – aber du brauchst Zugang zum Labor."
                }
            },
            {
                text: "Nach Verbündeten unter dem Klinikpersonal suchen",
                nextId: "scene_staff_allies",
                addClue: {
                    id: "insider_help",
                    text: "Nicht alle Mitarbeiter sind eingeweiht oder übernommen – einige könnten dir aus ethischen Gründen helfen."
                }
            },
            {
                text: "Die Pläne für das Umkehrprotokoll weiter analysieren und verfeinern",
                nextId: "scene_protocol_refinement",
                addClue: {
                    id: "critical_timing",
                    text: "Das Timing ist entscheidend – das Umkehrprotokoll muss genau während der 'Hauptdurchquerung' in drei Tagen aktiviert werden."
                }
            }
        ]
    },

    scene_schaefer_reality: {
        text: "Nach einer besonders intensiven Therapiesitzung bleibst du allein mit Dr. Mertens zurück. 'Eine Frage beschäftigt mich', sagst du. 'Eric Schäfer... war er real? Oder nur Teil meiner Wahnvorstellung?' Dr. Mertens zögert, schaut zur Tür, als wolle sie sichergehen, dass niemand lauscht. 'Eric Schäfer war – ist – sehr real, Robert.' Sie senkt die Stimme. 'Ein Patient mit paranoider Schizophrenie, so die offizielle Diagnose. Er verschwand tatsächlich vor etwa zwei Wochen.' Sie scheint mit sich zu ringen, dann fährt sie fort: 'Schäfer war... anders. Seine Wahnvorstellungen waren ungewöhnlich kohärent. Er sprach von Experimenten, von einer Verschwörung. Die therapeutische Leitung beschloss, deine... Situation zu nutzen. Ein Detektiv auf der Suche nach einem Vermissten – es schien perfekt. Eine kontrollierte Umgebung für dich, gleichzeitig ein Versuch, Schäfer zu finden.' Sie schaut dich direkt an. 'Aber ich beginne mich zu fragen, ob einige von Schäfers 'Wahnvorstellungen' nicht vielleicht...' Sie verstummt, als Schritte im Flur zu hören sind. 'Genug für heute', sagt sie laut. 'Gute Fortschritte, Robert.'",
        choices: [
            {
                text: "Dr. Mertens später heimlich aufsuchen und mehr erfahren wollen",
                nextId: "scene_mertens_secret",
                addClue: {
                    id: "staff_suspicions",
                    text: "Einige Mitarbeiter, darunter Dr. Mertens, hegen zunehmend Zweifel an der ethischen Grundlage bestimmter 'experimenteller Behandlungen' auf der Insel."
                }
            },
            {
                text: "Selbst nach Beweisen für unethische Experimente suchen",
                nextId: "scene_evidence_hunt",
                addClue: {
                    id: "treatment_records",
                    text: "In den Archiven findest du Hinweise auf ungewöhnliche Behandlungsmethoden und unerklärliche 'Nebenwirkungen' bei bestimmten Patienten."
                }
            },
            {
                text: "Dich auf deine eigene Heilung konzentrieren, aber wachsam bleiben",
                nextId: "scene_cautious_recovery",
                addClue: {
                    id: "dual_awareness",
                    text: "Du findest einen Weg, deine Genesung fortzusetzen und gleichzeitig subtil nach der Wahrheit hinter Schäfers Verschwinden zu suchen."
                }
            }
        ]
    }
};
