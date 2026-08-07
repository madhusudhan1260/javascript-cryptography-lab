// Program 3: Least Common Multiple (LCM)

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {

        let num1 = parseInt(a);
        let num2 = parseInt(b);

        let lcm = (num1 * num2) / gcd(num1, num2);

        console.log("LCM = " + lcm);

        rl.close();
    });
});