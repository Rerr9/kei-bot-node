const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('say hello! 👋'),
  async execute(interaction) {
    // await interaction.deferReply({
    //   fetchReply: true,
    //   ephemeral: true
    // });

    const messages = [
      "Hello!",
      "Konichiwa!",
      "Bonjour!",
      "Hola!",
      "Guten Tag!",
      "Kamusta!",
      "Nǐ hǎo!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    await interaction.reply({
      content: randomMessage
    });

    // await interaction.channel.send({
    //   content: randomMessage
    // });

    // return await interaction.deleteReply();
  }
}