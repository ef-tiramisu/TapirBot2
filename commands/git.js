module.exports = {
    name: 'git',
    description: 'Lists all commands',
    execute(message) {
        message.channel.send('https://github.com/Tira-misuu/TapirBot2');
		console.log('git link sent to ' + message.channel.name + ' for ' + message.author.username);
    },
};