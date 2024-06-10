let humanScore = 0;
let computerScore = 0;
const body = document.querySelector("body");

function getComputerChoice(){
    let num = Math.random();
    if (num < 0.33) return "Rock";
    else if (0.33 <= num && num < 0.66) return "Paper";
    else return "Scissors";
}

function getHumanChoice(){
    let choice = prompt("Choose between Rock, Paper, and Scissors").toLowerCase();
    return choice.substring(0,1).toUpperCase() + choice.substring(1);
}

const winner = document.createElement("div");
const buttons = document.querySelectorAll(".game_buttons");
const results = document.createElement("div");
const end = document.createElement("div");

function playRound(humanChoice, computerChoice){
    if((humanChoice == "Rock" && computerChoice == "Scissors") || 
       (humanChoice == "Scissors" && computerChoice == "Paper") || 
       (humanChoice == "Paper" && computerChoice == "Rock")){
        winner.textContent = `You win! ${humanChoice} beats ${computerChoice} \n`;
        humanScore++;
    } else if((humanChoice == "Rock" && computerChoice == "Paper") || 
              (humanChoice == "Scissors" && computerChoice == "Rock") || 
              (humanChoice == "Paper" && computerChoice == "Scissors")){
        winner.textContent = `You lose! ${computerChoice} beats ${humanChoice} \n`;
        computerScore++;
    } else if((humanChoice == "Rock" && computerChoice == "Rock") || 
              (humanChoice == "Scissors" && computerChoice == "Scissors") || 
              (humanChoice == "Paper" && computerChoice == "Paper")){
        winner.textContent = `Tie! ${computerChoice} ties with ${humanChoice} \n`;
    } else {
        winner.textContent = "Error \n";
    }
    body.appendChild(winner);
}

function handleButtonClick(event) {
    playRound(event.target.id, getComputerChoice());
    results.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
    body.appendChild(results);
    endGame();
}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    buttons.forEach((button) => { 
        button.removeEventListener("click", handleButtonClick);
        button.addEventListener("click", handleButtonClick);
    });
}

function endGame(){
    if(humanScore == 5){
        end.textContent = "GAME OVER. YOU WIN!";
        playAgain();
    } else if (computerScore == 5){
        end.textContent = "GAME OVER. YOU LOSE!";
        playAgain();
    }
    body.appendChild(end);
}

function playAgain(){
    humanScore = 0;
    computerScore = 0;
    const playButton = document.createElement("button");
    playButton.textContent = "Play Again";
    body.appendChild(playButton);

    winner.textContent= "";

    playButton.addEventListener("click", () => {
        end.textContent = "";
        results.textContent = "";
        body.removeChild(playButton);
        playGame();
    });
}

playGame();
