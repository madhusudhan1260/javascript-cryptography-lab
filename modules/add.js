function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

calculate(10, 20, (sum) => {
    console.log("Sum =", sum);
});
