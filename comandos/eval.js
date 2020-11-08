const Discord = require('discord.js');

module.exports = (client, message, args) => { 
  
      const error = new Discord.MessageEmbed()
  .setDescription("`ERROR` This command is only for developers")
  .setFooter(`Executed by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
  .setColor('RED')
  
  if (!["696481341566615664"].includes(message.author.id)) return message.channel.send(error);

//Ya agregadas las id, si el autor del comando no corresponde a las id's que pusiste retornara.

let limit = 1950; //agregar un limite
    try {
      let code = args.join(" "); //Definimios el contenido del mensaje
      let evalued = eval(code); //evaluara code que se definio arriba
      if (typeof evalued !== "string")
        evalued = require("util").inspect(evalued);
      let txt = "" + evalued;

//un if

      if (txt.length > limit) {

//Creamos un RichEmbed v11 o MessageEmbed para v12

        const embed = new Discord.RichEmbed()
        .setAuthor("Evaluation succesful!", client.user.displayAvatarURL)
        .addField("Entry", `\`\`\`js\n${args.join(" ")}\n\`\`\``)
        .addField("Exit", `\`\`\`js\n ${txt.slice(0, limit)}\n\`\`\``) //Y el resultado de la evaluacion
        .setColor("GREEN")
        .setFooter("Executed by: "+message.author.tag)
        message.channel.send(embed);

//Mandamos el embed
      } else  {



//Creamos un RichEmbed v11 o MessageEmbed para v12
        const embed = new Discord.MessageEmbed()
        .setAuthor("Evaluation succesful!", client.user.displayAvatarURL)
        .addField("Entry", `\`\`\`js\n${args.join(" ")}\n\`\`\``) //Se muestra lo que pediste a evaluar
        .addField("Exit", `\`\`\`js\n ${txt}\n\`\`\``)  //Y el resultado de la evaluacion
        .setColor("GREEN")
        .setFooter("Executed by: "+message.author.tag)
        message.channel.send(embed);
}
//Mandamos el embed
    } catch (err) {
//Si hubo un error retorna a esto:
//Creamos un RichEmbed v11 o MessageEmbed para v12
      const embed = new Discord.MessageEmbed()
      .setAuthor("Failure in the evaluation", client.user.displayAvatarURL)
      .addField("Entry", `\`\`\`js\n${args.join(" ")}\n\`\`\``) //Se muestra lo que pediste a evaluar
      .addField("Exit", `\`\`\`js\n${err}\n\`\`\``) //Y el error que tuvo tu evaluacion asi para poder arreglarlo
      .setColor("RED")
      .setFooter("Executed by: "+message.author.tag)
      message.channel.send(embed);
//Mandamos el embed
  }
  }
  
  
