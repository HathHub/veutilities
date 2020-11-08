const { MessageEmbed } = require("discord.js");
const { crearDB } = require("megadb");
const times = new crearDB("times");

module.exports = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "You do not have sufficient permissions to remove mute."
    );

  if (!message.guild.me.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "I don't have enough permissions to remove mute."
    );

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

  let rolMute = message.guild.roles.cache.find(
    x => x.name.toLowerCase() === "mute"
  );
  if (!rolMute)
    return message.channel
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription("> There is no mute role.")
      )
      .then(m => m.delete({ timeout: 10000 }));

  if (rolMute.comparePositionTo(message.guild.me.roles.highest) > 0)
    return message.channel
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(
            "> I can't unmute this user because the role mutes higher than mine."
          )
      )
      .then(m => m.delete({ timeout: 10000 }));

  if (!member.roles.cache.has(rolMute.id))
    return message.channel
      .send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription("> This user is not currently muted")
      )
      .then(m => m.delete({ timeout: 10000 }));

  member.roles
    .remove(rolMute)
    .then(() => {
      message.channel.send(
        new MessageEmbed()
          .setColor("GREEN")
          .setDescription(
            `Mute member \`${member.user.tag}\` successfully removed!`
          )
      );
    })
    .catch(err => {
      message.channel
        .send(
          new MessageEmbed()
            .setColor("RED")
            .setDescription(
              `An error occurred while removing the mute from the user.\n\`${err.name}: ${err.message}\``
            )
        )
        .then(m => m.delete({ timeout: 15000 }));
    });
  if (await times.has(`${message.guild.id}.mute.${member.user.id}`))
    times.delete(`${message.guild.id}.mute.${member.user.id}`);
};
