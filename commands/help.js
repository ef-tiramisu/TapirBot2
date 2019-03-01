module.exports = {
    name: 'help',
    description: 'Lists all commands',
    execute(message) {
        message.channel.send('`!tapirfact`  `!tapir`  `!copypasta`');
		console.log('help sent to ' + message.channel.name + ' for ' + message.author.username);
    },
};