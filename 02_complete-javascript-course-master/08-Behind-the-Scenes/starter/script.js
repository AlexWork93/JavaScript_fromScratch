'use strict';


function calcAge(birthday) {
    const age = 2021 - birthday;
    function printAge() {
        const mess = `I am ${firstName} and i am ${age}`;
        console.log(mess);
    }
    printAge();
    return (age);
}


const firstName = 'Alex';
console.log(calcAge(1993));



























