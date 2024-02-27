const { ActivityType } = require('discord.js');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    await client.user.setActivity('Aka write incest', { type: ActivityType.Watching });
    console.log(`\n${client.user.tag} has connected.`);
  }
}