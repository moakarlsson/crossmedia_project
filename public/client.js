let timerDisplay = document.getElementById("timerDisplay");
let stopButton = document.getElementById("stopTimer");
let logInDiv = document.getElementById("logInDiv");
let timerDIV = document.getElementById("timerDIV");
let loginButton = document.getElementById("loginButton");
let createButton = document.getElementById("createButton");


//ska tas bort sen, endast till för utvecklingen
let startButton = document.getElementById("startTimer");

//timer
let endTime;
let timerInterval;


// STARTA TIMER (ENDAST OM DEN INTE REDAN FINNS)
function startTimer() {

    let existing = localStorage.getItem("endTime");

    if (!existing) {
        endTime = Date.now() + (2 * 60 * 60 + 30 * 60) * 1000; // 2h 30min
        localStorage.setItem("endTime", endTime);
    } else {
        endTime = Number(existing);
    }

    // säkerställ att vi inte får flera intervaller
    clearInterval(timerInterval);

    timerInterval = setInterval(updateTimer, 1000);
}


// UPPDATERA TIMER
function updateTimer() {
    let now = Date.now();
    let timeLeft = Math.floor((endTime - now) / 1000);

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "0:00:00";
        localStorage.removeItem("endTime");
        return;
    }

    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    timerDisplay.textContent = hours + ":" + minutes + ":" + seconds;
}

window.addEventListener("load", function () {
    let savedEndTime = localStorage.getItem("endTime");

    if (savedEndTime) {
        endTime = Number(savedEndTime);
        timerInterval = setInterval(updateTimer, 1000);
    }
});
//Här börjar inlogg
createButton.addEventListener("click", async function () {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/createUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, password })
        });

        console.log(response.status);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fel:", error);
    }
});

stopButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    let now = Date.now();
    let timeLeft = Math.floor((endTime - now) / 1000);
    if (timeLeft < 0) timeLeft = 0;
    console.log("Tid kvar i sekunder:", timeLeft);
    localStorage.removeItem("endTime");
});


startButton.addEventListener("click", function () {
    startTimer();
});


loginButton.addEventListener("click", function () {
    spelRegler();
});

function spelRegler() {
    logInDiv.style.display = "none";
    timerDIV.style.display = "flex";
}
