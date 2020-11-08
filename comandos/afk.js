const Discord = require('discord.js');

module.exports = (client, message, args) => { 
  
let reason = args.join(" ");

if(!reason) return message.channel.send("Debes de colocar la razon");

if(!client.afk.get(message.author.id)){
  client.afk.set(message.author.id,{
    reason: reason
  });
  
}
message.channel.send("Now you are AFK with reason: "+ reason);
   
}


           
