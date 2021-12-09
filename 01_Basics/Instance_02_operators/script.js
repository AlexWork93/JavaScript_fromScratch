"use strict"

//concatenation

console.log("first string " + "second string");

const firstString = "first string",
    secondString = "second string";

console.log(`This string consists from ${firstString} and ${secondString}.`);

//operators of equation

console.log("\n\n");


const firstNum = 1,
    secondNum = 2,
    thirdNum = 3;


console.log((firstNum + secondNum) == thirdNum);    // true
console.log((firstNum + secondNum) === thirdNum);   // true
console.log((firstNum + secondNum) == `3`);         // true
console.log((firstNum + secondNum) === `3`);        // false
console.log((firstNum + secondNum) != thirdNum);    // false
console.log((firstNum + secondNum) !== `3`);        // true
console.log("\n\n");

const boolTrue = true,
    boolFalse = false;

console.log(boolTrue && boolTrue);      // true
console.log(boolTrue && boolFalse);     // false
console.log(boolFalse && boolTrue);     // false
console.log(boolFalse && boolFalse);    // false
console.log(boolTrue || boolTrue);      // true
console.log(boolTrue || boolFalse);     // true
console.log(boolFalse || boolTrue);     // true
console.log(boolFalse || boolFalse);    // false
console.log(boolTrue && !boolTrue);     // false


console.log("\n\n");














