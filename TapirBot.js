const Discord = require("discord.js");
const fs = require('fs');
const { prefix, token, role_channel } = require('./config.json');
const reactionEmotes = require('./emotes.json')


const client = new Discord.Client();
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


//sets game on bot startup
client.on("ready", () => {
	client.user.setActivity('with my snout', { type: 'Playing' });
	try {
	let roleChannel = client.guilds.cache.get(reactionEmotes.serverID).channels.cache.get(reactionEmotes.roleChannelID);
	roleChannel.messages.fetch(reactionEmotes.roleMsgID1);
	}
	catch (error) {
		console.error(error);
	}
	console.log('ready');
});


//command handling
client.on('message', message =>{
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

		try {
			client.commands.get(command).execute(message, args);
			}
		catch (error) {
   			console.error(error);
		}

});

var changeRole = function(emote,user,msg,hasRole){
	roleID = "";
	try {
		switch(emote){
			case reactionEmotes.dotaEmote:
				roleID = reactionEmotes.dotaRole;
			break;
			case reactionEmotes.overwatchEmote:
				roleID = reactionEmotes.overwatchRole;
			break;
			case reactionEmotes.gmodEmote:
				roleID = reactionEmotes.gmodRole;
			break;
			case reactionEmotes.hoiEmote:
				roleID = reactionEmotes.hoihRole;
			break;
			case reactionEmotes.tabletopEmote:
				roleID = reactionEmotes.tabletopRole;
			break;
			case reactionEmotes.partyEmote:
				roleID = reactionEmotes.partyRole;
			break;
			case reactionEmotes.strategyEmote:
				roleID = reactionEmotes.strategyRole;
			break;
			default:
				console.log("error")
			return;
		}
		if (!hasRole) {
			msg.guild.member(user.id).roles.add(roleID);
		} else {
			msg.guild.member(user.id).roles.remove(roleID);
		}
	}
	catch (error) {
		console.error(error);
	}
}

client.on('messageReactionAdd', (reaction, user) =>{
	if (user.bot===true) return;
	let msg = reaction.message;
	let emote = reaction.emoji;
	if (msg.id == reactionEmotes.roleMsgID1) {
		changeRole(emote.name,user,msg,false)
	}
});

client.on('messageReactionRemove', (reaction, user) =>{
	if (user.bot===true) return;
	let msg = reaction.message;
	let emote = reaction.emoji;
	if (msg.id == reactionEmotes.roleMsgID1) {
		changeRole(emote.name,user,msg,true)
	}
});

client.login(token);
