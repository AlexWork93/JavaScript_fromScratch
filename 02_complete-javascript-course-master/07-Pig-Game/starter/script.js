'use strict';

const scoreEl01 = document.querySelector('#score--0');
const scoreEl02 = document.querySelector('#score--1');
const diceEL = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let player,
    totalScoreStorage,
    currentScoreStorage;

startGame();

buttonRoll.addEventListener('click', function () {
    //Set current dice val
    const diceValue = Math.trunc(Math.random() * 6) + 1;
    //Show corresponding dice image
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${diceValue}.png`;
    //check for rolled value and select another player
    if (diceValue !== 1) {
        currentScoreStorage[player] += diceValue;
        document
            .querySelector(`#current--${player}`)
            .textContent = String(currentScoreStorage[player]);
    } else {
        holdScore();
        changePlayer();
    }
})

buttonHold.addEventListener('click', function () {
    holdScore();
    if (totalScoreStorage[player] >= 100) {
        buttonRoll.classList.add('hidden');
        buttonHold.classList.add('hidden');
        diceEL.classList.add('hidden');
    } else {
        changePlayer();
    }
});

buttonNew.addEventListener('click', startGame);

function holdScore() {
    totalScoreStorage[player] += currentScoreStorage[player];
    document
        .querySelector(`#score--${player}`)
        .textContent = String(totalScoreStorage[player]);
    currentScoreStorage[player] = 0;
    document
        .querySelector(`#current--${player}`)
        .textContent = String(0);
}

function changePlayer() {
    document
        .querySelector(`.player--${player}`)
        .classList.remove('player--active');
    player = player === 0 ? 1 : 0;
    document
        .querySelector(`.player--${player}`)
        .classList.add('player--active');
}

function startGame() {
    player = 0;
    totalScoreStorage = [0, 0];
    currentScoreStorage = [0, 0];
    scoreEl01.textContent = String(totalScoreStorage[0]);
    scoreEl02.textContent = String(totalScoreStorage[1]);
    if (!diceEL.classList.contains('hidden')){
        diceEL.classList.add('hidden');
    }
    if (buttonRoll.classList.contains('hidden')){
        buttonRoll.classList.remove('hidden');
    }
    if (buttonHold.classList.contains('hidden')){
        buttonHold.classList.remove('hidden');
    }
}


















