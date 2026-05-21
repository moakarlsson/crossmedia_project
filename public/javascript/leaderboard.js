async function getLeaderboard() {
    const response = await fetch("/users/leaderboard", {
        credentials: "include"
    });
    const data = await response.json();
    // console.log(data);
    return data;
}

// getLeaderboard();

let contentLeaderbord = document.getElementById("contentLeaderbord");

async function showLeaderboard() {

    let database = await getLeaderboard();
    console.log(database);



    for (let data of database) {

        //användarnamn
        let divName = document.createElement("div");

        let deltagare = document.createElement("p");
        deltagare.textContent = data.userName;

        //tiden
        let divTime = document.createElement("div");
        let timeLeft = document.createElement("p");
        timeLeft.textContent = data.time_left;

        let hours = Math.floor(data.time_left / 3600);
        let minutes = Math.floor((data.time_left % 3600) / 60);
        let seconds = data.time_left % 60;

        let finalTime = `${hours}: ${minutes}: ${seconds}`;

        //append
        divName.append(deltagare);
        divTime.append(finalTime);
        contentLeaderbord.append(divName, divTime);
    };
};
showLeaderboard()
