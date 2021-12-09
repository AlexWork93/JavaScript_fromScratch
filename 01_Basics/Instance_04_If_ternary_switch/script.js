//if else statment

let a = 0.
b = 5;
while (a < 10) {
    if (a > b) {
        console.log("a > b");
    } else if (a < b) {
        console.log("a < b");
    } else {
        console.log("a == b");
    };
    a++;
};
console.log("\n\n\n");


//ternary operator

let c = 0.
d = 5;
while (c < 10) {
    //condition holds       doesn't hold
    (c > d) ? console.log("c > d") : console.log("c < d");
    c++;
};

console.log("\n\n\n");

//switch
let e = 3;
while (e < 10) {
    switch (e) {
        case 5:
            console.log(5);
            break;
        case 7:
            console.log(7);
            break;
        default:
            console.log("I do not know what are you talking about");
            break;
    };
    e++;
};