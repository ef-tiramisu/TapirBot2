module.exports = {
    name: 'create-select',
    description: 'Lists all commands',
    execute(message) {
        const role_embed = new MessageEmbed()
      // Set the title of the field
        .Title('Games')
      // Set the color of the embed
        .Color(0xff0000)
      // Set the main content of the embed
        .Description('Dota 2\nOverwatch\nAmong Us\nDnD\nMinecraft\nHearts of Iron');
    // Send the embed to the same channel as the message
        message.channel.send(role_embed);
    },
};