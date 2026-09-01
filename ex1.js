// Student Grade Calculator using ES6+

const readline = require("readline");

// Arrow function - calculate total
const calculateTotal = (marks) => {
    return marks.reduce((total, mark) => total + mark, 0);
};

// Arrow function - calculate percentage
const calculatePercentage = (total, subjects) => {
    return (total / (subjects * 100)) * 100;
};

// Arrow function - calculate grade
const calculateGrade = (percentage) => {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";
    return "F";
};

// Arrow function - calculate result
const calculateResult = (marks) => {
    return marks.every(mark => mark >= 35) ? "PASS" : "FAIL";
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get input from user
rl.question("Enter student name: ", (name) => {

    rl.question("Enter Maths marks: ", (maths) => {

        rl.question("Enter Science marks: ", (science) => {

            rl.question("Enter English marks: ", (english) => {

                // Convert input to numbers
                const mathsMark = Number(maths);
                const scienceMark = Number(science);
                const englishMark = Number(english);

                // Spread operator
                const marks = [...[mathsMark, scienceMark, englishMark]];

                // Destructuring
                const [mathsMarks, scienceMarks, englishMarks] = marks;

                // Calculations
                const total = calculateTotal(marks);
                const percentage = calculatePercentage(total, marks.length);
                const grade = calculateGrade(percentage);
                const result = calculateResult(marks);

                // Template literal
                console.log(`
========== STUDENT RESULT ==========

Name       : ${name}
Maths      : ${mathsMarks}
Science    : ${scienceMarks}
English    : ${englishMarks}

Total      : ${total}/300
Percentage : ${percentage.toFixed(2)}%
Grade      : ${grade}
Result     : ${result}

=====================================
`);

                rl.close();
            });
        });
    });
});