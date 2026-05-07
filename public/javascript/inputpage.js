const input_button_1 = document.getElementById("input_button_1");
const input_button_2 = document.getElementById("input_button_2");
const alert_message = document.getElementById("alert_message");
const alert_message2 = document.getElementById("alert_message2");
input_2.style.visibility = "hidden";



input_button_1.addEventListener("click", function() {
    const input_1 = document.getElementById("answer_1");
    const answer_1 = input_1.value;
    if(answer_1 === "") {
        alert_message.textContent = "Inputfältet måste vara ifyllt!"
        alert_message.style.color = "#650003";
    } else if (answer_1 === "300") {
             alert_message.textContent = "Rätt svar✔️";
             alert_message.style.color = "green";

             setTimeout(function(){
                input_2.style.visibility = "visible";
                input_2.style.opacity = "1";
                input_button_1.style.opacity = "0";
                setTimeout(function() {
                    input_button_1.style.display = "none"; 
                }, 1000);
             }, 1000)
    } else {
        alert_message.textContent = "Fel, försök igen!";
        alert_message.style.color = "#650003";
    }
});

input_button_2.addEventListener("click", function() {
    const input_2 = document.getElementById("answer_2");
    const answer_2 = input_2.value;
    if(answer_2 === "") {
        alert_message2.textContent = "Inputfältet måste vara ifyllt!"
        alert_message2.style.color = "#650003";
    } else if (answer_2 === "500") {
             alert_message2.textContent = "Rätt svar✔️";
             alert_message2.style.color = "green";
             input_button_2.style.opacity = "0";
             setTimeout(function() {
                input_button_2.style.display = "none"; 
            }, 1000);
    } else {
        alert_message2.textContent = "Fel, försök igen!";
        alert_message2.style.color = "#650003";
    }
})








