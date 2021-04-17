let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, generateTarget) => {
  if (
    humanGuess === generateTarget ||
    Math.abs(generateTarget - humanGuess) <
      Math.abs(generateTarget - computerGuess) ||
    computerGuess === humanGuess
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  } else {
    console.log("Error, enter human or computer.");
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
