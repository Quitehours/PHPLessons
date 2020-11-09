//os.js - помогает получить информацию по операционной системе в которой мы работаем
const os = require('os')

console.log('Операционная система: ', os.platform());

console.log('Архитектура процессора: ', os.arch());

console.log('Информацию по процессорам: ', os.cpus());

console.log('Свободная память: ', os.freemem());

console.log('Всего памяти: ', os.totalmem());

console.log('Домашняя директория : ', os.homedir());

console.log('Сколько времени включена система: ', os.uptime());