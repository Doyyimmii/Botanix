const { getGuildConfig, updateGuildConfig } = require("../../utils/database");
const { errorEmbed, warnEmbed } = require("../../utils/embed")
const { isMod } = require("../../utils/permissions")

module.exports = {
    name: 'warn',
    description: 'Warn a member',
    execute(message, args) {
        if (!isMod(message.member))
            return message.channel.send({ embeds: [errorEmbed('You do not have permission to warn members')], ephemeral: true });

        const user = message.mentions.users.first();
        if (!user) return message.channel.send({ embeds: [errorEmbed('Please mention a user')], ephemeral: true });

        const reason = args.slice(1).join(' ') || 'No reason provided';

        const config = getGuildConfig(message.guild.id);
        if (!config.warns[user.id]) config.warns[user.id] = [];

        config.warns[user.id].push({
            reason,
            moderator: message.author.id,
            date: Date.now()
        });

        updateGuildConfig(message.guild.id, config);

        message.channel.send({
            embeds: [warnEmbed(`${user.tag} has been warned. \nreason: ${reason}`)]
        });
    }
}