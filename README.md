# rock-paper-scissors
# Rock-Paper-Scissors Game

This project is a simple **Rock-Paper-Scissors** game built with JavaScript, HTML, and CSS. It allows users to play against the computer by clicking buttons corresponding to their choice of "rock," "paper," or "scissors." The first player to reach a score of 5 wins the game.

## Features

- **Interactive gameplay**: Players select their move (rock, paper, or scissors) via buttons on the web page.
- **Randomized computer choice**: The computer randomly selects its move.
- **Score tracking**: Keeps track of the player's and computer's scores.
- **Winner announcement**: Declares the winner when either the player or computer reaches a score of 5.

## How It Works

1. The `getComputerChoice` function generates a random choice for the computer: "rock," "paper," or "scissors."
2. The `playRound` function compares the player's choice with the computer's choice to determine the winner of the round.
3. Scores are updated after each round, and the results are displayed on the web page.
4. The game ends when either the player or the computer scores 5 points, with the winner being announced.

## Code Overview

### `getComputerChoice`

A function that randomly generates the computer's choice.

```javascript
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
```

### `playGame`

The main game function that initializes the gameplay and event listeners for user interactions.

```javascript
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
}
```

### Game Initialization

The game starts when `playGame()` is called.

## How to Use

1. Clone or download this repository.
2. Create an HTML file that includes:
   - Three buttons for "rock," "paper," and "scissors."
   - A section to display the game results.
3. Link the JavaScript file to your HTML file.
4. Open the HTML file in a browser and start playing!

## Example HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock-Paper-Scissors</title>
</head>
<body>
    <h1>Rock-Paper-Scissors</h1>
    <div>
        <button id="rock">Rock</button>
        <button id="paper">Paper</button>
        <button id="scissors">Scissors</button>
    </div>
    <p id="result">Make your move!</p>
    <script src="script.js"></script>
</body>
</html>
```

## Customization

- Modify the game to include additional features like sound effects or animations.
- Add a restart button to reset the scores without refreshing the page.
- Customize the CSS to enhance the UI design.

## Future Enhancements

- Add multiplayer functionality.
- Create difficulty levels for the computer's decision-making.
- Track game history and display detailed statistics.

Enjoy playing! 🎮✂️📄🪨
