

let logoutButton = document.getElementById("logout");


// AddEventListeners



logoutButton.addEventListener("click", function () {
    logout();
});


async function logout() {
    await fetch("/users/logout", {
        method: "POST",
        credentials: "include"
    });

    localStorage.removeItem("endTime");
    clearInterval(timerInterval);

    location.reload();
};

