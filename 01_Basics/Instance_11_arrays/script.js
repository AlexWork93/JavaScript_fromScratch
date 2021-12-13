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
    if (arrExample.indexOf(value) > 5) {
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


// string.split(", "); returns array of values from the string. To clear work of our code we have to pass appropriate type of splitter

const someString = "AAA, asdasd, dadasfas, erfarfa, fasdfasdf, asdfasdf, gwtgwert, hrthdtghst, gtawerfsdfa, asergfasdfa";

const arrayFromString = someString.split(", ");

console.log(arrayFromString);
//[ 'AAA',
//   'asdasd',
//   'dadasfas',
//   'erfarfa',
//   'fasdfasdf',
//   'asdfasdf',
//   'gwtgwert',
//   'hrthdtghst',
//   'gtawerfsdfa',
//   'asergfasdfa' ]

// array.join('splitter'); returns string from array values with specified splitter

const newStringFromArray = arrayFromString.join(" <superSplitter> ");

console.log(newStringFromArray);
//AAA <superSplitter> asdasd <superSplitter> dadasfas <superSplitter> erfarfa <superSplitter> fasdfasdf <superSplitter> asdfasdf <superSplitter> gwtgwert <superSplitter> hrthdtghst <superSplitter> gtawerfsdfa <superSplitter> asergfasdfa


// Sorting of array elements

arrayFromString.sort();
console.log(arrayFromString);
//[ 'AAA',
//   'asdasd',
//   'asdfasdf',
//   'asergfasdfa',
//   'dadasfas',
//   'erfarfa',
//   'fasdfasdf',
//   'gtawerfsdfa',
//   'gwtgwert',
//   'hrthdtghst' ]

// But it doesn't work with numbers
// To sort array with numbers we have to modify our comparing method

const unsortedNumbersArray = [123, 43, 23, 5, 1324, 6, 54, 234, 6, 786, 12, 43, 41, 13, 434];

const sortedNumbersArray = unsortedNumbersArray.sort(function (a, b) {
    return a - b;
})

console.log(sortedNumbersArray);
//[ 5, 6, 6, 12, 13, 23, 41, 43, 43, 54, 123, 234, 434, 786, 1324 ]

// To put one object into another use Objects.assign(mainObject, objectForAddition)

const objectNumberOne = {
    a: 50,
    b: 23
}

const objectNumberTwo = {
    c: 540,
    d: 233
}

console.log(Object.assign(objectNumberOne, objectNumberTwo)); //{ a: 50, b: 23, c: 540, d: 233 }










