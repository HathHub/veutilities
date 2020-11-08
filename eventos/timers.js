//es un evento personalizado, no remover! By: Danny.
const Discord = require("discord.js");
module.exports = (client, times) => {
  if (times.ban) removeBan(client, times);
  if (times.mute) removeMuted(client, times);
};

async function removeBan(client, times) {
  let guild = client.guilds.resolve(times.guildId); //obtener el servidor

  if (!guild) return; //si el servidor no fue encontrado pos nada

  let form = await guild.fetchBans();
  let userBanned = form.find(ban => ban.user.id == times.userId); //buscar entre los bans la id del user
  if (!userBanned) return; //si no encontro nada retorna nada
  try {
    await guild.members.unban(userBanned.user, "TimeUp!"); //intentara removerle el ban
  } catch {}
}

async function removeMuted(client, times) {
  let guild = client.guilds.resolve(times.guildId);
  if (!guild) return; //si el bot no esta en el servidor

  let member = guild.members.resolve(times.userId);
  if (!member) return; //si el miembro no esta en el servidor

  let rolMuted = guild.roles.resolve(times.mute);
  if (!rolMuted) return; //si no existe el rol muted

  if (!member.roles.cache.has(rolMuted.id)) return; //si no tiene el rol muted

  member.roles.remove(rolMuted); //remueve el rol
}
