//I will end up importing the function into the first line of this document
//when I am fiished writing and testing it in the utils.test.js docment
//when I am imoprting it, I will import it from my utils.js file


const magicButton = document.getElementById('button');
const resetMagic = document.getElementById('reset-button');
const userInput = document.getElementById('guess-input');

// this will be the real world state I am tracking on the site.  So this is the way to initializing the function
let numberofClicksLeft = 3;
let passMeAlong = (userInput.textContent) + "howdy";

console.log(passMeAlong);
 //here we are going to put an eventListener on this button to keep track of this information

// resetMagic.addEventListener('click', () => {
//     numberofClicksLeft--;
//     console.log(numberofClicksLeft)
//         if(numberofClicksLeft === 0) {
//             alert('That is all the chances this time!') + console.log('tirals'); //somehow here is where you will want to make the app reset itself so the user can start over again.
//         };
//     });

// magicButton.addEventListener('click', () => {
//     let userInputField = userInput.textContent;
//   console.log(userInputField);
  
  
// //     if(userInput.textContent === 0) {
// //         alert('small steps');
// //  console.log(userInput, magicButton)
// // }
// });
