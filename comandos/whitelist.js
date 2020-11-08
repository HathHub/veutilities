  const Discord = require('discord.js');
module.exports = async(client, message, args) => { 
  
  const admin = new Discord.MessageEmbed()
  .setDescription("`ERROR` You dont have required ADMINISTRATOR permissions")
  .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  .setColor('RED')
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(admin)

if(!args[0]){

    const error1 = new Discord.MessageEmbed()
  .addField('Correct usage', `whitelist <on | off | add | remove> [player]`)
  .setDescription("`ERROR` Please specify what you want to do")
  .setColor('RED')
  
  message.channel.send(error1)
  
}else{
  if(args[0].toLowerCase() == "add"){
   
    let consola = message.guild.channels.cache.get("730060032514719874");
  let jugador = args[1];
    
    consola.send(`whitelist add ${jugador}`).then(async() => {
 

    
let espera = await message.channel.send("Please wait...")

  async function probarC() {
    let msg = consola.lastMessage.content;
    if(msg.includes("Player is already whitelisted")) return espera.edit("Player is already whitelisted");
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(admin)
    
        const admin = new Discord.MessageEmbed()
  .setDescription("`ERROR` You dont have required ADMINISTRATOR permissions")
  .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  .setColor('RED')
    
    
    espera.edit(`The player ${jugador} has been whitelisted`)
      
  }
  setTimeout(probarC, 5000);
  
   
  })
    
  }else if(args[0].toLowerCase() == "remove"){

      let consola = message.guild.channels.cache.get("730060032514719874");
  let jugador = args[1];
    
    consola.send(`whitelist remove ${jugador}`).then(async() => {
 

    
let espera = await message.channel.send("Please wait...")

  async function probarC() {
    let msg = consola.lastMessage.content;
    if(msg.includes("Player is not whitelisted")) return espera.edit("Player is not whitelisted");
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(admin)
    
        const admin = new Discord.MessageEmbed()
  .setDescription("`ERROR` You dont have require ADMINISTRATOR permissions")
  .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  .setColor('RED')
    
    espera.edit(`The player ${jugador} has been removed from whitelist`)
      
  }
  setTimeout(probarC, 5000);
  
   
  })  
    
  }else if(args[0].toLowerCase() == "on"){

    
    
      let consola = message.guild.channels.cache.get("730060032514719874");
  let jugador = args.join(" ");
    
    consola.send(`whitelist on`).then(async() => {
 

    
let espera = await message.channel.send("Please wait...")

  async function probarC() {
    let msg = consola.lastMessage.content;
    if(msg.includes("Whitelist is already turned on")) return espera.edit("Whitelist is already turned on");
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(admin)
    
        const admin = new Discord.MessageEmbed()
  .setDescription("`ERROR` You dont have require ADMINISTRATOR permissions")
  .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  .setColor('RED')
    
    espera.edit(`The server has been whitelisted`)
      
  }
  setTimeout(probarC, 5000);
  
  })  
    
  }else if(args[0].toLowerCase() == "off"){

      let consola = message.guild.channels.cache.get("730060032514719874");
  let jugador = args.join(" ");
    
    consola.send(`whitelist off`).then(async() => {
 

    
let espera = await message.channel.send("Please wait...")

  async function probarC() {
    let msg = consola.lastMessage.content;
    if(msg.includes("Whitelist is already turned off")) return espera.edit("Whitelist is already turned off");
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(admin)
    
        const admin = new Discord.MessageEmbed()
  .setDescription("`ERROR` You dont have require ADMINISTRATOR permissions")
  .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  .setColor('RED')
    
    espera.edit(`The server has been unwhitelisted`)
      
  }
  setTimeout(probarC, 5000);
  
  })  
    
}
}
}