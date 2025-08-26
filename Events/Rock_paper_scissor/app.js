let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw, Play again!";
    msg.style.backgroundColor = "rgb(148, 236, 15)";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}
const playGame = (userChoice) =>{
    //Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp choice can be scissor or paper, coz if it was rock then it will call draw game fxn na
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //comp choice can be scissor or rock, coz if it was paper then it will call draw game fxn na
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //comp choice can be rock or paper, coz it is was scissor then it will call draw game fxn na
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});