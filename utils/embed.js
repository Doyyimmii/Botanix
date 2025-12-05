const { EmbedBuilder } = require('discord.js');
const {} = require('discord.js');

function sucessEmbed(description) {
    return new EmbedBuilder()
    .setColor('Green')
    .setDescription(description);
}

function errorEmbed(description) {
    return new EmbedBuilder()
    .setColor('Red')
    .setDescription(description);
}

function infoEmbed(description) {
    return new EmbedBuilder()
    .setColor('Blue')
    .setDescription(description);
}

module.exports = { sucessEmbed, errorEmbed, infoEmbed };