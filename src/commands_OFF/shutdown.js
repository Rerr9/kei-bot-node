const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('shutdown')
  .setDescription('Gonna kill me huh?'),
  async execute (interaction, client) {
    if (interaction.user.id != '197157754144686080') return;
    else {
      await interaction.reply({
        content: `⏲ Shutting off, distilling memory into storage...`
      });
      await client.user.setStatus('invisible');
      
      setTimeout(async () => {
        await interaction.editReply({
          content: 'Shutdown! I\'m gone'
        });
        process.exit();
      }, 2000);
    }
  }
}