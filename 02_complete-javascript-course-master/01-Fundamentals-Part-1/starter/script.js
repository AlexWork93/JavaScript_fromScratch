//Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
//     Your tasks:
//     1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

// const Mark = {
//     weight: 78,
//     height: 1.69,
//     calculateBMI: function (){
//         return this.weight / (this.height ** 2);
//     }
// }
//
// const John = {
//     weight: 92,
//     height: 1.95,
//     calculateBMI: function (){
//         return this.weight / (this.height ** 2);
//     }
// }
//
// const Mark = {
//     weight: 95,
//     height: 1.88,
//     calculateBMI: function (){
//         return this.weight / (this.height ** 2);
//     }
// }
//
// const John = {
//     weight: 85,
//     height: 1.76,
//     calculateBMI: function (){
//         return this.weight / (this.height ** 2);
//     }
// }
//
// const markHigherBMI = Mark.calculateBMI() > John.calculateBMI();
// let outputMess = ``;
// if (markHigherBMI) {
//     outputMess = `Mark BMI ${Mark.calculateBMI()} greater than John BMI ${John.calculateBMI()}`
// } else {
//     outputMess = `John BMI ${John.calculateBMI()} greater than Mark BMI ${Mark.calculateBMI()} `
// }
// console.log(outputMess);

//Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


const competition = [
    {
        dolphins: [96, 108, 89],
        koalas: [88, 91, 110]
    },

    {
        dolphins: [97, 112, 101],
        koalas: [109, 95, 123]
    },

    {
        dolphins: [97, 112, 101],
        koalas: [109, 95, 106]
    }
]

function getAverage(arr1) {
    let counter = 0;
    let result = 0;
    for (const arr1Key in arr1) {
        result += arr1[arr1Key];
        counter++;
    }
    return Math.round(result / counter);
}

for (let i = 0; i < competition.length; i++) {
    const dolphinsRes = getAverage(competition[i]["dolphins"]);
    const koalasRes = getAverage(competition[i]["koalas"]);
    if (dolphinsRes > 100 && dolphinsRes > koalasRes) {
        console.log(`Dolphins win with score ${dolphinsRes} : ${koalasRes}`);
    } else if (koalasRes > 100 && koalasRes > dolphinsRes) {
        console.log(`Koalas win with score ${koalasRes} : ${dolphinsRes}`);
    } else if (dolphinsRes > 100 && koalasRes > 100 && dolphinsRes === koalasRes) {
        console.log(`We have a draw with score ${dolphinsRes}`);
    } else {
        console.log(`We do not have winner`);
    }
}





























