// Program 5: Fibonacci Series Using Recursion

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

rl.question("Enter number of terms: ", (input) => {

    let n = parseInt(input);

    console.log("Fibonacci Series:");

    for (let i = 0; i < n; i++) {
        console.log(fibonacci(i));
    }

    rl.close();
});