
let beginGameButton = document.getElementById("beginGame");
let mailButton = document.getElementById("mail");


beginGameButton.addEventListener("click", function () {
    window.location.href = "/html/spelregler.html"
});

mailButton.addEventListener("click", function () {
    window.location.href = "../html/mailpage.html";
});

let kirsebergButton = document.getElementById("kirseberg");

kirsebergButton.addEventListener("click", function () {
    window.location.href = "../html/kirseberg.html";
});