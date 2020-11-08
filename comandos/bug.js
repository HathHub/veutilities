const Discord = require("discord.js");
const config = require("../config.js");
const used = new Map();
const Duration = require("humanize-duration");
module.exports = async (client, message, args) => {
  const cooldown = used.get(message.author.id);

  if (cooldown) {
    //aqui editamos segun lo queramos [h = hours, m = minutes, s = seconds]
    const remaining = Duration(cooldown - Date.now(), {
      units: ["h", "m", "s"],
      language: "en",
      conjunction: " y ",
      serialComma: false,
      round: true
    });
    //propiedades de como queremos que se envié

    const embed = new Discord.MessageEmbed()
      .setDescription("`ERROR` You can only do this command once per hour")
      .addField("Correct usage", `bug <Description> [image]`)
      .setFooter(
        `Executed by: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true, format: "png" })
      )
      .setColor("RED");

    return message.channel.send({ embed }).then(async msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000);
    });
  } else {
    //aquí editamos según el tiempo que necesitemos
    used.set(message.author.id, Date.now() + 1000 * 60 * 60);
    //hora que se envió + milisegundos * segundos * minutos * horas
    //ejemplo de 3 minutos | Date.now() + 1000 * 60 * 3
  }

  message.delete({ timeout: 100 });
  let creador = client.users.cache.get(
    "696481341566615664",
    "618920683618959381"
  );
  let bug = message.content
    .split(" ")
    .slice(1)
    .join(" ");

  const error = new Discord.MessageEmbed()
    .setDescription("`ERROR` Please write your bug.")
    .setFooter(
      `Executed by: ${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true, format: "png" })
    )
    .setColor("RED");

  if (!bug) return message.channel.send({ embed: error });
  const embed = new Discord.MessageEmbed()
    .setTitle(`Recibiste un reporte!`)
    .setDescription(
      `**Aporte:** ${bug}\n**Member:** ${message.author.tag}\n**ID:** ${message.author.id}`
    )
    .setColor(config.color)
    .setFooter(`Server: ${message.guild}`, message.guild.iconURL())
    .setThumbnail(
      message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
    );
  creador.send({ embed: embed });
  const res = new Discord.MessageEmbed()
    .setTitle(`Your bug has been sent`)
    .setColor(config.color)
    .setFooter(`Server ${message.guild}`, message.guild.iconURL())
    .setThumbnail(
      message.author.avatarURL({ dynamic: false, format: "png", size: 1024 })
    );
  return message.channel.send({ embed: res });
};
