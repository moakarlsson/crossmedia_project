const ljudfil = document.getElementById("ljudfil");
const next_page_button = document.getElementById("next_page");
const timerDisplay = document.getElementById("timerDisplay");

timerDisplay.style.display = "none";

ljudfil.addEventListener("ended", function () {
    next_page_button.style.display = "block";
    setTimeout(() => {
        next_page_button.classList.add("synlig");
    }, 10);
})

next_page_button.addEventListener("click", function () {
    timerDisplay.style.display = "block"
    window.location.href = "../html/newspage_start.html";
})
