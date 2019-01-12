const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('bot en heroku', {type: 'WATCHING'});
    console.log('Up and loaded!');
});


let prefix = "$";

client.on('message', message => {
    if (!message.content.startsWith(prefix) || !message.guild) return;
    if (message.author.bot) return;
    
    const cont = message.content.split(' ').slice(1);
    const args = cont.join(' ');

    if (message.content.startsWith(prefix+'ping')){
        message.channel.send('pong');

    } else if (message.content.startsWith(prefix+ 'say')) {
        if (!args) return;
        message.channel.send(args);
    }
});

//Carefull! Private token!
client.login("NTMzNjk3OTk4MDgyMDE1MjQy.Dxu3nw.Ylck6jw6ILKIY2UCisoaTfgWYR4");