
let minSida = document.getElementById("minSida");
let hintButton = document.getElementById("hint");
let main = document.querySelector("main");
let closeButton = document.createElement("button");
let popupDiv = document.createElement("div");
let overlay = document.createElement("div");


let hintsData = {};

async function loadHints() {
    let response = await fetch("../hints.json");
    hintsData = await response.json();
}
loadHints();



minSida.addEventListener("click", function () {
    window.location.href = "../html/minSida.html";
});


function popUpHints() {
    popupDiv.classList.add("popup");
    overlay.classList.add("overlay");

    let textDiv = document.createElement("div");
    textDiv.classList.add("popupText");

    let currentHints = hintsData[window.currentStep];

    popupDiv.innerHTML = "";

    let hintOneDiv = document.createElement("div");
    let pKlickOne = document.createElement("p");
    pKlickOne.textContent = "Se hint 1";
    pKlickOne.style.fontSize = "24px";
    pKlickOne.style.fontWeight = "bold";
    let pOne = document.createElement("p");
    hintOneDiv.append(pKlickOne, pOne);
    pOne.textContent = currentHints.hint1;
    pOne.style.visibility = "hidden";


    pKlickOne.addEventListener("click", function () {
        pOne.style.visibility = "visible";
    });

    let hintTwoDiv = document.createElement("div");
    let pKlickTwo = document.createElement("p");
    pKlickTwo.textContent = "Se hint 2";
    pKlickTwo.style.fontSize = "24px";
    pKlickTwo.style.fontWeight = "bold";
    let pTwo = document.createElement("p");
    hintTwoDiv.append(pKlickTwo, pTwo);
    pTwo.textContent = currentHints.hint2;
    pTwo.style.visibility = "hidden";

    pKlickTwo.addEventListener("click", function () {
        pTwo.style.visibility = "visible";
    })

    textDiv.append(hintOneDiv, hintTwoDiv);


    closeButton.textContent = "Stäng";
    popupDiv.append(textDiv, closeButton);
    main.append(overlay, popupDiv);
};


hintButton.addEventListener("click", function () {
    popUpHints();
    popupDiv.style.display = "block";
    overlay.style.display = "block";
});

closeButton.addEventListener("click", function () {
    popupDiv.style.display = "none";
    overlay.style.display = "none";
});
