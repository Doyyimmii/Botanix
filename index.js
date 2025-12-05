require('dotenv').config();
const fs = require('fs');
const { Client, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Prefix
const prefix = process.env.PREFIX;

client.commands = new Collection()
client.slashCommands = new Collection()

// Load prefix commands
const prefixFiles = fs.readdirSync('./commands/prefix').filter(file => file.endsWith('.js'));
for (const file of prefixFiles) {
    const command = require(`./commands/prefix/${file}`);
    client.commands.set(command.name, command);
}

// Load slash commands
const slashFiles = fs.readdirSync('./commands/slash').filter(file => file.endsWith('.js'));
const slashArray = [];
for (const file of slashFiles) {
    const command = require(`./commands/slash/${file}`);
    client.slashCommands.set(command.data.name, command);
    slashArray.push(command.data.toJSON());
}

// Register slash commands
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
(async () => {
    try {
        console.log('Started refreshing slash commands.');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: slashArray }
        );
        console.log('Successfully reloaded slash commands.');
    } catch (error) {
        console.error(error);
    }
})();

// Load events
fs.readdirSync('./events').filter(f => f.endsWith('.js')).forEach(file => {
    const event = require(`./events/${file}`);
    if (event.name && typeof event.execute === 'function') {
        if (file.startsWith('guildMemberAdd')) {
            client.on(event.name, (...args) => event.execute(...args));
        } else if (file.startsWith('messageCreate')) {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
});

// Prefix command handler
client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
        command.execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply('There was an error executing that command.');
    }
});

// Slash commmand handler
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.slashCommands.get(interaction.commandName);
    if (!command) return;
    
    try {
       await command.execute(interaction, client); 
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error executing that command.', ephemeral: true });
    }
});

client.on('ready', () => {
    console.log(`${client.user.tag} is online!`);
});

client.login(process.env.TOKEN)
