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
        message.channel.send({ embed: exampleEmbed });
        message.channel.lastMessage.react(emoji => emoji.name === "zero")
        message.channel.lastMessage.react(emoji => emoji.name === "one")
        message.channel.lastMessage.react(emoji => emoji.name === "two")
        message.channel.lastMessage.react(emoji => emoji.name === "three")
        message.channel.lastMessage.react(emoji => emoji.name === "four")

    },
};