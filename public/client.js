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

function startTimer() {
    endTime = Date.now() + (2 * 60 * 60 + 30 * 60) * 1000;
    localStorage.setItem("endTime", endTime);
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let now = Date.now();
    let timeLeft = Math.floor((endTime - now) / 1000);

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "0:00:00";
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
document.getElementById("createButton").addEventListener("click", async function() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    const response = await fetch("/createUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, password })
    });
    
    const data = await response.json();
    console.log(data);

});

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
