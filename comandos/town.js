const Discord = require('discord.js');

module.exports = async(client, message, args) => { 
  let town = args.join(" ");
  if(!town) return message.channel.send("Type a town's name.")
  
  let consola = message.guild.channels.cache.get("730060032514719874");
  
  consola.send(`town ${town}`).then(async() => {
    
    
  let espera = await message.channel.send("Please wait...");
    
    async function getTown() {
      let msg = consola.lastMessage.content;
      if(msg.includes("not registered") || msg.includes("Page 1 of")) return espera.edit(`The town \`${town}\` is not registered.`)
      
      /////////////////////////////////////////////////////////////////////////////////////////////
      let today_ = msg.split("[")
      let today = today_[1].split("]")[0]
      let toDAY = `[${today}] `
      let townInfo_ = msg.replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "").replace(toDAY, "")
      let townInfo__ = townInfo_.split("\n")[0]
      let townInfo = townInfo_.replace(townInfo__, "")
      /////////////////////////////////////////////////////////////////////////////////////////////
      let embedInfo = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`**Info about the \`${town}\` town.**`)
      .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
      .addField("**Founded:**", townInfo.split("Founded:")[1].split("\n")[0], true)
      .addField("**Town Size:**", townInfo.split("Town Size:")[1].split("\n")[0], true)
      .addField("**Mayor:**", townInfo.split("Mayor:")[1].split("\n")[0])
      .addField("**Explosions:**", townInfo.split("Explosions:")[1].split(" Firespread:")[0], true)
      .addField("**Firespread:**", townInfo.split("Firespread:")[1].split(" Mob Spawns:")[0], true)
      .addField("**Mob Spawns:**", townInfo.split("Mob Spawns:")[1].split("\n")[0], true)
      .addField("**Bank:**", townInfo.split("Bank:")[1].split("|")[0], true)
      .addField("**Daily Upkeep:**", townInfo.split("Daily upkeep:")[1].split("|")[0], true)
      .addField("**Tax:**", townInfo.split("Tax:")[1].split("\n")[0], true)
      .addField("**Perm (Build):**", townInfo.split("Perm: Build = r---")[1].split("= r---")[0], true)
      .addField("**Perm (Switch):**", townInfo.split("Perm: Switch = r---")[1].split("= r---")[0], true)
      .addField(`**Residents ${townInfo.split("Residents ")[1].split(":")[0]}:**`, townInfo.split("]:")[1], true)
      
      
      
      espera.edit("", {embed: embedInfo});
    }
    
    setTimeout(getTown, 5000)
    
  })
}