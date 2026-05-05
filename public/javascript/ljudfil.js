const ljudfil = document.getElementById("ljudfil");
const next_page_button = document.getElementById("next_page");

ljudfil.addEventListener("ended", function() {
    setTimeout(() => {
        next_page_button.style.visibility = "none";
        next_page_button.classList.add("synlig");
    }, 10);
})