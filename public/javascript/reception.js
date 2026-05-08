window.currentStep = "steg5";

let spelinnehåll = document.getElementById("spelinnehåll");

let contentDiv = document.createElement("div");

let h3 = document.createElement("h3");
h3.textContent = "Hur hänger allt ihop...?";

let img = document.createElement("img");
img.src = "../assets/images/nypon.png";
img.classList.add("pic");

let text = document.createElement("p");
text.textContent = "När ni löst den aktuella uppgfiten kan ni klicka på knappen 'Gå vidare' för att gå vidare till nästa steg."

let nextButton = document.createElement("button");
nextButton.textContent = "Gå vidare";
nextButton.classList.add("buttonPlacement");

nextButton.addEventListener("click", function () {
    window.location.href = "../html/mailpage.html";
});

contentDiv.append(h3, img, text, nextButton);
spelinnehåll.append(contentDiv);