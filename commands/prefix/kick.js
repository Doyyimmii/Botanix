const { errorEmbed, sucessEmbed } = require("../../utils/embed")
const { isMod } = require("../../utils/permissions")

module.exports = {
    name: 'kick',
    description: 'Kick a member from the server',
    execute(message, args, client) {
        if (!isMod(message.member))
            return message.channel.send({ embeds: [errorEmbed('You do not have permission to kick members!')] });

        const logChannel = message.guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
        if (logChannel) {
            logChannel.send({
                embeds: [
                    warnEmbed(
                        `🦵 **Kick Executed**\n` +
                        `**User:** ${member.user.tag}\n` +
                        `**Moderator:** ${message.author.tag}\n` +
                        `**Reason:** ${reason}`
                    )
                ]
            });
        }

        const member = message.mentions.members.first();
        if (!member) return message.channel.send({ embeds: [errorEmbed('Please mention a member to kick!')] });

        const reason = args.slice(1).join(' ') || 'No reason provided';
        member.kick(reason)
            .then(() => message.channel.send({ embeds: [sucessEmbed(`${member.user.tag} has been kicked. Reason: ${reason}`)] }))
            .catch(err => message.channel.send({ embeds: [errorEmbed('I cannot kick this member.')] }));
    },
};