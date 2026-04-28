
let createButton = document.getElementById("create_button");
let imageInput = document.getElementById("imageUpload");
let thePic = document.getElementById("thePic");

thePic.addEventListener("click", function () {
    imageInput.click();
});

imageInput.addEventListener("change", function () {
    let file = imageInput.files[0];

    if (file) {
        let img = document.createElement("img");
        img.src = URL.createObjectURL(file);

        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.borderRadius = "10px";

        thePic.innerHTML = "";
        thePic.appendChild(img);
    }
});

createButton.addEventListener("click", async function () {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const password_confirm = document.getElementById("password_confirm").value;

    if (password === password_confirm) {
        console.log("Matches")
    } else {
        console.error("Passwords are not matching...try again!")
        return;
    }

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
