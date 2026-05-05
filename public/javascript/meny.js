
let minSida = document.getElementById("minSida");
let hintButton = document.getElementById("hint");
let main = document.querySelector("main");
let closeButton = document.createElement("button");
let popupDiv = document.createElement("div");
let overlay = document.createElement("div");


minSida.addEventListener("click", function () {
    window.location.href = "../html/minSida.html";
});


//popup
function popUpHints() {
    popupDiv.classList.add("popup")
    overlay.classList.add("overlay");

    // innehåll 
    let textDiv = document.createElement("div");
    textDiv.classList.add("popupText");

    let hintOne = document.createElement("div");
    let hintOneText = document.createElement("p");
    hintOneText.textContent = "Här kommer dina hints...";

    let hintTwo = document.createElement("div");
    let hintTwoText = document.createElement("p");
    hintTwoText.textContent = "Här kommer dina hints...";

    closeButton.textContent = "Stäng";

    hintOne.append(hintOneText);
    hintTwo.append(hintTwoText);
    textDiv.append(hintOne, hintTwo);
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
