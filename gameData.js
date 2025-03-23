// Text-Adventure Spielstruktur - Grundgerüst
const gameData = {
    // Startpunkt der Geschichte
    start: {
        text: "Der Regen peitscht dir ins Gesicht, als das kleine Boot an der verwitterten Anlegestelle der Ashcliff-Klinik anlegt. Die düstere Silhouette des viktorianischen Gebäudes zeichnet sich gegen den grauen Himmel ab. 'Willkommen auf Greystone, Marshal', sagt der Bootsführer mit einem seltsamen Unterton. 'Sie wurden erwartet.' Du bist hier, um das mysteriöse Verschwinden von Patient 67 zu untersuchen. Ein schwerer Sturm zieht auf, und du weißt, dass du für mindestens drei Tage auf dieser Insel festsitzen wirst.",
        choices: [{
            text: "Mit dem Klinikdirektor Dr. Cawley sprechen", nextId: "meet_director"
        }, {
            text: "Zuerst einen Rundgang durch die Anlage machen", nextId: "explore_grounds"
        }, {
            text: "Nach dem Ort fragen, an dem Patient 67 zuletzt gesehen wurde",
            nextId: "last_seen_location"
        }]
    },

    // ===== EINFÜHRUNG IN DIE HANDLUNGSSTRÄNGE =====

    // Begegnung mit dem Direktor - Einstieg in Handlungsstrang 1
    meet_director: {
        text: "Dr. Cawley empfängt dich in seinem holzgetäfelten Büro. 'Ah, der Ermittler vom Festland. Ihr Timing ist... interessant.' Er mustert dich mit durchdringenden Augen. 'Patient 67 ist vor drei Tagen verschwunden. Aus einem verschlossenen Zimmer im Hochsicherheitstrakt C. Unmöglich, sagen meine Mitarbeiter. Aber hier sind wir.' Er reicht dir eine dünne Akte. 'Das ist alles, was wir über ihn haben.' Als du die Akte öffnest, stockt dir der Atem - die meisten Seiten sind geschwärzt oder fehlen komplett.",
        choices: [{
            text: "Nach dem Grund für die unvollständige Akte fragen", nextId: "incomplete_file"
        }, {
            text: "Zugang zum Hochsicherheitstrakt C verlangen", nextId: "access_ward_c"
        }, {
            text: "Fragen, ob es Aufnahmen oder Fotos des Patienten gibt",
            nextId: "patient_photos",
            addClue: {
                id: "strange_file",
                text: "Die Patientenakte von Patient 67 ist auffällig unvollständig. Viele Seiten wurden geschwärzt oder entfernt."
            }
        }]
    },

    // Erkundung der Anlage - Einstieg in Handlungsstrang 2
    explore_grounds: {
        text: "Der Klinikwächter McPherson führt dich über das weitläufige Gelände. 'Die Hauptgebäude stammen aus dem späten 19. Jahrhundert', erklärt er. 'Aber der Ostflügel wurde erst vor 15 Jahren angebaut.' Er deutet auf einen moderneren Gebäudeteil, der durch einen langen Gang mit dem Hauptgebäude verbunden ist. Ein Schild warnt: 'Nur autorisiertes Personal - Experimentelle Therapien'. Als ihr an einer Gruppe Patienten vorbeikommt, starrt dich einer intensiv an und flüstert: 'Sie verändern unsere Gedanken dort drin. Sie machen uns zu anderen Menschen.'",
        choices: [{
            text: "Den Patienten nach seinen Erfahrungen befragen", nextId: "patient_testimonial"
        }, {
            text: "McPherson nach dem Ostflügel fragen", nextId: "east_wing_inquiry"
        }, {
            text: "Zum Hauptgebäude gehen und mit dem Personal sprechen", nextId: "meet_staff"
        }]
    },

    // Letzter bekannter Aufenthaltsort - Einstiegsszenario Handlungsstrang 3
    last_seen_location: {
        text: "Die Oberschwester Rachel führt dich zu einem Zimmer am Ende eines langen, spärlich beleuchteten Korridors. 'Hier haben wir ihn untergebracht', sagt sie mit unbewegter Miene. Das Zimmer ist spartanisch: Ein Bett, ein Tisch, ein Stuhl. Ein seltsames Gefühl überkommt dich, als du den Raum betrittst - ein intensives Déjà-vu. 'War ich schon einmal hier?', denkst du. An der Wand siehst du Kratzspuren, die ein Muster bilden. Als du genauer hinsiehst, erkennst du eine Art Karte der Insel, mit einem markierten Punkt im Keller des Hauptgebäudes.",
        choices: [{
            text: "Rachel nach dem Muster an der Wand fragen", nextId: "wall_pattern"
        }, {
            text: "Das Zimmer gründlich durchsuchen", nextId: "search_room", addClue: {
                id: "map_scratches",
                text: "Eine in die Wand geritzte Karte zeigt einen markierten Punkt im Keller des Hauptgebäudes."
            }
        }, {
            text: "Nach weiteren Hinweisen auf den Patienten fragen", nextId: "more_patient_info"
        }]
    },

    // ===== HANDLUNGSSTRANG 1: DER VERSCHWUNDENE PATIENT =====

    // Nach dem Treffen mit dem Direktor
    incomplete_file: {
        text: "Dr. Cawley wirkt kurz verunsichert. 'Staatsgeheimnisse', sagt er schließlich mit einem falschen Lächeln. 'Patient 67 war... ist ein besonderer Fall. Die Regierung hat ein Interesse daran, bestimmte Details unter Verschluss zu halten.' Er trommelt mit den Fingern auf seinen Schreibtisch. 'Was ich Ihnen sagen kann: Er wurde vor sechs Monaten eingeliefert. Diagnose: Wahnvorstellungen und gefährliche Fixierung auf Verschwörungstheorien.' Als du weiter nachfragst, schneidet er dir das Wort ab: 'Sheriff Wilson wird Sie zu Ihrer Unterkunft bringen. Der Sturm wird bald hier sein.'",
        choices: [{
            text: "Darauf bestehen, mehr über den Patienten zu erfahren",
            nextId: "insist_information"
        }, {
            text: "Zum Quartier gehen und die Akte studieren", nextId: "examine_file"
        }, {
            text: "Nach anderen Personen fragen, die mit Patient 67 Kontakt hatten",
            nextId: "patient_contacts"
        }]
    },

    // Auf mehr Informationen bestehen
    insist_information: {
        text: "Du lehnst dich vor. 'Dr. Cawley, ich bin im Auftrag der US-Marshals hier. Wenn ein gefährlicher Patient entkommen ist, brauche ich alle verfügbaren Informationen.' Cawleys Lächeln verschwindet. 'Sie verstehen nicht, Marshal. Es gibt... Protokolle. Ich würde Ihnen gerne helfen, aber meine Hände sind gebunden.' Er geht zum Fenster. 'Dieser Patient... er war brillant. Ein ehemaliger Arzt, der zu tief in Dinge eingetaucht ist, die er nicht hätte sehen sollen.' Er dreht sich zu dir um. 'Suchen Sie Dr. Sheehan. Er war sein Therapeut. Aber seien Sie vorsichtig – nicht jeder hier will, dass dieser Patient gefunden wird.'",
        choices: [{
            text: "Nach Dr. Sheehan suchen", nextId: "find_sheehan", addClue: {
                id: "doctor_patient",
                text: "Patient 67 war angeblich selbst ein Arzt, bevor er in die Klinik eingeliefert wurde."
            }
        }, {
            text: "Fragen, wer nicht will, dass der Patient gefunden wird",
            nextId: "who_wants_hiding"
        }, {
            text: "Nach dem genauen Grund der Einweisung fragen", nextId: "admission_reason"
        }]
    },

    // Wer will den Patienten verstecken?
    who_wants_hiding: {
        text: "Dr. Cawley zögert, dann senkt er die Stimme. 'Der Aufsichtsrat. Sie haben... Interesse an den Forschungsergebnissen aus dem Ostflügel.' Er schaut nervös zur Tür. 'Patient 67 hatte Zugang zu Informationen, die besser verborgen bleiben. Er begann, Fragen zu stellen. Unbequeme Fragen.' Ein lautes Donnergrollen unterbricht das Gespräch. 'Der Sturm kommt früher als erwartet', sagt Cawley, sichtlich erleichtert über die Ablenkung. 'Wir sollten dieses Gespräch später fortsetzen. Finden Sie Dr. Sheehan. Aber erwähnen Sie nicht, dass ich Sie geschickt habe.'",
        choices: [{
            text: "Nach dem Aufsichtsrat fragen", nextId: "board_inquiry"
        }, {
            text: "Dr. Cawley nach seiner eigenen Rolle fragen", nextId: "cawley_role"
        }, {
            text: "Das Gespräch beenden und nach Dr. Sheehan suchen",
            nextId: "find_sheehan",
            addClue: {
                id: "board_interest",
                text: "Der Aufsichtsrat der Klinik hat anscheinend ein besonderes Interesse an Patient 67 und den Forschungen im Ostflügel."
            }
        }]
    },

    // Die Akte im Quartier studieren
    examine_file: {
        text: "In deinem spartanischen Quartier breitest du die dünne Akte aus. Trotz der vielen geschwärzten Stellen findest du einige brauchbare Informationen: Patient 67 wurde vor genau sechs Monaten und drei Tagen eingeliefert. Diagnose: Paranoide Schizophrenie mit Wahnvorstellungen. Auf einem Foto sieht man nur einen verschwommenen Schatten. Interessant ist ein Therapiebericht von Dr. Sheehan: 'Patient zeigt außergewöhnliches Wissen über medizinische Verfahren und Institutionen. Behauptet, selbst in ähnlicher Einrichtung gearbeitet zu haben. Fixiert auf Verschwörungstheorie zu experimentellen Behandlungen.' Jemand hat am Rand notiert: 'Zu viel Wissen. Gefährlich.'",
        choices: [{
            text: "Dr. Sheehan aufsuchen", nextId: "find_sheehan", addClue: {
                id: "medical_knowledge",
                text: "Patient 67 verfügt über medizinisches Fachwissen und behauptet, in einer ähnlichen Einrichtung gearbeitet zu haben."
            }
        }, {
            text: "Nach dem verschwommenen Foto fragen", nextId: "blurry_photo"
        }, {
            text: "Überprüfen, was vor sechs Monaten und drei Tagen in der Klinik passiert ist",
            nextId: "check_admission_date"
        }]
    },

    // Nach anderen Kontakten fragen
    patient_contacts: {
        text: "Dr. Cawley überlegt. 'Patient 67 hatte begrenzten Kontakt.' Er konsultiert ein Notizbuch. 'Dr. Sheehan war sein Therapeut. Schwester Rachel hat ihn beaufsichtigt. Und dann wäre da noch Wärter McPherson.' Er klappt das Buch zu. 'Merkwürdig ist, dass er außerdem jeden zweiten Mittwoch für... spezielle Behandlungen in den Ostflügel gebracht wurde. Dr. Jenkins könnte mehr wissen, aber...' Er verstummt. 'Dr. Jenkins ist schwer zu erreichen. Er verlässt den Ostflügel selten.' Cawley wirft einen Blick auf die Uhr. 'Sheriff Wilson wartet, um Sie zu Ihrem Quartier zu bringen.'",
        choices: [{
            text: "Nach Dr. Sheehan fragen", nextId: "find_sheehan"
        }, {
            text: "Mit Schwester Rachel sprechen wollen", nextId: "talk_rachel"
        }, {
            text: "Mehr über die 'speziellen Behandlungen' erfahren wollen",
            nextId: "special_treatments",
            addClue: {
                id: "wednesday_treatments",
                text: "Patient 67 wurde alle zwei Wochen mittwochs für 'spezielle Behandlungen' in den Ostflügel gebracht."
            }
        }]
    },

    // Suche nach Dr. Sheehan
    find_sheehan: {
        text: "Die Suche nach Dr. Sheehan führt dich durch die düsteren Korridore der Klinik. Vom Personal erfährst du, dass er heute im B-Flügel Therapiesitzungen hat. Als du den Therapieraum erreichst, ist die Tür verschlossen. Ein Schild zeigt: 'Bitte nicht stören'. Durch das Fenster in der Tür siehst du einen Mann mittleren Alters, der mit einem Patienten spricht. Als er deinen Blick bemerkt, wirkt er überrascht, fast erschrocken. Er entschuldigt sich bei seinem Patienten und kommt zur Tür. 'Kann ich Ihnen helfen?', fragt er nervös.",
        choices: [{
            text: "Dich als US-Marshal vorstellen und nach Patient 67 fragen",
            nextId: "formal_inquiry_sheehan"
        }, {
            text: "Erwähnen, dass Dr. Cawley dich geschickt hat",
            nextId: "mention_cawley",
            requireClue: "board_interest"
        }, {
            text: "Beiläufig nach dem Ostflügel fragen",
            nextId: "casual_east_wing",
            requireClue: "wednesday_treatments"
        }]
    },

    // Formales Gespräch mit Dr. Sheehan
    formal_inquiry_sheehan: {
        text: "Dr. Sheehan wirkt erleichtert, als du dich als Ermittler vorstellst. 'Patient 67. Ja, ein faszinierender Fall.' Er führt dich in ein leeres Büro. 'Ich bin besorgt um ihn. Er hatte große Fortschritte gemacht, begann, seine Wahnvorstellungen zu hinterfragen.' Sheehan senkt die Stimme. 'Er vertraute mir an, dass er glaubte, hier gefangen gehalten zu werden, nicht als Patient, sondern als... Gefangener. Wegen dem, was er wusste.' Er zögert. 'Kurz vor seinem Verschwinden sagte er mir, er hätte Beweise gefunden. In seinem Zimmer. Er wollte sie mir am nächsten Tag zeigen. Aber dann war er weg.'",
        choices: [{
            text: "Fragen, welche Art von Beweisen er meinte", nextId: "evidence_nature"
        }, {
            text: "Nach den Wahnvorstellungen des Patienten fragen", nextId: "patient_delusions"
        }, {
            text: "Nach seiner Einschätzung fragen, ob der Patient gefährlich ist",
            nextId: "dangerous_assessment",
            addClue: {
                id: "hidden_evidence",
                text: "Patient 67 behauptete, Beweise in seinem Zimmer versteckt zu haben."
            }
        }]
    },

    // Nachfrage zu den Beweisen
    evidence_nature: {
        text: "Sheehan schüttelt den Kopf. 'Er wurde sehr paranoid, je näher wir seinen Kernängsten kamen. Er sagte nur, es sei dokumentiert. Dass er wisse, was sie im Ostflügel tun.' Sheehan schaut auf seine Hände. 'Wissen Sie, Marshal, manchmal ist es schwer zu unterscheiden, wo die Wahnvorstellung endet und die Realität beginnt. Er sprach von Gedächtnismanipulation, von Persönlichkeitslöschung.' Er seufzt. 'Aber dann - ich habe Dinge gehört, über Dr. Jenkins' Arbeit. Gerüchte unter dem Personal.' Er greift nach einem Notizbuch und schreibt etwas. 'Hier, das könnte helfen. Aber ich habe Ihnen nichts gegeben.'",
        choices: [{
            text: "Das Notizbuch nehmen und gehen", nextId: "take_notes", addClue: {
                id: "sheehan_notes",
                text: "Dr. Sheehans Notizen erwähnen einen versteckten Safe hinter dem Gemälde in Zimmer 67."
            }
        }, {
            text: "Nach Dr. Jenkins fragen", nextId: "jenkins_inquiry"
        }, {
            text: "Zurück zum Zimmer des Patienten gehen, um nach Beweisen zu suchen",
            nextId: "return_patient_room",
            requireClue: "map_scratches"
        }]
    },

    // Zurück zum Patientenzimmer
    return_patient_room: {
        text: "Mit neuem Wissen kehrst du zum Zimmer von Patient 67 zurück. Die Kratzer an der Wand erscheinen dir nun bedeutsamer. Du untersuchst das Zimmer gründlicher. Hinter dem schmalen Bett entdeckst du eine lose Fliese. Darunter findest du ein in Plastik eingewickeltes Notizbuch. Die Handschrift ist hektisch, manisch. Viele Seiten sind mit Diagrammen gefüllt - Gehirnscans, chemische Formeln. Eine Seite zeigt eine Liste: 'Subjekte mit Gedächtnislöschung: 4/7 erfolgreich, 2/7 teilweiser Erfolg, 1/7 Widerstand (Ich)'. Auf der letzten Seite steht: 'Wenn du das liest - vertraue niemandem. Nicht einmal deinen eigenen Erinnerungen. C.R.S.W.E.F.'",
        choices: [{
            text: "Das Notizbuch mitnehmen und verstecken", nextId: "hide_notebook", addClue: {
                id: "patient_notebook",
                text: "Ein verstecktes Notizbuch enthält Hinweise auf Gedächtnisexperimente und eine kryptische Warnung mit den Buchstaben C.R.S.W.E.F."
            }
        }, {
            text: "Versuchen, die Abkürzung C.R.S.W.E.F. zu entschlüsseln", nextId: "decipher_code"
        }, {
            text: "Die Diagramme und Formeln genauer untersuchen", nextId: "examine_diagrams"
        }]
    },

    // Die Abkürzung entschlüsseln
    decipher_code: {
        text: "Du starrst auf die mysteriösen Buchstaben: C.R.S.W.E.F. Könnte es ein Anagramm sein? Ein Code? Plötzlich fällt dir ein Aushang auf, den du im Flur gesehen hast - die Abteilungen der Klinik: Chirurgie, Radiologie, Suchtmedizin, Wahnbehandlung, Experimentelle Forschung. C.R.S.W.E.F... Fast dieselben Anfangsbuchstaben, plus ein F am Ende. Ein Geräusch im Flur lässt dich aufschrecken. Jemand kommt! Du versteckst das Notizbuch schnell unter deiner Jacke, als die Tür aufgeht. Schwester Rachel steht dort, überrascht, dich zu sehen. 'Marshal? Was machen Sie hier?'",
        choices: [{
            text: "Eine Ausrede erfinden und schnell gehen", nextId: "make_excuse"
        }, {
            text: "Rachel direkt nach der Abkürzung fragen", nextId: "ask_rachel_code"
        }, {
            text: "Behaupten, auf der Suche nach weiteren Hinweisen zu sein",
            nextId: "claim_investigation",
            addClue: {
                id: "facility_code",
                text: "Die Buchstaben C.R.S.W.E.F. könnten für Abteilungen der Klinik stehen, plus ein unbekanntes F."
            }
        }]
    },

    // Gespräch mit Rachel über die Abkürzung
    ask_rachel_code: {
        text: "Du entscheidest dich für den direkten Weg. 'Schwester Rachel, sagt Ihnen die Abkürzung C.R.S.W.E.F. etwas?' Ihr Gesicht erstarrt für einen Moment. Dann lacht sie, zu laut. 'Woher haben Sie das? Das klingt wie eines der Wortspiele, die unsere Patienten sich ausdenken.' Sie tritt näher, ihre Augen scannen den Raum. 'Sie sollten nicht hier sein. Dieser Bereich ist gesperrt, bis die Untersuchung abgeschlossen ist.' Ihr Blick fällt auf die Stelle, wo die Fliese verschoben wurde. 'Was haben Sie gefunden?' Ihre Stimme klingt nun schärfer.",
        choices: [{
            text: "Zugeben, dass du ein Notizbuch gefunden hast", nextId: "admit_notebook"
        }, {
            text: "Lügen und behaupten, nichts gefunden zu haben", nextId: "lie_finding"
        }, {
            text: "Gegenfrage stellen, warum sie so interessiert ist",
            nextId: "counter_question",
            addClue: {
                id: "rachel_reaction",
                text: "Schwester Rachel reagiert auffällig nervös auf die Erwähnung der Abkürzung C.R.S.W.E.F."
            }
        }]
    },

    // Die Diagramme untersuchen
    examine_diagrams: {
        text: "Du studierst die komplexen Diagramme im Notizbuch. Obwohl du kein Mediziner bist, erkennst du, dass es sich um Gehirnscans handelt, mit markierten Bereichen im präfrontalen Cortex. Neben einem Scan steht: 'Wiederholte Anwendung von Verfahren F bewirkt selektive Löschung episodischer Erinnerungen bei Erhaltung semantischen Wissens.' Eine andere Seite zeigt chemische Strukturformeln mit dem Titel 'Verbindung RX-78: Gedächtnisunterdrückung mit anschließender Neuprogrammierung'. Auf einer weiteren Seite findest du Pläne der Klinik mit einem markierten Bereich im Keller - genau dort, wo auch die an die Wand geritzte Karte hinführt.",
        choices: [{
            text: "Das Notizbuch mitnehmen und den markierten Bereich im Keller suchen",
            nextId: "explore_basement",
            addClue: {
                id: "compound_rx78",
                text: "Im Ostflügel wird offenbar eine Substanz namens RX-78 zur Gedächtnismanipulation verwendet."
            }
        }, {
            text: "Einen medizinischen Experten suchen, der die Diagramme deuten kann",
            nextId: "find_medical_expert"
        }, {
            text: "Fotos von den Diagrammen machen und das Notizbuch zurücklegen",
            nextId: "photograph_diagrams",
            requireClue: "camera_found"
        }]
    },

    // Den Keller erforschen
    explore_basement: {
        text: "Mit dem Notizbuch unter der Jacke und einer Taschenlampe machst du dich auf den Weg in den Keller. Die alten Treppen knarren unter deinen Füßen. Der modrige Geruch wird stärker, je tiefer du gehst. Unten angekommen, orientierst du dich an den Plänen aus dem Notizbuch. Ein Labyrinth aus Rohren und veralteten Maschinen führt dich tiefer in das Untergeschoss. Schließlich erreichst du eine massive Stahltür mit einer elektronischen Zugangskontrolle - neuere Technologie, die im Kontrast zum alten Gebäude steht. Daneben ein Hinweisschild: 'Projekt JANUS - Nur autorisiertes Personal'.",
        choices: [{
            text: "Versuchen, den Zugangscode zu knacken", nextId: "crack_code"
        }, {
            text: "Einen Umweg suchen, vielleicht gibt es einen alternativen Eingang",
            nextId: "find_alternative_entrance"
        }, {
            text: "Zurückgehen und Dr. Sheehan nach Projekt JANUS fragen",
            nextId: "ask_sheehan_janus",
            addClue: {
                id: "project_janus_door",
                text: "Im Keller gibt es einen abgesicherten Bereich, der als 'Projekt JANUS' bezeichnet wird."
            }
        }]
    },

    // Dr. Sheehan über Projekt JANUS befragen
    ask_sheehan_janus: {
        text: "Du findest Dr. Sheehan in seinem Büro, vertieft in Akten. Als du 'Projekt JANUS' erwähnst, erstarrt er. Er steht auf, schließt die Tür und senkt seine Stimme. 'Wo haben Sie davon gehört?' Du erzählst ihm von der Tür im Keller und den Hinweisen im Notizbuch. Er wird blass. 'Das ist... gefährliches Wissen, Marshal.' Er überlegt. 'JANUS - der römische Gott mit zwei Gesichtern. Passend.' Er seufzt schwer. 'Es begann als Therapie für Kriegstraumata. Selektives Vergessen. Aber Dr. Jenkins... er hat es weiterentwickelt. Nicht nur Vergessen, sondern Ersetzen. Neue Identitäten erschaffen.' Er holt einen Schlüssel hervor. 'Hiermit kommen Sie durch die Wartungstür neben der Haupttür. Aber wenn Sie gehen - seien Sie vorsichtig. Und vertrauen Sie niemandem.'",
        choices: [{
            text: "Den Schlüssel nehmen und zum Keller zurückkehren",
            nextId: "return_basement",
            addClue: {
                id: "janus_key",
                text: "Dr. Sheehan hat dir einen Schlüssel für eine Nebentür zum Projekt JANUS gegeben."
            }
        }, {
            text: "Fragen, ob Patient 67 Teil dieses Projekts war",
            nextId: "patient_janus_connection"
        }, {
            text: "Fragen, warum er dir hilft und sich selbst in Gefahr bringt",
            nextId: "why_helping"
        }]
    },

    // Verbindung zwischen Patient 67 und Projekt JANUS
    patient_janus_connection: {
        text: "Dr. Sheehan schaut dich lange an, als würde er abwägen, wie viel er dir anvertrauen kann. 'Patient 67 war nicht nur Teil des Projekts,' sagt er schließlich. 'Er hat es mitentwickelt. Er und Dr. Jenkins waren Kollegen, führten gemeinsam die ersten klinischen Versuche durch.' Sheehan geht zu seinem Schreibtisch und zieht ein altes Foto hervor. Es zeigt zwei Männer in Laborkitteln, lächelnd vor einer Tafel voller Formeln. 'Das sind sie – Dr. Jenkins und Dr. Edward Wilson. Bevor Wilson zu Patient 67 wurde.' Er legt das Foto weg. 'Etwas ging schief. Wilson begann, das Projekt zu hinterfragen. Er wollte es stoppen. Kurz darauf erlitt er einen 'Nervenzusammenbruch' und wurde hier eingeliefert. Als Patient.'",
        choices: [{
            text: "Das Foto mitnehmen und den Schlüssel für den Keller nehmen",
            nextId: "take_photo_key",
            addClue: {
                id: "wilson_identity",
                text: "Patient 67 war Dr. Edward Wilson, ein Kollege von Dr. Jenkins und Mitentwickler von Projekt JANUS, bevor er selbst zum Patienten wurde."
            }
        }, {
            text: "Fragen, ob Wilson wirklich einen Nervenzusammenbruch hatte",
            nextId: "breakdown_question"
        }, {
            text: "Fragen, was Wilson entdeckt haben könnte, das ihn zum Patienten machte",
            nextId: "wilson_discovery"
        }]
    },

    // Mit dem Schlüssel zum Keller zurückkehren
    return_basement: {
        text: "Mit Dr. Sheehans Schlüssel kehrst du in den Keller zurück. Neben der Haupttür findest du tatsächlich eine unscheinbare Wartungstür. Der Schlüssel passt, die Tür öffnet sich quietschend. Du betrittst einen sterilen weißen Korridor – ein erschreckender Kontrast zum modrigen Keller. Neonlicht flackert über deinem Kopf. Zu beiden Seiten befinden sich Labore mit Sichtfenstern. In einem siehst du Reihen von Medikamenten, in einem anderen medizinische Geräte. Am Ende des Ganges steht eine Tür mit der Aufschrift 'Archiv'. Als du näher kommst, hörst du Stimmen von der anderen Seite.",
        choices: [{
            text: "An der Tür lauschen", nextId: "eavesdrop_archive"
        }, {
            text: "Die Labore untersuchen", nextId: "investigate_labs"
        }, {
            text: "Dich verstecken und warten, bis die Personen das Archiv verlassen",
            nextId: "hide_wait",
            addClue: {
                id: "janus_labs",
                text: "Unter der Klinik befindet sich ein modernes Forschungslabor mit medizinischer Ausrüstung und Medikamenten."
            }
        }]
    },

    // An der Archivtür lauschen
    eavesdrop_archive: {
        text: "Du lehnst dein Ohr vorsichtig an die Tür. '... muss gefunden werden, bevor er mit jemandem spricht', sagt eine männliche Stimme, die du als Dr. Jenkins identifizierst. 'Die Notizen könnten alles ruinieren.' Eine weibliche Stimme antwortet: 'Der Marshal wird ihn nicht finden. Wir haben alle Spuren beseitigt.' Jenkins klingt wütend: 'Wilson war zu schlau. Er hätte Hinweise hinterlassen.' 'Selbst wenn', sagt die Frau, 'glaubst du, der Marshal würde einem Verrückten glauben?' Jenkins senkt die Stimme: 'Die nächste Behandlung für den Marshal ist morgen früh angesetzt. Danach wird er sich an nichts erinnern.' Schritte nähern sich der Tür!",
        choices: [{
            text: "Schnell in einem der Labore verstecken", nextId: "hide_lab"
        }, {
            text: "Den Korridor zurücklaufen zur Wartungstür", nextId: "run_back_door"
        }, {
            text: "Konfrontation riskieren - die Waffe ziehen und die Tür öffnen",
            nextId: "confront_jenkins",
            addClue: {
                id: "jenkins_plan",
                text: "Dr. Jenkins plant, dich einer 'Behandlung' zu unterziehen, die deine Erinnerungen löschen soll."
            }
        }]
    },

    // Die Labore untersuchen
    investigate_labs: {
        text: "Du entscheidest dich, die Labore zu untersuchen, während die Stimmen im Archiv zu hören sind. Das erste Labor enthält Regale mit beschrifteten Medikamentenbehältern. Du erkennst einen mit 'RX-78' – dem Medikament aus Wilsons Notizen. Im zweiten Labor findest du eine beunruhigende Entdeckung: Eine Reihe von Patientenliegen mit Kopfhalterungen und angeschlossenen Geräten. An einer Tafel hängen Fotos von Patienten, 'vor' und 'nach' der Behandlung. Das gleiche Gesicht, aber mit völlig unterschiedlichem Ausdruck. Auf einem Tisch liegt ein Logbuch. Die letzte Eintragung: 'Subjekt A.L. - Vorbereitung zur finalen Konversion. Deckerinnerung: US-Marshal, Ermittlung eines vermissten Patienten. Termin: Morgen, 9 Uhr.'",
        choices: [{
            text: "Das Logbuch mitnehmen", nextId: "take_logbook", addClue: {
                id: "patient_al",
                text: "Ein Logbuch enthüllt, dass du möglicherweise 'Subjekt A.L.' bist und morgen einer finalen Konversion unterzogen werden sollst."
            }
        }, {
            text: "Einen Behälter mit RX-78 nehmen", nextId: "take_rx78"
        }, {
            text: "Schnell zurück zur Wartungstür, bevor du entdeckt wirst", nextId: "escape_labs"
        }]
    },

    // Sich im Labor verstecken
    hide_lab: {
        text: "Du gleitest schnell in eines der Labore und versteckst dich hinter einem großen Gerät. Die Tür zum Archiv öffnet sich. 'Ich verstehe deine Sorge, John, aber vertrau mir, wir haben alles unter Kontrolle', sagt eine Frauenstimme - Schwester Rachel! Du hörst ihre Schritte im Gang. 'Der Marshal hat keine Ahnung. Morgen um diese Zeit wird er ein neues Protokoll haben.' Dr. Jenkins' Stimme klingt angespannt: 'Ich hoffe es. Wilson war... ist ein Genie. Wenn jemand einen Weg finden könnte, unserem Verfahren zu widerstehen, dann er.' Die Schritte entfernen sich, dann hörst du das Schließen der Wartungstür. Du bist wieder allein.",
        choices: [{
            text: "Das Archiv untersuchen", nextId: "search_archive"
        }, {
            text: "Die Labore gründlicher durchsuchen", nextId: "thorough_labs"
        }, {
            text: "Die Gelegenheit nutzen und fliehen", nextId: "escape_janus", addClue: {
                id: "rachel_involved",
                text: "Schwester Rachel ist mit Dr. Jenkins im Komplott und weiß von deiner bevorstehenden 'Behandlung'."
            }
        }]
    },

    // Das Archiv durchsuchen
    search_archive: {
        text: "Du betrittst das nun verlassene Archiv. Aktenschränke reihen sich an den Wänden, alle beschriftet mit Zahlen und Codes. Ein großer Schreibtisch steht in der Mitte, darauf ausgebreitete Dokumente. Du untersuchst sie: Patientenakten, alle mit dem Stempel 'Projekt JANUS'. Eine fällt dir besonders ins Auge - sie trägt deinen Namen! Mit pochendem Herzen öffnest du sie. Darin findest du deine Biografie, aber Details stimmen nicht. Oder... erinnerst du dich falsch? Ein Foto zeigt dich in der Uniform eines Wachmanns der Klinik, nicht als Marshal. Die Diagnose lautet: 'Dissoziative Identitätsstörung nach traumatischem Erlebnis. Patient erschuf Marshal-Persona als Schutzmechanismus.'",
        choices: [{
            text: "Die Akte mitnehmen und fliehen", nextId: "take_own_file", addClue: {
                id: "own_file",
                text: "Eine Akte mit deinem Namen behauptet, du seist eigentlich ein Wachmann der Klinik mit einer Identitätsstörung."
            }
        }, {
            text: "Nach der Akte von Patient 67/Dr. Wilson suchen", nextId: "search_wilson_file"
        }, {
            text: "Den Computer auf dem Schreibtisch untersuchen", nextId: "check_computer"
        }]
    },

    // Wilsons Akte suchen
    search_wilson_file: {
        text: "Du durchsuchst systematisch die Aktenschränke und findest schließlich eine Akte mit der Aufschrift 'Wilson, E. - Patient 67'. Sie ist dick und voll mit Dokumenten. Die ältesten zeigen Wilson als respektierten Psychiater und Forscher. Dann kommt ein Bericht über einen 'Vorfall': Wilson hatte offenbar Bedenken über ethische Aspekte des Projekts geäußert und drohte, an die Öffentlichkeit zu gehen. Die nächsten Einträge dokumentieren seine 'zunehmende Paranoia' und 'Wahnvorstellungen'. Der letzte Eintrag vor drei Tagen: 'Patient zeigt Anzeichen, dass die Behandlung versagt. Erinnert sich an seine wahre Identität. Stellt eine erhebliche Gefahr dar. Sicherheitsmaßnahmen aktiviert.' Auf einem beigefügten Zettel steht in Handschrift: 'Leuchtturm. Nordküste.'",
        choices: [{
            text: "Die Akte mitnehmen und zum Leuchtturm aufbrechen",
            nextId: "go_lighthouse",
            addClue: {
                id: "lighthouse_clue",
                text: "Ein Hinweis deutet darauf hin, dass Wilson möglicherweise zum Leuchtturm an der Nordküste geflohen ist."
            }
        }, {
            text: "Die Akte mitnehmen und Dr. Sheehan konfrontieren", nextId: "confront_sheehan"
        }, {
            text: "Die Akte mitnehmen und das Labor verlassen", nextId: "exit_with_file", addClue: {
                id: "wilson_escape",
                text: "Patient 67/Dr. Wilson erinnerte sich an seine wahre Identität und floh vor drei Tagen."
            }
        }]
    },

    // Zum Leuchtturm aufbrechen
    go_lighthouse: {
        text: "Nach deiner Flucht aus dem Kellerlabor machst du dich auf den Weg zum Leuchtturm an der Nordküste. Der Sturm hat an Stärke zugenommen, Regen peitscht dir ins Gesicht. Der schmale Pfad entlang der Klippen ist rutschig und gefährlich. Nach einer anstrengenden Wanderung siehst du schließlich den Leuchtturm, seine Lichter kaum sichtbar durch den Nebel und Regen. Als du näher kommst, bemerkst du, dass die Tür nicht verschlossen ist. Im Inneren ist es dunkel, nur das schwache Licht deiner Taschenlampe erhellt den Raum. 'Ich wusste, dass jemand kommen würde', sagt eine Stimme aus dem Schatten. 'Ich hatte nur gehofft, es wäre nicht du, Andrew.'",
        choices: [{
            text: "Fragen, woher er dich kennt", nextId: "how_know_me"
        }, {
            text: "Fragen, ob er Dr. Wilson ist", nextId: "ask_wilson_identity"
        }, {
            text: "Deine Waffe ziehen und den Mann auffordern, ins Licht zu treten",
            nextId: "demand_reveal",
            addClue: {
                id: "lighthouse_meeting",
                text: "Du hast eine Person im Leuchtturm gefunden, die dich beim Namen 'Andrew' nannte."
            }
        }]
    },

    // Fragen, ob er Dr. Wilson ist
    ask_wilson_identity: {
        text: "Der Mann tritt ins Licht. Er ist älter, grauhaarig, mit einer Narbe über dem rechten Auge. 'Ja, ich bin - oder war - Dr. Edward Wilson.' Er mustert dich. 'Und du bist Andrew Laeddis. Oder zumindest war das dein Name, bevor sie dir eine neue Identität gaben.' Er geht zu einem Tisch, auf dem Papiere ausgebreitet sind. 'Sie haben dir eingeredet, du seist ein Marshal auf der Suche nach einem vermissten Patienten. Eine elegante Lösung, muss ich zugeben. So kannst du die Klinik durchsuchen, ohne Verdacht zu erregen, während sie beobachten, ob meine Hinweise bei dir Erinnerungen wecken.' Er reicht dir ein Foto. Es zeigt dich und ihn, lächelnd, in Laborkitteln. 'Wir waren Kollegen, Andrew. Und Freunde.'",
        choices: [{
            text: "Das Foto anstarren und versuchen, dich zu erinnern", nextId: "stare_photo"
        }, {
            text: "Ihm nicht glauben - er könnte einer der Patienten sein",
            nextId: "disbelieve_wilson"
        }, {
            text: "Fragen, was wirklich in der Klinik vor sich geht",
            nextId: "ask_truth_clinic",
            addClue: {
                id: "colleague_claim",
                text: "Dr. Wilson behauptet, du seist Andrew Laeddis, sein ehemaliger Kollege, und deine Identität als Marshal sei implantiert."
            }
        }]
    },

    // Nach der Wahrheit über die Klinik fragen
    ask_truth_clinic: {
        text: "Wilson seufzt und setzt sich. 'Wir sollten Helden sein, weißt du? Projekt JANUS begann als Weg, Kriegsveteranen von PTSD zu heilen. Selektive Gedächtnislöschung.' Er reibt sich die Augen. 'Aber Jenkins sah das Potenzial für mehr. Nicht nur Vergessen, sondern Neuprogrammierung. Neue Identitäten erschaffen. Das Militär wurde interessiert. Die CIA auch.' Er zeigt auf dich. 'Du hast es zuerst bemerkt. Die Testpersonen veränderten sich fundamental. Sie wurden... anpassbar. Formbar. Perfekte Soldaten. Oder Spione.' Er zieht ein Notizbuch hervor. 'Wir wollten aussteigen, die Öffentlichkeit warnen. Jenkins kam uns zuvor. Dir gaben sie eine neue Identität. Mich machten sie zum Patienten 67.' Ein Donnergrollen erschüttert den Leuchtturm. 'Sie werden uns finden, Andrew. Sie kommen bereits.'",
        choices: [{
            text: "Gemeinsam einen Fluchtplan schmieden", nextId: "escape_plan"
        }, {
            text: "Fragen, ob es einen Weg gibt, deine Erinnerungen zurückzubekommen",
            nextId: "memory_recovery"
        }, {
            text: "Vorschlagen, Beweise zu sammeln und die Behörden zu informieren",
            nextId: "gather_evidence",
            addClue: {
                id: "janus_truth",
                text: "Projekt JANUS entwickelte sich von einer PTSD-Therapie zu einem Programm zur Persönlichkeitsmanipulation mit militärischen Anwendungen."
            }
        }]
    },

    // Wege zur Erinnerungswiederherstellung
    memory_recovery: {
        text: "Wilson zieht eine kleine Flasche aus seiner Tasche. 'RX-78-Antagonist. Ein Gegenmittel, das ich entwickelt habe.' Er sieht dich ernst an. 'Es wird die chemischen Blockaden in deinem Gehirn lösen. Aber Andrew, ich muss dich warnen - der Prozess ist schmerzhaft. Und die Erinnerungen... sie könnten überwältigend sein.' Er reicht dir die Flasche. 'Du warst ein brillanter Psychiater. Wir haben bahnbrechende Arbeit geleistet, bevor alles aus dem Ruder lief.' Er schaut zum Fenster, wo Lichter im Sturm zu sehen sind. 'Sie kommen. Es ist deine Entscheidung. Nimm das Mittel und erinnere dich an alles, was du warst - oder bleibe der Marshal, als den sie dich programmiert haben.'",
        choices: [{
            text: "Das Gegenmittel nehmen", nextId: "take_antidote"
        }, {
            text: "Das Gegenmittel ablehnen", nextId: "refuse_antidote"
        }, {
            text: "Vorschlagen, gemeinsam zu fliehen und später zu entscheiden",
            nextId: "escape_decide_later",
            addClue: {
                id: "memory_antidote",
                text: "Dr. Wilson hat ein Gegenmittel entwickelt, das möglicherweise deine wahren Erinnerungen wiederherstellen kann."
            }
        }]
    },

    // Das Gegenmittel nehmen
    take_antidote: {
        text: "Mit zitternden Händen nimmst du die Flasche und trinkst den Inhalt. Zunächst passiert nichts. Dann beginnt ein pochender Schmerz in deinem Kopf, der schnell unerträglich wird. Du fällst auf die Knie, während Bilder und Erinnerungen auf dich einströmen. Dein Leben als Dr. Andrew Laeddis. Die Jahre der Forschung. Deine Freundschaft mit Wilson. Die Entdeckung von Jenkins' wahren Absichten. Der Versuch, das Projekt zu stoppen. Die Gefangennahme. Die 'Behandlungen'. Du schreist, als die falschen Erinnerungen zerfallen und die Wahrheit ans Licht kommt. Als der Schmerz nachlässt, siehst du Wilson, der besorgt neben dir kniet. 'Andrew? Bist du es?' Der Klang von Booten dringt durch den Sturm. 'Sie sind hier', sagt Wilson. 'Erinnerst du dich genug, um zu kämpfen?'",
        choices: [{
            text: "Ja - bereit sein, die Wahrheit zu verteidigen", nextId: "ready_fight"
        }, {
            text: "Noch verwirrt - Wilson bitten, dir zu helfen", nextId: "ask_wilson_help"
        }, {
            text: "Einen Fluchtplan vorschlagen", nextId: "suggest_escape", addClue: {
                id: "true_memories",
                text: "Du erinnerst dich nun an deine wahre Identität als Dr. Andrew Laeddis, ehemaliger Kollege von Dr. Wilson."
            }
        }]
    },

    // Bereit sein, die Wahrheit zu verteidigen
    ready_fight: {
        text: "Du richtest dich auf, gestärkt durch die zurückgekehrten Erinnerungen. 'Ich erinnere mich, Ed. An alles.' Du greifst nach der Waffe, die du als 'Marshal' bekommen hast. 'Sie werden uns nicht wieder bekommen.' Wilson nickt grimmig und öffnet seinen Rucksack. Er zieht einen dicken Ordner heraus. 'Alle Beweise, die wir brauchen. Protokolle, Daten, Zeugenaussagen.' Draußen hört ihr Stimmen und das Brechen von Wellen, als Boote anlegen. 'Es gibt einen Geheimgang unter dem Leuchtturm', sagt Wilson. 'Er führt zu einer Bucht auf der anderen Seite der Insel. Ein Boot liegt bereit.' Er gibt dir den Ordner. 'Nimm das. Bring es zum Festland. Ich werde sie aufhalten.'",
        choices: [{
            text: "Darauf bestehen, gemeinsam zu fliehen", nextId: "insist_together"
        }, {
            text: "Die Beweise nehmen und fliehen", nextId: "take_evidence_flee"
        }, {
            text: "Vorschlagen, sich zu stellen und die Beweise zu präsentieren",
            nextId: "suggest_surrender",
            addClue: {
                id: "complete_evidence",
                text: "Dr. Wilson hat einen Ordner mit umfassenden Beweisen über Projekt JANUS gesammelt."
            }
        }]
    },

    // Die Beweise nehmen und fliehen
    take_evidence_flee: {
        text: "Schweren Herzens nimmst du den Ordner. 'Ich komme zurück, Ed. Mit Hilfe.' Wilson lächelt traurig. 'Ich weiß.' Er führt dich zu einer Falltür unter einem Teppich. 'Der Tunnel ist eng, aber er wird dich direkt zum Boot führen. Es ist vollgetankt und hat genug Vorräte.' Ihr hört, wie die Eingangstür des Leuchtturms aufbricht. 'Geh jetzt!', drängt Wilson und drückt dir einen Schlüssel in die Hand. Du kletterst in den dunklen Tunnel, während Wilson die Falltür schließt und den Teppich zurücklegt. Im Dunkeln tastest du dich vorwärts, den Ordner fest an dich gepresst. Nach einer Ewigkeit im feuchten, engen Gang erreichst du eine weitere Tür. Sie führt zu einer versteckten Bucht, wo tatsächlich ein kleines Boot wartet. Hinter dir hörst du Schüsse vom Leuchtturm.",
        choices: [{
            text: "Das Boot nehmen und zum Festland fliehen", nextId: "ending_escape"
        }, {
            text: "Zum Leuchtturm zurückkehren, um Wilson zu helfen", nextId: "return_help_wilson"
        }, {
            text: "Eine List versuchen - einen falschen Fluchtweg inszenieren und dann zur Klinik zurückkehren",
            nextId: "decoy_clinic_return",
            addClue: {
                id: "secret_escape",
                text: "Es gibt einen Geheimtunnel vom Leuchtturm zu einer versteckten Bucht mit einem Fluchtboot."
            }
        }]
    },

    // Verbindung zum großen Twist - Identitätsenthüllung
    decoy_clinic_return: {
        text: "Du setzt das Boot ins Wasser und startest den Motor, steuerst es aber unbemannt auf einen Kurs Richtung offenes Meer. Mit den Beweisen im wasserdichten Beutel schwimmst du ein Stück die Küste entlang, bevor du wieder an Land gehst. Durchnässt und erschöpft, aber entschlossen, machst du dich auf den Weg zurück zur Klinik. Sie werden dich dort nicht erwarten. Mit deinem wiedererlangten Wissen weißt du, wo du suchen musst, um die letzten Beweise zu sichern. Als du die Klinik erreichst, ist sie in seltsamer Stille gehüllt. Der Sturm hat nachgelassen. Du schleichst dich durch einen Nebeneingang hinein, die Waffe gezogen. In der Eingangshalle stehst du plötzlich vor Dr. Cawley. 'Andrew', sagt er mit einem traurigen Lächeln. 'Wir haben dich erwartet.'",
        choices: [{
            text: "Cawley konfrontieren und die Beweise vorzeigen", nextId: "identity_revelation"
        }, {
            text: "Versuchen zu fliehen", nextId: "attempt_escape_clinic"
        }, {
            text: "Vorgeben, immer noch der Marshal zu sein", nextId: "pretend_marshal", addClue: {
                id: "clinic_return",
                text: "Du bist zur Klinik zurückgekehrt, wo Dr. Cawley dich als Andrew erkannt hat."
            }
        }]
    },


    // ===== HANDLUNGSSTRANG 2: DIE EXPERIMENTELLEN BEHANDLUNGEN =====

    // Nachfrage zum Ostflügel
    east_wing_inquiry: {
        text: "McPhersons Gesicht verhärtet sich. 'Der Ostflügel steht nicht zur Debatte. Dr. Jenkins' Arbeit dort ist revolutionär, aber... vertraulich.' Er senkt die Stimme. 'Es gab Vorfälle. Patienten, die nicht mehr dieselben waren, nachdem sie dort behandelt wurden.' Er schaut sich nervös um. 'Vergessen Sie, was ich gesagt habe. Wenn Sie wissen, was gut für Sie ist, halten Sie sich vom Ostflügel fern.' Während er spricht, bemerkst du einen Patienten, der euch beobachtet. Er tippt sich bedeutungsvoll an die Schläfe und deutet dann auf dich.",
        choices: [{
            text: "Den beobachtenden Patienten ansprechen", nextId: "approach_watching_patient"
        }, {
            text: "McPherson nach den 'Vorfällen' fragen", nextId: "ask_about_incidents"
        }, {
            text: "Einen Weg finden, heimlich in den Ostflügel zu gelangen",
            nextId: "plan_east_wing_access",
            addClue: {
                id: "east_wing_rumors",
                text: "Im Ostflügel werden möglicherweise gefährliche Experimente durchgeführt, die die Persönlichkeit von Patienten verändern können."
            }
        }]
    },

    // Den beobachtenden Patienten ansprechen
    approach_watching_patient: {
        text: "Du bewegst dich langsam auf den Patienten zu. McPherson ruft: 'Halt! Er ist gefährlich!' Aber etwas an dem Mann – seine klaren Augen inmitten des verwirrten Gesichtsausdrucks – lässt dich weitergehen. 'Sie sind neu', flüstert der Mann. 'Noch nicht programmiert.' Er schaut nervös zu McPherson. 'George Noyce. Ich war dort drin. Im Ostflügel. Sie verändern dich dort.' Er greift plötzlich dein Handgelenk. 'Sie beobachten uns. Jetzt dich. Pass auf, was du trinkst, was du isst. Die Medikamente...' McPherson zieht dich weg. 'Genug, Noyce! Zurück zu deinem Zimmer!' Als du weggeführt wirst, ruft Noyce: 'Finde Raum 22! Sieh dir die Fenster an!'",
        choices: [{
            text: "McPherson nach George Noyce fragen", nextId: "ask_about_noyce"
        }, {
            text: "Nach Raum 22 suchen", nextId: "find_room_22", addClue: {
                id: "room_22_clue",
                text: "Patient George Noyce erwähnte einen 'Raum 22' im Ostflügel und warnte dich, auf die Fenster zu achten."
            }
        }, {
            text: "Die Aussagen von Noyce ignorieren - er scheint verwirrt", nextId: "ignore_noyce"
        }]
    },

    // Nach Raum 22 suchen
    find_room_22: {
        text: "Du findest einen unbeobachteten Moment, um dich vom Hauptgebäude zum Ostflügel zu schleichen. Der Gang, der die beiden Gebäude verbindet, ist überraschend modern im Vergleich zum viktorianischen Hauptgebäude. Eine Sicherheitstür blockiert den Zugang, aber du bemerkst, dass ein Pfleger sie offen lässt, während er einen Patienten hineinschiebt. Du schlüpfst hindurch und findest dich in einem klinisch weißen Korridor wieder. Die Raumbeschilderung zeigt, dass du dich im therapeutischen Bereich befindest: Räume 15-30. Als du dich Raum 22 näherst, fällt dir auf, was Noyce meinte: Anders als die anderen Räume hat dieser verspiegelte Fenster – Beobachtungsfenster, die nur in eine Richtung durchsichtig sind.",
        choices: [{
            text: "Durch das Fenster in Raum 22 schauen", nextId: "observe_room_22"
        }, {
            text: "Einen Weg finden, um in den Raum zu gelangen", nextId: "enter_room_22"
        }, {
            text: "Die Umgebung erkunden, um mehr über die Aktivitäten hier zu erfahren",
            nextId: "explore_wing",
            addClue: {
                id: "observation_room",
                text: "Raum 22 im Ostflügel hat verspiegelte Beobachtungsfenster, anders als die übrigen Behandlungsräume."
            }
        }]
    },

    // Durch das Fenster schauen
    observe_room_22: {
        text: "Du schaust vorsichtig durch das verspiegelte Fenster. Der Raum dahinter sieht aus wie eine Mischung aus Verhörzimmer und Behandlungsraum. Ein Stuhl mit Gurten steht in der Mitte, daneben ein Wagen mit medizinischen Instrumenten und Spritzen. An der Wand hängt ein großer Bildschirm. Auf einem Tisch liegen Patientenakten. Plötzlich öffnet sich die Tür zum Raum, und Dr. Jenkins betritt ihn, gefolgt von einer Krankenschwester, die einen verwirrten Patienten führt. Du duckst dich, bleibst aber in Position, um zu beobachten. 'Setzen Sie sich', weist Jenkins den Patienten an. 'Heute machen wir mit Ihrer neuen Geschichte weiter. Erinnern Sie sich an Ihren Namen?'",
        choices: [{
            text: "Weiter beobachten", nextId: "continue_observation"
        }, {
            text: "Dich zurückziehen, bevor du entdeckt wirst", nextId: "retreat_safely"
        }, {
            text: "Versuchen, die Behandlung zu stören", nextId: "interrupt_treatment", addClue: {
                id: "treatment_observed",
                text: "Du hast beobachtet, wie Dr. Jenkins einem Patienten eine 'neue Geschichte' einpflanzt – offenbar eine falsche Identität."
            }
        }]
    },

    // Weiter beobachten
    continue_observation: {
        text: "Du beobachtest gebannt die Szene. Der Patient wirkt desorientiert. 'Ich... ich bin Robert Thompson', sagt er unsicher. Jenkins nickt anerkennend. 'Sehr gut. Und was ist Ihr Beruf?' Der Patient zögert. 'Ich war... Nein, ich bin Buchhalter.' Jenkins lächelt. 'Exzellent.' Er gibt der Schwester ein Zeichen, die eine Spritze vorbereitet. 'Diese Medikation wird Ihnen helfen, sich besser zu erinnern.' Der Bildschirm flackert auf und zeigt Bilder einer Büroumgebung, einer Frau, zweier Kinder – offenbar 'Roberts' angebliches Leben. Jenkins spricht beruhigend, während die Bilder wechseln: 'Ihre Frau Sarah, Ihre Kinder Emma und Michael...' Mit wachsendem Entsetzen erkennst du, dass du Zeuge einer systematischen Neuprogrammierung der Identität wirst.",
        choices: [{
            text: "Fotos oder Beweise der Behandlung sichern",
            nextId: "secure_evidence",
            requireClue: "camera_found"
        }, {
            text: "Den Raum verlassen und Dr. Sheehan aufsuchen",
            nextId: "consult_sheehan",
            addClue: {
                id: "identity_implantation",
                text: "Du hast gesehen, wie Dr. Jenkins einem Patienten systematisch falsche Erinnerungen und eine neue Identität einpflanzt."
            }
        }, {
            text: "Nach anderen Behandlungsräumen suchen", nextId: "check_other_rooms"
        }]
    },

    // Dr. Sheehan aufsuchen
    consult_sheehan: {
        text: "Mit den verstörenden Bildern der Behandlung im Kopf suchst du Dr. Sheehan auf. Du findest ihn allein in seinem Büro, vertieft in Krankenakten. Als du von deinen Beobachtungen im Ostflügel berichtest, wird er blass. 'Sie hätten dort nicht sein dürfen', sagt er leise. 'Es ist gefährlich.' Er schließt die Tür und senkt die Stimme. 'Was Sie beschreiben, ist Teil von Projekt JANUS. Es begann als experimentelle Behandlung für schwere Traumata – selektives Vergessen. Aber Jenkins hat es weiterentwickelt.' Er zögert. 'Nicht nur Vergessen, sondern Ersetzen. Komplette Identitäten werden gelöscht und durch neue ersetzt.' Er sieht dich durchdringend an. 'Sie sollten vorsichtig sein, Marshal. Besonders mit dem, was Sie essen oder trinken. Manche... werden ohne ihr Wissen Teil des Projekts.'",
        choices: [{
            text: "Fragen, ob Patient 67 etwas mit dem Projekt zu tun hatte",
            nextId: "patient67_connection"
        }, {
            text: "Fragen, warum er dir das erzählt und dich warnt", nextId: "why_warning"
        }, {
            text: "Nach Dr. Jenkins und seiner Motivation fragen",
            nextId: "jenkins_motivation",
            addClue: {
                id: "sheehan_warning",
                text: "Dr. Sheehan hat dich gewarnt, dass Patienten ohne ihr Wissen Teil von Projekt JANUS werden können."
            }
        }]
    },

    // Verbindung zu Patient 67 erfragen
    patient67_connection: {
        text: "Sheehans Blick wird intensiv. 'Patient 67 – Dr. Edward Wilson – war Jenkins' Kollege. Sie entwickelten JANUS gemeinsam.' Er atmet tief durch. 'Wilson begann, Bedenken zu äußern. Ethische Bedenken. Er drohte, an die Öffentlichkeit zu gehen.' Sheehan greift nach einem versteckten Ordner in seiner Schublade. 'Dies sind Kopien von Wilsons Notizen. Er gab sie mir, kurz bevor er... verschwand.' Er zieht ein Foto heraus: Zwei Männer in Laborkitteln – einer ist klar Dr. Jenkins, der andere ein älterer Mann mit grauem Haar. 'Wilson entdeckte, dass Jenkins Verträge mit Militär und Geheimdiensten hat. JANUS sollte nicht mehr heilen, sondern kontrollieren. Neue Identitäten erschaffen, Loyalitäten umprogrammieren.' Er schließt den Ordner. 'Sie sind in großer Gefahr, Marshal. Wilson hat einen Verdacht geäußert, bevor er verschwand...'",
        choices: [{
            text: "Fragen, welchen Verdacht Wilson hatte", nextId: "wilson_suspicion"
        }, {
            text: "Den Ordner mit Wilsons Notizen erbitten", nextId: "request_notes"
        }, {
            text: "Nach einem sicheren Ort auf der Insel fragen",
            nextId: "ask_safe_place",
            addClue: {
                id: "janus_military",
                text: "Projekt JANUS hat offenbar Verbindungen zum Militär und Geheimdiensten, die an Persönlichkeitsmanipulation interessiert sind."
            }
        }]
    },

    // Nach Wilsons Verdacht fragen
    wilson_suspicion: {
        text: "Sheehan senkt die Stimme noch weiter. 'Wilson vermutete, dass sie bereits... jemanden eingeschleust haben. Jemanden, dessen Identität komplett neu programmiert wurde.' Er sieht dich bedeutungsvoll an. 'Jemanden, der glaubt, in offizieller Funktion hier zu sein, während er in Wahrheit beobachtet wird.' Ein kalter Schauer läuft dir über den Rücken. 'Sie meinen...?' Sheehan nickt langsam. 'Er vermutete, dass ein Agent als Behördenvertreter getarnt werden könnte. Ein perfektes Experiment – die Person würde alles hinterfragen, überall nachforschen, ohne zu wissen, dass sie selbst Teil des Experiments ist.' Er greift nach einem Schlüssel. 'Im Keller gibt es einen alten Aktenschrank. Fach 67. Darin sind Wilsons persönliche Unterlagen. Vielleicht finden Sie dort Antworten.'",
        choices: [{
            text: "Zum Keller gehen und den Aktenschrank suchen",
            nextId: "basement_files",
            addClue: {
                id: "implanted_agent",
                text: "Wilson vermutete, dass ein Agent mit implantierter Identität in die Klinik eingeschleust wurde – möglicherweise jemand, der glaubt, ein Behördenvertreter zu sein."
            }
        }, {
            text: "Fragen, ob Sheehan dich für diesen eingeschleusten Agenten hält",
            nextId: "ask_if_agent"
        }, {
            text: "Nach Möglichkeiten fragen, wie man eine falsche Identität erkennen kann",
            nextId: "how_detect_false_identity"
        }]
    },

    // Zum Keller gehen - Aktenschrank
    basement_files: {
        text: "Mit Sheehans Schlüssel machst du dich auf den Weg in den modrigen Keller der Klinik. Zwischen alten Akten und verstaubten Möbeln findest du den beschriebenen Aktenschrank. Fach 67 ist verschlossen, aber der Schlüssel passt. Im Inneren findest du einen Stapel persönlicher Notizen und Tagebücher von Dr. Wilson. Ein Eintrag fällt dir besonders ins Auge: 'Jenkins testet Verbindung RX-78 an ahnungslosen Subjekten. Die Ergebnisse sind erschreckend. Vollständige Identitätssubstitution, minimale Nebenwirkungen. Ich muss Beweise sammeln.' Weiter hinten: 'Verdacht: Laeddis könnte bereits konvertiert sein. Verhält sich anders. Prüfe heimlich sein Blut auf RX-78-Marker.' Das letzte Datum ist drei Tage vor dem angeblichen Verschwinden von Patient 67. Der Name 'Laeddis' löst ein seltsames Gefühl in dir aus. Irgendwie... vertraut.",
        choices: [{
            text: "Die Notizen mitnehmen und nach diesem 'Laeddis' suchen", nextId: "search_laeddis"
        }, {
            text: "Mehr über Verbindung RX-78 herausfinden wollen", nextId: "investigate_rx78"
        }, {
            text: "Zum Ostflügel zurückkehren und nach Beweisen für die Experimente suchen",
            nextId: "return_east_wing",
            addClue: {
                id: "laeddis_mention",
                text: "Wilson erwähnte in seinen Notizen jemanden namens 'Laeddis', der möglicherweise einer Identitätskonversion unterzogen wurde. Der Name kommt dir seltsam vertraut vor."
            }
        }]
    },

    // Nach Laeddis suchen
    search_laeddis: {
        text: "Der Name 'Laeddis' lässt dich nicht los. Du beginnst, in der Klinik nach Hinweisen zu suchen. In der Patientenkartei findest du keinen Eintrag unter diesem Namen. Als du die Personalabteilung durchsuchst, wirst du jedoch fündig: Eine alte Mitarbeiterakte auf den Namen 'Andrew Laeddis' – mit einem Foto, das dir einen Schock versetzt. Das Gesicht im Foto... sieht aus wie deines, nur mit Bart und längeren Haaren. Laut Akte war Laeddis Psychiater, spezialisiert auf Neuropsychiatrie, und arbeitete vor etwa einem Jahr in der Forschungsabteilung der Klinik. Sein Status: 'Beurlaubt aus medizinischen Gründen'. Angehängt ist ein medizinischer Bericht: 'Subjekt zeigt Anzeichen akuter paranoider Psychose. Empfehlung: Experimentelle Behandlung im Rahmen von Projekt JANUS.'",
        choices: [{
            text: "Nach Fotos oder anderen Beweisen für deine Identität suchen",
            nextId: "search_identity_proof"
        }, {
            text: "Dr. Sheehan mit der Akte konfrontieren", nextId: "confront_sheehan_file"
        }, {
            text: "Deine eigenen Erinnerungen in Frage stellen",
            nextId: "question_memories",
            addClue: {
                id: "laeddis_file",
                text: "Du hast eine Personalakte gefunden, die darauf hindeutet, dass du Andrew Laeddis sein könntest – ein ehemaliger Psychiater der Klinik, der 'beurlaubt' wurde."
            }
        }]
    },

    // Deine Erinnerungen in Frage stellen
    question_memories: {
        text: "Allein in deinem Quartier versuchst du, deine Erinnerungen zu ordnen. Wie war deine Anreise zur Insel? Die Details verschwimmen. Dein Leben als Marshal – Einzelheiten deiner Fälle, deiner Kollegen? Alles bleibt seltsam vage. Du greifst nach deiner Brieftasche und untersuchst sie gründlich. Die Marke sieht echt aus, aber als du sie genauer betrachtest, bemerkst du feine Unstimmigkeiten. Deine Dienstwaffe – wann hast du sie zuletzt benutzt? Du kannst dich nicht erinnern. Auf dem Nachttisch steht ein Glas Wasser. Warst du immer schon so durstig? Oder... könnte etwas im Wasser sein? Die Kopfschmerzen, die dich seit der Ankunft plagen – sind sie ein Symptom? Ein Blick in den Spiegel zeigt dir dein Gesicht, aber zum ersten Mal siehst du den Mann auf dem Foto in der Akte.",
        choices: [{
            text: "Dr. Sheehan aufsuchen und ihm von deinen Zweifeln erzählen",
            nextId: "share_doubts_sheehan"
        }, {
            text: "Das Wasser und deine Medikamente untersuchen", nextId: "examine_water_meds"
        }, {
            text: "Zum Leuchtturm gehen, der auf der Wandkarte markiert war",
            nextId: "go_lighthouse",
            addClue: {
                id: "memory_gaps",
                text: "Du hast beunruhigende Lücken in deinen Erinnerungen festgestellt und Zweifel an deiner Identität als Marshal."
            }
        }]
    },

    // Das Wasser untersuchen
    examine_water_meds: {
        text: "Du betrachtest misstrauisch das Wasserglas. Eine schwache, kaum wahrnehmbare Verfärbung ist zu erkennen. Aus deiner Jackentasche ziehst du das kleine Notizbuch, das du gefunden hast. Darin beschreibt Wilson, dass RX-78 im Wasser fast unsichtbar ist, aber einen charakteristischen, leicht bitteren Nachgeschmack hat. Vorsichtig nimmst du einen winzigen Schluck – tatsächlich, da ist eine Bitternote. In deiner Tasche findest du außerdem Pillen, die dir angeblich gegen Migräne gegeben wurden. Du zerbrichst eine und untersuchst das Pulver. Es passt zur Beschreibung des Stabilisators, der laut Wilson zur Festigung der implantierten Erinnerungen dient. Ein kalter Schauder läuft dir über den Rücken – sie versuchen tatsächlich, deine Identität zu manipulieren. Aber wer bist du wirklich?",
        choices: [{
            text: "Alle Medikamente und Getränke vermeiden", nextId: "avoid_all_meds", addClue: {
                id: "drugged_water",
                text: "Du hast herausgefunden, dass das Wasser und die Pillen in der Klinik mit Substanzen versetzt sind, die deine Erinnerungen manipulieren."
            }
        }, {
            text: "Einen Teil der Substanzen sammeln als Beweis", nextId: "collect_samples"
        }, {
            text: "Mit den neuen Erkenntnissen zum Leuchtturm aufbrechen",
            nextId: "go_lighthouse",
            requireClue: "lighthouse_clue"
        }]
    },

    // Alle Medikamente vermeiden
    avoid_all_meds: {
        text: "Du beschließt, kein Wasser mehr zu trinken und keine Medikamente mehr zu nehmen. Innerhalb von 24 Stunden bemerkst du Veränderungen. Die Kopfschmerzen werden zunächst schlimmer, dann folgen Schwindelgefühle und verstörende Flashbacks. Bruchstücke von Erinnerungen tauchen auf – du in einem Laborkittel, diskutierend mit Wilson und Jenkins; ein hitziger Streit über Ethik; das Gefühl, betrogen worden zu sein. Die Nacht ist qualvoll, aber am Morgen klart dein Verstand etwas auf. Du fühlst dich anders – scharfsinniger, aber auch verwirrter über deine Identität. Als Schwester Rachel dich zur morgendlichen Medikation abholen will, bemerkst du ihren alarmierten Blick. 'Sie sehen blass aus, Marshal. Ist alles in Ordnung?' Du erkennst jetzt die falsche Fürsorge in ihrer Stimme.",
        choices: [{
            text: "Vorgeben, dass alles in Ordnung ist, und heimlich zum Leuchtturm aufbrechen",
            nextId: "fake_normalcy",
            requireClue: "lighthouse_clue"
        }, {
            text: "Rachel konfrontieren und Antworten verlangen", nextId: "confront_rachel"
        }, {
            text: "Dr. Sheehan aufsuchen und ihm von den zurückkehrenden Erinnerungen erzählen",
            nextId: "tell_sheehan_memories",
            addClue: {
                id: "returning_memories",
                text: "Nach dem Verzicht auf die manipulierten Getränke und Medikamente beginnen fragmentarische Erinnerungen an dein Leben als Arzt zurückzukehren."
            }
        }]
    },

    // Verbindung zum Haupttwist
    tell_sheehan_memories: {
        text: "Du findest Dr. Sheehan allein in seinem Büro. Als du von deinen zurückkehrenden Erinnerungen berichtest, wirkt er nicht überrascht, sondern erleichtert. 'Es funktioniert also', murmelt er. 'Andrews Abwehrmechanismen sind stärker, als Jenkins dachte.' Er sieht dich direkt an. 'Du kommst zurück, nicht wahr, Andrew?' Die Anrede mit diesem Namen löst weitere Erinnerungsfragmente aus – Sheehan als dein Kollege, gemeinsame Forschung, Freundschaft. 'Wilson hat dich gefunden, oder?', fragt Sheehan. 'Deshalb bist du zur Besinnung gekommen.' Er reicht dir einen Schlüssel. 'Im Archiv, unterer Schrank, ganz hinten. Dort liegt deine wahre Akte. Du musst dich beeilen – Jenkins wird bald bemerken, dass die Medikation nicht wirkt. Finde Wilson. Er kann dir helfen, vollständig zurückzukommen.'",
        choices: [{
            text: "Zum Archiv gehen und die Akte holen", nextId: "identity_revelation"
        }, {
            text: "Sheehan nach dem Leuchtturm fragen",
            nextId: "ask_about_lighthouse",
            requireClue: "lighthouse_clue"
        }, {
            text: "Fragen, wer du wirklich bist und was passiert ist",
            nextId: "ask_true_identity",
            addClue: {
                id: "sheehan_confirmation",
                text: "Dr. Sheehan hat bestätigt, dass du Andrew bist und dass deine Identität als Marshal künstlich erschaffen wurde."
            }
        }]
    },


    // ===== HANDLUNGSSTRANG 3: DIE VERGANGENHEIT DES ERMITTLERS =====

    // Letzter bekannter Aufenthaltsort - Einstiegsszenario Handlungsstrang 3
    wall_pattern: {
        text: "Rachel betrachtet die Kratzspuren an der Wand mit seltsamer Gleichgültigkeit. 'Patienten tun solche Dinge', sagt sie knapp. 'Wahnvorstellungen, Zwangshandlungen.' Sie wendet sich zum Gehen, doch du hältst sie zurück. 'Wann wurde diese Karte gezeichnet?' Sie zögert. 'Ich bin nicht sicher.' Während sie spricht, hast du eine plötzliche Vision: Du selbst, wie du in diesem Raum sitzt, mit blutigem Finger an der Wand kratzt. Die Vision ist so lebhaft, dass du zurücktaumelst. 'Ist alles in Ordnung, Marshal?', fragt Rachel mit einem forschenden Blick.",
        choices: [{
            text: "Von der Vision erzählen und nach Erklärungen suchen", nextId: "share_vision"
        }, {
            text: "Die Vision verschweigen, aber nach dem Keller fragen",
            nextId: "inquire_basement",
            addClue: {
                id: "vision_room",
                text: "Eine verstörende Vision zeigt dich selbst in diesem Zimmer, wie du die Karte an die Wand ritzt."
            }
        }, {
            text: "Die Karte heimlich abzeichnen und den Raum verlassen", nextId: "copy_map"
        }]
    },

    // Vision teilen
    share_vision: {
        text: "Du beschließt, offen zu sein. 'Ich hatte gerade ein seltsames Bild vor Augen – als ob ich selbst hier gewesen wäre, an dieser Wand kratzend.' Rachels Gesicht verändert sich kaum merklich. Sie tauscht einen kurzen Blick mit dem Wachmann an der Tür aus. 'Das Gehirn spielt manchmal Streiche, Marshal. Besonders in einer Umgebung wie dieser.' Sie macht eine Notiz auf ihrem Klemmbrett. 'Haben Sie in letzter Zeit gut geschlafen? Kopfschmerzen?' Ihre scheinbare Besorgnis wirkt einstudiert. 'Dr. Cawley sollte davon wissen. Solche... Episoden können ein Zeichen von Stress sein. Vielleicht brauchen Sie etwas zur Beruhigung.'",
        choices: [{
            text: "Die Medikation ablehnen und auf der Vision beharren", nextId: "refuse_medication"
        }, {
            text: "Zustimmen, aber heimlich die Medikamente nicht nehmen",
            nextId: "fake_agreement",
            addClue: {
                id: "rachel_concern",
                text: "Schwester Rachel zeigte ungewöhnliches Interesse an deiner Vision und wollte sofort Dr. Cawley informieren."
            }
        }, {
            text: "Das Thema wechseln und nach anderen Patienten fragen",
            nextId: "change_subject_patients"
        }]
    },

    // Medikation ablehnen
    refuse_medication: {
        text: "'Ich brauche keine Medikamente', sagst du bestimmt. 'Was ich brauche, sind Antworten.' Du deutest auf die Wandritze. 'Diese Karte wurde nicht zufällig gezeichnet. Sie zeigt einen spezifischen Ort.' Rachel wird angespannt. 'Marshal, bitte verstehen Sie, dass viele unserer Patienten Wahnvorstellungen haben. Nicht alles hat eine tiefere Bedeutung.' Als du weiter auf der Karte bestehst, erscheint Dr. Cawley in der Tür. 'Alles in Ordnung hier?' fragt er mit einem durchdringenden Blick. 'Schwester Rachel meinte, Sie hätten eine... ungewöhnliche Erfahrung.' Die Schnelligkeit, mit der er informiert wurde, macht dich misstrauisch.",
        choices: [{
            text: "Cawley direkt nach deinen Visionen befragen", nextId: "ask_cawley_visions"
        }, {
            text: "Behaupten, es sei ein Missverständnis gewesen", nextId: "claim_misunderstanding"
        }, {
            text: "Den Raum verlassen und heimlich zum Keller gehen",
            nextId: "sneak_basement",
            addClue: {
                id: "quick_response",
                text: "Dr. Cawley wurde ungewöhnlich schnell über deine Vision informiert, was auf eine besondere Überwachung hindeutet."
            }
        }]
    },

    // Heimlich zum Keller gehen
    sneak_basement: {
        text: "Du findest eine Gelegenheit, dich vom Personal abzusetzen, und folgst den Hinweisen der Wandkarte zum Keller. Der Abstieg führt dich durch feuchte, modrige Korridore, die älter wirken als der Rest des Gebäudes. Mit jeder Stufe nach unten verstärkt sich ein seltsames Gefühl der Vertrautheit. Der Keller selbst ist ein Labyrinth aus alten Rohren und verstaubten Lagerräumen. An der Stelle, die auf der Karte markiert war, findest du eine massive Metalltür mit einem elektronischen Schloss – modernste Technik inmitten des Verfalls. Als du die Tür berührst, durchzuckt dich eine weitere Vision: Du stehst auf der anderen Seite, im Gespräch mit Dr. Jenkins, Dokumente übergebend. 'Projekt JANUS wird alles verändern', hörst du dich selbst sagen.",
        choices: [{
            text: "Versuchen, das elektronische Schloss zu knacken", nextId: "hack_lock"
        }, {
            text: "Nach Anhaltspunkten für einen Zugangscode suchen", nextId: "look_passcode"
        }, {
            text: "Die Vision reflektieren und nach weiteren Erinnerungen suchen",
            nextId: "reflect_vision",
            addClue: {
                id: "janus_vision",
                text: "Eine weitere Vision zeigt dich im Gespräch mit Dr. Jenkins hinter der verschlossenen Tür, wo du über 'Projekt JANUS' sprichst."
            }
        }]
    },

    // Die Vision reflektieren
    reflect_vision: {
        text: "Du lehnst dich gegen die kühle Kellerwand und schließt die Augen, versuchst, die Vision festzuhalten. Fragmente weiterer Erinnerungen tauchen auf: Du in einem Laborkittel, Notizen machend, Diskussionen mit Wilson und Jenkins. Eine Gleichung an einer Tafel, chemische Formeln. Das Gefühl von Begeisterung, dann von wachsendem Unbehagen. Ein heftiger Streit. Drohungen. Dann Dunkelheit. Als du die Augen öffnest, ist etwas anders. Du betrachtest deine Hände – sie erscheinen vertraut und doch fremd. Sind dies die Hände eines Marshals? Oder eines Arztes? Auf deinem linken Handrücken bemerkst du eine kleine Narbe. Woher stammt sie? Du erinnerst dich plötzlich: ein zerbrochenes Reagenzglas während eines Experiments.",
        choices: [{
            text: "Dr. Sheehan aufsuchen und von den Erinnerungen berichten",
            nextId: "tell_sheehan_visions"
        }, {
            text: "In der Patientenkartei nach deinem eigenen Namen suchen",
            nextId: "search_own_name"
        }, {
            text: "Zum Leuchtturm gehen, der in deinen Visionen auftaucht",
            nextId: "go_lighthouse",
            addClue: {
                id: "scientist_memories",
                text: "Fragmentarische Erinnerungen deuten darauf hin, dass du möglicherweise als Wissenschaftler an Projekt JANUS beteiligt warst."
            }
        }]
    },

    // In der Patientenkartei suchen
    search_own_name: {
        text: "Du schleichst dich in das Verwaltungsbüro, als das Personal in der Mittagspause ist. Die Patientenakten sind alphabetisch geordnet. Du suchst unter 'L' – ein Impuls, den du nicht erklären kannst. Tatsächlich findest du eine Akte: 'Laeddis, Andrew'. Mit klopfendem Herzen öffnest du sie. Das Foto zeigt eindeutig dich, wenn auch mit längerem Haar und Bart. Die Diagnose lautet: 'Schwere dissoziative Identitätsstörung mit Wahnvorstellungen. Patient entwickelte nach traumatischen Ereignissen eine komplexe Scheinidentität.' Ein handschriftlicher Vermerk von Dr. Cawley: 'Subjekt reagiert gut auf experimentelle Therapie. Identität als US-Marshal erfolgreich implantiert. Beobachtung unter kontrollierten Bedingungen fortsetzen.' Du lässt die Akte fallen, als wäre sie glühend heiß.",
        choices: [{
            text: "Die Akte mitnehmen und konfrontiere Dr. Cawley", nextId: "confront_cawley_file"
        }, {
            text: "Nach weiteren Hinweisen in der Akte suchen", nextId: "examine_file_further"
        }, {
            text: "Nach Beweisen für deine tatsächliche Identität als Marshal suchen",
            nextId: "look_marshal_proof",
            addClue: {
                id: "patient_file",
                text: "Du hast eine Patientenakte auf den Namen Andrew Laeddis gefunden – mit deinem Foto und der Information, dass du eine 'implantierte' Identität als US-Marshal hast."
            }
        }]
    },

    // Weitere Untersuchung der Akte
    examine_file_further: {
        text: "Mit zitternden Händen durchsuchst du die Akte gründlicher. Du findest einen medizinischen Bericht: 'Patient wurde nach einem Nervenzusammenbruch eingeliefert. Vorheriger Beruf: Psychiater, spezialisiert auf Neurochemie. Arbeitete mit Dr. Jenkins und Dr. Wilson an Projekt JANUS.' Weiter hinten ist ein persönlicher Brief, unterschrieben von 'Dolores'. Sie schreibt von ihrer Sorge um dich, erwähnt eure Kinder und hofft auf deine baldige Genesung. Ein Polaroid-Foto zeigt dich mit einer Frau und zwei kleinen Kindern vor einem Haus am See. Die Gesichter wirken vertraut und fremd zugleich. Eine handschriftliche Notiz von Dr. Jenkins: 'Erinnerungen an Familie vollständig unterdrückt. Kein Anzeichen von Durchbrüchen. Experiment verläuft nach Plan.'",
        choices: [{
            text: "Nach dieser 'Dolores' suchen", nextId: "search_dolores"
        }, {
            text: "Dr. Sheehan mit den Entdeckungen konfrontieren",
            nextId: "confront_sheehan_discoveries"
        }, {
            text: "Das Foto und den Brief mitnehmen und einen ruhigen Ort zum Nachdenken suchen",
            nextId: "contemplate_evidence",
            addClue: {
                id: "family_evidence",
                text: "Ein Brief und ein Foto deuten darauf hin, dass du eine Frau namens Dolores und Kinder hast – eine Familie, an die du dich nicht erinnern kannst."
            }
        }]
    },

    // Über die Beweise nachdenken
    contemplate_evidence: {
        text: "Du ziehst dich in einen verlassenen Teil des Gebäudes zurück und betrachtest das Foto intensiv. Die Frau – Dolores – hat ein warmes Lächeln, dunkles Haar. Die Kinder, ein Junge und ein Mädchen, lachen in die Kamera. Du spürst einen schmerzhaften Stich in deiner Brust, ein Gefühl von Verlust, das du nicht einordnen kannst. Während du das Bild anstarrst, flackern Erinnerungsfetzen auf: Ein Picknick am See, Kinderlachen, das Gefühl von Glück. Dann plötzlich: Rauch, Schreie, unerträgliche Schuld. Du lässt das Foto fallen und greifst dir an den Kopf, überwältigt von einer Flut widersprüchlicher Bilder und Emotionen. Was ist real? Wer bist du wirklich?",
        choices: [{
            text: "Dich auf die Kindheitserinnerungen konzentrieren", nextId: "focus_childhood"
        }, {
            text: "Versuchen, dich an den 'Verlust' zu erinnern", nextId: "remember_loss"
        }, {
            text: "Dr. Wilson im Leuchtturm suchen, um Antworten zu bekommen",
            nextId: "seek_wilson_answers",
            addClue: {
                id: "trauma_memory",
                text: "Fragmentarische, schmerzhafte Erinnerungen an ein traumatisches Ereignis mit deiner Familie tauchen auf, verbunden mit intensiven Schuldgefühlen."
            }
        }]
    },

    // Versuch, sich an den Verlust zu erinnern
    remember_loss: {
        text: "Du schließt die Augen und konzentrierst dich auf das Gefühl von Verlust. Die Bilder werden schärfer: Ein heißer Sommertag. Du arbeitest spät. Dolores ruft an, klingt besorgt über das alte Elektrosystem im Haus. Du versprichst, es am Wochenende zu prüfen, bist aber vertieft in Forschungsnotizen. Später – Sirenen, blinkende Lichter. Dein Haus in Flammen. Feuerwehrleute, die dich zurückhalten. Die schreckliche Gewissheit, dass niemand überlebt hat. Deine Schuld – du hättest es verhindern können. Das Bild einer Flasche Whiskey, tagelanger Trance. Dann die Klinik, Dr. Cawley, das Angebot: 'Wir können den Schmerz nehmen, Andrew. Für immer.' Du öffnest die Augen, Tränen strömen über dein Gesicht. Die Erinnerung ist echt – du spürst es bis in dein Mark.",
        choices: [{
            text: "Dr. Cawley konfrontieren und ihm vorwerfen, deine Erinnerungen manipuliert zu haben",
            nextId: "confront_cawley_memories"
        }, {
            text: "Mit diesem Wissen Wilson im Leuchtturm suchen",
            nextId: "find_wilson_truth",
            requireClue: "lighthouse_clue"
        }, {
            text: "Deine Identität als Marshal völlig in Frage stellen",
            nextId: "question_identity",
            addClue: {
                id: "family_tragedy",
                text: "Du erinnerst dich nun an die Tragödie – deine Familie starb bei einem Hausbrand, während du arbeitest, was zu deinem Zusammenbruch führte."
            }
        }]
    },

    // Die Marshal-Identität in Frage stellen
    question_identity: {
        text: "In deinem Quartier untersuchst du jeden Aspekt deiner angeblichen Marshal-Identität. Deine Dienstmarke – bei genauerem Hinsehen erkennst du feine Unstimmigkeiten im Prägedruck. Deine Erinnerungen an die Ausbildung, an frühere Fälle – alles bleibt seltsam verschwommen, ohne konkrete Details. Selbst deine Ankunft auf der Insel – wie genau kamst du hierher? Die Einzelheiten entgleiten dir. Du öffnest dein Notizbuch und durchblätterst deine eigenen Aufzeichnungen seit der Ankunft. Die Handschrift in den ersten Einträgen unterscheidet sich subtil von deinen späteren Notizen – als hätte jemand anderes sie geschrieben. Oder als hättest du selbst dich verändert. Als würdest du zu jemand anderem werden – oder zurückkehren.",
        choices: [{
            text: "Mit Dr. Sheehan über deine Entdeckungen sprechen",
            nextId: "talk_sheehan_identity"
        }, {
            text: "Einen Fluchtplan von der Insel schmieden", nextId: "plan_escape_island"
        }, {
            text: "Zum Archiv gehen, um nach einer Akte über Dr. Andrew Laeddis zu suchen",
            nextId: "identity_revelation",
            addClue: {
                id: "false_identity",
                text: "Konkrete Beweise deuten darauf hin, dass deine Identität als Marshal gefälscht ist – einschließlich Unstimmigkeiten in deinen eigenen Dokumenten und Erinnerungen."
            }
        }]
    },

    // Mit Sheehan über die Identität sprechen
    talk_sheehan_identity: {
        text: "Du findest Dr. Sheehan allein in seinem Büro. Als du eintrittst, scheint er nicht überrascht. 'Sie erinnern sich, nicht wahr?', fragt er leise. Du nickst stumm und legst das Familienfoto auf seinen Schreibtisch. 'Wer bin ich wirklich?' Sheehan seufzt tief. 'Sie sind Dr. Andrew Laeddis. Ein brillanter Psychiater. Wir waren Kollegen... und Freunde.' Er nimmt ein Buch aus seinem Regal und zeigt dir den Einband: 'Neurochemische Grundlagen der Gedächtnisbildung' von Dr. A. Laeddis und Dr. E. Wilson. 'Sie und Wilson entwickelten die Grundlagen für Projekt JANUS. Aber nach dem Tod Ihrer Familie...' Er hält inne. 'Sie zerbrachen. Die Schuld war unerträglich. Sie stimmten der experimentellen Behandlung zu – Ihre eigene Schöpfung, gegen Sie selbst eingesetzt.'",
        choices: [{
            text: "Fragen, warum Sheehan dir hilft, dich zu erinnern", nextId: "why_sheehan_helps"
        }, {
            text: "Nach Wilson fragen und seinem Verbleib", nextId: "ask_wilson_whereabouts"
        }, {
            text: "Fragen, ob es ein Weg gibt, dein wahres Selbst zurückzugewinnen",
            nextId: "ask_recovery_possibility",
            addClue: {
                id: "sheehan_confirmation_identity",
                text: "Dr. Sheehan hat bestätigt, dass du Dr. Andrew Laeddis bist, ein ehemaliger Psychiater und Mitentwickler von Projekt JANUS."
            }
        }]
    },

    // Nach Möglichkeiten der Wiederherstellung fragen
    ask_recovery_possibility: {
        text: "Sheehans Blick wird intensiv. 'Es gibt einen Weg zurück, Andrew. Wilson hat daran gearbeitet – ein Gegenmittel zu RX-78.' Er senkt die Stimme weiter. 'Nachdem er sah, was aus dir wurde, begann er die ethischen Implikationen des Projekts zu hinterfragen. Er entwickelte einen Antagonisten, der die Gedächtnisblockaden auflösen kann.' Er greift in seine Schreibtischschublade und holt eine kleine Flasche hervor. 'Dies ist eine verdünnte Version. Es wird Erinnerungsfragmente freisetzen, aber nicht alles auf einmal – das wäre zu überwältigend.' Er reicht dir die Flasche. 'Die vollständige Dosis hat Wilson mitgenommen, als er floh. Er wusste, dass sie ihn ausschalten würden. Er wartet im Leuchtturm auf der Nordseite der Insel.'",
        choices: [{
            text: "Das verdünnte Gegenmittel sofort nehmen", nextId: "take_diluted_antidote"
        }, {
            text: "Die Flasche nehmen, aber warten", nextId: "take_wait_antidote"
        }, {
            text: "Zum Leuchtturm aufbrechen, um Wilson zu treffen",
            nextId: "go_lighthouse",
            addClue: {
                id: "antidote_exists",
                text: "Dr. Wilson hat ein Gegenmittel für die Medikamente entwickelt, die deine Erinnerungen unterdrücken, und wartet im Leuchtturm."
            }
        }]
    },

    // Das verdünnte Gegenmittel nehmen
    take_diluted_antidote: {
        text: "Mit entschlossenem Blick nimmst du das Fläschchen und trinkst den Inhalt in einem Zug. Zunächst spürst du nichts. Dann beginnt ein leichtes Pochen in deinen Schläfen, das schnell intensiver wird. Bilder fluten deinen Geist: Du im Labor mit Wilson und Jenkins. Eure Entdeckung der Verbindung RX-78. Die ersten erfolgreichen Tests. Deine Bedenken, als du die tiefgreifenden Veränderungen bei den Testpersonen bemerkst. Der Streit mit Jenkins über die militärische Anwendung. Der Tod deiner Familie. Dein Zusammenbruch. Cawleys 'Angebot', die Schmerzen zu nehmen. Du keuchst und greifst nach Sheehans Schreibtisch, um nicht zu fallen. 'Andrew? Bist du in Ordnung?' Seine Stimme klingt weit entfernt. 'Ich erinnere mich', flüsterst du. 'Nicht an alles, aber... ich weiß, wer ich bin.'",
        choices: [{
            text: "Mit Sheehan einen Plan schmieden, um Jenkins zu konfrontieren",
            nextId: "plan_confront_jenkins"
        }, {
            text: "Zum Leuchtturm aufbrechen, um Wilson zu finden",
            nextId: "go_lighthouse",
            requireClue: "lighthouse_clue"
        }, {
            text: "Nach dem vollständigen Gegenmittel fragen",
            nextId: "ask_full_antidote",
            addClue: {
                id: "partial_memories",
                text: "Das verdünnte Gegenmittel hat teilweise deine Erinnerungen als Dr. Laeddis zurückgebracht, einschließlich deiner Arbeit an Projekt JANUS und dem Streit mit Jenkins."
            }
        }]
    },

    // Verbindung zum Haupttwist und Finale
    ask_full_antidote: {
        text: "'Das vollständige Gegenmittel', sagt Sheehan ernst, 'hat Wilson. Es wird alle Blockaden lösen, aber...' Er zögert. 'Die vollständige Erinnerung wird auch den vollen Schmerz zurückbringen, Andrew. Den Verlust deiner Familie. Die Schuld. Bist du bereit dafür?' Bevor du antworten kannst, ertönt ein Alarm. Lautsprecher krächzen: 'Sicherheitsprotokoll Delta aktiviert. Alle Patienten in ihre Zimmer. Personal zu den zugewiesenen Stationen.' Sheehan wird blass. 'Sie wissen es. Jemand muss uns gesehen haben.' Er greift nach seinem Mantel. 'Geh zum Leuchtturm. Sofort. Finde Wilson. Ich werde sie aufhalten, so lange ich kann.' Er drückt dir einen Schlüssel in die Hand. 'Hinterausgang, durch den alten Garten. Beeil dich!' In der Ferne hörst du Schritte von Sicherheitspersonal.",
        choices: [{
            text: "Zum Leuchtturm fliehen", nextId: "go_lighthouse"
        }, {
            text: "Sheehan überreden, mit dir zu kommen", nextId: "convince_sheehan_escape"
        }, {
            text: "Zum Archiv gehen und deine vollständige Akte holen",
            nextId: "identity_revelation",
            addClue: {
                id: "security_alert",
                text: "Ein Sicherheitsalarm wurde ausgelöst – die Klinikleitung weiß möglicherweise, dass du beginnst, dich zu erinnern."
            }
        }]
    },


    // ===== WICHTIGE TWIST-SZENEN =====

    // Mittlerer Twist: Der Klinikleiter führt ein Doppelleben
    director_office_secret: {
        text: "Während die Klinik im nächtlichen Sturm schläft, schleichst du dich in Dr. Cawleys Büro. In einer versteckten Schublade findest du ein Tagebuch. Die Einträge sind verstörend: 'Subjekt 67 zeigt Anzeichen von Widerstand gegen die Behandlung. Erinnerungsmuster bleiben hartnäckig. Müssen aggressivere Methoden anwenden.' Ein Foto fällt heraus - es zeigt Dr. Cawley in Militäruniform neben einem Mann in Laborkittel. Auf der Rückseite steht: 'Projekt JANUS - Bewusstseinsmodifikation - Phase 2 erfolgreich'. Plötzlich hörst du Schritte auf dem Flur.",
        choices: [{
            text: "Das Tagebuch mitnehmen und schnell verschwinden",
            nextId: "take_journal",
            addClue: {
                id: "project_janus",
                text: "Dr. Cawley ist in ein geheimes Projekt namens JANUS involviert, das sich mit Bewusstseinsmodifikation beschäftigt."
            }
        }, {
            text: "Alles zurücklegen und dich verstecken", nextId: "hide_office"
        }, {
            text: "Ein Foto vom Tagebuch machen und es zurücklegen",
            nextId: "photograph_evidence",
            requireClue: "camera_found"
        }]
    },

    // Großer Twist: Der Spieler ist nicht wirklich ein Ermittler
    identity_revelation: {
        text: "Du durchsuchst die Archive im Keller, als dein Blick auf eine Akte mit deinem Namen fällt. Mit zitternden Händen öffnest du sie. 'Patient 67 - Andrew Laeddis', steht dort. Ein Foto zeigt dein Gesicht, aber mit wildem Blick und unrasiert. Diagnose: 'Schwere Wahnvorstellungen. Patient hat eine komplexe Fantasiewelt erschaffen, in der er ein US-Marshal ist, der einen verschwundenen Patienten sucht. Therapie-Ansatz: Rollenspiel zur Realitätskonfrontation.' Die Welt um dich herum beginnt zu schwanken, Erinnerungsfragmente blitzen auf - eine brennende Wohnung, schreiende Kinder, deine blutigen Hände...",
        choices: [{
            text: "Die Akte vernichten und an deiner Identität als Ermittler festhalten",
            nextId: "deny_reality"
        }, {
            text: "Dr. Cawley konfrontieren und die Wahrheit verlangen", nextId: "confront_cawley"
        }, {
            text: "Versuchen, dich an deine wahre Vergangenheit zu erinnern",
            nextId: "remember_past",
            addClue: {
                id: "true_identity",
                text: "Eine Akte enthüllt, dass du möglicherweise Patient 67 - Andrew Laeddis - bist und unter Wahnvorstellungen leidest."
            }
        }]
    },

    // Finaler Twist: Die Untersuchung ist eine Therapie
    therapy_revelation: {
        text: "In Dr. Jenkins' privatem Labor findest du einen detaillierten Therapieplan: 'Andrew Laeddis - Experimentelles Protokoll zur Realitätskonfrontation'. Das Dokument beschreibt, wie das gesamte Personal der Klinik an einem elaborierten Rollenspiel teilnimmt, um dich deine traumatische Vergangenheit akzeptieren zu lassen. 'Tag 3: Konfrontation mit Beweisen der wahren Identität. Erwartete Reaktion: Ablehnung, dann schrittweise Akzeptanz.' Mit Entsetzen erkennst du, dass jeder Schritt deiner 'Ermittlung' geplant war - ein therapeutisches Experiment. Dr. Jenkins tritt ein: 'Es tut mir leid, Andrew. Es war der letzte Versuch, dich zu erreichen, bevor wir zur Lobotomie übergehen müssten.'",
        choices: [{
            text: "Die Wahrheit akzeptieren und dich der Therapie stellen", nextId: "accept_therapy"
        }, {
            text: "Fliehen und versuchen, die Insel zu verlassen", nextId: "attempt_escape"
        }, {
            text: "Vorgeben, die Wahrheit zu akzeptieren, während du einen Plan schmiedest",
            nextId: "pretend_acceptance"
        }]
    },

    // ===== DIE VERSCHIEDENEN ENDEN =====

    // Akzeptanz-Ende
    ending_acceptance: {
        text: "Du sitzt auf einer Bank im sonnendurchfluteten Garten der Klinik. Die letzten Wochen waren schmerzhaft, aber klärend. Die Erinnerungen an den Brand, den Tod deiner Familie durch deine Nachlässigkeit, dein Abrutschen in Wahnvorstellungen - all das hast du schließlich akzeptiert. Dr. Cawley setzt sich neben dich. 'Es ist selten, dass jemand so tief in Wahnvorstellungen versinkt und dann zurückfindet', sagt er anerkennend. 'Du hast einen langen Weg vor dir, Andrew, aber den schwersten Teil hast du geschafft: der Wahrheit ins Auge zu sehen.' Er lächelt mitfühlend. 'Bereit für die Therapiesitzung heute?'",
        choices: [{
            text: "Spiel neu starten", nextId: "start"
        }]
    },

    // Flucht-Ende
    ending_escape: {
        text: "Das gestohlene Boot kämpft sich durch die stürmische See. Die Lichter der Insel verschwinden langsam am Horizont. Hast du es geschafft? Bist du dem Albtraum entkommen? Die Erinnerungsfetzen verfolgen dich noch immer - wer bist du wirklich? Ein Ermittler? Ein Patient? Die Wahrheit liegt irgendwo in den tosenden Wellen zwischen der Insel und dem Festland. Als die Morgendämmerung anbricht, taucht ein Küstenwachboot auf. 'Wir haben ihn gefunden!', hört du einen Funkspruch. 'Patient 67, auf dem Weg zum Festland.' Die Sirene heult. Du greifst nach deiner Waffe - nur um festzustellen, dass es nur ein Feuerzeug ist, geformt wie ein Revolver.",
        choices: [{
            text: "Spiel neu starten", nextId: "start"
        }]
    },

    // Widerstand-Ende
    ending_resistance: {
        text: "Die Beweise, die du gesammelt hast, liegen auf dem Tisch des Bundesagenten. 'Was Dr. Jenkins im Ostflügel getan hat, verstößt gegen jedes Gesetz', erklärst du. 'Bewusstseinsmanipulation, erzwungene Medikation, gefälschte Identitäten.' Der Agent nickt ernst. 'Wir werden die Klinik schließen und jeden Verantwortlichen zur Rechenschaft ziehen.' Drei Monate später stehst du vor den leeren Gebäuden von Ashcliff. Die Patienten wurden verlegt, die Ärzte verhaftet. Doch während du über das verlassene Gelände gehst, beschleicht dich ein verstörendes Gefühl. War alles wirklich so, wie du es in Erinnerung hast? Oder gibt es noch eine tiefere Wahrheit, die du nicht erreichen konntest?",
        choices: [{
            text: "Spiel neu starten", nextId: "start"
        }]
    },

    // Zyklus-Ende
    ending_cycle: {
        text: "Der Regen peitscht dir ins Gesicht, als das kleine Boot an der verwitterten Anlegestelle der Ashcliff-Klinik anlegt. Die düstere Silhouette des viktorianischen Gebäudes zeichnet sich gegen den grauen Himmel ab. Dr. Cawley und Sheriff Wilson erwarten dich bereits. 'Willkommen zurück, Marshal', sagt Cawley mit einem wissenden Blick. 'Bereit für eine neue Runde?' Du runzelst verwirrt die Stirn. 'Zurück? Ich war noch nie hier.' Wilson und Cawley tauschen Blicke aus. 'Natürlich nicht', sagt Cawley sanft. 'Sie sind hier, um das mysteriöse Verschwinden von Patient 67 zu untersuchen.' Ein Déjà-vu überkommt dich, aber du schiebst es beiseite. 'Genau', sagst du und greifst nach deiner Dienstmarke. 'Bringen wir es hinter uns.'",
        choices: [{
            text: "Spiel neu starten", nextId: "start"
        }]
    }
};
