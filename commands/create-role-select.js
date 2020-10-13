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
                    value: 'Dota 2\nOverwatch\nAmong Us\nGMod\nHoI\nMinecraft',
                    inline: true,
                },
                {
                    name: 'Reaction',
                    value: ':zero:\n:one:\n:two\n:three:\n:four:\n:five',
                    inline: true,
                },
            ],
            timestamp: new Date(),
        };
        message.channel.send({ embed: exampleEmbed });
    },
};