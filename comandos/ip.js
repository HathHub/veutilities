const Discord = require('discord.js');

module.exports = (client, message, args) => { 
  
  const embed = new Discord.MessageEmbed()
  .setTitle("Server ip's")
  .addField('Java:       Port:None', `java.vanillasmp.net`)
  .addField('Bedrock:    Port:19133', `bedrock.vanillasmp.net`)
  .setDescription("If you want to play on Switch, Playstation or XBOX you also will be needing to use the bedrock ip")
  .setColor('#0049ff')
  .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  
  message.channel.send(embed)
  
  }