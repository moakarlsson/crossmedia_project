async function getLeaderboard() {
    const response = await fetch("/users/leaderboard", {
        credentials: "include"
    });
    const data = await response.json();
    console.log(data); 
    return data;
}

const response = await fetch("users/groupImage", {
    credentials:"include"
});

const data = await response.json();

if (data.imageUrl) {
    const img = document.getElementById("groupImg");
    img.src = data.imageUrl;
}

getLeaderboard();