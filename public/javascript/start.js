
let beginGameButton = document.getElementById("beginGame");
let mailButton = document.getElementById("mail");


beginGameButton.addEventListener("click", function () {
    window.location.href = "/html/spelregler.html"
});

let leaderButton = document.getElementById("leader");
leaderButton.addEventListener("click", function () {
    window.location.href = "../html/leaderboard.html";
});