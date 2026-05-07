
let spelKirsebergDIV = document.getElementById("spelinnehåll");

function clueOne() {
    //På lekpats - ska till scenen
    spelKirsebergDIV.innerHTML = "";

    window.currentStep = "steg8";
    let text = document.createElement("p");
    text.textContent = "STEG 8";

    spelKirsebergDIV.append(text);

};
clueOne();


function clueTwo() {
    //På scenen - ska till lokstallarna
}

function clueThree() {
    //Vid lkstallarna - ska till Cirkushotellet
}


function clueFour() {
    //Vid cirkushotellet- ska till fängelset 
}


function clueFive() {
    //Vid fängelset, sista stället - ska sedan avsluta
}
