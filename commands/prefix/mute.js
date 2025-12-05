const { errorEmbed, sucessEmbed } = require("../../utils/embed")
const { isMod } = require("../../utils/permissions")

module.exports = {
    name: 'mute',
    description: 'Mute a member',
    async execute(message, args) {
        if (!isMod(message.member))
            return message.channel.send({ embeds: [errorEmbed('You do not have permission.')], ephemeral: true });
        
        const logChannel = message.guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
        if (logChannel) {
            logChannel.send({
                embeds: [
                    warnEmbed(
                        `🤐 **User Muted**\n` +
                        `**User:** ${member.user.tag}\n` +
                        `**Moderator:** ${message.author.tag}\n` +
                        `**Reason:** ${reason}`
                    )
                ]
            });
        }
        
        const member = message.mentions.members.first();
        if (!member) return message.channel.send({ embeds: [errorEmbed('Mention a member')], ephemeral: true });

        const mutedRole = message.guild.roles.cache.find(r => r.name === 'Muted');
        const reason = args.slice(1).join(' ') || 'No reason provided';

        if (!mutedRole)
            return message.channel.send({ embeds: [errorEmbed('Role "Muted" does not exist.')] });

        member.roles.add(mutedRole)
            .then(() => {
                message.channel.send({
                    embeds: [sucessEmbed(`${member.user.tag} has been muted. Reason: ${reason}`)],
                    ephemeral: true
                });
            })
            .catch(() => {
                message.channel.send({ embeds: [errorEmbed('I cannot mute that member.')], ephemeral: true });
            });
    }
};