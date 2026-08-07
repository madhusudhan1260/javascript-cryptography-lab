// Program 9: Matrix Addition and Multiplication (2x2)

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Enter elements of First Matrix (2x2):");

let A = [];
let B = [];
let count = 0;

function readFirstMatrix() {
    if (count < 2) {
        rl.question(`Row ${count + 1}: `, (row) => {
            A.push(row.split(" ").map(Number));
            count++;
            readFirstMatrix();
        });
    } else {
        count = 0;
        console.log("Enter elements of Second Matrix (2x2):");
        readSecondMatrix();
    }
}

function readSecondMatrix() {
    if (count < 2) {
        rl.question(`Row ${count + 1}: `, (row) => {
            B.push(row.split(" ").map(Number));
            count++;
            readSecondMatrix();
        });
    } else {

        let add = [];
        let mul = [[0, 0], [0, 0]];

        for (let i = 0; i < 2; i++) {
            add[i] = [];
            for (let j = 0; j < 2; j++) {
                add[i][j] = A[i][j] + B[i][j];
            }
        }

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                for (let k = 0; k < 2; k++) {
                    mul[i][j] += A[i][k] * B[k][j];
                }
            }
        }

        console.log("Matrix Addition:");
        console.table(add);

        console.log("Matrix Multiplication:");
        console.table(mul);

        rl.close();
    }
}

readFirstMatrix();