// Program 10: Implement a Caesar Cipher with a Shift Value of 3

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a message: ", (message) => {
    let encrypted = "";

    for (let i = 0; i < message.length; i++) {
        let ch = message[i];

        if (ch >= 'a' && ch <= 'z') {
            encrypted += String.fromCharCode(((ch.charCodeAt(0) - 97 + 3) % 26) + 97);
        } else if (ch >= 'A' && ch <= 'Z') {
            encrypted += String.fromCharCode(((ch.charCodeAt(0) - 65 + 3) % 26) + 65);
        } else {
            encrypted += ch;
        }
    }

    console.log("Encrypted Message:", encrypted);

    rl.close();
});