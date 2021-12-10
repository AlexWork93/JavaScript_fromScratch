

//Functiuns execute in the same order like they are called in code. But it is possible when next function will start before previous finished its flow and return result. If these functions works with the same data it may cause some problems.
//To avoid this situation would be a good idea to use callback function. Callback is a mechanism, when previous function calls foreward function, likewise in in the instance below.


//Functions without callback

function first() {
    setTimeout(function () {
        console.log(`I am first`);
    }, 500);
}

function second() {
    console.log(`I am second`);
}

first();
second();




//functions with callback

function first1(callback) {                         //function take callback like a parameter (and we pass function into this parameter)
    setTimeout(function () {
        console.log(`I am first with call back`);
        callback();                                 //and call it in desired plase
    }, 500);
}

function second1() {
    console.log(`I am second with callback`);
}

setTimeout(function () {
    console.log(`\n\n\n`);
    first1(second1);                                //we pass second function like a parameter to first function
}, 500);
