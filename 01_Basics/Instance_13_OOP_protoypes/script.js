"use strict"

//First way to create an object

let myFirstObject = {};

myFirstObject.nameOfForstObject = "Im first Object";
myFirstObject.numberOfFirstObject = 123412341234;
myFirstObject.getInfo = function (){
    console.log(`Name of object = ${this.nameOfForstObject}, number of object = ${this.numberOfFirstObject}`);
}

myFirstObject.getInfo(); //Name of object = Im first Object, number of object = 123412341234


//Second way to create object

const mySecondObject = {
    nameOfSecondObject: "Im second Object",
    numberOfSecondObject: 5432345,
    //Also it is possible to use multiple words notation for naming of parameters
    //To getting access to such variable should use square brackets instead dot separated notation

    "name of some parameter": "value of this parameter",

    getInfoAboutSecondObject: function (){
        return `Hi! ${this.nameOfSecondObject} with number ${this.numberOfSecondObject} and with some parameter ${this["name of some parameter"]}`;
    }
}

console.log(mySecondObject.getInfoAboutSecondObject()); //Hi! Im second Object with number 5432345

// Third! Creating using a constructor function

function myThirdObject (nameOfThirdObject, numberOfThirdObject, arrayWithSomeValuesForThirdObject){
    this.nameOfThirdObject = nameOfThirdObject;
    this.numberOfThirdObject = numberOfThirdObject;
    this.arrayWithSomeValuesForThirdObject = arrayWithSomeValuesForThirdObject;
    this.getInfo = getThirdObjectInfo;
}

    function getThirdObjectInfo(){
        console.log(`Hi! ${this.nameOfThirdObject} with number ${this.numberOfThirdObject} and with some parameter ${this.arrayWithSomeValuesForThirdObject}`);
    }

const myThirdObjectInstance = new myThirdObject("Im third object", 12341234, ["first value ", "second value "]);
myThirdObjectInstance.getInfo();

//We can add function into a constructor function this way.

myThirdObject.prototype.newFunc = function () {
    console.log("hi:)");
}

myThirdObjectInstance.newFunc();

//Fourth. Singleton. This is a combination of literal way and constructor function way. Also this is the way to create only one instance of object.


let myFourthObject = new function () {
    this.name = "name";
    this.number = 12341234;
    this.getInfo = function (){
        return `Hi! ${this.name} with number ${this.number}`;
    }
}

console.log(myFourthObject.getInfo())




















