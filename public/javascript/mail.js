window.currentStep = "steg7";

let timerDiv = document.getElementById("timerDIV");
let leaveButton = document.getElementById("leaveButton");

const mail1 = document.querySelector("#mail1");
const mail2 = document.querySelector("#mail2");

const logInMailCOntainerDOM = document.querySelector("#logInMailContainer");
const mailContainerDOM = document.querySelector("#mailContainer");
const mailView1 = document.querySelector("#mailView1");
const mailView2 = document.querySelector("#mailView2");

const logInButtonDOM = document.querySelector("button");
const inputDOM = document.querySelector("input");
const felmeddelandeDOM = document.querySelector("#felmeddelande");

const arrowIMG1 = document.querySelector("#arrowIMG1");
const arrowIMG2 = document.querySelector("#arrowIMG2");


mailContainerDOM.style.display = "none";
felmeddelandeDOM.style.display = "none";


if (localStorage.getItem("fromDokumentbankMail") === "true") {
    logInMailCOntainerDOM.style.display = "none";
    mailContainerDOM.style.display = "block";
    timerDiv.style.visibility = "visible";
};

logInButtonDOM.addEventListener("click", () => {

    if (inputDOM.value === "figmakingen123") {
        logInMailCOntainerDOM.style.display = "none";
        mailContainerDOM.style.display = "block";
        timerDiv.style.visibility = "visible";
    }

    else {
        felmeddelandeDOM.style.display = "block";
        felmeddelandeDOM.textContent = "fel lösenord";
    }
})

mail1.addEventListener("click", () => {
    mailContainerDOM.style.display = "none";
    mailView2.style.display = "block";
})

mail2.addEventListener("click", () => {
    mailContainerDOM.style.display = "none";
    mailView1.style.display = "block";
})

arrowIMG1.addEventListener("click", () => {
    mailView1.style.display = "none";
    mailContainerDOM.style.display = "block";
})

arrowIMG2.addEventListener("click", () => {
    mailView2.style.display = "none";
    mailContainerDOM.style.display = "block";
});

if (localStorage.getItem("fromDokumentbankMail") === "true") {
    leaveButton.textContent = "Tillbaka till dokumentbanken";

    leaveButton.addEventListener("click", function () {
        localStorage.removeItem("fromDokumentbankMail");
        window.location.href = "../html/dokumentbank.html";
    });

} else {

    leaveButton.addEventListener("click", function () {
        const svar = confirm("OBS! Har du läst båda mailen och vet vart ni ska bege er nu?");
        if (svar) {
            localStorage.setItem("unlockedMail", "true");
            window.location.href = "../html/kirseberg.html";
        }
    });
}