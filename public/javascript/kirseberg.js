
let spelKirsebergDIV = document.getElementById("spelinnehåll");

// function clueOne() {
//     //På lekpats - ska till scenen
//     spelKirsebergDIV.innerHTML = "";
//     window.currentStep = "steg8";

//     let contentDiv = document.createElement("div");

//     let divInputFält = document.createElement("div");
//     divInputFält.classList.add("divInputFält");

//     let inputMessage = document.createElement("p");
//     inputMessage.style.visibility = "hidden";
//     inputMessage.style.height = "18px";
//     inputMessage.style.padding = "10px 0px";

//     let label = document.createElement("label");
//     label.textContent = "X =  ";
//     label.htmlFor = "textinput";

//     let inputFält = document.createElement("input");
//     inputFält.type = "text";
//     inputFält.id = "textinput";
//     inputFält.style.height = "20px";
//     inputFält.style.width = "65px";

//     let labelAndInput = document.createElement("div");

//     let button = document.createElement("button");
//     button.textContent = "OK";
//     button.id = "buttonOK";

//     let nextButton = document.createElement("button");
//     nextButton.textContent = "Gå vidare";
//     nextButton.classList.add("buttonPlacement");

//     labelAndInput.append(label, inputFält)
//     divInputFält.append(labelAndInput, button);
//     contentDiv.append(divInputFält);
//     contentDiv.append(inputMessage);
//     spelKirsebergDIV.append(contentDiv, nextButton);

//     button.addEventListener("click", function () {
//         let answer = inputFält.value;
//         if (answer === "1") {
//             inputMessage.style.visibility = "visible";
//             inputMessage.textContent = "Rätt input!";
//             nextButton.style.display = "block"
//         } else {
//             inputMessage.style.visibility = "visible";
//             inputMessage.textContent = "Fel input, försök igen!";
//         }
//     });

//     nextButton.addEventListener("click", function () {
//         clueTwo();
//     });
// };
// clueOne();


// function clueTwo() {
//     //På scenen - ska till lokstallarna    

//     spelKirsebergDIV.innerHTML = "";
//     window.currentStep = "steg9";
//     let contentDiv = document.createElement("div");

//     let divInputFält = document.createElement("div");
//     divInputFält.classList.add("divInputFält");

//     let inputMessage = document.createElement("p");
//     inputMessage.style.visibility = "hidden";
//     inputMessage.style.height = "18px";
//     inputMessage.style.padding = "10px 0px";

//     let label = document.createElement("label");
//     label.textContent = "⚫ =  ";
//     label.htmlFor = "textinput";

//     let inputFält = document.createElement("input");
//     inputFält.type = "text";
//     inputFält.id = "textinput";
//     inputFält.style.height = "20px";
//     inputFält.style.width = "65px";

//     let labelAndInput = document.createElement("div");

//     let button = document.createElement("button");
//     button.textContent = "OK";
//     button.id = "buttonOK";

//     let nextButton = document.createElement("button");
//     nextButton.textContent = "Gå vidare";
//     nextButton.classList.add("buttonPlacement");

//     labelAndInput.append(label, inputFält)
//     divInputFält.append(labelAndInput, button);
//     contentDiv.append(divInputFält);
//     contentDiv.append(inputMessage);
//     spelKirsebergDIV.append(contentDiv, nextButton);

//     button.addEventListener("click", function () {
//         let answer = inputFält.value;
//         if (answer === "9") {
//             inputMessage.style.visibility = "visible";
//             inputMessage.textContent = "Rätt input!";
//             nextButton.style.display = "block"
//         } else {
//             inputMessage.style.visibility = "visible";
//             inputMessage.textContent = "Fel input, försök igen!";
//         }
//     });

//     nextButton.addEventListener("click", function () {
//         clueThree();
//     });
// };

// function clueThree() {
//     //Vid lokstallarna - ska till Cirkushotellet

//     spelKirsebergDIV.innerHTML = "";
//     window.currentStep = "steg10";
//     let contentDiv = document.createElement("div");

//     let divInputFält = document.createElement("div");
//     divInputFält.classList.add("divInputFält");

//     let inputMessage = document.createElement("p");
//     inputMessage.style.visibility = "hidden";
//     inputMessage.style.height = "18px";
//     inputMessage.style.padding = "10px 0px";

//     let label = document.createElement("label");
//     label.textContent = "X =  ";
//     label.htmlFor = "textinput";

//     let inputFält = document.createElement("input");
//     inputFält.type = "text";
//     inputFält.id = "textinput";
//     inputFält.style.height = "20px";
//     inputFält.style.width = "65px";

//     let labelAndInput = document.createElement("div");

//     let button = document.createElement("button");
//     button.textContent = "OK";
//     button.id = "buttonOK";

//     let nextButton = document.createElement("button");
//     nextButton.textContent = "Gå vidare";
//     nextButton.classList.add("buttonPlacement");

//     labelAndInput.append(label, inputFält)
//     divInputFält.append(labelAndInput, button);
//     contentDiv.append(divInputFält);
//     contentDiv.append(inputMessage);
//     spelKirsebergDIV.append(contentDiv, nextButton);

//     button.addEventListener("click", function () {
//         let answer = inputFält.value;
//         if (answer === "1") {
//             inputMessage.style.visibility = "visible";
//             inputMessage.textContent = "Rätt input!";
//             nextButton.style.display = "block"
//         } else {
//             inputMessage.style.visibility = "visible";
//             inputMessage.textContent = "Fel input, försök igen!";
//         }
//     });

//     nextButton.addEventListener("click", function () {
//         clueFour();
//     });
// }


// function clueFour() {
//     //Vid cirkushotellet- ska till fängelset 
//     spelKirsebergDIV.innerHTML = "";
//     window.currentStep = "steg11";
//     let contentDiv = document.createElement("div");

//     let divInputFält = document.createElement("div");
//     divInputFält.classList.add("divInputFält");

//     let inputMessage = document.createElement("p");
//     inputMessage.style.visibility = "hidden";
//     inputMessage.style.height = "18px";
//     inputMessage.style.padding = "10px 0px";

//     let label = document.createElement("label");
//     label.textContent = "◼️ =  ";
//     label.htmlFor = "textinput";

//     let inputFält = document.createElement("input");
//     inputFält.type = "text";
//     inputFält.id = "textinput";
//     inputFält.style.height = "20px";
//     inputFält.style.width = "65px";

//     let labelAndInput = document.createElement("div");

//     let button = document.createElement("button");
//     button.textContent = "OK";
//     button.id = "buttonOK";

//     let nextButton = document.createElement("button");
//     nextButton.textContent = "Gå vidare";
//     nextButton.classList.add("buttonPlacement");

//     labelAndInput.append(label, inputFält)
//     divInputFält.append(labelAndInput, button);
//     contentDiv.append(divInputFält);
//     contentDiv.append(inputMessage);
//     spelKirsebergDIV.append(contentDiv, nextButton);

//     button.addEventListener("click", function () {
//         let answer = inputFält.value;
//         if (answer === "3") {
//             inputMessage.style.visibility = "visible";
//             inputMessage.textContent = "Rätt input!";
//             nextButton.style.display = "block"
//         } else {
//             inputMessage.style.visibility = "visible";
//             inputMessage.textContent = "Fel input, försök igen!";
//         }
//     });

//     nextButton.addEventListener("click", function () {
//         clueFive();
//     });
// };


// function clueFive() {
//     //Vid fängelset, sista stället - ska sedan avsluta
//     spelKirsebergDIV.innerHTML = "";
//     spelKirsebergDIV.style.marginTop = "0px";
//     window.currentStep = "steg12";

//     let contentDiv = document.createElement("div");

//     let divInputFält = document.createElement("div");
//     divInputFält.classList.add("divInputFält");
//     divInputFält.style.gap = "0px";

//     let endingText = document.createElement("p");
//     endingText.classList.add("endingText");
//     endingText.textContent = "Nu närmar ni er slutet och snart har ni möjlight att stoppa mördaren! Ni vet att det är Daniel Petrov som begått morden. Nu ska ni få ange erna misstankar kring hur och var morden begicks."

//     let h2 = document.createElement("h2");
//     h2.textContent = "Mordvapnet"

//     let inputMessage = document.createElement("p");
//     inputMessage.style.visibility = "hidden";
//     inputMessage.style.height = "18px";

//     let hiddenText = document.createElement("p");
//     hiddenText.style.visibility = "hidden";
//     hiddenText.textContent = " = vätecyanid";

//     let label = document.createElement("label");
//     label.textContent = "Ange mordvapen: ";
//     label.htmlFor = "textinput";

//     let inputFält = document.createElement("input");
//     inputFält.type = "text";
//     inputFält.id = "textinput";
//     inputFält.style.height = "20px";
//     inputFält.style.width = "65px";

//     let button = document.createElement("button");
//     button.textContent = "OK";

//     let nextButton = document.createElement("button");
//     nextButton.textContent = "Gå vidare";
//     nextButton.classList.add("buttonPlacement");


//     contentDiv.append(endingText);
//     contentDiv.append(h2);
//     divInputFält.append(label, inputFält, hiddenText);
//     contentDiv.append(divInputFält);
//     contentDiv.append(inputMessage);
//     contentDiv.append(button);
//     spelKirsebergDIV.append(contentDiv, nextButton);

//     button.addEventListener("click", function () {
//         let answer = inputFält.value.toLowerCase();
//         if (answer === "hcn") {
//             inputMessage.style.visibility = "visible";
//             inputMessage.textContent = "Rätt input!";
//             hiddenText.style.visibility = "visible";
//             nextButton.style.display = "block"
//         } else {
//             inputMessage.style.visibility = "visible";
//             inputMessage.textContent = "Fel input, försök igen!";
//         }
//     });

//     nextButton.addEventListener("click", function () {
//         clueSix();
//     });
// }

function clueSix() {
    spelKirsebergDIV.innerHTML = "";
    spelKirsebergDIV.style.marginTop = "0px";
    window.currentStep = "steg13";

    let h2 = document.createElement("h2");
    h2.textContent = "Brottsplatsen";

    let beskrivning = document.createElement("p");
    beskrivning.textContent = "Varje symbol döljer en siffra. Tryck på symbolerna i rätt ordning för att se alla siffror."

    let symbolDiv = document.createElement("div");
    symbolDiv.classList.add("symbolDiv");

    let nextButton = document.createElement("button");
    nextButton.textContent = "Gå vidare";
    nextButton.classList.add("buttonPlacement");

    let buttonDivs = document.createElement("div");
    buttonDivs.classList.add("buttonDivs");

    let buttonSymbol1 = document.createElement("button");
    buttonSymbol1.textContent = "✖️";

    let buttonSymbol2 = document.createElement("button");
    buttonSymbol2.textContent = "⚫";

    let buttonSymbol3 = document.createElement("button");
    buttonSymbol3.textContent = "◼️";

    let buttonSymbol4 = document.createElement("button");
    buttonSymbol4.textContent = "★";

    let buttonSymbol5 = document.createElement("button");
    buttonSymbol5.textContent = "🖤";

    let buttonSymbol6 = document.createElement("button");
    buttonSymbol6.textContent = "❖";

    let buttonSymbol7 = document.createElement("button");
    buttonSymbol7.textContent = "⬖";

    let buttonSymbol8 = document.createElement("button");
    buttonSymbol8.textContent = "⬢";

    let codeText = document.createElement("p");

    buttonSymbol1.id = "symbolButton";
    buttonSymbol2.id = "symbolButton";
    buttonSymbol3.id = "symbolButton";
    buttonSymbol4.id = "symbolButton";
    buttonSymbol5.id = "symbolButton";
    buttonSymbol6.id = "symbolButton";
    buttonSymbol7.id = "symbolButton";
    buttonSymbol8.id = "symbolButton";

    buttonDivs.append(
        buttonSymbol4,
        buttonSymbol2,
        buttonSymbol3,
        buttonSymbol1,
        buttonSymbol5,
        buttonSymbol6,
        buttonSymbol7,
        buttonSymbol8
    );
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

    let divBrottsplats = document.createElement("div");
    divBrottsplats.classList.add("divBrottsplats");

    let p = document.createElement("p");
    p.textContent = "Brotssplatsen: "
    let answer = document.createElement("p");
    answer.textContent = "Kirsebergsanstalten"
    answer.style.visibility = "hidden";
    divBrottsplats.append(p, answer);

    spelKirsebergDIV.append(h2);
    spelKirsebergDIV.append(beskrivning);
    allSmalDivs.append(divSymbol1, divSymbol2, divSymbol3, divSymbol4);
    symbolDiv.append(allSmalDivs, codeText);

    spelKirsebergDIV.append(symbolDiv);
    spelKirsebergDIV.append(divBrottsplats);
    spelKirsebergDIV.append(nextButton);

    let correctCode = ["✖️", "⚫", "✖️", "◼️"];
    let playerCode = [];

    let symbolValues = {
        "✖️": "1",
        "⚫": "9",
        "◼️": "3",
        "★": "5",
        "🖤": "7",
        "❖": "2",
        "⬖": "8",
        "⬢": "4"
    };
    function updateBoxes() {
        let divs = [divSymbol1, divSymbol2, divSymbol3, divSymbol4];

        for (let i = 0; i < divs.length; i++) {
            let symbol = playerCode[i];
            if (symbol) {
                divs[i].innerHTML = `
                <div class="bigNumber">${symbolValues[symbol]}</div>
                <div class="smallSymbol">${symbol}</div>
            `;
            } else {
                divs[i].innerHTML = "";
            }
        }
    }

    function handleSymbolClick(symbol) {
        if (playerCode.length >= 4) {
            return;
        }
        playerCode.push(symbol);
        updateBoxes();

        if (playerCode.length === 4) {
            let playerAnswer = playerCode.join("");
            let correctAnswer = correctCode.join("");

            if (playerAnswer === correctAnswer) {
                divSymbol1.style.backgroundColor = "#62fe62";
                divSymbol2.style.backgroundColor = "#62fe62";
                divSymbol3.style.backgroundColor = "#62fe62";
                divSymbol4.style.backgroundColor = "#62fe62";

                nextButton.style.display = "block";
                answer.style.visibility = "visible";
            } else {
                codeText.textContent = "Fel ordning, försök igen!";

                setTimeout(function () {
                    playerCode = [];
                    updateBoxes();
                }, 1000);
            }
        }
    }

    buttonSymbol1.addEventListener("click", function () {
        handleSymbolClick("✖️");
    });

    buttonSymbol2.addEventListener("click", function () {
        handleSymbolClick("⚫");
    });

    buttonSymbol3.addEventListener("click", function () {
        handleSymbolClick("◼️");
    });

    buttonSymbol4.addEventListener("click", function () {
        handleSymbolClick("★");
    });

    buttonSymbol5.addEventListener("click", function () {
        handleSymbolClick("🖤");
    });

    buttonSymbol6.addEventListener("click", function () {
        handleSymbolClick("❖");
    });

    buttonSymbol7.addEventListener("click", function () {
        handleSymbolClick("⬖");
    });

    buttonSymbol8.addEventListener("click", function () {
        handleSymbolClick("⬢");
    });

    buttonSymbol9.addEventListener("click", function () {
        handleSymbolClick("☾");
    });

    nextButton.addEventListener("click", function () {
        clueSeven();
    });
}


clueSix()

function clueSeven() {
    spelKirsebergDIV.innerHTML = "";

    let h2 = document.createElement("h2");
    h2.textContent = "Spela mig..."

    let audio = document.createElement("audio");
    audio.id = "ljudfil";
    audio.controls = true;
    let source = document.createElement("source");
    source.src = "../assets/ljud/win.wav";
    source.type = "audio/wav";

    audio.append(source);
    spelKirsebergDIV.append(h2, audio);

    let chooseDIV = document.createElement("div");
    chooseDIV.classList.add("fadeIn");

    let textDiv = document.createElement("div");

    let text = document.createElement("p");
    text.textContent = "Nu står ni inför ett val. Vilket väljer ni?"
    text.style.fontSize = "18px";

    let timerText = document.createElement("p");
    timerText.textContent = "Timern kommer stoppas när ni klickar på ert val."

    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("chooseButtons");

    let angeMrX = document.createElement("button");
    angeMrX.textContent = "Anmäl Daniel Petrov till polisen";

    let låtMrXfri = document.createElement("button");
    låtMrXfri.textContent = "Låt Daniel Petrov fullfölja det han påbörjat";

    textDiv.append(text, timerText);
    buttonsDiv.append(angeMrX, låtMrXfri);
    chooseDIV.append(textDiv, buttonsDiv);

    ljudfil.addEventListener("ended", function () {
        setTimeout(() => {
            spelKirsebergDIV.append(chooseDIV);
        }, 500);
    });

    angeMrX.addEventListener("click", function () {
        stopTimer();
        console.log(finalTime);
        window.location.href = "../html/sistaSida1.html";
    });

    låtMrXfri.addEventListener("click", function () {
        stopTimer();
        console.log(finalTime);
        window.location.href = "../html/sistaSida2.html";
    });
};