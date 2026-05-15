


let backButton = document.getElementById("backButton");

let artikel = document.getElementById("artikel");
let message = document.getElementById("message");
message.style.display = "none"

artikel.addEventListener("click", function () {
    if (localStorage.getItem("unlockedNews") === "true") {
        localStorage.setItem("fromDokumentbank", "true");
        window.location.href = "../html/newspage_start.html";
    } else {
        message.style.display = "block";
        message.textContent = "Ej upplåst ännu"
    }
});