// Program 6: Check Whether a Given String is a Palindrome
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (str) => {
    let reverse = str.split("").reverse().join("");

    if (str === reverse) {
        console.log("The string is a Palindrome.");
    } else {
        console.log("The string is not a Palindrome.");
    }

    rl.close();
});
