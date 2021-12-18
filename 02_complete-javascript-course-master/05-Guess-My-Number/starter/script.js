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
const secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
// document.querySelector('.number').textContent = String(secretNumber);
document.querySelector('.check').addEventListener('click', someAction);

function someAction() {
    const guess = Number((document.querySelector('.guess').value));
    if (!guess) {
        document.querySelector('.message').textContent = 'Invalid input';
    } else if (guess > secretNumber){
        document.querySelector('.message').textContent = `Too much`;
        score--;
    } else if (secretNumber > guess){
        document.querySelector('.message').textContent = `Too less`;
        score--;
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = `You win`;
    }
    document.querySelector('.score').textContent = String(score);
}





















