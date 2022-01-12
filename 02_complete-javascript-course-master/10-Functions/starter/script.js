'use strict';

//Default parameters of functions

const bookingStorage = [];

const createBooking = function (flightNumber, numPassengers = 1, price = 200 * numPassengers) {

    const booking = {
        flightNumber,
        numPassengers,
        price
    }
    console.log(booking);
    bookingStorage.push(booking);
}


createBooking('LH234');
createBooking('LH645', 3);
createBooking('LH2323', 5, 600);

// createBooking('LH2323', , 600); Skipping parameters is not allowed,
// but it is possible to do next trick
createBooking('LH2323', undefined, 600);

//First class function and high order functions

// =====First class function means that function is an object and can be passed into another
//      function of stored if some data structure
//      Also we can return function from another function

// =====High order function is a function? that receives or returns another function

// Callback functions

const removeSpace = function (someString) {
    return someString.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function (someString) {
    const [first, ...others] = someString.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const stringTransformer = function (someString, functionToUse) {
    console.log(`String before change \n  '${someString}'`);
    console.log(`String after change \n  '${functionToUse(someString)}'`);
    console.log(`Transformed by function ${functionToUse.name}`);
    console.log('')
}

const stringToTransform = 'People love potatoes and grilled meat';

stringTransformer(stringToTransform, removeSpace);
stringTransformer(stringToTransform, upperFirstWord)

//functions that return another functions

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}!`)
    }
}

const greetingHello = greet('Hello');
const greetingHey = greet('Hey');

greetingHello('Alex');
greetingHey('Alex');


//and with arrow functions
const greetArrow = greeting => name => console.log(`${greeting} ${name}!`);

greetArrow('Hello')('Alex');
greetArrow('Hey')('Alex');

//================================================================================

const ukrainianAirlines = {
    airline: 'Ukrainian Airlines',
    iataCode: 'UA',
    booking: [],
    book(flightNumber, passengerName) {
        console.log(`${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
        this.booking.push({flight: `${this.iataCode}${flightNumber}`, passengerName});
    },
};

ukrainianAirlines.book(123, 'Some Passenger');
ukrainianAirlines.book(312, 'Some Another Passenger');
console.log(ukrainianAirlines);

//method 'call' reassign 'this' to fields of passed as first argument object

const euroWings = {
    airline: 'Euro Wings',
    iataCode: 'EW',
    booking: [],
}
//besides method 'book' belongs to first object, we can also use in with second
ukrainianAirlines.book.call(euroWings, 123, 'Some Passenger');
ukrainianAirlines.book.call(euroWings, 312, 'Some Another Passenger');
console.log(euroWings);

//also it can take an array as parameter
const flightData = [432, 'One More Passenger'];
ukrainianAirlines.book.call(euroWings, ...flightData);
console.log(euroWings);

// bind method
//it calls function from some object, takes another object as parameter and returns new function
//where all fields with 'this' keywords are changed to fields related to new object

const euroWingsBook = ukrainianAirlines.book.bind(euroWings);
euroWingsBook(123, 'passenger from method bind');
console.log(euroWings);

//bind method gives an opportunity to predefine some fields

let updatedEuroWingBook = euroWingsBook.bind(euroWingsBook, 200);
updatedEuroWingBook('passenger from updated EuroWingBook');
console.log(euroWings);

//bind method with eventListeners

ukrainianAirlines.planes = 5;
ukrainianAirlines.buyNewPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

const buyNewPlaneButton = document.querySelector('.buy');
buyNewPlaneButton.addEventListener('click', ukrainianAirlines.buyNewPlane.bind(ukrainianAirlines));


//application for tax rate calculations

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.03, 100));

const addFixedTax = addTax.bind(addTax, 0.04);
console.log(addFixedTax(100));
console.log(addFixedTax(5234));
console.log(addFixedTax(13450));

//same result but on function that returns another function

const addTaxNew = rate => value => value + rate * value;

const addTax5 = addTaxNew(0.05);
console.log(addTax5(100));

const addTax6 = addTaxNew(0.06);
console.log(addTax6(100));


//Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1.
// Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2.
// Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
//Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉

const answerPollButton = document.querySelector('.poll');


const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const answer = Number(prompt(`${this.question}\n${printOptions()}\n(Write option number)`));
        if (!isNaN(answer) && answer >= 0 && answer <= 3) {
            this.answers[answer]++;
            alert(`All is ok\n ${this.answers}`);
        } else alert('Invalid input');
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            const expandedArr = [];
            for (const typeElement of this.answers) {
                if(Array.isArray(typeElement)){
                    expandedArr.push(...typeElement);
                }else {
                    expandedArr.push(typeElement);
                }
            }
            console.log(expandedArr);
        } else if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};

const newObj = {
    answers: [[5, 2, 3], [1, 5, 3, 9, 6, 1], 'bla bla bla' , 32]
};

poll.displayResults.call(newObj , 'string');
poll.displayResults.call(newObj , 'array');

function printOptions() {
    let res = '';
    for (const opt of poll.options) {
        res += opt + '\n';
    }
    return res;
}


answerPollButton.addEventListener('click', poll.registerNewAnswer.bind(poll));






