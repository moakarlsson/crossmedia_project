
let spelKirsebergDIV = document.getElementById("spelinnehåll");

function clueOne() {
    //På lekpats - ska till scenen
    spelKirsebergDIV.innerHTML = "";
    window.currentStep = "steg8";

    let contentDiv = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.textContent = "Pusselbitarna börjar falla på plats...";

    let img = document.createElement("img");
    img.src = "../assets/images/nypon.png";
    img.classList.add("pic");

    let text = document.createElement("p");
    text.textContent = "När ni löst den aktuella uppgfiten kan ni klicka på knappen 'Gå vidare' för att gå vidare till nästa steg."

    let nextButton = document.createElement("button");
    nextButton.textContent = "Gå vidare";
    nextButton.classList.add("buttonPlacement");

    nextButton.addEventListener("click", function () {
        clueTwo();
    });

    contentDiv.append(h3, img, text, nextButton);
    spelKirsebergDIV.append(contentDiv);

};
clueOne();


function clueTwo() {
    //På scenen - ska till lokstallarna    

    spelKirsebergDIV.innerHTML = "";
    window.currentStep = "steg9";
    let contentDiv = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.textContent = "Nästa ledtråd väntar!";

    let img = document.createElement("img");
    img.src = "../assets/images/nypon.png";
    img.classList.add("pic");

    let text = document.createElement("p");
    text.textContent = "När ni löst den aktuella uppgfiten kan ni klicka på knappen 'Gå vidare' för att gå vidare till nästa steg."

    let nextButton = document.createElement("button");
    nextButton.textContent = "Gå vidare";
    nextButton.classList.add("buttonPlacement");

    nextButton.addEventListener("click", function () {
        clueThree();
    });

    contentDiv.append(h3, img, text, nextButton);
    spelKirsebergDIV.append(contentDiv);
};

function clueThree() {
    //Vid lokstallarna - ska till Cirkushotellet

    spelKirsebergDIV.innerHTML = "";
    window.currentStep = "steg9";
    let contentDiv = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.textContent = "Ni är någon på spåren…";

    let img = document.createElement("img");
    img.src = "../assets/images/nypon.png";
    img.classList.add("pic");

    let text = document.createElement("p");
    text.textContent = "När ni löst den aktuella uppgfiten kan ni klicka på knappen 'Gå vidare' för att gå vidare till nästa steg."

    let nextButton = document.createElement("button");
    nextButton.textContent = "Gå vidare";
    nextButton.classList.add("buttonPlacement");

    nextButton.addEventListener("click", function () {
        clueFour();
    });

    contentDiv.append(h3, img, text, nextButton);
    spelKirsebergDIV.append(contentDiv);
}


function clueFour() {
    //Vid cirkushotellet- ska till fängelset 
    spelKirsebergDIV.innerHTML = "";
    window.currentStep = "steg9";
    let contentDiv = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.textContent = "Ni är någon på spåren…";

    let img = document.createElement("img");
    img.src = "../assets/images/nypon.png";
    img.classList.add("pic");

    let text = document.createElement("p");
    text.textContent = "När ni löst den aktuella uppgfiten kan ni klicka på knappen 'Gå vidare' för att gå vidare till nästa steg."

    let nextButton = document.createElement("button");
    nextButton.textContent = "Gå vidare";
    nextButton.classList.add("buttonPlacement");

    nextButton.addEventListener("click", function () {
        clueFive();
    });

    contentDiv.append(h3, img, text, nextButton);
    spelKirsebergDIV.append(contentDiv);

}


function clueFive() {
    //Vid fängelset, sista stället - ska sedan avsluta
}
