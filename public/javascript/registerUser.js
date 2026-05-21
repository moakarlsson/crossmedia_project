
let createButton = document.getElementById("create_button");
let imageInput = document.getElementById("imageUpload");
let thePic = document.getElementById("thePic");
let passwordMessage = document.getElementById("passwordMessage");
let popup = document.getElementById("popup");


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
        console.log("Matches");
    } else {
        console.error("Passwords are not matching...try again!")
        passwordMessage.style.display = "block";
        passwordMessage.textContent = "Lösenorden matchar inte"
        return;
    }

    try {
        const formData = new FormData();
        formData.append("userName", userName);
        formData.append("password", password);

        const file = imageInput.files[0];
        if (file) {
            formData.append("groupImage", file);
        }

        const response = await fetch("/users/createUser", {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        const text = await response.text();
        console.log("Svar från server:", text);
      
        if (response.status === 201) {
            popupDONE.style.display = "flex";
            setTimeout(function () {
                window.location.href = "../html/login.html";
            }, 2000);
        }
        passwordMessage.style.display = "none";

    } catch (error) {
        console.error("FEL:", error.message); // Lägg till detta
        res.status(500).json({ error: error.message });
    }
});
