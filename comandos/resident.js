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
  
  consola.send(`resident ${Cuenta}`).then(async() => {
  
let espera = await message.channel.send("Please wait...")


  async function probarC() {
    let msg = consola.lastMessage.content;
    if(msg.includes("is not registered")) return espera.edit("I can't find the player. Try it again.");

      let today_ = msg.split("[")
      let today = today_[1].split("]")[0]
      let toDAY = `[${today}] `
      let townInfo_ = msg.replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "")
      let townInfo__ = townInfo_.split("\n")[0]
      let residentInfo = townInfo_.replace(townInfo__, "")
      
      let residentEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`**Info about the resident \`${Cuenta}\`**`)
      .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
      .addField("**Registered:**", residentInfo.split("Registered:")[1].split("|")[0], true)
      .addField("**Last Online:**", residentInfo.split("Last Online:")[1].split("\n")[0], true)
      .addField("**Owner of:**", residentInfo.split("Owner of")[1].split("\n")[0], true)
      .addField("**Town:**", residentInfo.split("Town:")[1].split("\n")[0], true)
      .addField("**Perm (Build):**", residentInfo.split("Perm: Build = f---")[1].split("= f---")[0], true)
      .addField("**Perm (Switch):**", residentInfo.split("Perm: Switch = f---")[1].split("= f---")[0], true)
      .addField("**PVP:**", residentInfo.split("PVP:")[1].split(" Explosions:")[0], true)
      .addField("**Explosions:**", residentInfo.split("Explosions:")[1].split(" Firespread:")[0], true)
      .addField("**Firespread:**", residentInfo.split("Firespread:")[1].split(" Mob Spawns:")[0], true)
      .addField("**Mob Spawns:**", residentInfo.split("Mob Spawns:")[1].split("\n")[0], true)
      .addField("**Bank:**", residentInfo.split("Bank:")[1].split("\n")[0],true)
      
      espera.edit("", {embed: residentEmbed});
    
  
    
  }
  setTimeout(probarC, 3000);

})
  
}