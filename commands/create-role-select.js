module.exports = {
    name: 'create-role-select',
    description: 'create role select',
    execute(message) {
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Roles',

            description: 'React for Roles',
            fields: [
                {
                    name: 'Role',
                    value: ':zero: - Dota 2\n:one: - Overwatch\n:two: - GMod\n:three: - HoI\n:four: - Tabletop\n:five: - Party Games\n:six: - Strategy',
                    inline: true,
                },
            ],
        };
        message.channel.send({ embed: exampleEmbed }).then(embedMessage => {
            embedMessage.react('0⃣');
            embedMessage.react('1⃣')
            embedMessage.react('2⃣')
            embedMessage.react('3⃣')
            embedMessage.react('4⃣')
            embedMessage.react('5⃣')
            embedMessage.react('6⃣')
        });

    },
    execute(message) {
        const colorEmbed = {
            color: 0x0099ff,
            title: 'Roles',

            description: 'React for Roles',
            fields: [
                {
                    name: 'Colour',
                    value: ':heart: - Red\n:orange_heart: - Orange\n:yellow_heart: - Yellow\n:green_heart: - Green\n:blue_heart: - Blue\n:purple_heart: - Purple\n:brown_heart: - Brown\n:heartpulse: - Pink',
                    inline: true,
                },
            ],
        };
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