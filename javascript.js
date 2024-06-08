let humanScore = 0; 
let computerScore = 0;

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
function playRound(humanChoice, computerChoice){
    if((humanChoice=="Rock" && computerChoice == "Scissors") || (humanChoice=="Scissors" && computerChoice == "Paper") || (humanChoice=="Paper" && computerChoice == "Rock")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if((humanChoice=="Rock" && computerChoice == "Paper") || (humanChoice=="Scissors" && computerChoice == "Rock") || (humanChoice=="Paper" && computerChoice == "Scissors")){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if((humanChoice=="Rock" && computerChoice == "Rock") || (humanChoice=="Scissors" && computerChoice == "Scissors") || (humanChoice=="Paper" && computerChoice == "Paper")){
        console.log(`Tie! ${computerChoice} ties with ${humanChoice}`);
    }
    else console.log("Error");
}

function playGame(){
    for(let i=0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`You won ${humanScore} times and the Computer won ${computerScore} times.`);

}

playGame();

