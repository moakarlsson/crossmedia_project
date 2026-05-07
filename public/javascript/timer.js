let timerDisplay = document.getElementById("timerDisplay");
let timerDIV = document.getElementById("timerDIV");



window.addEventListener("load", function () {
    let savedEndTime = localStorage.getItem("endTime");

    if (savedEndTime) {
        endTime = Number(savedEndTime);
        timerInterval = setInterval(updateTimer, 1000);
    }
});

//starta timer
startTimer();


// stopButton.addEventListener("click", async function () {
//     clearInterval(timerInterval);

//     let now = Date.now();
//     let timeLeft = Math.floor((endTime - now) / 1000);
//     if (timeLeft < 0) timeLeft = 0;

//     let user = await getUser();

//     await fetch("/users/saveResult", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         credentials: "include",
//         body: JSON.stringify({ timeLeft })
//     });

//     console.log("User:", user);
//     console.log("Tid kvar:", timeLeft);
// });

//Timer

window.timerInterval = undefined;

// STARTA TIMER (ENDAST OM DEN INTE REDAN FINNS)
function startTimer() {
    let endTime;
    let timerInterval;
    let existing = localStorage.getItem("endTime");

    if (!existing) {
        endTime = Date.now() + (3 * 60 * 60) * 1000; //3 timmar
        // endTime = Date.now() + (2 * 60 * 60 + 30 * 60) * 1000; // 2h 30min
        localStorage.setItem("endTime", endTime);
    } else {
        endTime = Number(existing);
    }

    clearInterval(timerInterval);
    window.timerInterval = setInterval(updateTimer, 1000);
    ;
}


// UPPDATERA TIMER
function updateTimer() {
    let now = Date.now();
    let timeLeft = Math.floor((endTime - now) / 1000);
    timerDisplay.textContent = "2: 30: 00";

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "0 : 00 : 00";
        localStorage.removeItem("endTime");
        return;
    }

    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    timerDisplay.textContent = hours + ":" + minutes + ":" + seconds;
};

async function getUser() {
    let response = await fetch("/users/me", {
        credentials: "include"
    });

    if (!response.ok) return null;
    let user = await response.json();
    return user;
};
