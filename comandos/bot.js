const Discord = require("discord.js");
module.exports = async (client, message, args) => {
  const admin = new Discord.MessageEmbed()
    .setDescription("`ERROR` You dont have require ADMINISTRATOR permissions")
    .setFooter(
      `Executed by: ${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true, format: "png" })
    )
    .setColor("RED");
  if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(admin);

  if (!args[0]) {
    const error1 = new Discord.MessageEmbed()
      .addField(
        "Correct usage",
        `bot <avatar | reload | prefix | blacklist> [member | url | prefix]`
      )
      .setDescription("`ERROR` Please specify what you want to do")
      .setColor("RED");

    message.channel.send(error1);
  } else {
    if (args[0].toLowerCase() == "avatar") {
      let avatarurl = args.join(" ");
      if (!avatarurl) return message.reply("You need to send a image url too"); //aqui te dice por si no pusiste una imagen url

      client.user.setAvatar(avatarurl); //ahi estaria cambiando el avatar

      message.channel.send("Avatar changed" + avatarurl); //ahi dice que exitosamente se agrego el nuevo avatar

      //Si tengo mas apoyo subire un comando que de nitro(unchecked)
    } else if (args[0].toLowerCase() == "prefix") {
      const db = require("megadb"); //Modulo / Database
      const prefix = new db.crearDB("Prefixes"); //Carpeta de los Prefix

      const admin = new Discord.MessageEmbed()
        .setDescription(
          "`ERROR` You dont have require ADMINISTRATOR permissions"
        )
        .setFooter(
          `Executed by: ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true, format: "png" })
        )
        .setColor("RED");

      if (!message.member.hasPermissions("MANAGE_GUILD")) {
        message.channel.send(admin);
      } //Verificamos si tiene permisos y Si no retorna el mensaje.

      if (!args[0]) {
        message.channel.send("You need to type a new prefix"); //Si no Escribe nada.
      }

      message.channel.send(`Prefijo cambiado a ${args.join(" ")}`);
      prefix.establecer(message.guild.id, args.join(" ")); //Guardamos la id del Server y Prefix
    } else if (args[0].toLowerCase() == "on") {
    } else if (args[0].toLowerCase() == "off") {
    }
  }
};
