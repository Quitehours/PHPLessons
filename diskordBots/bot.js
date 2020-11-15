const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection(); //в дискорде создаем новую коллекцию
const fs = require('fs');

let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;


fs.readdir('./cmds/', (err,files)=> {
    if(err) {console.log(err)};
    let jsfiles = files.filter(f => f.split(".").pop()==="js");
    if(jsfiles.length <=0) {console.log("Нет комманд для загрузки!")};
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) => {
        let props =  require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name.props); //
    })
})

bot.on('ready', () => {
  console.log(`Запустился бот ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link => {
      console.log(link)
  })
});

bot.on('message', async message => { //Обработчик команд
  if (message.author.bot) {return};
  if (message.channel.type =="dm") {return};//dm если будет пислать плей в ЛС, то мы ничего не делаем
  let user = message.author.username; //Получает имя автора
  let userid = message.author.id;// Получает айди автора
  let messageArray = message.content.split(" "); //Разбивает на массив слов предложение
  let command = messageArray[0].toLowerCase(); //тут пишем, что нулевой елемент массива будет выступать командой для бота
  let args = messageArray.slice(1); //slice(1) вырезает и возращает копию массива
  if(!message.content.startsWith(prefix)) {return};
  let cmd = bot.commands.get(command.slice(prefix.length));//
  if(cmd) {cmd.run(bot, message, args)};
});

bot.login(token);