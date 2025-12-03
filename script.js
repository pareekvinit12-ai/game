let btn =document.querySelector(".btn")
let undo =document.querySelector(".undobtn")
let boxes = document.querySelectorAll(".box")
let mainbox = document.querySelector(".main-box")
let mathimage = document.querySelector(".mathimage")
let count = 0;
let history = []; 
let arr = [

    "dice1.jpeg",
    "dice2.jpeg",
    "dice3.jpeg",
    "dice4.jpeg",
    "dice5.jpeg",
    "dice6.jpeg",
    
];
btn.addEventListener("click",()=>{
    let randomIndex = Math.floor(Math.random() * arr.length)
    mathimage.src = arr[randomIndex]


let dicenum = randomIndex + 1;

count += dicenum

history.push(count)

 console.log(dicenum);

 if(count <= 100){
        let currentBox = boxes[count - 1];

    currentBox.style.backgroundColor = "green";   
    currentBox.querySelector("h1").style.color = "red";
    }
    if (count >= 100) {
        alert("Welcome to my webpage");
    }
});


undo.addEventListener("click", () => {
    if (history.length > 0) {

        let lastPosition = history.pop();
        let lastBox = boxes[lastPosition - 1];
        lastBox.style.backgroundColor = "";
        lastBox.querySelector("h1").style.color = "";

        count = history.length > 0 ? history[history.length - 1] : 0;

        console.log("Undo → count:", count);
    }
});