let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
const drawGame = () =>{
    msg.innerText = "Game is Draw.Play again!";
    msg.style.backgroundColor = "brown";
}
const showWinner = (userWin,userChoice,playGame) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win.Your ${userChoice} beats  ${playGame}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose.${playGame} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}
const genCompChoice = () => {
    const options = ["rock","shisor","paper"];
    const rndIdx = Math.floor(Math.random() * 3);
    return options[rndIdx];
}
const compChoice = (userChoice) => {
        const playGame = genCompChoice();
        if(userChoice === playGame){
            drawGame();
        }else{
            let userWin = true;
            if(userChoice === "rock"){
                userWin = playGame === "paper" ? false : true;
            }else if(userChoice === "paper"){
                userWin = playGame === "shisor" ? false : true;
            }else{
                userWin = playGame === "rock" ? false : true;
            }
            showWinner(userWin,userChoice,playGame);
        }
    };
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
        compChoice(userChoice);
    }); 
});