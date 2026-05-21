
let main = document.querySelector("main");
let closeHintButton = document.createElement("button");
let popupDiv = document.createElement("div");
let overlay = document.createElement("div");
let footer = document.getElementById("footer");

let hintsData = {};

async function loadHints() {
    let response = await fetch("../hints.json");
    hintsData = await response.json();
}
loadHints();

function popUpHints() {
    popupDiv.classList.add("popup");
    overlay.classList.add("overlay");

    let textDiv = document.createElement("div");
    textDiv.classList.add("popupText");

    let currentHints = hintsData[window.currentStep];

    popupDiv.innerHTML = "";

    if (!currentHints) {
        let noHints = document.createElement("p");
        noHints.textContent = "Finns inga hints till denna del av spelet.";
        textDiv.append(noHints);

    } else {
        // HINT 1
        let hintOneDiv = document.createElement("div");

        let pKlickOne = document.createElement("p");
        pKlickOne.textContent = "Se hint 1";
        pKlickOne.style.fontSize = "24px";
        pKlickOne.style.fontWeight = "bold";

        let pOne = document.createElement("p");
        pOne.textContent = currentHints.hint1;
        pOne.style.visibility = "hidden";

        hintOneDiv.append(pKlickOne, pOne);

        pKlickOne.addEventListener("click", function () {
            pOne.style.visibility = "visible";
        });

        // HINT 2
        let hintTwoDiv = document.createElement("div");

        let pKlickTwo = document.createElement("p");
        pKlickTwo.textContent = "Se hint 2";
        pKlickTwo.style.fontSize = "24px";
        pKlickTwo.style.fontWeight = "bold";

        let pTwo = document.createElement("p");
        pTwo.textContent = currentHints.hint2;
        pTwo.style.visibility = "hidden";

        hintTwoDiv.append(pKlickTwo, pTwo);

        pKlickTwo.addEventListener("click", function () {
            pTwo.style.visibility = "visible";
        });
        textDiv.append(hintOneDiv, hintTwoDiv);
    }
    closeHintButton.textContent = "Stäng";
    popupDiv.append(textDiv, closeHintButton);
    main.append(overlay, popupDiv);
}

//MENY (FOOTER)
if (footer) {
    footer.innerHTML = `
        
            <div id="hintMenu">
                <img id="hintIconUNfill"
                src="../assets/icons/hintUNfill.png">
            </div>

            <div id="dokumentbankMenu">
                <img id="dokumentbankUNfill"
                src="../assets/icons/dokumentbankUNfill.png">
            </div>

            <div id="minSidaMenu">
                <img id="minSidaUNfill"
                src="../assets/icons/minSidaUNfill.png">
            </div>
        
    `;
}


let hintMenu = document.querySelector("#hintMenu");
let hintIcon = document.querySelector("#hintIconUNfill");
let dokumentbankIcon = document.querySelector("#dokumentbankUNfill");
let minSidaIcon = document.querySelector("#minSidaUNfill");
let dokumentbankMenu = document.querySelector("#dokumentbankMenu");
let minSidaMenu = document.querySelector("#minSidaMenu");

let hintUNfill = document.querySelector(".hintUNfill");

hintMenu.addEventListener("click", function () {
    hintIcon.src = "../assets/icons/hintFILL.png";
    hintMenu.style.borderBottom = "1px solid black";

    dokumentbankMenu.style.borderBottom = "none";
    dokumentbankIcon.src = "../assets/icons/dokumentbankUNfill.png";

    minSidaMenu.style.borderBottom = "none";
    minSidaIcon.src = "../assets/icons/minSidaUNfill.png";

    popUpHints();
    popupDiv.style.display = "block";
    overlay.style.display = "block";
});

closeHintButton.addEventListener("click", function () {
    popupDiv.style.display = "none";
    overlay.style.display = "none";
    hintIcon.src = "../assets/icons/hintUNfill.png";
    hintMenu.style.borderBottom = "none";
});

dokumentbankMenu.addEventListener("click", function () {
    dokumentbankIcon.src = "../assets/icons/dokumentbankFILL.png"
    dokumentbankMenu.style.borderBottom = "1px solid black";

    localStorage.setItem("savedPage", window.location.href);
    localStorage.setItem("savedStep", window.currentStep);

    minSidaMenu.style.borderBottom = "none";
    minSidaIcon.src = "../assets/icons/minSidaUNfill.png";

    hintMenu.style.borderBottom = "none";
    hintIcon.src = "../assets/icons/hintUNfill.png";

    window.location.href = "../html/dokumentbank.html";
})

minSidaMenu.addEventListener("click", function () {
    minSidaIcon.src = "../assets/icons/minSidaFILL.png"
    minSidaMenu.style.borderBottom = "1px solid black";

    dokumentbankMenu.style.borderBottom = "none";
    dokumentbankIcon.src = "../assets/icons/dokumentbankUNfill.png";

    hintMenu.style.borderBottom = "none";
    hintIcon.src = "../assets/icons/hintUNfill.png";

    window.location.href = "../html/minSida.html"
});