
const { Client, Intents, Collection, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const { prefix, token, role_channel } = require('./config.json');
const reactionEmotes = require('./emotes.json')

const myIntents = new Intents(3867);

const client = new Client({ intents: [myIntents] });
client.commands = new Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


//sets game on bot startup
client.on("ready", () => {
	client.user.setActivity('with my snout', { type: 'PLAYING' });
	try {
	let roleChannel = client.guilds.cache.get(reactionEmotes.serverID).channels.cache.get(reactionEmotes.roleChannelID);
	roleChannel.messages.fetch(reactionEmotes.roleMsgID1);
	roleChannel.messages.fetch(reactionEmotes.roleMsgID2);
	}
	catch (error) {
		console.error(error);
	}
	console.log('ready');
});


//command handling
client.on('messageCreate', message =>{
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
				roleID = reactionEmotes.hoiRole;
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
			case reactionEmotes.redEmote:
				roleID = reactionEmotes.redRole;
			break;
			case reactionEmotes.orangeEmote:
				roleID = reactionEmotes.orangeRole;
			break;
			case reactionEmotes.yellowEmote:
				roleID = reactionEmotes.yellowRole;
			break;
			case reactionEmotes.greenEmote:
				roleID = reactionEmotes.greenRole;
			break;
			case reactionEmotes.blueEmote:
				roleID = reactionEmotes.blueRole;
			break;
			case reactionEmotes.purpleEmote:
				roleID = reactionEmotes.purpleRole;
			break;
			case reactionEmotes.brownEmote:
				roleID = reactionEmotes.brownRole;
			break;
			case reactionEmotes.pinkEmote:
				roleID = reactionEmotes.pinkRole;
			break;
			default:
				console.log("error")
			return;
		}
		console.log(roleID);
		let assignableRole = msg.guild.roles.cache.get(roleID);

		if (!hasRole) {
			msg.guild.members.cache.get(user.id).roles.add(assignableRole);
		} else {
			msg.guild.members.cache.get(user.id).roles.remove(assignableRole);
		}
	}
	catch (error) {
		console.error(error);
	}
}

client.on('messageReactionAdd', (messageReaction, user) =>{
	if (user.bot===true) return;

	let msg = messageReaction.message;
	let emote = messageReaction.emoji;

	if (msg.id == reactionEmotes.roleMsgID1 || msg.id == reactionEmotes.roleMsgID2) {
		changeRole(emote.name,user,msg,false)
	}
});

client.on('messageReactionRemove', (messageReaction, user) =>{
	if (user.bot===true) return;

        let msg = messageReaction.message;
        let emote = messageReaction.emoji;

	if (msg.id == reactionEmotes.roleMsgID1 || msg.id == reactionEmotes.roleMsgID2) {
		changeRole(emote.name,user,msg,true)
	}
});

client.login(token);
