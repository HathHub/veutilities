const Discord = require('discord.js') 
module.exports = (client, args, message) => {
  
let id = args[1] 
let mensaje = args[2] 
let dm = client.users.cache.get(id)



dm.send(mensaje)


}

