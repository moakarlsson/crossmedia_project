let content = document.getElementById("content");
let contentDivs = document.getElementById("contentDivs");
let backButton = document.getElementById("backButton");

let artikel = document.getElementById("artikel");
let imgNyhet = document.getElementById("imgNyhet");

let mail = document.getElementById("mail");
imgMail = document.getElementById("imgMail");

let symboler = document.getElementById("symboler");
imgSymboler = document.getElementById("imgSymboler");

//Artikel
let messageA = document.getElementById("messageA");
messageA.style.visibility = "hidden";

//Mail
let messageM = document.getElementById("messageM");
messageM.style.visibility = "hidden";

//Symboler
let messageS = document.getElementById("messageS");
messageS.style.visibility = "hidden";

if (localStorage.getItem("unlockedNews") === "true") {
    imgNyhet.src = "../assets/images/padlock_unlocked.png";
};

if (localStorage.getItem("unlockedMail") === "true") {
    imgMail.src = "../assets/images/padlock_unlocked.png";
};

if (localStorage.getItem("unlockedSymboler") === "true") {
    imgSymboler.src = "../assets/images/padlock_unlocked.png";
};

artikel.addEventListener("click", function () {
    if (localStorage.getItem("unlockedNews") === "true") {
        localStorage.setItem("fromDokumentbankArtikel", "true");
        window.location.href = "../html/newspage_start.html";
    } else {
        messageA.style.visibility = "visible";
    }
});

mail.addEventListener("click", function () {
    if (localStorage.getItem("unlockedMail") === "true") {
        localStorage.setItem("fromDokumentbankMail", "true");
        window.location.href = "../html/mailpage.html";
    } else {
        messageM.style.visibility = "visible";
    }
});

symboler.addEventListener("click", function () {
    if (localStorage.getItem("unlockedSymboler") === "true") {
        localStorage.setItem("fromDokumentbankSymbol", "true");
        showSymbol();
    } else {
        messageS.style.visibility = "visible";
    }
});

backButton.addEventListener("click", function () {
    let savedPage = localStorage.getItem("savedPage");
    let savedStep = localStorage.getItem("savedStep");
    localStorage.setItem("returnToStep", savedStep);

    if (savedPage) {
        window.location.href = savedPage;
    };
});


function showSymbol() {
    contentDivs.style.display = "none";
    backButton.style.display = "none";

    let contentSymbol = document.createElement("div");
    contentSymbol.classList.add("contentSymbol");

    let pX = document.createElement("p");
    pX.textContent = "✖️ = 1";

    let p0 = document.createElement("p");
    p0.textContent = "⚫ = 9";

    let pF = document.createElement("p");
    pF.textContent = "◼️ = 3";

    let buttonToDoc = document.createElement("button");
    buttonToDoc.textContent = "Tillbaka till dokumentbanken";

    buttonToDoc.addEventListener("click", function () {
        window.location.href = "../html/dokumentbank.html"
    });

    contentSymbol.append(pX, p0, pF);
    content.append(contentSymbol, buttonToDoc);
}

