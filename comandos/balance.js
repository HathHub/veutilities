const Discord = require('discord.js');
const {crearDB} = require("megadb");
const account = new crearDB("cuenta", "usuarios");

module.exports = async(client, message, args) => { 

if(!args.join(" ") && !account.has(message.author.id)) return message.channel.send("You need to link your account (`!link <Account Name>`), type an Account Name or mention an user with a linked account.")
let Cuenta;
if(account.has(message.author.id) && !args.join(" ")) Cuenta = await account.get(message.author.id);
if(args.join(" ")) Cuenta = args.join(" ");
if(message.mentions.users.first() && account.has(message.mentions.users.first().id)) Cuenta = await account.get(message.mentions.users.first().id);
  

let consola = message.guild.channels.cache.get("730060032514719874");
  
  consola.send(`balance ${Cuenta}`).then(async() => {
  
let espera = await message.channel.send("Please wait...")
  
  async function probarC() {
    let msg = consola.lastMessage.content;
    if(msg.includes("Error")) return espera.edit("I can't find the player. Try it again.");
    
    let balance = msg.split(" ").pop();
    
    espera.edit(`The actual balance of **${Cuenta}** is \`${balance}\``)
    
  
    
  }
  setTimeout(probarC, 5000);
  
    
  })
  
  


}