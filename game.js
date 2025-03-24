// Spielsteuerung
let currentSceneId = 'start';
let playerClues = {};
let notebookExpanded = true;
let typingInterval = null;

// Prüfen, ob es sich um ein mobiles Gerät handelt
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// DOM-Elemente
const storyTextElement = document.getElementById('storyText');
const choicesElement = document.getElementById('choices');
const notebookContent = document.getElementById('notebookContent');
const notebookToggle = document.getElementById('notebookToggle');

// Notizbuch ein-/ausklappen
function toggleNotebook() {
    const notebook = document.getElementById('notebook');
    if (notebookExpanded) {
        notebook.style.maxHeight = '30px'; // Reduzierte Höhe beim Einklappen
        notebook.style.overflow = 'hidden'; // Inhalte ausblenden, die nicht in die max-height passen
        notebookToggle.textContent = 'Ausklappen';
    } else {
        notebook.style.maxHeight = '150px';
        notebook.style.overflow = 'auto';   // Overflow auf auto stellen, um Scrollen zu ermöglichen
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
function typeWriter(text, element, speed = 5, onComplete) {
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

// Funktion zum Erstellen eines Choice-Buttons mit Progress-Button-Funktionalität
function createChoiceButton(choice) {
    // Button-Container erstellen
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    buttonContainer.style.position = 'relative';
    buttonContainer.style.width = '100%';
    buttonContainer.style.height = 'auto';
    buttonContainer.style.marginBottom = '10px';

    // Button erstellen
    const button = document.createElement('button');
    button.className = 'button choice-btn';
    button.style.width = '100%';
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.backgroundColor = '#2a3b40';
    button.style.color = '#d0d0d0';
    button.style.border = 'none';
    button.style.padding = '12px 15px';
    button.style.fontSize = '1.1em';
    button.style.textAlign = 'left';
    button.style.fontFamily = 'Georgia, serif';
    button.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    button.style.WebkitTapHighlightColor = 'transparent';

    // Button-Hintergrund (Fortschrittsbalken)
    const buttonBackground = document.createElement('div');
    buttonBackground.className = 'button-background';
    buttonBackground.style.position = 'absolute';
    buttonBackground.style.top = '0';
    buttonBackground.style.left = '0';
    buttonBackground.style.width = '0%';
    buttonBackground.style.height = '100%';
    buttonBackground.style.backgroundColor = 'rgba(80, 120, 140, 0.7)';
    buttonBackground.style.transition = 'width 0.05s linear';
    buttonBackground.style.borderRadius = '5px';
    buttonBackground.style.pointerEvents = 'none';
    buttonBackground.style.zIndex = '1';

    // Text-Wrapper für den Button
    const buttonText = document.createElement('span');
    buttonText.className = 'button-text';
    buttonText.textContent = choice.text;
    buttonText.style.position = 'relative';
    buttonText.style.zIndex = '10';
    buttonText.style.pointerEvents = 'none';

    // Variablen für den Long-Press
    const requiredPressTime = 1000; // 1 Sekunde für den Long-Press
    let pressTimer = null;
    let startTime = 0;
    let rafId = null;
    let isPressed = false;

    // Funktion zum Aktualisieren des Fortschritts
    function updateProgress() {
        if (!isPressed) return;

        const elapsedTime = Date.now() - startTime;
        const progressPercent = Math.min(elapsedTime / requiredPressTime * 100, 100);

        // Setze die Breite des Hintergrunds als Fortschrittsanzeige
        buttonBackground.style.width = progressPercent + '%';

        if (progressPercent < 100 && isPressed) {
            rafId = requestAnimationFrame(updateProgress);
        }
    }

    // Funktion zum Ausführen der Aktion
    function executeAction() {
        // Hinweis zum Notizbuch hinzufügen, falls vorhanden
        if (choice.addClue) {
            playerClues[choice.addClue.id] = choice.addClue.text;
            updateNotebook();
        }

        // Nächste Szene laden
        loadScene(choice.nextId);
    }

    // Beim Drücken starten
    function startPress(e) {
        e.preventDefault(); // Verhindert Standardverhalten

        if (isPressed) return;
        isPressed = true;
        startTime = Date.now();

        // Setze eine Mindestzeit, bevor der Timer für die Aktion starten kann
        // Dies verhindert kurze Klicks auf Mobilgeräten
        const minPressTime = 100; // 100ms Mindestdruck, um unbeabsichtigte Klicks zu verhindern

        // Timer für die geforderte Zeit
        pressTimer = setTimeout(function () {
            isPressed = false;
            // Ändern Sie die Farbe für das erfolgreiche Drücken
            buttonBackground.style.backgroundColor = '#A3C2C3';
            buttonBackground.style.width = '100%';

            // Verzögerung, damit der Nutzer die erfolgreiche Aktivierung sieht
            setTimeout(() => {
                executeAction();
            }, 200);
        }, requiredPressTime);

        // Starte die Fortschrittsanzeige
        rafId = requestAnimationFrame(updateProgress);
    }

    // Beim Loslassen beenden
    function endPress(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        if (!isPressed) return;

        clearTimeout(pressTimer);
        cancelAnimationFrame(rafId);

        // Auf Mobilgeräten und Desktop: Nur ausführen, wenn der Button lange genug gedrückt wurde
        // Wir entfernen die Alternative für kurze Klicks
        {
            // Fortschrittsanzeige zurücksetzen
            buttonBackground.style.transition = 'width 0.3s ease-out';
            buttonBackground.style.width = '0%';
        }

        isPressed = false;
    }

    // Event-Listener für Desktop
    button.addEventListener('mousedown', startPress);
    button.addEventListener('mouseup', endPress);
    button.addEventListener('mouseleave', endPress);

    // Event-Listener für Mobile
    button.addEventListener('touchstart', startPress, {passive: false});
    button.addEventListener('touchend', endPress, {passive: false});
    button.addEventListener('touchcancel', endPress, {passive: false});

    // Verhindert Kontextmenü bei Rechtsklick
    button.addEventListener('contextmenu', e => e.preventDefault());

    // Verhindert Scrollen während der Touch-Interaktion
    button.addEventListener('touchmove', e => e.preventDefault(), {passive: false});

    // Alles zusammenbauen
    button.appendChild(buttonBackground);
    button.appendChild(buttonText);
    buttonContainer.appendChild(button);

    return buttonContainer;
}

function loadScene(sceneId) {
    console.log("Lade Szene:", sceneId);

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

                // Erstelle Button mit Progress-Button-Funktionalität
                const button = createChoiceButton(choice);
                choicesElement.appendChild(button);
            });
        });
    }, 500);
}

// Funktion zum Erstellen des Start-Buttons mit Progress-Button-Funktionalität
function createStartButton() {
    const startButtonContainer = document.createElement('div');
    startButtonContainer.style.textAlign = 'center';
    startButtonContainer.style.marginTop = '40px';

    // Button-Container erstellen
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    buttonContainer.style.position = 'relative';
    buttonContainer.style.width = '200px';
    buttonContainer.style.height = 'auto';
    buttonContainer.style.margin = '0 auto';

    // Button erstellen
    const startButton = document.createElement('button');
    startButton.className = 'button';
    startButton.style.width = '100%';
    startButton.style.position = 'relative';
    startButton.style.overflow = 'hidden';
    startButton.style.borderRadius = '5px';
    startButton.style.cursor = 'pointer';
    startButton.style.backgroundColor = '#2a3b40';
    startButton.style.color = '#d0d0d0';
    startButton.style.border = 'none';
    startButton.style.padding = '15px 20px';
    startButton.style.fontSize = '1.2em';
    startButton.style.fontFamily = 'Georgia, serif';
    startButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    startButton.style.WebkitTapHighlightColor = 'transparent';

    // Button-Hintergrund (Fortschrittsbalken)
    const buttonBackground = document.createElement('div');
    buttonBackground.className = 'button-background';
    buttonBackground.style.position = 'absolute';
    buttonBackground.style.top = '0';
    buttonBackground.style.left = '0';
    buttonBackground.style.width = '0%';
    buttonBackground.style.height = '100%';
    buttonBackground.style.backgroundColor = 'rgba(80, 120, 140, 0.7)';
    buttonBackground.style.transition = 'width 0.05s linear';
    buttonBackground.style.borderRadius = '5px';
    buttonBackground.style.pointerEvents = 'none';
    buttonBackground.style.zIndex = '1';

    // Text-Wrapper für den Button
    const buttonText = document.createElement('span');
    buttonText.className = 'button-text';
    buttonText.textContent = 'Spiel starten';
    buttonText.style.position = 'relative';
    buttonText.style.zIndex = '10';
    buttonText.style.pointerEvents = 'none';

    // Variablen für den Long-Press
    const requiredPressTime = 1000; // 1 Sekunde für den Long-Press
    let pressTimer = null;
    let startTime = 0;
    let rafId = null;
    let isPressed = false;

    // Funktion zum Aktualisieren des Fortschritts
    function updateProgress() {
        if (!isPressed) return;

        const elapsedTime = Date.now() - startTime;
        const progressPercent = Math.min(elapsedTime / requiredPressTime * 100, 100);

        // Setze die Breite des Hintergrunds als Fortschrittsanzeige
        buttonBackground.style.width = progressPercent + '%';

        if (progressPercent < 100 && isPressed) {
            rafId = requestAnimationFrame(updateProgress);
        }
    }

    // Funktion zum Starten des Spiels
    function executeStartAction() {
        console.log("Spiel wird gestartet!");
        startButtonContainer.remove(); // Button entfernen
        loadScene('start'); // Spiel starten
    }

    // Beim Drücken starten
    function startPress(e) {
        e.preventDefault(); // Verhindert Standardverhalten

        if (isPressed) return;
        isPressed = true;
        startTime = Date.now();

        // Setze eine Mindestzeit, bevor der Timer für die Aktion starten kann
        // Dies verhindert kurze Klicks auf Mobilgeräten
        const minPressTime = 100; // 100ms Mindestdruck, um unbeabsichtigte Klicks zu verhindern

        // Timer für die geforderte Zeit
        pressTimer = setTimeout(function () {
            isPressed = false;
            // Ändern Sie die Farbe für das erfolgreiche Drücken
            buttonBackground.style.backgroundColor = '#A3C2C3';
            buttonBackground.style.width = '100%';

            // Verzögerung, damit der Nutzer die erfolgreiche Aktivierung sieht
            setTimeout(() => {
                executeStartAction();
            }, 200);
        }, requiredPressTime);

        // Starte die Fortschrittsanzeige
        rafId = requestAnimationFrame(updateProgress);
    }

    // Beim Loslassen beenden
    function endPress(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        if (!isPressed) return;

        clearTimeout(pressTimer);
        cancelAnimationFrame(rafId);

        // Auf Mobilgeräten und Desktop: Nur ausführen, wenn der Button lange genug gedrückt wurde
        // Wir entfernen die Alternative für kurze Klicks
        {
            // Fortschrittsanzeige zurücksetzen
            buttonBackground.style.transition = 'width 0.3s ease-out';
            buttonBackground.style.width = '0%';
        }

        isPressed = false;
    }

    // Event-Listener für Desktop
    startButton.addEventListener('mousedown', startPress);
    startButton.addEventListener('mouseup', endPress);
    startButton.addEventListener('mouseleave', endPress);

    // Event-Listener für Mobile
    startButton.addEventListener('touchstart', startPress, {passive: false});
    startButton.addEventListener('touchend', endPress, {passive: false});
    startButton.addEventListener('touchcancel', endPress, {passive: false});

    // Verhindert Kontextmenü bei Rechtsklick
    startButton.addEventListener('contextmenu', e => e.preventDefault());

    // Verhindert Scrollen während der Touch-Interaktion
    startButton.addEventListener('touchmove', e => e.preventDefault(), {passive: false});

    // Alles zusammenbauen
    startButton.appendChild(buttonBackground);
    startButton.appendChild(buttonText);
    buttonContainer.appendChild(startButton);
    startButtonContainer.appendChild(buttonContainer);

    return startButtonContainer;
}

// Für die Seiteninitialisierung - nur ein Event-Handler
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM geladen, erstelle Start-Button...");
    const startButtonContainer = createStartButton();
    document.querySelector('.game-container').appendChild(startButtonContainer);
});