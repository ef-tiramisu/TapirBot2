const { MessageEmbedImage } = require("discord.js");

module.exports = {
    name: 'create-select',
    description: 'Lists all commands',
    execute(message) {
        const Embed = new Discord.MessageEmbed().setTitle('Some title');        
        message.channel.send(Embed)
    },
};