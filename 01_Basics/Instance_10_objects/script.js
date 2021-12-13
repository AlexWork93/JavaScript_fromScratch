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
    if (typeof(objectExample[key]) === "object"){
        for (let nestedObjectKey in objectExample[key]) {
            console.log(`There are ${nestedObjectKey} : ${objectExample[key][nestedObjectKey]} inside ${key}`);
        }
    }else {
        console.log(`There are ${key} : ${objectExample[key]}`);
    }
}

















