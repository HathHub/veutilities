const Discord = require("discord.js");

module.exports = async(client, message, args) => {
let memes = ['discord.gift/T5qJKStxEx9c6mg7yeQ4mt8w','discord.gift/T5qJKStxEx9c6mg7yeQ4mt8w','discord.gift/T5qJKStxEx9c6mg7yeQ4mt8w','discord.gift/T5qJKStxEx9c6mg7yeQ4mt8w','discord.gift/T5qJKStxEx9c6mg7yeQ4mt8w'];//Crea una variable con todo lo que quieras, url de imágenes, nombres, etc. 

let selector = memes[Math.floor(memes.length * Math.random())];//Acá creamos un selector random de la variable memes.

message.channel.send(selector);//Envía lo que tiene la variable selector.

  }