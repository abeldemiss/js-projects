let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random * 10);
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
