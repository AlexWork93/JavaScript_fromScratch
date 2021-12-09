"use strict"

//while loop

let num = 30;

while (num <= 60) {
    num++;
    if (num >= 40 && num <= 50) {
        continue;
    } else if (num % 2 != 0) {
        console.log(num);
    }

};
console.log("\n\n\n");

//for loop

for(let i = 0; i <= 15; i+=2){
    console.log(i);
};

console.log("\n\n\n");

let arr = [12, 32, 43, 54, 56, 65, 67, 6, , 45, 234, 23, 12];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log("\n\n\n");



//For loop specifically for  arays
arr.forEach(printArray);

function printArray(arrayElement){
    console.log(arrayElement);
};

console.log("\n\n\n");
