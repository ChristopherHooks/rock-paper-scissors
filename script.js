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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function isGameOver() {
        if (humanScore === 5) {
            result.textContent = 'You are the winner!';
        } else if (computerScore === 5) {
            result.textContent = 'Computer wins!';
        }
    }

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

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const result = document.querySelector('#result');

    rock.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
        result.textContent = (`Human score: ${humanScore} | Computer score: ${computerScore}`);
        isGameOver();
    });

    paper.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
        result.textContent = (`Human score: ${humanScore} | Computer score: ${computerScore}`);
        isGameOver();
    });

    scissors.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
        result.textContent = (`Human score: ${humanScore} | Computer score: ${computerScore}`);
        isGameOver();
    });

    if (humanScore === 5) {
        result.textContent = 'You are the winner!';
    } else if (computerScore === 5) {
        result.textContent = 'Computer wins!';
    };

}

playGame();

