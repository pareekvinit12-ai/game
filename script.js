let btn =document.querySelector(".btn")
let boxes = document.querySelectorAll(".box")
let mainbox = document.querySelector(".main-box")
let mathimage = document.querySelector(".mathimage")
let count = 0;
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

 console.log( count);

 if(count <= 100){
    // alert("welcome to my web page")
        let currentBox = boxes[count - 1];
        currentBox.querySelector("h1").style.color = "red";
    }
    if (count >= 100) {
        alert("Welcome to my webpage");
    }
});

