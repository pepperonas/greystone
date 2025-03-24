// Interaktiver Thriller im Stil von Shutter Island
// Szenen 36-40

const gameData = {
    scene_acceptance: {
        text: "Nach stundenlangem Ringen mit dir selbst triffst du eine Entscheidung. Die Beweise sind überwältigend, die zurückkehrenden Erinnerungen zu klar, um sie zu leugnen. Du suchst Dr. Hoffmann in seinem Büro auf. 'Ich bin bereit', sagst du schlicht. 'Ich verstehe jetzt.' Seine Augen weiten sich kurz in Überraschung, dann nickt er anerkennend. 'Das ist ein mutiger Schritt, Robert.' Er führt dich in einen ruhigen Therapieraum, nicht die kalten medizinischen Räume, die du befürchtet hast. Ihr sprecht stundenlang. Über Christine. Über die Nacht, die alles veränderte. Über deine Schuld, deine Trauer, deinen Zusammenbruch. Über die Detektiv-Identität, die dein Verstand erschuf, um dem Unerträglichen zu entfliehen. 'Der Heilungsprozess wird nicht leicht sein', warnt Hoffmann, 'aber du hast den schwersten Schritt bereits getan.' Als du am Fenster stehst und auf das nun ruhige Meer blickst, spürst du etwas, das du lange nicht gefühlt hast: nicht vollständige Erlösung, aber den ersten Hauch von Frieden.",
        choices: [
            {
                text: "Dich vollständig auf die Therapie einlassen",
                nextId: "scene_intensive_therapy",
                addClue: {
                    id: "genuine_treatment",
                    text: "Trotz aller Zweifel scheint ein Teil des Behandlungsprogramms tatsächlich auf deine Heilung ausgerichtet zu sein."
                }
            },
            {
                text: "Nach den seltsamen Vorfällen und Hinweisen fragen, die du entdeckt hast",
                nextId: "scene_questioning_reality",
                addClue: {
                    id: "partial_truth",
                    text: "Hoffmann gibt zu, dass bestimmte Aspekte deiner 'Detektiv-Ermittlung' bewusst inszeniert wurden, um dir zu helfen, dich deiner Wahrheit zu stellen."
                }
            },
            {
                text: "Um ein Treffen mit anderen Patienten bitten, insbesondere Elena Krüger",
                nextId: "scene_patient_group",
                addClue: {
                    id: "shared_delusions",
                    text: "Andere Patienten auf der Insel haben ähnliche 'therapeutische Szenarien' durchlaufen, mit unterschiedlichen Ergebnissen."
                }
            }
        ]
    },

    scene_hosts_identification: {
        text: "Zurück in deinem provisorischen Versteck analysierst du die Unterlagen zur Identifizierung der 'Primär-Wirte'. Die Dokumente sind kodiert, aber mit deinem wiedererwachten analytischen Verstand – vielleicht ein Überbleibsel deiner Forscher-Vergangenheit – kannst du die Muster entschlüsseln. Die sieben 'Wirte' werden durch Symbole dargestellt: Rabe, Eule, Schlange, Wolf, Spinne, Falke und Hirsch. Aus verschiedenen Notizen rekonstruierst du die Zuordnungen: Rabe ist eindeutig Dr. Hoffmann, der Projektleiter. Eule ist Dr. Schneider, der Forschungsleiter. Schlange entspricht Lena Vogt, die Sicherheitschefin. Die restlichen vier sind schwieriger zu identifizieren, aber eine Notiz gibt den entscheidenden Hinweis: 'Wolf erwartet Bericht bei Inspektion am 15.'. General Weiss, der militärische Auftraggeber. Die letzten drei scheinen externe Kontakte zu sein – eine Politikerin, ein Medienmagnat und ein Pharmaunternehmer. Am beunruhigendsten ist jedoch die Liste der 'Sekundär-Wirte': fast hundert Namen, darunter viele Patienten und Personal der Klinik – die nächste Welle der 'Durchquerung'.",
        choices: [
            {
                text: "Eine Strategie entwickeln, um die 'Primär-Wirte' zu konfrontieren",
                nextId: "scene_confrontation_plan",
                addClue: {
                    id: "weakness_discovery",
                    text: "Die Entitäten haben eine zentrale Schwäche: Sie sind an ihre 'Ankerpunkte' in den Wirten gebunden – zerstöre den Anker, vertreibe die Entität."
                }
            },
            {
                text: "Versuchen, die nächsten potentiellen 'Wirte' zu warnen",
                nextId: "scene_warning_attempt",
                addClue: {
                    id: "resistance_network",
                    text: "Unter den Patienten und dem Personal gibt es bereits einen geheimen Widerstand, angeführt von Elena Krüger und Dr. Mertens."
                }
            },
            {
                text: "Nach Informationen zu den Entitäten selbst suchen – was sind 'Die Wartenden' wirklich?",
                nextId: "scene_entities_research",
                addClue: {
                    id: "ancient_presence",
                    text: "Die Entitäten scheinen keine Neuankömmlinge zu sein – sie versuchen seit Jahrhunderten, in unsere Realität einzudringen, bisher immer durch okkulte Praktiken."
                }
            }
        ]
    },

    scene_healing_begins: {
        text: "'Ich brauche Hilfe', sagst du leise zu Hoffmann. 'Ich will... ich muss verstehen, was geschehen ist.' Hoffmann nickt ernst, aber in seinen Augen siehst du aufrichtige Erleichterung. Die folgenden Tage vergehen in einer intensiven, aber vorsichtigen therapeutischen Arbeit. Ihr rekonstruiert gemeinsam die tatsächlichen Ereignisse: deine Karriere als Polizist, deine Ehe mit Christine, die zunehmenden Spannungen aufgrund deines Alkoholproblems, der verhängnisvolle Streit. In behutsam dosierten Sitzungen konfrontierst du dich mit dem Moment, in dem die Waffe sich löste, mit Christines Tod, mit deinem Zusammenbruch. Jede Sitzung ist schmerzhaft, aber auch klärend – wie Wasser, das eine verschmutzte Wunde reinigt. 'Dein Fall ist bemerkenswert, Robert', sagt Dr. Mertens, die jetzt ebenfalls an deiner Behandlung teilnimmt. 'Die Detektiv-Persona war so detailliert, so überzeugend.' Sie zögert. 'Fast als hätte ein Teil von dir gewusst, dass du nach etwas suchst – nicht nach Schäfer, sondern nach dir selbst.'",
        choices: [
            {
                text: "Die Therapie fortsetzen und an deiner Entlassung aus der Klinik arbeiten",
                nextId: "scene_rehabilitation",
                addClue: {
                    id: "recovery_path",
                    text: "Mit fortschreitender Therapie erkennst du einen realistischen Weg zur Rehabilitation und eventuellen Wiedereingliederung in die Gesellschaft."
                }
            },
            {
                text: "Nach Schäfer fragen – war er ein realer Patient oder nur Teil deiner Wahnvorstellung?",
                nextId: "scene_schaefer_reality",
                addClue: {
                    id: "real_patient",
                    text: "Eric Schäfer war tatsächlich ein Patient, der vor kurzem verschwand – dein therapeutisches Szenario wurde um diesen realen Vorfall herum konstruiert."
                }
            },
            {
                text: "Dr. Mertens' seltsame Formulierung hinterfragen",
                nextId: "scene_mertens_insight",
                requireClue: "researcher_past",
                addClue: {
                    id: "therapy_sabotage",
                    text: "Dr. Mertens gehört insgeheim zu jenen, die an der Legitimität des Projekts zweifeln, und versucht, durch subtile Hinweise dein wahres Ich zu wecken."
                }
            }
        ]
    },

    scene_find_research: {
        text: "Mit deinen wiedererwachten Erinnerungen als Forscher weißt du genau, wo du suchen musst. In einer ruhigen Nacht schleichst du in den östlichen Flügel der Klinik – den Forschungsbereich, zu dem nur autorisiertes Personal Zugang hat. Dein alter Zugangscode funktioniert überraschenderweise noch an einer Nebentür. Im Inneren findest du modernste Laboreinrichtungen. Du gehst zielstrebig zu einem bestimmten Server-Raum. Hinter einem Lüftungsgitter, genau wo du es versteckt hast, findest du eine wasserdichte Metallbox. Darin: ein verschlüsselter Laptop und ein Notizbuch mit deiner Handschrift. 'Versicherungspolice', steht auf der ersten Seite. Was folgt, ist eine detaillierte Dokumentation deiner und Schäfers Entdeckungen über Projekt Rabe. Ihr hattet zunächst begeistert mitgearbeitet, überzeugt von den therapeutischen Möglichkeiten. Dann die unheimliche Wende: seltsame 'Kommunikation' während der Tests, Hoffmanns obsessives Interesse an den 'Stimmen', General Weiss' plötzliches militärisches Engagement. Und schließlich eure erschreckende Schlussfolgerung: Was auch immer durch die 'Tür' kam, wollte die Kontrolle übernehmen.",
        choices: [
            {
                text: "Den Laptop aktivieren und die gesicherten Daten überprüfen",
                nextId: "scene_data_review",
                addClue: {
                    id: "reversal_protocol",
                    text: "Unter deinen Forschungsdaten findest du Pläne für ein 'Umkehrprotokoll' – eine Methode, um die Verbindung zu den Entitäten zu kappen und sie zurückzudrängen."
                }
            },
            {
                text: "Nach Hinweisen suchen, was mit Schäfer geschehen ist",
                nextId: "scene_schaefer_fate",
                addClue: {
                    id: "escape_plan",
                    text: "Schäfer hat einen verzweifelten Plan umgesetzt, um zu fliehen und externe Hilfe zu holen – aber ob er erfolgreich war, bleibt unklar."
                }
            },
            {
                text: "Untersuchen, wer sonst noch von der Wahrheit weiß",
                nextId: "scene_allies_search",
                addClue: {
                    id: "resistance_network",
                    text: "Es gibt eine kleine Gruppe von Mitarbeitern und Patienten, die die Wahrheit kennen oder ahnen – darunter Elena Krüger und Dr. Mertens."
                }
            }
        ]
    },

    scene_sea_escape: {
        text: "Du startest den Motor des Boots und steuerst in die offene See hinaus, während hinter dir die Scheinwerfer wild durch die Nacht tanzen. Schüsse fallen, aber du bist bereits außer Reichweite. Mit der Tasche und dem USB-Stick sicher verstaut navigierst du nach den Koordinaten, die Schäfer hinterlassen hat. Der Sturm hat sich vollständig gelegt, die Nacht ist klar, der Mond dein Wegweiser. Nach zwei Stunden auf See erreichst du eine kleine Bucht an der Küste – weit entfernt von den offiziellen Häfen. Dort wartet eine Frau auf einem Steg, angespannt, wachsam. Als sie dich sieht, stürzt sie zum Ufer. 'Robert? Mein Gott, er hat es geschafft! Er hat dich tatsächlich herausgeholt!' Es ist Christine – deine angeblich tote Frau. Lebend, atmend, real. Sie umarmt dich fest, während du erstarrst, deine Realität erneut ins Wanken gerät. 'Ich weiß, du bist verwirrt', sagt sie sanft. 'Sie haben mit deinem Verstand gespielt. Mit deinen Erinnerungen.' Sie greift nach dem USB-Stick. 'Hast du Beweise mitgebracht? Wir müssen sie aufhalten, bevor die Durchquerung beginnt.'",
        choices: [
            {
                text: "Christine vertrauen und die Beweise übergeben",
                nextId: "scene_christine_alliance",
                addClue: {
                    id: "journalist_contact",
                    text: "Christine arbeitet mit einer Investigativjournalistin zusammen, die bereits Hinweise auf die unethischen Experimente gesammelt hat."
                }
            },
            {
                text: "Misstrauisch bleiben – könnte auch dies eine Manipulation sein?",
                nextId: "scene_trust_issues",
                addClue: {
                    id: "reality_test",
                    text: "Du findest Wege, die Echtheit von Christine zu überprüfen – Details aus eurer Vergangenheit, die niemand manipulieren könnte."
                }
            },
            {
                text: "Nach Schäfer fragen – hat er es ebenfalls geschafft?",
                nextId: "scene_schaefer_status",
                addClue: {
                    id: "friend_sacrifice",
                    text: "Schäfer wurde beim Versuch, weitere Beweise zu sammeln, gefasst – sein Schicksal ist ungewiss, aber seine Aufzeichnungen haben den Weg für deine Flucht geebnet."
                }
            }
        ]
    }
};
