// Program 5: Reverse a Given String
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (str) => {
    let reverse = str.split("").reverse().join("");

    console.log("Reversed String:", reverse);

    rl.close();
});
