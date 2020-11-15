const TelegramBot = require('node-telegram-bot-api');


const TOKEN = '1425080571:AAGn_1bXWXHiGp9TLEraemBskgD8g8_olxY';


const bot = new TelegramBot(TOKEN, {
    polling: true
});


bot.on('message', (msg) => {
    console.log(msg);
    bot.sendMessage(msg.chat.id, 'Привет, ' + msg.from.first_name + '!');
});