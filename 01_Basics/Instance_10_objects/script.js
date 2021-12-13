"use strict"


const objectExample = {
    name: 'nameOfTestObject',
    number: 12345,
    colors: {
        border: 'black',
        background: 'red'
    },
    private: false
};

console.log(objectExample.name);
console.log(objectExample["name"]);

console.log(objectExample.colors.background);

for (let key in objectExample) {
    let tempValue1 = objectExample[key];
    if (typeof(tempValue1) === "object"){
        for (let nestedObjectKey in tempValue1) {
            let tempValue2 = tempValue1[nestedObjectKey];
            console.log(`There are ${nestedObjectKey} : ${tempValue2} inside ${key}`);
        }
    }else {
        console.log(`There are ${key} : ${tempValue1}`);
    }
}

// Objects don't have length parameter. To get length of object would be a good idea get an array of keys from object and then get length of this array

console.log(`Length of objectExample ${Object.keys(objectExample).length}`)















