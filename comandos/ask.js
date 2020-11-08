  const Discord = require('discord.js');
module.exports = async(client, message, args) => { 
                                       
                                      

if(!args[0]){

    const error1 = new Discord.MessageEmbed()
  .addField('Correct usage', `ask [whitelist | vip | dynmap | ticket]`)
  .setDescription("`ERROR` Please specify what you want to do")
  .setColor('RED')
  
  message.channel.send(error1)
  
}else{
  if(args[0].toLowerCase() == "whitelist"){
   
  
        const whitelist = new Discord.MessageEmbed()
  .setTitle("Whitelist")
  .setDescription("Tool used for staff to respond common or frequently asked questions")
  .addField("What is it?", "A whitelist is a list of users that are `allowed to join the server`, people that are not into it would not be able to join the `server`, vips are always into it.", true) 
  .addField("When its used?", "The whitelist is used while the `server` is on `maintenance` or any other problem that needs it, if the server is not in maintenance you wont need to worry of being into the whitelist, you would be able to join as usual.", true) 
  .addField("How can I know if server is whitelisted?", "The `server maintenance` are posted in " + message.guild.channels.cache.get('729294305809793097').toString(), true) 
        .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  .setColor('BLUE')
        
        message.channel.send(whitelist)
    
  }else if(args[0].toLowerCase() == "dynmap"){
const dynmap = new Discord.MessageEmbed()
  .setTitle("Dynmap")
  .setDescription("Only web Map wich displays all Earth World and player locations")
  .addField("How to use it?", "just press " + [Here(href="")] + "and you will be redirected to the web")
  .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  .setColor('BLUE')
    
    
  }else if(args[0].toLowerCase() == "ticket"){
   const ticket = new Discord.MessageEmbed()
   .setTitle("Ticket") 
    .setDescription("Tool used for staff to respond common or frequently asked questions") 
   .addField("Need help?", "If you do, you can make a `ticket` and a `staff` will attend you to up to `20 mins`", true)
   .addField("How to make a ticket", "In order to make a ticket asking for help go to " + message.guild.channels.cache.get('759758562422423562').toString() + " and `click on the reaction` of the `main message`", true)
   .setColor('BLUE')
   message.channel.send(ticket)
             
  }else if(args[0].toLowerCase() == "vip"){

 
    
}
}
}