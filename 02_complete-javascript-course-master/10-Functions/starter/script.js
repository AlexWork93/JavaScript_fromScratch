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

const flightData = [432, 'One More Passenger'];
ukrainianAirlines.book.call(euroWings, ...flightData);
console.log(euroWings);

// bind method













