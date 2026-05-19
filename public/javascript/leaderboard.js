async function getLeaderboard() {
    const response = await fetch("/users/leaderboard", {
        credentials: "include"
    });
    const data = await response.json();
    console.log(data); 
    return data;
}

getLeaderboard();