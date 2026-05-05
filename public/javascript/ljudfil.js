const ljudfil = document.getElementById("ljudfil");
const next_page_button = document.getElementById("next_page_button");

ljudfil.addEventListener("ended", function () {
    next_page_button.style.display = "block";
    setTimeout(() => {
        knapp.classList.add("synlig");
    }, 10);
})


