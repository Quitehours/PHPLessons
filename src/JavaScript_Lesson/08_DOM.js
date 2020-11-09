//DOM - document object mode

//

// window.alert('1') == alert('1')

//ввод от пользователя
// window.prompt('Как тебя зовут?')

//

// window.confirm('Как тебя зовут?')//подтвердить, либо отменить действие

document.getElementById('hello') //- елемент по айди поиска ищем
var heading = document.getElementById('hello') //document - объект представляющий дом дерево  
// console.log(heading)
// console.log(document.getElementById('Hello'))

console.dir(heading);//console.dir - показывает свойства объекта
//textContent - выводит текст 
// heading.textContent = 'Changed from JS'; //замена текста html h1 index hello
// const a = 'string'
// console.log(a)






//Добавил функцию таймаут, запустится после 1.5 секунды ожидания на сайте
//и введет новые ксс настройки и сделает замену текста

// setTimeout(()=> {
//     console.dir(heading.textContent);
//     heading.textContent = 'Changed from JavaScript';
//     heading.style.color = 'red';
//     heading.style.textAlign = 'center';
//     heading.style.backgroundColor = 'black';
// },1500)



//Обращается к елементам, как  к селекторам в CSS

// var heading2 = document.querySelector('.h2-class')


var heading3 = document.querySelector('.h2-class');

//Написали функцию, которая получает значение елемента и видоизменяет его
setTimeout(()=> {
    addStylesTo(heading,'JavaScript');
    
}, 1500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text;
    node.style.color = color;
    node.style.textAlign = 'center';
    node.style.backgroundColor = 'black';
    node.style.padding = '2rem';
    
    //false: '', indefined, null, 0, false
    if(fontSize){
        node.style.fontSize = fontSize;
    }
    node.querySelector('.h3-heading').style.width = '100%'
}

setTimeout(()=> {
    addStylesTo(heading3, 'And all denied!', 'blue', '2rem');

},3000)

//Добавляем изменение цвета первого заголовка по клику

heading.onclick = () => {
    if(heading.style.color === 'red'){
        heading.style.color = 'black';
        heading.style.backgroundColor = '#fff'; 
    } else {
        heading.style.color = 'red';
        heading.style.backgroundColor = 'black'
    }
}

//Более простой вариант выполнения этого задания /\
//                                               ||            
//                                               ||
heading3.addEventListener('dblclick', () => {
    if(heading3.style.color === 'red'){
        heading3.style.color = 'black';
        heading3.style.backgroundColor = '#fff'; 
    } else {
        heading3.style.color = 'red';
        heading3.style.backgroundColor = 'black'
    }
})

var heading4 = document.querySelector('.h3-heading');
setTimeout(() => {
   addStylesTo(heading4, ' This is URL', 'blue', '10rem')
},2000)

//Ловим клик и убираем дефалт функции

var link = heading3.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Click in link', event.target)
    
})