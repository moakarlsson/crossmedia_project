let timerDisplay = document.getElementById("timerDisplay");


async function testing() {
    let response = await fetch("http://localhost:3000/test");
    let product = await response.text();

    console.log(product);
};



//timer
let startTime = 2 * 60 * 60 + 30 * 60; // 2h 30min = 9000 sek

function startTimer() {
    setInterval(function () {
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

        startTime--;
    }, 1000);
}

startTimer();

// 2 timmar = 120min
// 30 min + 120min =150min 



testing();