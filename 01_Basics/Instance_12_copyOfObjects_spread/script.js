"use strict"

const firstObject = {
    name: 'name of object',
    width: 1243,
    height: 4123,
    nestedObject: {
        name: 'name of nested object',
        number: 3456,
        nestedObject2: {
            name: 'name of nested object',
            number: 3456,
            nestedObject3: {
                name: 'name of nested object',
                number: 3456,
                nestedObject4: {
                    name: 'name of nested object',
                    number: 3456
                }
            }
        }
    },
    private: false
}

// one of possible ways to copy object is using loop
// but it is necessary to create nested loop for every nested object. Otherwise it will be just reference to one object
function copyOfObject(object) {
    const newObject = {};
    for (const objectKey in object) {
        if (typeof(object[objectKey]) === "object") {
            console.log("Im inside if");
            newObject[objectKey] = copyOfObject(object[objectKey]);
        } else {
            newObject[objectKey] = object[objectKey];
        }
    }
    return newObject;
}


const newObject = copyOfObject(firstObject);


console.log(firstObject);
console.log(newObject);

newObject["name"] = "Adjusted name";
newObject["nestedObject"].name = "Adjusted name of nested object";

newObject["nestedObject"].nestedObject2.nestedObject3.nestedObject4.name = "Adjusted name of nested object4";

console.log("\n\n");
console.log(firstObject);
console.log(newObject);

//To copy array is possible to ube command slice

const someArr = ['a', 'e', 'tr', 'ewr'];
const someAnotherArr = someArr.slice();

someAnotherArr[2] = 'asdasdasd';

console.log(someArr);               //[ 'a', 'e', 'tr', 'ewr' ]
console.log(someAnotherArr);        //[ 'a', 'e', 'asdasdasd', 'ewr' ]

// Spread operator ...

const spreadTestFirstObj = {
    name: 'lalala',
    type: 'mymymy',
    number: 1234
}

const spreadTestSecondObj = {
    name1: 'lalarqwerla',
    type1: 'mymqwrewqeymy',
    number1: 1234334
}

const spreadTestSomeAnotherObject = {
    ...spreadTestFirstObj,
    ...spreadTestSecondObj
}

console.log(spreadTestSomeAnotherObject)
















