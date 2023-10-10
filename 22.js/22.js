// Exercise 1: Guess the number using javascript 
// Generate random number here
// Keep asking for the number until the correct number is guessed
// Increment the chances variable
// Eventually after the game is over, display the (100 - Number of chances) and the actual number 


//Guess the number 
function guessTheNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let chances = 0;
  
    function promptGuess() {
      chances++;
      rl.question('Guess a number between 1 and 100: ', (input) => {
        const guessedNumber = parseInt(input);
  
        if (isNaN(guessedNumber)) {
          console.log('Invalid input. Please enter a number.');
        } else {
          if (guessedNumber === randomNumber) {
            console.log(`Congratulations! You guessed the number ${randomNumber} correctly.`);
            console.log(`You took ${chances} chances.`);
            rl.close();
          } else if (guessedNumber < randomNumber) {
            console.log('Too low. Try again.');
            promptGuess();
          } else {
            console.log('Too high. Try again.');
            promptGuess();
          }
        }
      });
    }
  
    promptGuess();
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  guessTheNumber();
  