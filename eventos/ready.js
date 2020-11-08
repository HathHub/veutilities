const Discord = require("discord.js");
const timerManager = require("../Utils/TimersManager.js");
//Esta función se activara cuando el evento haya iniciado:
module.exports = (client, member, message) => {
  client.timers = new timerManager(client);

  client.snipes = new Map();

setInterval(function() {

    var estados = [`!help | Im in ${client.guilds.cache.size} VE related servers.`, `Use !bug to make us know if you find one,`, `!suggest to lets us know how to improve.`]

    let estado = estados[Math.floor(estados.length * Math.random())];

    client.user.setPresence({
      status: "online",
      activity: {
        name: estado,
        type: "WATCHING",
      }
    })


  }, 60000);
  
  
  client.timers.check(); //cada vez que el bot inicie, reinicia el check pero siempre con el tiempo actualizado


};
