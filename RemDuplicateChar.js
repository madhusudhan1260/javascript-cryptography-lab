// Program 7: Remove Duplicate Characters

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (str) => {

    let result = "";
    let seen = {};

    for (let ch of str) {
        if (!seen[ch]) {
            result += ch;
            seen[ch] = true;
        }
    }

    console.log("String after removing duplicates:");
    console.log(result);

    rl.close();
});