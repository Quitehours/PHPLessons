// 1 Функции
//Function Declaration: - можно обращаться к функции в любое время
//Неважно расположение функции относительно строк кода
// function greet (name) {
//     console.log('Привет - ' + name);
    
// }

//Function Expression: - если переменная функции объявлена позже вызова функции, то будет exception
//Только при условии, что перменная была объявлена раньше вызова ее
// const greet2 = function greet2(name) {
//     console.log('Привет 2 - ' + name);
// }

// greet('Lena');
// greet2('Lena');

// console.dir(greet); //  выводит информацию про функцию


// 2 Анонимные функции 
// let counter = 0;
//  const interval = setInterval (function() { //Функция которая выполняется по времени, 
//     if(counter === 5) {
//     clearInterval(interval); //выходит из интервала при условии, что счеттчи равен 5
//     } else {
//     console.log(++counter);
//     }
// }, 1000)



// 3 Стрелочные функции

// function greet (name) {
//     console.log('Привет - ' + name);
    
// }
//аналог обычной функции
// const arrow = (name) => {
//     console.log('Привет - ' + name);
// }
//аналог 2
// const arrow2 = name => console.log('Привет - ', name) 


// const pow2 = num => { 
//     return num**2; //возводит число в степень **
// }

// console.log(pow2(5))


// 4 Параматеры по умолчанию

// const sum = (a=0,b=0) => a+b; //b=0 по умoлчанию
// console.log(sum(1,41));


function sumAll(...all) { //rests - ...all   - собирает все числа в all массив
    let result = 0;
    for (let num of all) {
            result+=num;
    }
    return result;
}
const res = sumAll(1,2,3,4,5);
console.log(res);


// 5 Замыкания  
//вызов одной функции с дургой функции
function createMember(name) {
    return function(lastName) {
        console.log(name+lastName)
    }
}
const logWithLastName = createMember('Vladilen');
console.log(logWithLastName('Minin'));
console.log(logWithLastName('Kuznetsov'));