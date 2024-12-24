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
//Create function getHumanChoice
//Test getUserChoice
//Create humanScore variable & set to 0
//Create computerScore variable & set to 0
//Create function playRound
//make humanChoice case-insensitive
//Log a winner for the round
//Increment humanScore or computerScore

//Create function playGame
//Move playRound here
//Move scores here
//Play game by calling playRound 5x
//






//Compare userChoice to computerChoice

