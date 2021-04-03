module.exports = {

    name: 'char',

    description: 'check your character',

    cooldown: 5,

    execute(client, message, args, Discord, charData) {
        if (!charData) return message.channel.send('Please create a character first with **~create**')
        if (charData.passives.length === 0) {
            const newEmbed = new Discord.MessageEmbed()
                .setTitle(charData.charName)
                .addFields(
                    { name: 'Class', value: charData.class },
                    { name: 'Level', value: charData.charLevel, inline: true },
                    { name: 'Experience', value: `${charData.xpoints} / ${charData.xpToNext}`, inline: true },
                    { name: 'Skill points', value: charData.freeSP, inline: true },
                    { name: 'Krones', value: charData.krones, inline: true },
                )
            message.channel.send(newEmbed)
        } else {
            const newEmbed = new Discord.MessageEmbed()
                .setTitle(charData.charName)
                .addFields(
                    { name: 'Class', value: charData.class },
                    { name: 'Level', value: charData.charLevel, inline: true },
                    { name: 'Experience', value: `${charData.xpoints} / ${charData.xpToNext}`, inline: true },
                    { name: 'Skill points', value: charData.freeSP, inline: true },
                    { name: 'Krones', value: charData.krones, inline: true },
                    { name: 'Skills', value: charData.passives }
                )
            message.channel.send(newEmbed)
        }
    }
}