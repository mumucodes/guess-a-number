import { guessNumber } from './utils.js'

const button = document.getElementById('button');
const resetButton = document.getElementById('reset-button');
const guess = document.getElementById('guess');
const results = document.getElementById('results');

let magicNumber = Math.floor(Math.random() * 20);

button.addEventListener('click', () => {
    
    let userGuess = Number(guess.value);
    const result= guessNumber(userGuess, magicNumber);

    if (result === 0) {
        results.textContent =`we have a draw!`;
    }
    else if (result === 1) {
        results.textContent = `too high`;
    }
        else if(result === -1) {
        results.textContent = `too low`;
    }
}
)



