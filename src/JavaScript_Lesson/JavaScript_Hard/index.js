// function hello () {
//     console.log('Hello!', this)
// }

// const person = { 
//     name: 'Vlad',
//     age: 25,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function () {
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//     }
// }

// const array = [1, 2, 3, 4, 5]

// Array.prototype.multBy = function(n) {
//     return this.map(function(i) {
//         return i*n;
//     })
// }
// console.log(array.multBy(20));

function bind (context, fn) {
    return function(...args) {
        fn.apple(context, args)
    }
}

