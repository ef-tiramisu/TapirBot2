const Discord = require("discord.js");
const fs = require('fs');
const { prefix, token, role_channel } = require('./config.json');


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
    		message.reply('there was an error trying to execute that command!');
		}

});

client.on('MessageReaction', reaction =>{
	if (!reaction.message.channel == reaction.guild.channel.find(channel.name ===  role_channel)) return;

	if (reaction.client.user.bot == true) return;
	try {
		switch(reaction.emoji) {
			case '0⃣':
			reaction.message.channel.send('test')
			var role = reaction.guild.roles.find(role => role.name === "Dota 2");
			reaction.client.user.roles.add(role)
			break;
		case y:
			break;
		default:
			break;
		}
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
	
});

//

client.login(token);
