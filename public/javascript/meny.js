
let main = document.querySelector("main");
let closeHintButton = document.createElement("button");
let popupDiv = document.createElement("div");
let overlay = document.createElement("div");
let footer = document.getElementById("footer");


// if (minSida) {
//     minSida.addEventListener("click", function () {
//         window.location.href = "../html/minSida.html";
//     });
// };

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

    closeHintButton.textContent = "Stäng";
    popupDiv.append(textDiv, closeHintButton);
    main.append(overlay, popupDiv);
};


//MENY (FOOTER)

if (footer) {
    footer.innerHTML = `
        <div id="footerDIV">
            <div id="hintMenu">
                <img id="hintIconUNfill"
                src="../assets/icons/hintUNfill.png">
            </div>

            <div id="spelplanMenu">
                <img id="spelplanUNfill"
                src="../assets/icons/spelplanUNfill.png">
            </div>

            <div id="minSidaMenu">
                <img id="minSidaUNfill"
                src="../assets/icons/minSidaUNfill.png">
            </div>
        </div>
    `;
}

// let rulesBtn = document.getElementById("showRulesBtn");
// let rulesDiv = document.getElementById("spelregler");
// let closeRulesBtn = document.getElementById("closeRulesBtn");

// if (rulesBtn) {
//     rulesBtn.addEventListener("click", function () {
//         if (rulesDiv.style.display === "block") {
//             rulesDiv.style.display = "none";
//         } else {
//             rulesDiv.style.display = "block";
//         }
//     });
// }

// if (closeRulesBtn) {
//     closeRulesBtn.addEventListener("click", function () {
//         rulesDiv.style.display = "none";
//     });
// }


let hintMenu = document.querySelector("#hintMenu");
let hintIcon = document.querySelector("#hintIconUNfill");
let spelplanIcon = document.querySelector("#spelplanUNfill");
let minSidaIcon = document.querySelector("#minSidaUNfill");
let spelplanMenu = document.querySelector("#spelplanMenu");
let minSidaMenu = document.querySelector("#minSidaMenu");

let hintUNfill = document.querySelector(".hintUNfill");

hintMenu.addEventListener("click", function () {
    hintIcon.src = "../assets/icons/hintFILL.png";
    hintMenu.style.borderBottom = "1px solid black";

    spelplanMenu.style.borderBottom = "none";
    spelplanIcon.src = "../assets/icons/spelplanUNfill.png";

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


spelplanMenu.addEventListener("click", function () {
    spelplanIcon.src = "../assets/icons/spelplanFILL.png"
    spelplanMenu.style.borderBottom = "1px solid black";

    minSidaMenu.style.borderBottom = "none";
    minSidaIcon.src = "../assets/icons/minSidaUNfill.png";

    hintMenu.style.borderBottom = "none";
    hintIcon.src = "../assets/icons/hintUNfill.png";
})

minSidaMenu.addEventListener("click", function () {
    minSidaIcon.src = "../assets/icons/minSidaFILL.png"
    minSidaMenu.style.borderBottom = "1px solid black";

    spelplanMenu.style.borderBottom = "none";
    spelplanIcon.src = "../assets/icons/spelplanUNfill.png";

    hintMenu.style.borderBottom = "none";
    hintIcon.src = "../assets/icons/hintUNfill.png";
});