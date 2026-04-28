let logInDiv = document.getElementById("logInDiv");
let loginButton = document.getElementById("loginButton");
let createButton = document.getElementById("createButton");


//Logga in 
loginButton.addEventListener("click", async function () {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
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
        clearInterval(timerInterval);
        logoutButton.style.display = "block";
        spelRegler();

    } catch (error) {
        console.log("Fel:", error);
    }
});

createButton.addEventListener("click", function () {
    window.location.href = "/resisterUser.html"
});