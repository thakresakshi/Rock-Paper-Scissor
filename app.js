let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = ()=>{
    const options =["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=>{
//    console.log("game was draw") ;
   msg.innerText = "Game was Draw, Play again ";
   msg.style.backgroundColor="#081b31";


};

const showWinner=(userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor="Red"; 


    }
}

const playGame = (userChoice) =>{
 console.log("user choice is =",userChoice);
//  Generate computer choice -> modular way of programming
   const compChoice = genCompChoice();
 console.log("comp choice is =", compChoice);

 if(userChoice=== compChoice){
    // Draw Game
 drawGame();
}else{
 let userWin= true;
 if(userChoice=== "rock"){
    // scissor,paper
    userWin = compChoice === "paper" ? false:true;
 }else if(userChoice ==="paper"){
    // rock, scissors
    userWin= compChoice === "scissors"? false:true;
 }else{
    // rock, paper
    userWin= compChoice=== "rock"? false: true;
 }
 showWinner(userWin)
}
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});