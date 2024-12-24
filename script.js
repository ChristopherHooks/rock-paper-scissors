//Create variable computerChoice
const computerChoice = getComputerChoice();

//Create function getComputerChoice
function getComputerChoice() {

    let computerGuess = Math.floor(Math.random() * 3) + 1;

    if (computerGuess === 1) {
        return "rock";
    } else if (computerGuess === 2) {
        return "paper";
    } else {
        return "scissors";
    }

}
//Test getComputerChoice
console.log(computerChoice);

//Create variable humanChoice
const humanChoice = getHumanChoice();

//Create function getHumanChoice
//make humanChoice case-insensitive
function getHumanChoice() {
    let humanGuess = prompt("Enter rock, paper, or scissors.").toLowerCase();
    return humanGuess;
}
//Test getHumanChoice
console.log(humanChoice);

//Create humanScore variable & set to 0
const humanScore = 0;
//Create computerScore variable & set to 0
const computerScore = 0;

//Create function playRound
//Log a winner for the round
//Increment humanScore or computerScore
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both players chose ${humanChoice}`);
        return;
    } else if (
        humanChoice === rock && computerChoice === scissors ||
        humanChoice === paper && computerChoice === computerChoice === rock ||
        humanChoice === scissors && computerChoice === paper
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        return;
    }
}

playRound();
console.log(`Player: ${humanScore} Computer: ${computerScore}`);
//Create function playGame
//Move playRound here
//Move scores here
//Play game by calling playRound 5x
//






//Compare userChoice to computerChoice

