const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const keepAlive = require('./server');

const client = new Client({ intents: GatewayIntentBits.Guilds })
client.commands = new Collection();
client.commandArray = [];

//fs.readdirSync('./${process.cwd()}/functions')
const functionFolders = fs.readdirSync(`./functions`)
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./functions/${folder}`)
    .filter((file) => file.endsWith('.js'))
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();

keepAlive();
client.login(process.env['DISCORD_TOKEN']);
