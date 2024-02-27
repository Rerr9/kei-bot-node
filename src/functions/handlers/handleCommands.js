const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (client) => {
  client.handleCommands = async() => {
    const commandFolders = fs.readdirSync(`./commands`);
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./commands/${folder}`)
        .filter((file) => file.endsWith('.js'));
      
      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(`Command: ${command.data.name} has passed through the handler`);
      }
    }

    const CLIENT_ID = '780506992410230800';
    const TEST_GUILD_ID = process.env['TEST_GUILD_ID'];
    const rest = new REST({ version: '9' }).setToken(process.env['DISCORD_TOKEN']);
    try {
      console.log('Started refreshing application (/) commands');
      
      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, TEST_GUILD_ID), {
        body: client.commandArray
      });
      console.log('Successfully reloaded application (/) commands on development guild.');

      // await rest.put(Routes.applicationCommands(CLIENT_ID), {
      //   body: client.commandArray,
      // });
      // console.log('Successfully reloaded application (/) commands globally.');
      
    } catch(error) {
      console.error(error);
    }
  };
};