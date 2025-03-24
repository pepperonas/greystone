// Interaktiver Thriller im Stil von Shutter Island
// Szenen 26-30

const gameData = {
    scene_evidence_secured: {
        text: "Mit zitternden Fingern kopierst du die Datei auf einen USB-Stick, den du in der Schreibtischschublade gefunden hast. Das Geräusch an der Tür wird lauter – jemand versucht, hereinzukommen. Du ziehst den Stick ab, schaltest den Computer aus und hetzt zum Fenster. Es ist klein, aber du kannst dich hindurchzwängen. Gerade als die Tür aufgeht, gleitest du ins Freie. In der Dunkelheit hörst du eine verärgerte Stimme: 'Er war hier. Verdammt!' Es ist Dr. Schneider. Du drückst dich an die Wand, während Taschenlampen den Boden absuchen. Mit dem Stick fest in deiner Hand schleichst du zurück zu deinem Zimmer – nicht dem Gästezimmer, das man dir als 'Detektiv' zugewiesen hat, sondern zu den Patientenunterkünften im Westflügel. Ein Impuls, den du nicht erklären kannst, führt dich zu Zimmer W-117. Der Schlüssel in deiner Tasche passt. Im Inneren findest du ein spartanisch eingerichtetes Zimmer mit einem Bett, einem Schreibtisch und persönlichen Gegenständen – deinen persönlichen Gegenständen. Ein Foto deiner Frau. Briefe mit deiner Handschrift. Tagebucheinträge, die deine 'Behandlung' dokumentieren. Die Wahrheit ist unausweichlich: Du bist Patient Robert Weber, nicht Detektiv.",
        choices: [
            {
                text: "Die Beweise analysieren und die Wahrheit über deine Vergangenheit herausfinden",
                nextId: "scene_truth_revealed",
                addClue: {
                    id: "real_identity",
                    text: "Du warst ein Polizist, der nach dem Tod seiner Frau einen Nervenzusammenbruch erlitt und eine alternative Realität erschuf, in der du als Detektiv arbeitest."
                }
            },
            {
                text: "Die Beweise als Teil der Verschwörung betrachten – ein ausgeklügelter Versuch, dich in den Wahnsinn zu treiben",
                nextId: "scene_conspiracy_fight",
                addClue: {
                    id: "elaborate_setup",
                    text: "Die Raven Island-Klinik könnte ein komplexes Setup sein, um dich zu diskreditieren, weil du der Verschwörung zu nahe gekommen bist."
                }
            },
            {
                text: "Schäfers Notizen und das Video zusammenbringen – könnte eine 'Persönlichkeitsübertragung' stattgefunden haben?",
                nextId: "scene_transfer_theory",
                addClue: {
                    id: "identity_transfer",
                    text: "Die Experimente könnten dazu geführt haben, dass Schäfers Bewusstsein oder Persönlichkeitselemente auf dich übertragen wurden."
                }
            }
        ]
    },

    scene_ritual_recording: {
        text: "Du spulst das Video zurück und beobachtest den Prozess von Anfang an. Ärzte in weißen Kitteln, darunter Hoffmann und Schneider, bereiten einen Patienten vor. Er bekommt eine Injektion – vermutlich Substanz R-7. Elektroden werden an seinem Kopf befestigt. Sieben Personen stellen sich um den Stuhl, jede neben einer der Säulen. Sie tragen Masken – nicht medizinische, sondern rituelle, mit dem Symbol darauf. Sie beginnen einen monotonen Gesang, während die Maschinen summen. Der Patient verkrampft sich, sein Körper bäumt sich auf. Auf den Monitoren siehst du wilde EEG-Ausschläge, als würde sein Gehirn überaktiviert. Dann erschlafft er plötzlich. Stille. Als er die Augen wieder öffnet, scheint etwas anders. Er spricht, aber seine Stimme klingt fremd, tiefer, mit einem seltsamen Akzent. 'Transfer erfolgreich', notiert Schneider. 'Subjekt C-7 hat die Schwelle überschritten.' Der Patient – oder was auch immer jetzt in ihm ist – schaut direkt in die Kamera und lächelt auf eine Weise, die dir das Blut in den Adern gefrieren lässt. 'Weitere Gefäße werden benötigt', sagt die fremde Stimme. 'Die Durchquerung beginnt.'",
        choices: [
            {
                text: "Nach weiteren Informationen über 'Subjekt C-7' und die 'Durchquerung' suchen",
                nextId: "scene_crossing_research",
                addClue: {
                    id: "invasion_plan",
                    text: "Die 'Durchquerung' scheint ein Plan zu sein, bei dem Wesenheiten aus einer anderen Realitätsebene in menschliche 'Gefäße' transferiert werden."
                }
            },
            {
                text: "Die Identitäten der maskierten Personen herausfinden wollen",
                nextId: "scene_cultists_identities",
                addClue: {
                    id: "inner_circle",
                    text: "Der 'innere Kreis' besteht aus Schlüsselfiguren der Klinik sowie einflussreichen externen Personen, darunter General Weiss."
                }
            },
            {
                text: "Eine Kopie des Videos sichern und fliehen",
                nextId: "scene_escape_with_evidence",
                addClue: {
                    id: "cult_exposure",
                    text: "Das Video ist ein entscheidender Beweis für die wahre Natur der Experimente und könnte die Verschwörung aufdecken."
                }
            }
        ]
    },

    scene_personal_file: {
        text: "Du nimmst die Akte, die Hoffmann dir reicht. Dein Herz rast, während du sie öffnest. Das erste Blatt trifft dich wie ein Schlag: ein Aufnahmebogen für die psychiatrische Einrichtung Raven Island. Patient: Robert Weber. Dein Name. Dein Geburtsdatum. Dein Foto, aber du siehst anders aus – erschöpft, verwirrt, mit leerem Blick. Diagnose: Akute Psychose mit dissoziativen Elementen nach traumatischem Ereignis. Du blätterst weiter, liest Behandlungsnotizen, Medikamentenlisten. Aufnahmedatum: drei Monate zuvor. Der letzte Eintrag, von vor zwei Wochen: 'Patient zeigt gutes Ansprechen auf experimentelle Therapie. Rollenspiel-Ansatz implementiert. Überwachte Wiedereinführung in kontrollierte Umgebung geplant.' Hoffmann beobachtet deine Reaktion. 'Es tut mir leid, Robert', sagt er sanft. 'Wir dachten, dieser Ansatz könnte helfen. Dich Schritt für Schritt zur Wahrheit führen.' Er nimmt ein Foto aus der Akte – du und eine dunkelhaarige Frau, lächelnd. 'Erinnerst du dich an Christine? Deine Frau?'",
        choices: [
            {
                text: "Die Echtheit der Akte anzweifeln und Hoffmann der Manipulation beschuldigen",
                nextId: "scene_denial",
                addClue: {
                    id: "fabricated_evidence",
                    text: "Die Dokumente könnten gefälscht sein, um dich an deiner eigenen Identität zweifeln zu lassen – Teil des Experiments."
                }
            },
            {
                text: "Versuchen, dich an Christine zu erinnern",
                nextId: "scene_wife_memory",
                addClue: {
                    id: "tragedy_truth",
                    text: "Erinnerungsfragmente kehren zurück: ein Streit, eine Waffe, ein schrecklicher Unfall – du hast deine Frau getötet und konntest die Schuld nicht ertragen."
                }
            },
            {
                text: "Nach den Details der 'experimentellen Therapie' und des 'Rollenspiel-Ansatzes' fragen",
                nextId: "scene_therapy_details",
                addClue: {
                    id: "controlled_delusion",
                    text: "Die Klinik nutzt kontrollierte Wahnvorstellungen als Therapie, lässt Patienten Rollen spielen, um traumatische Erinnerungen schrittweise zu verarbeiten."
                }
            }
        ]
    },

    scene_personality_reconstruction: {
        text: "'Wie genau stellen Sie eine 'stabile Persönlichkeit' wieder her?', fragst du, während du Hoffmann scharf beobachtest. Er wirkt kurz unbehaglich, entscheidet sich dann aber für Offenheit. 'Der menschliche Geist braucht eine kohärente Erzählung. Eine Geschichte, die Sinn ergibt.' Er steht auf, geht zum Fenster. 'Wenn die ursprüngliche Persönlichkeit... kompromittiert ist, können wir eine neue schaffen.' Er dreht sich zu dir um, seine Augen glänzen fast fanatisch. 'Wir verwenden eine Kombination aus gezielter Medikation, Hypnosetechniken und sogenannten Ankerreizen – Fotos, Briefe, persönliche Gegenstände – um eine neue Identität zu verankern.' Er lächelt dünn. 'Es ist erstaunlich, wie leicht das Gehirn eine neue Geschichte akzeptiert, wenn die alte zu schmerzhaft ist. Die Kunst liegt darin, eine Identität zu konstruieren, die zum Grundgerüst der Persönlichkeit passt.' Er fixiert dich intensiv. 'Manchmal ist die neue Identität sogar besser als die ursprüngliche. Stabiler. Nützlicher.'",
        choices: [
            {
                text: "Nach der ethischen Grundlage dieser Praktiken fragen",
                nextId: "scene_ethics_dilemma",
                addClue: {
                    id: "utilitarian_approach",
                    text: "Die Klinikleitung rechtfertigt ihre Methoden mit dem 'größeren Wohl' und der 'Heilung' von sonst unheilbaren Patienten."
                }
            },
            {
                text: "Wissen wollen, wie viele Patienten dieser Prozedur unterzogen wurden",
                nextId: "scene_experiment_scale",
                addClue: {
                    id: "mass_manipulation",
                    text: "Fast alle Patienten auf Raven Island sind 'rekonstruierte Persönlichkeiten', einige mehrfach – ein Experiment in beispiellosem Ausmaß."
                }
            },
            {
                text: "Fragen, ob dieser Prozess bei dir angewendet wurde",
                nextId: "scene_personal_reconstruction",
                addClue: {
                    id: "detective_identity",
                    text: "Deine Identität als Detektiv könnte eine sorgfältig konstruierte Illusion sein, erschaffen, um einen traumatischen Zusammenbruch zu überdecken."
                }
            }
        ]
    },

    scene_name_mention: {
        text: "Dein Name in Schäfers Notizbuch lässt dich erstarren. 'Wenn du das liest, Robert, dann weißt du bereits zu viel oder zu wenig.' Es ist, als hätte er gewusst, dass du kommen würdest. Als hätte er dich gekannt. Aber wie? Du durchsuchst das Notizbuch erneut, suchst nach weiteren Erwähnungen deines Namens. Auf einer der frühen Seiten findest du einen Eintrag: 'Weber macht Fortschritte. Seine Widerstandsfähigkeit gegen R-7 ist bemerkenswert. Möglicherweise der ideale Kandidat für Phase 3.' Und später: 'Weber verändert sich. Er beginnt Fragen zu stellen. Zu gefährlich. Hoffmann will ihn zurücksetzen.' Auf der vorletzten Seite ein hastig geschriebener Absatz: 'Sie haben Weber neu programmiert. Aus dem Forscher einen Detektiv gemacht. Ironisch. Sie wissen nicht, dass ich Vorkehrungen getroffen habe. Erinnerungsfragmente, eingebettet in seinem Unterbewusstsein. Die Wahrheit wird durchsickern.' Ein Geräusch lässt dich aufschrecken – Schritte nähern sich dem Leuchtturm.",
        choices: [
            {
                text: "Fliehen und das Notizbuch mitnehmen",
                nextId: "scene_escape_with_diary",
                addClue: {
                    id: "embedded_memories",
                    text: "Schäfer hat 'Erinnerungsfragmente' in deinem Bewusstsein versteckt, die durch bestimmte Trigger aktiviert werden können."
                }
            },
            {
                text: "Dich verstecken und beobachten, wer kommt",
                nextId: "scene_lighthouse_visitor",
                addClue: {
                    id: "elena_connection",
                    text: "Elena Krüger hat den Leuchtturm aufgesucht und scheint mit Schäfers Plan verbunden zu sein, dir zu helfen."
                }
            },
            {
                text: "Über deine mögliche Rolle als 'Forscher' nachdenken",
                nextId: "scene_researcher_past",
                addClue: {
                    id: "former_scientist",
                    text: "Du warst möglicherweise Teil des Forschungsteams von Projekt Rabe, bevor deine Erinnerungen manipuliert wurden."
                }
            }
        ]
    }
};
