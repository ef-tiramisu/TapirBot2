module.exports = {
    name: 'tapirfact',
    description: 'sends a tapirfact',
    execute(message) {
    	const tapirfacts = require("../content/tapirfacts.json").tapirfacts;
		var highbnd = tapirfacts.length - 1;		
		var number = Math.floor(Math.random() * (highbnd + 1));
		message.channel.send(tapirfacts[number]);
		console.log('tapirfact sent to ' + message.channel.name + ' for ' + message.author.username);
    },
};