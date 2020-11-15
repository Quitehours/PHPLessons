const TelegramBot = require('node-telegram-bot-api');
const debug = require('./helpers');
const fs = require('fs');
const TOKEN = '1400648101:AAEsu5a4lR1RX9WjiY92BQro9NUhDcD_uO0';
console.log('Bot has been started...')

//polling - позволяет общаться клиенту с сервером. 
//Пользователь отправляет команду боту, она уходит на сервер и затем сервер
//отвечает и результат отправляется пользователю
//Объект от класса TELEGRAmBOT
const bot = new TelegramBot(TOKEN, {
    polling: {
        //Будет проходить 300 мили секунд от запроса клиента на сервер
        interval: 300,
        //Если он был оффлайн, то он автоматически отправит ответ, перейдет в реди вкл
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});



//27 L - Создание и оплата товара

 










// //26 L - отправка контакта 

// bot.onText(/\/contact/, msg => {
//     bot.sendContact(msg.chat.id, '+380991933263', 'Katya', {
//         last_name: 'Voloshina'
//     })
// })










//25 L - отправка геолакации
// bot.onText(/\/loc1/, msg => {
// //Координаты точки берутся с гугл карт и так далее
//     bot.sendLocation(msg.chat.id, '59.356978', '30,000056')

// })











//24 L - отправка видео
//простой способ
// bot.onText(/\/v2/, msg => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Sending video...');
//     bot.sendVideo(chatId, 'https://youtu.be/YDqQ9W0_BBM')
// })
 
// bot.onText(/\/v2/, msg => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Sending video...');
//     bot.sendVideo(chatId, '/gallery/video.3gp')
// })

// bot.onText(/\/v3/, msg => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Sending video...');

//     fs.readFile(__dirname + './video.mp4', (err, video) => {
//         if(err) throw err;
//         bot.sendVideo(chatId, video)
//     })
    
// })

// //23 L - отправка стикера
// bot.onText(/\/s1/, msg => {
//     bot.sendSticker(msg.chat.id, './gallery/comics.webp')
// })
// bot.onText(/\/s2/, msg => {
//     fs.readFile(__dirname + '/gallery/comics.webp', (err, sticker) => {
//         if(err) throw err
//         bot.sendSticker(msg.chat.id, sticker);
//     })
// })
// bot.onText(/\/s2/, msg => {
    
// })


//22 L - отправка файла

// bot.onText(/\/doc1/, msg => {
//     bot.sendDocument(msg.chat.id, './gallery/wfm.xlsx')
// })
// bot.onText(/\/doc2/, msg => {
//     bot.sendMessage(msg.chat.id, 'Загрузка началась...')
//     fs.readFile(__dirname + '/gallery/wfm.zip', (err, file) => {
//         if(err) throw err;
//         bot.sendDocument(msg.chat.id, file, {
//             caption: 'Additional.text'
//         }).then(()=>{
//             bot.sendMessage(msg.chat.id, 'Загрузка прошла успешно!')
//         })
//     })
// })




// //21 L - Отправка аудио сообщений
// bot.onText(/\/audio/, msg => {

//     bot.sendMessage(msg.chat.id, 'Start audio uploiading...')

//     fs.readFile(__dirname + '/gallery/Forsage.mp3', (err, data) => {
//         if(err) {
//             throw err; 
//         }
//             //then(выполняется после этого процесса)
//         bot.sendAudio(msg.chat.id, data).then(() => {
//                 bot.sendMessage(msg.chat.id, 'Uploading finish')

//         });
//     })
// })


// //20 L - отправка картинок

// bot.onText(/\/pic/, msg => {
//     //(chat.id, подключаем fs и прокладываем путь)
//     bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/gallery/Tom.jpg'));
// })

// bot.onText(/\/pic2/, msg => {
//     //(chat.id, подключаем fs и прокладываем путь)
//     bot.sendPhoto(msg.chat.id, './Tom.jpg', {
//         caption: 'This is cat-Tom'
//     })
// })


// //16 L - перенаправление сообщенией (1)
// const inline_keyboard = [
//     [
//         {
//             text: 'Forward',
//             callback_data: 'forward' 
//         },
//         {
//             text: 'Reply',
//             callback_data: 'reply'
//         }
//     ],
//     [
//         {
//             text: 'Edit',
//             callback_data: 'edit'
//         },
//         {
//             text: 'Delete',
//             callback_data: 'delete'
//         }
//     ]
// ]
// bot.on('callback_query', query => {

//     const {chat, message_id, text} = query.message

//     switch(query.data) {
//         case 'forward':
//             //(куда, откуда, что)
//             bot.forwardMessage(chat.id, chat.id, message_id)
//             break
//         case 'reply':
//             bot.sendMessage(chat.id, 'Отвечаю на сообщение', {
//                 reply_to_message_id: message_id
//             })
//             break
//         case 'edit':
//             //
//             bot.editMessageText(`${text} (edited)`, {
//                 chat_id: chat.id,
//                 message_id: message_id,
//                 reply_markup: { inline_keyboard}
//             })
//             break
//         case 'delete':
//             bot.deleteMessage(chat.id, message_id)
//             break

//     }

//     bot.answerCallbackQuery({
//         callback_query_id: query.id
//     })
// })

// bot.onText(/\/start/, (msg, [source, match]) => {
    
//     const chatId = msg.chat.id;

//     bot.sendMessage(chatId, 'Keyboard', {
//         reply_markup: {
//             inline_keyboard 
//         }
//     })
// })



// //15 L -обработка инлайн запросов
// bot.on('inline_query', query => {

// const results = [];

// for(let i=0;i<5;i++) {
// //пушом добавляю в массив елементы
//     results.push({
//         type: 'article',
//         id: i.toString(),
//         title: 'Title' + i-1,
//         input_message_content: {
//             message_text: `Article #${i+1}`
//         }
//     })
// }

//     //ответить в инлайн запросе
//     //1-октуда идет запрос
//     //2- массив елементов, либо статтей
//     //3-кэш тайм // для оптимизации
//     bot.answerInlineQuery(query.id, results, {
//         cache_time: 0
//     })
// })





// //14 L - Инлайн клавиатура
// bot.on('message', msg => {
//     const chaId = msg.chat.id;
//     bot.sendMessage(chaId, 'inline keyboard', {
//         reply_markup: {
//             inline_keyboard: [
//                 [
//                     {
//                         text: 'Google', 
//                         url: 'https://google.com'
//                     }
//                 ],
//                 [
//                     {
//                         text: 'Reply',
//                         callback_data: 'reply'
//                     },
//                     {
//                         text: 'Forward',
//                         callback_data: 'forward'
//                     }
//                 ]
//             ]
//         }
//     })
// })
// //Чтобы выловить callback нужно использовать следующую прослушку
// bot.on('callback_query', query => {
//     //bot.sendMessage(query.message.chat.id, debug(query));
//     //answerCallbackQuery -выводит по центру экрана сообщение, которое принимет вторым параметром
//     bot.answerCallbackQuery(query.id, `${query.data}`);
// })







//Установка nodemon: позволяет нажимать комбинацию ctrl+C, чтобе пересобирать проект
//npm i --sev-dev nodemon
//npm i -g nodemon




// //13 L - простая клавиатура пользователя
// bot.on('message', msg => {
    
//     const chatId = msg.chat.id;

//     if(msg.text === 'Закрыть') {

//         bot.sendMessage(chatId, 'Закрываю клавиатуру', {
//             reply_markup: {
//                 remove_keyboard: true
//             }
//         })

//     } else if (msg.text === 'Ответить') {

//         bot.sendMessage(chatId, 'Отвечаю', {
//             reply_markup: {
//                 force_reply: true
//             }
//         })
//     } else {

//         bot.sendMessage(chatId, 'Клавиатура', {
//             //3 параметром передается объект reply_markup
//             //в нем вызываем keyboard, кнопки которых передаются
//             //в массиве массивов.
//             // reply_markup: {
//             //     keyboard: [
//             //         ['1', '2'],
//             //         ['3'],
//             //         ['4', '5', '6']
//             //     ]
//             //}
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'Отправить местоположение',
//                         request_location: true
//                     }],
//                     ['Ответить','Закрыть'],
//                     [ {
//                         text: 'Отправить контакт',
//                         request_contact: true,
//                     }]
//                 ],
//                 //one_time_keyboard: true - убирает клавиатуру сразу после вызова команды
//                 //с нее
//                 one_time_keyboard: true     
//             }
        
//         })
//     }
// })




//12 L - Дополнительные опции сообщения
//
//Отключает превью ссылки при передачи ее кому-либо, прийдет, просто ссылка
//а не небольшое описание, картинка и тд, и тп
//obj.sendMessage(1-елемент по которому будем отвечать(кому), 
//2-информация которая будет передена(ссылка),3-в фигурнных скобках дополнение {} )
// bot.on('message', msg => {

//     setTimeout(()=>{
//     bot.sendMessage(msg.chat.id, 'https://www.npmjs.com/package/node-telegram-bot-api', {
//         disable_web_page_preview: true, 
//         // disable_notification: true - отключает нотификацию смс в правом нижнем углу
//         disable_notification: true
//         })
//     }, 4000)
// })


// //11L - отправка Markdown текста в коде
// bot.on('message', msg => {
//     const markdown = `
//         *Hello, ${msg.from.first_name}*
//         _Italic text_
//     `;
//     const {id} = msg.chat;
//     bot.sendMessage(id, markdown, {
//         parse_mode : 'Markdown'
//     })

// })







// //10 L - отправка HTML кода 
// bot.on('message', msg => {

//     const html = `
//         <strong>Hello, ${msg.from.first_name}</strong>
//         <pre>
//             ${debug(msg)}
//         </pre>
//     `;

// //парсим и преобразовываем текст в HTML code 
//     bot.sendMessage(msg.chat.id, html, {
//         parse_mode: 'HTML'
//     });
// });











//10 L
//Обработка команд добавленных через команды в телеграме
// /start 
//1-ый параметр - это название команды
//2-ой параметр - какой переменную она принимает для считывания и обработки информации
// bot.onText(/\/start/, msg => {
//     const {id} = msg.chat;

//     bot.sendMessage(id, debug(msg));
// })

//Вылавливаем дополнительные слова прикрепленные к командам
//Первые елемент массива называется source
//Второй елемент массива называется match
// bot.onText(/\/help (.+)/, (msg,[source, match])=> {
//     const {id} = msg.chat;

//     bot.sendMessage(id, debug(match));

// })



//5 L
// //bot.on - это прослушка, которая говорит боту, что мы будем принимать massage
// //1-ый параметр это - 'message'
// //2-ой параметр это - msg
// //msg.chat.id - используется для того, чтобы отправить пользователю, который пишет боту смс
// //2-о1 параметр это смс, которое прийдет пользователю.
// bot.on('message', msg => {
//     const {id} = msg.chat


// //Если пишем смс "hello", то отправляется смс "Hello, my dear (nickname user)"
// //В обратном случае выводятся все данные про переменную msg
// //JSON.stringify(msg) -узнаем что может метод меседж
// //JSONнаходится в helpers.js, вызывается через debug
//     // if(msg.text.toLowerCase() === 'hello') {
//     //     bot.sendMessage(id, `Hello, my dear ${msg.from.first_name}`);
//     // } else {
//     //     bot.sendMessage(id, debug(msg));
//     // }


//4 L
// //sendMessage и все подобные функции имееют промисы, которые можно добавлять и писать им условия
// //.then, .catch    
// bot.sendMessage(id, debug(msg))
//     .then(() => {
//         console.log('Message has been send');
        
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }); 