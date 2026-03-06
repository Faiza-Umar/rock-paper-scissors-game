
let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorPara = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

const Choices = document.querySelectorAll(".choice");

const drawGame = () => {
    msg.innerText = "Oops! Game was draw";
    msg.style.backgroundColor = "purple";
    msg.style.color = "white"
}

let showWinner = (userWin, userChoice, comChoice) => {
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor = "green";

    } else{
        compScore++;
        compScorPara.innerText = compScore;
        msg.innerText = `You Lose! ${comChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

const genComChoice = ( ) => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
     return options[randomIdx];
}
    
const playGame = (userChoice) => {
    
    const comChoice = genComChoice();

    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = comChoice === "scissors" ? false : true;
        }else if(userChoice === "paper"){
            userWin = comChoice === "rock" ? true : false;
        }
        else{
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};

Choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});