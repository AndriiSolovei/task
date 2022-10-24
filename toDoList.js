class Person {
    constructor(obj){
        Object.assign(this, obj)
    }
    
    getAge(){
        let nowYear = new Date().getFullYear();
        return nowYear - this.dateOfBirth.getFullYear(); 
    }
    pluralization(number){
        let num_10 = number % 10;
        let num_100 = number % 100;
        if (num_100 >= 11 && num_100 <= 19 || num_10 >= 5 && num_10 <= 9 || num_10 == 0 ) {
            return( number + " років");
        } else if (num_10 >= 2 && num_10 <= 4 ) {
            return( number + " роки");
        }  else if (num_10 == 1) {
            return( number + " рік");
        }
    
    } 
      
}
String.prototype.changeTheFirstLetter = function(word){
    return this.slice(0 , 1).toUpperCase() + this.slice(1 , this.length)
}

function sortPerson(arrPerson,mounth){
    let sort = new Map();
    let newArrPerson = []; //отсортирований масив за місяцем
    if (mounth == 0){
        for(let i = 0; i < arrPerson.length; i ++){
            if(arrPerson[i].dateOfBirth.getMonth() == new Date().getMonth()){
                newArrPerson.push(arrPerson[i])
            }
        } 
    } else if (mounth == 1){
        for(let i = 0; i < arrPerson.length; i ++){
            if(arrPerson[i].dateOfBirth.getMonth() == new Date().getMonth() || arrPerson[i].dateOfBirth.getMonth() == new Date().getMonth()+1){
                newArrPerson.push(arrPerson[i])
            }
        }
    } else if (mounth == 2){
        for(let i = 0; i < arrPerson.length; i ++){
            if(arrPerson[i].dateOfBirth.getMonth() == new Date().getMonth() || arrPerson[i].dateOfBirth.getMonth() == new Date().getMonth()+1 || arrPerson[i].dateOfBirth.getMonth() == new Date().getMonth()+2){
                newArrPerson.push(arrPerson[i])
            }
        }
    }
    newArrPerson.sort((a,b) => {return a.dateOfBirth.getMonth() - b.dateOfBirth.getMonth()})
    let arrObjCurrentMonth = []
    let arrObjCurrentAndNextMonth = []
    let arrObjCurrentAndTwoNextMonth = []
    let now = new Date();
    let nextMonth = new Date();
    let nextTwoMonth = new Date();
    nextMonth.setMonth(now.getMonth()+1)
    nextTwoMonth.setMonth(now.getMonth()+2)
    
    for(let i = 0 ; i < newArrPerson.length; i++){
        if(newArrPerson[i].dateOfBirth.getMonth() == new Date().getMonth()){
            arrObjCurrentMonth.push(newArrPerson[i])
            sort.set(`${new Date().toLocaleDateString( 'uk-UA', {month: 'long'}).changeTheFirstLetter()} ${new Date().getFullYear()}`, arrObjCurrentMonth)
        } else if (newArrPerson[i].dateOfBirth.getMonth() == new Date().getMonth() + 1){
            arrObjCurrentAndNextMonth.push(newArrPerson[i])
            sort.set(`${nextMonth.toLocaleDateString( 'uk-UA', {month: 'long'}).changeTheFirstLetter()} ${new Date().getFullYear()}`, arrObjCurrentAndNextMonth)
        } else if (newArrPerson[i].dateOfBirth.getMonth() == new Date().getMonth() + 2){
            arrObjCurrentAndTwoNextMonth.push(newArrPerson[i])
            sort.set(`${nextTwoMonth.toLocaleDateString( 'uk-UA', {month: 'long'}).changeTheFirstLetter()} ${new Date().getFullYear()}`, arrObjCurrentAndTwoNextMonth)
        }
    }
    sort.forEach((value,key) => {
        console.log(key)
        value.sort((a,b) => {return b.dateOfBirth - a.dateOfBirth})
             .forEach((value,key) => { console.log(`(${value.dateOfBirth.getDate()}) - ${value.name} - (${new Person(value).pluralization(new Person(value).getAge())})`)})
        
    })   
} 
let person = [
    new Person({dateOfBirth: new Date('1998-12-23'), name: "Петя Петров"}),
    new Person({dateOfBirth: new Date('1995-10-20'), name: "Ваня Іванов"}),
    new Person({dateOfBirth: new Date('2005-12-13'), name: "Коля Новорічний"}),
    new Person({dateOfBirth: new Date('1978-11-18'), name: "Стас Різдвяний"})
 ];
console.log(sortPerson(person,2))


