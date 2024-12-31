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

let humanScore = 0;
let computerScore = 0;


// Logic for Rock, Paper, Scissors buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
    console.log('Rock Pressed');
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
});

//Create function getHumanChoice
// //make humanChoice case-insensitive
// function getHumanChoice() {
//     // let humanGuess = prompt("Enter rock, paper, or scissors.").toLowerCase();
//     // return humanGuess;
// }


//Create function playGame
// function playGame() {
//     //Create humanScore and computerScore




//Create function playRound
//Log a winner for the round
//     //Increment humanScore or computerScore
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both players chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}



//     //Play game by calling playRound 5x
//     // for (let i = 1; i <= 5; i++) {
//     // console.log(`Round: ${i}`);
//     //Create variables computerChoice and human choice
//     let computerChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();

//     // playRound(humanChoice, computerChoice);
//     // console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);

//     //Final score
//     if (humanScore > computerScore) {
//         console.log('You are the winner!');
//     } else if (computerScore > humanScore) {
//         console.log('Computer wins!');
//     } else {
//         console.log("It's a tie!");
//     }

//     // }
// }

// playGame();









//Compare userChoice to computerChoice

