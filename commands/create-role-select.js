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
                    value: ':zero: - Dota 2\n:one: - Overwatch\n:two: - Among Us\n:three: - GMod\n:four: - HoI',
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
        });

    },
};