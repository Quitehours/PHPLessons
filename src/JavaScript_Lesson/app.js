// window.onload = function() {
//     var pos = 0;
//     var box = document.getElementById('box');
//     var t = setInterval(move, 10);

//     function move() {
//         if(pos >= 150) {
//             clearInterval(t);
//         } else {
//             pos += 1;
//             box.style.left = pos+'px';
//         }
    
// }
// };
// function Persons (first, last, age, gender, interests) {
//     this.name ={
//         'first' : first,
//         'last' : last
//     };
//     this.age = age;
//     this.gender = gender;
// }

// var person1 = new Persons (David, Backham, 26, male, ['football','basketball'])


function hello () {
    console.log('Hello!')
}

const person = { 
    name: 'Vlad',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function () {
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
    }
}