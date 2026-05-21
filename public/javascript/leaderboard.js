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

    let placement = "1";

    let database = await getLeaderboard();
    // console.log(database);
    database.sort(function (a, b) {
        return b.time_left - a.time_left;
    });

    for (let data of database) {

        let userDiv = document.createElement("div");
        userDiv.classList.add("userDiv");

        let placementDiv = document.createElement("div");
        let placementParagraf = document.createElement("p");
        placementParagraf.classList.add("placement")
        placementParagraf.textContent = placement;
        placementDiv.append(placementParagraf);

        placementDiv.style.textAlign = "center"
        placementDiv.classList.add("setWidth");


        //användarnamn
        let divName = document.createElement("div");
        divName.classList.add("setWidth");

        let deltagare = document.createElement("p");
        deltagare.textContent = data.userName;

        let imgDiv = document.createElement("div");
        imgDiv.classList.add("setWidth");
        let img = document.createElement("img");
        img.src = data.imageUrl || "";
        img.style.width = "70px";
        img.style.height = "70px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "50%";

        let divTime = document.createElement("div");
        divTime.classList.add("setWidth");
        let finalTime = document.createElement("p");


        let hours = Math.floor(data.time_left / 3600);
        let minutes = Math.floor((data.time_left % 3600) / 60);
        let seconds = data.time_left % 60;

        finalTime = `${hours}: ${minutes}: ${seconds}`;

        imgDiv.append(img);
        divName.append(deltagare);
        divTime.append(finalTime);

        userDiv.append(placementDiv, imgDiv, divName, divTime)

        contentLeaderbord.append(userDiv);
        placement++;
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
