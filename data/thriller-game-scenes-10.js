// Interaktiver Thriller im Stil von Shutter Island
// Szenen 46-50

const gameData = {
    scene_path_to_freedom: {
        text: "Die Wochen vergehen in einem Rhythmus aus Therapiesitzungen, Gruppenaktivitäten und stillen Momenten der Selbstreflexion. Du akzeptierst den Behandlungsplan vollständig, arbeitest aktiv an deiner Genesung. Die Erinnerungen an Christine sind nicht mehr so schmerzhaft – nicht vergessen, aber integriert in dein neues Selbstverständnis. Dr. Hoffmann ist beeindruckt von deinen Fortschritten. 'Sie haben eine bemerkenswerte Resilienz bewiesen, Robert', sagt er bei einer eurer letzten Sitzungen. 'Ich denke, wir können über die nächsten Schritte sprechen.' Er reicht dir ein Dokument – einen Antrag auf bedingte Entlassung. 'Sie würden zunächst in einer betreuten Wohneinrichtung auf dem Festland leben. Regelmäßige Therapiesitzungen, natürlich. Aber auch die Möglichkeit, wieder ein selbstbestimmtes Leben aufzubauen.' Du starrst auf das Papier, spürst ein vorsichtiges Aufkeimen von Hoffnung. 'Es wird nicht leicht', warnt Hoffmann. 'Die Welt da draußen hat sich weitergedreht. Aber ich glaube, Sie sind bereit für diesen Schritt.'",
        choices: [
            {
                text: "Das Angebot dankbar annehmen und dich auf ein neues Leben vorbereiten",
                nextId: "ending_redemption",
                addClue: {
                    id: "new_beginning",
                    text: "Die Akzeptanz deiner Vergangenheit eröffnet die Möglichkeit einer echten Zukunft – nicht ohne Schmerz, aber mit neuer Perspektive."
                }
            },
            {
                text: "Dr. Mertens um ihre Einschätzung bitten, bevor du unterschreibst",
                nextId: "scene_mertens_warning",
                requireClue: "staff_suspicions",
                addClue: {
                    id: "hidden_condition",
                    text: "Dr. Mertens warnt dich heimlich, dass deine Entlassung an Bedingungen geknüpft sein könnte, die in den offiziellen Dokumenten nicht erwähnt werden."
                }
            },
            {
                text: "Um Bedenkzeit bitten – etwas fühlt sich nicht richtig an",
                nextId: "scene_final_investigation",
                requireClue: "dual_awareness",
                addClue: {
                    id: "last_puzzle",
                    text: "Dein wiedererwachendes kritisches Denken erkennt subtile Unstimmigkeiten in Hoffmanns Verhalten und dem Entlassungsprozess."
                }
            }
        ]
    },

    scene_resistance_alliance: {
        text: "Du findest Elena Krüger in der Kunsttherapie, scheinbar vertieft in ein Gemälde. Als du dich neben sie setzt, spricht sie ohne aufzusehen. 'Ich hatte mich schon gefragt, wann du kommen würdest.' Ihr Pinsel formt das inzwischen vertraute Symbol auf der Leinwand – den Kreis mit dem vertikalen Strich. 'Ich kenne dich, Robert Weber. Den echten Robert Weber.' Ihr Blick trifft deinen. 'Wir haben zusammengearbeitet, bevor sie dich... verändert haben.' In den folgenden Stunden, in vorsichtigen, unauffälligen Gesprächen, erfährst du von der Widerstandsgruppe. Fünf Patienten, drei Pflegekräfte, ein Sicherheitsmann, Dr. Mertens – alle mit verschiedenen Graden der Erkenntnis über die wahre Natur von Projekt Rabe. 'Wir warten seit Wochen auf eine Gelegenheit', erklärt Elena später in ihrem Zimmer, wo ihr unbeobachtet sprechen könnt. Sie zeigt dir einen handgezeichneten Plan der Insel, markiert mit Überwachungspunkten, Patrouillen und sicheren Wegen. 'In drei Tagen ist die Hauptdurchquerung. Unser einziger Zeitpunkt zum Handeln.'",
        choices: [
            {
                text: "Der Gruppe beitreten und einen koordinierten Angriff auf die Ankerpunkte planen",
                nextId: "scene_resistance_plan",
                addClue: {
                    id: "coordinated_attack",
                    text: "Mit genügend Verbündeten könnte ein simultaner Angriff auf alle sieben Ankerpunkte während des Rituals die Entitäten permanent vertreiben."
                }
            },
            {
                text: "Dein Wissen über das Umkehrprotokoll teilen und nach Unterstützung bei der Herstellung suchen",
                nextId: "scene_reversal_collaboration",
                requireClue: "reversal_protocol",
                addClue: {
                    id: "formula_synthesis",
                    text: "Elena und Dr. Mertens können dir Zugang zum Labor verschaffen, um die modifizierte Substanz R-7 für das Umkehrprotokoll zu synthetisieren."
                }
            },
            {
                text: "Einen alternativen Plan vorschlagen: Beweise sammeln und externe Hilfe holen",
                nextId: "scene_evidence_gathering",
                addClue: {
                    id: "outside_contact",
                    text: "Die Widerstandsgruppe hat einen potenziellen Kommunikationskanal zum Festland, der bisher aus Sicherheitsgründen nicht genutzt wurde."
                }
            }
        ]
    },

    scene_infiltration_plan: {
        text: "Die nächsten 48 Stunden verbringt ihr mit intensiver Planung. Christine kennt die Sicherheitsroutinen der Insel, Sophia bringt ihre investigativen Fähigkeiten ein, und deine wiedergewonnenen Erinnerungen an die Anlage vervollständigen das Bild. 'Wir brauchen unwiderlegbare Beweise', erklärt Sophia. 'Video, Dokumente, Proben der Substanz R-7. Und idealerweise einen Insider, der aussagen wird.' Christine breitet eine detaillierte Karte von Raven Island aus. 'Der Sicherheitszaun hat eine Schwachstelle hier im Nordosten. Die Patrouillen sind vorhersehbar, alle 30 Minuten. Mit dem Boot können wir dich in dieser Bucht absetzen.' Sie markiert einen Ort. 'Du hast etwa fünf Stunden, bevor dein Fehlen bemerkt wird.' Während der Nacht bereitet ihr die Ausrüstung vor: Aufnahmegeräte, Nachtsichtgeräte, Kommunikationsmittel. Christine drückt dir einen kleinen schwarzen Gegenstand in die Hand. 'Ein EMP-Generator. Sollte alles schiefgehen, kann er die elektronischen Systeme der Insel kurzzeitig lahmlegen.' Ihr Blick ist intensiv. 'Genug für eine Flucht. Oder um das Ritual zu stören.'",
        choices: [
            {
                text: "Den Plan ausführen und nach handfesten Beweisen suchen",
                nextId: "scene_evidence_mission",
                addClue: {
                    id: "concrete_evidence",
                    text: "Mit konkreten Beweisen könnte Sophia die Geschichte veröffentlichen und staatliche Ermittlungen erzwingen, bevor die Hauptdurchquerung stattfindet."
                }
            },
            {
                text: "Versuchen, Elena Krüger und andere potenzielle Verbündete auf der Insel zu kontaktieren",
                nextId: "scene_inside_allies",
                addClue: {
                    id: "internal_resistance",
                    text: "Es gibt bereits eine Widerstandsgruppe auf der Insel, die mit externen Kontakten ein koordiniertes Vorgehen planen könnte."
                }
            },
            {
                text: "Den ursprünglichen Plan ändern – keine Beweise sammeln, sondern direkt die Hauptdurchquerung sabotieren",
                nextId: "scene_sabotage_mission",
                addClue: {
                    id: "critical_disruption",
                    text: "Mit dem EMP-Generator an der richtigen Stelle und zum richtigen Zeitpunkt könntest du das Ritual komplett unterbrechen und möglicherweise die Entitäten zurückdrängen."
                }
            }
        ]
    },

    scene_substance_creation: {
        text: "Mit deinem wiedererwachten Fachwissen weißt du genau, was du für die Herstellung der modifizierten Substanz R-7 brauchst. Die Herausforderung: Zugang zum Labor gewinnen, ohne Verdacht zu erregen. Du beobachtest die Routinen, identifizierst ein Zeitfenster um Mitternacht, wenn die Labors minimal besetzt sind. Mit einem gestohlenen Sicherheitsausweis gelangst du in den Forschungsbereich. Das Labor ist ein vertrauter Anblick – hier hast du früher gearbeitet. Du findest die Grundsubstanzen genau dort, wo du sie vermutest. Die Synthese ist komplex, erfordert absolute Präzision. Jede Komponente muss exakt dosiert werden: die neuroinhibitorischen Elemente, die die synaptischen Brücken blockieren; die molekularen Verstärker, die die Wirkung potenzieren; die stabilisierenden Faktoren. Stunden vergehen in angespannter Konzentration. Endlich hältst du eine kleine Phiole mit blau schimmernder Flüssigkeit in den Händen – das Gegenmittel. Plötzlich hörst du Schritte im Korridor. Eilig versteckst du die Phiole in deiner Kleidung und beginnst, aufzuräumen. Die Tür öffnet sich – Dr. Schneider betritt das Labor, sein Blick sofort misstrauisch.",
        choices: [
            {
                text: "Eine Ausrede improvisieren – du konntest nicht schlafen und wolltest dich mit Arbeit ablenken",
                nextId: "scene_lab_excuse",
                addClue: {
                    id: "believable_cover",
                    text: "Schneider scheint deine Erklärung zu akzeptieren, bleibt aber wachsam – du hast wenig Zeit, bevor er oder andere Verdacht schöpfen."
                }
            },
            {
                text: "Schneider direkt konfrontieren – du weißt, was er ist",
                nextId: "scene_entity_confrontation",
                addClue: {
                    id: "direct_challenge",
                    text: "Schneider reagiert mit überraschender Offenheit, bestätigt deine Vermutungen teilweise und offenbart Details über die wahre Natur der 'Wartenden'."
                }
            },
            {
                text: "Fliehen und das Gegenmittel in Sicherheit bringen",
                nextId: "scene_lab_escape",
                addClue: {
                    id: "pursuit_initiated",
                    text: "Deine Flucht löst Alarm aus – die gesamte Insel wird in höchste Alarmbereitschaft versetzt, was die Umsetzung des Umkehrprotokolls erschwert, aber auch das Hauptritual stören könnte."
                }
            }
        ]
    },

    scene_mertens_secret: {
        text: "Nach Mitternacht schleichst du zu Dr. Mertens' Büro. Du hast ihre Routine beobachtet – sie arbeitet oft spät. Ein schwacher Lichtschein unter der Tür bestätigt deine Vermutung. Du klopfst leise. Nach kurzem Zögern öffnet sie, wirkt nicht überrascht, dich zu sehen. 'Ich hatte gehofft, dass du kommst.' Sie schließt sorgfältig die Tür, überprüft, ob die Jalousien vollständig geschlossen sind, und schaltet ein kleines Gerät ein, das ein leises Rauschen erzeugt. 'Gegen Abhörgeräte', erklärt sie. Was sie dir dann eröffnet, erschüttert deine gerade gewonnene Stabilität erneut. 'Schäfer hatte Recht, Robert. Etwas Unheimliches geschieht hier. Ich bin mir nicht sicher, ob es sich um unethische Experimente handelt oder um etwas... anderes.' Sie holt eine Akte aus einem versteckten Safe. 'Ich habe heimlich Daten gesammelt. Patienten mit identischen 'Wahnvorstellungen', ohne vorherigen Kontakt. Personal mit plötzlichen, drastischen Persönlichkeitsveränderungen. Und dann die nächtlichen 'Sitzungen' im Ostflügel, zu denen nur Hoffmann und sein engster Kreis Zugang haben.'",
        choices: [
            {
                text: "Dr. Mertens als Verbündete gewinnen und gemeinsam nach weiteren Beweisen suchen",
                nextId: "scene_mertens_alliance",
                addClue: {
                    id: "medical_authority",
                    text: "Dr. Mertens' professionelle Autorität und Zugang könnten entscheidend sein, um die Vorgänge auf Raven Island zu dokumentieren und aufzudecken."
                }
            },
            {
                text: "Ihr von deinen 'Wahnvorstellungen' über Entitäten und Durchquerungen erzählen",
                nextId: "scene_sharing_truth",
                requireClue: "ancient_presence",
                addClue: {
                    id: "scientific_perspective",
                    text: "Dr. Mertens betrachtet die 'Entitäten' aus wissenschaftlicher Perspektive – möglicherweise Manifestationen kollektiver psychischer Energie oder eine bisher unbekannte Form von Bewusstsein."
                }
            },
            {
                text: "Nach einer Möglichkeit fragen, die Insel zu verlassen und externe Hilfe zu holen",
                nextId: "scene_escape_planning",
                addClue: {
                    id: "mainland_contact",
                    text: "Dr. Mertens hat einen Kontakt auf dem Festland – einen ehemaligen Kollegen bei der Gesundheitsbehörde, der bereits Zweifel an den Praktiken auf Raven Island geäußert hat."
                }
            }
        ]
    }
};
