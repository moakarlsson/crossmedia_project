let logInDiv = document.getElementById("logInDiv");
let loginButton = document.getElementById("loginButton");
let createButton = document.getElementById("createButton");


//Logga in 
loginButton.addEventListener("click", async function () {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        localStorage.removeItem("endTime");
        localStorage.removeItem("finalTime");
        resetGameProgress();
        const response = await fetch("/users/userLogIn", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ userName, password })
        });
        console.log(response.status);
        const data = await response.json();
        console.log(data);

        localStorage.removeItem("endTime");
        clearInterval(window.timerInterval);

        window.location.href = "../html/ljudfil.html";

    } catch (error) {
        console.log("Fel:", error);
    }
});

createButton.addEventListener("click", function () {
    window.location.href = "/html/registerUser.html"
});


function resetGameProgress() {
    localStorage.removeItem("unlockedNews");
    localStorage.removeItem("unlockedMail");
    localStorage.removeItem("unlockedSymboler");

    localStorage.removeItem("returnToStep");
    localStorage.removeItem("savedStep");

    localStorage.removeItem("fromDokumentbankArtikel");
    localStorage.removeItem("fromDokumentbankMail");
    localStorage.removeItem("fromDokumentbankSymbol");
};