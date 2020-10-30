//Number 
// const num = 42; //integer
// const float = 42.42; //float
// const pow = 10e3; //pow возводдим число в какую-то степень
// console.log(num);

// console.log('MAX_SAFE_INTEGER',Number.MAX_SAFE_INTEGER); //max value int
// console.log('Math pow 53', Math.pow(2,53)-1);
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER); //mix value int
// console.log('MAX_VALUE', Number.MIN_VALUE);
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY); 
// console.log(Number.NaN); //Not A Number
// console.log(typeof NaN);
// const weird = 2/ undefined;
// console.log(Number.isNaN(weird)); //не есть числом
// console.log(Number.isNaN(42)); //является числом и можно с ним работать
// console.log(Number.isFinite(Infinity)); //КОНЕЧНАЯ ЛИ бесконечность? false
// console.log(Number.isFinite(42)); //конечно ли число 42

// const stringInt = '42';
// const stringFloat = '42.42';
// console.log(stringInt + 2 );//422 потому что приводит строку к числу
// console.log(Number.parseInt(stringInt) + 2 );//44 запасрсили строку-привели строку в числовой вид


// console.log(0.4 + 0.2); 
// console.log((4/10)+(2/10)); 
// console.log(0.4 + 0.2).toFixed(4); //выводит знаки после запятой


//BigInt

// console.log(typeof Number.MAX_SAFE_INTEGER);
// console.log(typeof 5841561616154564545465455646446465454n);

// console.log(10n-4);// error
// console.log(parseInt(10n)-4); // парсим к int
// console.log(10n - BigInt(4)); // парсим к BigInt
// console.log(5n / 2n); //2n


// 3. MATH

// console.log(Math.E);
// console.log(Math.PI);

// console.log(sqrt(25));
// console.log(Math.pow(5,3));
// console.log(Math.max(1,2,4,12,11,111,)); //found max number
// console.log(Math.min(1,2,4,12,11,111,)); //found min number
// console.log(Math.floor(4, 9)); //floor - округляет в меньшую сторону 
// console.log(Math.ceil(4, 9)); // ceil - округляет в большую сторону
// console.log(Math.round(4, 9)); // round - показывает число к ближайшему 
// console.log(Math.trunc(4, 9)); // trunc - возвращает целую часть числа путем удаления всех дробных знаков 
// console.log(Math.random()); //random - рандомное значение

// 4 Example:

// function getRandomBetween (min,max) {
//     return Math.floor(Math.random() * (max - min+1) + min);

// }
// console.log(getRandomBetween(10,42));
