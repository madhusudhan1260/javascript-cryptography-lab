// Program 10: Simple XOR Encryption and Decryption

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the message: ", (message) => {

    rl.question("Enter the key (number): ", (keyInput) => {

        let key = parseInt(keyInput);

        let encrypted = "";
        let decrypted = "";

        for (let ch of message) {
            encrypted += String.fromCharCode(ch.charCodeAt(0) ^ key);
        }

        for (let ch of encrypted) {
            decrypted += String.fromCharCode(ch.charCodeAt(0) ^ key);
        }

        console.log("Encrypted Message:");
        console.log(encrypted);

        console.log("Decrypted Message:");
        console.log(decrypted);

        rl.close();
    });
});