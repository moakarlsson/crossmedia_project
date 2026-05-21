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

let database = getLeaderboard();
console.log(database)

for (let data in database) {
    let divName = document.createElement("div");

    let deltagare = document.createElement("p");
    deltagare.textContent = data.username;

    contentLeaderbord.append(divName);
}



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
