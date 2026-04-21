let timerDisplay = document.getElementById("timerDisplay");
let stopButton = document.getElementById("stopTimer");
let logInDiv = document.getElementById("logInDiv");
let timerDIV = document.getElementById("timerDIV");
let loginButton = document.getElementById("loginButton");

//ska tas bort sen, endast till för utvecklingen
let startButton = document.getElementById("startTimer");

//timer
let startTime = 2 * 60 * 60 + 30 * 60; // 2h 30min = 9000 sek
let timerInterval;

function startTimer() {
    timerInterval = setInterval(function () {
        let hours = Math.floor(startTime / 3600);
        let minutes = Math.floor((startTime % 3600) / 60);
        let seconds = startTime % 60;

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        timerDisplay.textContent = hours + ":" + minutes + ":" + seconds;

        //stoppa vid 0
        if (startTime <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "0:00:00";
            return;
        }

        startTime--;
    }, 1000);
};


stopButton.addEventListener("click", function () {
    clearInterval(timerInterval);
});

startButton.addEventListener("click", function () {
    startTimer();
});

loginButton.addEventListener("click", function () {
    spelRegler();
});


function spelRegler() {
    logInDiv.style.display = "none";
    timerDIV.style.display = "flex"
};
