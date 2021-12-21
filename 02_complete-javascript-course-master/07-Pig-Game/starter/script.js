'use strict';

//
// const playerFirst = {
//     score: document.querySelector('#score--0'),
//     scoreValue: 0,
//     currentScore: document.querySelector('#current--0'),
//     currentScoreValue: 0,
//     player: document.querySelector('.player--0'),
//
//     selectPlayer: function (){
//         selectPlayer(this.player, playerSecond.player)
//     }
// };
//
// const playerSecond = {
//     score: document.querySelector('#score--1'),
//     scoreValue: 0,
//     currentScore: document.querySelector('#current--1'),
//     currentScoreValue: 0,
//     player: document.querySelector('.player--1'),
//
//
//     selectPlayer: function (){
//         selectPlayer(this.player, playerFirst.player)
//     }
//
// };
//
//

//
// function selectPlayer(playerToOn, playerToOff){
//     console.log('asdasdsad');
//     playerToOn.classList.add('player--active');
//     playerToOff.classList.remove('player--active');
// }
//
// buttonNew.addEventListener('click', playerSecond.selectPlayer);
// buttonRoll.addEventListener('click', playerFirst.selectPlayer);


const scoreEl01 = document.querySelector('#score--0');
const scoreEl02 = document.querySelector('#score--1');
const diceEL = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const currentScore01 = document.querySelector('#current--0');
const currentScore02 = document.querySelector('#current--1');
let player = 0;
const scoreStorage = [0, 0];

scoreEl01.textContent = String(scoreStorage[0]);
scoreEl02.textContent = String(scoreStorage[1]);

diceEL.classList.add('hidden');

buttonRoll.addEventListener('click', function () {
    //Set current dice val
    const diceValue =  Math.trunc(Math.random() * 6) + 1;
    //Show corresponding dice image
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${diceValue}.png`;
    //check for rolled value and select another player
    if (diceValue !== 1){
        document.querySelector(`#current--${player}`).textContent = String(diceValue);
        scoreStorage[player] += diceValue;
        document.querySelector(`#score--${player}`).textContent = String(scoreStorage[player]);

    }else {
        player = player === 0 ? 1 : 0;
    }
})























