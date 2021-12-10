"use strict"


//function declaration. Function is declared before code runs.

function showMessage() {
    console.log(`Hello World`);
}

showMessage();



const message = `My message`;

function showNewMessage(argumentMessage) {
    console.log(argumentMessage);
};

showNewMessage(message);

// function expression. Function is declared when code run flows to this function 

const myFunc = function (argumentMessage) {
    return `This is newest version of ${message.toLowerCase()}`;
}

console.log(myFunc(message));


// arrow function

const summofAAndB = (a, b) => a + b;

const a = 5,
    b = 10;

const result = summofAAndB(a, b);

console.log(result);