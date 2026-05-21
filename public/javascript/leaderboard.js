async function getLeaderboard() {
    const response = await fetch("/users/leaderboard", {
        credentials: "include"
    });
    const data = await response.json();

    data.forEach(user => {
        console.log(user.userName, user.imageUrl);
    });
    // console.log(data);
    return data;
}



getLeaderboard();
// getLeaderboard();

let contentLeaderbord = document.getElementById("contentLeaderbord");

async function showLeaderboard() {

    let database = await getLeaderboard();
    console.log(database);


    for (let data of database) {
        let divName = document.createElement("div");

        let deltagare = document.createElement("p");
        deltagare.textContent = data.userName;

        let divTime = document.createElement("div");
        let timeLeft = document.createElement("p");
        timeLeft.textContent = data.time_left;

        let hours = Math.floor(data.time_left / 3600);
        let minutes = Math.floor((data.time_left % 3600) / 60);
        let seconds = data.time_left % 60;

        let finalTime = `${hours}: ${minutes}: ${seconds}`;

        divTime.append(finalTime);


        divName.append(deltagare);
        contentLeaderbord.append(divName, divTime);
    };
};
showLeaderboard()


// 0: Object { userName: "hi", time_left: 10735, time_taken_seconds: "65" }
// ​
// time_left: 10735
// ​
// time_taken_seconds: "65"
// ​
// userName: "hi"
// ​
// ​
// 1: Object { userName: "hej1", time_left: 10723, time_taken_seconds: "79" }
// ​
// time_left: 10723
// ​
// time_taken_seconds: "79"
// ​
// userName: "hej1"
