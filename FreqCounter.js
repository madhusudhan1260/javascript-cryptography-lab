// Program 6: Character Frequency Counter

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (str) => {

    let frequency = {};

    for (let ch of str) {
        if (frequency[ch]) {
            frequency[ch]++;
        } else {
            frequency[ch] = 1;
        }
    }

    console.log("Character Frequencies:");

    for (let key in frequency) {
        console.log(key + " : " + frequency[key]);
    }

    rl.close();
});