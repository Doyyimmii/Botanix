const { infoEmbed } = require("../utils/embed");

module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        const role = member.guild.roles.cache.get(process.env.AUTO_ROLE_ID);
        if (role) member.roles.add(role);

        const channel = member.guild.systemChannel;
        if (channel) channel.send({ embeds: [infoEmbed(`Welcome <@${member.id}> to the server! You have been gicen the role automatically`)] });
    },
};