module.exports = {
    name: 'tapir',
    description: 'sends a random tapir image',
    execute(message) {
    	const tapirlist = require("../images/tapirlist.json").tapirlist;
		var highbnd = tapirlist.length - 1;		
		var number = Math.floor(Math.random() * (highbnd + 1));
		message.channel.send({files: [{attachment: tapirlist[number], name: 'tapir.jpg' }] });
		console.log('tapir image sent to ' + message.channel.name + ' for ' + message.author.username);
    },
};