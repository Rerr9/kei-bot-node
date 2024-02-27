const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('nico')
    .setDescription('this was a friend\'s request'),
  async execute(interaction) {
    const message = "I'll nico nico KNEE YOUR ASS!"
    await interaction.reply({
      content: message
    });
  }
}