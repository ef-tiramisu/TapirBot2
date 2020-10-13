const { MessageEmbedImage } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
    name: 'create-role-select',
    description: 'create role select',
    execute(message) {
        const Embed = new Discord.MessageEmbed().setTitle('Some title');
        message.channel.send(Embed)
    },
};