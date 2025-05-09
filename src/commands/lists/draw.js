const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const creator = require('../../models/creator');

const fs = require('fs');
const drawingsPath = require('../../data/lists/draw.json');

const drawEmbed = new EmbedBuilder()
  .setColor(0x3498db)
  .setTitle('Rerr\'s Stuff to Draw')
  .addFields(
    {
      name: '',
      value: drawingsPath.join('\n')
    }
  )
  .setFooter({
    text: 'Not all will be lewded, but many will be~\n/draw <entry>',
    iconURL: creator.avatarURL
  });

module.exports = {
  data: new SlashCommandBuilder()
    .setName('draw')
    .setDescription('Add to Rerr\'s ever-expanding drawing list')
    .addStringOption(option =>
      option.setName('visual')
        .setDescription('What may he draw?')
        .setRequired(false)),

  async execute(interaction) {
    const visualOption = interaction.options.getString('visual');

    if (visualOption) {
      const drawings = require(drawingsPath);
      drawings.push(visualOption);
      fs.writeFileSync(drawingsPath, JSON.stringify(drawings, null, 2));
      const message = `${visualOption} added!`;

      await interaction.reply({
        content: message
      });

    } else {
      await interaction.reply({
        embeds: [drawEmbed]
      });
    }
  }
}