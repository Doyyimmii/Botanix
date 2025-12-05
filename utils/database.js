const fs = require('fs');
const path = require('./database/guildConfig.json');


function loadConfig() {
    if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
    return JSON.parse(fs.readFileSync(path));
}

function saveConfig(data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

function getGuildConfig(guildId) {
    const db = loadConfig();
    if (!db[guildId]) {
        db[guildId] = {
            antiLink: false,
            antiInvite: false,
            logs: true,
            warns: {}
        };
        saveConfig(db);
    }
    return db[guildId];
}

function updateGuildConfig(guildId, newData) {
    const db = loadConfig();
    db[guildId] = { ...db[guildId], ...newData };
    saveConfig();
}

module.exports = { getGuildConfig, updateGuildConfig };