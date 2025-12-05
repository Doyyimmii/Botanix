const { warnEmbed } = require('../utils/embed');

module.exports = {
    name: 'guildMemberRemove',
    execute(member) {
        const logChannel = member.guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
        if (!logChannel) return;

        logChannel.send({
            embeds: [
                warnEmbed(`📤 **${member.user.tag}** left the server.`)
            ]
        });
    }
};
