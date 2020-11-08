module.exports = async (client, message, args) => {
const Discord = require('discord.js');
  let categorias = []
  let pagina = 1
  
//PÁGINAS:
  let main = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.tag, message.author.avatarURL)
  .addField("🎰", "`GAMBLING`", true)
    .addField("🛡️", "`MODERATION`", true)
    .addField("    ⚙️", "`CONFIGURATION`", true)
    .addField("🎵", "`MUSIC`", true)
    .addField("❌", "`CLOSE`", true)
  .setFooter("Página 1/3")
  
  let music = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription("¡Bienvenido a la página 2!")
  .setFooter(`Página 2/3`);
  
  let configuration = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription("¡Bienvenido a la página 3!")
  .setFooter(`Página 3/3`);
  
    let moderation = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription("¡Bienvenido a la página 3!")
  .setFooter(`Página 3/3`);
  
    let gamble = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription("¡Bienvenido a la página 3!")
  .setFooter(`Página 3/3`);

const paginas = [
  main,
  music,
  moderation,
  configuration,
  gamble
] //LISTA DE PÁGINAS. (Aquí van los nombres de los embeds de arriba)

let msg = await message.channel.send(main)
await msg.react("🎰") //Baja hasta la primer página.
await msg.react("🛡️") //Baja 1 página.
await msg.react("❌") //Cancela el comando.
await msg.react("⚙️") //Sube 1 página.
await msg.react("🎵") //Sube hasta la última página.
  
const gamblingF = (reaction, user) => reaction.emoji.name === '🎰' && user.id === message.author.id;
const moderationF = (reaction, user) => reaction.emoji.name === '🛡️' && user.id === message.author.id;
const cancelF = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
const configurationF = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === message.author.id;
const musicF = (reaction, user) => reaction.emoji.name === '🎵' && user.id === message.author.id;
  
const atras = msg.createReactionCollector(gamblingF, {time: 120000});
const proximo = msg.createReactionCollector(moderationF, {time: 120000});
const inicio = msg.createReactionCollector(cancelF, {time: 120000});
const fin = msg.createReactionCollector(configurationF, {time: 120000});
const eliminar = msg.createReactionCollector(musicF, {time: 120000});
  
atras.on("collect", async function(r) {
  await msg.edit(paginas[gamble])
  await r.remove(message.author)
}) //Vuelve a la página de atrás.
  
proximo.on("collect", async function(r) {
if(pagina === paginas.length) return await r.remove(message.author);
  pagina++;
  await msg.edit(paginas[pagina-1])
  await r.remove(message.author)
}) //Sube una página.
  
inicio.on("collect", async function(r) {
  pagina = 2;
  await msg.edit(paginas[0])
  await r.remove(message.author)
}) //Vuelve al inicio.

fin.on("collect", async function(r) {
  pagina = categorias.length;
  await msg.edit(pagina[2]) //Cambias el valor 'pagina3' si agregas más páginas.
  await r.remove(message.author)
}) //Baja hasta la última página.
  
eliminar.on("collect", async function(r) {
  await msg.delete().catch()
}) //Borra el embed.
  
}