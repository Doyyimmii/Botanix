const { infoEmbed } = require('../utils/embed');

module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        const logChannel = member.guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
        if (!logChannel) return;

        logChannel.send({
            embeds: [
                infoEmbed(`📥 **${member.user.tag}** joined the server.`)
            ]
        });
    }
};
