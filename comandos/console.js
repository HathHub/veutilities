  const Discord = require('discord.js');
module.exports = async(client, message, args) => { 
  
  const admin = new Discord.MessageEmbed()
  .setDescription("`ERROR` You dont have required ADMINISTRATOR permissions")
  .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  .setColor('RED')
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(admin)

if(!args[0]){

    const error1 = new Discord.MessageEmbed()
  .addField('Correct usage', `ban [player] <reason>`)
  .setDescription("`ERROR` Please specify what you want to do")
  .setColor('RED')
  
  message.channel.send(error1)
  
}else{
  if(args[0].toLowerCase() == "ban"){
   
    let consola = message.guild.channels.cache.get("730060032514719874");
  let jugador = args[1];
  let razon = args[2];
    
    consola.send(`ban ${jugador} ${razon} `).then(async() => {
 

    
let espera = await message.channel.send("Please wait...")

  async function probarC() {
    let msg = consola.lastMessage.content;
    if(msg.includes("banned for:")) return espera.edit(`Player ${jugador} banned for: ${razon}`);
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(admin)
    
        const admin = new Discord.MessageEmbed()
  .setDescription("`ERROR` You dont have required ADMINISTRATOR permissions")
  .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  .setColor('RED')
    
    
    espera.edit(`The player ${jugador} has been banned for: ${razon}`)
      
  }
  setTimeout(probarC, 5000);
  
   
  })
    
  }else if(args[0].toLowerCase() == "send"){
    
  }else if(args[0].toLowerCase() == "on"){

    
    
  }else if(args[0].toLowerCase() == "off"){

 
    
}
}
}