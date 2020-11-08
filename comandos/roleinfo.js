 const Discord = require("discord.js") //Definimos Discord.

 module.exports = async(client, message, args) => { 
 
const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

//Se define "role" y obtenemos la info del primero rol mencionado, o id puesta.

 if(!role) return message.channel.send("<a:cloading:713914246601113693> | ¡Type a role please!")

//Si no menciono un rol, o no existe retorna.


//Definimos el embed en el que pondremos la info
 const rol = new Discord.MessageEmbed()
      .setDescription("Role info.")
      .addField("Name:", `- ${role.name}`) //Nombre del rol
      .addField("ID:", `- ${role.id}`) //Id del rol
      .addField("Members with that role:", `- ${role.members.size}`) //Aqui calculamos cuantos miembros tienen este rol
      .addField("Position:", `- ${role.rawPosition}`) //Su pocision en cuanto los otros roles
      .addField("HexColor:", `- ${role.hexColor}`) //Su hexColor 
      .addField("¿Mentionable?:", `- ${role.mentionable}`) //Devolvera true o false, segun si se puede mencionar este rol o no
      .addField("¿Separated?:", `- ${role.hoist}`) //Devolvera true o false, segun si se esta separado(visible ante los roles) o no
      .addField("¿Gestionated by system?:", `- ${role.managed}`) //Devolvera true o false, segun si lo creo el sistema(El propio discord)
     
      
      
      message.channel.send(rol)


//Enviamos. PDST: No hagan c&p :c que me pongo sad.
   
}   