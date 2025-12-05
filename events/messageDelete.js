const { warnEmbed } = require('../utils/embed');

module.exports = {
    name: 'messageDelete',
    execute(message) {
        if (!message.guild || message.author?.bot) return;

        const logChannel = message.guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
        if (!logChannel) return;

        logChannel.send({
            embeds: [
                warnEmbed(
                    `🗑️ **Message Deleted**\n` +
                    `**Author:** ${message.author.tag}\n` +
                    `**Channel:** ${message.channel}\n\n` +
                    `**Content:**\n${message.content || "_No content_"}`
                )
            ]
        });
    }
};
