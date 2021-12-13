"use strict"

const arrExample = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arrExample);    //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//Remove last element from array

arrExample.pop();           //[ 1, 2, 3, 4, 5, 6, 7, 8 ]

console.log(arrExample);

//Add element to the end of array

arrExample.push(60);

console.log(arrExample);    //[ 1, 2, 3, 4, 5, 6, 7, 8, 60 ]

//To get every element from array and update

for (let i = 0; i < arrExample.length; i++) {
    arrExample[i] += 5;
}

console.log(arrExample);    //[ 6, 7, 8, 9, 10, 11, 12, 13, 65 ]

console.log('\n\n\n');

for (let value of arrExample) {
    if(arrExample.indexOf(value) > 5){
        continue;
    }
    arrExample[arrExample.indexOf(value)] += 10;
}
console.log(arrExample);    //[ 16, 17, 18, 19, 20, 21, 12, 13, 65 ]

console.log('\n\n\n');

//For each method of array:
//    OurArray.forEach(function(elementOfArray, indexOfThisElement, referenceToOurArray) {....body of function, some logic...});
//      ^                                                                       ^
//      ^_______________________________________________________________________^


arrExample.forEach(function (value, index, array) {
    let mess = `Our array before change ${array} \n`;
    mess += `Now we increase element with index ${index} and value ${value} on 5 \n`;
    array[index] += 5;
    mess += `Our array after changes ${array}\n`;
    console.log(mess);
});