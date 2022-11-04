const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'create-role-select',
    description: 'create role select',
    execute(message) {

        const roleEmbed = new MessageEmbed()
        .setColor(0x0099ff)
        .setTitle("Roles")
        .setDescription("React for Roles")
        .addFields(
            {name: 'Role',
            value: ':zero: - Dota 2\n:one: - Overwatch\n:two: - GMod\n:three: - HoI\n:four: - Tabletop\n:five: - Party Games\n:six: - Strategy',
            inline: true}
        );

        message.channel.send({ embed: roleEmbed }).then(embedMessage => {
            embedMessage.react('0⃣');
            embedMessage.react('1⃣')
            embedMessage.react('2⃣')
            embedMessage.react('3⃣')
            embedMessage.react('4⃣')
            embedMessage.react('5⃣')
            embedMessage.react('6⃣')
        });

        const colorEmbed = new MessageEmbed()
        .setColor(0x0099ff)
        .setTitle("Colours")
        .setDescription("React for a Colour")
        .addFields(
            {
                name: 'Colour',
                value: ':heart: - Red\n:orange_heart: - Orange\n:yellow_heart: - Yellow\n:green_heart: - Green\n:blue_heart: - Blue\n:purple_heart: - Purple\n:brown_heart: - Brown\n:heartpulse: - Pink',
                inline: true,
            },
        );

        message.channel.send({ embed: colorEmbed }).then(colorMessage => {
            colorMessage.react('❤️');
            colorMessage.react('🧡')
            colorMessage.react('💛')
            colorMessage.react('💚')
            colorMessage.react('💙')
            colorMessage.react('💜')
            colorMessage.react('🤎')
            colorMessage.react('💗')
        });
    },
};