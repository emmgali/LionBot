const Discord = require('discord.js');
const client = new Discord.Client();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});


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

//Private token is saved on env variables. On local, is found on .env file. Also uploaded to heroku cloud.
client.login(process.env.TOKEN);