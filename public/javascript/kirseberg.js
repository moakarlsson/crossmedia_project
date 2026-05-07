
let spelKirsebergDIV = document.getElementById("spelinnehåll");

// function clueOne() {
//     //På lekpats - ska till scenen
//     spelKirsebergDIV.innerHTML = "";
//     window.currentStep = "steg8";

//     let contentDiv = document.createElement("div");

//     let h3 = document.createElement("h3");
//     h3.textContent = "Pusselbitarna börjar falla på plats...";

//     let img = document.createElement("img");
//     img.src = "../assets/images/nypon.png";
//     img.classList.add("pic");

//     let text = document.createElement("p");
//     text.textContent = "När ni löst den aktuella uppgfiten kan ni klicka på knappen 'Gå vidare' för att gå vidare till nästa steg."

//     let nextButton = document.createElement("button");
//     nextButton.textContent = "Gå vidare";
//     nextButton.classList.add("buttonPlacement");

//     nextButton.addEventListener("click", function () {
//         clueTwo();
//     });

//     contentDiv.append(h3, img, text, nextButton);
//     spelKirsebergDIV.append(contentDiv);

// };
// clueOne();


// function clueTwo() {
//     //På scenen - ska till lokstallarna    

//     spelKirsebergDIV.innerHTML = "";
//     window.currentStep = "steg9";
//     let contentDiv = document.createElement("div");

//     let h3 = document.createElement("h3");
//     h3.textContent = "Nästa ledtråd väntar!";

//     let img = document.createElement("img");
//     img.src = "../assets/images/nypon.png";
//     img.classList.add("pic");

//     let text = document.createElement("p");
//     text.textContent = "När ni löst den aktuella uppgfiten kan ni klicka på knappen 'Gå vidare' för att gå vidare till nästa steg."

//     let nextButton = document.createElement("button");
//     nextButton.textContent = "Gå vidare";
//     nextButton.classList.add("buttonPlacement");

//     nextButton.addEventListener("click", function () {
//         clueThree();
//     });

//     contentDiv.append(h3, img, text, nextButton);
//     spelKirsebergDIV.append(contentDiv);
// };

// function clueThree() {
//     //Vid lokstallarna - ska till Cirkushotellet

//     spelKirsebergDIV.innerHTML = "";
//     window.currentStep = "steg10";
//     let contentDiv = document.createElement("div");

//     let h3 = document.createElement("h3");
//     h3.textContent = "Ni är någon på spåren…";

//     let img = document.createElement("img");
//     img.src = "../assets/images/nypon.png";
//     img.classList.add("pic");

//     let text = document.createElement("p");
//     text.textContent = "När ni löst den aktuella uppgfiten kan ni klicka på knappen 'Gå vidare' för att gå vidare till nästa steg."

//     let nextButton = document.createElement("button");
//     nextButton.textContent = "Gå vidare";
//     nextButton.classList.add("buttonPlacement");

//     nextButton.addEventListener("click", function () {
//         clueFour();
//     });

//     contentDiv.append(h3, img, text, nextButton);
//     spelKirsebergDIV.append(contentDiv);
// }


// function clueFour() {
//     //Vid cirkushotellet- ska till fängelset 
//     spelKirsebergDIV.innerHTML = "";
//     window.currentStep = "steg11";
//     let contentDiv = document.createElement("div");

//     let h3 = document.createElement("h3");
//     h3.textContent = "Nu tätnar mysteriet...";

//     let img = document.createElement("img");
//     img.src = "../assets/images/nypon.png";
//     img.classList.add("pic");

//     let text = document.createElement("p");
//     text.textContent = "När ni löst den aktuella uppgfiten kan ni klicka på knappen 'Gå vidare' för att gå vidare till nästa steg."

//     let nextButton = document.createElement("button");
//     nextButton.textContent = "Gå vidare";
//     nextButton.classList.add("buttonPlacement");

//     nextButton.addEventListener("click", function () {
//         clueFive();
//     });

//     contentDiv.append(h3, img, text, nextButton);
//     spelKirsebergDIV.append(contentDiv);

// }


function clueFive() {
    //Vid fängelset, sista stället - ska sedan avsluta
    spelKirsebergDIV.innerHTML = "";
    window.currentStep = "steg12";

    let contentDiv = document.createElement("div");

    let divInputFält = document.createElement("div");
    divInputFält.classList.add("divInputFält");

    let endingText = document.createElement("p");
    endingText.classList.add("endingText");
    endingText.textContent = "Nu närmar ni er slutet och snart har ni möjlight att stoppa mördaren! Nu ska ni få ange erna misstankar kring hur och när morden begicks."

    let h2 = document.createElement("h2");
    h2.textContent = "Mordvapnet"

    let inputMessage = document.createElement("p");
    inputMessage.style.visibility = "hidden";
    inputMessage.style.margin = "3px";
    inputMessage.style.height = "18px";

    let hiddenText = document.createElement("p");
    hiddenText.style.visibility = "hidden";
    hiddenText.textContent = " = vätecyanid";

    let label = document.createElement("label");
    label.textContent = "Mordvapnet: ";
    label.htmlFor = "textinput";

    let inputFält = document.createElement("input");
    inputFält.type = "text";
    inputFält.id = "textinput";
    inputFält.style.height = "20px";
    inputFält.style.width = "65px";

    let button = document.createElement("button");
    button.textContent = "OK";

    let nextButton = document.createElement("button");
    nextButton.textContent = "Gå vidare";
    nextButton.classList.add("buttonPlacementFive");


    contentDiv.append(endingText);
    contentDiv.append(h2);
    divInputFält.append(label, inputFält, hiddenText);
    contentDiv.append(divInputFält);
    contentDiv.append(inputMessage);
    contentDiv.append(button);
    spelKirsebergDIV.append(contentDiv, nextButton);

    button.addEventListener("click", function () {
        let answer = inputFält.value.toLowerCase();
        if (answer === "hcn") {
            inputMessage.style.visibility = "visible";
            inputMessage.textContent = "Rätt input!";
            hiddenText.style.visibility = "visible";
            nextButton.style.display = "block"
        } else {
            inputMessage.style.visibility = "visible";
            inputMessage.textContent = "Fel input, försök igen!";
        }
    });

    nextButton.addEventListener("click", function () {
        clueSix();
    })
}
clueFive();


function clueSix() {

    spelKirsebergDIV.innerHTML = "";
    window.currentStep = "steg13";

    let symbolDiv = document.createElement("div");
    symbolDiv.classList.add("symbolDiv");

    let nextButton = document.createElement("button");
    nextButton.textContent = "Gå vidare";
    nextButton.classList.add("buttonPlacementFive");

    let buttonDivs = document.createElement("div");
    let buttonSymbol1 = document.createElement("button");
    buttonSymbol1.textContent = "✖️";
    let buttonSymbol2 = document.createElement("button");
    buttonSymbol2.textContent = "⚫";
    let buttonSymbol3 = document.createElement("button");
    buttonSymbol3.textContent = "◼️";

    let codeText = document.createElement("p");

    buttonSymbol1.id = "symbolButton";
    buttonSymbol2.id = "symbolButton";
    buttonSymbol3.id = "symbolButton";

    buttonDivs.append(buttonSymbol2, buttonSymbol3, buttonSymbol1);
    symbolDiv.append(buttonDivs);

    let allSmalDivs = document.createElement("div");
    allSmalDivs.classList.add("allSmalDivs");

    let divSymbol1 = document.createElement("div");
    let divSymbol2 = document.createElement("div");
    let divSymbol3 = document.createElement("div");
    let divSymbol4 = document.createElement("div");

    divSymbol1.classList.add("smallDiv");
    divSymbol2.classList.add("smallDiv");
    divSymbol3.classList.add("smallDiv");
    divSymbol4.classList.add("smallDiv");
    divSymbol4.textContent = "3"

    allSmalDivs.append(divSymbol1, divSymbol2, divSymbol3, divSymbol4);
    symbolDiv.append(allSmalDivs, codeText);

    spelKirsebergDIV.append(symbolDiv, nextButton);



    let correctCode = ["✖️", "⚫", "◼️"];
    let playerCode = [];

    buttonSymbol1.addEventListener("click", function () {

        playerCode.push("✖️");

        divSymbol1.textContent = playerCode[0] || "";
        divSymbol2.textContent = playerCode[1] || "";
        divSymbol3.textContent = playerCode[2] || "";

        if (playerCode.length === 3) {
            let playerAnswer = playerCode.join("");
            let correctAnswer = correctCode.join("");

            if (playerAnswer === correctAnswer) {
                codeText.style.visibility = "visible";
                codeText.textContent = "Rätt kod!";

                divSymbol1.textContent = "1";
                divSymbol2.textContent = "9"
                divSymbol3.textContent = "1"

                nextButton.style.display = "block";
            }
            else {
                codeText.style.visibility = "visible";
                codeText.textContent = "Fel kod!";
                playerCode = [];

                divSymbol1.textContent = "";
                divSymbol2.textContent = "";
                divSymbol3.textContent = "";
            }
        }
    });

    buttonSymbol2.addEventListener("click", function () {

        playerCode.push("⚫");

        divSymbol1.textContent = playerCode[0] || "";
        divSymbol2.textContent = playerCode[1] || "";
        divSymbol3.textContent = playerCode[2] || "";

        if (playerCode.length === 3) {
            let playerAnswer = playerCode.join("");
            let correctAnswer = correctCode.join("");

            if (playerAnswer === correctAnswer) {
                codeText.style.visibility = "visible";
                codeText.textContent = "Rätt kod!";

                divSymbol1.textContent = "1";
                divSymbol2.textContent = "9"
                divSymbol3.textContent = "1"

                nextButton.style.display = "block";
            }
            else {
                codeText.style.visibility = "visible";
                codeText.textContent = "Fel kod!";
                playerCode = [];

                divSymbol1.textContent = "";
                divSymbol2.textContent = "";
                divSymbol3.textContent = "";
            }
        }

    });

    buttonSymbol3.addEventListener("click", function () {

        playerCode.push("◼️");

        divSymbol1.textContent = playerCode[0] || "";
        divSymbol2.textContent = playerCode[1] || "";
        divSymbol3.textContent = playerCode[2] || "";

        if (playerCode.length === 3) {
            let playerAnswer = playerCode.join("");
            let correctAnswer = correctCode.join("");

            if (playerAnswer === correctAnswer) {
                codeText.style.visibility = "visible";
                codeText.textContent = "Rätt kod!";

                divSymbol1.textContent = "1";
                divSymbol2.textContent = "9"
                divSymbol3.textContent = "1"

                nextButton.style.display = "block";
            }
            else {
                codeText.style.visibility = "visible";
                codeText.textContent = "Fel kod!";
                playerCode = [];

                divSymbol1.textContent = "";
                divSymbol2.textContent = "";
                divSymbol3.textContent = "";
            }
        }

    });
}