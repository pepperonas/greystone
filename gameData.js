// Spiel-Daten
const gameData = {
    // Startpunkt der Geschichte
    start: {
        text: "Der Regen prasselt unablässig auf das Dach deines Mietwagens, als du durch die düsteren Straßen von Greystone fährst. Der Küstenort wirkt wie aus einer anderen Zeit - alte viktorianische Häuser kauern unter dem grauen Himmel, während der Nebel langsam vom Meer heranzieht.\n\nDu bist Alex Carver, Privatdetektiv, und du bist hier, um deinen alten Freund Tom Harrow zu finden. Seit zwei Wochen ist er verschwunden - kurz nachdem er dir eine kryptische Nachricht hinterlassen hatte: \"Ich bin auf etwas gestoßen, Alex. Etwas Großes. Es geht um den alten Leuchtturm und die Blackwoods. Komm nach Greystone, wenn du in drei Tagen nichts von mir hörst.\"\n\nDu parkst vor Toms Apartment-Gebäude. Im Treppenhaus riecht es nach feuchtem Holz und Salz. Vor seiner Tür hältst du inne - sie steht einen Spalt offen.",
        choices: [
            {text: "Vorsichtig hineingehen und nach Spuren suchen", nextId: "apartment_search"},
            {text: "Zuerst an der Tür klopfen und rufen", nextId: "apartment_knock"},
            {text: "Die Nachbarn befragen", nextId: "neighbors"}
        ]
    },

    // Szenario: Apartment durchsuchen
    apartment_search: {
        text: "Du schiebst die Tür langsam auf. Das Schloss ist aufgebrochen worden. Ein leises Knarren erfüllt den Raum, als du eintrittst.\n\nToms Apartment ist ein Chaos. Schubladen liegen ausgekippt auf dem Boden, Bücher sind aus den Regalen gerissen, sein Computer fehlt. Jemand hat sehr gründlich nach etwas gesucht.\n\nAuf dem Boden liegt ein zerknittertes Foto. Du hebst es auf und erkennst den alten Leuchtturm von Greystone. Auf der Rückseite steht in Toms Handschrift: \"Der Schlüssel liegt im Licht\".\n\nAuf seinem Schreibtisch findest du ein aufgeschlagenes Notizbuch mit ausgerissenen Seiten. Das Wort \"BLACKWOOD\" ist mehrfach eingekreist, daneben eine hastig gezeichnete Skizze des Leuchtturms mit einer markierten Stelle im unteren Bereich.",
        choices: [
            {
                text: "Das Foto und die Notizbuchseite mitnehmen und zum Leuchtturm fahren",
                nextId: "lighthouse",
                addClue: {
                    id: "photo",
                    text: "Foto des Leuchtturms mit der Notiz: \"Der Schlüssel liegt im Licht\""
                }
            },
            {
                text: "Weiter im Apartment nach Hinweisen suchen",
                nextId: "apartment_thorough",
                addClue: {
                    id: "notebook",
                    text: "Skizze des Leuchtturms mit markierter Stelle im unteren Bereich"
                }
            },
            {text: "Jetzt die Nachbarn befragen", nextId: "neighbors"}
        ]
    },

    // Szenario: An der Tür klopfen
    apartment_knock: {
        text: "\"Tom? Bist du da?\" rufst du, während du an die angelehnte Tür klopfst. Keine Antwort, nur das Heulen des Windes durch ein offenes Fenster.\n\nDu drückst die Tür vorsichtig weiter auf. Das Schloss ist aufgebrochen worden. Drinnen erwartet dich ein verwüstetes Apartment. Jemand hat alle Schränke und Schubladen durchwühlt.\n\nPlötzlich hörst du ein Geräusch hinter dir. Als du dich umdrehst, steht eine ältere Frau mit misstrauischem Blick im Flur.\n\n\"Wer sind Sie? Was machen Sie in Toms Wohnung?\" fragt sie mit fester Stimme.",
        choices: [
            {
                text: "Die Wahrheit sagen - du bist ein Freund auf der Suche nach Tom",
                nextId: "neighbor_truth"
            },
            {text: "Behaupten, du seist ein Verwandter von Tom", nextId: "neighbor_lie"},
            {
                text: "Ausweichen und schnell das Apartment durchsuchen",
                nextId: "apartment_thorough"
            }
        ]
    },

    // Szenario: Nachbarn befragen
    neighbors: {
        text: "Du klopfst an der Nachbartür. Nach einigen Augenblicken öffnet eine ältere Frau mit grauem Haar und wachsamen Augen.\n\n\"Ja?\" fragt sie vorsichtig, die Tür nur einen Spalt öffnend.\n\nDu erklärst, dass du nach Tom Harrow suchst, deinem Freund, der hier wohnt.\n\n\"Der Journalist?\" Sie runzelt die Stirn. \"Nicht gesehen seit... muss über eine Woche her sein. Seltsame Typen waren hier, fragten nach ihm. Anzugträger. Sagten, sie seien von irgendeiner Firma.\" Sie senkt die Stimme. \"Aber ich habe gesehen, wie einer von ihnen später mit Sheriff Malone gesprochen hat. Und dann mit dieser Blackwood-Frau. Die stecken alle unter einer Decke, wenn Sie mich fragen.\"",
        choices: [
            {
                text: "Nach den Blackwoods fragen",
                nextId: "blackwood_info",
                addClue: {
                    id: "blackwood_family",
                    text: "Die Blackwoods sind eine einflussreiche Familie in Greystone und stehen möglicherweise in Verbindung mit Toms Verschwinden"
                }
            },
            {
                text: "Nach dem Sheriff fragen",
                nextId: "sheriff_info",
                addClue: {
                    id: "sheriff",
                    text: "Sheriff Malone könnte in Toms Verschwinden verwickelt sein"
                }
            },
            {text: "Toms Apartment untersuchen", nextId: "apartment_search"}
        ]
    },

    // Informationen über die Blackwoods
    blackwood_info: {
        text: "\"Die Blackwoods?\" Die Frau schüttelt missbilligend den Kopf. \"Die reichste Familie in Greystone seit Generationen. Besitzen die Hälfte der Stadt, einschließlich der Fischfabrik und des Hafens. Elena Blackwood leitet jetzt das Familiengeschäft, seit ihr Vater vor zwei Jahren gestorben ist.\"\n\nSie lehnt sich näher. \"Die haben Geheimnisse, das sage ich Ihnen. Vor allem was den alten Leuchtturm angeht. Der gehört auch ihnen, obwohl er seit dem Unfall in den 80ern außer Betrieb ist. Tom hat dort recherchiert, hat Fragen gestellt, die niemand hier stellen möchte. Kurz darauf war er verschwunden.\"",
        choices: [
            {
                text: "Nach dem Unfall am Leuchtturm fragen",
                nextId: "accident_info",
                addClue: {
                    id: "accident",
                    text: "In den 1980ern gab es einen mysteriösen Unfall am Leuchtturm"
                }
            },
            {text: "Zum Leuchtturm fahren", nextId: "lighthouse"},
            {text: "Toms Apartment gründlicher untersuchen", nextId: "apartment_thorough"}
        ]
    },

    // Informationen über den Sheriff
    sheriff_info: {
        text: "\"Sheriff Malone?\" Die Frau senkt ihre Stimme noch weiter. \"Er ist seit über zwanzig Jahren Sheriff hier. Kam kurz nach dem... Unfall am Leuchtturm. Die Blackwoods haben ihn hierher gebracht.\" Sie schaut nervös den Flur hinunter.\n\n\"Er tut, was sie wollen. Stellt keine Fragen. Sorgt dafür, dass auch niemand anders Fragen stellt. Tom sagte, er hätte Beweise dafür, dass der Sheriff in etwas Illegales verwickelt ist. Etwas, das mit dem Leuchtturm zu tun hat und mit einem Projekt, das die Blackwoods planen.\"",
        choices: [
            {
                text: "Nach dem Leuchtturm-Unfall fragen",
                nextId: "accident_info",
                addClue: {
                    id: "sheriff_corrupt",
                    text: "Sheriff Malone arbeitet für die Blackwoods und unterdrückt Ermittlungen"
                }
            },
            {text: "Zum Leuchtturm fahren", nextId: "lighthouse"},
            {text: "Toms Apartment gründlicher untersuchen", nextId: "apartment_thorough"}
        ]
    },

    // Informationen über den Unfall
    accident_info: {
        text: "Die Frau blickt dich durchdringend an. \"Das war 1987. Drei Menschen starben in dieser Nacht. Der Leuchtturmwärter und zwei Fischer. Die offizielle Version war, dass es ein Sturm gab und dass Benzin auslief und Feuer fing. Aber...\"\n\nSie zögert. \"Es gab keinen Sturm in jener Nacht. Mein Mann war Fischer. Er sagte, das Meer war ruhig und der Himmel klar. Und der Leuchtturmwärter, Frank Miller, er hatte Streit mit Harold Blackwood wegen irgendwelcher Messungen und seltsamer Aktivitäten im Leuchtturm. Frank wollte zur Küstenwache gehen. Am nächsten Tag war er tot.\"\n\nSie seufzt tief. \"Nach dem Unfall kauften die Blackwoods den Leuchtturm und sperrten ihn. Tom hat all das wieder aufgewirbelt, als er für seinen Artikel recherchierte.\"",
        choices: [
            {
                text: "Zum Leuchtturm fahren",
                nextId: "lighthouse",
                addClue: {
                    id: "accident_year",
                    text: "Der mysteriöse Leuchtturm-Unfall ereignete sich 1987 - könnte ein wichtiges Datum sein"
                }
            },
            {
                text: "Mehr über Toms Recherche erfahren",
                nextId: "tom_research",
                addClue: {
                    id: "blackwood_project",
                    text: "Die Blackwoods führen ein geheimes Projekt durch, das mit dem Leuchtturm zusammenhängt"
                }
            },
            {text: "Toms Apartment gründlicher untersuchen", nextId: "apartment_thorough"}
        ]
    },

    // Nachbarn - Die Wahrheit sagen
    neighbor_truth: {
        text: "\"Ich bin Alex Carver, ein alter Freund von Tom\", erklärst du. \"Er hat sich seit Tagen nicht gemeldet, und ich mache mir Sorgen. Die Tür war aufgebrochen, als ich ankam.\"\n\nDie Frau mustert dich einen Moment lang, dann entspannt sich ihre Haltung etwas.\n\n\"Martha Holloway\", stellt sie sich vor. \"Ich wohne seit Jahren neben Tom. Ein guter Junge.\" Sie seufzt. \"Er ist vor etwa einer Woche verschwunden. Vorher hat er sich seltsam verhalten - kam spät nachts zurück, hatte Besuch von unheimlichen Typen. Er sagte, er recherchiere für einen wichtigen Artikel.\"\n\nSie senkt die Stimme. \"Er erwähnte den alten Leuchtturm und die Blackwoods. Sagte, er hätte etwas entdeckt, das die ganze Stadt erschüttern würde. Dann, eines Nachts, hörte ich Lärm aus seiner Wohnung. Am nächsten Morgen war er weg, und später kamen Männer in schwarzen Anzügen und durchsuchten alles.\"",
        choices: [
            {
                text: "Nach den Blackwoods fragen",
                nextId: "blackwood_info",
                addClue: {
                    id: "blackwood_family",
                    text: "Die Blackwoods sind eine einflussreiche Familie in Greystone und stehen möglicherweise in Verbindung mit Toms Verschwinden"
                }
            },
            {
                text: "Nach dem Leuchtturm fragen",
                nextId: "lighthouse_info",
                addClue: {
                    id: "lighthouse_rumor",
                    text: "Tom recherchierte etwas über den alten Leuchtturm, das mit den Blackwoods zusammenhängt"
                }
            },
            {text: "Toms Apartment gründlicher untersuchen", nextId: "apartment_thorough"}
        ]
    },

    // Nachbarn - Lügen
    neighbor_lie: {
        text: "\"Ich bin Toms Cousin\", lügst du glatt. \"Die Familie hat sich Sorgen gemacht, weil er sich nicht meldet. Ich sollte nachsehen, ob alles in Ordnung ist.\"\n\nDie Frau verengt ihre Augen misstrauisch. \"Seltsam. Tom hat nie einen Cousin erwähnt. Er sprach kaum über seine Familie.\" Sie verschränkt die Arme. \"Und jetzt tauchen Sie auf, kurz nachdem diese Männer in Anzügen hier waren und seine Wohnung durchsucht haben?\"\n\nSie greift nach ihrem Telefon. \"Vielleicht sollte ich Sheriff Malone anrufen. Er war auch schon hier, wegen Tom...\"\n\nDu bemerkst, wie ihre Hand leicht zittert, als sie den Namen des Sheriffs erwähnt.",
        choices: [
            {
                text: "Zugeben, dass du gelogen hast und die Wahrheit sagen",
                nextId: "neighbor_truth"
            },
            {
                text: "Sie überreden, den Sheriff nicht zu rufen und ihr von deinen Sorgen um Tom erzählen",
                nextId: "convince_neighbor",
                addClue: {
                    id: "sheriff_suspicion",
                    text: "Die Nachbarin scheint Angst vor Sheriff Malone zu haben"
                }
            },
            {
                text: "Dich entschuldigen und schnell zu Toms Apartment zurückkehren",
                nextId: "apartment_thorough"
            }
        ]
    },

    // Informationen zum Leuchtturm
    lighthouse_info: {
        text: "\"Der alte Leuchtturm?\" Martha runzelt die Stirn. \"Seit dem Unfall 1987 ist er außer Betrieb. Die Blackwoods haben ihn gekauft und gesperrt. Angeblich wegen Einsturzgefahr, aber das glaube ich nicht.\"\n\nSie senkt die Stimme. \"Tom sagte, er hätte herausgefunden, dass die Blackwoods dort etwas verstecken. Etwas, das mit dem Tod des alten Leuchtturmwärters zusammenhängt. Er hatte sogar einen alten Zugangscode gefunden - die Jahreszahl des Unfalls, sagte er.\"\n\n\"Er wollte nochmal hin, kurz bevor er verschwand. Sagte, er hätte einen Tipp bekommen, wo genau er suchen müsse.\"",
        choices: [
            {
                text: "Zum Leuchtturm fahren",
                nextId: "lighthouse",
                addClue: {
                    id: "code",
                    text: "Der Zahlencode 1987 - Jahr des Unfalls am Leuchtturm"
                }
            },
            {text: "Toms Apartment gründlicher untersuchen", nextId: "apartment_thorough"},
            {text: "Nach den Blackwoods fragen", nextId: "blackwood_info"}
        ]
    },

    // Gründliche Apartment-Durchsuchung
    apartment_thorough: {
        text: "Du untersuchst Toms Apartment sorgfältiger. Unter seinem Bett findest du ein verstecktes Fach im Boden. Darin liegt ein verschlossenes Tagebuch mit dem Namen \"Elena Blackwood\" auf dem Umschlag und ein altes Zeitungsfoto mit dem Titel \"Tragisches Unglück am Leuchtturm fordert drei Leben - 1987\".\n\nIm Badezimmer entdeckst du auf dem Spiegel eine nur sichtbare Nachricht, wenn Dampf darauf kondensiert. Du lässt heißes Wasser laufen, und langsam erscheint ein Zahlencode: \"1987\".\n\nIn einer Schreibtischschublade liegt eine Einladung zu einer Wohltätigkeitsveranstaltung der Blackwood-Stiftung, die heute Abend im Rathaus stattfindet.",
        choices: [
            {
                text: "Zum Leuchtturm fahren und den Code ausprobieren",
                nextId: "lighthouse",
                addClue: {
                    id: "code",
                    text: "Der Zahlencode 1987 - Jahr des Unfalls am Leuchtturm"
                }
            },
            {
                text: "Zur Blackwood-Veranstaltung gehen",
                nextId: "blackwood_event",
                addClue: {
                    id: "diary",
                    text: "Ein verschlossenes Tagebuch mit dem Namen 'Elena Blackwood'"
                }
            },
            {
                text: "Die alte Zeitung über den Unfall recherchieren",
                nextId: "library",
                addClue: {
                    id: "newspaper",
                    text: "Zeitungsartikel über einen tödlichen Unfall am Leuchtturm im Jahr 1987"
                }
            }
        ]
    },

    // Szenario: Leuchtturm
    lighthouse: {
        text: "Der alte Leuchtturm erhebt sich düster am Rand der Klippen, umgeben von heulenden Winden und der tosenden See. Als du näher kommst, bemerkst du, dass er offiziell als geschlossen gekennzeichnet ist, aber das rostige Vorhängeschloss an der Tür hängt offen.\n\nIm Inneren ist es kalt und feucht. Eine steile Wendeltreppe führt nach oben zur Laterne, aber du erinnerst dich an die Skizze mit der markierten Stelle im unteren Bereich.\n\nDu untersuchst die Wände im Erdgeschoss sorgfältig und entdeckst ungewöhnliche Abnutzungsspuren am Boden nahe einer Wand. Als du dagegen drückst, gibt ein Teil der Wand nach und offenbart eine versteckte Tür mit einem modernen Zahlenschloss - ein seltsamer Kontrast zum altertümlichen Bauwerk.",
        choices: [
            {
                text: "Den Code 1987 eingeben, falls du ihn gefunden hast",
                nextId: "secret_room",
                requireClue: "code"
            },
            {
                text: "Die Laterne des Leuchtturms untersuchen ('Der Schlüssel liegt im Licht')",
                nextId: "lighthouse_light",
                requireClue: "photo"
            },
            {
                text: "Zurück in die Stadt fahren und mehr Informationen sammeln",
                nextId: "town_return"
            }
        ]
    },

    // Rückkehr in die Stadt
    town_return: {
        text: "Du verlässt den Leuchtturm mit dem Gefühl, etwas Wichtiges übersehen zu haben. Auf dem Rückweg in die Stadt bemerkst du ein schwarzes SUV, das dir zu folgen scheint.\n\nIn Greystone angekommen, parkst du vor der örtlichen Bibliothek. Der SUV fährt langsam vorbei, und du kannst zwei Männer in dunklen Anzügen erkennen, die dich beobachten.\n\nDu hast jetzt mehrere Möglichkeiten, wo du weiter nach Hinweisen suchen könntest.",
        choices: [
            {
                text: "In der Bibliothek nach dem Leuchtturm-Unfall recherchieren",
                nextId: "library"
            },
            {
                text: "Zurück zu Toms Wohnung gehen und gründlicher suchen",
                nextId: "apartment_thorough"
            },
            {
                text: "Das Sheriffbüro aufsuchen und direkt mit Malone sprechen",
                nextId: "sheriff_office"
            }
        ]
    },

    // Geheimraum im Leuchtturm
    secret_room: {
        text: "Das Zahlenschloss gibt ein leises Piepen von sich, als du 1-9-8-7 eingibst. Ein Klicken, und die verborgene Tür öffnet sich quietschend.\n\nVor dir liegt ein kleiner Raum, der wie ein improvisiertes Büro eingerichtet ist. An einer Wand hängt eine große Pinnwand voller Fotos, Zeitungsausschnitte und handgeschriebener Notizen - alles verbunden mit roten Fäden. In der Mitte: ein großes Bild der Blackwood-Familie.\n\nAuf einem Tisch liegt Toms Laptop und ein Stapel Dokumente. Ein Ordner trägt die Aufschrift \"Blackwood Offshore - Projekt Tiefenleuchten\". Daneben findest du eine Tonaufnahme und eine Notiz: \"Falls mir etwas zustößt - alles an R. Henderson beim Greystone Herald oder an Alex senden.\"",
        choices: [
            {
                text: "Laptop und Dokumente mitnehmen und fliehen",
                nextId: "evidence_escape",
                addClue: {
                    id: "documents",
                    text: "Toms Unterlagen zu 'Projekt Tiefenleuchten' der Blackwoods"
                }
            },
            {
                text: "Die Tonaufnahme anhören",
                nextId: "recording",
                addClue: {
                    id: "audio",
                    text: "Toms Aufnahme eines Gesprächs zwischen Elena Blackwood und Sheriff Malone"
                }
            },
            {
                text: "Die Dokumente genauer untersuchen",
                nextId: "documents_study",
                addClue: {
                    id: "project",
                    text: "Details über illegale Aktivitäten der Blackwoods beim 'Projekt Tiefenleuchten'"
                }
            }
        ]
    },

    // Tonaufnahme
    recording: {
        text: "Du spielst die Tonaufnahme ab. Zuerst ist nur Rauschen zu hören, dann erkennst du zwei Stimmen - eine Frau und ein Mann.\n\nFrau: \"...sollte längst erledigt sein. Wenn diese Aufzeichnungen an die Öffentlichkeit gelangen...\"\n\nMann: \"Mach dir keine Sorgen, Elena. Der Journalist wird nicht mehr schreiben. Meine Leute kümmern sich um ihn, sobald wir wissen, wo er die Beweise versteckt hat.\"\n\nFrau: \"Das Projekt ist zu wichtig. Mein Vater hat nicht jahrelang daran gearbeitet, damit ein neugieriger Reporter alles zerstört. Was ist mit dem Leuchtturmwärter von damals?\"\n\nMann: \"Die offizielle Geschichte steht fest. Ein tragischer Unfall. Niemand hat die Verbindung hergestellt - bis jetzt.\"\n\nPlötzlich hörst du Geräusche von oben - schwere Schritte auf der Wendeltreppe des Leuchtturms. Jemand kommt herunter.",
        choices: [
            {
                text: "Schnell die Beweise nehmen und einen Ausweg suchen",
                nextId: "hide_evidence",
                addClue: {
                    id: "conversation",
                    text: "Elena Blackwood und Sheriff Malone sprechen über Toms Entführung und einen Vorfall mit dem Leuchtturmwärter"
                }
            },
            {text: "Dich im Raum verstecken", nextId: "hide_room"},
            {text: "Dich auf eine Konfrontation vorbereiten", nextId: "confront"}
        ]
    },

    // Dokumente untersuchen
    documents_study: {
        text: "Du blätterst hastig durch die Dokumente. Sie enthalten Pläne für ein Offshore-Projekt namens \"Tiefenleuchten\" - eine Reihe von Bohranlagen in geschützten Gewässern, die offiziell der Forschung dienen sollen.\n\nDoch Toms Notizen decken auf, dass die Blackwoods gefälschte Umweltgutachten eingereicht haben. Sie planen eine massive illegale Ölförderung in einem Naturschutzgebiet, indem sie Bestechungsgelder an Beamte zahlen.\n\nAm erschreckendsten ist ein Bericht über drei \"Unfälle\" - darunter der Vorfall im Leuchtturm 1987, als der Leuchtturmwärter Frank Miller drohte, illegale Aktivitäten der Blackwoods aufzudecken.\n\nPlötzlich hörst du Stimmen und Schritte von oben. Jemand betritt den Leuchtturm.",
        choices: [
            {
                text: "Die Dokumente nehmen und versuchen zu fliehen",
                nextId: "hide_evidence",
                addClue: {
                    id: "blackwood_crimes",
                    text: "Beweise für die illegalen Aktivitäten der Blackwoods, einschließlich Mord am Leuchtturmwärter"
                }
            },
            {text: "Dich im Raum verstecken", nextId: "hide_room"},
            {text: "Dich auf eine Konfrontation vorbereiten", nextId: "confront"}
        ]
    },

    // Beweise verstecken
    hide_evidence: {
        text: "Du handelst schnell. Mit zitternden Händen nimmst du die wichtigsten Dokumente und Toms Festplatte aus seinem Laptop. Die Schritte kommen näher.\n\nDu blickst dich hektisch um und entdeckst einen losen Stein in der Wand. Dahinter ist ein kleiner Hohlraum - perfekt. Du versteckst die Beweise darin und setzt den Stein wieder ein, gerade als die Schritte das untere Ende der Treppe erreichen.\n\nDu versuchst, ruhig zu wirken, als ob du gerade erst den Raum betreten hättest. Die Tür öffnet sich weiter, und Sheriff Malone tritt ein, die Hand am Holster seiner Dienstwaffe.",
        choices: [
            {
                text: "So tun, als ob du ein Tourist wärst, der sich verirrt hat",
                nextId: "tourist_lie"
            },
            {
                text: "Die Wahrheit sagen - du suchst deinen vermissten Freund",
                nextId: "confront_truth"
            },
            {
                text: "Versuchen, an ihm vorbei zu rennen und zu fliehen",
                nextId: "escape_attempt"
            }
        ]
    },

    // Konfrontation im Leuchtturm
    confront: {
        text: "Du stellst dich neben die Tür, bereit für eine Konfrontation. Die Schritte werden lauter, und eine große Gestalt erscheint im Türrahmen - Sheriff Malone, eine Hand an seinem Holster.\n\nEr erstarrt, als er dich sieht. \"Wer zum Teufel sind Sie? Dies ist ein gesperrter Bereich.\"\n\nBevor du antworten kannst, schweift sein Blick zu Toms Unterlagen auf dem Tisch. Sein Gesicht verhärtet sich.\n\n\"Sie sind Carver, nicht wahr? Toms Freund. Er hat Sie erwähnt.\" Er tritt einen Schritt näher. \"Sie haben keine Ahnung, in was Sie da hineingeraten sind. Das geht weit über Ihre Vorstellungskraft hinaus.\"\n\nEr zieht seine Waffe. \"Sie haben zwei Möglichkeiten: Entweder Sie verschwinden aus Greystone und vergessen alles, was Sie gesehen haben, oder...\"\n\nPlötzlich erscheint eine weitere Person hinter ihm - eine elegante Frau mittleren Alters mit kalten Augen. Elena Blackwood.",
        choices: [
            {
                text: "Versuchen, mit ihnen zu verhandeln - Tom gegen dein Schweigen",
                nextId: "negotiate",
                requireClue: "documents"
            },
            {text: "Angreifen und versuchen zu fliehen", nextId: "fight_escape"},
            {
                text: "Bluffen, dass du bereits Kopien der Beweise sicher versteckt hast",
                nextId: "bluff",
                requireClue: "project"
            }
        ]
    },

    // Die Laterne im Leuchtturm
    lighthouse_light: {
        text: "Du steigst die enge Wendeltreppe hinauf zur Spitze des Leuchtturms. Der Wind pfeift durch die Ritzen des alten Gemäuers, und jede Stufe knarrt unter deinen Füßen.\n\nIn der Laternenkammer angekommen, siehst du die riesige, nicht mehr funktionierende Fresnel-Linse. Die alten Spiegel reflektieren schwach das Licht, das durch die schmutzigen Fenster fällt.\n\n\"Der Schlüssel liegt im Licht\", murmelst du und untersuchst die Linse genauer. Bei näherer Betrachtung bemerkst du, dass einer der Glassegmente locker sitzt. Als du es herausnimmst, findest du dahinter einen kleinen Hohlraum mit einem USB-Stick und einem handgeschriebenen Zettel: \"Falls du das hier findest, Alex, steck den Stick NICHT in deinen Computer. Sheriff Malone überwacht alle Geräte in der Stadt. Geh zu Martha, meiner Nachbarin. Sie hat einen alten Laptop ohne Internetverbindung.\"\n\nPlötzlich hörst du Motorengeräusche von unten - ein Fahrzeug nähert sich dem Leuchtturm.",
        choices: [
            {
                text: "Schnell nach unten gehen und den Leuchtturm verlassen",
                nextId: "escape_lighthouse",
                addClue: {id: "usb", text: "Ein USB-Stick aus dem Leuchtturm mit Toms Beweisen"}
            },
            {
                text: "Oben bleiben und dich verstecken",
                nextId: "hide_lighthouse",
                addClue: {id: "usb", text: "Ein USB-Stick aus dem Leuchtturm mit Toms Beweisen"}
            },
            {
                text: "Die geheime Tür unten mit dem Code versuchen",
                nextId: "secret_room",
                addClue: {
                    id: "code",
                    text: "Der Zahlencode könnte 1987 sein - Jahr des Unfalls am Leuchtturm"
                }
            }
        ]
    },

    // Zurück zu Martha
    escape_lighthouse: {
        text: "Mit dem USB-Stick in der Tasche rennst du die Wendeltreppe hinunter. Aus dem Fenster kannst du einen schwarzen SUV sehen, der gerade vor dem Leuchtturm parkt.\n\nDu schlüpfst durch einen Seitenausgang und hältst dich im Schatten der Klippen, während zwei Männer in Anzügen und Sheriff Malone den Haupteingang betreten.\n\nZurück in der Stadt fährst du direkt zu Marthas Wohnung. Sie öffnet die Tür einen Spalt und zieht dich hastig herein, als sie dich erkennt.\n\n\"Sie waren hier\", flüstert sie. \"Der Sheriff und diese Blackwood-Frau. Sie haben nach dir gefragt.\"\n\nDu zeigst ihr den USB-Stick und Toms Nachricht. Ihre Augen weiten sich, dann nickt sie und holt einen alten Laptop aus einem Schrank.",
        choices: [
            {
                text: "Den USB-Stick anschauen",
                nextId: "usb_files",
                addClue: {
                    id: "full_evidence",
                    text: "Vollständige Beweise über die Verbrechen der Blackwoods und Toms Entführung"
                }
            },
            {text: "Martha fragen, wo Tom sein könnte", nextId: "tom_location"},
            {text: "Nach einem sicheren Ausweg aus der Stadt fragen", nextId: "escape_plan"}
        ]
    },

    // ENDE: Verhandlung erfolgreich
    negotiate: {
        text: "\"Ich will nur meinen Freund zurück\", sagst du ruhig. \"Ich habe bereits gesehen, worum es geht - Projekt Tiefenleuchten, die manipulierten Umweltstudien, die Bestechungen. Aber das ist nicht mein Kampf.\"\n\nDu hältst Toms Laptop hoch. \"Hier sind alle Beweise. Bringen Sie mich zu Tom, lassen Sie uns beide gehen, und das bleibt unter uns.\"\n\nElena und der Sheriff tauschen Blicke aus.\n\n\"Woher sollen wir wissen, dass Sie keine Kopien haben?\" fragt Elena misstrauisch.\n\n\"Das wissen Sie nicht\", antwortest du. \"Aber wenn Tom und ich unbehelligt bleiben, gibt es keinen Grund, sie zu benutzen. Ansonsten gehen sie direkt an jede Nachrichtenagentur im Land.\"\n\nNach einer angespannten Pause nickt der Sheriff. \"Klug gespielt. Tom ist im alten Fischerhaus am Ende der Bucht. Wir begleiten Sie dorthin.\"\n\nStunden später sitzt du mit Tom in deinem Wagen, die Lichter von Greystone verblassen im Rückspiegel. Er ist erschöpft, aber lebend.\n\n\"Danke, Alex\", sagt er leise. \"Ich wusste, du würdest kommen.\"\n\nIhr beide habt überlebt, aber die dunklen Geheimnisse von Greystone bleiben verborgen, und die Blackwoods behalten ihre Macht. Zumindest für jetzt.\n\nENDE: Tom gerettet, Beweise aufgegeben",
        choices: [
            {text: "Spiel neu starten", nextId: "start"}
        ]
    },

    // ENDE: Flucht ohne Tom
    fight_escape: {
        text: "Du reagierst blitzschnell, stößt eine schwere Aktenschublade um und rennst los, während der Sheriff und Elena überrascht zurückweichen. Ein Schuss hallt durch den Leuchtturm, verfehlt dich aber knapp.\n\nIn einer waghalsigen Flucht rennst du die Wendeltreppe hinauf statt hinunter. Oben angekommen, hast du einen kurzen Moment Zeit, bevor deine Verfolger dich erreichen. Du siehst ein schmales Fenster, das groß genug sein könnte...\n\nOhne zu zögern, klemmst du die Festplatte aus Toms Laptop unter deine Jacke, nimmst Anlauf und springst durch das Fenster. Das Glas zersplittert, und du landest hart auf einem Vorsprung der Klippe einige Meter unterhalb.\n\nBenommen, aber entschlossen kletterst du weiter abwärts, während über dir Rufe und ein weiterer Schuss zu hören sind. Du erreichst den Strand und rennst zu deinem Wagen.\n\nStunden später bist du auf der Autobahn, weit weg von Greystone. Die Beweise auf der Festplatte könnten die Blackwoods zu Fall bringen, aber du konntest Tom nicht retten. Seine Worte verfolgen dich: \"Komm nach Greystone, wenn du in drei Tagen nichts von mir hörst.\" Er hatte dir vertraut.\n\nENDE: Flucht mit Beweisen, aber ohne Tom",
        choices: [
            {text: "Spiel neu starten", nextId: "start"}
        ]
    },

    // ENDE: Erfolgreicher Bluff
    bluff: {
        text: "\"Sie sind zu spät\", sagst du mit überraschend ruhiger Stimme. \"Ich bin nicht so dumm, wie Sie denken. Ich habe alles bereits gesichert - Projekt Tiefenleuchten, die gefälschten Umweltgutachten, die Bestechungen, der Mord am Leuchtturmwärter 1987.\"\n\nElena erbleicht. \"Sie bluffen.\"\n\n\"Bin ich das?\" Du lächelst kalt. \"Die Dokumente wurden heute Morgen an drei verschiedene Anwälte geschickt, mit der Anweisung, sie zu veröffentlichen, falls Tom oder mir etwas zustößt. Also, wo ist er?\"\n\nElena und der Sheriff tauschen nervöse Blicke aus. Nach einem angespannten Moment senkt Malone langsam seine Waffe.\n\n\"Im Keller des alten Lagerhauses am Hafen\", gibt er widerwillig zu. \"Aber Sie verstehen nicht, was auf dem Spiel steht. Dieses Projekt würde Greystone retten, Arbeitsplätze schaffen...\"\n\n\"Auf Kosten von Menschenleben\", entgegnest du. \"Das ist vorbei.\"\n\nVierundzwanzig Stunden später ist Tom frei, die Beweise sind den Bundesbehörden übergeben, und die ersten Verhaftungen beginnen. Die Blackwood-Dynastie bricht zusammen, und die Stadt muss sich ihrer dunklen Vergangenheit stellen.\n\nTom schüttelt den Kopf, während ihr beide die Morgennachrichten verfolgt. \"Ich wusste, dass du kommen würdest, Alex. Aber ich hätte nie gedacht, dass wir es tatsächlich schaffen.\"\n\nENDE: Tom gerettet, Blackwoods entlarvt",
        choices: [
            {text: "Spiel neu starten", nextId: "start"}
        ]
    },

    // ENDE: Gefangen genommen
    hide_room: {
        text: "Du entscheidest dich, dich im Raum zu verstecken. Du schaust dich hektisch um und findest einen alten Schrank in der Ecke. Gerade noch rechtzeitig zwängst du dich hinein und schließt die Tür.\n\nDurch einen schmalen Spalt beobachtest du, wie Sheriff Malone und eine elegante Frau, die du als Elena Blackwood identifizierst, den Raum betreten.\n\n\"Verdammt\", flucht der Sheriff, als er Toms Unterlagen auf dem Tisch entdeckt. \"Jemand war hier. Kürzlich.\"\n\nElena greift nach den Papieren. \"Alles scheint noch da zu sein. Vielleicht hat er nichts davon verstanden.\"\n\nDer Sheriff schnüffelt in der Luft. \"Er ist noch hier\", sagt er plötzlich und zieht seine Waffe. Dein Herz rast, als seine Schritte näher kommen...\n\nDie Schranktür wird aufgerissen. \"Hallo, Mr. Carver\", sagt der Sheriff mit einem kalten Lächeln. \"Wir haben uns schon gefragt, wann Sie auftauchen würden.\"\n\nStunden später findest du dich neben Tom in einem feuchten Kellerraum wieder, beide gefesselt. Die Blackwoods haben gewonnen - vorerst.\n\nENDE: Gefangen genommen",
        choices: [
            {text: "Spiel neu starten", nextId: "start"}
        ]
    }
};