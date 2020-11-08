module.exports = (client, message, args) => {
  
  let guild = message.guild
  
   const Discord = require('discord.js');
if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
"necesitas permisos"
      );
    const embed = new Discord.MessageEmbed()
      .setTitle("raiders baneado")
      .setDescription(
        `Raiders, Spamers Baneados Correctamente`
      )
      .setColor("RANDOM")
    message.channel.send(embed);

var ids = [
"354457800019148801",
"618920683618959381",
"262766195072172033",
"750001935595077642", //PUEDES AGREGAR LAS IDS QUE QUIERAS PARA BANEAR A ESAS PERSONAS
];

    ids.forEach(id => {
      console.log(id);
      guild.members.ban(id.toString());
    });
  }