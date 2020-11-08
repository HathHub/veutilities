const { MessageEmbed } = require("discord.js");
const { crearDB } = require("megadb");
const times = new crearDB("times");

module.exports = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(
            "> You do not have sufficient permissions to remove ban."
          )
      )
      .then(m => m.delete({ timeout: 10000 }));

  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.channel
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(
            "> I do not have sufficient permissions to remove bans"
          )
      )
      .then(m => m.delete({ timeout: 10000 }));

  let ban = await message.guild.fetchBans();
  let banMember =
    (await ban.get(args[0])) ||
    ban.find(ban => ban.user.username == args.slice(0).join(" ")) ||
    ban.find(ban => ban.user.tag == args.slice(0).join(" "));

  if (!banMember)
    return message.channel
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription("> User is not banned from this server")
      )
      .then(m => m.delete({ timeout: 10000 }));

  try {
    await message.guild.members.unban(banMember.user);
    message.channel.send(
      `\`${banMember.user.tag}\` it was successfully unban!`
    );
    
    if (await times.has(`${message.guild.id}.ban.${banMember.user.id}`))
      times.delete(`${message.guild.id}.ban.${banMember.user.id}`);
  } catch (err) {
    message.channel.send(
      `An error occurred removing the ban from the user\nError: ${err}`
    );
  }
};
