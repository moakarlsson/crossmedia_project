const mail1 = document.querySelector("#mail1");
const mail2 = document.querySelector("#mail2");

const logInMailCOntainerDOM = document.querySelector("#logInMailContainer");
const mailContainerDOM = document.querySelector("#mailContainer");
const mailView1 = document.querySelector("#mailView1");
const mailView2 = document.querySelector("#mailView2");

const logInButtonDOM = document.querySelector("button");
const inputDOM = document.querySelector("input");
const felmeddelandeDOM = document.querySelector("#felmeddelande");

const arrowIMG1 = document.querySelector("#arrowIMG1");
const arrowIMG2 = document.querySelector("#arrowIMG2");


mailContainerDOM.style.display = "none";
felmeddelandeDOM.style.display ="none";

logInButtonDOM.addEventListener("click", () => {

    if (inputDOM.value === "lol") {
        logInMailCOntainerDOM.style.display = "none";
        mailContainerDOM.style.display = "block";
    } 
    
    else {
        felmeddelandeDOM.style.display = "block";
        felmeddelandeDOM.textContent = "fel lösenord";
    }
})



mail1.addEventListener("click", () => {
    mailContainerDOM.style.display = "none";
    mailView1.style.display = "block";
})

mail2.addEventListener("click", () => {
    mailContainerDOM.style.display = "none";
    mailView2.style.display = "block";
})

arrowIMG1.addEventListener("click", () => {
    mailView1.style.display = "none";
    mailContainerDOM.style.display = "block";
})

arrowIMG2.addEventListener("click", () => {
    mailView2.style.display = "none";
    mailContainerDOM.style.display = "block";
})