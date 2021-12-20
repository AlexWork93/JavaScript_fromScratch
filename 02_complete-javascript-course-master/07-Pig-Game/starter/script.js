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
// const buttonNew = document.querySelector('.btn--new');
// const buttonRoll = document.querySelector('.btn--roll');
// const buttonHold = document.querySelector('.btn--hold');
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

scoreEl01.textContent = 0;
scoreEl02.textContent = 0;

diceEL.classList.add('hidden');

























