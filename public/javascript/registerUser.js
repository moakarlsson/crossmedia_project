
let createButton = document.getElementById("createButton");

createButton.addEventListener("click", async function () {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/users/createUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, password }),
            credentials: "include"
        });

        console.log(response.status);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fel:", error);
    }
});
