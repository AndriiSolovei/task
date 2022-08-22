function changeValue (field) {
    let newArr;
            newArr = field.map(el => { 
                if (el == 1) {
                    return ' x ';
                } else if (el == -1) {
                    return ' 0 ';
                } else {
                    return '   ';
                }
            });
return newArr;        
}



function renderField (field_2) {
    let newArr = changeValue(field_2);
    let result = [];
    for (i = 0; i < newArr.length; i+=3) {
        result.push([newArr[i], newArr[i+1], newArr[i+2]].join("|"));
    }
    console.log(result);
return result.join("\n---+---+---\n");    
}
console.log(renderField([
    1,0,0,
    0,0,0,
    0,0,-1
]));