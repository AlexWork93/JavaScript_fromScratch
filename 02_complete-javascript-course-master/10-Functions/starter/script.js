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










