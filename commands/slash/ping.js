const { SlashCommandBuilder } = require('discord.js');
const { sucessEmbed } = require('../../utils/embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check the bot latency'),
    async execute(interaction, client) {
        const embed = sucessEmbed(`Pong! 🏓 Latency: ${client.ws.ping}ms`);
        await interaction.reply({ embeds: [embed ] });
    },
};