

window.currentStep = "steg2";

const newsPage_1 = document.getElementById("newspage_1");
const newsPage_2 = document.getElementById("newspage_2");
const newsPage_3 = document.getElementById("newspage_3");
const back_button = document.getElementById("goBack_button");
const go_forth = document.getElementById("go_forth_button");

newsPage_1?.addEventListener("click", function () {
    window.location.href = "../html/newspage1.html"
});

newsPage_2?.addEventListener("click", function () {
    window.location.href = "../html/newspage2.html"
});

newsPage_3?.addEventListener("click", function () {
    window.location.href = "../html/newspage3.html"
});

back_button?.addEventListener("click", function () {
    window.location.href = "../html/newspage_start.html"
});

go_forth?.addEventListener("click", function () {
    const svar = confirm("OBS! Har du läst alla artiklar?");
    if (svar) {
        window.location.href = "../html/inputpage.html"; //
    }
});