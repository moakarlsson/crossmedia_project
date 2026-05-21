window.currentStep = "steg4";

const ljudfil = document.getElementById("ljudfil");
const next_page_button = document.getElementById("next_page");


ljudfil.addEventListener("ended", function () {
    next_page_button.style.display = "block";
    setTimeout(() => {
        next_page_button.style.visibility = "none";
        next_page_button.classList.add("synlig");
    }, 10);
})

next_page_button.addEventListener("click", function () {
    window.location.href = "../html/mailpage.html";
});
