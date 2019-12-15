const Discord = require('discord.js')
const bot = new Discord.Client()
var information = require('./information.json');

bot.login(information.botid)

bot.on('ready', function () {
    console.log('The bot is online!')
    bot.user.setActivity(`Looking for updates`)
  })

let last_rss = ""

let Parser = require('rss-parser');
let parser = new Parser();
 
setInterval(function(){
    (async () => {
 
        let feed = await parser.parseURL(information.url);
        let titles = feed.items[0].title
        if(titles !== last_rss){
            let links = feed.items[0].link
            let desc = feed.items[0].contentSnippet
            let newembed = new Discord.RichEmbed()
                               .setColor(information.color || '#91a6a6')
                               .setTitle(titles)
                               .setURL(links)
                               .setDescription(desc)
            
            bot.channels
                .get(information.channel)
                .send(
                    newembed
                );
            last_rss = titles
        }
       
      })();
  }, 3000);