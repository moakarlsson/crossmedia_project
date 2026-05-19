import { response } from "express";

let timerDisplay = document.getElementById("timerDisplay");
let timerDIV = document.getElementById("timerDIV");
let endTime;
let finalTime = null;

window.addEventListener("load", function () {
    let savedEndTime = localStorage.getItem("endTime");

    if (savedEndTime) {
        endTime = Number(savedEndTime);
        timerInterval = setInterval(updateTimer, 1000);
    }
});


function stopTimer() {
    clearInterval(window.timerInterval);
    let now = Date.now();
    let timeLeft = Math.floor((endTime - now) / 1000);

    if (timeLeft < 0) {
        timeLeft = 0;
    }

    // spara tiden
    finalTime = timeLeft;
    localStorage.setItem("finalTime", finalTime);
    console.log("Sluttid:", finalTime);
    localStorage.removeItem("endTime");
    saveResult(finalTime);

    return finalTime;
}

//Timer

window.timerInterval = undefined;

// STARTA TIMER (ENDAST OM DEN INTE REDAN FINNS)
function startTimer() {
    let existing = localStorage.getItem("endTime");

    if (!existing) {
        endTime = Date.now() + (3 * 60 * 60) * 1000; //3 timmar
        // endTime = Date.now() + (2 * 60 * 60 + 30 * 60) * 1000; // 2h 30min
        localStorage.setItem("endTime", endTime);
        localStorage.setItem("startTime", Date.now()) //Sparar starttiden
    } else {
        endTime = Number(existing);
    }

    clearInterval(window.timerInterval);
    window.timerInterval = setInterval(updateTimer, 1000);
    ;
}

//starta timer
startTimer();

async function saveResult(timeLeft) {
    const startTime = localStorage.getItem("startTime");
    const endTime = Date.now();

    console.log("Sparar resultat:", { timeLeft, startTime, endTime });

    try {
        const res = await fetch("/users/saveResult", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                timeLeft: timeLeft,
                startTime: Number(startTime),
                endTime: endTime
            })
        });
        const data = await res.json();
        console.log("Svar från server:", data);
    } catch(error) {
        console.error("Kunde inte spara resultatet:", error);
    }
}


// UPPDATERA TIMER
function updateTimer() {
    let now = Date.now();
    let timeLeft = Math.floor((endTime - now) / 1000);

    if (timeLeft <= 0) {
        clearInterval(window.timerInterval);
        timerDisplay.textContent = "0 : 00 : 00";
        localStorage.removeItem("endTime");
        saveResult(0);
        showGameOverPopup();
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


function showGameOverPopup() {

    // Mörk bakgrund
    let overlay = document.createElement("div");
    overlay.id = "gameOverOverlay";

    // Popup
    let popup = document.createElement("div");
    popup.id = "gameOverPopup";

    let h2 = document.createElement("h2");
    h2.textContent = "Tiden är ute!";

    let p = document.createElement("p");
    p.textContent =
        "Ni hann inte stoppa mördaren innan tiden tog slut.";

    // Knapp 1
    let revealButton = document.createElement("button");
    revealButton.textContent = "Få reda på slutet";

    // Knapp 2
    let logoutButton = document.createElement("button");
    logoutButton.textContent = "Avsluta spel";

    // Om spelarna vill se slutet
    revealButton.addEventListener("click", function () {
        window.location.href = "../html/sistaSida2.html";
    });

    // Om spelarna vill avsluta
    logoutButton.addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "../html/login.html";
    });

    popup.append(h2, p, revealButton, logoutButton);
    document.body.append(overlay, popup);
}



function testTimer() {

    endTime = Date.now() + (5 * 1000);

    localStorage.setItem("endTime", endTime);

    clearInterval(window.timerInterval);

    window.timerInterval = setInterval(updateTimer, 1000);

}