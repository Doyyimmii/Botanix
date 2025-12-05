const { infoEmbed } = require("../utils/embed");

module.exports = {
    name: 'guildMemberRemove',
    execute(member) {
        const logChannel = member.guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
        if (logChannel) logChannel.send({
            embeds: [infoEmbed(`📩 **${member.user.tag}** left the server`)]
        });
    }
}