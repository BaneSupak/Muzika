const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
 });   
    
 // THIS MUST BE THIS WAY
 client.login(process.env.MzcxNzkxMDE3Mjk4NjI0NTEz.DM9pcA.2yUslz5gBuQo9Ac6h9pTjY74Ols);
