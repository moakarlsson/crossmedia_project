const mail1 = document.querySelector("#mail1");
const mail2 = document.querySelector("#mail2");
const mailView1 = document.querySelector("#mailView1");
const mailView2 = document.querySelector("#mailView2");

const bigContainerDOM = document.querySelector("#bigContainer");
const arrowIMG1 = document.querySelector("#arrowIMG1");
const arrowIMG2 = document.querySelector("#arrowIMG2");



mail1.addEventListener("click", () => {
    bigContainerDOM.style.display = "none";
    mailView1.style.display = "block";
})

mail2.addEventListener("click", () => {
    bigContainerDOM.style.display = "none";
    mailView2.style.display = "block";
})

arrowIMG1.addEventListener("click", () => {
    mailView1.style.display = "none";
    bigContainerDOM.style.display = "block";
})

arrowIMG2.addEventListener("click", () => {
    mailView2.style.display = "none";
    bigContainerDOM.style.display = "block";
})
