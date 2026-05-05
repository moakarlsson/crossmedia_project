
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
    console.log(hintsData)
}
loadHints();



minSida.addEventListener("click", function () {
    window.location.href = "../html/minSida.html";
});


//popup
// function popUpHints() {
//     popupDiv.classList.add("popup")
//     overlay.classList.add("overlay");

//     // innehåll 
//     let textDiv = document.createElement("div");
//     textDiv.classList.add("popupText");

//     let hintOne = document.createElement("div");
//     let hintOneText = document.createElement("p");
//     let hintOneData = window.hints.hint1;
//     hintOneText.textContent = hintOneData[0];


//     let hintTwo = document.createElement("div");
//     let hintTwoText = document.createElement("p");
//     let hintTwoData = window.hints.hint2;
//     hintTwoText.textContent = hintTwoData[0];

//     closeButton.textContent = "Stäng";

//     hintOne.append(hintOneText);
//     hintTwo.append(hintTwoText);
//     textDiv.append(hintOne, hintTwo);
//     popupDiv.append(textDiv, closeButton);
//     main.append(overlay, popupDiv);
// };

function popUpHints() {
    popupDiv.classList.add("popup");
    overlay.classList.add("overlay");

    let textDiv = document.createElement("div");
    textDiv.classList.add("popupText");

    let currentHints = hintsData[window.currentStep];

    popupDiv.innerHTML = "";

    for (let key in currentHints) {
        let hintDiv = document.createElement("div");
        let p = document.createElement("p");

        p.textContent = currentHints[key];

        hintDiv.append(p);
        textDiv.append(hintDiv);
    }

    let hintOneDiv = document.createElement("div");

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
