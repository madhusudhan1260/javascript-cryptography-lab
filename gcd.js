// Program 2: Greatest Common Divisor (GCD)

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {

        let num1 = parseInt(a);
        let num2 = parseInt(b);

        while (num2 !== 0) {
            let temp = num2;
            num2 = num1 % num2;
            num1 = temp;
        }

        console.log("GCD = " + num1);

        rl.close();
    });
});