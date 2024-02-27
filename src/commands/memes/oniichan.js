const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('oniichan')
    .setDescription('same friend'),
  async execute(interaction) {
    const replyMessage = "Hah."
    const message = "Go die, you siscon."
    
    await interaction.reply({
      content: replyMessage
    });
    await interaction.channel.sendTyping();
    setTimeout(async () => {
      await interaction.channel.send({
        content: message
      });
    }, 500);
  }
}