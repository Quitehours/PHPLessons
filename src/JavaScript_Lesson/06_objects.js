// Объекты 
// const person = {
//     name: 'Vladilen',
//     age: 26,
//     isProgramer: true,
//     languages: ['ru', 'en','de'],

//     //greet называется методом, а не функцией, потому что находится внутри объекта
//     greet: function(){
//         console.log('greet from person')
//     }
// }   

// console.log(person.name)
// console.log(person['age'])
// delete person.isProgramer;//Удаляет ключ из объекта
// console.log(person)
// person.age++



//Дестроктуризация
// const name = person.name
// const age = person.age
// const languages = person.languages

//так можно не писать кучу кода указанного выше
// const {name, age: personAge = 10, languages} = person
  
// console.log(name, personAge,languages)

// const person = {
//         name: 'Vladilen',
//         age: 26,
//         isProgramer: true,
//         languages: ['ru', 'en','de'],
// }
    //     //greet называется методом, а не функцией, потому что находится внутри объекта
    //     greet: function(){
    //         console.log('greet from person')
    //     }
    // }   
    // for (let key in person) {
    //     if (person.hasOwnProperty(key)){ //e у него есть свое свойство, которое не находится в key
    //         console.log ('key', key)
    //         console.log ('value', person[key])
    //     }
    // }
    // цикл for in бежит не только по ключам, а также он может заходить в его прототип
    //из-за этого он  моежт изменять их и могу быть проблемы.

    // const keys = Object.keys(person) //Object.keys не бежит по прототипам и возвращает сразу массив елементов
    // console.log(keys)
    // keys.forEach((key) => { //тут сразу фор ичем прогоняем по массиву для вывода
    //     console.log('key', key)
    //     console.log('value', person[key])

    // })



    //Context

    const person = {
        name: 'Vladilen',
        age: 26,
        isProgramer: true,
        languages: ['ru', 'en','de'],
        greet() {
            console.log('greet from person')
        },
        info() {
            console.log('информация про человека по имени: ', this.name) //this.name - person.name
        }
    }

    // person.info();






    const logger = {
        keys(obj) {
            console.log('object keys: ', Object.keys(this))
        }
    }
    const bound =logger.keys.bind(logger)// привязывае котекст, который мы сами выюерем
    bound ()

withParams (top = false, between = false, bottom = false) 
{
    if (top) 
    {
        console.log('----Start----')
    }
    Object.keys(this).forEach((key,index,array) => 
    {
        console.log('"${key}": ${this[key]}')
        if(between && index !==Array.length-1) 
        {
            console.log('----------')
        }
    })
    if(buttom) 
    {
        console.log('-----------')
    }

}
logger.withParams.call(person,true,true,true)
