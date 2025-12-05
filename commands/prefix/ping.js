const { sucessEmbed } = require('../../utils/embed');

module.exports = {
    name: 'ping',
    description: 'Check the bot latency',
    execute(message, args, client) {
        const embed = sucessEmbed(`Pong! 🏓 Latency ${client.ws.ping}ms`);
        message.channel.send({ embeds: [embed] });
    },
};