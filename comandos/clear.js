const Discord = require('discord.js');

module.exports = (client, message, args) => { 
  
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  
if(!member) {
  member = message.member
}
  
   //   const error2 = new Discord.MessageEmbed()
 // .addField('You may use', `clear`)
//  .setDescription("`ERROR` You dont have require ADMINISTRATOR permissions")
//        .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
 // .setColor('RED')
      
      const yes = new Discord.MessageEmbed()
  .setDescription("Name restablished")
        .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  .setColor('GREEN')
  
//if(member && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(error2);
 
message.member.setNickname(member.user.username);
message.channel.send(yes);
  
  }