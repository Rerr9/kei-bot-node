const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('owner')
    .setDescription('Who is my Owner?'),
  async execute(interaction) {
    if (interaction.user.id != '197157754144686080') return;
    else {
      await interaction.reply({
        content: `My owner is Rerr`
      });
    }
  }
}