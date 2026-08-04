const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first integer: ", (num1) => {
    rl.question("Enter second integer: ", (num2) => {
        let sum = parseInt(num1) + parseInt(num2);
        console.log("Sum =", sum);
        rl.close();
    });
});