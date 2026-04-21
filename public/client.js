let timerDisplay = document.getElementById("timerDisplay");
let stopButton = document.getElementById("stopTimer");

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
}

startTimer();

stopButton.addEventListener("click", function () {
    clearInterval(timerInterval);
});

