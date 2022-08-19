function printAlphabet(count){
    startNum = 64;
    finishNum = 90;
    let alphabet = " ";
    let countOfColumn = Math.ceil(26/count);
    for (i = 1; i <= countOfColumn; i++){
        alphabet += "\n";
        startNum++;
        for (j = 0; j < count; j++) {
            if(j * countOfColumn + startNum <= finishNum){
            alphabet += String.fromCharCode(j * countOfColumn + startNum) + "\t";
            } else {
                alphabet += " ";
            }

    }
    }
    return alphabet;
}
console.log(printAlphabet(9));
