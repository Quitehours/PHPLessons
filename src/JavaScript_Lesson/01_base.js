//alert( )
//1. Переменные 
//variable
// var name = 'Vladilen' // В дальнейшем можно менять значиние переменной
//const lastName = 'Minin' // Пользоваться лучше
//const age = 26 // Пользоваться лучше

// name ='vlad'
// console.log(name) //
// console.log(lastName) //
// const isProgrammer = true //boolean

// const firstName = 'Vladilen';
// const lastName = 'Minin';

// const _private = 'private';

// //const if = 'mkef' // err
// const witNum5 = '5';

//2. Мутирование 

//console.log('Имя человека: ' + firstName + 'Его возраст: ' + age);
//console.log('Имя человека: ' + firstName + 'Его возраст: ' + age);

//const lastName = prompt('Введите фамилию:'); // Получает ввод пользователя
//alert(firstName +  ' ' + lastName);

//3. Операторы

// let currentYear = 2020;
// const birthYear = 1993;

// const age = currentYear - birthYear;
// console.log(age);
// const a = 10;
// const b = 15; 
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(currentYear++);
// console.log(currentYear);
// console.log(++currentYear);
// console.log(--currentYear);
// console.log(currentYear--);
// let c = 32;
// c+=a;
// console.log(c);
// c = c+a;
// console.log(c);

// //4. Типы данных: 
// const isProgrammer = true;
// const name = 'Vladilen';
// const age = 26;

// //console.log();//ВЫВОД В КОНСОЛЬ
// console.log(typeof isProgrammer); //typeof вывод типа переменной
// console.log(typeof name);
// console.log(typeof age);

//5. Приоритет операторов

// const fullAge = 26;
// const birthYear = 1993;
// const currentYear = 2020;

//> < >= <=
//mdn web page
// const isFullAge = (currentYear - birthYear) >= fullAge; // 26 >= 27
// console.log(isFullAge);

//6.Условные операторы
// const courseStatus = 'pending'; //ready, fail, pending

// if (courseStats === 'ready') {
//     console.log('Курс уже готов и его можно проходить');
// }else if(courseStatus === "pending") {
//     console.log('Курс пока находится в процессе обработки');
// }
// else {
//     console.log("Не получился");
// }


// === сраванивает типы и елементы 
// == Приводит разные типы данных к одному и сравнивает, может не точно проводить.
// const num1 = 42; //number
// const num2 = '42'; //string

// console.log(num1 == num2); // result = true

//альтернатива тернарного оператора
// const isReady = true;

// if(isReady) {
//     console.log("Все готово");
// } else {
//     console.log('Все не готово');
// }
// isReady ? console.log("Все готово") : console.log('Все не готово'); //тернарное выражение
// (Условие) ? (true) : (false); 



// 7. Булевая логика

// && - логическое "и"
// || - логическое "или"
// !true - логическое "не"


// 8. Функции: 

// function calculateAge (year) {
//     const nowYear = 2020;
//     age = nowYear - year;
//     if(age >= 0) {
//     return age; 
//     }else {
//         console.log('Введите корректный год, сейчас ' + year);
//     }
// }
// console.log(calculateAge(1999));

// function logInfoAbout(name,year) {
//     const age = calculateAge(year);
    
//     console.log('Человек по имени ' + name + ' сейчас имееет возраст' + age);
// }
// logInfoAbout('Vladilen',1993);


// 9.Массивы 

//const cars = ['Мазда', 'Мерседес', 'Форд']; // более правильная форма для написания

//const cars = new Array['Мазда', 'Мерседес', 'Форд'];

// console.log(cars); 
// console.log(cars.length); // выводит длину массива 

// cars[cars.length] = "Mazda"; // добавляет елемент в массив увеличив массив его на один елемент 



// 10. Циклы 

// const cars = ['Мазда', 'Мерседес', 'Форд'];
// for (let i=0; i<cars.length; i++){
//     console.log(i);
//     const car = cars[i];
//     console.log(car);
// }

// for (let car of cars) { //foreach
//     console.log(car);
// }

// 11. Объекты:

const person = {
    firstName: 'Vladilen',
    lastName: "Minin",
    year:1993,
    languages: ["ru", 'en', 'ge'],
    hasWife: false,
    greet: function () {
        console.log('Greet')
    }
}
console.log(person.firstName); //обращаюсь к обхекту person по его свойству
person.greet(); // Выводит в консоль срочку greet
//вызываем в объекте person строчку greet

const key= 'languages'; //использовать ключ
console.log(person[key]); 
person.isProgrammer = true;

console.log(person);