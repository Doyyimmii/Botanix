const { infoEmbed } = require('../utils/embed');

module.exports = {
    name: 'messageUpdate',
    execute(oldMessage, newMessage) {
        if (!newMessage.guild || oldMessage.author?.bot) return;
        if (oldMessage.content === newMessage.content) return;

        const logChannel = newMessage.guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
        if (!logChannel) return;

        logChannel.send({
            embeds: [
                infoEmbed(
                    `✏️ **Message Edited**\n` +
                    `**Author:** ${oldMessage.author.tag}\n` +
                    `**Channel:** ${oldMessage.channel}\n\n` +
                    `**Old:**\n${oldMessage.content || "_No content_"}\n\n` +
                    `**New:**\n${newMessage.content || "_No content_"}`
                )
            ]
        });
    }
};
