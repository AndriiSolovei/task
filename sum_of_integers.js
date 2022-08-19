function sumOfIntegers(start_number, finish_namber){
    let sum_namber = 0;
    for (;start_number <= finish_namber; start_number++){
        sum_namber += start_number;
    }
    return sum_namber;
}
console.log(sumOfIntegers(0,10));