let checkboxDiv = document.getElementById("checkboxDiv");
let checkbox = document.getElementById("checkbox");
let acceptButton = document.getElementById("accept");
let message = document.getElementById("checkboxMessage")

acceptButton.addEventListener("click", function () {
    if (checkbox.checked) {
        message.textContent = "";
        window.location.href = "../login.html";
    } else {
        message.textContent = "Du måste godkänna reglerna först";
    }
});