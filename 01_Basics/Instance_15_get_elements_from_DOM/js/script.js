'use strict';

//To get list of elements we can use expression "const elements = document.get...."

//By ID
const box = document.getElementById('box');

console.log(box);

//By TagName
const btns = document.getElementsByTagName('button');

console.log(btns);

    //To click on certain button
btns[1].click();

    //for working with certain element we can get it by index

console.log(btns[1]);

//By class name

const circles = document.getElementsByClassName('circle');

console.log(circles);

//By css selectors

const hearts = document.querySelectorAll('.heart');
                      //querySelector returns first element with this selector

console.log(hearts);

hearts.forEach(function (item){
   console.log(item);
});