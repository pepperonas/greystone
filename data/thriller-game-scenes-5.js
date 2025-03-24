// Interaktiver Thriller im Stil von Shutter Island
// Szenen 21-25

const gameData = {
    scene_altar_notebook: {
        text: "Mit zitternden Händen schlägst du das Notizbuch auf. Die ersten Seiten sind mit schematischen Zeichnungen des Symbols gefüllt, mit Anmerkungen in einer präzisen Handschrift - Schäfers Handschrift, wie du vermutest. 'Der Durchgang ist keine Metapher', liest du. 'Realitätsebenen sind durchlässiger als angenommen.' Weiter hinten werden die Einträge systematischer, fast wie Laborprotokolle. 'Versuch 17: Kombination von Substanz R-7 mit elektrischer Stimulation während des Rituals. Proband zeigte 72 Sekunden lang Anzeichen von Dissoziation, berichtete anschließend von 'Stimmen jenseits der Schwelle'.' Auf den letzten beschriebenen Seiten wird die Handschrift hektischer. 'Sie benutzen uns alle. Weber hatte Recht. Die Tür geht in beide Richtungen. Was auf der anderen Seite ist, will HEREIN.' Die letzte Seite enthält nur einen Satz: 'Wenn du das liest, Robert, dann weißt du bereits zu viel oder zu wenig.'",
        choices: [
            {
                text: "Über die Erwähnung deines Namens nachdenken",
                nextId: "scene_name_mention",
                addClue: {
                    id: "prior_connection",
                    text: "Du scheinst eine vorherige Verbindung zu Schäfer zu haben, die aus deinem Gedächtnis gelöscht wurde."
                }
            },
            {
                text: "Nach weiteren Informationen zu 'Substanz R-7' suchen",
                nextId: "scene_substance_search",
                addClue: {
                    id: "raven_serum",
                    text: "Substanz R-7 ('Raven Serum') ist eine Weiterentwicklung von Schäfers ursprünglicher Forschung, die Wahrnehmungsbarrieren auflösen kann."
                }
            },
            {
                text: "Die Lage des Ortes verlassen, bevor jemand dich entdeckt",
                nextId: "scene_escape_chamber",
                addClue: {
                    id: "followed",
                    text: "Auf dem Rückweg bemerkst du Fußspuren im feuchten Boden, die nicht von dir stammen – jemand war nach Schäfer hier oder beobachtet den Ort."
                }
            }
        ]
    },

    scene_identity_crisis: {
        text: "'Meine Vergangenheit?' fragst du scharf. 'Was wissen Sie über mich?' Hoffmann betrachtet dich mit einem Ausdruck, der zwischen Mitgefühl und Kalkül schwankt. 'Robert Weber, 41 Jahre alt. Privatdetektiv seit zwölf Jahren, spezialisiert auf Vermisste. Vorher...' Er zögert bedeutungsvoll. 'Vorher Polizist, bis zu dem... Vorfall.' Dein Kopf schmerzt stärker. Welcher Vorfall? Du erinnerst dich an deine Polizeizeit, aber da war nichts Besonderes. Oder? 'Ihre Frau, Robert', sagt Hoffmann sanft. 'Sie haben nie darüber gesprochen?' Ein Bild blitzt vor deinem inneren Auge auf: eine Frau mit langen dunklen Haaren, ein Lächeln. Dann Blut. So viel Blut. 'Ich bin nicht verheiratet', sagst du, aber deine Stimme klingt unsicher. Hoffmann seufzt. 'Interessant.' Er öffnet eine Schublade, nimmt eine Akte heraus. 'Vielleicht wird es Zeit, dass wir ehrlich zueinander sind.'",
        choices: [
            {
                text: "Die Akte anschauen, die Hoffmann dir anbietet",
                nextId: "scene_personal_file",
                addClue: {
                    id: "patient_weber",
                    text: "Die Akte enthält Aufnahmeunterlagen für einen Patienten namens Robert Weber, mit deinem Foto, aber einer anderen Lebensgeschichte."
                }
            },
            {
                text: "Dich auf deine Erinnerungen konzentrieren und versuchen, den 'Vorfall' zu rekonstruieren",
                nextId: "scene_memory_reconstruction",
                addClue: {
                    id: "trauma_flashbacks",
                    text: "Bruchstücke einer traumatischen Erinnerung tauchen auf: Stimmen, ein Streit, eine Waffe in deiner Hand, eine Frau, die zu Boden fällt."
                }
            },
            {
                text: "Hoffmann beschuldigen, mit deinem Verstand zu spielen und Druck machen",
                nextId: "scene_hoffmann_confrontation",
                addClue: {
                    id: "defensive_doctor",
                    text: "Hoffmann reagiert defensiv und ruft Sicherheitspersonal, als würde er ein vorbereitetes Protokoll für einen 'instabilen Patienten' befolgen."
                }
            }
        ]
    },

    scene_lighthouse_cellar: {
        text: "Bei Ebbe kehrst du zum Leuchtturm zurück. Die unterirdische Kammer, die du zuvor entdeckt hast, führt weiter, als du zunächst dachtest. Ein schmaler Durchgang, nur bei Niedrigwasser zugänglich, verläuft in die felsige Küste hinein. Du zwängst dich hindurch, das Wasser reicht dir noch bis zu den Knöcheln. Der Gang mündet in eine größere natürliche Höhle, die kunstvoll erweitert wurde. Was du siehst, verschlägt dir den Atem: Ein kreisförmiger Raum mit sieben steinernen Säulen. Zwischen ihnen sind moderne medizinische Geräte aufgebaut - Monitore, Infusionsständer, EEG-Maschinen. In der Mitte steht ein Stuhl, der an einen elektrischen Stuhl erinnert, mit Gurten und Elektroden. Die Wände sind mit dem Symbol übersät, das du nun schon kennst. Auf einem der Monitore läuft eine Videoschleife: Patienten, die an den Stuhl geschnallt werden, Ärzte in Kitteln, die Injektionen verabreichen. Die Patienten schreien stumm, ihre Körper verkrampfen sich. Dann erschlaffen sie, bevor sie mit leeren Augen aufwachen und zu sprechen beginnen - aber ihre Lippen bewegen sich nicht synchron mit den Worten.",
        choices: [
            {
                text: "Das Video genauer analysieren",
                nextId: "scene_ritual_recording",
                addClue: {
                    id: "possession_evidence",
                    text: "Das Video dokumentiert, was wie eine Art Persönlichkeitstransfer oder -überlagerung aussieht, bei der die Patienten eine fremdartige Präsenz zu beherbergen scheinen."
                }
            },
            {
                text: "Die medizinischen Geräte untersuchen",
                nextId: "scene_equipment_analysis",
                addClue: {
                    id: "reality_manipulation",
                    text: "Die Geräte sind für 'gezielte Bewusstseinsmodifikation' konzipiert, mit Einstellungen für 'Auflösung der Ich-Grenzen' und 'Öffnung der mentalen Schwelle'."
                }
            },
            {
                text: "Nach Hinweisen auf Schäfers Verbleib suchen",
                nextId: "scene_schaefer_traces",
                addClue: {
                    id: "escape_plan",
                    text: "Schäfer hat einen Plan hinterlassen, wie er die Insel verlassen wollte - mit einem Boot, das an der Westküste versteckt ist."
                }
            }
        ]
    },

    scene_side_effects: {
        text: "'Nebenwirkungen?' wiederholst du. 'Bei experimentellen Behandlungen gibt es doch immer unerwartete Effekte.' Hoffmann zuckt leicht zusammen, fasst sich aber schnell wieder. 'Natürlich, wie bei jeder Pionierarbeit.' Er räuspert sich. 'Manche Patienten erleben vorübergehende Desorientierung. Andere berichten von... nun, sagen wir, verstärkten Sinneswahrnehmungen. Synästhesie, erweiterte Wahrnehmung.' Er senkt die Stimme. 'Einige wenige Fälle waren problematischer. Persönlichkeitsveränderungen. Identitätsverlust.' Seine Augen fixieren dich durchdringend. 'Stellen Sie sich vor, wer Sie sind, Ihre ganze Identität, löst sich auf. Und was bleibt, ist ein... leeres Gefäß.' Ein kalter Schauer läuft dir über den Rücken. 'Glücklicherweise konnten wir bei fast allen Patienten wieder eine stabile Persönlichkeit etablieren.' - 'Fast allen?', hakst du nach. 'Nun', entgegnet Hoffmann mit einem dünnen Lächeln, 'manche sind noch in Behandlung. Die Frage ist immer: Wer willst du sein, wenn du die Wahl hast?'",
        choices: [
            {
                text: "Nach den aktuellen 'Problemfällen' fragen",
                nextId: "scene_problem_cases",
                addClue: {
                    id: "special_patients",
                    text: "Im Ostflügel werden Patienten mit besonders schweren 'Nebenwirkungen' isoliert - einige scheinen multiple Persönlichkeiten entwickelt zu haben."
                }
            },
            {
                text: "Wissen wollen, wie genau die 'stabile Persönlichkeit' wieder etabliert wird",
                nextId: "scene_personality_reconstruction",
                addClue: {
                    id: "identity_implantation",
                    text: "Mit einer Kombination aus Medikamenten, Hypnose und gefälschten 'Erinnerungsstützen' werden Patienten neue Identitäten implantiert."
                }
            },
            {
                text: "Nach der ethischen Grundlage des Projekts fragen",
                nextId: "scene_ethics_question",
                addClue: {
                    id: "military_oversight",
                    text: "Das Projekt untersteht keiner normalen ethischen Aufsicht, sondern einer militärischen Sondererlaubnis für 'Forschung im nationalen Interesse'."
                }
            }
        ]
    },

    scene_late_night_investigation: {
        text: "Lange nach Mitternacht schleichst du zurück zum Überwachungsraum. Die Gänge der Klinik sind gespenstisch still, nur gedämpfte Geräusche dringen aus manchen Patientenzimmern. Mit dem Schlüssel, den du heimlich kopiert hast, öffnest du die Tür. Der Raum liegt im Dunkeln, nur die Monitore werfen ein bläuliches Licht. Du setzt dich an den Hauptcomputer. Das Passwort zu knacken dauert länger als erhofft, aber schließlich gewährst du dir Zugang zu den Archiven. Was du findest, bestätigt deine Befürchtungen: Systematisch gelöschte Dateien, manipulierte Zeitstempel. In einem versteckten Ordner entdeckst du die originalen Aufnahmen: Patienten, die nachts aus ihren Zimmern geholt werden. Ärzte, die seltsame Apparaturen transportieren. Und dann findest du eine Aufnahme, die dich erstarren lässt: Du selbst, in Patientenkleidung, wirst von zwei Pflegern durch einen Korridor geführt. Das Datum: zwei Wochen vor deiner vermeintlichen Ankunft als Detektiv. Ein Geräusch an der Tür lässt dich aufschrecken.",
        choices: [
            {
                text: "Die Datei schnell auf einen USB-Stick kopieren und fliehen",
                nextId: "scene_evidence_secured",
                addClue: {
                    id: "video_proof",
                    text: "Du besitzt nun Beweise, dass du bereits vor deiner 'Ankunft' als Patient auf der Insel warst."
                }
            },
            {
                text: "Dich verstecken und beobachten, wer den Raum betritt",
                nextId: "scene_midnight_visitor",
                addClue: {
                    id: "night_protocol",
                    text: "Dr. Schneider und Schwester Maria führen nächtliche Kontrollen durch, um sicherzustellen, dass keine Beweise zurückbleiben."
                }
            },
            {
                text: "Nach weiteren Aufnahmen von dir suchen",
                nextId: "scene_self_recordings",
                addClue: {
                    id: "treatment_sessions",
                    text: "Es existieren mehrere Aufnahmen deiner 'Behandlungssitzungen', in denen du einer Gehirnwäsche unterzogen wirst, um dich glauben zu lassen, du seist ein Detektiv."
                }
            }
        ]
    }
};
