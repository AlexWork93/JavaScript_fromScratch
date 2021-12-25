'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};


const newMenu = [...restaurant.mainMenu, 'Pelmeni'];
console.log(newMenu);

const spreadedMenu = [...restaurant.mainMenu];
console.log(spreadedMenu);

const entireMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(entireMenu);


//Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// 1. Create one player array for each team (variables 'players1' and 'players2')
let [tempTeam1, tempTeam2] = game.players;
console.log(tempTeam1);
console.log(tempTeam2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
function teamSelector(team) {
    const [gk, ...fieldPlayers] = team;
    return [gk, fieldPlayers];
}

const players1 = teamSelector(tempTeam1);
const players = teamSelector(tempTeam2);

console.log(players1);
console.log(players);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...tempTeam1, ...tempTeam2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const playersFinal = [...tempTeam1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {team1, x: draw, team2} = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

function printGoals(...somePlayers) {
    console.log(somePlayers);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored);
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

team1 > team2 && (console.log('team1'));
team2 > team1 && (console.log('team2'));

//Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

//1
for (const x of game.scored.entries()) {
    console.log(`Goal ${x[0] + 1}: ${x[1]}`);
}

//2
let averageOdd = 0;
for (const [, value] of Object.entries(game.odds)) {
    averageOdd += value;
}
averageOdd /= Object.keys(game.odds).length;
console.log(averageOdd);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

for (const [key, value] of Object.entries(game.odds)) {
    console.log(`Odd of ${game[key] ? `victory ${game[key]}` : `draw `}: ${value}`);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

const scorers = {}

for (const value of game.scored) {

    if (Object.keys(scorers).includes(value)) {
        scorers[value] += 1;
    } else scorers[value] = 1;
    console.log(value);
}
console.log(scorers);


//SET

const setExample = new Set(['pizza', 'pasta', 'pizza', 'risotto', 'pizza']);

console.log(setExample); //Automatically remove all duplications

console.log(setExample.size); // NOT LENGTH return size of set

console.log(setExample.has('pasta')); // NOT INCLUDE returns boolean if it has or not

//To add new element
setExample.add('pelmeni');
setExample.add('pelmeni');

console.log(setExample); //only one of add operations was succeeded

//To remove element from set
setExample.delete('pelmeni');
console.log(setExample);

//Sets can be used for taking unique elements from array for some reasons

const arrayOfSomeValues = ['pen', 'brush', 'pencil', 'brush', 'pencil', 'brush', 'brush', 'pencil', 'brush', 'eraser', 'pencil', 'brush', 'brush', 'pencil', 'pencil', 'pen', 'eraser'];
console.log(arrayOfSomeValues);
const uniqueArrayOfSomeValues = [...new Set(arrayOfSomeValues)];
console.log(uniqueArrayOfSomeValues);
//Or we need just an amount of unique elements
console.log(new Set(arrayOfSomeValues).size);

//MAP

//vfp is a data structure for storing data in format key-value.
// Unlike objects, key value of maps can be represented by any datatype instead strings in objects

//To add new element to map use 'set' keyword
const mapExample = new Map();
mapExample.set('this is key', 'this is value');
mapExample.set('this is another key', 'another value');
console.log(mapExample);
//even if we have already set a key with string value, we can set a key with another datatype

mapExample.set(50, 'value for key with number datatype');
console.log(mapExample);
//it is possible to pass an array or something another like a value

mapExample.set('key for array value', ['pizza', 'pasta', 'pizza', 'risotto', 'pizza']);
console.log(mapExample);

//to retrieve value from map we could pass key with keyword 'get'
console.log(mapExample.get(50));

//Boolean type is too applicable to be a key

mapExample
    .set('open', 11)
    .set('close', 23)
    .set(true, 'we are open')
    .set(false, 'we are close');
const currentTime = Math.trunc(Math.random() * 24);
console.log(currentTime);
console.log(mapExample.get(currentTime > mapExample.get('open') && currentTime < mapExample.get('close')));

//method has also applicable for maps
console.log(mapExample.has(50));
console.log(mapExample.has(501));

//it has size
console.log(mapExample.size)

//and delete
console.log(mapExample.has(50));
mapExample.delete(50);
console.log(mapExample.has(50));
mapExample.set(50, 'value for key with number datatype');
console.log(mapExample.has(50));

//also it is possible to go something like this

mapExample.set(document.querySelector('h1'), 'Heading');//in key field in devTools console we can see h1 element
console.log(mapExample);


//convert object to map

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// the best way to use for loop with maps, is to destructure it into key-value pairs

for (const [key, value] of hoursMap) {

}

const question = new Map([
    ['question', 'What is the best programming language in the world'],
    [1, 'java'],
    [2, 'javaScript'],
    [3, 'C'],
    ['correct', 2],
    [true, 'Correct'],
    [false, 'Try again']
]);

console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`${key}). ${value}`);
    }
}
// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answer))


//convert map to an array
console.log(...question); //returns an array for every entry with key-value pair
console.log(...question.keys()); //returns an array with all keys
console.log(...question.values()); //returns an array with all values

//WHAT DATA STRUCTURE USE?

//Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// ⚽
// [FIRST HALF] 17:
// GOAL

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no
// duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events);
console.log(typeof events);
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
//gameEvents.delete(64);
console.log(gameEvents);
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
let average = 0
for (const key of gameEvents.keys()) {
    key < 90 && average++;
}
average = 90 / average;
console.log(average);


// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:


for (const [key, value] of gameEvents) {
    console.log(`${key <= 45 ? 'First half' : 'Second half'}: ${value}`);
}

//HOW TO WORK WITH THE STRINGS

const airline = "TAP Air Ukraine";
const plane = 'A320';

console.log(airline.length);
console.log(airline[1]);

console.log(airline.indexOf('A'));
console.log(airline.lastIndexOf('A'));
console.log(airline.indexOf('D')); //-1, because it does not actually exist

//slice method
console.log(airline.slice(4)); //only with begin(included) parameter
console.log(airline.slice(4, 7)); //with both begin and end(not included) parameters

console.log(airline.slice(airline.indexOf('U')));

//example of extracting of first word
console.log(airline.slice(0, airline.indexOf(' ')));
//example of extracting of first word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//Lets check if the seat in air[lane is middle or not. Middle seats have in number letter E or B.

function checkIfSeatIsMiddle(seat) {
    console.log((seat[seat.length - 1] === 'E' || seat[seat.length - 1] === 'B') ? 'Middle' : 'Not Middle');
}

checkIfSeatIsMiddle('23E');
checkIfSeatIsMiddle('43R');
checkIfSeatIsMiddle('23B');

//Work with lower and upper case

const incorrectName = 'bRyAn AdAmS';
function normalizeName (name) {
    let correctName = '';
    let tempName = '';
    for (const letter of name) {
        if (letter === ' ') {
            correctName += tempName[0].toUpperCase() + tempName.slice(1);
            correctName += ' ';
            tempName = '';
        } else {
            if (name.indexOf(letter) === name.length - 1){
                tempName += letter.toLowerCase();
                correctName += tempName[0].toUpperCase() + tempName.slice(1);
            }
            tempName += letter.toLowerCase();
        }
    }
    return correctName;
}

console.log(normalizeName(incorrectName));
console.log(normalizeName('bRyAn AdAmS'));
console.log(normalizeName('xfGgsdfh sdDfbvxcb')); //?????
console.log(normalizeName('sfzbSsdfc ghdfSgcn'));
console.log(normalizeName('xScvbd dfbxdf Ssdfsdf asdas RsERdfsd')); //????????

//Method trim

const storedEmail = 'blabla@blabla.bla';
const emailFromInput = '   blabLa@blAbla.Bla   ';
const emailAfterTrim = emailFromInput.toLowerCase().trim()

console.log(`[${storedEmail}] is ${storedEmail === emailFromInput ? 'equal' : 'not equal'} to [${emailFromInput}]`);
console.log(`[${storedEmail}] is ${storedEmail === emailAfterTrim ? 'equal' : 'not equal'} to [${emailAfterTrim}]`);


//method replace

const priceGB = '276,34$';
const priceUS = priceGB.replace('$', '&').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement);
const correctedAnnouncement = announcement.replaceAll('door', 'gate');
console.log(correctedAnnouncement);

//Booleans

const plane2 = 'A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.startsWith('A3'));
console.log(plane2.endsWith('neo'));

















