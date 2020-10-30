// const cars = ['Mazda', 'Ford', 'BMW', 'Mersedec'];
// const fib = [1,1,2,3,5,8,13];


// console.log(cars);

//  cars.push('Porsche');//добавляет новый елемент в конец массива
//  console.log(cars);

//  cars.unshift("Renault"); //добавляет новый елемент в начало массива 
//  console.log(cars);

//  cars.shift(); //удаляет первый елемент массива также он возращает его
//  const lastCar = cars.pop();
//  const firstItem = cars.shift();

//  console.log(cars);
//  console.log(firstItem);
//  console.log(lastCar);

//  console.log(cars.reverse) //reverse выводит массив задом-наперед
 
// const cars = ['Mazda', 'Ford', 'BMW', 'Mersedec'];
// const people = [
//     {name: 'Vladilen', budget: 4200},
//     {name: 'ELena', budget: 400},
//     {name: 'Viktor', budget: 2010}];

//поиск индекса
// const indexOf = cars.indexOf('BMW'); // indexOf  хорошо работает с примитивными типами данных
//но не с объектами
// Аналог всему этому
// const index = people.findIndex(
//     function(person) {
//         return person.budget === 2010;
//     }
// );
//поиск сразу елемента
// const person = people.find(
//     function(person) {
//         return person.budget === 400;
//     }
// );
// console.log(person);


// cars[indexOf] = 'Fiat';

// console.log(cars);




 // Задача 1 

//  const text = 'Привет, мы изучаем JS';
//  const reverseText = text.split('').reverse().join(''); 
//join - соединяет елементы между собой использую что-то
//split разбивает на массив елементы 

//  console.log(reverseText);

//есть ли такой елемент в массиве
// const cars = ['Mazda', 'Ford', 'BMW', 'Mersedec'];
// // console.log(cars.includes('Mazda'));

// const upperCaseCars = cars.map(car => {//map - создает всегда новый массив  
//     return car.toUpperCase();//переводить все вверхний регистр
// });

// const fib = [1,1,2,3,5,8,13];
// const pow2 = num => num **2;
// const sqrt = num => Math.sqrt(num);
// const pow2fib = fib.map(pow2).map(sqrt);
// console.log(pow2fib);

//Нужно отфильтровать и избавиться от каких-то ненужных елементов 
// const pow2 = num => num **2;
// const filteredNumbers =  pow2Fib = fib.map(pow2);
// pow2Fib.filter(num => { //filter создает новый массив и выполняет условие (фильтрация по определенному условию массива)
//     return num > 20
// });
// console.log(pow2Fib);
// console.log(filteredNumbers);


// const people = [
//         {name: 'Vladilen', budget: 4200},
//         {name: 'ELena', budget: 400},
//         {name: 'Viktor', budget: 2010}
//     ];
//     const AllBudget = people.filter(person => person.budget > 2000).reduce((acc, person) =>{
        
//         acc+=person.budget;
//         return acc;
//     }, 0)
//     console.log(AllBudget);