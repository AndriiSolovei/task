function pluarise(number){
    num_10 = number % 10;
    num_100 = number % 100;
    if (num_100 >= 11 && num_100 <= 19 || num_10 >= 5 && num_10 <= 9 || num_10 == 0 ) {
        return( number + " днів");
    } else if (num_10 >= 2 && num_10 <= 4 ) {
        return( number + " дні");
    }  else if (num_10 == 1) {
        return( number + " день");
    }

} 
console.log(pluarise(101));