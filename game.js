// Sound-Zustand und Sound-Toggle-Button
let soundEnabled = true;
let audioInitialized = false;
let ambientSound = null;

// Spielsteuerung
let currentSceneId = 'start';
let playerClues = {};
let notebookExpanded = true;
let typingInterval = null;

// DOM-Elemente
const storyTextElement = document.getElementById('storyText');
const choicesElement = document.getElementById('choices');
const notebookContent = document.getElementById('notebookContent');
const notebookToggle = document.getElementById('notebookToggle');

// Funktion zum Erstellen eines einfacheren Ambient-Sounds
const createAmbientSound = () => {
    try {
        console.log("Initialisiere Audio...");
        const ctx = new (window.AudioContext || window.webkitAudioContext)();

        // Reduzierte Anzahl von Oszillatoren - besser für Performance
        const oscillator1 = ctx.createOscillator();
        const oscillator2 = ctx.createOscillator();

        // Noise-Generator für Wind-Effekt
        const noiseNode = createNoiseGenerator(ctx);

        // Gain Nodes
        const mainGain = ctx.createGain();
        const osc1Gain = ctx.createGain();
        const osc2Gain = ctx.createGain();
        const noiseGain = ctx.createGain();

        // Filter für das Rauschen
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 400;
        filter.Q.value = 0.5;

        // Einfachere Oszillator-Einstellungen
        oscillator1.type = 'sine';
        oscillator1.frequency.value = 70;
        osc1Gain.gain.value = 0.051

        oscillator2.type = 'triangle';
        oscillator2.frequency.value = 120;
        osc2Gain.gain.value = 0.02;

        noiseGain.gain.value = 0.05;

        // Ein einzelner LFO für grundlegende Modulation
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();

        lfo.type = 'sine';
        lfo.frequency.value = 0.1; // Sehr langsame Modulation
        lfoGain.gain.value = 20; // Modulationstiefe

        // Verbindungen für den LFO
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        // Audio-Verbindungen
        oscillator1.connect(osc1Gain);
        oscillator2.connect(osc2Gain);
        noiseNode.connect(filter);
        filter.connect(noiseGain);

        osc1Gain.connect(mainGain);
        osc2Gain.connect(mainGain);
        noiseGain.connect(mainGain);

        mainGain.connect(ctx.destination);

        // Starten der Oszillatoren
        oscillator1.start();
        oscillator2.start();
        lfo.start();

        // Anfangs stummschalten
        mainGain.gain.value = 0;

        // Einfachere Wind-Variation mit weniger Ressourcenverbrauch
        let windInterval = null;

        console.log("Audio initialisiert!");

        return {
            play: () => {
                console.log("Sound abspielen...");
                if (soundEnabled) {
                    mainGain.gain.setValueAtTime(0, ctx.currentTime);
                    mainGain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 1);

                    // Wind-Variationen nur starten, wenn Sound aktiviert ist
                    if (!windInterval) {
                        windInterval = setInterval(() => {
                            if (soundEnabled) {
                                // Gelegentliche Filter-Änderungen
                                filter.frequency.linearRampToValueAtTime(
                                    300 + Math.random() * 200,
                                    ctx.currentTime + 2
                                );
                            }
                        }, 4000);
                    }
                }
            },
            stop: () => {
                mainGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
                if (windInterval) {
                    clearInterval(windInterval);
                    windInterval = null;
                }
            },
            toggle: (enable) => {
                console.log("Toggle Sound:", enable);
                if (enable) {
                    mainGain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.5);

                    // Wind-Variationen nur starten, wenn Sound aktiviert ist
                    if (!windInterval) {
                        windInterval = setInterval(() => {
                            if (soundEnabled) {
                                // Gelegentliche Filter-Änderungen
                                filter.frequency.linearRampToValueAtTime(
                                    300 + Math.random() * 200,
                                    ctx.currentTime + 2
                                );
                            }
                        }, 4000);
                    }
                } else {
                    mainGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
                    if (windInterval) {
                        clearInterval(windInterval);
                        windInterval = null;
                    }
                }
            }
        };
    } catch (e) {
        console.error("Fehler bei Audio-Initialisierung:", e);
        // Dummy-Objekt zurückgeben, wenn Audio nicht initialisiert werden kann
        return {
            play: () => {
                console.log("Audio play (dummy)");
            },
            stop: () => {
                console.log("Audio stop (dummy)");
            },
            toggle: () => {
                console.log("Audio toggle (dummy)");
            }
        };
    }
};

// Einfachere Hilfsfunktion zur Erzeugung eines Rauschens
function createNoiseGenerator(audioContext) {
    // Kleineres Buffer für bessere Performance
    const bufferSize = audioContext.sampleRate;
    const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
    }

    const noise = audioContext.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;
    noise.start();

    return noise;
}

// Notizbuch ein-/ausklappen
function toggleNotebook() {
    const notebook = document.getElementById('notebook');
    if (notebookExpanded) {
        notebook.style.maxHeight = '45px';
        notebookToggle.textContent = 'Ausklappen';
    } else {
        notebook.style.maxHeight = '150px';
        notebookToggle.textContent = 'Einklappen';
    }
    notebookExpanded = !notebookExpanded;
}

notebookToggle.addEventListener('click', toggleNotebook);
notebookToggle.addEventListener('touchend', function (e) {
    e.preventDefault(); // Verhindert Ghost-Klicks
    toggleNotebook();
});

// Funktion zum Aktualisieren des Notizbuchs
function updateNotebook() {
    notebookContent.innerHTML = '';

    if (Object.keys(playerClues).length === 0) {
        notebookContent.innerHTML = '<div class="clue">Keine Hinweise gefunden.</div>';
        return;
    }

    for (const clueId in playerClues) {
        const clueElement = document.createElement('div');
        clueElement.className = 'clue';
        clueElement.textContent = playerClues[clueId];
        notebookContent.appendChild(clueElement);
    }
}

// Überarbeitete Typewriter-Funktion mit Callback für 'fertig'
function typeWriter(text, element, speed = 30, onComplete) {
    let i = 0;
    element.innerHTML = '';

    clearInterval(typingInterval);

    // Text in Paragraphen aufteilen
    const paragraphs = text.split('\n\n');

    // Erzeuge leere Absätze für jeden zukünftigen Paragraphen
    element.innerHTML = paragraphs.map(() => '<p></p>').join('');
    const paragraphElements = element.querySelectorAll('p');

    // Aktueller Paragraph und Position innerhalb des Paragraphen
    let currentParagraph = 0;
    let positionInParagraph = 0;

    // Jeden Buchstaben einzeln hinzufügen und dabei in Absätzen formatieren
    typingInterval = setInterval(() => {
        if (currentParagraph < paragraphs.length) {
            // Füge den nächsten Buchstaben zum aktuellen Paragraphen hinzu
            if (positionInParagraph < paragraphs[currentParagraph].length) {
                paragraphElements[currentParagraph].textContent += paragraphs[currentParagraph][positionInParagraph];
                positionInParagraph++;
            } else {
                // Gehe zum nächsten Paragraphen
                currentParagraph++;
                positionInParagraph = 0;
            }

            // Automatisch nach unten scrollen während des Tippens
            element.scrollTop = element.scrollHeight;
        } else {
            clearInterval(typingInterval);

            // Rufe den Callback auf, wenn der Typewriter fertig ist
            if (typeof onComplete === 'function') {
                onComplete();
            }
        }
    }, speed);
}

// Funktion zum Laden einer Szene
function loadScene(sceneId) {
    console.log("Lade Szene:", sceneId);

    // Wenn Audio initialisiert ist, abspielen
    if (audioInitialized && ambientSound) {
        ambientSound.play();
    }

    currentSceneId = sceneId;
    const scene = gameData[sceneId];

    if (!scene) {
        console.error("Szene nicht gefunden:", sceneId);
        return;
    }

    // Choices leeren
    choicesElement.innerHTML = '';

    // Text mit Verzögerung anzeigen
    setTimeout(() => {
        // Starte den Typewriter-Effekt und übergebe eine Callback-Funktion
        // die aufgerufen wird, wenn der Typewriter fertig ist
        typeWriter(scene.text, storyTextElement, 30, () => {
            // Zeige die Auswahlmöglichkeiten erst nach Abschluss des Typewriter-Effekts an
            scene.choices.forEach(choice => {
                // Prüfen, ob die Entscheidung einen bestimmten Hinweis erfordert
                if (choice.requireClue && !playerClues[choice.requireClue]) {
                    return; // Diese Entscheidung nicht anzeigen
                }

                const button = document.createElement('button');
                button.className = 'choice-btn';
                button.textContent = choice.text;

                // Click-Handler für Desktop
                button.addEventListener('click', () => {
                    // Hinweis zum Notizbuch hinzufügen, falls vorhanden
                    if (choice.addClue) {
                        playerClues[choice.addClue.id] = choice.addClue.text;
                        updateNotebook();
                    }

                    // Nächste Szene laden
                    loadScene(choice.nextId);
                });

                // Touch-Handler für mobile Geräte
                button.addEventListener('touchend', (e) => {
                    e.preventDefault(); // Verhindert doppelte Klicks
                    // Hinweis zum Notizbuch hinzufügen, falls vorhanden
                    if (choice.addClue) {
                        playerClues[choice.addClue.id] = choice.addClue.text;
                        updateNotebook();
                    }

                    // Nächste Szene laden
                    loadScene(choice.nextId);
                });

                choicesElement.appendChild(button);
            });
        });
    }, 500);
}

// Funktion zum Initialisieren des Sounds nach einer Benutzerinteraktion
function initializeAudio() {
    if (!audioInitialized) {
        console.log("Starte Audio-Initialisierung...");
        ambientSound = createAmbientSound();
        audioInitialized = true;

        // Sound-Toggle-Button erstellen
        const soundToggle = document.createElement('button');
        soundToggle.className = 'sound-toggle';
        soundToggle.title = 'Sound ein/aus';

        const iconElement = document.createElement('div');
        iconElement.className = 'icon sound-on';
        soundToggle.appendChild(iconElement);

        soundToggle.addEventListener('click', () => {
            soundEnabled = !soundEnabled;
            ambientSound.toggle(soundEnabled);
            iconElement.className = soundEnabled ? 'icon sound-on' : 'icon sound-off';
        });

        document.body.appendChild(soundToggle);
    }
}

// Spiel starten mit Start-Button anstelle von automatischem Start
window.onload = function () {
    console.log("Seite geladen, erstelle Start-Button...");

    const startButtonContainer = document.createElement('div');
    startButtonContainer.style.textAlign = 'center';
    startButtonContainer.style.marginTop = '40px';

    const startButton = document.createElement('button');
    startButton.textContent = 'Spiel starten';
    startButton.className = 'choice-btn';
    startButton.style.display = 'inline-block';
    startButton.style.minWidth = '200px';

    // Click-Handler für Desktop
    startButton.addEventListener('click', () => {
        console.log("Spiel-Start-Button geklickt");
        // initializeAudio(); // Audio nach Benutzerinteraktion initialisieren
        startButtonContainer.remove(); // Button entfernen
        loadScene('start'); // Spiel starten
    });

    // Touch-Handler für mobile Geräte
    startButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log("Spiel-Start-Button getippt");
        // initializeAudio(); // Audio nach Benutzerinteraktion initialisieren
        startButtonContainer.remove(); // Button entfernen
        loadScene('start'); // Spiel starten
    });

    startButtonContainer.appendChild(startButton);
    document.querySelector('.game-container').appendChild(startButtonContainer);
};