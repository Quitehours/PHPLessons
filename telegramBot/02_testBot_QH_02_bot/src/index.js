const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');
const config = require('./config.js');
const helper = require('./helpers.js');
const kb = require('./keyboard-buttons.js');
const keyboard = require('./keyboard.js');
const database = require('../database.json');
const { film } = require('./keyboard-buttons.js');

helper.logStart();
//
mongoose.Promise = global.Promise;
mongoose.connect(config.DB_URL, {
    useMongoClient: true
})
.then(()=> {
    console.log('MongoDB connected')
})
.catch((err)=> {
    comnsole.log(err);
})

require('./models/film.model')

const Film = mongoose.model('films')

// database.films.forEach(f => new Film(f).save().catch(e=>console.log(e)))


//======================================


const bot = new TelegramBot(config.TOKEN, {
    polling: true
})




bot.on('message', msg => {

    console.log('Working', msg.from.first_name)
    
    const chatId = helper.getChatId(msg);

    switch(msg.text) {
        case kb.home.favourite:
            break
        case kb.home.films:
            bot.sendMessage(chatId, 'Выберите жанр:', {
                reply_markup: {keyboard: keyboard.films}
            })
            break
        case kb.film.comedy:
            sendFilmsByQuery(chatId, {type: 'comedy'})
            break
        case kb.film.action:
            sendFilmsByQuery(chatId, {type: 'action'})
            break
        case kb.film.random:
            sendFilmsByQuery(chatId, {})
            break
        case kb.home.cinemas:
            break
        case kb.back:
            bot.sendMessage(chatId, 'Что хотите посмотреть?', {
                reply_markup: {keyboard: keyboard.home}
            })
            break
    }
})

bot.onText(/\/start/, msg => {
    const text = `Здравствуйте, ${msg.from.first_name}!\nЧто хотите посмотреть?`
    bot.sendMessage(helper.getChatId(msg), text, {
      reply_markup: {
        keyboard: keyboard.home
      }
    })
  })

bot.onText(/\/f(.+)/, (msg, [source, match]) => {

    const filmUuid = helper.getItemUuid(source)
    const chatId = helper.getChatId(msg);

    Film.findOne({uuid: filmUuid}). then(film => {
        
        const caption = `Название: ${film.name}\nГод:${film.year}\nРейтинг:${film.rate}\nДлина:${film.length}\nСтрана:${film.country}`

        bot.sendPhoto(chatId, film.picture, {
            //дополнительные параметры для вывода пользователю фильма
            caption: caption
        })
    }) 
})
//=============================================


function sendFilmsByQuery(chatId, query) {
    Film.find(query).then(films => {
        console.log(films)
        


        const html = films.map((f,i) => {
            return `<b>${i+1}</b> ${f.name} / /f${f.uuid}`
        }). join('\n')

        bot.sendMessage(chatId, html, {
                parse_mode: 'HTML',
                reply_markup: {
                keyboard: keyboard.films
                }
        })
    })
}

function sendHTML(chatId, html, kbName=null) {
    const options = {
        parse_mode: 'HTML'
    }
        if(kbName) {
            options['reply_markup'] = {
                keyboard:keyboard[kbName]
            }
        }
}
