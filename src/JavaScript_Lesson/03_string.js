// const name = "Vladilen";
// console.log(typeof name);
// const age = 26; 
// //const output = 'Привет меня зовут ' + name + ' и мой возвраст ' + age + ' лет';
// const output = `Привет, меня зовут ${name} и мой возраст ${age} лет`; // `` - обратные кавычки позволяют не использовать выше указанный синтаксис для написания строки
// //Можно использовать тернарный оператор в обратных кавычках

// console.log(output);

// const output = `
//     <div> This is div </div>
//     <p> this is p </p>
// `;

// console.log(output);

// const name = "Vladilen";
// //new string
// console.log(name.length); //длина массива строчного
// console.log(name.toUpperCase); //приводим текст к верхниму регистру
// console.log(name.toLowerCase); //приводим текст к нижнему регистру
// console.log(name.charAt(2)); //получаем елемент массива, который находится во-второй ячейке
// console.log(name.indexOf('лен')); //есть ли этот елемент в строке, если да то выдает индекс ячейки в которой начинается этот елемент
// console.log(name.startsWith('Vlad')); //проверка стратует ли строчка с указанного елемента
// console.log(name.endsWith('en')); //проверка заканчивается ли строчка с указанного елемента

// //также можно выполнять сразу несколько поисков либо изменений
// console.log(name.toLowerCase().startsWith('vlad')); 

// console.log(name.repeat(3)); //repeat повторения текста кол-во раз

// const string = `    password     `;
// console.log(string);

// //указывает с какой стороны мы уберем пробелы строке текста
// console.log(string.trimLeft()); //
// console.log(string.trimRight());


function logPerson(s, name, age) {
    if(age < 0 ){
        age = "еще не родился"
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = "vladilen";
const personName2 = "Maxim";
const personAge = 26;
const personAge2 = -10;

const output = logPerson`Имя: ${personName}, возраст: ${personAge}!`
const output = logPerson`Имя: ${personName2}, возраст: ${personAge2}!`
console.log(output);
console.log(output2);
