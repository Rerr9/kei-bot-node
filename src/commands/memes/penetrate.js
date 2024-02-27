const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('penetrate')
    .setDescription('pls don\'t'),
  async execute(interaction) {
    const messages = [
    "*moans*",
    "*mai noises*",
    "*guh~*",
    "*not the **carrot!***",
    "*mel noises*",
    "*holy coom*",
    "*ahh--*",
    "*hah-... hahh...*",
    "w-wha-**AHH?!**",
    "*fuck...*",
    "***uwu~***",
    "*rerr confusion*",
    "*beans snifffff*",
    "*hawx fucking dies*",
    "No, **you're getting pegged.**",
    "*anoh lewdz*"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    await interaction.reply({
      content: randomMessage
    });
  }
}