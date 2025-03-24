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

// Nach Dr. Jenkins und seiner Motivation fragen
    jenkins_motivation: {
        text: "Du fragst nach Dr. Jenkins und seinen Motiven. Dr. Bleich wirkt beunruhigt. 'Er war einst ein idealistischer Arzt. Brillant. Sein Ziel war, PTSD bei Kriegsveteranen zu heilen, indem er traumatische Erinnerungen selektiv entfernte.' Seine Stimme wird bitter. 'Dann kamen die Militärverträge. Das Geld. Die Macht.' Er senkt die Stimme. 'Sie fragen nach seiner Motivation? Kontrolle. Die Fähigkeit, Menschen neu zu programmieren. Loyalitäten zu ändern. Identitäten zu erschaffen.' Er schüttelt den Kopf. 'Er glaubt, dass Bewusstsein nur ein chemischer Prozess ist, den man manipulieren kann. Und er hat bewiesen, dass er recht hat. Das macht ihn so gefährlich.'",
        choices: [{
            text: "Fragen, warum die Klinikleitung diese Arbeit zulässt",
            nextId: "ask_administration_approval"
        }, {
            text: "Fragen, ob Dr. Bleich selbst an dem Projekt mitgewirkt hat",
            nextId: "ask_Bleich_involvement",
            addClue: {
                id: "jenkins_control",
                text: "Dr. Jenkins' Hauptmotivation ist Kontrolle und die Macht, menschliches Bewusstsein zu manipulieren und neu zu programmieren."
            }
        }, {
            text: "Nach dem verschwundenen Dr. Wilson fragen", nextId: "patient67_connection"
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
    }
};
