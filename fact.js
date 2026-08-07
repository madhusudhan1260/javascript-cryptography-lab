// Program 4: Factorial Using Methods

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

rl.question("Enter a number: ", (input) => {

    let num = parseInt(input);

    console.log("Factorial = " + factorial(num));

    rl.close();
});