// let numbers = [10,20,30];
// let[a,b,c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

// let student={
//     name:"Rahul",
//     age:20,
//     percentage:92.3,
//     city:"Bengaluru"
// };

// let{name,age,percentage,city}=student;
// console.log(name);
// console.log(age);
// console.log(percentage);
// console.log(city);

// let student={
//     name:"Rahul",
//     age:20
// };
// let{name:studentName,age:studentAge}=student;
// console.log(studentName);
// console.log(studentAge);

// Normal
// let numbers = [10,20,30];
// console.log(numbers);

// Using spread operator
// let numbers = [10,20,30];
// console.log(...numbers);

// Combining arrays using spread operator
// let fruits = ["Apple","Mango"];
// let vegetables = ["Carrot","Tomato"];

// let food = [...fruits,...vegetables];
// console.log(...food);

// let numbers = [20,30];
// let newNumbers = [10,...numbers,40];
// console.log(...newNumbers);

// let student={
//      name:"Rahul",
//      age:20
// };

// let studentDetails = {
//         ...student,
//         city:"Bengaluru",
// };

// console.log(studentDetails);

// let student={
//      name:"Rahul",
//      age:20
// };

// let studentDetails = {
//         ...student,
//         city:"Bengaluru",
// };

// console.log(studentDetails.name);
// console.log(studentDetails.age);
// console.log(studentDetails.city);

// function add (...numbers){
//     console.log(numbers);
// }
// add(10,20,30,40);
// function add (...numbers){
//     let sum = 0;
//     for(let number of numbers){
//         sum += number;
//     }
//     return sum;
// }
// console.log(add(10,20));
// console.log(add(10,20,30));
// console.log(add(10,20,30,40));

// function student(name,...subjects){
//     console.log("student:",name);
//     console.log("subjects:",subjects);

// }
// student("Rahul","Maths","Science","English");


// let numbers = [10,20,30,40,50];
// let[first,second,...remaining] = numbers;
// console.log(first, second, ...remaining);


// const person = {
//     name: "Anu",
//     age: 21,
//     city: "Bengaluru",
//     country: "India"
// };

// const { name,...details } = person;
// console.log(name); 
// console.log(details);


// function totalmarks(...marks){
//     let total = 0;
//     for (let mark of marks){
//         total += mark;
//     }
//     return total;
// }
// console.log(totalmarks(80,75,90,85));


// let name = "Rahul";
// let age = 20;
// let department = "CSE";

// let student = {
//     name,
//     age,
//     department: department
// };
// console.log(student);



// Set ElementInternals()

// let count=1;
// const id = setInterval(()=>{
//     console.log(count);
//     count++;
//     if(count>5) 
//         clearInterval(id);
// },1000);

// function orderPizza() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Pizza is ready!");
//         }, 2000);
//     });
// }

// async function getPizza() {
//     try {
//         const result = await orderPizza();
//         console.log(result);
//     } catch (error) {
//         console.log("Oops", error);
//     }
// }

// getPizza();