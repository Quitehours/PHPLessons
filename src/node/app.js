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