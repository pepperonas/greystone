// Text-Adventure Spielstruktur - Grundgerüst
const gameData = {
    // Startpunkt der Geschichte
    start: {
        text: "Der Regen peitscht dir ins Gesicht, als das kleine Boot an der verwitterten Anlegestelle der Ashcliff-Klinik anlegt. Die düstere Silhouette des viktorianischen Gebäudes zeichnet sich gegen den grauen Himmel ab. 'Willkommen auf Greystone, Marshal', sagt der Bootsführer mit einem seltsamen Unterton. 'Sie wurden erwartet.' Du bist hier, um das mysteriöse Verschwinden von Patient 67 zu untersuchen. Ein schwerer Sturm zieht auf, und du weißt, dass du für mindestens drei Tage auf dieser Insel festsitzen wirst.",
        choices: [{
            text: "Mit dem Klinikdirektor Prof. Freystatt sprechen", nextId: "meet_director"
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
        text: "Prof. Freystatt empfängt dich in seinem holzgetäfelten Büro. 'Ah, der Ermittler vom Festland. Ihr Timing ist... interessant.' Er mustert dich mit durchdringenden Augen. 'Patient 67 ist vor drei Tagen verschwunden. Aus einem verschlossenen Zimmer im Hochsicherheitstrakt C. Unmöglich, sagen meine Mitarbeiter. Aber hier sind wir.' Er reicht dir eine dünne Akte. 'Das ist alles, was wir über ihn haben.' Als du die Akte öffnest, stockt dir der Atem - die meisten Seiten sind geschwärzt oder fehlen komplett.",
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
        text: "Der Klinikwächter C. Malberg führt dich über das weitläufige Gelände. 'Die Hauptgebäude stammen aus dem späten 19. Jahrhundert', erklärt er. 'Aber der Ostflügel wurde erst vor 15 Jahren angebaut.' Er deutet auf einen moderneren Gebäudeteil, der durch einen langen Gang mit dem Hauptgebäude verbunden ist. Ein Schild warnt: 'Nur autorisiertes Personal - Experimentelle Therapien'. Als ihr an einer Gruppe Patienten vorbeikommt, starrt dich einer intensiv an und flüstert: 'Sie verändern unsere Gedanken dort drin. Sie machen uns zu anderen Menschen.'",
        choices: [{
            text: "Den Patienten nach seinen Erfahrungen befragen", nextId: "patient_testimonial"
        }, {
            text: "C. Malberg nach dem Ostflügel fragen", nextId: "east_wing_inquiry"
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
        text: "Prof. Freystatt wirkt kurz verunsichert. 'Staatsgeheimnisse', sagt er schließlich mit einem falschen Lächeln. 'Patient 67 war... ist ein besonderer Fall. Die Regierung hat ein Interesse daran, bestimmte Details unter Verschluss zu halten.' Er trommelt mit den Fingern auf seinen Schreibtisch. 'Was ich Ihnen sagen kann: Er wurde vor sechs Monaten eingeliefert. Diagnose: Wahnvorstellungen und gefährliche Fixierung auf Verschwörungstheorien.' Als du weiter nachfragst, schneidet er dir das Wort ab: 'Sheriff Wilson wird Sie zu Ihrer Unterkunft bringen. Der Sturm wird bald hier sein.'",
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
        text: "Du lehnst dich vor. 'Prof. Freystatt, ich bin im Auftrag der US-Marshals hier. Wenn ein gefährlicher Patient entkommen ist, brauche ich alle verfügbaren Informationen.' Freystatts Lächeln verschwindet. 'Sie verstehen nicht, Marshal. Es gibt... Protokolle. Ich würde Ihnen gerne helfen, aber meine Hände sind gebunden.' Er geht zum Fenster. 'Dieser Patient... er war brillant. Ein ehemaliger Arzt, der zu tief in Dinge eingetaucht ist, die er nicht hätte sehen sollen.' Er dreht sich zu dir um. 'Suchen Sie Dr. Bleich. Er war sein Therapeut. Aber seien Sie vorsichtig – nicht jeder hier will, dass dieser Patient gefunden wird.'",
        choices: [{
            text: "Nach Dr. Bleich suchen", nextId: "find_sheehan", addClue: {
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
        text: "Prof. Freystatt zögert, dann senkt er die Stimme. 'Der Aufsichtsrat. Sie haben... Interesse an den Forschungsergebnissen aus dem Ostflügel.' Er schaut nervös zur Tür. 'Patient 67 hatte Zugang zu Informationen, die besser verborgen bleiben. Er begann, Fragen zu stellen. Unbequeme Fragen.' Ein lautes Donnergrollen unterbricht das Gespräch. 'Der Sturm kommt früher als erwartet', sagt Freystatt, sichtlich erleichtert über die Ablenkung. 'Wir sollten dieses Gespräch später fortsetzen. Finden Sie Dr. Bleich. Aber erwähnen Sie nicht, dass ich Sie geschickt habe.'",
        choices: [{
            text: "Nach dem Aufsichtsrat fragen", nextId: "board_inquiry"
        }, {
            text: "Prof. Freystatt nach seiner eigenen Rolle fragen", nextId: "Freystatt_role"
        }, {
            text: "Das Gespräch beenden und nach Dr. Bleich suchen",
            nextId: "find_sheehan",
            addClue: {
                id: "board_interest",
                text: "Der Aufsichtsrat der Klinik hat anscheinend ein besonderes Interesse an Patient 67 und den Forschungen im Ostflügel."
            }
        }]
    },

    // Die Akte im Quartier studieren
    examine_file: {
        text: "In deinem spartanischen Quartier breitest du die dünne Akte aus. Trotz der vielen geschwärzten Stellen findest du einige brauchbare Informationen: Patient 67 wurde vor genau sechs Monaten und drei Tagen eingeliefert. Diagnose: Paranoide Schizophrenie mit Wahnvorstellungen. Auf einem Foto sieht man nur einen verschwommenen Schatten. Interessant ist ein Therapiebericht von Dr. Bleich: 'Patient zeigt außergewöhnliches Wissen über medizinische Verfahren und Institutionen. Behauptet, selbst in ähnlicher Einrichtung gearbeitet zu haben. Fixiert auf Verschwörungstheorie zu experimentellen Behandlungen.' Jemand hat am Rand notiert: 'Zu viel Wissen. Gefährlich.'",
        choices: [{
            text: "Dr. Bleich aufsuchen", nextId: "find_sheehan", addClue: {
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
        text: "Prof. Freystatt überlegt. 'Patient 67 hatte begrenzten Kontakt.' Er konsultiert ein Notizbuch. 'Dr. Bleich war sein Therapeut. Schwester Rachel hat ihn beaufsichtigt. Und dann wäre da noch Wärter C. Malberg.' Er klappt das Buch zu. 'Merkwürdig ist, dass er außerdem jeden zweiten Mittwoch für... spezielle Behandlungen in den Ostflügel gebracht wurde. Dr. Jenkins könnte mehr wissen, aber...' Er verstummt. 'Dr. Jenkins ist schwer zu erreichen. Er verlässt den Ostflügel selten.' Freystatt wirft einen Blick auf die Uhr. 'Sheriff Wilson wartet, um Sie zu Ihrem Quartier zu bringen.'",
        choices: [{
            text: "Nach Dr. Bleich fragen", nextId: "find_sheehan"
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

    // Suche nach Dr. Bleich
    find_sheehan: {
        text: "Die Suche nach Dr. Bleich führt dich durch die düsteren Korridore der Klinik. Vom Personal erfährst du, dass er heute im B-Flügel Therapiesitzungen hat. Als du den Therapieraum erreichst, ist die Tür verschlossen. Ein Schild zeigt: 'Bitte nicht stören'. Durch das Fenster in der Tür siehst du einen Mann mittleren Alters, der mit einem Patienten spricht. Als er deinen Blick bemerkt, wirkt er überrascht, fast erschrocken. Er entschuldigt sich bei seinem Patienten und kommt zur Tür. 'Kann ich Ihnen helfen?', fragt er nervös.",
        choices: [{
            text: "Dich als US-Marshal vorstellen und nach Patient 67 fragen",
            nextId: "formal_inquiry_sheehan"
        }, {
            text: "Erwähnen, dass Prof. Freystatt dich geschickt hat",
            nextId: "mention_Freystatt",
            requireClue: "board_interest"
        }, {
            text: "Beiläufig nach dem Ostflügel fragen",
            nextId: "casual_east_wing",
            requireClue: "wednesday_treatments"
        }]
    },

    // Formales Gespräch mit Dr. Bleich
    formal_inquiry_sheehan: {
        text: "Dr. Bleich wirkt erleichtert, als du dich als Ermittler vorstellst. 'Patient 67. Ja, ein faszinierender Fall.' Er führt dich in ein leeres Büro. 'Ich bin besorgt um ihn. Er hatte große Fortschritte gemacht, begann, seine Wahnvorstellungen zu hinterfragen.' Sheehan senkt die Stimme. 'Er vertraute mir an, dass er glaubte, hier gefangen gehalten zu werden, nicht als Patient, sondern als... Gefangener. Wegen dem, was er wusste.' Er zögert. 'Kurz vor seinem Verschwinden sagte er mir, er hätte Beweise gefunden. In seinem Zimmer. Er wollte sie mir am nächsten Tag zeigen. Aber dann war er weg.'",
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
                text: "Dr. Bleichs Notizen erwähnen einen versteckten Safe hinter dem Gemälde in Zimmer 67."
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
            text: "Zurückgehen und Dr. Bleich nach Projekt JANUS fragen",
            nextId: "ask_sheehan_janus",
            addClue: {
                id: "project_janus_door",
                text: "Im Keller gibt es einen abgesicherten Bereich, der als 'Projekt JANUS' bezeichnet wird."
            }
        }]
    },

    // Dr. Bleich über Projekt JANUS befragen
    ask_sheehan_janus: {
        text: "Du findest Dr. Bleich in seinem Büro, vertieft in Akten. Als du 'Projekt JANUS' erwähnst, erstarrt er. Er steht auf, schließt die Tür und senkt seine Stimme. 'Wo haben Sie davon gehört?' Du erzählst ihm von der Tür im Keller und den Hinweisen im Notizbuch. Er wird blass. 'Das ist... gefährliches Wissen, Marshal.' Er überlegt. 'JANUS - der römische Gott mit zwei Gesichtern. Passend.' Er seufzt schwer. 'Es begann als Therapie für Kriegstraumata. Selektives Vergessen. Aber Dr. Jenkins... er hat es weiterentwickelt. Nicht nur Vergessen, sondern Ersetzen. Neue Identitäten erschaffen.' Er holt einen Schlüssel hervor. 'Hiermit kommen Sie durch die Wartungstür neben der Haupttür. Aber wenn Sie gehen - seien Sie vorsichtig. Und vertrauen Sie niemandem.'",
        choices: [{
            text: "Den Schlüssel nehmen und zum Keller zurückkehren",
            nextId: "return_basement",
            addClue: {
                id: "janus_key",
                text: "Dr. Bleich hat dir einen Schlüssel für eine Nebentür zum Projekt JANUS gegeben."
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
        text: "Dr. Bleich schaut dich lange an, als würde er abwägen, wie viel er dir anvertrauen kann. 'Patient 67 war nicht nur Teil des Projekts,' sagt er schließlich. 'Er hat es mitentwickelt. Er und Dr. Jenkins waren Kollegen, führten gemeinsam die ersten klinischen Versuche durch.' Sheehan geht zu seinem Schreibtisch und zieht ein altes Foto hervor. Es zeigt zwei Männer in Laborkitteln, lächelnd vor einer Tafel voller Formeln. 'Das sind sie – Dr. Jenkins und Dr. Edward Wilson. Bevor Wilson zu Patient 67 wurde.' Er legt das Foto weg. 'Etwas ging schief. Wilson begann, das Projekt zu hinterfragen. Er wollte es stoppen. Kurz darauf erlitt er einen 'Nervenzusammenbruch' und wurde hier eingeliefert. Als Patient.'",
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
        text: "Mit Dr. Bleichs Schlüssel kehrst du in den Keller zurück. Neben der Haupttür findest du tatsächlich eine unscheinbare Wartungstür. Der Schlüssel passt, die Tür öffnet sich quietschend. Du betrittst einen sterilen weißen Korridor – ein erschreckender Kontrast zum modrigen Keller. Neonlicht flackert über deinem Kopf. Zu beiden Seiten befinden sich Labore mit Sichtfenstern. In einem siehst du Reihen von Medikamenten, in einem anderen medizinische Geräte. Am Ende des Ganges steht eine Tür mit der Aufschrift 'Archiv'. Als du näher kommst, hörst du Stimmen von der anderen Seite.",
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
            text: "Die Akte mitnehmen und Dr. Bleich konfrontieren", nextId: "confront_sheehan"
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
        text: "Du setzt das Boot ins Wasser und startest den Motor, steuerst es aber unbemannt auf einen Kurs Richtung offenes Meer. Mit den Beweisen im wasserdichten Beutel schwimmst du ein Stück die Küste entlang, bevor du wieder an Land gehst. Durchnässt und erschöpft, aber entschlossen, machst du dich auf den Weg zurück zur Klinik. Sie werden dich dort nicht erwarten. Mit deinem wiedererlangten Wissen weißt du, wo du suchen musst, um die letzten Beweise zu sichern. Als du die Klinik erreichst, ist sie in seltsamer Stille gehüllt. Der Sturm hat nachgelassen. Du schleichst dich durch einen Nebeneingang hinein, die Waffe gezogen. In der Eingangshalle stehst du plötzlich vor Prof. Freystatt. 'Andrew', sagt er mit einem traurigen Lächeln. 'Wir haben dich erwartet.'",
        choices: [{
            text: "Freystatt konfrontieren und die Beweise vorzeigen", nextId: "identity_revelation"
        }, {
            text: "Versuchen zu fliehen", nextId: "attempt_escape_clinic"
        }, {
            text: "Vorgeben, immer noch der Marshal zu sein", nextId: "pretend_marshal", addClue: {
                id: "clinic_return",
                text: "Du bist zur Klinik zurückgekehrt, wo Prof. Freystatt dich als Andrew erkannt hat."
            }
        }]
    },


    // ===== HANDLUNGSSTRANG 2: DIE EXPERIMENTELLEN BEHANDLUNGEN =====

    // Nachfrage zum Ostflügel
    east_wing_inquiry: {
        text: "C. Malbergs Gesicht verhärtet sich. 'Der Ostflügel steht nicht zur Debatte. Dr. Jenkins' Arbeit dort ist revolutionär, aber... vertraulich.' Er senkt die Stimme. 'Es gab Vorfälle. Patienten, die nicht mehr dieselben waren, nachdem sie dort behandelt wurden.' Er schaut sich nervös um. 'Vergessen Sie, was ich gesagt habe. Wenn Sie wissen, was gut für Sie ist, halten Sie sich vom Ostflügel fern.' Während er spricht, bemerkst du einen Patienten, der euch beobachtet. Er tippt sich bedeutungsvoll an die Schläfe und deutet dann auf dich.",
        choices: [{
            text: "Den beobachtenden Patienten ansprechen", nextId: "approach_watching_patient"
        }, {
            text: "C. Malberg nach den 'Vorfällen' fragen", nextId: "ask_about_incidents"
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
        text: "Du bewegst dich langsam auf den Patienten zu. C. Malberg ruft: 'Halt! Er ist gefährlich!' Aber etwas an dem Mann – seine klaren Augen inmitten des verwirrten Gesichtsausdrucks – lässt dich weitergehen. 'Sie sind neu', flüstert der Mann. 'Noch nicht programmiert.' Er schaut nervös zu C. Malberg. 'George Noyce. Ich war dort drin. Im Ostflügel. Sie verändern dich dort.' Er greift plötzlich dein Handgelenk. 'Sie beobachten uns. Jetzt dich. Pass auf, was du trinkst, was du isst. Die Medikamente...' C. Malberg zieht dich weg. 'Genug, Noyce! Zurück zu deinem Zimmer!' Als du weggeführt wirst, ruft Noyce: 'Finde Raum 22! Sieh dir die Fenster an!'",
        choices: [{
            text: "C. Malberg nach George Noyce fragen", nextId: "ask_about_noyce"
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
            text: "Den Raum verlassen und Dr. Bleich aufsuchen",
            nextId: "consult_sheehan",
            addClue: {
                id: "identity_implantation",
                text: "Du hast gesehen, wie Dr. Jenkins einem Patienten systematisch falsche Erinnerungen und eine neue Identität einpflanzt."
            }
        }, {
            text: "Nach anderen Behandlungsräumen suchen", nextId: "check_other_rooms"
        }]
    },

    // Dr. Bleich aufsuchen
    consult_sheehan: {
        text: "Mit den verstörenden Bildern der Behandlung im Kopf suchst du Dr. Bleich auf. Du findest ihn allein in seinem Büro, vertieft in Krankenakten. Als du von deinen Beobachtungen im Ostflügel berichtest, wird er blass. 'Sie hätten dort nicht sein dürfen', sagt er leise. 'Es ist gefährlich.' Er schließt die Tür und senkt die Stimme. 'Was Sie beschreiben, ist Teil von Projekt JANUS. Es begann als experimentelle Behandlung für schwere Traumata – selektives Vergessen. Aber Jenkins hat es weiterentwickelt.' Er zögert. 'Nicht nur Vergessen, sondern Ersetzen. Komplette Identitäten werden gelöscht und durch neue ersetzt.' Er sieht dich durchdringend an. 'Sie sollten vorsichtig sein, Marshal. Besonders mit dem, was Sie essen oder trinken. Manche... werden ohne ihr Wissen Teil des Projekts.'",
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
                text: "Dr. Bleich hat dich gewarnt, dass Patienten ohne ihr Wissen Teil von Projekt JANUS werden können."
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
            text: "Dr. Bleich mit der Akte konfrontieren", nextId: "confront_sheehan_file"
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
            text: "Dr. Bleich aufsuchen und ihm von deinen Zweifeln erzählen",
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
            text: "Dr. Bleich aufsuchen und ihm von den zurückkehrenden Erinnerungen erzählen",
            nextId: "tell_sheehan_memories",
            addClue: {
                id: "returning_memories",
                text: "Nach dem Verzicht auf die manipulierten Getränke und Medikamente beginnen fragmentarische Erinnerungen an dein Leben als Arzt zurückzukehren."
            }
        }]
    },

    // Verbindung zum Haupttwist
    tell_sheehan_memories: {
        text: "Du findest Dr. Bleich allein in seinem Büro. Als du von deinen zurückkehrenden Erinnerungen berichtest, wirkt er nicht überrascht, sondern erleichtert. 'Es funktioniert also', murmelt er. 'Andrews Abwehrmechanismen sind stärker, als Jenkins dachte.' Er sieht dich direkt an. 'Du kommst zurück, nicht wahr, Andrew?' Die Anrede mit diesem Namen löst weitere Erinnerungsfragmente aus – Sheehan als dein Kollege, gemeinsame Forschung, Freundschaft. 'Wilson hat dich gefunden, oder?', fragt Sheehan. 'Deshalb bist du zur Besinnung gekommen.' Er reicht dir einen Schlüssel. 'Im Archiv, unterer Schrank, ganz hinten. Dort liegt deine wahre Akte. Du musst dich beeilen – Jenkins wird bald bemerken, dass die Medikation nicht wirkt. Finde Wilson. Er kann dir helfen, vollständig zurückzukommen.'",
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
                text: "Dr. Bleich hat bestätigt, dass du Andrew bist und dass deine Identität als Marshal künstlich erschaffen wurde."
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
        text: "Du beschließt, offen zu sein. 'Ich hatte gerade ein seltsames Bild vor Augen – als ob ich selbst hier gewesen wäre, an dieser Wand kratzend.' Rachels Gesicht verändert sich kaum merklich. Sie tauscht einen kurzen Blick mit dem Wachmann an der Tür aus. 'Das Gehirn spielt manchmal Streiche, Marshal. Besonders in einer Umgebung wie dieser.' Sie macht eine Notiz auf ihrem Klemmbrett. 'Haben Sie in letzter Zeit gut geschlafen? Kopfschmerzen?' Ihre scheinbare Besorgnis wirkt einstudiert. 'Prof. Freystatt sollte davon wissen. Solche... Episoden können ein Zeichen von Stress sein. Vielleicht brauchen Sie etwas zur Beruhigung.'",
        choices: [{
            text: "Die Medikation ablehnen und auf der Vision beharren", nextId: "refuse_medication"
        }, {
            text: "Zustimmen, aber heimlich die Medikamente nicht nehmen",
            nextId: "fake_agreement",
            addClue: {
                id: "rachel_concern",
                text: "Schwester Rachel zeigte ungewöhnliches Interesse an deiner Vision und wollte sofort Prof. Freystatt informieren."
            }
        }, {
            text: "Das Thema wechseln und nach anderen Patienten fragen",
            nextId: "change_subject_patients"
        }]
    },

    // Medikation ablehnen
    refuse_medication: {
        text: "'Ich brauche keine Medikamente', sagst du bestimmt. 'Was ich brauche, sind Antworten.' Du deutest auf die Wandritze. 'Diese Karte wurde nicht zufällig gezeichnet. Sie zeigt einen spezifischen Ort.' Rachel wird angespannt. 'Marshal, bitte verstehen Sie, dass viele unserer Patienten Wahnvorstellungen haben. Nicht alles hat eine tiefere Bedeutung.' Als du weiter auf der Karte bestehst, erscheint Prof. Freystatt in der Tür. 'Alles in Ordnung hier?' fragt er mit einem durchdringenden Blick. 'Schwester Rachel meinte, Sie hätten eine... ungewöhnliche Erfahrung.' Die Schnelligkeit, mit der er informiert wurde, macht dich misstrauisch.",
        choices: [{
            text: "Freystatt direkt nach deinen Visionen befragen", nextId: "ask_Freystatt_visions"
        }, {
            text: "Behaupten, es sei ein Missverständnis gewesen", nextId: "claim_misunderstanding"
        }, {
            text: "Den Raum verlassen und heimlich zum Keller gehen",
            nextId: "sneak_basement",
            addClue: {
                id: "quick_response",
                text: "Prof. Freystatt wurde ungewöhnlich schnell über deine Vision informiert, was auf eine besondere Überwachung hindeutet."
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
            text: "Dr. Bleich aufsuchen und von den Erinnerungen berichten",
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
        text: "Du schleichst dich in das Verwaltungsbüro, als das Personal in der Mittagspause ist. Die Patientenakten sind alphabetisch geordnet. Du suchst unter 'L' – ein Impuls, den du nicht erklären kannst. Tatsächlich findest du eine Akte: 'Laeddis, Andrew'. Mit klopfendem Herzen öffnest du sie. Das Foto zeigt eindeutig dich, wenn auch mit längerem Haar und Bart. Die Diagnose lautet: 'Schwere dissoziative Identitätsstörung mit Wahnvorstellungen. Patient entwickelte nach traumatischen Ereignissen eine komplexe Scheinidentität.' Ein handschriftlicher Vermerk von Prof. Freystatt: 'Subjekt reagiert gut auf experimentelle Therapie. Identität als US-Marshal erfolgreich implantiert. Beobachtung unter kontrollierten Bedingungen fortsetzen.' Du lässt die Akte fallen, als wäre sie glühend heiß.",
        choices: [{
            text: "Die Akte mitnehmen und konfrontiere Prof. Freystatt",
            nextId: "confront_Freystatt_file"
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
            text: "Dr. Bleich mit den Entdeckungen konfrontieren",
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
        text: "Du schließt die Augen und konzentrierst dich auf das Gefühl von Verlust. Die Bilder werden schärfer: Ein heißer Sommertag. Du arbeitest spät. Dolores ruft an, klingt besorgt über das alte Elektrosystem im Haus. Du versprichst, es am Wochenende zu prüfen, bist aber vertieft in Forschungsnotizen. Später – Sirenen, blinkende Lichter. Dein Haus in Flammen. Feuerwehrleute, die dich zurückhalten. Die schreckliche Gewissheit, dass niemand überlebt hat. Deine Schuld – du hättest es verhindern können. Das Bild einer Flasche Whiskey, tagelanger Trance. Dann die Klinik, Prof. Freystatt, das Angebot: 'Wir können den Schmerz nehmen, Andrew. Für immer.' Du öffnest die Augen, Tränen strömen über dein Gesicht. Die Erinnerung ist echt – du spürst es bis in dein Mark.",
        choices: [{
            text: "Prof. Freystatt konfrontieren und ihm vorwerfen, deine Erinnerungen manipuliert zu haben",
            nextId: "confront_Freystatt_memories"
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
            text: "Mit Dr. Bleich über deine Entdeckungen sprechen", nextId: "talk_sheehan_identity"
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
        text: "Du findest Dr. Bleich allein in seinem Büro. Als du eintrittst, scheint er nicht überrascht. 'Sie erinnern sich, nicht wahr?', fragt er leise. Du nickst stumm und legst das Familienfoto auf seinen Schreibtisch. 'Wer bin ich wirklich?' Sheehan seufzt tief. 'Sie sind Dr. Andrew Laeddis. Ein brillanter Psychiater. Wir waren Kollegen... und Freunde.' Er nimmt ein Buch aus seinem Regal und zeigt dir den Einband: 'Neurochemische Grundlagen der Gedächtnisbildung' von Dr. A. Laeddis und Dr. E. Wilson. 'Sie und Wilson entwickelten die Grundlagen für Projekt JANUS. Aber nach dem Tod Ihrer Familie...' Er hält inne. 'Sie zerbrachen. Die Schuld war unerträglich. Sie stimmten der experimentellen Behandlung zu – Ihre eigene Schöpfung, gegen Sie selbst eingesetzt.'",
        choices: [{
            text: "Fragen, warum Sheehan dir hilft, dich zu erinnern", nextId: "why_sheehan_helps"
        }, {
            text: "Nach Wilson fragen und seinem Verbleib", nextId: "ask_wilson_whereabouts"
        }, {
            text: "Fragen, ob es ein Weg gibt, dein wahres Selbst zurückzugewinnen",
            nextId: "ask_recovery_possibility",
            addClue: {
                id: "sheehan_confirmation_identity",
                text: "Dr. Bleich hat bestätigt, dass du Dr. Andrew Laeddis bist, ein ehemaliger Psychiater und Mitentwickler von Projekt JANUS."
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
        text: "Mit entschlossenem Blick nimmst du das Fläschchen und trinkst den Inhalt in einem Zug. Zunächst spürst du nichts. Dann beginnt ein leichtes Pochen in deinen Schläfen, das schnell intensiver wird. Bilder fluten deinen Geist: Du im Labor mit Wilson und Jenkins. Eure Entdeckung der Verbindung RX-78. Die ersten erfolgreichen Tests. Deine Bedenken, als du die tiefgreifenden Veränderungen bei den Testpersonen bemerkst. Der Streit mit Jenkins über die militärische Anwendung. Der Tod deiner Familie. Dein Zusammenbruch. Freystatts 'Angebot', die Schmerzen zu nehmen. Du keuchst und greifst nach Sheehans Schreibtisch, um nicht zu fallen. 'Andrew? Bist du in Ordnung?' Seine Stimme klingt weit entfernt. 'Ich erinnere mich', flüsterst du. 'Nicht an alles, aber... ich weiß, wer ich bin.'",
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
        text: "Während die Klinik im nächtlichen Sturm schläft, schleichst du dich in Prof. Freystatts Büro. In einer versteckten Schublade findest du ein Tagebuch. Die Einträge sind verstörend: 'Subjekt 67 zeigt Anzeichen von Widerstand gegen die Behandlung. Erinnerungsmuster bleiben hartnäckig. Müssen aggressivere Methoden anwenden.' Ein Foto fällt heraus - es zeigt Prof. Freystatt in Militäruniform neben einem Mann in Laborkittel. Auf der Rückseite steht: 'Projekt JANUS - Bewusstseinsmodifikation - Phase 2 erfolgreich'. Plötzlich hörst du Schritte auf dem Flur.",
        choices: [{
            text: "Das Tagebuch mitnehmen und schnell verschwinden",
            nextId: "take_journal",
            addClue: {
                id: "project_janus",
                text: "Prof. Freystatt ist in ein geheimes Projekt namens JANUS involviert, das sich mit Bewusstseinsmodifikation beschäftigt."
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
            text: "Prof. Freystatt konfrontieren und die Wahrheit verlangen",
            nextId: "confront_Freystatt"
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
        text: "Du sitzt auf einer Bank im sonnendurchfluteten Garten der Klinik. Die letzten Wochen waren schmerzhaft, aber klärend. Die Erinnerungen an den Brand, den Tod deiner Familie durch deine Nachlässigkeit, dein Abrutschen in Wahnvorstellungen - all das hast du schließlich akzeptiert. Prof. Freystatt setzt sich neben dich. 'Es ist selten, dass jemand so tief in Wahnvorstellungen versinkt und dann zurückfindet', sagt er anerkennend. 'Du hast einen langen Weg vor dir, Andrew, aber den schwersten Teil hast du geschafft: der Wahrheit ins Auge zu sehen.' Er lächelt mitfühlend. 'Bereit für die Therapiesitzung heute?'",
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
        text: "Der Regen peitscht dir ins Gesicht, als das kleine Boot an der verwitterten Anlegestelle der Ashcliff-Klinik anlegt. Die düstere Silhouette des viktorianischen Gebäudes zeichnet sich gegen den grauen Himmel ab. Prof. Freystatt und Sheriff Wilson erwarten dich bereits. 'Willkommen zurück, Marshal', sagt Freystatt mit einem wissenden Blick. 'Bereit für eine neue Runde?' Du runzelst verwirrt die Stirn. 'Zurück? Ich war noch nie hier.' Wilson und Freystatt tauschen Blicke aus. 'Natürlich nicht', sagt Freystatt sanft. 'Sie sind hier, um das mysteriöse Verschwinden von Patient 67 zu untersuchen.' Ein Déjà-vu überkommt dich, aber du schiebst es beiseite. 'Genau', sagst du und greifst nach deiner Dienstmarke. 'Bringen wir es hinter uns.'",
        choices: [{
            text: "Spiel neu starten", nextId: "start"
        }]
    }, // Zugang zum Hochsicherheitstrakt C verlangen
    access_ward_c: {
        text: "Du forderst direkten Zugang zum Hochsicherheitstrakt C. Prof. Freystatt runzelt die Stirn. 'Das ist... ungewöhnlich. Dieser Bereich ist streng gesichert.' Er zögert. 'Ich könnte eine Genehmigung erteilen, aber nicht sofort. Sicherheitsprotokolle müssen eingehalten werden.' Er greift zum Telefon und spricht leise mit jemandem. 'Morgen früh um 10 Uhr', sagt er schließlich. 'Treffen Sie sich mit Sicherheitschef Brigham im Hauptfoyer. Er wird Sie eskortieren.' Sein Tonfall lässt vermuten, dass er Zeit gewinnen will. 'Bis dahin schlage ich vor, Sie ruhen sich aus. Der Sturm hat begonnen.'",
        choices: [{
            text: "Einverstanden sein, aber eigene Nachforschungen planen",
            nextId: "examine_file",
            addClue: {
                id: "delayed_access",
                text: "Prof. Freystatt verzögert deinen Zugang zum Hochsicherheitstrakt C bis morgen."
            }
        }, {
            text: "Darauf bestehen, den Trakt sofort zu sehen", nextId: "insist_immediate_access"
        }, {
            text: "Nach anderen Möglichkeiten fragen, Informationen über Patient 67 zu erhalten",
            nextId: "patient_contacts"
        }]
    },

// Auf sofortigen Zugang bestehen
    insist_immediate_access: {
        text: "Du lehnst dich vor. 'Professor, ich muss darauf bestehen. Ein potenziell gefährlicher Patient ist entkommen. Jede Stunde zählt.' Freystatts Gesicht verhärtet sich. 'Marshal, ich verstehe Ihre Dringlichkeit, aber ich führe hier eine Einrichtung mit strengen Protokollen.' Er steht auf. 'Ich kann Ihnen heute Zugang zum Patientenzimmer gewähren. Das ist alles.' Du bemerkst, wie er einen unauffälligen Knopf unter seinem Schreibtisch drückt. Kurz darauf klopft es, und ein großer Mann in Sicherheitsuniform tritt ein. 'Sheriff Wilson wird Sie zu Ihrer Unterkunft bringen. Morgen früh können wir weitersprechen.'",
        choices: [{
            text: "Nachgeben und mit Wilson gehen", nextId: "examine_file", addClue: {
                id: "security_button",
                text: "Prof. Freystatt hat heimlich Sicherheitspersonal gerufen, als du auf Zugang bestanden hast."
            }
        }, {
            text: "Nach dem Patientenzimmer fragen", nextId: "last_seen_location"
        }, {
            text: "Eine andere Taktik versuchen und nach Dr. Bleich fragen", nextId: "find_sheehan"
        }]
    },

// Nach Fotos oder Aufnahmen des Patienten fragen
    patient_photos: {
        text: "Du fragst nach Fotos oder Aufnahmen von Patient 67. Prof. Freystatt blättert durch die Akte. 'Seltsam', murmelt er. 'Die Aufnahmen von der Aufnahmeuntersuchung fehlen.' Er schließt nachdenklich die Akte. 'In der Personalabteilung sollte es Kopien geben. Aber zu dieser späten Stunde...' Er lächelt entschuldigend. 'Morgen können wir die Unterlagen anfordern.' Er steht auf, deutet an, dass das Gespräch beendet ist. 'Sheriff Wilson wird Sie zu Ihrer Unterkunft bringen. Der Sturm wird lange anhalten, Sie sollten sich ausruhen.'",
        choices: [{
            text: "Zum Quartier gehen, aber eigene Nachforschungen planen",
            nextId: "examine_file",
            addClue: {
                id: "missing_photos",
                text: "Die Fotos von Patient 67 wurden offenbar absichtlich aus der Akte entfernt."
            }
        }, {
            text: "Nach dem Grund für die fehlenden Fotos fragen", nextId: "question_missing_photos"
        }, {
            text: "Darauf bestehen, die Personalabteilung sofort aufzusuchen",
            nextId: "insist_personnel_dept"
        }]
    },

// Nach dem Grund für die fehlenden Fotos fragen
    question_missing_photos: {
        text: "'Professor, fehlende Fotos in einer Patientenakte sind höchst ungewöhnlich. Hat das einen bestimmten Grund?' Freystatts Gesicht zeigt kurz Besorgnis, bevor er seine professionelle Fassade wiederherstellt. 'In dieser Einrichtung behandeln wir... besondere Fälle. Manche Patienten haben Verbindungen, die Diskretion erfordern.' Er senkt die Stimme. 'Ich sollte das nicht sagen, aber Patient 67 war in gewissen Regierungskreisen bekannt. Seine Identität wird... geschützt.' Er schaut zur Tür. 'Ich habe bereits zu viel gesagt. Morgen können wir weiter sprechen. Sheriff Wilson erwartet Sie.'",
        choices: [{
            text: "Zum Quartier gehen und über diese Information nachdenken",
            nextId: "examine_file",
            addClue: {
                id: "government_connection",
                text: "Patient 67 hat anscheinend Verbindungen zu Regierungskreisen, die seine Identität schützen wollen."
            }
        }, {
            text: "Nach weiteren Einzelheiten über die Regierungsverbindungen fragen",
            nextId: "government_inquiry"
        }, {
            text: "Den Raum verlassen, aber planen, später zurückzukehren und sein Büro zu durchsuchen",
            nextId: "plan_office_search"
        }]
    },

// Mit Schwester Rachel sprechen
    talk_rachel: {
        text: "Du findest Schwester Rachel am Schwesterndienstplatz, wo sie Medikamente sortiert. Als du dich näherst, blickt sie auf. 'Kann ich Ihnen helfen, Marshal?' Du erwähnst Patient 67 und bemerkst, wie sich ihre Haltung leicht versteift. 'Ich war nur eine seiner Betreuerinnen', sagt sie distanziert. 'Ein schwieriger Fall. Paranoide Episoden, Wahnvorstellungen.' Sie schließt den Medikamentenschrank ab. 'Er glaubte, hier gegen seinen Willen festgehalten zu werden. Typisch für seine Diagnose.' Etwas in ihrer Stimme klingt einstudiert. 'Er wurde jeden zweiten Mittwoch zur Spezialbehandlung in den Ostflügel gebracht. Darüber sollten Sie mit Dr. Jenkins sprechen. Wenn Sie ihn finden können.'",
        choices: [{
            text: "Nach den 'Spezialbehandlungen' fragen", nextId: "special_treatments", addClue: {
                id: "rachel_evasive",
                text: "Schwester Rachel wirkt merkwürdig distanziert und evasiv, wenn sie über Patient 67 spricht."
            }
        }, {
            text: "Fragen, was sie mit 'wenn Sie ihn finden können' meint",
            nextId: "ask_about_jenkins"
        }, {
            text: "Das Zimmer des Patienten sehen wollen", nextId: "last_seen_location"
        }]
    },

// Nach den speziellen Behandlungen fragen
    special_treatments: {
        text: "'Was genau waren diese 'Spezialbehandlungen' im Ostflügel?' fragst du. Rachel zögert. 'Ich bin nicht befugt, über Dr. Jenkins' Arbeit zu sprechen. Experimentelle Therapien für schwere Fälle.' Sie senkt ihre Stimme. 'Patient 67 kehrte immer... anders zurück. Ruhiger. Desorientiert.' Sie schaut sich um, als wolle sie sichergehen, dass niemand zuhört. 'Nach der letzten Behandlung hat er sich verändert. Begann, Namen zu nennen. Orte. Als hätte er sich an etwas erinnert.' Sie richtet sich abrupt auf und greift nach ihrem Klemmbrett. 'Ich muss jetzt meine Runde machen. Wenn Sie mehr wissen wollen, sprechen Sie mit Dr. Bleich. Er war sein Therapeut.'",
        choices: [{
            text: "Nach Dr. Bleich suchen", nextId: "find_sheehan", addClue: {
                id: "treatment_effects",
                text: "Die 'Spezialbehandlungen' im Ostflügel schienen Patient 67 zu desorientieren, aber zuletzt 'erinnerte' er sich an etwas."
            }
        }, {
            text: "Fragen, welche Namen und Orte er erwähnte", nextId: "ask_names_places"
        }, {
            text: "Nach dem Ostflügel fragen und wie man dorthin gelangt",
            nextId: "inquire_east_wing"
        }]
    },

// Dr. Bleich mit der Akte konfrontieren
    confront_sheehan_file: {
        text: "Du legst die Personalakte mit dem Foto auf Dr. Bleichs Schreibtisch. 'Erklären Sie mir das.' Er starrt lange auf das Dokument, dann schließt er langsam die Tür seines Büros. 'Wo haben Sie das gefunden?' Seine Stimme ist ruhig, aber angespannt. Du erklärst es ihm. Er seufzt tief. 'Sie hätten das nicht sehen sollen. Noch nicht.' Er setzt sich und betrachtet dich eindringlich. 'Was Sie hier sehen, Marshal – oder sollte ich sagen, Dr. Laeddis? – ist die Wahrheit, die wir versucht haben, Ihnen behutsam nahezubringen.' Er lehnt sich vor. 'Sie sind nicht hier, um einen Patienten zu finden. Sie SIND der Patient.'",
        choices: [{
            text: "Die Behauptung abstreiten und wütend werden", nextId: "deny_identity"
        }, {
            text: "Nach Beweisen fragen", nextId: "ask_for_proof", addClue: {
                id: "identity_confrontation",
                text: "Dr. Bleich behauptet direkt, dass du Dr. Andrew Laeddis bist und nicht wirklich ein Marshal."
            }
        }, {
            text: "Fragen, warum er dir die Wahrheit sagt, wenn andere sie verbergen",
            nextId: "why_telling_truth"
        }]
    },

// Nach Beweisen für die Identitätsbehauptung fragen
    ask_for_proof: {
        text: "Du verlangst Beweise für seine ungeheuerliche Behauptung. Dr. Bleich öffnet eine Schublade und zieht mehrere Dokumente hervor. Ein Buch – 'Neurochemische Grundlagen der Gedächtnismanipulation' von Dr. A. Laeddis. Fotos von dir mit anderen Ärzten, darunter Wilson und Jenkins. Medizinische Berichte über deinen Zusammenbruch nach dem 'tragischen Vorfall'. 'Andrew, du warst einer der brillantesten Psychiater, die ich je gekannt habe', sagt er sanft. 'Nach dem Tod deiner Familie hast du zusammen mit Wilson eine Methode entwickelt, traumatische Erinnerungen zu löschen. Aber als das Militär sich für eure Arbeit zu interessieren begann, wolltet ihr aussteigen. Dann...' Er zögert. 'Dann arrangierte Jenkins deinen 'Nervenzusammenbruch'.'",
        choices: [{
            text: "Nach Einzelheiten über deine Familie fragen",
            nextId: "family_details",
            addClue: {
                id: "identity_evidence",
                text: "Dr. Bleich hat handfeste Beweise vorgelegt, dass du Dr. Andrew Laeddis bist, ein Psychiater, der nach einer Familientragödie zusammenbrach."
            }
        }, {
            text: "Fragen, was mit Wilson geschehen ist", nextId: "wilson_fate"
        }, {
            text: "Vorschlagen, gemeinsam Jenkins zu konfrontieren",
            nextId: "suggest_confront_jenkins"
        }]
    },

// Rachel konfrontieren
    confront_rachel: {
        text: "'Sie wussten es die ganze Zeit, nicht wahr?' konfrontierst du Rachel. 'Dass ich nicht wirklich ein Marshal bin.' Ihr Gesicht versteift sich, sie greift subtil nach dem Alarmknopf an ihrem Gürtel. 'Ich weiß nicht, wovon Sie sprechen, Marshal. Sie scheinen verwirrt zu sein.' Ihre Augen scannen den Korridor. 'Vielleicht sollten wir Dr. Jenkins aufsuchen. Er kann Ihnen etwas gegen diese... Verwirrung geben.' Du erkennst die Bedrohung in ihrem falschen Lächeln. 'Oder wir könnten Prof. Freystatt informieren. Er wird wissen, was zu tun ist.' Du bemerkst, wie zwei Sicherheitsleute am Ende des Flurs erscheinen und langsam näherkommen.",
        choices: [{
            text: "Vorgeben, einen Rückzieher zu machen und Verwirrung vortäuschen",
            nextId: "feign_confusion",
            addClue: {
                id: "rachel_hostile",
                text: "Schwester Rachel reagierte feindlich und alarmierte Sicherheitspersonal, als du deine wahre Identität ansprachst."
            }
        }, {
            text: "Einen Fluchtweg suchen", nextId: "look_escape_route"
        }, {
            text: "Dr. Bleich aufsuchen, der dir möglicherweise helfen kann",
            nextId: "tell_sheehan_memories"
        }]
    },

// HANDLUNGSSTRANG 2: FEHLENDE SZENEN

// C. Malberg nach den 'Vorfällen' fragen
    ask_about_incidents: {
        text: "Du fragst C. Malberg nach den 'Vorfällen', die er erwähnt hat. Er blickt sich nervös um und senkt die Stimme noch weiter. 'Vor etwa einem Jahr. Ein Patient – Thompson – wurde für eine Woche in den Ostflügel verlegt. Als er zurückkam...' Er schüttelt den Kopf. 'Er war nicht mehr derselbe. Behauptete, er heiße Miller. Hatte eine völlig andere Persönlichkeit, andere Erinnerungen.' Er schluckt. 'Die offizielle Erklärung war dissoziative Identitätsstörung. Aber ich habe ihn jahrelang bewacht. Er hatte so etwas nie.' Er wirft einen angstvollen Blick zum Ostflügel. 'Und er war nicht der Einzige. Jenkins nennt es 'Restrukturierung'. Die meisten Wärter wollen nichts damit zu tun haben.'",
        choices: [{
            text: "Nach weiteren betroffenen Patienten fragen", nextId: "ask_other_patients"
        }, {
            text: "Fragen, ob Patient 67 auch 'restrukturiert' wurde",
            nextId: "ask_patient67_restructured",
            addClue: {
                id: "personality_change",
                text: "C. Malberg berichtet von Patienten, deren Persönlichkeit und Erinnerungen nach Behandlungen im Ostflügel vollständig verändert waren."
            }
        }, {
            text: "Den beobachtenden Patienten George Noyce ansprechen",
            nextId: "approach_watching_patient"
        }]
    },

// Nach anderen Behandlungsräumen suchen
    check_other_rooms: {
        text: "Du schleichst dich vorsichtig den Korridor entlang, um weitere Behandlungsräume zu inspizieren. Die meisten sind dunkel und leer. In einem Raum findest du Aktenschränke mit Patientenakten, alle mit dem Stempel 'Projekt JANUS'. Du öffnest einen und scannst die Dokumente: 'Subjekt erfolgreich restrukturiert. Ursprüngliche Identität vollständig unterdrückt. Neue Identitätsparameter stabil.' In einem anderen Raum entdeckst du ein Labor mit chemischen Analysen. Eine Tafel zeigt die molekulare Struktur von 'RX-78' neben handschriftlichen Notizen: 'Selektive Amnesie erreicht. Verabreichung über Trinkwasser effektiv. Stabilisator notwendig für dauerhafte Implantation.' Plötzlich hörst du Stimmen vom Ende des Korridors.",
        choices: [{
            text: "Schnell zurückziehen und verstecken", nextId: "hide_from_voices", addClue: {
                id: "rx78_water",
                text: "RX-78 wird offenbar dem Trinkwasser beigemischt, um selektive Amnesie zu erzeugen und neue Identitäten zu implantieren."
            }
        }, {
            text: "Einige Dokumente mitnehmen", nextId: "take_janus_documents"
        }, {
            text: "Den Raum verlassen und Dr. Bleich aufsuchen", nextId: "consult_sheehan"
        }]
    },

// HANDLUNGSSTRANG 3: FEHLENDE SZENEN

// Die Karte heimlich abzeichnen
    copy_map: {
        text: "Du nimmst dir einen Moment, um die Kratzer an der Wand unauffällig auf ein Notizbuchblatt zu übertragen, während Rachel abgelenkt ist. Die Karte ist einfach, aber präzise – sie zeigt einen Weg vom Hauptgebäude zu einem markierten Punkt im Keller. Als du fertig bist, steckst du das Notizbuch weg. 'Ich denke, ich habe genug gesehen', sagst du zu Rachel. Sie nickt knapp. 'Wie Sie meinen, Marshal.' Beim Verlassen des Raumes überkommt dich ein starkes Déjà-vu. Der Korridor, die Zimmer – alles erscheint seltsam vertraut, als wärest du schon oft hier gewesen. Nicht als Besucher, sondern... anders.",
        choices: [{
            text: "Rachel nach diesem seltsamen Gefühl fragen", nextId: "ask_rachel_familiarity"
        }, {
            text: "Die Umgebung genauer untersuchen", nextId: "examine_ward_area"
        }, {
            text: "Dem Weg auf der Karte folgen und den Keller aufsuchen",
            nextId: "sneak_basement",
            addClue: {
                id: "map_copied",
                text: "Du hast die in die Wand geritzte Karte kopiert, die einen Weg zu einem bestimmten Ort im Keller zeigt."
            }
        }]
    },

// Fragen, ob Sheehan dich für den eingeschleusten Agenten hält
    ask_if_agent: {
        text: "Du siehst Dr. Bleich direkt an. 'Glauben Sie, dass ICH dieser eingeschleuste Agent bin?' Bleich hält deinem Blick stand. 'Was glauben Sie, Marshal?' Er betont den Titel auf eine Weise, die dich innerlich zusammenzucken lässt. 'Finden Sie es nicht seltsam, dass Sie sich kaum an Details Ihrer Anreise erinnern können? Oder an Ihren letzten Fall? Oder daran, wer genau Sie hierher geschickt hat?' Er lehnt sich vor. 'Ich sage nicht, dass Sie es sind. Ich sage nur, dass Sie vorsichtig sein sollten. Überprüfen Sie alles. Trauen Sie niemandem – nicht einmal sich selbst.' Er reicht dir den Schlüssel. 'Besonders, wenn Sie anfangen, sich an Dinge zu erinnern, die zu Ihrer jetzigen Identität nicht passen.'",
        choices: [{
            text: "Zugeben, dass du seltsame Visionen und Déjà-vu-Erlebnisse hattest",
            nextId: "admit_visions",
            addClue: {
                id: "bleich_suspicion",
                text: "Dr. Bleich deutet an, dass deine Identität als Marshal möglicherweise implantiert sein könnte und fordert dich auf, deine Erinnerungen zu hinterfragen."
            }
        }, {
            text: "Den Schlüssel nehmen und zum Aktenschrank gehen", nextId: "basement_files"
        }, {
            text: "Seine Motive hinterfragen – warum hilft er dir?",
            nextId: "question_bleich_motives"
        }]
    },

// Auf die Kindheitserinnerungen konzentrieren
    focus_childhood: {
        text: "Du schließt die Augen und konzentrierst dich auf die aufblitzenden Erinnerungen an die Kinder. Ein Junge und ein Mädchen – Daniel und Rachel. Ihre Gesichter werden klarer. Du erinnerst dich an einen Geburtstag am See, Daniels siebten. Der Schokoladenkuchen, den Dolores gebacken hatte. Rachels Lachen, als sie ihren kleinen Bruder mit Wasser bespritzte. Das Gefühl der Sonne auf deiner Haut, der Stolz in deiner Brust. Dann ein späterer Moment: Du liest ihnen aus einem Buch vor, während ein Gewitter draußen tobt. Die Wärme des Feuers, der Geruch von Kakao. Diese Erinnerungen fühlen sich echt an – tiefer, lebendiger als alles, was du als 'Marshal' erlebt hast.",
        choices: [{
            text: "Versuchen, dich an den Tag des Unfalls zu erinnern",
            nextId: "remember_loss",
            addClue: {
                id: "family_memories",
                text: "Du hast klare Erinnerungen an deine Kinder Daniel und Rachel und deine Frau Dolores – Erinnerungen, die lebendiger wirken als dein Leben als Marshal."
            }
        }, {
            text: "Nach Dolores und den Kindern in den Klinikakten suchen",
            nextId: "search_family_records"
        }, {
            text: "Dr. Bleich aufsuchen und von diesen Erinnerungen berichten",
            nextId: "talk_sheehan_identity"
        }]
    },

// Fragen, warum Sheehan dir hilft
    why_sheehan_helps: {
        text: "'Warum helfen Sie mir, Dr. Bleich? Wenn ich wirklich dieser Laeddis bin – warum erinnern Sie mich an meine wahre Identität?' Bleich lächelt traurig. 'Weil wir Freunde waren, Andrew. Gute Freunde.' Er greift nach einem gerahmten Foto auf seinem Schreibtisch und dreht es zu dir. Es zeigt dich, Wilson und Bleich, lachend auf einer Konferenz. 'Wir drei haben zusammen studiert. Als Jenkins anfing, eure Arbeit zu missbrauchen, hast du mir davon erzählt. Ich hätte dir damals helfen sollen.' Seine Stimme bricht. 'Stattdessen dachte ich, du übertreibst. Dann war es zu spät – für dich, für deine Familie.' Er sieht dich fest an. 'Was jetzt geschieht, ist mein Versuch, diesen Fehler wiedergutzumachen. Dir zu helfen, dich selbst zurückzugewinnen. Und Wilson zu retten.'",
        choices: [{
            text: "Nach weiteren Details über eure gemeinsame Vergangenheit fragen",
            nextId: "ask_shared_past"
        }, {
            text: "Fragen, was mit deiner Familie geschehen ist",
            nextId: "inquire_family_fate",
            addClue: {
                id: "bleich_guilt",
                text: "Dr. Bleich fühlt sich schuldig, weil er dir und Wilson nicht geholfen hat, als ihr Jenkins' Missbrauch eurer Forschung entdeckt habt."
            }
        }, {
            text: "Fragen, ob es einen Weg gibt, dein wahres Selbst zurückzugewinnen",
            nextId: "ask_recovery_possibility"
        }]
    },

// WICHTIGE TWIST-SZENEN UND VERBINDUNGSSZENEN

// Sheehan überreden, mit dir zu fliehen
    convince_sheehan_escape: {
        text: "'Kommen Sie mit mir', drängst du Dr. Bleich. 'Sie sind hier nicht sicher. Jenkins wird wissen, dass Sie mir geholfen haben.' Bleich schüttelt den Kopf. 'Ich kann nicht, Andrew. Jemand muss hier bleiben, um sie abzulenken. Um anderen Patienten zu helfen.' Er greift nach einem Ordner in seinem Schreibtisch. 'Hier sind Kopien von Beweisen, die ich gesammelt habe. Nicht so umfassend wie Wilsons, aber hilfreich.' Er überreicht dir den Ordner. 'Nimm den Hinterausgang. Ich werde ihnen sagen, du bist zum Haupteingang gerannt.' Ihr hört Schritte im Korridor. 'Geh jetzt! Finde Wilson. Und Andrew...' Er drückt deine Schulter. 'Vergiss nicht wieder, wer du bist.'",
        choices: [{
            text: "Danken und durch den Hinterausgang fliehen",
            nextId: "escape_back_exit",
            addClue: {
                id: "bleich_sacrifice",
                text: "Dr. Bleich ist zurückgeblieben, um deine Flucht zu decken, und hat dir zusätzliche Beweise übergeben."
            }
        }, {
            text: "Darauf bestehen, dass er mitkommt", nextId: "insist_sheehan_comes"
        }, {
            text: "Zum Leuchtturm aufbrechen", nextId: "go_lighthouse"
        }]
    },

// Mit Sheehan einen Plan schmieden
    plan_confront_jenkins: {
        text: "Du setzt dich, jetzt etwas gefasster, und besprichst mit Dr. Bleich die nächsten Schritte. 'Wir müssen Jenkins konfrontieren', sagst du. 'Beweise sichern.' Bleich runzelt die Stirn. 'Das wäre zu gefährlich. Er hat Sicherheitspersonal auf seiner Seite. Und was noch wichtiger ist – er kontrolliert, was die Leute hier glauben.' Er überlegt. 'Wilson hat die umfassendsten Beweise. Und ein vollständiges Gegenmittel für RX-78.' Er steht auf. 'Der Sturm lässt nach. Heute Nacht ist unsere beste Chance. Die Wachen am Nordtor sind reduziert.' Er zeichnet dir eine Karte. 'Folge diesem Pfad zum Leuchtturm. Wilson wartet dort. Ich werde hier Ablenkung schaffen und mich um Dr. Bleich kümmern. Er ist auf unserer Seite, aber er wurde bedroht.'",
        choices: [{
            text: "Dem Plan zustimmen und zum Leuchtturm aufbrechen",
            nextId: "go_lighthouse",
            addClue: {
                id: "escape_plan",
                text: "Dr. Bleich hat einen Plan entwickelt, damit du zum Leuchtturm gelangen kannst, während er für Ablenkung sorgt."
            }
        }, {
            text: "Vorschlagen, zuerst weitere Beweise in Jenkins' Labor zu suchen",
            nextId: "suggest_evidence_gathering"
        }, {
            text: "Fragen, ob es einen Plan B gibt, falls etwas schiefgeht",
            nextId: "ask_about_plan_b"
        }]
    },

// Nach einem Plan B fragen
    ask_about_plan_b: {
        text: "'Was, wenn etwas schiefgeht? Gibt es einen Plan B?' Dr. Bleich nickt anerkennend. 'Gute Frage. Immer der strategische Denker.' Er zieht eine kleine Karte hervor. 'Wenn du den Leuchtturm nicht erreichen kannst, gibt es ein Versteck am südlichen Strand. Eine kleine Hütte, die früher als Lagerraum für Fischereigeräte diente.' Er markiert den Ort. 'Dort habe ich Vorräte, Medikamente und eine Kopie von Wilsons Forschung deponiert. Und dies...' Er überreicht dir einen kleinen Schlüssel. 'Für ein Boot, das dort vertäut ist. Es hat genug Treibstoff, um das Festland zu erreichen.' Er sieht dich ernst an. 'Wenn alles andere fehlschlägt – nimm die Beweise mit und bring sie zur Öffentlichkeit.'",
        choices: [{
            text: "Zum Leuchtturm aufbrechen", nextId: "go_lighthouse", addClue: {
                id: "backup_plan",
                text: "Es gibt ein Versteck am südlichen Strand mit Vorräten und einem Boot als Notfallplan."
            }
        }, {
            text: "Fragen, wem du auf dem Festland vertrauen kannst",
            nextId: "ask_mainland_contacts"
        }, {
            text: "Dr. Bleich für seine Hilfe danken und dich verabschieden",
            nextId: "thank_bleich_leave"
        }]
    },

// Vorschlagen, weitere Beweise zu sammeln
    suggest_evidence_gathering: {
        text: "'Bevor wir uns trennen, sollten wir vielleicht noch weitere Beweise aus Jenkins' Labor sichern', schlägst du vor. Dr. Bleich überlegt kurz. 'Riskant, aber vielleicht notwendig. Jenkins führt ein detailliertes Protokoll aller Behandlungen.' Er öffnet eine Schublade und entnimmt einen Magnetausweis. 'Dies bringt dich in sein privates Labor im untersten Kellergeschoss des Ostflügels. Raum K-7.' Er zeichnet den Weg auf die Karte. 'Sei vorsichtig. Zu dieser Zeit sollte Jenkins bei der Abendbesprechung sein, aber Schwester Rachel oder andere könnten dort sein.' Er kritzelt einen Code auf einen Zettel. 'Das Passwort für seinen Computer. Suche nach Dateien mit der Bezeichnung 'JANUS-A.L.' oder 'Restrukturierungsprotokoll'.'",
        choices: [{
            text: "Den Plan akzeptieren und zum Kellerlabor gehen",
            nextId: "infiltrate_jenkins_lab",
            addClue: {
                id: "lab_access",
                text: "Dr. Bleich hat dir einen Magnetausweis und ein Passwort für Jenkins' privates Labor gegeben."
            }
        }, {
            text: "Es als zu riskant ablehnen und direkt zum Leuchtturm gehen",
            nextId: "go_lighthouse"
        }, {
            text: "Vorschlagen, dass ihr beide geht, um schneller zu sein",
            nextId: "suggest_joint_mission"
        }]
    },

// WEITERE FEHLENDE SZENEN

// Die Behauptung abstreiten und wütend werden
    deny_identity: {
        text: "'Das ist absurd!', explodierst du. 'Ich bin ein US-Marshal! Ich wurde hierher geschickt, um einen verschwundenen Patienten zu finden!' Du greifst nach deiner Dienstmarke, hältst sie Bleich entgegen. 'Sehen Sie das? Das ist echt!' Dr. Bleich bleibt ruhig. 'Natürlich erscheint sie dir echt, Andrew. Die Erinnerung an ihre Aushändigung wurde sorgfältig in dein Gedächtnis implantiert.' Er nimmt die Marke, dreht sie um. 'Aber schau genauer hin. Die Seriennummer? Sie entspricht keinem bekannten Format. Der Prägestempel? Leicht abweichend vom Original.' Er reicht dir die Marke zurück. 'Dein Gehirn füllt die Unstimmigkeiten aus, weil es die falschen Erinnerungen schützen will. Aber ein Teil von dir weiß es bereits.'",
        choices: [{
            text: "Die Marke genauer untersuchen", nextId: "examine_badge", addClue: {
                id: "badge_anomalies",
                text: "Bei genauer Betrachtung zeigt deine Marke subtile Unstimmigkeiten, die auf eine Fälschung hindeuten könnten."
            }
        }, {
            text: "Fragen, warum man dir eine falsche Identität geben würde",
            nextId: "ask_false_identity_reason"
        }, {
            text: "Das Büro verlassen und einen klaren Kopf bekommen", nextId: "leave_clear_head"
        }]
    },

// Die Marke genauer untersuchen
    examine_badge: {
        text: "Mit zitternden Händen betrachtest du deine Marke im Licht. Tatsächlich – die Prägung ist leicht unregelmäßig, die Ränder nicht so präzise, wie sie sein sollten. Die Seriennummer beginnt mit 'AW' statt dem üblichen 'USM'-Präfix. War das schon immer so? Du versuchst, dich an den Tag zu erinnern, als du die Marke erhalten hast, aber die Erinnerung ist verschwommen, wie ein Traum. Du wendest die Marke und bemerkst auf der Rückseite eine winzige Gravur: 'J-Corp'. Dr. Bleich beobachtet dich aufmerksam. 'J-Corp ist Jenkins' private Forschungsfirma', erklärt er leise. 'Sie stellt auch medizinische Ausrüstung her.' Du starrst auf die Marke, als würde sie dir plötzlich fremd erscheinen. War dein ganzes Leben als Marshal eine konstruierte Lüge?",
        choices: [{
            text: "Nach weiteren Beweisen für deine wahre Identität fragen",
            nextId: "ask_for_proof",
            addClue: {
                id: "j_corp_marking",
                text: "Deine Marke trägt eine winzige 'J-Corp'-Gravur – Jenkins' private Forschungsfirma, die offenbar die Fälschung hergestellt hat."
            }
        }, {
            text: "Dr. Bleich fragen, wie die Gedächtnismanipulation funktioniert",
            nextId: "ask_memory_manipulation"
        }, {
            text: "Wütend werden und Bleich beschuldigen, Teil der Verschwörung zu sein",
            nextId: "accuse_bleich_conspiracy"
        }]
    },

// Fragen, warum man dir eine falsche Identität geben würde
    ask_false_identity_reason: {
        text: "'Selbst wenn das stimmen würde – warum?', fragst du. 'Warum mir eine falsche Identität als Marshal geben?' Dr. Bleich lehnt sich zurück. 'Zwei Gründe. Erstens: Nach deinem Zusammenbruch hast du selbst darum gebeten. Der Schmerz über den Verlust deiner Familie war unerträglich.' Seine Augen werden mitfühlend. 'Aber der zweite Grund ist, warum Jenkins zustimmte: Es war der perfekte Test für Projekt JANUS. Ein Subjekt, das nicht nur vergisst, sondern eine völlig neue Identität annimmt und diese aufrechterhält.' Er senkt die Stimme. 'Du bist ihr Meisterstück, Andrew. Der Beweis, dass ihr Verfahren funktioniert. Ursprünglich entwickelt, um traumatisierten Soldaten zu helfen – jetzt ein Werkzeug zur vollständigen Identitätsmanipulation. Die Implikationen für Spionage, verdeckte Operationen...'",
        choices: [{
            text: "Fragen, ob Dr. Bleich an dem Projekt beteiligt war",
            nextId: "ask_bleich_involvement"
        }, {
            text: "Nach Beweisen für deine frühere Identität als Andrew Laeddis fragen",
            nextId: "ask_for_proof",
            addClue: {
                id: "project_purpose",
                text: "Deine falsche Identität dient als Beweis für die Wirksamkeit von Projekt JANUS, das von seiner ursprünglichen therapeutischen Absicht zu einem Werkzeug für Identitätsmanipulation wurde."
            }
        }, {
            text: "Fragen, wie du deine wahren Erinnerungen zurückbekommen kannst",
            nextId: "ask_recovery_possibility"
        }]
    },

// Freystatt über Visionen befragen
    ask_Freystatt_visions: {
        text: "Du entscheidest dich für den direkten Weg. 'Professor, ich hatte eine Vision – ich sah mich selbst in diesem Raum, wie ich diese Karte an die Wand ritzte.' Freystatts Gesicht zeigt kurz Überraschung, bevor er seine professionelle Maske wieder aufsetzt. 'Interessant. Halluzinationen können durch verschiedene Faktoren ausgelöst werden – Stress, Schlafmangel, die ungewohnte Umgebung.' Er tauscht einen Blick mit Rachel aus. 'Oder eine Vorgeschichte mit psychischen Erkrankungen.' Er tritt näher. 'Hatten Sie solche Visionen schon einmal, Marshal?' Seine Frage klingt beiläufig, aber du spürst das intensive Interesse dahinter. 'Vielleicht sollten wir Sie untersuchen lassen. Ein einfacher Gesundheitscheck.'",
        choices: [{
            text: "Die Untersuchung ablehnen und auf deiner Aufgabe bestehen",
            nextId: "refuse_examination",
            addClue: {
                id: "freystatt_concern",
                text: "Prof. Freystatt zeigte auffälliges Interesse an deinen Visionen und schlug sofort eine 'Untersuchung' vor."
            }
        }, {
            text: "Scheinbar zustimmen, aber planen, dich später davonzustehlen",
            nextId: "fake_agreement"
        }, {
            text: "Fragen, ob solche Visionen mit den experimentellen Behandlungen zusammenhängen könnten",
            nextId: "question_treatments_connection"
        }]
    },

// Die Untersuchung ablehnen
    refuse_examination: {
        text: "'Mit allem Respekt, Professor, ich bin hier, um einen Fall zu lösen, nicht um mich untersuchen zu lassen', sagst du bestimmt. Freystatts Lächeln wird kälter. 'Natürlich, Marshal. Ich wollte nur hilfreich sein.' Er macht eine Geste zu Rachel. 'Bitte stellen Sie sicher, dass unser Gast alles hat, was er braucht.' Zu dir gewandt: 'Vielleicht sollten Sie sich ausruhen. Der Sturm kann... desorientierend wirken.' Als er sich zum Gehen wendet, hörst du, wie er leise zu Rachel sagt: 'Informieren Sie Dr. Jenkins. Plan B vorbereiten.' Du tust, als hättest du nichts gehört, aber dein Alarmgefühl ist geweckt. Was ist 'Plan B'? Und warum fühlt sich dieser Ort zunehmend wie eine Falle an?",
        choices: [{
            text: "Rachel nach Dr. Jenkins fragen", nextId: "ask_about_jenkins", addClue: {
                id: "plan_b",
                text: "Prof. Freystatt erwähnte heimlich einen 'Plan B' gegenüber Rachel und wies sie an, Dr. Jenkins zu informieren."
            }
        }, {
            text: "Vorgeben zu gehen, aber heimlich zurückkehren und lauschen",
            nextId: "pretend_leave_eavesdrop"
        }, {
            text: "Den Keller erkunden, wie auf der Karte angezeigt", nextId: "sneak_basement"
        }]
    },

// Rachel nach Jenkins fragen
    ask_about_jenkins: {
        text: "Als ihr allein seid, fragst du Rachel beiläufig: 'Dieser Dr. Jenkins – ich würde ihn gerne treffen. Wo finde ich ihn?' Rachel's Haltung versteift sich leicht. 'Dr. Jenkins ist schwer zu erreichen. Er verbringt die meiste Zeit im Ostflügel bei seinen Forschungen.' Sie schiebt einen Medikamentenwagen vor sich her. 'Normalerweise nimmt er keine Besucher an.' Du bemerkst ein leichtes Zittern in ihren Händen. 'Aber ich kann eine Nachricht hinterlassen, wenn Sie möchten.' Sie wirkt nervös, fast ängstlich. 'Haben Sie spezielle Fragen an ihn? Vielleicht kann ich helfen.' Ihre Augen scannen deinen Gesichtsausdruck, als suche sie nach Anzeichen von... etwas.",
        choices: [{
            text: "Nach seinen Forschungen im Ostflügel fragen",
            nextId: "inquire_east_wing",
            addClue: {
                id: "rachel_nervous",
                text: "Schwester Rachel wird nervös, wenn du nach Dr. Jenkins fragst, und versucht, dich von einem direkten Treffen mit ihm abzuhalten."
            }
        }, {
            text: "Fragen, ob Jenkins Patient 67 behandelt hat", nextId: "ask_jenkins_patient67"
        }, {
            text: "Das Thema wechseln und nach dem Keller fragen", nextId: "inquire_basement"
        }]
    },

// Jeden Aspekt der Marshal-Identität in Frage stellen
    look_marshal_proof: {
        text: "In deinem Quartier durchsuchst du fieberhaft deine persönlichen Gegenstände nach Beweisen für deine wahre Identität als Marshal. Deine Brieftasche enthält eine Dienstmarke und einen Ausweis – sie sehen echt aus, aber bei näherer Betrachtung fallen dir Unstimmigkeiten auf. Der Ausweis trägt ein Ausstellungsdatum von vor sechs Monaten, genau die Zeit, die Patient 67 laut Akte hier ist. Deine angebliche Dienstnummer findet sich in keinem deiner anderen Dokumente. Du versuchst, dich an Kollegen zu erinnern, an frühere Fälle – alles bleibt nebulös, ohne konkrete Details. In deinem Notizbuch findest du Einträge, die du nicht erinnerst geschrieben zu haben. Die Handschrift ändert sich subtil auf den letzten Seiten – wird fester, kontrollierter. Als würdest du zu jemandem anderem werden.",
        choices: [{
            text: "Die Brieftasche weiter untersuchen", nextId: "examine_wallet_deeper", addClue: {
                id: "identity_inconsistencies",
                text: "Deine Ausweispapiere als Marshal weisen subtile Unstimmigkeiten auf, und deine Erinnerungen an dieses Leben sind auffallend vage."
            }
        }, {
            text: "Deine eigene Handschrift analysieren", nextId: "analyze_handwriting"
        }, {
            text: "Nach weiteren Hinweisen in deinem Zimmer suchen", nextId: "search_room_clues"
        }]
    },

// Die Brieftasche gründlicher untersuchen
    examine_wallet_deeper: {
        text: "Du leerst den gesamten Inhalt deiner Brieftasche auf dem Bett aus. Hinter deinem Ausweis entdeckst du ein verborgenes Fach. Darin liegt ein kleines, abgegriffenes Foto – ein Schnappschuss einer Frau mit zwei kleinen Kindern vor einem Seehaus. Du drehst es um. Auf der Rückseite steht in verblasster Tinte: 'Andrew, wir lieben dich. Komm bald nach Hause. D.' Dein Herz rast. Das Gesicht der Frau weckt ein tiefes Gefühl von Verlust und Sehnsucht. Dolores. Dann ein weiteres verstecktes Detail – ein winziger Zettel, gefaltet zwischen Kreditkarten. Eine handschriftliche Notiz: 'Wenn du das liest: Du bist A.L. Nicht C.D. Erinnerungen manipuliert. Traue Freystatt nicht. Finde Wilson im Leuchtturm.' Die Handschrift ist deine eigene.",
        choices: [{
            text: "Versuchen, dich an Dolores und die Kinder zu erinnern",
            nextId: "remember_family",
            addClue: {
                id: "hidden_photo",
                text: "In deiner Brieftasche war ein verborgenes Foto deiner Familie und eine Notiz, die dich als A.L. (Andrew Laeddis) identifiziert und dich warnt, Freystatt nicht zu trauen."
            }
        }, {
            text: "Zum Leuchtturm aufbrechen, um Wilson zu finden", nextId: "go_lighthouse"
        }, {
            text: "Dr. Bleich aufsuchen und ihm das Foto und die Notiz zeigen",
            nextId: "show_bleich_evidence"
        }]
    },

// Versuchen, sich an die Familie zu erinnern
    remember_family: {
        text: "Du starrst intensiv auf das Foto und konzentrierst dich auf die Gesichter. Langsam tauchen Erinnerungsfragmente auf: Dolores' Lachen, ihr Lieblingskleid – blau mit weißen Blumen. Der Junge – Daniel – wie er mit sechs Jahren sein erstes Fahrrad bekam. Das Mädchen – Rachel – ihre Leidenschaft fürs Klavierspielen. Der Geruch von Dolores' Apfelkuchen. Euer Hochzeitstag am See. Die gemeinsamen Abende am Kamin. Dann plötzlich: Flammen. Sirenen. Du, spät in der Nacht im Labor. Ein verzweifelter Anruf. Das Haus in Flammen. Deine Familie eingeschlossen. Die Schuldgefühle überwältigen dich. Du hättst da sein sollen. Hättest die fehlerhafte Elektrik reparieren sollen, wie versprochen. Die Erinnerungen fühlen sich so real an – tiefer und intensiver als alles, was du als 'Marshal' erlebt hast.",
        choices: [{
            text: "Zum Leuchtturm aufbrechen, um Wilson zu finden",
            nextId: "go_lighthouse",
            addClue: {
                id: "family_tragedy_remembered",
                text: "Du erinnerst dich an deine Familie und ihre tragischen Tod bei einem Hausbrand, während du im Labor arbeitest. Die Schuldgefühle darüber führten zu deinem Zusammenbruch."
            }
        }, {
            text: "Prof. Freystatt konfrontieren", nextId: "confront_Freystatt_memories"
        }, {
            text: "Nach Beweisen suchen, ob diese Erinnerungen echt oder implantiert sind",
            nextId: "search_memory_validation"
        }]
    },

// Prof. Freystatt konfrontieren
    confront_Freystatt_memories: {
        text: "Du stürmst in Freystatts Büro, das Foto und die Notiz in der Hand. 'Was haben Sie mit mir gemacht?', forderst du. Freystatt bleibt ruhig, als hätte er dich erwartet. 'Ah, Dr. Laeddis. Sie kommen zurück.' Er seufzt. 'Früher als geplant.' Er bittet dich, Platz zu nehmen. 'Wir haben Ihnen geholfen, Andrew. Nach dem Tod Ihrer Familie waren Sie... gebrochen. Sie baten selbst um die Behandlung.' Er faltet die Hände. 'Was wir nicht wussten, war, dass Dr. Wilson Ihnen ein Gegenmittel verabreicht hatte. Er verriet das Projekt, entwendete Forschungsdaten.' Freystatts Augen werden kalt. 'Sie müssen verstehen – was wir hier tun, ist wichtiger als einzelne Personen. Die Fähigkeit, traumatische Erinnerungen zu löschen, neue Identitäten zu erschaffen... Stellen Sie sich die Anwendungen vor.'",
        choices: [{
            text: "Nach Wilson und seinem Verbleib fragen",
            nextId: "ask_wilson_whereabouts",
            addClue: {
                id: "freystatt_admission",
                text: "Prof. Freystatt hat zugegeben, dass du Andrew Laeddis bist und dass deine Identität als US-Marshal implantiert wurde, um deine traumatischen Erinnerungen zu unterdrücken."
            }
        }, {
            text: "Fragen, ob Freystatt deine Familie gekannt hat", nextId: "ask_about_family"
        }, {
            text: "Freystatt konfrontieren und ihm vorwerfen, Gedankenmanipulation zu rechtfertigen",
            nextId: "challenge_memory_manipulation"
        }]
    },

// Darauf bestehen, gemeinsam zu fliehen
    insist_together: {
        text: "'Wir gehen gemeinsam oder gar nicht', bestehst du. 'Ich lasse dich nicht zurück, Ed.' Wilson schüttelt den Kopf. 'Andrew, sei vernünftig. Mit den Beweisen musst du entkommen. Ich kenne diesen Tunnel seit Jahren. Ich werde ihnen entwischen und dich später treffen.' Die Tür zum Leuchtturm splittert unter schweren Schlägen. 'Keine Zeit mehr zum Diskutieren!' Er drückt dich zur Falltür. Du kannst bereits Stimmen hören: Dr. Jenkins, Sicherheitspersonal, Freystatts kühle Befehle. 'Nimm das auch', sagt Wilson und überreicht dir eine zweite Flasche. 'Das vollständige Gegenmittel. Für den Notfall.' Mit einem letzten Nicken schiebt er dich in den Tunnel und schließt die Falltür. Über dir hörst du, wie die Eingangstür aufbricht.",
        choices: [{
            text: "Durch den Tunnel zum Boot eilen", nextId: "escape_tunnel", addClue: {
                id: "complete_antidote",
                text: "Wilson hat dir das vollständige Gegenmittel für RX-78 gegeben, bevor er zurückblieb, um deine Flucht zu decken."
            }
        }, {
            text: "Die Falltür wieder öffnen und Wilson helfen", nextId: "help_wilson_fight"
        }, {
            text: "Leise im Tunnel verharren und lauschen", nextId: "listen_tunnel"
        }]
    },

    approach_elena: {
        text: "Du wartest, bis Elena ihre Rede beendet hat und sich unter die Gäste mischt. Mit einem Champagnerglas in der Hand näherst du dich ihr, als sie gerade allein steht.\n\n\"Ms. Blackwood\", sprichst du sie an. \"Eine beeindruckende Präsentation. Dieses Projekt Tiefenleuchten klingt faszinierend.\"\n\nSie mustert dich mit kühlem Interesse. \"Danke. Und Sie sind...?\"\n\n\"Alex Carver. Ich bin neu in der Stadt und interessiere mich für innovative Umweltprojekte.\"\n\nIhr Lächeln erreicht ihre Augen nicht. \"Wie schön. Greystone kann immer engagierte neue Bürger gebrauchen.\" Sie nimmt einen Schluck Champagner. \"Was führt Sie in unsere kleine Stadt, Mr. Carver?\"\n\nIhr Ton ist freundlich, aber du spürst, wie sie dich gründlich studiert.",
        choices: [{
            text: "Eine Halbwahrheit erzählen - du suchst nach Investitionsmöglichkeiten",
            nextId: "investment_lie"
        }, {
            text: "Eine direkte Frage zu Tom stellen", nextId: "ask_elena_tom"
        }, {
            text: "Mehr über Projekt Tiefenleuchten erfahren wollen", nextId: "ask_about_deeplight"
        }]
    },

    // Halbwahrheit über Investitionen
    investment_lie: {
        text: "\"Ich bin auf der Suche nach Investitionsmöglichkeiten an der Küste\", erklärst du mit einem geschäftsmäßigen Lächeln. \"Erneuerbare Energien, nachhaltige Fischerei, Umweltforschung - Bereiche mit Zukunft.\"\n\nElenas Augen leuchten mit plötzlichem Interesse auf. \"Tatsächlich? Dann sind Sie hier genau richtig.\" Sie winkt einem Mann in teurem Anzug zu. \"James, komm kurz her. Mr. Carver hier ist Investor, interessiert an nachhaltigen Projekten.\"\n\nDer Mann – offenbar einer ihrer Geschäftspartner – gesellt sich zu euch, und bald befindest du dich in einem Gespräch über Investitionssummen und Renditeerwartungen.\n\n\"Projekt Tiefenleuchten könnte genau das Richtige für Sie sein\", sagt Elena. \"Wir suchen immer nach... diskreten Investoren. Vielleicht könnten wir morgen in meinem Büro detaillierter sprechen?\"\n\nDu bemerkst, wie Sheriff Malone dich von der anderen Seite des Raumes beobachtet.",
        choices: [{
            text: "Die Einladung annehmen",
            nextId: "accept_meeting"
        }, {text: "Höflich ablehnen und dich zurückziehen", nextId: "politely_decline"}, {
            text: "Nach Tom Harrow fragen - vielleicht kennt sie den 'Umweltjournalisten'",
            nextId: "mention_tom_casually"
        }]
    },

    // Tom direkt ansprechen
    ask_elena_tom: {
        text: "\"Eigentlich bin ich auf der Suche nach einem Freund\", sagst du direkt. \"Tom Harrow. Er ist Journalist, recherchierte hier in Greystone und ist seit einigen Tagen verschwunden.\"\n\nElenas Lächeln gefriert für einen kurzen Moment, bevor sie ihre Fassung wiedererlangt. \"Ah, Mr. Harrow. Ja, er hat mich für ein Profil über lokale Unternehmen interviewt.\" Sie nimmt einen Schluck Champagner. \"Ich habe gehört, er hätte die Stadt verlassen. Etwas über einen dringenden Auftrag in Seattle, glaube ich.\"\n\nDu bemerkst, wie ihr Blick kurz zu Sheriff Malone wandert, der sofort in eure Richtung zu kommen beginnt.\n\n\"Seltsam\", erwiderst du. \"Er hätte mich informiert, wenn er wegfahren würde.\"\n\n\"Wissen Sie\", sagt Elena mit leicht gesenkter Stimme, \"Ihr Freund stellte viele... unangemessene Fragen. Über alte Geschichten. Vergangene Tragödien, die diese Stadt längst hinter sich gelassen hat.\"",
        choices: [{text: "Nach dem Leuchtturm-Unfall fragen", nextId: "ask_elena_lighthouse"}, {
            text: "Dich entschuldigen und zurückziehen, bevor der Sheriff ankommt",
            nextId: "retreat_from_elena"
        }, {text: "Konfrontieren: 'Was haben Sie mit ihm gemacht?'", nextId: "confront_elena"}]
    },

    // Nach Projekt Tiefenleuchten fragen
    ask_about_deeplight: {
        text: "\"Dieses Projekt Tiefenleuchten hat meine Neugier geweckt\", sagst du. \"Könnten Sie mir mehr darüber erzählen? Die Technologie klingt revolutionär.\"\n\nElena nickt anerkennend. \"Es ist unser Vorzeigeprojekt. Eine Reihe von Offshore-Plattformen, die sowohl Meeresforschung betreiben als auch saubere Energie gewinnen.\" Sie führt dich zu einer digitalen Darstellung im hinteren Teil des Saals.\n\n\"Hier können Sie sehen, wie die Plattformen aussehen werden. Die erste ist bereits in der Bauphase.\"\n\nDie Animationen zeigen beeindruckende Strukturen im Meer. Doch als du genauer hinsiehst, bemerkst du Diskrepanzen zwischen der Darstellung und einigen technischen Daten am Rand des Bildschirms. Die Konstruktion scheint für wissenschaftliche Arbeit überdimensioniert, mit seltsam großen Laderäumen und verstärkten Strukturen, die für Forschungsplattformen untypisch sind.",
        choices: [{text: "Nach den technischen Details fragen", nextId: "ask_technical_details"}, {
            text: "Fragen, ob es Umweltgutachten für das Projekt gibt",
            nextId: "ask_environmental_studies"
        }, {
            text: "Erwähnen, dass ein Freund als Journalist darüber recherchiert",
            nextId: "mention_tom_researching"
        }]
    },

    // Nach dem Sheriff folgen
    follow_sheriff: {
        text: "Du behältst Sheriff Malone im Auge, während du dich unauffällig durch die Menge bewegst. Nach etwa zwanzig Minuten siehst du, wie er sich diskret aus dem Hauptsaal zurückzieht und durch eine Seitentür verschwindet.\n\nDu wartest einen Moment und folgst ihm dann. Der Korridor führt zu einem ruhigeren Teil des Rathauses. Die Stimme des Sheriffs ist zu hören, als du dich einer halb geöffneten Tür näherst.\n\n\"...wird heute Nacht erledigt\", hörst du ihn sagen. \"Das Boot ist bereit. Sobald Jenkins fertig ist, gibt es keine Beweise mehr.\"\n\nEine andere Stimme antwortet: \"Und was ist mit diesem Carver? Er stellt Fragen.\"\n\n\"Überlasst ihn mir\", erwidert Malone. \"Wenn er nicht schlau genug ist, die Stadt zu verlassen, bekommt er dieselbe Behandlung wie sein Freund.\"\n\nDu ziehst dich leise zurück, bevor jemand dich entdeckt.",
        choices: [{
            text: "Sofort das Rathaus verlassen",
            nextId: "leave_charity_event"
        }, {
            text: "Versuchen, mehr zu belauschen",
            nextId: "continue_eavesdropping_sheriff"
        }, {text: "Fotos von den Dokumenten auf dem Tisch machen", nextId: "photograph_documents"}]
    },

    // Die Präsentation studieren
    study_presentation: {
        text: "Du bewegst dich zum hinteren Teil des Saals, wo die Präsentation über Projekt Tiefenleuchten in einer Endlosschleife läuft. Ohne viel Aufmerksamkeit zu erregen, studierst du die technischen Details und Grafiken.\n\nDie offizielle Darstellung zeigt eine Reihe von Offshore-Plattformen, die angeblich Meeresforschung betreiben und Daten über Meeresströmungen, Fischbestände und Wasserqualität sammeln. Doch beim genauen Hinsehen bemerkst du seltsame Unstimmigkeiten.\n\nDie Plattformen haben ungewöhnlich große Ladekapazitäten und verstärkte Strukturen, die für wissenschaftliche Arbeit überflüssig wären. Die angegebenen Positionen liegen zudem in einem Gebiet, das auf einer kleinen Navigationskarte als Naturschutzgebiet markiert ist.\n\nAls du dir Notizen machst, spürst du plötzlich eine Hand auf deiner Schulter.",
        choices: [{
            text: "Erschrocken umdrehen",
            nextId: "turn_around_startled"
        }, {text: "Ruhig bleiben und deine Notizen verstecken", nextId: "hide_notes_calmly"}, {
            text: "So tun, als würdest du dich für eine Investition interessieren",
            nextId: "feign_investment_interest"
        }]
    },

    // Überraschend umdrehen
    turn_around_startled: {
        text: "Du drehst dich erschrocken um und siehst dich einem Mann mittleren Alters mit freundlichem Gesicht gegenüber. Er trägt einen teuren Anzug und hält ein Champagnerglas in der Hand.\n\n\"Verzeihen Sie, wenn ich Sie erschreckt habe\", sagt er lächelnd. \"James Porter, Blackwood Industries. Sie scheinen sich sehr für unser Projekt zu interessieren.\"\n\nDu versuchst, deine Nervosität zu verbergen. \"Ja, die Technologie ist faszinierend.\"\n\n\"Sind Sie vom Fach?\" fragt er, während sein Blick zu deinen Notizen wandert.\n\n\"Nein, nur ein interessierter Bürger\", erwiderst du ausweichend. \"Ich bin neu in Greystone und wollte mich über lokale Initiativen informieren.\"\n\nPorter nickt, aber sein Blick wird prüfender. \"Interessant. Die meisten 'neuen Bürger' kommen nicht direkt zu unseren Veranstaltungen.\" Er nimmt einen Schluck Champagner. \"Und Ihr Name war...?\"",
        choices: [{
            text: "Deinen echten Namen nennen",
            nextId: "give_real_name"
        }, {
            text: "Einen falschen Namen nennen",
            nextId: "give_fake_name"
        }, {text: "Das Gespräch abbrechen und gehen", nextId: "exit_conversation"}]
    },

    // Ruhig bleiben und Notizen verstecken
    hide_notes_calmly: {
        text: "Du bleibst ruhig, lässt dein Notizbuch unauffällig in deine Jacketttasche gleiten und drehst dich mit einem freundlichen Lächeln um.\n\nVor dir steht Elena Blackwood selbst, mit einem berechnenden Blick in ihren Augen.\n\n\"Ich sehe, Sie interessieren sich für die technischen Details unseres Projekts\", sagt sie mit einem Lächeln, das ihre Augen nicht erreicht. \"Nicht viele Gäste nehmen sich die Zeit, die Präsentation so gründlich zu studieren.\"\n\n\"Es ist beeindruckend\", erwiderst du leichthin. \"Die Technologie scheint sehr... fortschrittlich.\"\n\n\"Das ist sie.\" Elena mustert dich genauer. \"Verzeihen Sie meine Direktheit, aber Sie kommen mir bekannt vor. Haben wir uns schon einmal getroffen?\"\n\nDu spürst, dass sie dich auf die Probe stellt.",
        choices: [{
            text: "Leugnen und das Thema wechseln",
            nextId: "deny_and_deflect"
        }, {
            text: "Zugeben, dass du ein Freund von Tom Harrow bist",
            nextId: "admit_tom_friend"
        }, {text: "Vorgeben, ein potenzieller Investor zu sein", nextId: "pretend_investor"}]
    }, mention_tom_researching: {
        text: "\"Ein Freund von mir, Tom Harrow, ist Journalist. Er recherchierte über innovative Umweltprojekte wie dieses, bevor er... verschwunden ist\", sagst du und beobachtest aufmerksam Elenas Reaktion.\n\nIhr Gesicht verändert sich kaum, aber ihre Augen verengen sich leicht. \"Verschwunden? Das klingt beunruhigend.\" Sie nimmt einen Schluck Champagner. \"Ja, Mr. Harrow hat mich interviewt. Er schien besonders... interessiert an den historischen Aspekten unserer Unternehmungen. Fast besessen von alten Geschichten, die längst keine Relevanz mehr haben.\"\n\nSie winkt dezent, und du bemerkst, wie Sheriff Malone beginnt, sich durch die Menge zu euch zu bewegen.\n\n\"Leider musste er die Stadt überstürzt verlassen. Etwas über eine dringende Geschichte in Seattle, glaube ich\", fährt Elena fort. \"Haben Sie versucht, ihn anzurufen?\"",
        choices: [{
            text: "Behaupten, dass Tom nie von Seattle gesprochen hat", nextId: "deny_seattle_story"
        }, {text: "Höflich verabschieden, bevor der Sheriff ankommt", nextId: "polite_exit"}, {
            text: "Elena direkt mit den Unstimmigkeiten im Projekt konfrontieren",
            nextId: "confront_project_flaws"
        }]
    },

    // Sheriff-Büro aufsuchen
    sheriff_office: {
        text: "Das Büro des Sheriffs befindet sich in einem kleinen Backsteingebäude am Hauptplatz von Greystone. Als du die Tür öffnest, blickt eine junge Frau in Uniform von ihrem Schreibtisch auf.\n\n\"Kann ich Ihnen helfen?\" fragt sie freundlich.\n\n\"Ich würde gerne mit Sheriff Malone sprechen.\" Du setzt ein höfliches Lächeln auf. \"Es geht um meinen Freund Tom Harrow, der vermisst wird.\"\n\nIhr Gesichtsausdruck verändert sich kaum merklich. \"Der Sheriff ist momentan nicht im Büro. Er ist bei einem Einsatz.\" Sie schlägt ein Terminbuch auf. \"Ich kann Ihnen einen Termin für morgen Vormittag anbieten.\"\n\nWährend sie spricht, fällt dein Blick auf eine Pinnwand hinter ihr. Dort hängt eine Notiz mit Toms Namen und darunter der Vermerk: \"Kontakt: E.B. - erledigt\".",
        choices: [{
            text: "Einen Termin für morgen vereinbaren",
            nextId: "schedule_appointment"
        }, {text: "Nach der Notiz auf der Pinnwand fragen", nextId: "ask_about_note"}, {
            text: "Vorgeben zu gehen, aber heimlich zurückkehren und im Büro nachsehen",
            nextId: "sneak_back_office"
        }]
    },

    // Nach der Notiz fragen
    ask_about_note: {
        text: "\"Entschuldigung, aber ist das Tom Harrows Name auf der Pinnwand dort?\" fragst du und deutest auf die Notiz.\n\nDie Deputy folgt deinem Blick und erbleicht leicht. Schnell steht sie auf und stellt sich so, dass sie die Pinnwand teilweise verdeckt.\n\n\"Das sind vertrauliche Polizeiangelegenheiten\", sagt sie mit plötzlicher Kühle. \"Wenn Sie einen Termin möchten, kann ich Sie für morgen einschreiben. Ansonsten muss ich Sie bitten zu gehen.\"\n\nIhr Tonfall hat sich merklich verändert, und ihre Hand gleitet langsam zu ihrem Funkgerät.\n\n\"Ihr Name war nochmal?\" fragt sie mit einem prüfenden Blick.",
        choices: [{
            text: "Einen falschen Namen angeben und einen Termin vereinbaren",
            nextId: "give_false_name"
        }, {
            text: "Das Büro verlassen, aber die Umgebung beobachten",
            nextId: "leave_and_observe"
        }, {text: "Auf einer sofortigen Antwort bezüglich Tom bestehen", nextId: "insist_tom_info"}]
    },

    // Im Sheriffbüro einschleichen
    sneak_back_office: {
        text: "\"Ich verstehe. Dann komme ich morgen wieder\", sagst du höflich und verlässt das Gebäude.\n\nStatt dich jedoch zu entfernen, umrundest du den Block und beobachtest das Büro aus sicherer Entfernung. Nach etwa zwanzig Minuten siehst du, wie die Deputy das Gebäude verlässt und die Straße hinuntergeht, vermutlich für ihre Mittagspause.\n\nDu nutzt die Gelegenheit und schleichst dich durch den Hintereingang zurück ins Büro. Im leeren Raum gehst du direkt zur Pinnwand und untersuchst die Notiz genauer.\n\n\"Harrow, Thomas - Letzte Sichtung: Leuchtturm, 23.05. - Kontakt: E.B. - erledigt\"\n\nAuf Malones Schreibtisch liegt eine Akte mit dem Stempel \"VERTRAULICH - PROJEKT TIEFENLEUCHTEN\". Als du sie öffnen willst, hörst du plötzlich Schritte vor der Tür.",
        choices: [{
            text: "Schnell ein Foto von der Akte machen und verstecken", nextId: "quick_photo_hide"
        }, {
            text: "Die Akte mitnehmen und durch den Hinterausgang fliehen", nextId: "take_file_flee"
        }, {text: "Ein Versteck im Büro suchen", nextId: "hide_in_office"}]
    },

    // Recherche über Unfälle und Todesfälle
    research_accidents: {
        text: "Du durchsuchst die Archive nach Unfällen oder Todesfällen, die mit den Blackwoods in Verbindung stehen könnten. Ein beunruhigendes Muster zeichnet sich ab.\n\n1976: Ein Umweltaktivist, der gegen Blackwoods Fischfabrik protestierte, ertrank bei einem \"Bootsunglück\".\n\n1987: Frank Miller und zwei Fischer starben bei dem \"Unfall\" am Leuchtturm.\n\n1995: Ein Lokalreporter, der über Korruption bei Stadtverträgen recherchierte, verließ \"plötzlich die Stadt\".\n\n2008: Ein Stadtratsmitglied, das gegen eine Blackwood-Erweiterung gestimmt hatte, starb bei einem \"Autounfall\".\n\nBesonders interessant ist ein Artikel von 2016, in dem ein ehemaliger Angestellter der Blackwoods wegen \"unbegründeter Anschuldigungen gegen die Familie\" verhaftet wurde. Der Mann hatte behauptet, die Blackwoods würden illegale Aktivitäten im alten Leuchtturm durchführen. Er wurde wegen Verleumdung verurteilt, von Sheriff Malone persönlich.",
        choices: [{
            text: "Nach dem ehemaligen Angestellten suchen",
            nextId: "search_ex_employee"
        }, {
            text: "Deine Ergebnisse mit Martha teilen",
            nextId: "share_findings_martha"
        }, {text: "Zum Leuchtturm zurückkehren mit dem neuen Wissen", nextId: "lighthouse_return"}]
    },

    // Nach dem ehemaligen Angestellten suchen
    search_ex_employee: {
        text: "Du suchst nach weiteren Informationen über den ehemaligen Blackwood-Angestellten. Sein Name war Richard Gaines, ein ehemaliger Sicherheitsmann, der zehn Jahre für die Familie gearbeitet hatte.\n\nNach einigem Suchen findest du einen kurzen Artikel über seine Entlassung aus dem Gefängnis ein Jahr nach seiner Verurteilung - und einen Nachruf zwei Wochen später. \"Tragischer Suizid\", lautet die Überschrift.\n\nDie Bibliothekarin bemerkt dein Interesse. \"Armer Richard\", sagt sie leise, als sie an deinem Tisch vorbeigeht. \"Manche sagen, er hat sich nicht selbst umgebracht.\"\n\nSie blickt sich um, als wolle sie sichergehen, dass niemand zuhört. \"Er hat mit meiner Nichte Sandra im Diner gearbeitet. Vor seinem Tod sagte er ihr, er hätte Beweise im Leuchtturm versteckt. 'In der Laterne', sagte er. 'Der Schlüssel liegt im Licht.' Niemand hat je nachgesehen.\"",
        choices: [{
            text: "Nach Sandras Kontaktdaten fragen", nextId: "ask_sandra_contact"
        }, {
            text: "Zum Leuchtturm fahren und in der Laterne nachsehen",
            nextId: "lighthouse_light",
            addClue: {
                id: "photo_clue",
                text: "Der Ex-Angestellte Richard Gaines hat angeblich Beweise im Licht des Leuchtturms versteckt"
            }
        }, {
            text: "Die Bibliothekarin nach ihrer Meinung zu den Blackwoods fragen",
            nextId: "ask_librarian_opinion"
        }]
    },

    // Nach Sandras Kontaktdaten fragen
    ask_sandra_contact: {
        text: "\"Könnte ich mit Ihrer Nichte Sandra sprechen?\" fragst du vorsichtig. \"Vielleicht weiß sie mehr über Richards Behauptungen.\"\n\nDie Bibliothekarin zögert und schaut sich erneut um. \"Sandra hat die Stadt verlassen, kurz nachdem Richard starb. Sie bekam Drohungen.\" Sie senkt die Stimme noch weiter. \"Aber sie hat mir etwas hinterlassen, für den Fall, dass jemand nachfragt.\"\n\nSie verschwindet kurz im Hinterzimmer und kehrt mit einem versiegelten Umschlag zurück. \"Sie sagte, ich solle ihn nur jemandem geben, der speziell nach Richard fragt. Das sind Sie seit sechs Jahren.\"\n\nDu öffnest den Umschlag und findest darin eine handgezeichnete Karte des Leuchtturms mit einer markierten Stelle in der Laterne sowie eine alte Ziffernfolge: 1-9-8-7.",
        choices: [{
            text: "Zum Leuchtturm fahren", nextId: "lighthouse", addClue: {
                id: "code", text: "Der Zahlencode 1987 - Jahr des Unfalls am Leuchtturm"
            }
        }, {
            text: "Die Bibliothekarin nach ihrer Meinung zu den Blackwoods fragen",
            nextId: "ask_librarian_opinion"
        }, {
            text: "Sie nach anderen seltsamen Vorfällen in Greystone fragen",
            nextId: "ask_strange_occurrences"
        }]
    },

    // Meinung der Bibliothekarin zu den Blackwoods
    ask_librarian_opinion: {
        text: "\"Was halten Sie persönlich von den Blackwoods?\" fragst du die Bibliothekarin leise.\n\nSie blickt sich um, bevor sie antwortet, als fürchte sie, belauscht zu werden. \"Diese Stadt gehört ihnen\", flüstert sie. \"Nicht nur die Gebäude und Unternehmen. Die Menschen auch.\"\n\nSie rückt ihre Brille zurecht. \"Ich bin seit 40 Jahren Bibliothekarin hier. Habe Harold Blackwood gekannt und jetzt seine Tochter Elena. Sie lächeln in der Öffentlichkeit, spenden für wohltätige Zwecke, aber...\" Sie schüttelt den Kopf.\n\n\"Die alte Mrs. Peterson hat einmal bei einer Stadtratssitzung gegen ein Blackwood-Projekt gestimmt. Am nächsten Tag war ihr Haus abgebrannt. Ein 'elektrischer Defekt'. Seitdem widerspricht niemand mehr.\"\n\nSie legt eine Hand auf deinen Arm. \"Seien Sie vorsichtig. Die Wände in Greystone haben Ohren.\"",
        choices: [{
            text: "Nach dem Leuchtturm und Frank Miller fragen", nextId: "ask_lighthouse_miller"
        }, {
            text: "Die Bibliothek verlassen und zum Leuchtturm fahren", nextId: "lighthouse"
        }, {
            text: "Nach sicheren Verbündeten in der Stadt fragen", nextId: "ask_about_allies"
        }]
    },

    // Tom kontaktiert einen Journalistenkollegen
    contact_journalist: {
        text: "\"Ich kenne einen Redakteur beim Boston Globe\", sagt Tom, während ihr auf der Autobahn Richtung Norden fahrt. \"Robert Jenkins. Wir haben zusammen studiert. Ihm können wir vertrauen.\"\n\nAn einer Raststätte hältst du an, und Tom nutzt eine Telefonzelle, um Jenkins anzurufen. Du beobachtest die Straße, um sicherzugehen, dass niemand euch verfolgt.\n\nTom kehrt mit einem erleichterten Lächeln zurück. \"Er trifft uns in zwei Stunden in einem Motel in Portsmouth. Er bringt ein Team mit.\"\n\nIm Motel angekommen, werdet ihr von Jenkins und zwei weiteren Journalisten begrüßt. Tom übergibt den USB-Stick und erklärt die Situation. Die Journalisten hören aufmerksam zu, machen Notizen und sichten die Beweise.\n\n\"Das ist eine Riesenstory\", sagt Jenkins schließlich. \"Umweltverschmutzung, Korruption, Mord - und alles durch eine der angesehensten Familien der Ostküste. Wir brauchen absolute Sicherheit, bevor wir das veröffentlichen.\"",
        choices: [{
            text: "Anbieten, nach Greystone zurückzukehren, um mehr Beweise zu sammeln",
            nextId: "offer_return_evidence"
        }, {
            text: "Auf sofortige Veröffentlichung mit den vorhandenen Beweisen drängen",
            nextId: "push_immediate_publication"
        }, {text: "Vorschlagen, das FBI einzuschalten", nextId: "suggest_fbi"}]
    },

    // Auf sofortige Veröffentlichung drängen
    push_immediate_publication: {
        text: "\"Die Beweise sind erdrückend\", beharrst du. \"Jeder Tag, den wir warten, gibt den Blackwoods mehr Zeit, Spuren zu verwischen und weitere Zeugen zum Schweigen zu bringen.\"\n\nTom nickt zustimmend. \"Die Tonaufnahme allein ist belastend genug. Elena Blackwood und Sheriff Malone diskutieren offen meine Beseitigung.\"\n\nJenkins und sein Team beraten sich kurz, dann nickt er. \"Wir veröffentlichen morgen früh eine erste Story online, gefolgt von einer größeren Reportage in der Sonntagsausgabe. Außerdem informieren wir befreundete Redakteure bei anderen Medien, damit die Geschichte nicht unterdrückt werden kann.\"\n\nIn den nächsten Tagen explodiert die Geschichte national. Das FBI übernimmt die Ermittlungen, und eine Sondereinheit stürmt das Blackwood-Anwesen. Elena Blackwood, Sheriff Malone und mehrere Staatsbeamte werden verhaftet.\n\nDu und Tom werdet als Whistleblower gefeiert, aber ihr wisst beide, dass ihr für einige Zeit untertauchen müsst. Die Blackwoods mögen gefallen sein, aber ihre Verbindungen reichen weit.",
        choices: [{
            text: "Ein neues Leben beginnen",
            nextId: "new_life"
        }, {
            text: "Ein Buch über die Ereignisse schreiben",
            nextId: "write_book"
        }, {text: "Weitere Korruptionsfälle aufdecken", nextId: "continue_investigations"}]
    },

    // Nach Greystone zurückkehren für mehr Beweise
    offer_return_evidence: {
        text: "\"Wir haben genug für einen ersten Artikel\", sagst du, \"aber ich könnte zurückgehen und mehr besorgen. Konkrete Beweise für die Verbindung zum Tod von Frank Miller zum Beispiel.\"\n\nTom schüttelt energisch den Kopf. \"Zu gefährlich. Sie wissen jetzt, dass wir entkommen sind.\"\n\n\"Ich habe Kontakte in Greystone\", erwiderst du. \"Martha würde helfen. Und ich könnte unauffällig bleiben.\"\n\nNach langer Diskussion wird ein Plan entwickelt. Du wirst zurückkehren, aber mit einer neuen Identität, während Tom mit den Journalisten an der Geschichte arbeitet. Jenkins gibt dir ein verschlüsseltes Handy für die Kommunikation.\n\n\"Drei Tage\", sagt er. \"Dann veröffentlichen wir, was wir haben.\"",
        sneak_rescue: {
            text: "Du schleichst dich langsam und vorsichtig die Kellertreppe hinab. Jede knarrende Stufe lässt dein Herz schneller schlagen. Unten angekommen, siehst du den Wächter, der mit dem Rücken zu dir steht und auf sein Telefon schaut.\n\nTom sitzt gefesselt auf einem Stuhl, sein Gesicht voller Blutergüsse. Seine Augen weiten sich, als er dich bemerkt, aber erstaunlicherweise verrät er dich nicht.\n\nDu greifst nach einem schweren Werkzeug, das auf einem Regal liegt, und näherst dich dem Wächter von hinten. Mit einem gezielten Schlag auf den Hinterkopf setzt du ihn außer Gefecht. Er sackt lautlos zu Boden.\n\n\"Alex!\" flüstert Tom heiser. \"Ich wusste, dass du kommen würdest. Aber wir müssen uns beeilen. Sie wollen mich morgen früh verschwinden lassen.\"",
            choices: [{
                text: "Toms Fesseln lösen und direkt fliehen",
                nextId: "quick_escape"
            }, {text: "Den Wächter fesseln und dann Tom befreien", nextId: "secure_guard"}, {
                text: "Tom fragen, was er über Projekt Tiefenleuchten herausgefunden hat",
                nextId: "ask_about_project"
            }]
        }
    },

    // Wächter anlocken
    lure_guard: {
        text: "Du entscheidest dich, den Wächter nach oben zu locken. Vorsichtig nimmst du eine kleine Vase von einem Regal und wirfst sie in einen anderen Raum. Das Klirren des zerbrechenden Porzellans hallt durch das leere Haus.\n\nKurz darauf hörst du fluchende Stimmen und Schritte auf der Treppe. \"Verdammte Ratten\", murmelt der Wächter, während er in den Raum tritt, aus dem das Geräusch kam.\n\nDu wartest hinter der Tür. Als er an dir vorbeigeht, springst du hervor und schlägst ihm mit einem schweren Kerzenständer auf den Hinterkopf. Er bricht bewusstlos zusammen.\n\nSchnell durchsuchst du seine Taschen und findest einen Pistole und einen Schlüsselbund. Mit pochendem Herzen machst du dich auf den Weg in den Keller.",
        choices: [{
            text: "Den Wächter fesseln, bevor du in den Keller gehst",
            nextId: "secure_guard"
        }, {
            text: "Sofort in den Keller gehen, um Tom zu befreien", nextId: "free_tom_after_fight"
        }, {
            text: "Die Waffe des Wächters nehmen und vorsichtig vorgehen",
            nextId: "take_guard_weapon"
        }]
    },

    // Den Wächter sichern
    secure_guard: {
        text: "Du findest ein Seil in einem Schrank und fesselst den bewusstlosen Wächter schnell und effizient. Mit einem Tuch knebelst du ihn, um sicherzustellen, dass er keinen Alarm schlagen kann, wenn er aufwacht.\n\nSeine Waffe steckst du in deinen Gürtel - man weiß nie, wann sie nützlich sein könnte. Ein kurzer Blick in seine Taschen fördert ein Mobiltelefon, einen Autoschlüssel und eine Brieftasche mit einer ID-Karte zutage. \"Jason Miller, Blackwood Security\" steht auf der Karte.\n\nMit dem Wächter außer Gefecht machst du dich auf den Weg in den Keller, um Tom zu befreien.",
        choices: [{text: "Tom befreien und sofort fliehen", nextId: "free_tom_escape"}, {
            text: "Tom befragen, was er über die Blackwoods herausgefunden hat",
            nextId: "ask_tom_blackwoods"
        }, {text: "Das Fischerhaus nach weiteren Beweisen durchsuchen", nextId: "search_house"}]
    },

    // Waffe des Wächters nehmen
    take_guard_weapon: {
        text: "Du durchsuchst schnell den bewusstlosen Wächter und findest eine 9mm-Pistole, ein Messer und ein Mobiltelefon. Die Waffe steckst du in deinen Gürtel, und das Messer nimmst du in die Hand, während du die Kellertreppe hinabsteigst.\n\nIm düsteren Licht des Kellers siehst du Tom, der an einen Stuhl gefesselt ist. Sein Gesicht ist geschwollen und blutig, aber seine Augen leuchten auf, als er dich sieht.\n\n\"Alex?\", flüstert er ungläubig. \"Wie hast du mich gefunden?\"\n\n\"Lange Geschichte\", erwiderst du, während du seine Fesseln durchschneidest. \"Kannst du laufen?\"\n\n\"Ich denke schon\", sagt er und reibt sich die wunden Handgelenke. \"Aber wir müssen vorsichtig sein. Elena Blackwood hat eine ganze Sicherheitsmannschaft, und sie werden bald merken, dass etwas nicht stimmt.\"",
        choices: [{
            text: "Direkt fliehen, solange der Weg frei ist",
            nextId: "direct_escape"
        }, {
            text: "Tom nach den wichtigsten Beweisen fragen",
            nextId: "ask_key_evidence"
        }, {text: "Einen Anruf mit dem Telefon des Wächters tätigen", nextId: "make_call"}]
    },

    // Tom befreien und fliehen
    free_tom_escape: {
        text: "Mit dem Messer schneidest du rasch Toms Fesseln durch. Er stöhnt vor Schmerz, als er versucht aufzustehen.\n\n\"Sie haben mich ziemlich übel zugerichtet\", sagt er mit einem schwachen Lächeln. \"Aber ich lebe noch, dank dir.\"\n\nDu hilfst ihm die Treppe hinauf, wobei er sich schwer auf deine Schulter stützt. Oben angekommen, wirfst du einen Blick aus dem Fenster, um sicherzugehen, dass kein weiteres Sicherheitspersonal in der Nähe ist.\n\n\"Wir müssen die Beweise sichern\", flüstert Tom dringlich. \"Ich habe alles dokumentiert - die Umweltverschmutzung, die Bestechung, die Morde. Es ist alles auf diesem USB-Stick.\" Er zieht einen kleinen Gegenstand aus seinem Schuh. \"Ich konnte ihn verstecken, bevor sie mich schnappten.\"",
        choices: [{
            text: "Zum Boot am alten Pier fliehen",
            nextId: "escape_to_boat",
            requireClue: "boat_key"
        }, {text: "Mit dem Auto des Wächters fliehen", nextId: "take_guard_car"}, {
            text: "Zu Martha zurückkehren, um einen sicheren Plan zu schmieden",
            nextId: "return_to_martha"
        }]
    },

    // Tom nach den Blackwoods befragen
    ask_tom_blackwoods: {
        text: "\"Tom, was genau hast du über die Blackwoods herausgefunden?\", fragst du, während du an seinen Fesseln arbeitest.\n\n\"Es ist größer, als ich dachte\", keucht er. \"Projekt Tiefenleuchten ist nur die Spitze des Eisbergs. Die Bohrplattformen sind real, aber sie sind nur ein Ablenkungsmanöver. Das eigentliche Geschäft ist Waffenschmuggel.\"\n\nTom hustet und fährt fort: \"Der Leuchtturm war ein Kontrollpunkt. Frank Miller entdeckte es 1987 und wollte zur Küstenwache gehen. Also haben sie ihn beseitigt und es als Unfall getarnt.\"\n\nEr greift nach deinem Arm. \"Alex, ich habe Beweise. Fotos, Dokumente, Aufnahmen. Alles ist auf einem USB-Stick im Leuchtturm versteckt. 'Der Schlüssel liegt im Licht' - das war mein Hinweis für dich.\"",
        choices: [{
            text: "Erwähnen, dass du den USB-Stick bereits gefunden hast",
            nextId: "mention_usb",
            requireClue: "usb"
        }, {
            text: "Fragen, wer noch in die Sache verwickelt ist",
            nextId: "ask_accomplices"
        }, {text: "Drängen, dass ihr sofort fliehen müsst", nextId: "urge_escape"}]
    },

    // Mit dem Boot fliehen
    escape_to_boat: {
        text: "\"Ich kenne einen Weg raus\", sagst du und zeigst Tom den Bootschlüssel. \"Martha hat mir einen Fluchtweg gezeigt.\"\n\nIhr schleicht durch das hohe Gras hinter dem Fischerhaus, wobei du Tom stützen musst. Der Weg zum alten Pier ist glücklicherweise nicht weit. Die salzige Meeresluft erfrischt eure Gesichter, während ihr euch dem Versteck nähert.\n\nWie Martha beschrieben hat, liegt ein kleines Motorboot versteckt hinter einer Sandbank. Mit zitternden Händen steckst du den Schlüssel ins Zündschloss. Der Motor springt beim ersten Versuch an.\n\n\"Wohin fahren wir?\", fragt Tom, während er sich auf eine der Bänke sinken lässt.\n\n\"Zur nächsten Großstadt. Dort gehen wir direkt zum FBI\", antwortest du, während du das Boot durch die dunklen Wellen lenkst. Hinter euch bleibt Greystone zurück, seine Lichter verblassen langsam am Horizont.",
        choices: [{text: "Zum FBI-Büro in der nächsten Stadt fahren", nextId: "ending_fbi"}, {
            text: "Kontakt zu einem befreundeten Journalisten aufnehmen",
            nextId: "contact_journalist"
        }, {
            text: "Einen Plan schmieden, um Elena Blackwood zur Rechenschaft zu ziehen",
            nextId: "plan_justice"
        }]
    },

    // Mit dem Auto des Wächters fliehen
    take_guard_car: {
        text: "\"Wir nehmen sein Auto\", sagst du und zeigst den Schlüssel, den du dem Wächter abgenommen hast. Tom nickt schwach.\n\nVorsichtig schleicht ihr zur Vorderseite des Hauses, wo ein schwarzer SUV parkt. Du hilfst Tom auf den Beifahrersitz und steigst dann selbst ein. Der Motor startet mit einem leisen Brummen.\n\n\"Sie werden uns verfolgen\", warnt Tom, während er sich den Sicherheitsgurt anlegt. \"Die Blackwoods haben überall in der Stadt Augen.\"\n\n\"Dann fahren wir nicht durch die Stadt\", erwiderst du. \"Martha erwähnte einen alten Forstweg, der direkt zum Highway führt.\"\n\nMit einem letzten Blick auf das verlassene Fischerhaus trittst du aufs Gaspedal. Der SUV schießt vorwärts, und bald verschwindet Hansen Bay in der Dunkelheit hinter euch.",
        choices: [{
            text: "Den Forstweg zum Highway nehmen",
            nextId: "forest_road"
        }, {
            text: "Unterwegs die Behörden anrufen",
            nextId: "call_police_car"
        }, {text: "Tom nach einem sicheren Versteck fragen", nextId: "ask_hideout"}]
    },

    // Den Forstweg nehmen
    forest_road: {
        text: "Du lenkst den SUV auf den kaum sichtbaren Waldweg, der sich zwischen dichten Bäumen hindurchschlängelt. Die Scheinwerfer kämpfen gegen die Dunkelheit an, während der Wagen über die unebene Strecke holpert.\n\n\"Woher wusstest du von diesem Weg?\", fragt Tom, der sich am Armaturenbrett festhält.\n\n\"Martha hat mir davon erzählt. Sie kennt jeden Winkel dieser Gegend.\"\n\nPlötzlich leuchten Scheinwerfer hinter euch auf. Ein Fahrzeug nähert sich mit hoher Geschwindigkeit.\n\n\"Sie haben uns gefunden\", sagt Tom mit angespannter Stimme.\n\nDu trittst das Gaspedal durch, und der SUV schießt vorwärts, während Äste an den Fenstern kratzen. Der Verfolger bleibt dran, kommt sogar näher.",
        choices: [{
            text: "Weiter beschleunigen und versuchen zu entkommen",
            nextId: "speed_escape"
        }, {
            text: "Einen Hinterhalt vorbereiten",
            nextId: "prepare_ambush"
        }, {text: "Vom Weg abweichen und im Wald verstecken", nextId: "hide_forest"}]
    },

    // Eine Verfolgungsjagd
    speed_escape: {
        text: "Du drückst das Gaspedal bis zum Anschlag durch. Der Motor heult auf, und der SUV schießt über den holprigen Waldweg. Ihr werdet in euren Sitzen durchgeschüttelt, während das Fahrzeug über Wurzeln und Steine holpert.\n\nDer Verfolger bleibt hartnäckig dran. Ein Scheinwerferpaar, das mal näher kommt, mal zurückfällt.\n\n\"Da vorne!\", ruft Tom plötzlich und zeigt nach vorn. Ein Lichtschein ist zu sehen - der Highway!\n\nMit letzter Kraft zwingst du den SUV den steilen Hang hinauf. Als ihr auf den Asphalt einbiegt, siehst du in deinem Rückspiegel, wie der Verfolger vergeblich versucht, den schlammigen Hang zu erklimmen. Sein Fahrzeug rutscht zurück.\n\n\"Wir haben es geschafft\", keucht Tom. \"Für den Moment zumindest.\"\n\nDu nickst grimmig und drückst aufs Gas. Die Lichter von Greystone verschwinden endgültig hinter euch.",
        choices: [{
            text: "Zur nächsten Polizeistation fahren",
            nextId: "drive_police_station"
        }, {
            text: "Ein Motel suchen, um sich zu verstecken und auszuruhen",
            nextId: "find_motel"
        }, {text: "Die Beweise durchgehen und einen Plan schmieden", nextId: "review_evidence"}]
    },

    // Zur Polizeistation fahren
    drive_police_station: {
        text: "Nach einer Stunde Fahrt erreicht ihr die Außenbezirke der nächsten größeren Stadt. Lichter von Straßenlaternen und Gebäuden ersetzen die bedrohliche Dunkelheit des Waldes.\n\n\"Wir können nicht zur lokalen Polizei\", sagt Tom schwach. \"Wir wissen nicht, wie weit der Einfluss der Blackwoods reicht.\"\n\n\"Dann fahren wir direkt zum FBI-Büro\", entscheidest du. \"Diese Sache ist zu groß für die lokale Polizei.\"\n\nIhr findet das Bundesgebäude im Zentrum der Stadt. Trotz der späten Stunde sind noch Lichter zu sehen. Mit den gesammelten Beweisen - dem USB-Stick, den Dokumenten und Toms Aussage - betretet ihr das Gebäude.\n\nEin Agent nimmt eure Geschichte ernst, besonders nachdem er einen kurzen Blick auf die Dokumente geworfen hat. Innerhalb von Stunden wird eine Task Force zusammengestellt.",
        choices: [{
            text: "Den Agenten alles erzählen",
            nextId: "ending_fbi"
        }, {text: "Nur die wichtigsten Beweise vorlegen", nextId: "selective_evidence"}, {
            text: "Darauf bestehen, unter Zeugenschutz gestellt zu werden",
            nextId: "witness_protection"
        }]
    },

    // FBI-Ende
    ending_fbi: {
        text: "Drei Wochen später sitzt du mit Tom auf einer Parkbank und beobachtest das Treiben in der Stadt. Die Narben in seinem Gesicht beginnen zu verblassen, aber die Erinnerungen werden bleiben.\n\n\"Hast du die Nachrichten gesehen?\", fragt er und reicht dir eine Zeitung. Die Schlagzeile lautet: \"GROSSRAZZIA IN GREYSTONE - ILLEGALES ÖLBOHR- UND SCHMUGGELRING ZERSCHLAGEN\".\n\nDarunter ein Foto von Elena Blackwood und Sheriff Malone in Handschellen, eskortiert von FBI-Agenten.\n\n\"Sie haben alle erwischt\", sagt Tom mit Genugtuung. \"Elena, Malone, die Sicherheitsleute, sogar einige korrupte Beamte in der Staatsregierung. Deine Aussage und die Beweise waren entscheidend.\"\n\nDu nickst langsam. \"Frank Miller hat endlich Gerechtigkeit bekommen. Und all die anderen auch.\"\n\nTom lächelt. \"Weißt du, ich denke, ich werde ein Buch darüber schreiben. 'Die Geheimnisse von Greystone'. Was meinst du?\"\n\nENDE: Gerechtigkeit siegt",
        choices: [{text: "Spiel neu starten", nextId: "start"}]
    },

    // Verhandlung mit den Blackwoods
    negotiate: {
        text: "\"Ich will nur meinen Freund zurück\", sagst du ruhig. \"Ich habe bereits gesehen, worum es geht - Projekt Tiefenleuchten, die manipulierten Umweltstudien, die Bestechungen. Aber das ist nicht mein Kampf.\"\n\nDu hältst Toms Laptop hoch. \"Hier sind alle Beweise. Bringen Sie mich zu Tom, lassen Sie uns beide gehen, und das bleibt unter uns.\"\n\nElena und der Sheriff tauschen Blicke aus.\n\n\"Woher sollen wir wissen, dass Sie keine Kopien haben?\" fragt Elena misstrauisch.\n\n\"Das wissen Sie nicht\", antwortest du. \"Aber wenn Tom und ich unbehelligt bleiben, gibt es keinen Grund, sie zu benutzen. Ansonsten gehen sie direkt an jede Nachrichtenagentur im Land.\"\n\nNach einer angespannten Pause nickt der Sheriff. \"Klug gespielt. Tom ist im alten Fischerhaus am Ende der Bucht. Wir begleiten Sie dorthin.\"\n\nStunden später sitzt du mit Tom in deinem Wagen, die Lichter von Greystone verblassen im Rückspiegel. Er ist erschöpft, aber lebend.\n\n\"Danke, Alex\", sagt er leise. \"Ich wusste, du würdest kommen.\"\n\nIhr beide habt überlebt, aber die dunklen Geheimnisse von Greystone bleiben verborgen, und die Blackwoods behalten ihre Macht. Zumindest für jetzt.\n\nENDE: Tom gerettet, Beweise aufgegeben",
        choices: [{text: "Spiel neu starten", nextId: "start"}]
    },

    // Kampf und Flucht
    fight_escape: {
        text: "Du reagierst blitzschnell, stößt eine schwere Aktenschublade um und rennst los, während der Sheriff und Elena überrascht zurückweichen. Ein Schuss hallt durch den Leuchtturm, verfehlt dich aber knapp.\n\nIn einer waghalsigen Flucht rennst du die Wendeltreppe hinauf statt hinunter. Oben angekommen, hast du einen kurzen Moment Zeit, bevor deine Verfolger dich erreichen. Du siehst ein schmales Fenster, das groß genug sein könnte...\n\nOhne zu zögern, klemmst du die Festplatte aus Toms Laptop unter deine Jacke, nimmst Anlauf und springst durch das Fenster. Das Glas zersplittert, und du landest hart auf einem Vorsprung der Klippe einige Meter unterhalb.\n\nBenommen, aber entschlossen kletterst du weiter abwärts, während über dir Rufe und ein weiterer Schuss zu hören sind. Du erreichst den Strand und rennst zu deinem Wagen.\n\nStunden später bist du auf der Autobahn, weit weg von Greystone. Die Beweise auf der Festplatte könnten die Blackwoods zu Fall bringen, aber du konntest Tom nicht retten. Seine Worte verfolgen dich: \"Komm nach Greystone, wenn du in drei Tagen nichts von mir hörst.\" Er hatte dir vertraut.\n\nENDE: Flucht mit Beweisen, aber ohne Tom",
        choices: [{text: "Spiel neu starten", nextId: "start"}]
    }, bluff: {
        text: "\"Sie sind zu spät\", sagst du mit überraschend ruhiger Stimme. \"Ich bin nicht so dumm, wie Sie denken. Ich habe alles bereits gesichert - Projekt Tiefenleuchten, die gefälschten Umweltgutachten, die Bestechungen, der Mord am Leuchtturmwärter 1987.\"\n\nElena erbleicht. \"Sie bluffen.\"\n\n\"Bin ich das?\" Du lächelst kalt. \"Die Dokumente wurden heute Morgen an drei verschiedene Anwälte geschickt, mit der Anweisung, sie zu veröffentlichen, falls Tom oder mir etwas zustößt. Also, wo ist er?\"\n\nElena und der Sheriff tauschen nervöse Blicke aus. Nach einem angespannten Moment senkt Malone langsam seine Waffe.\n\n\"Im Keller des alten Lagerhauses am Hafen\", gibt er widerwillig zu. \"Aber Sie verstehen nicht, was auf dem Spiel steht. Dieses Projekt würde Greystone retten, Arbeitsplätze schaffen...\"\n\n\"Auf Kosten von Menschenleben\", entgegnest du. \"Das ist vorbei.\"\n\nVierundzwanzig Stunden später ist Tom frei, die Beweise sind den Bundesbehörden übergeben, und die ersten Verhaftungen beginnen. Die Blackwood-Dynastie bricht zusammen, und die Stadt muss sich ihrer dunklen Vergangenheit stellen.\n\nTom schüttelt den Kopf, während ihr beide die Morgennachrichten verfolgt. \"Ich wusste, dass du kommen würdest, Alex. Aber ich hätte nie gedacht, dass wir es tatsächlich schaffen.\"\n\nENDE: Tom gerettet, Blackwoods entlarvt",
        choices: [{text: "Spiel neu starten", nextId: "start"}]
    },

    // Bibliotheksrecherche
    library: {
        text: "Die Stadtbibliothek von Greystone ist in einem alten viktorianischen Gebäude untergebracht. Innen riecht es nach altem Papier und Holzpolitur. Eine ältere Bibliothekarin mit Brille führt dich zum Archiv, nachdem du erklärt hast, dass du historische Recherchen zum Leuchtturm anstellst.\n\n\"Hier haben wir alle Ausgaben des 'Greystone Chronicle' auf Mikrofilm\", erklärt sie. \"Wenn Sie Hilfe brauchen, rufen Sie mich.\"\n\nDu suchst nach Berichten über den Unfall von 1987 und wirst schnell fündig. Die Titelseite vom 17. Oktober zeigt ein Foto des rauchenden Leuchtturms mit der Schlagzeile: \"TRAGÖDIE AM LEUCHTTURM - DREI TOTE BEI NÄCHTLICHEM FEUER\".\n\nDer Artikel beschreibt, wie Leuchtturmwärter Frank Miller und zwei Fischer bei einem \"tragischen Unfall\" starben, als ein Treibstoffleck Feuer fing. Interessanterweise wird Harold Blackwood als erster am Unfallort genannt.",
        choices: [{
            text: "Nach Artikeln über die Blackwood-Familie suchen", nextId: "research_blackwoods"
        }, {
            text: "Nach anderen Unfällen oder Todesfällen in Verbindung mit den Blackwoods suchen",
            nextId: "research_accidents"
        }, {text: "Die Bibliothekarin nach Frank Miller befragen", nextId: "ask_librarian"}]
    },

    // Recherche über die Blackwood-Familie
    research_blackwoods: {
        text: "Du verbringst Stunden damit, Artikel über die Blackwood-Familie zu durchforsten. Ein Muster beginnt sich abzuzeichnen: Wann immer jemand ihre Geschäftspraktiken in Frage stellte, verschwand die Person oder erlitt einen \"Unfall\".\n\n1976: Ein Umweltaktivist, der gegen Blackwoods Fischfabrik protestierte, ertrank bei einem \"Bootsunglück\".\n\n1987: Frank Miller und zwei Fischer starben bei dem \"Unfall\" am Leuchtturm.\n\n1995: Ein Lokalreporter, der über Korruption bei Stadtverträgen recherchierte, verließ \"plötzlich die Stadt\".\n\nBesonders interessant ist ein kleiner Artikel von 2018, in dem Elena Blackwood die neue Offshore-Initiative \"Projekt Tiefenleuchten\" ankündigt, die angeblich \"revolutionäre Meeresforschung\" betreiben soll.\n\nDaneben findest du Fotos von Spendenveranstaltungen, auf denen Sheriff Malone stets an der Seite der Blackwoods zu sehen ist.",
        choices: [{
            text: "Zum Leuchtturm zurückkehren mit dem neuen Wissen",
            nextId: "lighthouse_return"
        }, {
            text: "Versuchen, mehr über Projekt Tiefenleuchten herauszufinden",
            nextId: "research_deeplight"
        }, {
            text: "Die Wohltätigkeitsveranstaltung der Blackwoods besuchen",
            nextId: "blackwood_event"
        }]
    },

    // Besuch der Blackwood-Veranstaltung
    blackwood_event: {
        text: "Am Abend schlüpfst du in dein bestes Hemd und fährst zum Rathaus. Die Eingangshalle ist festlich geschmückt, und Greystones Elite ist versammelt, um Spenden für die \"Blackwood-Stiftung für Küstenschutz\" zu sammeln.\n\nNiemand hält dich auf, als du den Saal betrittst. Du nimmst ein Champagnerglas von einem Tablett und mischst dich unter die Gäste. Im Zentrum des Raumes steht eine elegante Frau mittleren Alters - Elena Blackwood, ohne Zweifel. Sie ist umgeben von wichtigen Persönlichkeiten der Stadt.\n\nAuf einer Leinwand laufen Präsentationen über Umweltschutzprojekte, darunter eine Darstellung mit dem Titel \"Projekt Tiefenleuchten: Forschung für eine nachhaltige Zukunft\".\n\nDu bemerkst Sheriff Malone, der am Rand steht und den Raum beobachtet. Sein Blick gleitet über die Menge, und für einen Moment begegnen sich eure Augen.\n\nPlötzlich hörst du Elena Blackwood, die eine Rede beginnt: \"Meine Damen und Herren, willkommen zu unserem jährlichen Benefizabend. Die Blackwood-Familie ist seit Generationen mit dem Meer und dieser Stadt verbunden...\"",
        choices: [{
            text: "Dich Elena Blackwood nähern und sie direkt ansprechen", nextId: "approach_elena"
        }, {text: "Den Sheriff beobachten und ihm später folgen", nextId: "follow_sheriff"}, {
            text: "Die Präsentation über 'Projekt Tiefenleuchten' genauer studieren",
            nextId: "study_presentation"
        }]
    }, plan_rescue: {
        text: "Du untersuchst vorsichtig deine Umgebung. Das alte Fischerhaus hat ein Fenster im Keller, das zum Meer hinausgeht. Es ist eng, aber ein schlanker Mann wie Tom könnte hindurchpassen. Du bemerkst außerdem ein Motorboot, das am Steg vor dem Haus festgemacht ist - vermutlich der Fluchtweg der Wachen.\n\nDu zählst die Stimmen und schätzt, dass zwei oder drei Personen bei Tom im Keller sind. Direkte Konfrontation wäre riskant.\n\nPlötzlich hörst du, wie jemand die Kellertreppe heraufkommt. Du hast nur wenige Sekunden, um zu handeln.",
        choices: [{
            text: "Verstecken und warten, bis du allein mit Tom bist",
            nextId: "hide_wait_chance"
        }, {
            text: "Das Boot sabotieren, um ihre Flucht zu verhindern",
            nextId: "sabotage_boat"
        }, {text: "Einen Ablenkung im oberen Stockwerk verursachen", nextId: "create_diversion"}]
    },

    // Sofortige Intervention
    immediate_intervention: {
        text: "Du entscheidest dich für sofortiges Handeln. Das Element der Überraschung könnte dein einziger Vorteil sein.\n\nMit pochendem Herzen stürmst du die Kellertreppe hinunter. Im schwach beleuchteten Raum siehst du Tom, gefesselt an einen Stuhl, sein Gesicht voller Blutergüsse. Sheriff Malone und ein kräftiger Mann in schwarzem Anzug drehen sich überrascht zu dir um.\n\n\"Was zum Teufel-\" Der Sheriff greift nach seiner Waffe, aber du bist schneller.\n\nDu schlägst ihm mit voller Wucht ins Gesicht, und er taumelt rückwärts. Der Mann im Anzug zieht ebenfalls eine Waffe. Es ist eine gefährliche Situation, und du bist zahlenmäßig unterlegen.",
        choices: [{text: "Weiterkämpfen und versuchen, Tom zu befreien", nextId: "fight_for_tom"}, {
            text: "Die Waffe benutzen, falls du eine hast", nextId: "use_gun", requireClue: "gun"
        }, {text: "Tom zurufen, dass du Hilfe holst, und fliehen", nextId: "promise_return"}]
    },

    // Sich verstecken und auf eine Chance warten
    hide_wait_chance: {
        text: "Du versteckst dich hinter einer alten Kommode im Erdgeschoss, während die Schritte näher kommen. Sheriff Malone und ein großer Mann in einem schwarzen Anzug steigen die Treppe hoch.\n\n\"Ich muss zurück in die Stadt\", sagt der Sheriff. \"Die Wohltätigkeitsveranstaltung fängt bald an, und Elena erwartet mich dort.\"\n\n\"Keine Sorge\", antwortet der Mann. \"Ich bleibe hier und passe auf unseren Gast auf. Jenkins kommt um sechs Uhr morgen früh.\"\n\nDu hörst, wie die Vordertür auf- und zugeht, gefolgt vom Motorengeräusch eines Autos, das wegfährt. Jetzt ist nur noch ein Wächter bei Tom. Das verbessert deine Chancen erheblich.",
        choices: [{
            text: "Warten, bis der Wächter nach oben kommt, und ihn überwältigen",
            nextId: "ambush_guard"
        }, {
            text: "In den Keller schleichen und versuchen, Tom heimlich zu befreien",
            nextId: "sneak_rescue"
        }, {
            text: "Ein Geräusch machen, um den Wächter nach oben zu locken", nextId: "lure_guard"
        }]
    },

    // Den Wächter überwältigen
    ambush_guard: {
        text: "Du positionierst dich neben der Tür und wartest geduldig. Nach etwa zwanzig Minuten hörst du schwere Schritte auf der Kellertreppe. Der Wächter kommt nach oben, vermutlich um eine Runde zu drehen oder sich etwas zu trinken zu holen.\n\nAls er durch die Tür tritt, schlägst du mit aller Kraft zu. Der Überraschungsangriff trifft ihn am Kinn, aber er ist groß und stark. Er taumelt zurück, zieht seine Waffe.\n\nIn einem verzweifelten Manöver stürzt du dich auf ihn, bevor er zielen kann. Ihr beide fallt zu Boden, die Waffe gleitet über die Dielen. Ein heftiger Kampf entbrennt. Er ist stärker, aber du kämpfst um dein Leben - und um Toms.\n\nSchließlich gelingt es dir, ihn mit einer schweren Vase niederzuschlagen. Keuchend und mit schmerzenden Rippen stehst du auf.",
        choices: [{text: "Den Wächter fesseln und knebeln", nextId: "secure_guard"}, {
            text: "Sofort in den Keller gehen, um Tom zu befreien", nextId: "free_tom_after_fight"
        }, {
            text: "Nach der Waffe des Wächters suchen", nextId: "take_guard_weapon"
        }]
    },

    // Heimliche Rettung
    sneak_rescue: {
        text: "Du schleichst dich langsam und vorsichtig die Kellertreppe hinab. Jede knarrende Stufe lässt dein Herz schneller schlagen. Unten angekommen, siehst du den Wächter, der mit dem Rücken zu dir steht und auf sein Telefon schaut.\n\nTom sitzt gefesselt auf einem Stuhl, sein Gesicht voller Blutergüsse. Seine Augen weiten sich, als er dich bemerkt, aber erstaunlicherweise verrät er dich nicht.\n\nDu greifst nach einem schweren Werkzeug, das Vortäuschen eines Touristen.",
        tourist_lie: {
            text: "\"Oh, entschuldigen Sie\", sagst du mit überraschter Stimme. \"Ich bin nur ein Tourist. Die Tür stand offen, und ich dachte, man könnte den Leuchtturm besichtigen. Steht der unter Denkmalschutz?\"\n\nDer Sheriff verengt seine Augen. \"Der Leuchtturm ist seit Jahren gesperrt. Haben Sie das Schild nicht gesehen?\"\n\n\"Nein, tut mir leid. Ich... ich interessiere mich für alte Gebäude und wollte nur ein paar Fotos machen für meinen Blog über historische Leuchttürme.\"\n\nDer Sheriff scheint unentschlossen. Er mustert dich von oben bis unten, seine Hand noch immer am Holster. \n\n\"Zeigen Sie mal Ihren Ausweis.\"\n\nLangsam reichst du ihm deinen Führerschein. Er studiert ihn sorgfältig.\n\n\"Alex Carver\", liest er laut vor. \"Aus Boston.\" Er gibt dir den Ausweis zurück, aber sein Blick bleibt misstrauisch. \"Sie sollten wissen, dass das hier Privateigentum der Blackwood-Familie ist. Unbefugtes Betreten ist strafbar.\"\n\nEr greift nach seinem Funkgerät. \"Ich werde Sie jetzt zum Ausgang begleiten, und dann verlassen Sie Greystone. Verstanden?\"",
            choices: [{
                text: "Einverstanden sein und mit dem Sheriff gehen",
                nextId: "sheriff_escort"
            }, {
                text: "Schnell fliehen, sobald sich eine Gelegenheit bietet",
                nextId: "escape_sheriff"
            }, {
                text: "Die Wahrheit gestehen - du suchst deinen Freund Tom",
                nextId: "confront_truth"
            }]
        },

        // Die Wahrheit sagen - Du suchst Tom
        confront_truth: {
            text: "\"Ich suche nach meinem Freund Tom Harrow\", sagst du direkt. \"Er ist verschwunden, und ich habe Grund zur Annahme, dass ihm etwas zugestoßen ist.\"\n\nDer Sheriff erstarrt kurz, dann lacht er leise. \"Tom Harrow, der Journalist?\" Er schüttelt den Kopf. \"Der hat die Stadt vor einer Woche verlassen. Etwas über einen neuen Job in der Großstadt. Nichts Ungewöhnliches.\"\n\nDu bemerkst, wie seine Augen dich genau beobachten, während er spricht. \"Aber da Sie ein Freund sind - warum hat er Ihnen das nicht gesagt?\"\n\nElena Blackwood, die bisher geschwiegen hat, mischt sich ein. \"Sheriff, vielleicht sollten wir Mr. Carver in mein Büro einladen. Er scheint wirklich besorgt zu sein.\" Ihr Lächeln erreicht ihre Augen nicht. \"Wir können ihm sicher helfen, seinen Freund zu finden.\"",
            choices: [{
                text: "Die Einladung annehmen und mit Elena Blackwood gehen",
                nextId: "blackwood_office"
            }, {
                text: "Ablehnen und darauf bestehen, dass du selbst weitersuchen wirst",
                nextId: "refuse_blackwood"
            }, {
                text: "Fragen, warum Tom einen geheimen Raum im Leuchtturm eingerichtet hat",
                nextId: "question_secret_room"
            }]
        }
    },

    // Nach dem Grund der Einlieferung fragen
    admission_reason: {
        text: "Prof. Freystatt wirkt zunehmend unwohl. 'Patient 67 wurde nach einem... nennen wir es einen Nervenzusammenbruch eingeliefert. Er begann, Verschwörungstheorien über unsere Klinik zu entwickeln.' Er räuspert sich. 'Tragischerweise glaubte er, früher hier gearbeitet zu haben. Ein klassischer Fall falscher Erinnerungen. Wie dem auch sei...' Er steht abrupt auf. 'Er beschuldigte uns, Bewusstseinsmanipulation zu betreiben. Lächerlich natürlich, aber in seinem Zustand gefährlich.' Das unangenehme Gefühl verstärkt sich, dass Freystatt dir wichtige Informationen vorenthält.",
        choices: [{
            text: "Fragen, was genau Patient 67 über Bewusstseinsmanipulation behauptete",
            nextId: "manipulation_claims"
        }, {
            text: "Nach Dr. Bleich suchen", nextId: "find_sheehan"
        }, {
            text: "Zum Quartier gehen und die Akte studieren", nextId: "examine_file", addClue: {
                id: "manipulation_accusation",
                text: "Patient 67 beschuldigte die Klinik, Bewusstseinsmanipulation zu betreiben, bevor er verschwand."
            }
        }]
    },

    // Welche Manipulationsbehauptungen stellte Patient 67 auf
    manipulation_claims: {
        text: "Freystatt seufzt schwer. 'Wenn Sie darauf bestehen... Patient 67 behauptete, wir würden hier ein Projekt namens JANUS durchführen - angeblich ein Experiment zur Identitätsmanipulation.' Seine Stimme wird leiser. 'Er behauptete, wir würden selektive Amnesie erzeugen und neue Erinnerungen implantieren. Sogar ganze Identitäten neu erschaffen.' Ein nervöses Lachen. 'Völlig absurd natürlich. Seine Wahnvorstellungen wurden mit der Zeit immer ausufernder. Er behauptete sogar, selbst daran mitgearbeitet zu haben, bevor er zum Patienten wurde.' Freystatt greift nach seiner Wasserflasche, seine Hand zittert leicht. 'Paranoia ist eine mächtige Kraft, Marshal.'",
        choices: [{
            text: "Nach Dr. Bleich fragen", nextId: "find_sheehan"
        }, {
            text: "Fragen, ob es einen Zusammenhang mit dem Ostflügel gibt",
            nextId: "ask_east_wing_connection",
            addClue: {
                id: "project_janus_claim",
                text: "Patient 67 behauptete, dass in der Klinik ein Projekt namens JANUS zur Identitätsmanipulation durchgeführt wird."
            }
        }, {
            text: "Das Gespräch beenden und eigene Nachforschungen anstellen",
            nextId: "examine_file"
        }]
    },

    // Nach Verbindung zum Ostflügel fragen
    ask_east_wing_connection: {
        text: "Freystatts Gesicht verfinstert sich. 'Der Ostflügel?', wiederholt er langsam. 'Dort finden experimentelle Therapien statt, jawohl. Aber nichts... Irreguläres.' Er steht auf und geht zum Fenster. 'Patient 67 fixierte sich auf diesen Bereich. Behauptete, dort würden die... Behandlungen stattfinden.' Er dreht sich um. 'Hören Sie, Marshal, ich muss warnen: Diese Wahnvorstellungen können ansteckend wirken. Selbst rationale Menschen beginnen zu zweifeln, wenn sie oft genug mit Überzeugung vorgetragen werden.' Er schaut auf seine Uhr. 'Es wird spät. Wir sollten morgen weitersprechen. Sheriff Wilson wird Sie zu Ihrem Quartier bringen.'",
        choices: [{
            text: "Das Gespräch beenden, aber planen, den Ostflügel zu untersuchen",
            nextId: "plan_east_wing_investigation",
            addClue: {
                id: "director_defensive",
                text: "Prof. Freystatt reagiert auffällig defensiv auf Fragen zum Ostflügel und versucht, das Gespräch zu beenden."
            }
        }, {
            text: "Auf weitere Informationen bestehen", nextId: "insist_information"
        }, {
            text: "Nach anderen Personen fragen, die mit Patient 67 Kontakt hatten",
            nextId: "patient_contacts"
        }]
    },

    // Ostflügel-Untersuchung planen
    plan_east_wing_investigation: {
        text: "Du gehst mit Sheriff Wilson zu deinem Quartier, doch deine Gedanken kreisen um den Ostflügel und Freystatts verdächtige Reaktion. In deinem Zimmer angekommen, wartest du, bis Wilson gegangen ist, und beginnst zu planen. Der Ostflügel scheint der Schlüssel zu sein. Du skizzierst einen groben Plan der Klinik anhand dessen, was du bisher gesehen hast, und markierst mögliche Zugangspunkte. Ein leises Klopfen an deiner Tür unterbricht dich. Vorsichtig öffnest du. Ein alter Reinigungsmitarbeiter steht dort, nervös den Gang beobachtend. 'Sie suchen nach der Wahrheit', flüstert er. 'Ostflügel, Wartungseingang, 23 Uhr. Sicherheit macht Pause.' Bevor du antworten kannst, huscht er davon.",
        choices: [{
            text: "Den Hinweis befolgen und zum Wartungseingang gehen",
            nextId: "maintenance_entrance",
            addClue: {
                id: "maintenance_tip",
                text: "Ein Mitarbeiter gab dir den geheimen Hinweis, dass der Wartungseingang zum Ostflügel um 23 Uhr unbewacht ist."
            }
        }, {
            text: "Zunächst die Akte studieren", nextId: "examine_file"
        }, {
            text: "Dr. Bleich aufsuchen, bevor du den Ostflügel erkundest", nextId: "find_sheehan"
        }]
    },

    // Wartungseingang zum Ostflügel
    maintenance_entrance: {
        text: "Um 23 Uhr schleichst du dich zum Wartungseingang des Ostflügels. Wie der alte Mitarbeiter sagte, ist der Bereich unbewacht. Eine verrostete Metalltür steht einen Spalt offen. Du gleitest hindurch und findest dich in einem schmalen Versorgungskorridor wieder. Rohre verlaufen an der Decke, und der Geruch von Desinfektionsmitteln liegt in der Luft. Du folgst dem Gang, bis du an eine Abzweigung kommst. Links führt eine Treppe nach unten mit einem Schild 'Labor - Nur autorisiertes Personal'. Rechts führt ein Gang zu einer Tür mit der Aufschrift 'Behandlungsräume'. Aus dieser Richtung sind gedämpfte Stimmen zu hören.",
        choices: [{
            text: "Die Treppe zum Labor hinuntergehen", nextId: "descend_lab", addClue: {
                id: "east_wing_access",
                text: "Du hast heimlich Zugang zum Ostflügel erlangt und einen Weg zum Labor und zu den Behandlungsräumen gefunden."
            }
        }, {
            text: "Den Gang zu den Behandlungsräumen folgen", nextId: "treatment_rooms"
        }, {
            text: "Zurückgehen und Dr. Bleich aufsuchen", nextId: "find_sheehan"
        }]
    },

    // Weg zum Labor
    descend_lab: {
        text: "Du entscheidest dich für die Treppe nach unten. Mit jedem Schritt wird das Licht kühler, klinischer. Im Keller angekommen, findest du einen langen, hell erleuchteten Korridor mit mehreren Labortüren. Durch ein Glasfenster siehst du moderne Ausrüstung, Computer, chemische Apparaturen. Ein Labor ist noch beleuchtet. Vorsichtig näherst du dich und spähst hinein. Dr. Jenkins – du erkennst ihn von einem Foto in der Eingangshalle – arbeitet an einem Computer. Auf einem Bildschirm siehst du eine molekulare Struktur mit der Bezeichnung 'RX-78 Modifikation'. Auf einem Tisch liegen Akten mit der Aufschrift 'JANUS - Fortschrittsbericht'. Plötzlich steht Jenkins auf und kommt zur Tür.",
        choices: [{
            text: "Schnell verstecken", nextId: "hide_from_jenkins", addClue: {
                id: "janus_lab_seen",
                text: "Du hast Dr. Jenkins bei der Arbeit an einer Substanz namens 'RX-78' für Projekt JANUS beobachtet."
            }
        }, {
            text: "Vorgeben, offiziell hier zu sein", nextId: "pretend_official"
        }, {
            text: "Eine andere Tür öffnen und hineinschlüpfen", nextId: "enter_other_lab"
        }]
    },

    // Verstecken vor Jenkins
    hide_from_jenkins: {
        text: "Gerade noch rechtzeitig duckst du dich hinter einen Rollwagen mit Laborgeräten. Jenkins verlässt den Raum und geht den Korridor hinunter, ohne dich zu bemerken. Als seine Schritte verhallt sind, schleichst du ins Labor. Der Computer ist noch eingeschaltet, aber passwortgeschützt. Die Akten auf dem Tisch enthalten komplexe chemische Formeln und Versuchsprotokolle. Ein Eintrag fällt dir ins Auge: 'Subjekt A.L. zeigt unerwartete Resistenz gegen RX-78. Möglicherweise aufgrund seiner Beteiligung an der Frühentwicklung. Korrigierte Dosierung vorbereitet.' Ein Foto ist beigefügt – es zeigt dich in Laborkittel neben Wilson und Jenkins. Dein Herz beginnt zu rasen. 'A.L.' – könnten das deine Initialen sein?",
        choices: [{
            text: "Das Foto und einige Dokumente mitnehmen", nextId: "take_lab_evidence", addClue: {
                id: "subject_al_you",
                text: "In Jenkins' Labor hast du Hinweise gefunden, dass 'Subjekt A.L.' du selbst sein könntest und dass du gegen die Gedächtnismanipulation resistent bist."
            }
        }, {
            text: "Versuchen, den Computer zu entsperren", nextId: "hack_computer"
        }, {
            text: "Das Labor durchsuchen, bevor Jenkins zurückkommt", nextId: "search_lab_quickly"
        }]
    },

    // Beweise aus dem Labor mitnehmen
    take_lab_evidence: {
        text: "Mit zitternden Händen steckst du das Foto und einige der kritischsten Dokumente ein. Ein Versuchsprotokoll beschreibt detailliert, wie RX-78 verwendet wird, um selektive Amnesie zu erzeugen und dann neue Erinnerungen zu implantieren. Die Liste der 'Erfolgreichen Konversionen' enthält mehrere Namen, darunter 'A.L. (teilweise) - laufendes Experiment'. Plötzlich hörst du Stimmen im Korridor. Jenkins kehrt zurück, und er ist nicht allein. Du hörst Freystatts Stimme: '...muss stärker dosiert werden. Der Marshal stellt zu viele Fragen. Die Konditionierung bricht zusammen.' Hastig suchst du nach einem Ausweg. Eine Tür an der Rückseite des Labors führt zu einem weiteren Korridor. Du schlüpfst hindurch, Sekunden bevor die Wissenschaftler den Raum betreten.",
        choices: [{
            text: "Den unbekannten Korridor erkunden", nextId: "explore_back_corridor", addClue: {
                id: "conditioning_breakdown",
                text: "Prof. Freystatt und Dr. Jenkins planen, deine 'Dosierung' zu erhöhen, da deine 'Konditionierung' zusammenbricht."
            }
        }, {
            text: "Lauschen, was Jenkins und Freystatt besprechen", nextId: "eavesdrop_scientists"
        }, {
            text: "Schnell zum Ausgang und zu deinem Quartier zurückkehren",
            nextId: "retreat_quarter"
        }]
    },

    // Korridorerkundung
    explore_back_corridor: {
        text: "Der Korridor führt tiefer in einen Bereich, der noch moderner und klinischer wirkt. Du passierst mehrere Türen mit kleinen Sichtfenstern. Dahinter siehst du Patienten, die in Betten liegen, an Monitore angeschlossen. In einem Raum beobachtest du, wie ein Patient mit leerem Blick auf einen Bildschirm starrt, während eine Stimme wiederholt: 'Du bist John Miller. Du warst immer John Miller.' Ein kalter Schauer läuft dir über den Rücken. Am Ende des Ganges findest du eine Tür mit der Aufschrift 'Archiv - Strengster Geheimhaltung'. Sie ist mit einem Kartenlesegerät gesichert, aber jemand hat einen Keil in die Tür gesteckt, sodass sie nicht vollständig schließt.",
        choices: [{
            text: "Das Archiv betreten", nextId: "enter_archive", addClue: {
                id: "reconditioning_observed",
                text: "Du hast beobachtet, wie Patienten aktiv neue Identitäten implantiert bekommen durch audiovisuelle Programmierung."
            }
        }, {
            text: "Einen der Behandlungsräume genauer untersuchen", nextId: "check_treatment_room"
        }, {
            text: "Den Weg zurückverfolgen und die Klinik verlassen", nextId: "retrace_steps"
        }]
    },

    // Archiv betreten
    enter_archive: {
        text: "Du schlüpfst durch die angekeilte Tür ins Archiv. Der Raum ist groß, mit hohen Regalen voller Akten und einem zentralen Computerterminal. Du beginnst, die Aktenbezeichnungen zu scannen: 'JANUS - Phase 1', 'JANUS - Fehlgeschlagene Subjekte', 'JANUS - Militärverträge'. Dein Blick fällt auf einen Ordner mit der Aufschrift 'Laeddis, A. / Patient 67-B'. Mit klopfendem Herzen öffnest du ihn. Er enthält zwei Akten: Eine über 'Dr. Andrew Laeddis', mit deinem Foto, Lebenslauf eines brillanten Psychiaters und Neurowissenschaftlers. Die zweite über 'Edward Wilson, Patient 67', ebenfalls mit Foto – den Mann, den du als 'verschwundenen Patienten' suchen sollst. Ein handschriftlicher Vermerk verbindet beide: 'Ursprüngliche JANUS-Entwickler. Beide kompromittiert.'",
        choices: [{
            text: "Die Akten mitnehmen und das Archiv verlassen",
            nextId: "take_files_leave",
            addClue: {
                id: "dual_identity",
                text: "Archivunterlagen bestätigen, dass du Dr. Andrew Laeddis bist und dass Wilson (Patient 67) und du die ursprünglichen Entwickler von Projekt JANUS wart."
            }
        }, {
            text: "Nach weiteren Informationen über dich selbst suchen", nextId: "search_self_info"
        }, {
            text: "Den Computer benutzen, um mehr Daten abzurufen", nextId: "use_archive_computer"
        }]
    },

    // Die Akten mitnehmen und fliehen
    take_files_leave: {
        text: "Du steckst beide Akten ein und bereitest dich vor, das Archiv zu verlassen. In diesem Moment hörst du, wie sich die Archivtür vollständig öffnet – jemand hat den Keil entfernt. Schnell duckst du dich hinter ein Regal. Schwester Rachel und Dr. Jenkins betreten den Raum. 'Die Konditionierung versagt schneller als erwartet', sagt Jenkins angespannt. 'Er erinnert sich an Fragmente. Wir müssen den Notfallplan aktivieren.' Rachel nickt. 'Was ist mit Wilson? Er ist immer noch irgendwo auf der Insel.' Jenkins' Stimme wird hart. 'Finden Sie ihn. Er ist der Einzige, der das Gegenmittel herstellen kann. Laeddis' Zustand beweist, dass es funktioniert.' Sie gehen zum Computer, mit dem Rücken zu dir. Dies ist deine Chance zu entkommen.",
        choices: [{
            text: "Leise zur Tür schleichen und fliehen", nextId: "sneak_out_archive", addClue: {
                id: "emergency_plan",
                text: "Jenkins und Rachel planen, einen 'Notfallplan' zu aktivieren, da deine Konditionierung versagt. Wilson hat ein Gegenmittel entwickelt."
            }
        }, {
            text: "Weiteres Gespräch belauschen", nextId: "listen_more"
        }, {
            text: "Dich zu erkennen geben und sie konfrontieren", nextId: "confront_archive"
        }]
    },

    // Aus dem Archiv schleichen
    sneak_out_archive: {
        text: "Du nutzt den Moment und schleichst leise zur Tür, während Jenkins und Rachel mit dem Computer beschäftigt sind. Gerade als du den Korridor erreichst, hörst du Rachel rufen: 'Die Laeddis-Akte fehlt!' Adrenalin durchströmt dich, als du den Gang hinunterrennst. Alarmsirenen beginnen zu heulen. Über Lautsprecher ertönt eine Durchsage: 'Sicherheitsalarm. Alle Ausgänge sperren. Sicherheitspersonal zu Sektor C.' Du biegst in einen Seitengang, um den näherkommenden Schritten auszuweichen. Eine Hand greift plötzlich nach dir und zieht dich in einen dunklen Raum. Du willst schreien, aber eine Hand bedeckt deinen Mund. 'Ruhig, Andrew', flüstert eine Stimme. 'Ich bin hier, um dir zu helfen.' Als sich deine Augen an die Dunkelheit gewöhnen, erkennst du Dr. Bleich.",
        choices: [{
            text: "Dr. Bleich fragen, woher er wusste, dass du hier bist",
            nextId: "question_bleich_knowledge",
            addClue: {
                id: "security_alert_archive",
                text: "Ein Sicherheitsalarm wurde ausgelöst, als Rachel bemerkte, dass die Laeddis-Akte fehlt. Dr. Bleich hat dich gefunden."
            }
        }, {
            text: "Ihm die gefundenen Akten zeigen", nextId: "show_files_bleich"
        }, {
            text: "Nach einem Fluchtweg fragen", nextId: "ask_escape_route"
        }]
    },

    // Dr. Bleich fragen (Verbindung zum Haupthandlungsstrang)
    question_bleich_knowledge: {
        text: "Als der Alarm durch die Gänge hallt, starrst du Dr. Bleich ungläubig an. 'Woher wussten Sie, dass ich hier bin? Wer sind Sie wirklich?' Bleich zieht dich tiefer in den schattigen Raum. 'Ich beobachte dich seit deiner Ankunft, Andrew. Oder sollte ich sagen, seit sie dich als 'Marshal' zurückgebracht haben.' Er sieht sich nervös um. 'Ich arbeite schon lange mit Wilson zusammen, im Geheimen. Wir haben versucht, JANUS zu stoppen, nachdem klar wurde, wozu Jenkins es nutzen will.' Er greift in seine Tasche und zieht eine kleine Flasche hervor. 'Dies ist eine verdünnte Version des Gegenmittels, das Wilson entwickelt hat. Es wird nicht alle Blockaden lösen, aber genug, damit du verstehst.' Er drückt dir die Flasche in die Hand. 'Wir müssen dich zum Leuchtturm bringen. Wilson wartet dort.'",
        choices: [{
            text: "Das verdünnte Gegenmittel nehmen", nextId: "take_diluted_antidote"
        }, {
            text: "Mehr über deine wahre Identität erfahren wollen", nextId: "ask_true_identity"
        }, {
            text: "Nach einem sicheren Weg zum Leuchtturm fragen", nextId: "ask_lighthouse_route"
        }]
    },

    // Nach einem Weg zum Leuchtturm fragen
    ask_lighthouse_route: {
        text: "Während der Alarm weiter ertönt, fragst du Dr. Bleich nach dem sichersten Weg zum Leuchtturm. Er nickt anerkennend. 'Der Hauptweg wird bewacht sein. Aber es gibt einen alten Pfad durch den Wald, den nur wenige kennen.' Er zeichnet hastig eine Karte. 'Folge dem Wartungsausgang hinter der Wäscherei. Der Pfad ist überwuchert, aber passierbar. Er führt zur Nordküste, etwa einen Kilometer vom Leuchtturm entfernt.' Er schaut auf seine Uhr. 'Ich werde eine Ablenkung schaffen. In fünf Minuten löse ich einen Feueralarm im Westflügel aus. Dann rennst du los.' Er drückt dir einen Schlüssel in die Hand. 'Hiermit kommst du durch die Hintertür der Wäscherei. Und Andrew...' Er sieht dich eindringlich an. 'Vertraue deinen zurückkehrenden Erinnerungen. Sie sind real.'",
        choices: [{
            text: "Dr. Bleich für seine Hilfe danken und dich bereit machen",
            nextId: "thank_bleich_prepare",
            addClue: {
                id: "lighthouse_route",
                text: "Dr. Bleich hat dir einen versteckten Pfad zum Leuchtturm beschrieben und wird einen Feueralarm auslösen, damit du fliehen kannst."
            }
        }, {
            text: "Das verdünnte Gegenmittel vor der Flucht nehmen", nextId: "take_diluted_antidote"
        }, {
            text: "Fragen, warum Wilson im Leuchtturm ist", nextId: "ask_wilson_lighthouse"
        }]
    },

    // Warum ist Wilson im Leuchtturm?
    ask_wilson_lighthouse: {
        text: "'Warum versteckt sich Wilson ausgerechnet im Leuchtturm?', fragst du. Bleich senkt die Stimme weiter. 'Er wusste, dass sie bald die volle Kontrolle über die Klinik haben würden. Der Leuchtturm gehört nicht zum Klinikgelände. Er wird vom Festland aus verwaltet.' Er schaut nervös zur Tür. 'Wilson hat dort ein provisorisches Labor eingerichtet. Er arbeitet an einer verbesserten Version des Gegenmittels.' Ein bitteres Lächeln. 'Außerdem hat der Leuchtturm symbolische Bedeutung für euch beide. Dort habt ihr zum ersten Mal über JANUS gesprochen, vor all dem.' Er greift nach einem Funkgerät an seinem Gürtel. 'Ich muss jetzt den Alarm auslösen. Bist du bereit?' Die Sirenen heulen noch immer, Schritte nähern sich eurem Versteck.",
        choices: [{
            text: "Bestätigen, dass du bereit bist, und dich auf die Flucht vorbereiten",
            nextId: "ready_to_escape",
            addClue: {
                id: "wilson_lighthouse_lab",
                text: "Wilson hat im Leuchtturm ein provisorisches Labor eingerichtet und arbeitet an einer verbesserten Version des Gegenmittels für RX-78."
            }
        }, {
            text: "Das verdünnte Gegenmittel schnell nehmen", nextId: "take_diluted_antidote"
        }, {
            text: "Fragen, was passiert, wenn Bleich erwischt wird", nextId: "ask_if_caught"
        }]
    },

    // Bereit zur Flucht
    ready_to_escape: {
        text: "Du nickst entschlossen. 'Ich bin bereit.' Dr. Bleich drückt den Alarmknopf an seinem Funkgerät. Sekunden später ertönt ein neuer, schrillerer Alarm. 'Feueralarm im Westflügel. Alle verfügbaren Sicherheitskräfte zum Westflügel', dröhnt es durch die Lautsprecher. 'Jetzt!', zischt Bleich und öffnet vorsichtig die Tür. Der Korridor ist momentan leer, während Sicherheitspersonal in die entgegengesetzte Richtung eilt. 'Folge dem Gang nach links, dann die Treppe hinunter zur Wäscherei. Und Andrew...' Er drückt deine Schulter. 'Was auch immer passiert, vergiss nicht, wer du wirklich bist.' Mit diesen Worten schiebt er dich hinaus und verschwindet selbst in die andere Richtung.",
        choices: [{
            text: "Den Anweisungen folgen und zur Wäscherei eilen",
            nextId: "head_to_laundry",
            addClue: {
                id: "bleich_diversion",
                text: "Dr. Bleich hat einen Feueralarm ausgelöst, um dir die Flucht zu ermöglichen, während er selbst eine andere Richtung einschlägt."
            }
        }, {
            text: "Das verdünnte Gegenmittel schnell trinken, bevor du losrennst",
            nextId: "take_diluted_antidote"
        }, {
            text: "Versuchen, Dr. Bleich zu folgen und ihm zu helfen", nextId: "follow_bleich"
        }]
    },

    // Zur Wäscherei eilen
    head_to_laundry: {
        text: "Du rennst den leeren Korridor entlang, biegst links ab und findest die Treppe. Unten angekommen, orientierst du dich kurz und entdeckst die Tür zur Wäscherei. Der Schlüssel passt, und du schlüpfst hinein. Der Raum ist voller Waschmaschinen und gestapelter Wäschekörbe. Am hinteren Ende siehst du eine Metalltür mit der Aufschrift 'Ausgang'. Als du dich näherst, hörst du, wie die Haupttür zur Wäscherei aufgeht. Schnell duckst du dich hinter einen Wäschestapel. Zwei Sicherheitsleute betreten den Raum. 'Er muss hier durchgekommen sein', sagt einer. 'Durchsucht alles.' Sie beginnen systematisch, den Raum zu durchkämmen. Die Hintertür ist nur noch wenige Meter entfernt, aber du bist zwischen den Wäschekörben gefangen.",
        choices: [{
            text: "Warten, bis sie in eine andere Ecke gehen, dann zur Tür sprinten",
            nextId: "sprint_to_door",
            addClue: {
                id: "guards_searching",
                text: "Sicherheitspersonal durchsucht systematisch die Klinik nach dir, einschließlich deines Fluchtwegs durch die Wäscherei."
            }
        }, {
            text: "Eine Ablenkung schaffen", nextId: "create_distraction"
        }, {
            text: "Dich in einem Wäschekorb verstecken", nextId: "hide_laundry"
        }]
    }, sprint_to_door_continued: {
        text: "Du rennst den schlammigen Pfad entlang, der in den dichten Wald führt. Äste peitschen dir ins Gesicht, während du tiefer ins Unterholz eintauchst. Die Rufe werden schwächer, aber du hörst Hunde bellen. Sie setzen Suchhunde ein. Der von Bleich beschriebene Pfad ist kaum erkennbar, überwuchert von Jahren der Vernachlässigung. Das Heulen des Windes vermischt sich mit den fernen Rufen deiner Verfolger. Nach etwa zwanzig Minuten verzweifelten Laufens erreichst du eine Klippe. Unter dir siehst du das sturmgepeitschte Meer und in der Ferne den schwachen Lichtstrahl des Leuchtturms. Der Pfad führt steil abwärts zur Küste.",
        choices: [{
            text: "Den Pfad zur Küste hinabsteigen", nextId: "descend_to_coast", addClue: {
                id: "hunting_dogs",
                text: "Das Klinikpersonal setzt Suchhunde ein, um dich zu fangen, was darauf hindeutet, wie wichtig es ihnen ist, dich wieder unter ihre Kontrolle zu bringen."
            }
        }, {
            text: "Nach einem Versteck suchen, um die Hunde abzuschütteln",
            nextId: "find_hiding_spot"
        }, {
            text: "Einen Umweg durch das dichtere Unterholz nehmen", nextId: "take_detour"
        }]
    },

    // Zur Küste hinabsteigen
    descend_to_coast: {
        text: "Du beginnst den gefährlichen Abstieg. Der Pfad ist rutschig vom Regen, und mehrmals verlierst du fast den Halt. Das Brausen der Wellen wird lauter, als du dich der Küste näherst. Die Hunde klingen entfernter - du hast etwas Vorsprung gewonnen. Nach einem schwierigen Abstieg erreichst du endlich den Strand. Der Leuchtturm steht etwa einen Kilometer entfernt auf einer felsigen Landzunge. Du setzt deinen Weg fort, halb laufend, halb stolpernd über die nassen Steine. Der Wind peitscht dir salziges Wasser ins Gesicht. Nach einer gefühlten Ewigkeit erreichst du die Basis des Leuchtturms. Die Tür ist verschlossen, aber neben dem Eingang findest du eine kleine Notiz, mit Steinen beschwert: 'Wenn du das liest, bin ich drinnen. Klopfe dreimal, dann zweimal.'",
        choices: [{
            text: "Das angegebene Klopfzeichen verwenden", nextId: "use_knock_signal", addClue: {
                id: "lighthouse_note",
                text: "Am Leuchtturm hast du eine Nachricht mit einem Klopfzeichen gefunden, die vermutlich von Wilson hinterlassen wurde."
            }
        }, {
            text: "Nach einem anderen Eingang suchen", nextId: "search_other_entrance"
        }, {
            text: "Kurz innehalten und die Umgebung auf Verfolger überprüfen",
            nextId: "check_for_pursuers"
        }]
    },

    // Das Klopfzeichen verwenden
    use_knock_signal: {
        text: "Du klopfst wie angegeben - dreimal, dann zweimal. Einen Moment lang passiert nichts, dann hörst du, wie schwere Riegel zurückgeschoben werden. Die Tür öffnet sich einen Spalt, und ein Auge mustert dich misstrauisch. 'Andrew?', fragt eine raue Stimme. Die Tür öffnet sich weiter, und du siehst einen älteren Mann mit grauem Haar und einer Narbe über dem rechten Auge. 'Du hast es geschafft', sagt er erleichtert und zieht dich schnell hinein. Er verriegelt die Tür hinter dir. 'Ich bin Ed Wilson', sagt er, während er dich zu einer Wendeltreppe führt. 'Aber das weißt du wahrscheinlich noch nicht.' Oben angekommen siehst du ein improvisiertes Labor mit einfacher Ausrüstung. Der Leuchtturm bietet einen Panoramablick auf die Insel und das stürmische Meer.",
        choices: [{
            text: "Wilson nach deiner wahren Identität fragen", nextId: "ask_wilson_identity"
        }, {
            text: "Die Dokumente zeigen, die du gefunden hast",
            nextId: "show_wilson_documents",
            addClue: {
                id: "wilson_meeting",
                text: "Du hast Dr. Edward Wilson im Leuchtturm getroffen. Er hat dich als 'Andrew' erkannt und ein provisorisches Labor eingerichtet."
            }
        }, {
            text: "Fragen, was mit euch beiden passiert ist", nextId: "ask_what_happened"
        }]
    },

    // Wilson die Dokumente zeigen
    show_wilson_documents: {
        text: "Du ziehst die gestohlenen Dokumente hervor und breitest sie auf einem Tisch aus. Wilson studiert sie mit grimmiger Miene. 'Sie haben dich also als Marshal zurückgebracht', murmelt er. 'Elegante Lösung. So kannst du überall nachforschen, während sie dich beobachten.' Er deutet auf das Foto von euch beiden im Labor. 'Wir waren Kollegen, Andrew. Die besten der Besten. Wir entwickelten JANUS als Hilfe für Traumapatienten.' Seine Augen verdunkeln sich. 'Dann kam Jenkins mit seinen militärischen Verbindungen. Die Regierung sah das Potenzial für... andere Anwendungen.' Er greift nach einer der Akten. 'Nach dem Tod deiner Familie warst du am Boden zerstört. Sie nutzten deine Schwäche aus, überzeugten dich, dass JANUS dir helfen könnte, den Schmerz zu vergessen.' Er seufzt schwer. 'Du wurdest ihr erstes erfolgreiches Subjekt.'",
        choices: [{
            text: "Fragen, ob es einen Weg gibt, deine Erinnerungen vollständig zurückzubekommen",
            nextId: "ask_memory_recovery",
            addClue: {
                id: "janus_history",
                text: "JANUS wurde ursprünglich als Therapie für Traumapatienten entwickelt, bevor militärische Interessen es für Identitätsmanipulation umfunktionierten. Du wurdest nach einer Familientragödie zum ersten erfolgreichen Testsubjekt."
            }
        }, {
            text: "Fragen, warum Wilson als Patient 67 in der Klinik war",
            nextId: "ask_patient67_wilson"
        }, {
            text: "Nach einem Plan fragen, um Jenkins und Freystatt zu stoppen",
            nextId: "ask_stopping_jenkins"
        }]
    },

    // Fragen zur Erinnerungswiederherstellung
    ask_memory_recovery: {
        text: "Wilson nickt langsam auf deine Frage. 'Ja, es gibt einen Weg.' Er geht zu einem improvisierten Labortisch und hebt eine kleine Flasche mit blauer Flüssigkeit hoch. 'Ich habe an einem Gegenmittel für RX-78 gearbeitet, seit ich erkannte, wozu sie JANUS verwenden wollten.' Er dreht die Flasche im Licht. 'Diese Formel löst die chemischen Blockaden, die deine wahren Erinnerungen unterdrücken.' Er sieht dich ernst an. 'Aber Andrew, ich muss dich warnen. Die vollständige Erinnerung bedeutet auch vollständigen Schmerz. Du wirst dich an alles erinnern - deine Frau, deine Kinder... wie du sie verloren hast.' Er stellt die Flasche vor dich hin. 'Es ist deine Entscheidung. Willst du die Wahrheit zurück, mit all ihrem Schmerz? Oder als der Marshal weiterleben, als den sie dich erschaffen haben?'",
        choices: [{
            text: "Das Gegenmittel nehmen", nextId: "take_antidote"
        }, {
            text: "Fragen, ob es einen Mittelweg gibt", nextId: "ask_middle_ground", addClue: {
                id: "full_antidote",
                text: "Wilson hat ein vollständiges Gegenmittel entwickelt, das alle chemischen Blockaden in deinem Gehirn lösen und deine wahren Erinnerungen zurückbringen kann."
            }
        }, {
            text: "Erst wissen wollen, was mit deiner Familie passiert ist",
            nextId: "ask_family_fate"
        }]
    },

    // Nach dem Schicksal der Familie fragen
    ask_family_fate: {
        text: "Wilson schaut dich mitfühlend an. 'Bist du sicher, dass du das jetzt wissen willst, ohne das Gegenmittel?' Du nickst entschlossen. Er setzt sich schwer auf einen Stuhl. 'Du warst besessen von unserer Arbeit, Andrew. Arbeitest spät. Dolores rief dich an, besorgt über die alte Elektrik im Haus...' Er hält inne. 'Du sagtest, du würdest es am Wochenende überprüfen. Aber du warst vertieft in Forschungsnotizen.' Seine Stimme wird leiser. 'Es gab einen Kurzschluss. Das Feuer breitete sich schnell aus. Als du ankamst...' Er schüttelt den Kopf. 'Du konntest sie nicht retten. Dolores. Die Kinder. Du gabst dir die Schuld. Hattest einen vollständigen Zusammenbruch.' Er sieht dich an. 'Und genau da setzte Jenkins an. Bot dir an, den Schmerz zu nehmen. Für immer.'",
        choices: [{
            text: "Das Gegenmittel sofort nehmen", nextId: "take_antidote", addClue: {
                id: "family_fire",
                text: "Deine Familie starb bei einem Hausbrand, den du möglicherweise hättest verhindern können, wenn du nicht so in deine Arbeit vertieft gewesen wärst. Diese Schuld führte zu deinem Zusammenbruch."
            }
        }, {
            text: "Einen Moment brauchen, um das Gehörte zu verarbeiten",
            nextId: "process_information"
        }, {
            text: "Fragen, ob die Klinik für den Brand verantwortlich sein könnte",
            nextId: "ask_clinic_responsible"
        }]
    },

    // Sich Wilson zuwenden
    turn_to_wilson: {
        text: "Als der erste Ansturm der Erinnerungen nachlässt, hebst du den Blick zu Wilson. Tränen laufen über dein Gesicht, aber deine Augen sind klar - klarer als seit Jahren. 'Ed', sagst du mit einer Stimme, die selbst für dich neu und doch vertraut klingt. 'Ich erinnere mich an alles.' Wilson kniet neben dir, eine Hand auf deiner Schulter. 'Willkommen zurück, alter Freund.' Du stehst langsam auf, fühlst dich wie neugeboren und doch uralt. 'Jenkins wird dafür bezahlen', sagst du leise. 'Nicht nur für das, was er mir angetan hat, sondern für alle Patienten, die er missbraucht hat.' Wilson nickt grimmig. 'Ich habe Beweise gesammelt. Protokolle, Daten, Zeugenaussagen.' Er deutet auf einen Ordner auf dem Tisch. 'Alles, was wir brauchen, um JANUS zu stoppen. Aber wir müssen schnell handeln. Sie werden wissen, dass du hier bist.'",
        choices: [{
            text: "Mit Wilson einen Fluchtplan von der Insel schmieden",
            nextId: "escape_plan",
            addClue: {
                id: "full_memory",
                text: "Mit deinen vollständig wiederhergestellten Erinnerungen bist du nun bereit, mit Wilson zusammenzuarbeiten, um Jenkins und Projekt JANUS zu stoppen."
            }
        }, {
            text: "Vorschlagen, zur Klinik zurückzukehren und Beweise zu sichern",
            nextId: "suggest_return_clinic"
        }, {
            text: "Nach Dr. Bleich fragen und ob er in Gefahr ist", nextId: "ask_about_sheehan"
        }]
    },

    // Fluchtplan (Verbindung zum Hauptende)
    escape_plan: {
        text: "Du und Wilson beginnt sofort, einen Fluchtplan zu schmieden. 'Es gibt ein Boot', erklärt Wilson, 'versteckt in einer Bucht auf der anderen Seite der Insel. Ich habe es für den Notfall vorbereitet.' Er breitet eine Karte aus. 'Wir können es über diesen Tunnel erreichen.' Er deutet auf eine Falltür unter einem Teppich. 'Er wurde früher von Schmugglern benutzt. Führt direkt zur Bucht.' Du hörst plötzlich entfernte Stimmen und das Bellen von Hunden. Wilson erbleicht. 'Sie kommen früher als erwartet.' Er greift nach dem Ordner mit den Beweisen und drückt ihn dir in die Hand. 'Du musst gehen. Jetzt. Bring die Beweise zum Festland. Ich werde sie aufhalten.' Du willst protestieren, aber sein Blick duldet keinen Widerspruch. 'Einer von uns muss es schaffen, Andrew. Für all die Menschen, die noch gerettet werden können.'",
        choices: [{
            text: "Darauf bestehen, gemeinsam zu fliehen", nextId: "insist_together"
        }, {
            text: "Die Beweise nehmen und fliehen", nextId: "take_evidence_flee"
        }, {
            text: "Vorschlagen, sich zu stellen und die Beweise zu präsentieren",
            nextId: "suggest_surrender",
            addClue: {
                id: "escape_tunnel_boat",
                text: "Es gibt einen geheimen Schmugglertunnel unter dem Leuchtturm, der zu einer Bucht mit einem vorbereiteten Fluchtboot führt."
            }
        }]
    },

    // Mehr Verbindungs- und noch fehlende Handlungsszenen

    // Nach Dr. Jenkins' Motivation fragen
    jenkins_motivation: {
        text: "Du fragst Dr. Bleich nach Jenkins' wahren Motiven hinter Projekt JANUS. Er seufzt tief. 'Am Anfang war es Idealismus. Die Chance, Menschen mit schwerem Trauma zu helfen.' Er schüttelt den Kopf. 'Aber dann kamen die ersten erfolgreichen Tests. Die Möglichkeit, selektiv Erinnerungen zu löschen und neue zu implantieren.' Seine Stimme wird bitter. 'Das Militär wurde aufmerksam. Sie sahen das Potenzial für... andere Anwendungen. Perfekte Spione. Schläfer-Agenten mit implantierten Identitäten. Gefangene, die zu loyalen Vermögenswerten umprogrammiert werden könnten.' Er blickt aus dem Fenster. 'Jenkins begann, sich zu verändern. Der Ruhm, das Geld, die Macht... Sie haben ihn korrumpiert. Was als medizinischer Durchbruch begann, wurde zu einem Werkzeug für Kontrolle und Manipulation.'",
        choices: [{
            text: "Fragen, ob auch die Klinikleitung involviert ist",
            nextId: "ask_administration_approval",
            addClue: {
                id: "military_interest",
                text: "Das Militär wurde auf JANUS aufmerksam und sah Potenzial für die Erschaffung von Spionen und die Umprogrammierung von Gefangenen, was Jenkins' Forschung in eine dunklere Richtung lenkte."
            }
        }, {
            text: "Fragen, ob Dr. Bleich selbst an dem Projekt mitgewirkt hat",
            nextId: "ask_bleich_involvement"
        }, {
            text: "Nach Dr. Wilson fragen, der offenbar Patient 67 ist",
            nextId: "patient67_connection"
        }]
    },

    // Nach dem verschwommenen Foto fragen
    blurry_photo: {
        text: "Du fragst Prof. Freystatt nach dem verschwommenen Foto in der Akte. Er betrachtet es mit gespieltem Interesse. 'Ah, ja. Bedauerlich. Die Kamera hatte offenbar eine Fehlfunktion während der Aufnahme.' Seine Erklärung klingt einstudiert. 'Wir haben mehrfach versucht, ein besseres Bild zu machen, aber Patient 67 wurde... unkooperativ.' Er legt das Foto weg. 'Ein Mann mittleren Alters, graues Haar, markante Narbe über dem rechten Auge. Sehr intelligent, trotz seines Zustands.' Etwas an dieser Beschreibung löst ein seltsames Gefühl der Vertrautheit in dir aus. 'Haben Sie jemals von Dr. Edward Wilson gehört?', fragt Freystatt plötzlich, dich scharf beobachtend. Die Frage fühlt sich wie ein Test an.",
        choices: [{
            text: "Zugeben, dass der Name eine vage Vertrautheit auslöst",
            nextId: "admit_familiarity",
            addClue: {
                id: "patient_description",
                text: "Patient 67 wird als Mann mittleren Alters mit grauem Haar und einer Narbe über dem rechten Auge beschrieben - eine Beschreibung, die seltsam vertraut wirkt."
            }
        }, {
            text: "Behaupten, den Namen nie gehört zu haben", nextId: "deny_knowing_wilson"
        }, {
            text: "Gegenfragen, warum er diesen Namen erwähnt", nextId: "counter_question_wilson"
        }]
    },

    // Zugeben, dass der Name vertraut klingt
    admit_familiarity: {
        text: "Du zögerst. 'Der Name... klingt irgendwie vertraut, obwohl ich nicht sagen kann, woher.' Freystatts Augen verengen sich. Er tauscht einen kurzen Blick mit dem Wachmann an der Tür. 'Interessant', murmelt er und macht eine Notiz. 'Dr. Wilson war ein ehemaliger Kollege. Vor seiner... Erkrankung.' Er schließt die Akte. 'Vielleicht haben Sie seinen Namen in Fachzeitschriften gelesen. Er war bekannt in bestimmten Kreisen.' Freystatt steht auf, signalisiert das Ende des Gesprächs. 'Sheriff Wilson wird Sie zu Ihrem Quartier bringen. Ruhen Sie sich aus. Der Sturm wird mindestens drei Tage anhalten.' Als du zur Tür gehst, hörst du ihn leise in ein Telefon sprechen: 'Erhöhen Sie die Dosis im Wasser. Sofort.'",
        choices: [{
            text: "So tun, als hättest du nichts gehört, aber später das Wasser meiden",
            nextId: "avoid_water",
            addClue: {
                id: "water_dosing",
                text: "Freystatt hat angeordnet, 'die Dosis im Wasser zu erhöhen', nachdem du eine Vertrautheit mit Wilsons Namen zugegeben hast."
            }
        }, {
            text: "Nach dem Telefonat fragen", nextId: "question_phone_call"
        }, {
            text: "Zum Quartier gehen, aber eigene Nachforschungen planen", nextId: "examine_file"
        }]
    },

    // Das Wasser meiden
    avoid_water: {
        text: "In deinem Quartier angekommen, betrachtest du misstrauisch das Wasserglas auf dem Nachttisch. Freystatts Worte hallen in deinem Kopf nach: 'Erhöhen Sie die Dosis im Wasser.' Vorsichtig riechst du daran - keine Auffälligkeiten, aber das bedeutet nichts. Du entscheidest, kein Risiko einzugehen. Das Fenster lässt sich einen Spalt öffnen. Du schüttest das Wasser hinaus und stellst das leere Glas zurück. Als später eine Schwester kommt und fragt, ob du etwas brauchst, bittest du um Kopfschmerztabletten, lehnst aber weiteres Wasser ab, indem du auf die noch halbvolle Flasche auf dem Tisch deutest - die du aber nicht anzurühren gedenkst. In der Nacht beginnst du, klarer zu denken. Fragmente von Erinnerungen tauchen auf - ein Labor, wissenschaftliche Diskussionen mit einem Mann, der der Beschreibung von Wilson ähnelt.",
        choices: [{
            text: "Die Akte von Patient 67 genauer studieren",
            nextId: "study_patient_file",
            addClue: {
                id: "clearer_thinking",
                text: "Nachdem du das Wasser gemieden hast, beginnen fragmentarische Erinnerungen an ein Labor und Gespräche mit jemandem, der Wilson ähnelt, aufzutauchen."
            }
        }, {
            text: "Versuchen, die zurückkehrenden Erinnerungsfragmente zu ordnen",
            nextId: "organize_memory_fragments"
        }, {
            text: "Das Zimmer heimlich verlassen und weitere Nachforschungen anstellen",
            nextId: "sneak_out_investigation"
        }]
    },

    // Der Raum 22 - Eintritt
    enter_room_22: {
        text: "Du beobachtest den Korridor. Als ein Pfleger mit Schlüsselbund vorbeigeht, sprichst du ihn autoritär an: 'Ich muss Raum 22, Freystatt hat mich geschickt.' Der überraschte Mann stottert: 'Aber, ich-' Du schneidest ihm das Wort ab: 'Es ist dringend. Öffnen Sie die Tür.' Widerwillig gehorcht er. Sobald die Tür offen ist, dankst du ihm knapp und betrittst den Raum. Der Pfleger eilt verwirrt davon. Im Inneren findest du einen klinischen Raum mit einem Stuhl in der Mitte, der mit Gurten versehen ist. Monitore und medizinische Geräte umgeben ihn. An der Wand hängt ein großer Bildschirm. Auf einem Tisch liegen Spritzen, Medikamentenfläschchen mit der Aufschrift 'RX-78' und ein Protokollbuch. Als du es öffnest, läuft dir ein kalter Schauer über den Rücken: 'Subjekt A.L. - Fortlaufende Identitätsrekonstruktion. Testphase: US-Marshal-Persona.'",
        choices: [{
            text: "Das Protokollbuch durchlesen", nextId: "read_protocol_book", addClue: {
                id: "rx78_room",
                text: "In Raum 22 werden offenbar Identitätsmanipulationen mit RX-78 durchgeführt. Ein Protokoll erwähnt 'Subjekt A.L.' und eine 'Marshal-Persona'."
            }
        }, {
            text: "Schnell einige Beweise sammeln und den Raum verlassen",
            nextId: "collect_room22_evidence"
        }, {
            text: "Die Geräte und Monitore genauer untersuchen", nextId: "examine_equipment"
        }]
    },

    // Das Protokollbuch lesen
    read_protocol_book: {
        text: "Du blätterst durch das Protokollbuch, und dein Unbehagen wächst mit jeder Seite. Detaillierte Aufzeichnungen beschreiben die 'Restrukturierung' von Patient A.L. - die systematische Löschung seiner ursprünglichen Erinnerungen und die Implantation einer neuen Identität als US-Marshal. Behandlungsdaten, Dosierungen von RX-78, Reaktionen. Eine Notiz von Dr. Jenkins fällt besonders auf: 'Subjekt zeigt ungewöhnliche Resistenz. Möglicherweise aufgrund seiner Beteiligung an der Entwicklung von RX-78. Paradoxerweise macht ihn sein Wissen über den Prozess anfälliger für Durchbrüche der ursprünglichen Erinnerungen.' Ein weiterer Eintrag, datiert von vor drei Tagen: 'Subjekt W. (Patient 67) entkommen. Verdacht: Hat A.L. kontaktiert. Überwachung verstärken. Falls A.L. Anzeichen von Erinnerungsdurchbrüchen zeigt, sofort Protokoll Delta aktivieren.'",
        choices: [{
            text: "Nach Hinweisen auf deine wahre Identität suchen",
            nextId: "search_true_identity",
            addClue: {
                id: "memory_resistance",
                text: "Laut Dr. Jenkins' Notizen zeigst du ungewöhnliche Resistenz gegen die Behandlung, möglicherweise weil du selbst an der Entwicklung von RX-78 beteiligt warst."
            }
        }, {
            text: "Herausfinden wollen, was 'Protokoll Delta' ist",
            nextId: "investigate_protocol_delta"
        }, {
            text: "Das Buch mitnehmen und den Raum schnell verlassen", nextId: "take_book_leave"
        }]
    },

    // Nach deiner wahren Identität suchen
    search_true_identity: {
        text: "Du blätterst weiter, suchst gezielt nach deiner wahren Identität. Schließlich findest du einen Eintrag von vor sechs Monaten: 'Erstbehandlung Dr. Andrew Laeddis. Hervorragende Qualifikation als Testsubjekt aufgrund seiner Kenntnisse der Neurochemie und persönlichen Tragödie (siehe Akte: Familie).' Beigefügt ist ein Foto von dir - mit Bart und längeren Haaren - in einem Laborkittel, neben Wilson und Jenkins stehend. Alle drei lächeln in die Kamera. Die Bildunterschrift lautet: 'JANUS-Entwicklungsteam, Tag der ersten erfolgreichen Anwendung.' Dein Blick wandert zu einem weiteren Dokument: ein Zeitungsausschnitt über einen Hausbrand, bei dem Dolores Laeddis und ihre zwei Kinder ums Leben kamen. Du spürst einen stechenden Schmerz im Kopf, als fragmentarische Erinnerungen durchbrechen.",
        choices: [{
            text: "Die Dokumente mitnehmen und den Raum verlassen",
            nextId: "take_identity_documents",
            addClue: {
                id: "laeddis_confirmation",
                text: "Du hast Beweise gefunden, dass du Dr. Andrew Laeddis bist, ein Mitentwickler von Projekt JANUS, der nach dem Tod seiner Familie in einem Hausbrand zum Testsubjekt wurde."
            }
        }, {
            text: "Nach weiteren Informationen über das JANUS-Projekt suchen",
            nextId: "search_more_janus"
        }, {
            text: "Dr. Bleich finden, der möglicherweise mehr weiß", nextId: "find_sheehan"
        }]
    },

    // Abschluss der fehlenden Szenen für den interaktiven Krimi

    // Fortsetzung von take_identity_documents
    take_identity_documents_continued: {
        text: "Mit pochendem Herzen steckst du das Foto und die kritischsten Dokumente ein. Als du dich umdrehst, um zu gehen, hörst du Stimmen auf dem Flur. Jemand kommt. Du schaust dich hastig nach einem Versteck um. Neben dem Schrank steht ein schmaler Wandschirm, hinter dem du dich gerade noch verbergen kannst, als die Tür aufgeht. Dr. Jenkins betritt den Raum, begleitet von Schwester Rachel. 'Die Dosis wurde erhöht, wie angeordnet', sagt sie. 'Aber wenn er tatsächlich resistenter wird, weiß ich nicht, ob es ausreicht.' Jenkins seufzt frustriert. 'Er darf sich nicht erinnern. Nicht jetzt, wo wir so nah am Durchbruch sind.' Er geht zum Schreibtisch. 'Das Protokollbuch - es wurde bewegt.' Rachel sieht sich alarmiert um. 'Glauben Sie, er war hier?' Jenkins' Gesicht verhärtet sich. 'Aktivieren Sie Protokoll Delta. Sofort.'",
        choices: [{
            text: "Weiter versteckt bleiben, bis sie gehen", nextId: "stay_hidden", addClue: {
                id: "protocol_delta_activated",
                text: "Dr. Jenkins hat 'Protokoll Delta' aktiviert, nachdem er festgestellt hat, dass jemand das Protokollbuch eingesehen hat - vermutlich eine Notfallmaßnahme gegen dich."
            }
        }, {
            text: "Versuchen, unbemerkt hinauszuschleichen", nextId: "sneak_out_unnoticed"
        }, {
            text: "Dich zu erkennen geben und sie konfrontieren", nextId: "confront_jenkins_rachel"
        }]
    },

    // Versteckt bleiben
    stay_hidden: {
        text: "Du bleibst regungslos hinter dem Wandschirm, kaum zu atmen wagend. Jenkins und Rachel durchsuchen hastig den Raum, aber der schmale Spalt, durch den du sie beobachten kannst, verrät, dass sie unter Zeitdruck stehen. 'Wir können jetzt nicht den ganzen Flügel durchsuchen', zischt Jenkins. 'Verschließen Sie alle Ausgänge. Setzen Sie das Sicherheitspersonal ein. Und erhöhen Sie die Dosis in seinem Abendessen auf das Dreifache.' Rachel nickt. 'Was ist mit Wilson?' Jenkins' Augen verdunkeln sich. 'Wenn er Kontakt aufgenommen hat, ist es bereits zu spät. Bereiten Sie die Behandlungseinheit vor. Wir beginnen von vorn.' Sie verlassen eilig den Raum. Sobald ihre Schritte verhallt sind, kommst du aus deinem Versteck hervor, mit kaltem Schweiß bedeckt und einem Gefühl wachsender Dringlichkeit.",
        choices: [{
            text: "Sofort fliehen und einen Weg aus der Klinik suchen",
            nextId: "flee_immediately",
            addClue: {
                id: "reset_plan",
                text: "Jenkins plant, falls nötig, deine Behandlung komplett neu zu beginnen - ein völliger Neustart deiner Identitätsprogrammierung."
            }
        }, {
            text: "Nach Dr. Bleich suchen, um Hilfe zu bekommen", nextId: "seek_bleich_help"
        }, {
            text: "Versuchen, Wilson zu finden, basierend auf den Hinweisen",
            nextId: "try_find_wilson"
        }]
    },

    // Sofort fliehen
    flee_immediately: {
        text: "Du entscheidest, dass du sofort fliehen musst. Mit den gestohlenen Dokumenten schleichst du durch die Korridore des Ostflügels, sorgfältig darauf bedacht, dem Sicherheitspersonal auszuweichen. Ein Alarm ertönt - 'Protokoll Delta' ist offenbar in Kraft. Du hörst Durchsagen: 'Alle Patienten in ihre Zimmer. Sicherheitspersonal zu den Ausgängen.' An einer Kreuzung siehst du, wie Wachen den Hauptausgang blockieren. Du wendest dich nach rechts, in einen weniger frequentierten Teil der Klinik. Dort entdeckst du eine Tür mit der Aufschrift 'Personalausgang'. Als du näher kommst, öffnet sich die Tür, und Dr. Bleich steht vor dir. Er sieht nicht überrascht aus. 'Schnell', flüstert er. 'Sie suchen dich überall. Ich weiß einen Weg hinaus.'",
        choices: [{
            text: "Dr. Bleich vertrauen und ihm folgen", nextId: "trust_bleich", addClue: {
                id: "bleich_appears",
                text: "Dr. Bleich erschien im richtigen Moment, um dir bei der Flucht zu helfen, was darauf hindeutet, dass er möglicherweise auf deiner Seite ist."
            }
        }, {
            text: "Misstrauisch sein - könnte es eine Falle sein?", nextId: "be_suspicious"
        }, {
            text: "Ihn nach Wilson fragen, bevor du ihm folgst", nextId: "ask_about_wilson_first"
        }]
    },

    // Dr. Bleich vertrauen
    trust_bleich: {
        text: "Du entscheidest, Dr. Bleich zu vertrauen, und folgst ihm schnell durch den Personalausgang. Er führt dich durch einen verwinkelten Korridor zu einer unauffälligen Tür. 'Dies ist ein alter Versorgungstunnel', erklärt er leise, während er die Tür aufschließt. 'Er führt zum Nordstrand. Von dort kannst du den Leuchtturm erreichen.' Ihr steigt eine enge Treppe hinab in einen feuchten, schwach beleuchteten Tunnel. 'Wilson wartet dort auf dich', fährt Bleich fort. 'Er hat ein Gegenmittel entwickelt. Es wird deine wahren Erinnerungen zurückbringen.' Er bleibt stehen und sieht dich ernst an. 'Andrew, hör mir zu. Was du auch findest, wer du auch warst - vergiss nicht, worum es wirklich geht. Die Menschen, die in dieser Klinik immer noch leiden. Die Jenkins kontrolliert.'",
        choices: [{
            text: "Nach weiteren Details über deine Vergangenheit fragen",
            nextId: "ask_more_past",
            addClue: {
                id: "bleich_escape_help",
                text: "Dr. Bleich hat dir einen geheimen Tunnel zum Nordstrand gezeigt und bestätigt, dass Wilson im Leuchtturm ist und ein Gegenmittel hat."
            }
        }, {
            text: "Fragen, ob Dr. Bleich mitkommen wird", nextId: "ask_bleich_accompany"
        }, {
            text: "Ohne weitere Verzögerung zum Leuchtturm aufbrechen", nextId: "go_lighthouse"
        }]
    },

    // Fragen, ob Bleich dich begleitet
    ask_bleich_accompany: {
        text: "Du fragst Dr. Bleich, ob er dich zum Leuchtturm begleiten wird. Er schüttelt bedauernd den Kopf. 'Ich kann nicht, Andrew. Jemand muss hier bleiben und die Spuren verwischen. Jenkins wird wissen, dass ich involviert bin, aber nicht, wie sehr.' Er drückt dir einen Schlüssel in die Hand. 'Für die Tür des Leuchtturms. Ein altes Seefahrersymbol ist eingeritzt - drei Wellen.' Er wird ernst. 'Außerdem müssen noch andere Patienten geschützt werden. Jenkins hat das Projekt an mehr Personen getestet, als du denkst.' Ein entferntes Geräusch lässt ihn aufhorchen. 'Geh jetzt. Der Tunnel führt direkt zur Küste. Halte dich an die rechte Wand, wenn es Abzweigungen gibt. Und Andrew...' Er zögert. 'Es war nicht deine Schuld. Was mit deiner Familie passierte. Vergiss das nicht, wenn die Erinnerungen zurückkehren.'",
        choices: [{
            text: "Dich bedanken und schnell aufbrechen", nextId: "thank_and_depart", addClue: {
                id: "bleich_stays",
                text: "Dr. Bleich bleibt in der Klinik zurück, um Spuren zu verwischen und andere Patienten zu schützen. Er gab dir einen Schlüssel für den Leuchtturm."
            }
        }, {
            text: "Fragen, was er mit 'es war nicht deine Schuld' meint", nextId: "ask_about_guilt"
        }, {
            text: "Bestehen, dass er mitkommen soll", nextId: "insist_accompany"
        }]
    },

    // Nach der Schuld fragen
    ask_about_guilt: {
        text: "'Was meinst du damit - es war nicht meine Schuld?' fragst du, plötzlich von tiefer Unruhe erfasst. Bleich sieht dich mit Mitgefühl an. 'Du wirst dich bald erinnern. Nach dem Tod deiner Familie hast du dir unerbittliche Vorwürfe gemacht. Diese Schuld hat dich zerstört, dich für Jenkins' Manipulation anfällig gemacht.' Er senkt die Stimme. 'Was du nicht wusstest: Der Kurzschluss im Haus war kein Zufall. Die Elektrik wurde manipuliert.' Du starrst ihn ungläubig an. 'Jenkins brauchte ein Versuchskaninchen für JANUS - jemanden, der es mitentwickelt hatte, der die neuronalen Muster kannte. Und er brauchte einen Weg, diesen jemand zu brechen.' Das Entsetzen lähmt dich für einen Moment. 'Du meinst... Jenkins hat meine Familie getötet? Um mich als Versuchsperson zu bekommen?'",
        choices: [{
            text: "Von Rache getrieben zum Leuchtturm aufbrechen",
            nextId: "vengeance_motivated",
            addClue: {
                id: "family_murder",
                text: "Laut Dr. Bleich wurde der Hausbrand, der deine Familie tötete, von Jenkins inszeniert, um dich als Versuchsperson für JANUS zu bekommen."
            }
        }, {
            text: "Nach Beweisen für diese ungeheuerliche Behauptung fragen",
            nextId: "ask_evidence_accusation"
        }, {
            text: "Kurz zusammenbrechen angesichts dieser Offenbarung",
            nextId: "momentary_breakdown"
        }]
    },

    // Von Rache getrieben
    vengeance_motivated: {
        text: "Eine kalte Wut erfasst dich, klärt deinen Verstand wie nichts zuvor. 'Jenkins wird dafür bezahlen', sagst du mit einer Stimme, die selbst dir fremd erscheint. Bleich packt deinen Arm. 'Nicht blindlings, Andrew. Das ist es, was er von dir erwartet. Sammle zuerst die Beweise. Wilson hat alles. Die Dokumente, die Zeugenaussagen.' Er sieht dich eindringlich an. 'Rache wird dir deine Familie nicht zurückbringen. Aber du kannst verhindern, dass anderen das Gleiche passiert.' Im Tunnel ertönt ein fernes Geräusch. 'Geh jetzt! Sie kommen näher.' Du nickst knapp, die Wut jetzt kanalisiert in einen eisernen Entschluss. 'Danke, für alles', sagst du und wendest dich zum Gehen. 'Wir sehen uns auf der anderen Seite.' Du rennst los, während hinter dir Bleichs Schritte in die entgegengesetzte Richtung verhallen.",
        choices: [{
            text: "Dem Tunnel zum Nordstrand folgen", nextId: "follow_tunnel_north", addClue: {
                id: "controlled_rage",
                text: "Die Wahrheit über den Tod deiner Familie hat eine kontrollierte Wut in dir entfacht und deinen Entschluss gefestigt, Jenkins zur Rechenschaft zu ziehen."
            }
        }, {
            text: "Kurz innehalten und deine Gedanken sammeln", nextId: "pause_collect_thoughts"
        }, {
            text: "Zurückkehren und Dr. Bleich helfen", nextId: "return_help_bleich"
        }]
    },

    // Dem Tunnel folgen
    follow_tunnel_north: {
        text: "Du rennst durch den feuchten Tunnel, die rechte Hand an der Wand, wie Bleich es dir gesagt hat. Bei jeder Abzweigung hältst du dich rechts. Der Geruch von Salz wird stärker, und schließlich hörst du das Rauschen der Wellen. Eine rostige Eisenleiter führt nach oben. Du kletterst hinauf und schiebst eine schwere Falltür auf. Ein Windstoß erfasst dich, als du auf den Nordstrand hinaustrittst. Der Sturm hat etwas nachgelassen, aber der Himmel ist noch immer dunkel. In der Ferne siehst du den Leuchtturm, sein Licht schneidet rhythmisch durch den Nebel. Du machst dich auf den Weg, vorbei an Felsen und angeschwemmtem Treibholz. Je näher du kommst, desto stärker wird ein Gefühl der Vertrautheit. Du warst schon einmal hier, in einem anderen Leben.",
        choices: [{
            text: "Direkt zum Leuchtturm gehen", nextId: "go_lighthouse", addClue: {
                id: "reached_north_shore",
                text: "Du hast den Nordstrand erreicht und siehst den Leuchtturm in der Ferne. Der Ort erweckt Gefühle der Vertrautheit."
            }
        }, {
            text: "Die Umgebung nach Verfolgern absuchen", nextId: "check_for_pursuers"
        }, {
            text: "Kurz innehalten und versuchen, weitere Erinnerungen aufsteigen zu lassen",
            nextId: "pause_for_memories"
        }]
    },

    // Zur Tür sprinten - Fortsetzung des Fluchtwegs
    check_for_pursuers: {
        text: "Du hältst inne und untersuchst sorgfältig die Umgebung. Der Wind trägt Geräusche weit, und in der Ferne hörst du Hundebellen und Rufe. Sie haben deine Flucht bemerkt und folgen dir. Am Horizont siehst du Lichter, die sich vom Hauptgebäude der Klinik in Richtung Nordstrand bewegen. Du schätzt, dass du etwa zwanzig Minuten Vorsprung hast, vielleicht weniger, wenn sie die Abkürzung durch den Wald nehmen. Der Leuchtturm ist jetzt deutlich zu sehen, vielleicht noch einen Kilometer entfernt. Du beschleunigst deinen Schritt, balancierst über glitschige Felsen und wattest durch flache Wasserstellen. Die Dokumente in deiner Tasche fühlen sich plötzlich schwer an - belastend und gleichzeitig ungeheuer wertvoll. Sie könnten der Schlüssel sein, um Jenkins zu stoppen und Gerechtigkeit für deine Familie zu erlangen.",
        choices: [{
            text: "So schnell wie möglich zum Leuchtturm eilen",
            nextId: "rush_to_lighthouse",
            addClue: {
                id: "pursuers_confirmed",
                text: "Du hast bestätigt, dass Verfolger mit Hunden auf dem Weg zum Nordstrand sind. Du hast etwa zwanzig Minuten Vorsprung."
            }
        }, {
            text: "Einen weniger offensichtlichen Weg nehmen, um Verfolger abzuschütteln",
            nextId: "take_less_obvious_path"
        }, {
            text: "Ein Versteck suchen und warten, bis die Suche nachlässt",
            nextId: "find_hiding_place"
        }]
    },

    // Zum Leuchtturm eilen
    rush_to_lighthouse: {
        text: "Du entscheidest, dass Zeit wichtiger ist als Vorsicht, und rennst so schnell es das unebene Terrain erlaubt zum Leuchtturm. Der Wind peitscht dir ins Gesicht, der Regen hat deinen Mantel durchweicht. Das Bellen der Hunde wird lauter. Als du die Basis des Leuchtturms erreichst, siehst du, dass die Eisentür fest verschlossen ist. Du erinnerst dich an Bleichs Schlüssel und ziehst ihn hervor. Tatsächlich ist ein Symbol mit drei Wellenlinien eingraviert. Deine Hände zittern vor Anstrengung und Kälte, als du den Schlüssel ins Schloss steckst. Er passt. Mit einem schweren Klicken springt die Tür auf. Du gleitest hinein und verschließt sie sofort hinter dir. Die plötzliche Stille ist überwältigend. Eine steile Wendeltreppe führt nach oben. 'Hallo?', rufst du. 'Wilson? Bist du hier?' Eine Stimme antwortet von oben: 'Andrew? Bist du das?'",
        choices: [{
            text: "Die Treppe hinaufsteigen, um Wilson zu treffen",
            nextId: "ascend_to_meet_wilson",
            addClue: {
                id: "reached_lighthouse",
                text: "Du hast den Leuchtturm erreicht und Kontakt mit einer Person hergestellt, die dich als 'Andrew' erkennt - vermutlich Wilson."
            }
        }, {
            text: "Vorsichtig sein und nach Bestätigung fragen, dass es Wilson ist",
            nextId: "verify_wilson_identity"
        }, {
            text: "Schnell berichten, dass Verfolger unterwegs sind", nextId: "report_pursuers"
        }]
    },

    // Die Treppe hinaufsteigen
    ascend_to_meet_wilson: {
        text: "Du steigst die spiralförmige Treppe hinauf, jede Stufe ein Echo in dem runden Turm. Als du die oberste Plattform erreichst, siehst du einen Mann mittleren Alters mit grauem Haar und einer markanten Narbe über dem rechten Auge - genau wie in der Beschreibung von Patient 67. Er lächelt erleichtert. 'Andrew. Endlich.' Er tritt näher, mustert dich eingehend. 'Wie viel erinnerst du?' Du zeigst ihm die Dokumente, die du gefunden hast. 'Bruchstücke. Genug, um zu wissen, dass ich nicht der bin, für den ich mich gehalten habe.' Wilson nickt verstehend. 'Die Konditionierung bricht zusammen. Das ist gut.' Er geht zu einem improvisierten Labortisch, auf dem Reagenzgläser und einfache Ausrüstung stehen. 'Ich habe an einem Gegenmittel gearbeitet. Es wird die chemischen Blockaden in deinem Gehirn auflösen.' Er hält eine kleine Flasche mit blauer Flüssigkeit hoch. 'Aber ich muss dich warnen, Andrew. Die vollständige Erinnerung bedeutet auch vollständigen Schmerz.'",
        choices: [{
            text: "Das Gegenmittel nehmen wollen", nextId: "want_antidote", addClue: {
                id: "wilson_antidote",
                text: "Dr. Wilson hat ein Gegenmittel entwickelt, das die chemischen Blockaden in deinem Gehirn auflösen und deine wahren Erinnerungen zurückbringen kann, aber mit ihnen auch den vollen Schmerz."
            }
        }, {
            text: "Erst mehr über deine Vergangenheit erfahren wollen", nextId: "learn_more_first"
        }, {
            text: "Wilson von Dr. Bleichs Behauptung über den Tod deiner Familie erzählen",
            nextId: "tell_family_murder_claim"
        }]
    },

    // Das Gegenmittel nehmen wollen
    want_antidote: {
        text: "Du streckst entschlossen die Hand aus. 'Ich will mich erinnern. An alles.' Wilson nickt anerkennend. 'Das ist der Andrew, den ich kenne.' Er gibt dir die Flasche. 'Es wirkt schnell, aber der Prozess ist intensiv. Du solltest dich setzen.' Er führt dich zu einem einfachen Stuhl neben dem Leuchtfeuer. Durch die Glasscheiben siehst du den weiten Blick über das stürmische Meer und die dunkle Silhouette der Insel. In der Ferne sind Lichter zu sehen - deine Verfolger, die näher kommen. Du entfernst den Stopfen von der Flasche. 'Was auch immer ich war, was auch immer ich getan habe - ich muss es wissen.' Mit einem letzten Blick auf Wilson trinkst du das Gegenmittel in einem Zug. Der Geschmack ist bitter, metallisch. Einen Moment lang spürst du nichts. Dann beginnt ein Pochen in deinen Schläfen, das schnell zu einem stechenden Schmerz wird.",
        choices: [{
            text: "Dich dem Fluss der zurückkehrenden Erinnerungen hingeben",
            nextId: "take_antidote"
        }, {
            text: "Versuchen, gegen den Schmerz anzukämpfen",
            nextId: "fight_against_pain",
            addClue: {
                id: "taking_antidote",
                text: "Du hast Wilsons Gegenmittel genommen, und der Prozess der Erinnerungsrückkehr hat begonnen, begleitet von intensiven Kopfschmerzen."
            }
        }, {
            text: "Nach Wilsons Hand greifen, um Halt zu finden", nextId: "grasp_wilson_hand"
        }]
    },

    // Gegen den Schmerz ankämpfen
    fight_against_pain: {
        text: "Du versuchst instinktiv, gegen den überwältigenden Schmerz anzukämpfen. Dein Körper spannt sich an, du greifst nach den Armlehnen des Stuhls. 'Lass es zu, Andrew', hörst du Wilsons Stimme wie durch einen Nebel. 'Kämpfe nicht dagegen an. Die Erinnerungen müssen fließen.' Trotz des Schmerzes spürst du, wie die Wände in deinem Geist einstürzen. Bilder fluten herein: Du und Wilson im Labor, eure Begeisterung über die therapeutischen Möglichkeiten von RX-78. Jenkins, der militärische Partner vorstellt. Deine wachsende Besorgnis über die ethischen Implikationen. Dolores, die dich anruft wegen der defekten Elektrik. Du versprichst, sie am Wochenende zu überprüfen. Dann Sirenen, Lichter, Rauch. Dein Haus in Flammen. Die Gewissheit, dass niemand überlebt hat. Der Zusammenbruch. Freystatts Angebot: 'Wir können den Schmerz nehmen, für immer.'",
        choices: [{
            text: "Die Erinnerungen akzeptieren und dich vollständig öffnen",
            nextId: "accept_memories",
            addClue: {
                id: "full_memory_return",
                text: "Deine vollständigen Erinnerungen kehren zurück - deine Arbeit an JANUS, deine Familie, ihr Tod, dein Zusammenbruch und wie du zum Versuchsobjekt wurdest."
            }
        }, {
            text: "Nach der Erinnerung an Jenkins' Beteiligung am Tod deiner Familie suchen",
            nextId: "seek_jenkins_involvement"
        }, {
            text: "Wilson anschauen, während sich deine Identität festigt", nextId: "look_at_wilson"
        }]
    },

    // Die Erinnerungen akzeptieren
    accept_memories: {
        text: "Du gibst den Kampf auf und lässt die Erinnerungen kommen. Der Schmerz ist überwältigend, aber auch befreiend. Du erinnerst dich an jedes Detail deines Lebens als Dr. Andrew Laeddis, an die Liebe zu deiner Frau und deinen Kindern, an deine Leidenschaft für die Neuropsychiatrie. Dann kommt die schreckliche Nacht des Feuers, gefolgt von Wochen der Verzweiflung und Selbstvorwürfe. Und dann eine neue Erinnerung, eine, die du unterdrückt haben musst: Ein Gespräch, das du zufällig mitgehört hast. Jenkins am Telefon: '...hat funktioniert. Laeddis ist gebrochen. Völlig. Er wird allem zustimmen.' Eine andere Stimme: 'Keine Zeugen? Das Feuer hat alles beseitigt?' Jenkins' kalte Antwort: 'Alles perfekt inszeniert. Ein elektrischer Defekt.' Du öffnest die Augen, Tränen strömen über dein Gesicht, aber dein Blick ist klar. 'Ich erinnere mich', flüsterst du zu Wilson. 'An alles.'",
        choices: [{
            text: "Wilson deine Erinnerung an Jenkins' Gespräch mitteilen",
            nextId: "share_jenkins_call",
            addClue: {
                id: "murder_confirmation",
                text: "Eine zurückgekehrte Erinnerung bestätigt, dass Jenkins den Tod deiner Familie arrangiert hat - du hast ein belastendes Telefongespräch mitgehört, das du später unterdrückt hast."
            }
        }, {
            text: "Aufstehen, mit neu gefundener Entschlossenheit", nextId: "stand_with_resolve"
        }, {
            text: "Kurz zusammenbrechen angesichts der überwältigenden Emotionen",
            nextId: "momentary_breakdown_memories"
        }]
    },

    // Wilson das Telefongespräch mitteilen
    share_jenkins_call: {
        text: "Du erzählst Wilson von der neu aufgetauchten Erinnerung - Jenkins' Telefongespräch, das du mitgehört hast. Wilsons Gesicht verfinstert sich. 'Ich hatte es vermutet, aber keine Beweise. Jenkins brauchte dich verzweifelt für den nächsten Schritt von JANUS. Ein williges Versuchsobjekt, das die Neurochemie verstand.' Er schüttelt den Kopf. 'Nachdem du zusammengebrochen warst, ging alles sehr schnell. Freystatt arrangierte deine Einweisung. Die ersten Versuche mit RX-78 begannen.' Plötzlich wird sein Blick alarmiert. Er geht zum Fenster und späht hinaus. 'Sie kommen. Schneller als erwartet.' Tatsächlich siehst du mehrere Lichter, die sich dem Leuchtturm nähern. 'Wir haben nicht viel Zeit, Andrew. Nimm die Beweise.' Er reicht dir einen wasserdichten Beutel mit Dokumenten. 'Und jetzt müssen wir einen Entscheidung treffen.'",
        choices: [{
            text: "Nach einem Fluchtweg fragen", nextId: "ask_escape_route", addClue: {
                id: "pursuers_close",
                text: "Eure Verfolger nähern sich schnell dem Leuchtturm. Wilson hat dir einen Beutel mit weiteren belastenden Beweisen gegen Jenkins übergeben."
            }
        }, {
            text: "Vorschlagen, zu kämpfen und sich zu stellen", nextId: "suggest_stand_fight"
        }, {
            text: "Fragen, ob es einen anderen Weg gibt, als zu fliehen oder zu kämpfen",
            nextId: "ask_third_option"
        }]
    },

    // Fortsetzung von ask_escape_route
    suggest_surrender: {
        text: "'Was, wenn wir uns stellen?', schlägst du vor. 'Mit all diesen Beweisen können sie uns nicht einfach zum Schweigen bringen.' Wilson schüttelt den Kopf. 'Du unterschätzt, wie weit Jenkins gehen wird. Er hat Verbindungen zu Geheimdiensten, zum Militär. Menschen sind für weniger verschwunden.' Er schaut zum Fenster, wo die Lichter näher kommen. 'Und denk an all die anderen Patienten in der Klinik. Wir sind vielleicht die Einzigen, die ihnen helfen können.' Er drückt dir den Beutel mit Beweisen fester in die Hand. 'Diese Dokumente sind unsere einzige Hoffnung. Sie müssen an die Öffentlichkeit. An jemanden mit genug Macht, um Jenkins zu stoppen.' Ein lautes Klopfen an der Tür unterbricht euch. 'Wilson! Wir wissen, dass du da drin bist!', ruft Jenkins' Stimme. 'Und Laeddis auch! Es ist vorbei!'",
        choices: [{
            text: "Wilson zustimmen und durch den Tunnel fliehen",
            nextId: "agree_escape_tunnel",
            addClue: {
                id: "jenkins_arrival",
                text: "Jenkins und seine Leute haben den Leuchtturm erreicht und fordern eure Aufgabe. Die Situation wird kritisch."
            }
        }, {
            text: "Nach einer Möglichkeit suchen, beide zu entkommen", nextId: "look_both_escape"
        }, {
            text: "Einen Plan vorschlagen, Jenkins in eine Falle zu locken",
            nextId: "suggest_trap_jenkins"
        }]
    },

    // Beiden die Flucht ermöglichen
    look_both_escape: {
        text: "Du schaust dich hektisch um. 'Muss es wirklich einer von uns sein? Können wir nicht beide entkommen?' Wilson überlegt. 'Das Boot ist klein, aber es würde für zwei reichen...' Die Tür des Leuchtturms bebt unter schweren Schlägen. 'Das Schloss wird nicht lange halten', murmelt Wilson. Er eilt zu einem Schrank, zieht eine kleine Metallbox hervor. 'Ein letzter Trick.' Aus der Box nimmt er zwei kleine Sprengsätze. 'Nichts Tödliches, nur Blendgranaten mit Rauch. Genug, um Verwirrung zu stiften.' Er reicht dir einen. 'Ich werfe meinen durch das Fenster, du deinen durch die Tür, sobald sie aufbricht. Dann rennen wir beide zur Falltür.' Das Schloss beginnt nachzugeben. 'Bereit?', fragt Wilson mit einem grimmigen Lächeln.",
        choices: [{
            text: "Dem Plan zustimmen und dich bereit machen",
            nextId: "agree_distraction_plan",
            addClue: {
                id: "distraction_devices",
                text: "Wilson hat improvisierte Blendgranaten mit Rauch vorbereitet, die Verwirrung stiften sollen, damit ihr beide durch den Tunnel entkommen könnt."
            }
        }, {
            text: "Vorschlagen, dass einer von euch zurückbleibt, um den anderen zu decken",
            nextId: "suggest_cover_escape"
        }, {
            text: "Nach dem Sprengstoff greifen und Wilson zur Falltür drängen",
            nextId: "grab_explosives_urge_wilson"
        }]
    },

    // Dem Ablenkungsplan zustimmen
    agree_distraction_plan: {
        text: "Du nickst entschlossen. 'Lass es uns tun.' Wilson öffnet das Fenster auf der dem Eingang abgewandten Seite. Die Tür splittert unter einem weiteren heftigen Schlag. 'Bei drei', sagt Wilson. 'Eins... zwei... drei!' Er wirft seine Granate durch das Fenster. Im selben Moment bricht die Tür auf, und du wirfst deinen Sprengsatz direkt auf die eindringenden Männer. Zwei laute Knalle ertönen, gefolgt von blendendem Licht und dichtem Rauch. Schreie und Verwirrung erfüllen die Luft. Wilson packt deinen Arm. 'Jetzt!' Ihr stürzt zur Falltür. Wilson steigt zuerst hinab, du folgst dicht dahinter und ziehst die Luke über euch zu. Der Tunnel ist eng und dunkel, nur Wilsons kleine Taschenlampe spendet Licht. 'Schnell', drängt er, 'bevor sie bemerken, wohin wir verschwunden sind.'",
        choices: [{
            text: "Wilson durch den Tunnel folgen", nextId: "follow_wilson_tunnel", addClue: {
                id: "successful_distraction",
                text: "Die Ablenkung mit den Blendgranaten war erfolgreich. Du und Wilson seid in den Geheimtunnel entkommen, während Jenkins' Leute verwirrt zurückblieben."
            }
        }, {
            text: "Versuchen, die Luke zu blockieren, um Verfolger zu verlangsamen",
            nextId: "try_block_trapdoor"
        }, {
            text: "Nach den Beweisen tasten, um sicherzugehen, dass sie noch da sind",
            nextId: "check_evidence_safe"
        }]
    },

    // Wilson durch den Tunnel folgen
    follow_wilson_tunnel: {
        text: "Du folgst Wilson durch den engen, feuchten Tunnel. Der Weg führt stetig abwärts, manchmal so eng, dass ihr fast kriechen müsst. 'Dieser Tunnel wurde im 19. Jahrhundert von Schmugglern genutzt', erklärt Wilson flüsternd. 'Ein perfektes Geheimnis.' Hinter euch hörst du entfernte Rufe - sie haben die Falltür entdeckt. 'Schneller', drängt Wilson. Nach etwa zwanzig Minuten ändert sich die Luft, wird salziger. Der Tunnel erweitert sich zu einer kleinen Höhle, durch die du das Rauschen der Wellen hören kannst. 'Wir sind fast da.' Wilson schiebt einen schweren Felsen beiseite, der den Ausgang verdeckt, und kühle Nachtluft strömt herein. Ihr tretet hinaus auf einen winzigen, verborgenen Strand, umgeben von hohen Klippen. Dort, an einem versteckten Steg, liegt ein kleines Motorboot.",
        choices: [{
            text: "Zum Boot eilen", nextId: "hurry_to_boat", addClue: {
                id: "reached_hidden_cove",
                text: "Ihr habt die versteckte Bucht mit dem Fluchtboot erreicht. Verfolger sind im Tunnel, aber noch nicht durchgebrochen."
            }
        }, {
            text: "Zurückschauen und lauschen, wie nah die Verfolger sind",
            nextId: "check_pursuers_distance"
        }, {
            text: "Wilson nach dem nächsten Schritt des Plans fragen", nextId: "ask_next_step"
        }]
    },

    // Zum Boot eilen
    hurry_to_boat: {
        text: "Ihr rennt zum Boot. Wilson löst schnell die Taue, während du an Bord springst. Der kleine Motor startet mit einem Röhren, als Wilson den Schlüssel dreht. 'Halt dich fest', ruft er über dem Lärm. Das Boot schießt vorwärts, gerade als ihr Stimmen am Tunnelausgang hört. Ein Schuss knallt, das Wasser neben euch spritzt auf. Weitere Schüsse folgen, aber ihr seid bereits außer Reichweite, das Boot schneidet durch die Wellen in die Dunkelheit. Wilson lenkt euch um die Klippen herum, weg von der Insel, Richtung offenes Meer. Erst als die Küste nur noch eine dunkle Linie am Horizont ist, verlangsamt er den Motor. 'Wir haben es geschafft', sagt er, kaum glaubend. 'Wohin jetzt?', fragst du. Wilson deutet Richtung Osten. 'Das Festland ist etwa drei Stunden entfernt. Ich kenne jemanden dort, der uns helfen kann. Einen Journalisten, dem ich vertraue.'",
        choices: [{
            text: "Zustimmen und Kurs auf das Festland nehmen",
            nextId: "agree_head_mainland",
            addClue: {
                id: "boat_escape_successful",
                text: "Ihr seid erfolgreich mit dem Boot geflohen und nehmt Kurs auf das Festland, wo Wilson einen vertrauenswürdigen Journalisten kennt."
            }
        }, {
            text: "Vorschlagen, die Beweise zu überprüfen, während ihr fahrt",
            nextId: "suggest_check_evidence"
        }, {
            text: "Fragen, was mit Dr. Bleich und den anderen Patienten geschehen wird",
            nextId: "ask_about_others"
        }]
    },

    // Kurs aufs Festland setzen
    agree_head_mainland: {
        text: "Du nickst zustimmend, und Wilson nimmt Kurs auf das Festland. Das kleine Boot tanzt über die Wellen, der Motor surrt gleichmäßig. Der Regen hat aufgehört, und der Nachthimmel klart auf, Sterne werden sichtbar. Wilson reicht dir eine Thermoskanne mit Kaffee. 'Du solltest etwas trinken. Es wird eine lange Nacht.' Ihr setzt euch und atmet zum ersten Mal seit Stunden durch. 'Was passiert, wenn wir ankommen?', fragst du. Wilson blickt ernst. 'Wir gehen direkt zu meinem Kontakt. Er arbeitet für eine große Zeitung, hat Verbindungen zu Bundesbehörden. Mit den Beweisen, die wir haben, muss die Regierung handeln.' Er schaut zurück zur Insel, jetzt nur noch ein dunkler Fleck am Horizont. 'All die Patienten dort... sie verdienen Gerechtigkeit.' Du öffnest den wasserdichten Beutel und beginnst, die Dokumente zu sichten - Laborprotokolle, Fotos, Zeugenaussagen. Alles, was ihr braucht, um Jenkins und seine Komplizen zur Rechenschaft zu ziehen.",
        choices: [{
            text: "Die Reise zum Festland fortsetzen (Zum Ende)",
            nextId: "ending_escape",
            addClue: {
                id: "justice_plan",
                text: "Der Plan ist, die Beweise einem Journalisten mit Verbindungen zu Bundesbehörden zu übergeben, um Gerechtigkeit für alle Opfer von Projekt JANUS zu erreichen."
            }
        }, {
            text: "Eine letzte Frage zu deiner Familie stellen", nextId: "final_family_question"
        }, {
            text: "Über die Zukunft nachdenken, wenn alles vorbei ist", nextId: "contemplate_future"
        }]
    },

    // Weiterführung von Handlungssträngen, für die noch Szenen fehlen:

    // Dr. Bleich nach seiner Beteiligung am Projekt fragen
    ask_bleich_involvement: {
        text: "'Waren Sie selbst an dem Projekt beteiligt, Dr. Bleich?', fragst du direkt. Er senkt den Blick kurz, Schuld zeichnet sich auf seinem Gesicht ab. 'Am Anfang, ja. Ich glaubte an das therapeutische Potenzial.' Er seufzt schwer. 'Als ich erkannte, wohin es führte, war es schon zu spät. Jenkins hatte die Kontrolle übernommen, mit Freystatts Unterstützung.' Er sieht dich an. 'Ich versuchte, im System zu bleiben, um zu helfen, wo ich konnte. Manche Patienten vor dem Schlimmsten zu bewahren.' Seine Stimme wird leiser. 'Ich hätte früher handeln sollen. Als Wilson und du zuerst Bedenken äußertet.' Du bemerkst die Verwendung deines Vornamens - ein weiterer Hinweis, dass er dich als jemand anderen kennt. 'Jetzt versuche ich, es wiedergutzumachen. Wilson und ich arbeiten heimlich zusammen, um Beweise zu sammeln.'",
        choices: [{
            text: "Fragen, wo Wilson jetzt ist", nextId: "ask_wilson_whereabouts", addClue: {
                id: "bleich_guilt",
                text: "Dr. Bleich war anfangs an Projekt JANUS beteiligt, zog sich zurück, als er die dunkle Wendung erkannte, und arbeitet nun heimlich mit Wilson zusammen, um Beweise zu sammeln."
            }
        }, {
            text: "Nach konkreten Beweisen fragen, die er gesammelt hat",
            nextId: "ask_evidence_collected"
        }, {
            text: "Fragen, wieviele Patienten von der Identitätsmanipulation betroffen sind",
            nextId: "ask_affected_patients"
        }]
    },

    // Nach Wilsons Aufenthaltsort fragen
    ask_wilson_whereabouts: {
        text: "'Wo ist Wilson jetzt?', fragst du. Dr. Bleich wirft einen vorsichtigen Blick zur Tür. 'Im Leuchtturm an der Nordküste. Er floh vor drei Tagen, als er entdeckte, dass Jenkins plante, ihn zu... eliminieren.' Er senkt die Stimme weiter. 'Wilson hatte zu viel herausgefunden, wurde zu gefährlich für sie. Er nahm wichtige Beweise mit und entwickelte ein Gegenmittel für RX-78.' Bleich nimmt ein Stück Papier und zeichnet eine grobe Karte. 'Hier ist der Weg. Aber sei vorsichtig - sie suchen überall nach ihm. Und nach dir, seit du anfängst, Fragen zu stellen.' Er blickt dich ernst an. 'Er wartet auf dich, Andrew. Er hat all die Antworten, die du suchst, und das Mittel, um deine wahren Erinnerungen zurückzubringen. Aber du musst dich beeilen. Der Sturm lässt nach, und Jenkins wird bald Verstärkung vom Festland anfordern.'",
        choices: [{
            text: "Sofort zum Leuchtturm aufbrechen", nextId: "go_lighthouse", addClue: {
                id: "wilson_lighthouse",
                text: "Wilson versteckt sich im Leuchtturm an der Nordküste, hat wichtige Beweise und ein Gegenmittel für RX-78. Er floh, als Jenkins plante, ihn zu beseitigen."
            }
        }, {
            text: "Nach einer sicheren Route zum Leuchtturm fragen", nextId: "ask_safe_route"
        }, {
            text: "Fragen, ob Dr. Bleich dich begleiten wird", nextId: "ask_bleich_accompany"
        }]
    },

    // Fragen, ob es einen Mittelweg gibt
    ask_middle_ground: {
        text: "'Gibt es keinen Mittelweg?', fragst du Wilson. 'Muss ich alles auf einmal erinnern?' Wilson überlegt kurz. 'Ich könnte die Dosierung reduzieren. Dir einen Teil deiner Erinnerungen zurückgeben, genug, um zu verstehen, wer du bist, ohne die volle emotionale Wucht.' Er nimmt ein leeres Fläschchen und gießt etwa die Hälfte der blauen Flüssigkeit um. 'Dies würde ausreichen, um die oberflächlichen Blockaden zu lösen. Die tieferen Erinnerungen - besonders die traumatischen - würden gedämpft bleiben.' Er reicht dir das halbvolle Fläschchen. 'Deine Entscheidung, Andrew. Teilweise Wahrheit jetzt, oder volle Wahrheit, wenn du bereit bist.' Draußen hörst du das Rauschen der Wellen und das ferne Bellen von Hunden - eure Verfolger kommen näher.",
        choices: [{
            text: "Die reduzierte Dosis nehmen", nextId: "take_reduced_dose", addClue: {
                id: "partial_antidote",
                text: "Wilson hat eine reduzierte Dosis des Gegenmittels angeboten, die dir einen Teil deiner Erinnerungen zurückgeben würde, ohne die volle emotionale Traumabelastung."
            }
        }, {
            text: "Doch die volle Dosis nehmen - du willst die ganze Wahrheit",
            nextId: "take_antidote"
        }, {
            text: "Vorschlagen, dass ihr zuerst einen Fluchtplan macht, bevor du eine Entscheidung triffst",
            nextId: "suggest_escape_plan_first"
        }]
    },

    // Die reduzierte Dosis nehmen
    take_reduced_dose: {
        text: "Du entscheidest dich für den behutsamen Ansatz und nimmst die reduzierte Dosis. Der Geschmack ist bitter, aber weniger intensiv als erwartet. Die Wirkung setzt langsamer ein - ein warmes Pulsieren in deinem Kopf, das sich allmählich ausbreitet. Erinnerungen kehren zurück, aber wie durch einen Schleier: Du im Labor, arbeitend an einer chemischen Formel. Wilson und du, diskutierend über Anwendungsmöglichkeiten. Jenkins, der militärische Verbindungsleute vorstellt. Deine wachsende Skepsis. Bilder deiner Frau und Kinder, aber ohne die überwältigende Trauer, nur ein dumpfes Gefühl des Verlusts. Die Verschwommenheit der Marshal-Identität lichtet sich, und du erkennst sie als das Konstrukt, das sie ist. 'Ich bin Andrew Laeddis', sagst du mit fester Stimme. 'Ein Psychiater. Ich habe an Projekt JANUS gearbeitet. Und dann... wurde ich zu seinem Opfer.'",
        choices: [{
            text: "Wilson nach den Details fragen, die noch fehlen",
            nextId: "ask_missing_details",
            addClue: {
                id: "partial_memory_return",
                text: "Die reduzierte Dosis hat dir grundlegende Erinnerungen an deine Identität als Dr. Andrew Laeddis zurückgegeben, ohne die volle traumatische Belastung."
            }
        }, {
            text: "Nach einem Fluchtplan fragen, bevor die Verfolger eintreffen",
            nextId: "ask_escape_plan"
        }, {
            text: "Fragen, ob du später die volle Dosis nehmen kannst",
            nextId: "ask_full_dose_later"
        }]
    },

    // Wilson nach fehlenden Details fragen
    ask_missing_details: {
        text: "'Es gibt Lücken', sagst du zu Wilson. 'Ich erinnere mich an die Grundlagen, aber Details fehlen. Besonders über... meinen Zusammenbruch.' Wilson nickt verständnisvoll. 'Das war beabsichtigt. Die reduzierte Dosis schützt dich vor den traumatischsten Erinnerungen.' Er setzt sich dir gegenüber. 'Nach dem Tod deiner Familie warst du am Boden zerstört, gabst dir selbst die Schuld. Jenkins nutzte deinen Zustand aus, überzeugte dich, dass JANUS dir helfen könnte, den Schmerz zu vergessen.' Ein bitteres Lächeln. 'In gewisser Weise hat er sein Versprechen gehalten. Er nahm den Schmerz - zusammen mit deiner Identität.' Er greift nach dem Beutel mit Beweisen. 'Was er dir nicht sagte: Wir hatten Hinweise, dass der Brand kein Unfall war. Jemand hatte die Elektrik manipuliert. Und als du das herauszufinden begannst...' Wilson lässt den Satz unvollendet hängen, aber die Implikation ist klar.",
        choices: [{
            text: "Fragen, ob Jenkins für den Tod deiner Familie verantwortlich ist",
            nextId: "ask_jenkins_responsible",
            addClue: {
                id: "murder_suspicion",
                text: "Wilson deutet an, dass der Brand, der deine Familie tötete, kein Unfall war, sondern möglicherweise von Jenkins arrangiert wurde, als du zu viele Fragen stelltest."
            }
        }, {
            text: "Nach einem Fluchtplan fragen, angesichts der näherkommenden Verfolger",
            nextId: "ask_escape_route"
        }, {
            text: "Wilson fragen, wie er selbst zu Patient 67 wurde",
            nextId: "ask_wilson_transformation"
        }]
    },

    // Jenkins' Verantwortung hinterfragen
    ask_jenkins_responsible: {
        text: "Die Frage brennt in dir. 'Glaubst du, dass Jenkins...?' Du kannst es nicht aussprechen, aber Wilson versteht. 'Die Beweise sind nicht schlüssig', sagt er vorsichtig. 'Aber die Zeitlinie ist verdächtig. Kurz nachdem wir uns entschieden hatten, die militärische Anwendung von JANUS zu blockieren, geschah der Brand.' Er holt tief Luft. 'Jenkins brauchte dich verzweifelt für die nächste Phase - ein Versuchssubjekt, das die neurologischen Mechanismen verstand. Und plötzlich warst du emotional gebrochen, bereit, alles zu akzeptieren, was den Schmerz lindern würde.' Wilson steht auf und geht zum Fenster. 'Ich habe versucht, dir zu helfen, aber sie isolierten dich. Als ich zu laut wurde, machten sie mich zu Patient 67. Ein eleganter Weg, uns beide zum Schweigen zu bringen.' Er wendet sich zu dir. 'Eine letzte Sache solltest du wissen: Ich glaube, Dr. Bleich war derjenige, der heimlich Hinweise für dich hinterließ - Dinge, die deine Marshal-Identität ins Wanken bringen sollten.'",
        choices: [{
            text: "Deinen wachsenden Zorn gegen Jenkins kanalisieren und einen Fluchtplan vorschlagen",
            nextId: "channel_anger_escape",
            addClue: {
                id: "calculated_tragedy",
                text: "Der Tod deiner Familie und euer beider 'Patienten-Status' waren möglicherweise Teil von Jenkins' kalkuliertem Plan, euch zum Schweigen zu bringen und gleichzeitig perfekte Versuchspersonen für JANUS zu erhalten."
            }
        }, {
            text: "Die vollständige Dosis des Gegenmittels verlangen - du willst die ganze Wahrheit",
            nextId: "demand_full_dose"
        }, {
            text: "Nach Dr. Bleichs Motiven fragen", nextId: "ask_bleich_motives"
        }]
    },

    // Zorn kanalisieren und Fluchtplan vorschlagen
    channel_anger_escape: {
        text: "Eine kalte, kontrollierte Wut steigt in dir auf, schärft deinen Verstand. 'Wir müssen von dieser Insel runter', sagst du mit einer Klarheit, die dich selbst überrascht. 'Mit den Beweisen. Jenkins zur Rechenschaft ziehen.' Wilson nickt anerkennend. 'Der Andrew, den ich kenne, ist zurück.' Er geht zu einem abgenutzten Teppich und zieht ihn beiseite, enthüllt eine Falltür. 'Schmugglertunnel, führt zu einer versteckten Bucht auf der anderen Seite der Insel. Dort liegt ein Boot bereit.' Er nimmt eine Tasche mit Unterlagen. 'Hier sind alle Beweise, die ich gesammelt habe. Genug, um Jenkins, Freystatt und ihre militärischen Verbindungsleute zu überführen.' Das Bellen der Hunde wird lauter. Wilson blickt besorgt zum Fenster. 'Sie sind fast hier. Wir müssen uns beeilen. Einer von uns muss mit den Beweisen entkommen. Der andere muss sie aufhalten, Zeit gewinnen.'",
        choices: [{
            text: "Vorschlagen, dass ihr beide flieht", nextId: "suggest_both_flee"
        }, {
            text: "Anbieten, zurückzubleiben, um Wilson mit den Beweisen fliehen zu lassen",
            nextId: "offer_stay_behind",
            addClue: {
                id: "smuggler_tunnel",
                text: "Unter dem Leuchtturm befindet sich ein alter Schmugglertunnel, der zu einer versteckten Bucht mit einem Fluchtboot führt. Die Zeit drängt, da eure Verfolger fast den Leuchtturm erreicht haben."
            }
        }, {
            text: "Darauf bestehen, dass du mit den Beweisen fliehst und Wilson die Verfolger aufhält",
            nextId: "insist_you_flee"
        }]
    },

    // Gemeinsame Flucht vorschlagen
    suggest_both_flee: {
        text: "'Wir gehen beide', sagst du entschieden. 'Keiner bleibt zurück.' Wilson schüttelt den Kopf. 'Das Boot ist klein, könnte uns beide tragen, aber...' Ein lautes Klopfen an der Tür unterbricht ihn. 'Wilson! Wir wissen, dass du da drin bist!', ruft Jenkins' Stimme. 'Und Laeddis auch!' Wilson eilt zu einem Schrank, zieht eine kleine Metallbox hervor. 'Ein letzter Trick.' Er nimmt zwei kleine Sprengsätze heraus. 'Blendgranaten mit Rauch. Genug, um Verwirrung zu stiften.' Er gibt dir eine. 'Du wirfst deine durch die Tür, sobald sie aufbricht. Ich meine durch das Fenster. Die Verwirrung sollte uns genug Zeit geben, beide zur Falltür zu gelangen.' Er zieht seinen Mantel an. 'Bereit für ein letztes Abenteuer, alter Freund?'",
        choices: [{
            text: "Nicken und dich für die Ablenkung bereitmachen",
            nextId: "agree_distraction_plan",
            addClue: {
                id: "last_stand",
                text: "Wilson hat Blendgranaten vorbereitet, um einen letzten verzweifelten Fluchtversuch für euch beide zu ermöglichen, während Jenkins und seine Leute bereits an der Tür sind."
            }
        }, {
            text: "Nach einem Plan B fragen, falls die Ablenkung misslingt", nextId: "ask_plan_b"
        }, {
            text: "Wilson für seine Freundschaft und Hilfe danken, bevor ihr handelt",
            nextId: "thank_wilson"
        }]
    },

    // Zurückbleiben anbieten
    offer_stay_behind: {
        text: "'Ich bleibe', sagst du ruhig. 'Du kennst dich mit den Beweisen aus, weißt, wer die richtigen Kontakte hat.' Wilson schaut dich überrascht an. 'Bist du sicher? Sie werden...' Du unterbrichst ihn. 'Ich weiß. Aber jemand muss es tun. Und ich habe eine Rechnung mit Jenkins offen.' Eine seltsame Ruhe erfüllt dich. 'Außerdem - mit dem, was ich jetzt weiß, können sie meine Erinnerungen nicht mehr so leicht manipulieren.' Wilson zögert, dann nickt er ernst. Er übergibt dir seine Blendgranate. 'Die wird dir etwas Zeit verschaffen.' Dann umarmt er dich kurz. 'Danke, Andrew. Ich verspreche dir, sie werden dafür bezahlen.' Er öffnet die Falltür und beginnt hinabzusteigen. 'Eine Sache noch', sagt er. 'Falls du es schaffst - die vollständige Dosis des Gegenmittels steht dort drüben. Für den Fall, dass du dich entscheidest, alles zu erinnern.'",
        choices: [{
            text: "Wilson verabschieden und dich auf die Konfrontation vorbereiten",
            nextId: "farewell_wilson_prepare",
            addClue: {
                id: "sacrifice_choice",
                text: "Du hast dich entschieden, zurückzubleiben und Wilson mit den Beweisen fliehen zu lassen, im Wissen, dass du wahrscheinlich gefangen genommen wirst."
            }
        }, {
            text: "Im letzten Moment die Meinung ändern und Wilson folgen",
            nextId: "change_mind_follow"
        }, {
            text: "Die vollständige Dosis des Gegenmittels nehmen, bevor du dich Jenkins stellst",
            nextId: "take_antidote_before_confrontation"
        }]
    }, // Fortsetzung von farewell_wilson_prepare
    farewell_wilson_prepare_continued: {
        text: "Du verabschiedest dich von Wilson mit einem letzten Nicken. 'Viel Glück, Ed. Bring diese Bastarde zur Strecke.' Wilson verschwindet in der Falltür, und du schiebst den Teppich zurück. Die Klopfgeräusche an der Tür werden stärker. Du greifst nach der Blendgranate und positionierst dich strategisch. Dann fällt dein Blick auf die Flasche mit dem vollständigen Gegenmittel. Mit einer schnellen Entscheidung greifst du danach und trinkst sie in einem Zug. Wenn du Jenkins gegenübertreten sollst, dann mit all deinen Erinnerungen, der vollen Wahrheit. Der Schmerz ist überwältigend, als die letzten Blockaden brechen. Bilder deiner Familie, ihres Todes, Jenkins' Verrat - alles mit kristallklarer Schärfe. Tränen laufen über dein Gesicht, aber dein Blick ist fest, als die Tür splittert. 'Willkommen zurück, Dr. Laeddis', sagt Jenkins, als er mit gezogener Waffe eintritt. 'Oder sollte ich sagen, Marshal?'",
        choices: [{
            text: "Jenkins mit neu gefundener Stärke konfrontieren",
            nextId: "confront_jenkins_strength",
            addClue: {
                id: "full_memories_return",
                text: "Du hast in letzter Minute das vollständige Gegenmittel genommen und erinnerst dich nun an alles - die volle Wahrheit über deine Familie, ihre Ermordung und Jenkins' Verrat."
            }
        }, {
            text: "Die Blendgranate werfen und versuchen zu entkommen",
            nextId: "throw_flashbang_escape"
        }, {
            text: "Vorgeben, noch der verwirrte Marshal zu sein", nextId: "pretend_marshal"
        }]
    },

    // Jenkins mit Stärke konfrontieren
    confront_jenkins_strength: {
        text: "Du richtest dich zu voller Größe auf, die Wucht deiner zurückgekehrten Erinnerungen verleiht dir eine unerwartete Stärke. 'Ich weiß alles, Jenkins. Über JANUS, über deine militärischen Verbindungen...' Du machst einen Schritt vor, während er und zwei Sicherheitsleute in den Raum treten. 'Und über meine Familie.' Jenkins' Lächeln wird kälter. 'Tragische Sache, dieser Unfall.' Du lachst bitter. 'Wir beide wissen, dass es kein Unfall war. Ich erinnere mich an das Telefongespräch, das ich mitgehört habe. 'Alles perfekt inszeniert. Ein elektrischer Defekt.' Deine eigenen Worte.' Zum ersten Mal siehst du echte Überraschung in Jenkins' Gesicht. 'Wilson ist weg', fährst du fort. 'Mit allen Beweisen. In diesem Moment auf dem Weg zum Festland.' Jenkins gibt seinen Männern ein Zeichen. 'Findet Wilson! Sofort!'",
        choices: [{
            text: "Die Ablenkung nutzen und die Blendgranate werfen",
            nextId: "use_distraction_flashbang",
            addClue: {
                id: "jenkins_rattled",
                text: "Du hast Jenkins erschüttert, indem du das belastende Telefongespräch erwähnt hast, das du mitgehört hattest. Er scheint die Bedrohung durch Wilsons Flucht mit den Beweisen ernst zu nehmen."
            }
        }, {
            text: "Weiter mit Jenkins sprechen, um mehr Zeit für Wilson zu gewinnen",
            nextId: "stall_for_wilson"
        }, {
            text: "Dich ergeben, in dem Wissen, dass Wilson entkommen ist",
            nextId: "surrender_wilson_escaped"
        }]
    },

    // Die Ablenkung nutzen
    use_distraction_flashbang: {
        text: "Als Jenkins seine Aufmerksamkeit kurz seinen Männern zuwendet, nutzt du den Moment. Mit einer flüssigen Bewegung wirfst du die Blendgranate. Der Knall ist ohrenbetäubend, gefolgt von gleißendem Licht und dichtem Rauch. Schreiend greifen sich Jenkins und seine Männer an die Augen. Du springst zur Falltür, ziehst den Teppich beiseite und öffnest die Luke. Ein kurzer Blick zurück zeigt Jenkins, der blind durch den Rauch taumelt. 'Das war für meine Familie', sagst du leise und steigst in den Tunnel. Der Weg ist dunkel, aber ein schwaches Licht in der Ferne zeigt dir die Richtung - Wilson muss eine Taschenlampe haben. Du rennst durch den feuchten Gang, getrieben von der Gewissheit, dass Jenkins' Männer dir bald folgen werden. Nach einer gefühlten Ewigkeit erreichst du das Ende des Tunnels. Wilson wartet am Boot, bereit abzulegen. 'Andrew!', ruft er überrascht. 'Ich dachte, du wolltest--' 'Pläne ändern sich', unterbrichst du ihn. 'Lass uns verschwinden.'",
        choices: [{
            text: "Mit Wilson im Boot fliehen", nextId: "escape_with_wilson", addClue: {
                id: "successful_escape",
                text: "Du hast die Blendgranate effektiv eingesetzt und bist durch den Tunnel geflohen. Wilson wartet mit dem Boot, und ihr könnt gemeinsam entkommen."
            }
        }, {
            text: "Vorschlagen, dass ihr euch trennt, um die Chancen zu erhöhen",
            nextId: "suggest_separate"
        }, {
            text: "Zurückblicken, ob Verfolger im Tunnel zu sehen sind",
            nextId: "look_back_pursuers"
        }]
    },

    // Mit Wilson fliehen
    escape_with_wilson: {
        text: "Ohne weitere Worte springst du ins Boot. Wilson startet den Motor, und ihr schießt vom Ufer weg, gerade als Rufe am Tunnelausgang zu hören sind. Die Lichter der Taschenlampen tanzen über die Felswände, aber ihr seid bereits außer Reichweite. Wilson lenkt das Boot geschickt um die Felsen der Bucht herum ins offene Meer. Erst als die Küste nur noch eine dunkle Linie am Horizont ist, verlangsamt er den Motor. 'Das war knapp', sagt er und reicht dir eine Thermoskanne mit Kaffee. Der warme Dampf steigt in die kühle Nachtluft. 'Also, du erinnerst dich an alles?', fragt er vorsichtig. Du nickst, der Schmerz ist präsent, aber erträglich. 'An alles. Dolores, die Kinder... was Jenkins getan hat.' Wilson legt eine Hand auf deine Schulter. 'Wir werden ihn zur Rechenschaft ziehen, Andrew. Das verspreche ich dir.'",
        choices: [{
            text: "Über eure Pläne nach Erreichen des Festlands sprechen",
            nextId: "discuss_mainland_plans",
            addClue: {
                id: "open_sea",
                text: "Ihr seid auf offener See, außerhalb der Reichweite eurer Verfolger. Der Plan, Jenkins zur Rechenschaft zu ziehen, nimmt Gestalt an."
            }
        }, {
            text: "Nach Dr. Bleich fragen und ob er in Gefahr ist",
            nextId: "ask_about_bleich_danger"
        }, {
            text: "Die Beweise sichten, die Wilson gesammelt hat", nextId: "examine_wilson_evidence"
        }]
    },

    // Pläne für das Festland besprechen
    discuss_mainland_plans: {
        text: "'Was passiert, wenn wir das Festland erreichen?', fragst du, während das Boot stetig durch die Wellen pflügt. Wilson blickt zum Horizont, wo bereits ein schwacher Lichtschein den kommenden Morgen ankündigt. 'Ich kenne einen Journalisten - Mark Sullivan. Unbestechlich und mit Verbindungen zu Bundesbehörden.' Er deutet auf den wasserdichten Beutel mit Beweisen. 'Hiermit muss die Regierung handeln, selbst gegen jemanden mit Jenkins' Verbindungen.' Er sieht dich ernst an. 'Es wird nicht einfach. Sie werden versuchen, uns zu diskreditieren, uns als geisteskranke ehemalige Patienten darzustellen.' Du nickst verstehend. 'Aber wir haben die wissenschaftlichen Beweise. Die Formel von RX-78, die Protokolle, die Zeugenaussagen.' Du denkst an all die anderen Patienten in der Klinik. 'Und wir haben die Wahrheit.' Wilson lächelt leicht. 'Ja, endlich haben wir die Wahrheit.'",
        choices: [{
            text: "Die Reise zum Festland fortsetzen (Zum Ende)",
            nextId: "ending_escape",
            addClue: {
                id: "justice_plan",
                text: "Der Plan ist, die Beweise einem vertrauenswürdigen Journalisten mit Verbindungen zu Bundesbehörden zu übergeben, um Jenkins und seine Komplizen zur Rechenschaft zu ziehen."
            }
        }, {
            text: "Über deine eigene Zukunft nachdenken, wenn alles vorbei ist",
            nextId: "contemplate_own_future"
        }, {
            text: "Eine letzte Frage über deine Familie stellen", nextId: "final_family_question"
        }]
    },

    // Über die eigene Zukunft nachdenken
    contemplate_own_future: {
        text: "Während das Boot durch die Nacht gleitet, schweift dein Blick über den sternenklaren Himmel. 'Was wird aus mir, wenn das alles vorbei ist?', fragst du leise, mehr zu dir selbst als zu Wilson. Er betrachtet dich nachdenklich. 'Das ist die Frage, nicht wahr? Wer ist Andrew Laeddis jetzt?' Er lehnt sich zurück. 'Du bist nicht mehr der Mann, der du warst, bevor JANUS dich veränderte. Aber du bist auch nicht der Marshal, der du zu sein glaubtest.' Du lässt diese Worte sinken. Tatsächlich - wer bist du jetzt? Ein Psychiater, dessen Familie ermordet wurde? Ein Opfer von Gedächtnismanipulation? Ein Rächer? 'Vielleicht', sagt Wilson sanft, 'ist das deine Chance für einen echten Neuanfang. Nicht eine aufgezwungene neue Identität, sondern eine selbstgewählte.' Du nickst langsam. Die Gedanken an Dolores und die Kinder sind schmerzhaft, aber nicht mehr lähmend. Vielleicht liegt darin eine Art Freiheit.",
        choices: [{
            text: "Die Reise zum Festland fortsetzen (Zum Ende)",
            nextId: "ending_escape",
            addClue: {
                id: "new_beginning",
                text: "Du beginnst zu erkennen, dass nach dem Abschluss dieser Sache die Möglichkeit eines echten Neuanfangs besteht - eine selbstgewählte Identität statt einer aufgezwungenen."
            }
        }, {
            text: "Vorschlagen, wieder als Psychiater zu arbeiten, um anderen zu helfen",
            nextId: "suggest_return_psychiatry"
        }, {
            text: "Fragen, ob Wilson bei dir bleiben wird", nextId: "ask_wilson_stay"
        }]
    },

    // Alternativ/Ergänzende Szenen für die Haupthandlungsstränge

    // Raum gezielt durchsuchen
    search_room: {
        text: "Du beginnst, das Zimmer systematisch zu durchsuchen. Unter dem Bett findest du nichts außer Staub. Der kleine Schreibtisch enthält leere Blätter und einen stumpfen Bleistift - offenbar wurde dem Patienten nicht viel Schreibmaterial zugestanden. Als du den schmalen Schrank öffnest, entdeckst du nur wenige einfache Kleidungsstücke. Dann fällt dein Blick auf eine lose Bodenfliese neben dem Bett. Du kniest nieder und hebst sie vorsichtig an. Darunter liegt ein in Plastik eingewickeltes Notizbuch. Die Seiten sind mit hastig gekritzelten Notizen gefüllt, viele davon wirken paranoid, andere bemerkenswert klar. Eine Passage sticht heraus: 'Sie werden jemanden schicken. Jemanden, der nicht weiß, wer er wirklich ist. Wenn du das liest und glaubst, ein Marshal zu sein - du bist es nicht. Suche nach dem Leuchtturm. Die Wahrheit wartet dort.' Die letzte Seite zeigt eine Karte der Insel mit einem markierten Weg zum Leuchtturm an der Nordküste.",
        choices: [{
            text: "Das Notizbuch mitnehmen", nextId: "take_notebook", addClue: {
                id: "hidden_notebook",
                text: "Du hast ein verstecktes Notizbuch gefunden, das andeutet, dass ein falscher 'Marshal' geschickt werden würde und dass die Wahrheit im Leuchtturm wartet."
            }
        }, {
            text: "Rachel nach dem Notizbuch fragen", nextId: "ask_rachel_notebook"
        }, {
            text: "Die Karte zum Leuchtturm kopieren und das Notizbuch zurücklegen",
            nextId: "copy_lighthouse_map"
        }]
    },

    // Das Notizbuch mitnehmen
    take_notebook: {
        text: "Du steckst das Notizbuch unter deine Jacke, während Rachel noch im Türrahmen steht. 'Haben Sie etwas gefunden, Marshal?', fragt sie mit einem Anflug von Misstrauen. 'Nichts Besonderes', entgegnest du beiläufig. 'Nur ein weiterer leerer Raum.' Ihr Blick bleibt auf dir ruhen, länger als angenehm. 'Seltsam', murmelt sie. 'Patient 67 hinterließ normalerweise... Spuren.' Du gehst zur Tür, an ihr vorbei. 'Ich würde gerne mehr über diesen Patienten erfahren. Wer war mit ihm in Kontakt?' Rachel folgt dir den Korridor entlang. 'Dr. Bleich war sein Haupttherapeut. Aber ich würde Ihre Zeit nicht mit ihm verschwenden. Er ist... weich. Zu mitfühlend für seinen eigenen Vorteil.' Ihre Worte klingen wie eine Warnung. 'Wo finde ich Dr. Bleich?', fragst du. 'Wahrscheinlich in seinem Büro im B-Flügel', antwortet sie widerwillig.",
        choices: [{
            text: "Dr. Bleich aufsuchen", nextId: "find_sheehan", addClue: {
                id: "rachel_warning",
                text: "Rachel warnte unterschwellig vor Dr. Bleich, beschrieb ihn als 'zu mitfühlend für seinen eigenen Vorteil', was darauf hindeutet, dass er möglicherweise nicht mit der Klinikleitung auf einer Linie steht."
            }
        }, {
            text: "Fragen, ob Patient 67 jemals vom Leuchtturm sprach",
            nextId: "ask_about_lighthouse"
        }, {
            text: "Dein Quartier aufsuchen, um das Notizbuch ungestört zu studieren",
            nextId: "study_notebook_alone"
        }]
    }

};
