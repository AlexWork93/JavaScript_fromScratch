"use strict" //This message tells, that we use newest versions

console.log(1)

let number = 5;
const leftBorderWidth = 1;

// var number = 50; //Old way, don't use it

console.log(number); //5
console.log(number + leftBorderWidth); //6


// Next code give us an error, because variable has type const, so it can't be changed
// leftBorderWidth = 5; 
// console.log(leftBorderWidth);


//This way it is possible to change constant variables
const obj = {
    a: 50
};

console.log(obj.a); //50
obj.a = 10;
console.log(obj.a); //10


// Object datatype: arrays, functions, dataObjects, regularExpressions, errors

const dataObj = {
    name: "Name of object",
    age: 57,
};

console.log(dataObj.name + " " + dataObj.age);

let arr = [];
arr[0] = "I am the first element of array";
arr[1] = "i am the second element of array";

console.log(arr[0] + " \n" + arr[1]);


{
    //  Iteraction with customer
    const obj = {
        result: confirm("Make your choice")
    }

    console.log(obj.result);

    obj.result = prompt("Put your message here", "You didn't put anything:(");
    console.log(obj.result);


    // Result will be always string. To check that, use command typeof

    console.log(typeof (obj.result));

    // To getting number value just put +prompt
    let counter = 0;
    while (true) {
        obj.result = +prompt(`Put your number here, you have ${3 - counter} attempts`, `You didn't put anything:(`);

        if (isNaN(obj.result) && counter < 2) {
            alert("You didn't put a number");
            counter++;
        } else if (counter >= 2) {
            alert("You don't have any attempts anymore");
            break;
        } else {
            console.log(`${obj.result} ${typeof(obj.result)}`);
            break;
        }
    }

}
































