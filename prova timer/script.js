// script.js

// Tempo totale del timer in secondi


// Seleziona il cerchio e il testo del timer
const circle = document.querySelector('.progress-ring__circle');
const timeDisplay = document.getElementById('time');

// Calcola la circonferenza del cerchio
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

// Imposta la circonferenza del cerchio e la lunghezza iniziale del tratto
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

// Funzione per aggiornare la barra circolare
//function setProgress(percent) {
    //const offset = circumference - (percent / 100) * circumference;
    //circle.style.strokeDashoffset = offset;
//}

// Funzione per aggiornare il timer
function updateTimer(timeLeft) {
    timeDisplay.textContent = timeLeft;
    //const percent = (timeLeft / totalTime) * 100;
    const offset = circumference - (timeLeft / 60) *circumference;
    //setProgress(percent);
    circle.style.strokeDashoffset = offset;
}

// Funzione per far partire il timer
function startTimer() {
    let timeLeft = 60;

    const interval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(interval);
        } else {
            timeLeft--;
            updateTimer(timeLeft);
        }
    }, 1000);
}

// Inizia il timer
startTimer();
