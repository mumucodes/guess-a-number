export function guessNumber(guess, MagicNumber) {
    if(guess > MagicNumber) return 1;
    if(guess < MagicNumber) return -1;
    if(guess === MagicNumber) return  0;
}