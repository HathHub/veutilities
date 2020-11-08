const { parseTimeAndReason, humanizeDuration } = require("../Utils/functions");
const { MessageEmbed } = require("discord.js");
const { crearDB } = require("megadb");
const times = new crearDB("times");

module.exports = async (client, message, args) => {

  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send("You do not have permissions to ban members.");

  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.channel.send("I don't have permissions to ban members.");

  if (!args[0])
    return message.channel
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription("> *You must mention a member.*")
      )
      .then(m => m.delete({ timeout: 10000 }));

  let member =
    message.mentions.members.first() || message.guild.members.resolve(args[0]);
  if (!member)
    return message.channel
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription("> *Member not found on server.*")
      )
      .then(m => m.delete({ timeout: 10000 }));

  if ([message.author.id, client.user.id].includes(member.id))
    return message.channel
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription("> *You must mention someone else.*")
      )
      .then(m => m.delete({ timeout: 10000 }));

  if (
    member.roles.highest.comparePositionTo(message.guild.me.roles.highest) > 0
  )
    return message.channel
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(
            "> I can't ban this user because he has a higher role than mine."
          )
      )
      .then(m => m.delete({ timeout: 10000 }));

  if (!member.bannable)
    return message.channel
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription("> This user cannot be banned.")
      )
      .then(m => m.delete({ timeout: 10000 }));

  let response = parseTimeAndReason(args);

  member
    .ban({
      days: 7,
      reason: `Mod: ${message.author.tag} Reason${
        response.reason ? `: ${response.reason}` : " Not specified"
      }`
    })
    .then(() => {
      message.channel.send(
        new MessageEmbed()
          .setColor("GREEN")
          .setDescription(
            `\`\`\`\nType: Ban${response.time ? " temporary" : ""}\nMember: ${
              member.user.tag
            } - ${member.id}\nReason${
              response.reason ? `: ${response.reason}` : " Not specified"
            }\nMod: ${
              message.author.tag
            }\nDate: ${new Date().toLocaleDateString("en")}\n${
              response.time
                ? `Time: ${humanizeDuration(response.time - Date.now(), 1)}`
                : ""
            }\`\`\``
          )
      );
    })
    .catch(err => {
      message.channel
        .send(
          new MessageEmbed()
            .setColor("RED")
            .setDescription(
              `An error occurred while banning the user.\n\`${err.name}: ${err.message}\``
            )
        )
        .then(m => m.delete({ timeout: 15000 }));
    });

  if (response.time)
    await times.set(`${message.guild.id}.ban.${member.id}`, {
      time: response.time
    });
};
