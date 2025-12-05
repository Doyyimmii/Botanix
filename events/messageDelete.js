const { warnEmbed } = require("../utils/embed");

module.exports = {
    name: 'messageDelete',
    execute(message) {
        const logChannel = message.guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
        if (!logChannel || message.author.bot) return;
        
        logChannel.send({
            embeds: [
                warnEmbed(`🗑 Message deleted in **#${message.channel.name}** by **${message.author.tag}**:\n\`${message.content || "No content"}\``)
            ]
        });
    }
};