let logoutButton = document.getElementById("logout");
let inloggad = document.getElementById("inloggad");

logoutButton.addEventListener("click", function () {
    logout();
});

async function logout() {
    await fetch("/users/logout", {
        method: "POST",
        credentials: "include"
    });

    localStorage.removeItem("endTime");
    clearInterval(timerInterval);

    location.reload();
    window.location.href = "../html/startsida.html";
};


async function getUser() {
    let response = await fetch("/users/me", {
        credentials: "include"
    });

    if (!response.ok) return null;
    let user = await response.json();
    return user;
};

async function showInfo() {
    let user = await getUser();

    let div = document.createElement("div");
    let p = document.createElement("p");

    p.textContent = `Spelare: ${user.userName}`

    div.append(p);
    inloggad.append(div);
};

showInfo();


let showRulesBtn = document.getElementById("showRulesBtn");
let closeRulesBtn = document.getElementById("closeRulesBtn");
let spelregler = document.getElementById("spelregler");

showRulesBtn.addEventListener("click", function () {

    spelregler.style.display = "block";
    showRulesBtn.style.display = "none";

});

closeRulesBtn.addEventListener("click", function () {

    spelregler.style.display = "none";
    showRulesBtn.style.display = "block";

});

let backButton = document.getElementById("backButton");

backButton.addEventListener("click", function () {

    window.history.back();
});