const Discord = require('discord.js');

    module.exports = (client, message, args) => {

            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!args[0]) return message.channel.send('Invalid argument` No mencionaste a nadie o no pusiste ID');

        let roles = message.member.roles.cache.map(roles => roles)  || "None" 
            if(!member) return message.channel.send("No se pudo encontrar al usuario.");

            var permissions = [];

            if(member.permissions.has('ADMINISTRATOR')) { 
            permissions.push('`Administrator`')
            }
            if(member.permissions.has('MANAGE_ROLES')) { 
            permissions.push('`Manage Roles`')
            }
            if(member.permissions.has('KICK_MEMBERS')) {
            permissions.push('`Kick Members`')
            }
            if(member.permissions.has('BAN_MEMBERS')) {
            permissions.push('`BAN Members`')
            }
            if(member.permissions.has('MANAGE_NICKNAMES')) {
            permissions.push('`Manage Nicknames`')
            }
            if(member.permissions.has('MANAGE_EMOJIS')) {
            permissions.push('`Manage Emojis`')
            }
            if(member.permissions.has('MANAGE_NICKNAMES')) {
            permissions.push('`Manage Nicknames`')
            }
            if(member.permissions.has('MANAGE_WEBHOOKS')) {
            permissions.push('`Manage Webhooks`')
            }
            if(member.permissions.has('MANAGE_MESSAGES')) { 
            permissions.push('`Manage Messages`')
            }
            if(member.permissions.has('MENTION_EVERYONE')) { 
            permissions.push('`Mention Everyone`')
            }
            if(member.permissions.has('MUTE_MEMBERS')) { 
            permissions.push('`Mute Members`')
            }
            if(member.permissions.has('DEAFEN_MEMBERS')) { 
            permissions.push('`Deafen Members`')
            }
            if(permissions.length == 0){
            permissions.push("None");
            
            } 
            
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(member.user.tag, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL())
            .addField('User', member.user, true)
            .addField('ID', `${member.id}`, true)
            .addField('Status', `${member.presence.status}`, true)
            .addField('Registered at', member.user.createdAt, true)
            .addField('Joined at', member.joinedAt, true)
            .addField(`Roles`, roles)
            .addField('Permissions', `${permissions.join(', ')}`)           
            message.channel.send( {embed} );
            
        }
    