const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uno')
    .setDescription('reverso'),
  async execute(interaction) {
    // const noyou = client.emojis.cache.find(emoji => emoji.name === "groom");
    // const message = `${noyou}`;
    // const message = 'https://cdn.discordapp.com/emojis/576701721385107457.webp?size=48&name=KaguyaNoU&quality=lossless'
    const message = 'no u bitch.';
    await interaction.reply({
      content: message
    });
  }
}