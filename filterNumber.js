let filterNumber = () =>{
    let numberArr = [];
    for(i = 0; i < 10; i++){
        numberArr.push([i + 1].toString());
    }
    numberArr.map(el => Number.parseInt(el))
             .filter(el => el > 5)
             .forEach(el => console.log(el + "-" + typeof el));

}
filterNumber();