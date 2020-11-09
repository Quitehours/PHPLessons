//File System
const fs = require('fs');
const path = require('path')

//Создаем папку (ассинхронные методы)
//Создавалась папка тест
//функиция была добавлени и была проверка файла, 
//то выводится сообщение, что папка создана
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Папка создана');
// })


//Создаем файл в папке
//Добавляем переменную в которой будет содержаться путь
// и с помощью writeFile создаем ее, вторым параметром передается
//то что будет находится в файле
const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, 'Hello NodeJS', (err) => {
//     if (err) {
//         throw err;
//     }

//     console.log('Файл создан');
// })


// //Дописываем файл с помощью fs.appendFile
// fs.appendFile(filePath, '\nHello Again NodeJS', (err) => {
//     if (err) {
//         throw err;
//     }

//     console.log('Файл дописан');
// })

//Чтение файла
fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err) {
        throw err;
    }
    console.log(content)
//чтобы считать текст с файла и расшифровать буфер нужно UTF-8
//старый способ
//     const data = Buffer.from(content);
//     console.log('Content: ', content)
// //конец.
})