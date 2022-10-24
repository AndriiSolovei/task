class Person {
    constructor(obj){
        this.obj = obj;
    }
    
    getAge(){
        let age = 0;
        let nowYear = new Date();
            age = nowYear.getFullYear() - this.obj.dateOfBirth.getFullYear()
        return age; 
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
    sortPerson(mounth){
        let sort = new Map();
        let newArrPerson = []; //отсортирований масив за місяцем
        if (mounth == 0){
            for(let i = 0; i < this.obj.length; i ++){
                if(this.obj[i].dateOfBirth.getMonth() == 9){
                    newArrPerson.push(this.obj[i])
                }
            } 
        } else if (mounth == 1){
            for(let i = 0; i < this.obj.length; i ++){
                if(this.obj[i].dateOfBirth.getMonth() == 9 || this.obj[i].dateOfBirth.getMonth() == 10){
                    newArrPerson.push(this.obj[i])
                }
            }
        } else if (mounth == 2){
            for(let i = 0; i < this.obj.length; i ++){
                if(this.obj[i].dateOfBirth.getMonth() == 9 || this.obj[i].dateOfBirth.getMonth() == 10 || this.obj[i].dateOfBirth.getMonth() == 11){
                    newArrPerson.push(this.obj[i])
                }
            }
        }
        newArrPerson.sort((a,b) => {return a.dateOfBirth.getMonth() - b.dateOfBirth.getMonth()})
        let arrObjOctomber = []
        let arrObjNovember = []
        let arrObjDecember = []
        for(let i = 0 ; i < newArrPerson.length; i++){
            if(newArrPerson[i].dateOfBirth.getMonth() == 9){
                arrObjOctomber.push(newArrPerson[i])
                sort.set('Жовтень 2022', arrObjOctomber)
            } else if (newArrPerson[i].dateOfBirth.getMonth() == 10){
                arrObjNovember.push(newArrPerson[i])
                sort.set('Листопад 2022', arrObjNovember)
            } else if (newArrPerson[i].dateOfBirth.getMonth() == 11){
                arrObjDecember.push(newArrPerson[i])
                sort.set('Грудень 2022', arrObjDecember)
            }
        }
        sort.forEach((value,key) => {
            console.log(key)
            value.sort((a,b) => {return b.dateOfBirth - a.dateOfBirth})
                 .forEach((value,key) => { console.log(`(${value.dateOfBirth.getDate()}) - ${value.name} - (${new Person(value).pluralization(new Person(value).getAge())})`)})
            
        })   
    }   
}
let arrPerson = new Person([
    {dateOfBirth: new Date('1998-12-23'), name: "Петя Петров"},
    {dateOfBirth: new Date('1995-10-20'), name: "Ваня Іванов"},
    {dateOfBirth: new Date('2005-12-13'), name: "Коля Новорічний"},
    {dateOfBirth: new Date('1978-11-18'), name: "Стас Різдвяний"}
 ]);
console.log(arrPerson.sortPerson(2))

