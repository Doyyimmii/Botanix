const { errorEmbed } = require("../utils/embed");

const userMessageMap = new Map();

module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.author.bot) return;

        const lastMessage = userMessageMap.get(message.author.id);
        const now = Date.now;

        if (lastMessage && now - lastMessage < 2000) { 
            messsage.delete().catch(() => {});
            message.channel.send({ embeds: [errorEmbed('Please do not spam!')] }).then(msg => setTimeout(() => msg.delete(), 3000));
        }
        
        userMessageMap.set(message.author.id, now);
    },
};