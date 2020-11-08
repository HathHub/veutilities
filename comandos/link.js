const Discord = require("discord.js");
const {crearDB} = require("megadb");
const account = new crearDB("cuenta", "usuarios");
const linkSRV = require ("srv-util")

module.exports = async(client, message, args) => {
  
  if(account.has(message.author.id)) return message.channel.send(`You are already linked, with your account \`${await account.get(message.author.id)}\``)
  
  let nombrec = args.join(" ")
  if(!nombrec) return message.channel.send("You need to send your Account Name.");
 
  
  
  
  
  
  
  // DOESNT WORK ANYMORE
//  let consola = message.guild.channels.cache.get("730060032514719874");
//  consola.send(`balance ${nombrec}`).then(async() => {
 let espera = await message.channel.send("Please wait...")
 // async function probarC() {
   // let msg = consola.lastMessage.content;
   // if(msg.includes("Error")) return espera.edit("I can't find the player. Try again.");
    
  await account.establecer(message.author.id, nombrec);
  espera.edit(`Your account \`${nombrec}\` was linked!`)
    
  }
