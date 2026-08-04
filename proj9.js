// Program 9: Count the Number of Digits in a Given Integer

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an integer: ", (num) => {
    num = Math.abs(parseInt(num));

    let count = num.toString().length;

    console.log("Number of digits:", count);

    rl.close();
});
