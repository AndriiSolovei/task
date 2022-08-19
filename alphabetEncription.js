function alphabetEncription (text) {
    let result = "";
    let textchar = [...text.toUpperCase()];
    
    for (i = 0; i < textchar.length; i++) {
        if (textchar[i] == " ") {
            result += "  ";
        } else {
            result += textchar[i].charCodeAt() - 64 + " ";
        }
    }
    return result;
}
console.log (alphabetEncription("PENis lox"));
// console.log('A'.charCodeAt());