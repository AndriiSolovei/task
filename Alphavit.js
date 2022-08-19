//console.log(String.fromCharCode(65));

function printAlphabet(startNum, finishNum){
    let i =1;
    let difference = finishNum - startNum;
    for (; startNum <= finishNum;) {
        for (; i <= difference + 1; i++){
        console.log(String.fromCharCode(startNum) + " " + i + "\t");
            startNum++;
    }}
}
printAlphabet(65,90);