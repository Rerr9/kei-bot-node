const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('readguya')
    .setDescription('Kaguya-sama as intended 📘'),
  async execute(interaction) {
    const message = "I'm in this manga!\nhttps://guya.moe/";
    await interaction.reply({
      content: message
    });
  }
}