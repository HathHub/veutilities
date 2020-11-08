//Esta función se activara por cada mensaje enviado en un canal por el usuario:
const fs = require("fs");
//const db = JSON.parse(fs.readFileSync("./db.json", "utf8"));
let config = require("../config.js");
module.exports = async (client, message) => {
  
  if (message.author) {
    //si el mensaje es el autor
    if (client.afk.get(message.author.id)) {
      client.afk.delete(message.author.id),
        message.channel.send(
          `${message.author} Welcome back I removed your AFK`
        );
      //si el autor esta en el afk, lo elimina
    }
    //restaura a su nombre
  }

  if (message.author.bot) return;
  if (message.channel.type === "dm")
    return message.channel.send(
      `No respondo por privado, para usar mis comandos debes hablarme a privado`
    );

  if (message.mentions.users.first()) {
    //si hubo una mencion
    let u = client.afk.get(message.mentions.users.first().id); //obtienes al mencionado del afk
    if (u) {
      message.channel.send("This user is AFK cause: " + u.reason); //manda mensaje
    }
  }

  let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`); //Este es el RegExp que utilizaremos

  if (message.content.match(RegMention)) {
    //Creamos la condicional
    message.channel.send("Hey you! if you need any assistance use `!help`");
  }

  if (!message.content.startsWith(client.config.prefix)) return;
  // Definiendo los argumentos y comandos.
  const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Manejando los eventos.
  let cooldown = new Set();
  let cmd = client.comandos.get(command); // Obtiene el comando de la colección client.commandos
  if (!cmd) return; // Si no hay comandos no ejecute nada.

  // Ejecuta el comando enviando el client, el mensaje y los argumentos.
  cmd(client, message, args);
};
