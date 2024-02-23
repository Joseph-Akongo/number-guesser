let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    const userDifference = Math.abs(targetNumber - userGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess);
    
    if (userDifference === computerDifference) {
        return true;  // Human player wins in case of tie
    } else if (userDifference < computerDifference) {
        return true;  // Human player wins
    } else {
        return false;  // Computer player wins
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}



