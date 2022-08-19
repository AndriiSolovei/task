function factorial (number) {
    let sum_number = 1;
    for (n = 1; n <= number; n++) {
        sum_number *= n;
    }
    return sum_number;
}
console.log(factorial(5));