// Program 4: Find the Largest of Three Numbers Entered by the User
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        rl.question("Enter third number: ", (num3) => {

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            num3 = parseFloat(num3);

            let largest;

            if (num1 >= num2 && num1 >= num3) {
                largest = num1;
            } else if (num2 >= num1 && num2 >= num3) {
                largest = num2;
            } else {
                largest = num3;
            }

            console.log("Largest number =", largest);

            rl.close();
        });
    });
});
