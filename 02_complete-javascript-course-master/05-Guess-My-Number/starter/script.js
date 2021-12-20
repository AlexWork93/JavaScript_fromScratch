'use strict';

// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.message').textContent = 'Correct number';
//
// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);
//
// document.querySelector('.number').textContent = 14;
// console.log(document.querySelector('.number').textContent);
//
// document.querySelector('.score').textContent = 15;
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.check').addEventListener('click', function () {
//     console.log(document.querySelector('.guess').value);
// })

// const someAction = function () {
//         console.log(document.querySelector('.guess').value);
// }
let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highScore = 0;
//
document.querySelector('.check').addEventListener('click', checkAction);

function checkAction() {
    const guess = Number((document.querySelector('.guess').value));
    if (!guess) {
        document.querySelector('.message').textContent = 'Invalid input';
    } else if (score <= 0) {
        document.querySelector('.message').textContent = 'You lost the game 🤪';
    } else if (guess > secretNumber){
        document.querySelector('.message').textContent = `Too much`;
        score--;
    } else if (secretNumber > guess){
        document.querySelector('.message').textContent = `Too less`;
        score--;
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = `You win`;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = String(secretNumber);
        if (score > highScore){
            highScore = score;
        }
        document.querySelector('.highscore').textContent = String(highScore);
    }
    document.querySelector('.score').textContent = String(score);
}

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
//     Your tasks:
//     1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)


document.querySelector('.again').addEventListener('click', againAction);

function againAction() {
    document.querySelector('.message').textContent = 'Start guessing...';
    score = 20;
    document.querySelector('.score').textContent = String(score);
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = String('?');
    secretNumber = Math.trunc((Math.random() * 20) + 1);
}

















