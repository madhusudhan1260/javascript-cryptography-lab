// Program 8: Generate the Multiplication Table of a Given Number up to 10

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (num) => {
    num = parseInt(num);

    console.log("Multiplication Table of", num);

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }

    rl.close();
});