const { getGuildConfig } = require("../utils/database");
const { errorEmbed } = require("../utils/embed");

const spamMap = new Map();

module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.author.bot) return;

        const config = getGuildConfig(message.guild.id);

        // Anti-Link System
        if (config.antiLink && /(https?:\/\/[^\s]+)/g.test(message.content)) {
            message.delete().catch(() => {});
            return message.channel.send({ embeds: [errorEmbed('Links are not allowed in the sever')] });
        }

        // Anti-Invite System
        if (config.antiInvite && /(discord\.gg|discord\.com\/invite)/i.test(message.content)) {
            message.delete().catch(() => {});
            return message.channel.send({ embeds: [errorEmbed('Discord stop spamming')] });
        }

        const lastMsg = spamMap.get(message.author.id);
        const now = Date.now;

        if (lastMsg && now - lastMsg < 1500) { 
            messsage.delete().catch(() => {});
            message.channel.send({ embeds: [errorEmbed('Please do not spam!')] }).then(msg => setTimeout(() => msg.delete(), 3000));
        }
        
        spamMap.set(message.author.id, now);
    },
};