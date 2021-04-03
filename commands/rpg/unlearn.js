const rmvskill = require('../../tasks/removeskill')

module.exports = {

    name: 'unlearn',

    description: 'unlearn a skill',

    cooldown: 15,

    async execute(client, message, args, Discord, charData) {

        if (!charData) return message.channel.send('Please create a character first with **#create**')
        const skillsNo = charData.passives.length
        let oldskill = charData.passives[0]

        switch (skillsNo) {
            case 0:
                message.channel.send('You have no skills to unlearn')
                break

            case 1:
                rmvskill(message, oldskill)
                break

            case 2:
                sendEmbed(message, charData, 2)
                break

            case 3:
                sendEmbed(message, charData, 3)
                break

            case 4:
                sendEmbed(message, charData, 4)
                break
        }

        async function sendEmbed(message, charData, skillsNo) {
            const newEmbed = new Discord.MessageEmbed()
                .setTitle(charData.charName)
                .setDescription('Select the skill to unlearn')
                .addFields(
                    { name: 'Skills', value: charData.passives }
                )
            let embedreact = await message.channel.send(newEmbed)
            if (skillsNo === 2) {
                embedreact.react('🇦')
                embedreact.react('🇧')
            } else if (skillsNo === 3) {
                embedreact.react('🇦')
                embedreact.react('🇧')
                embedreact.react('🇨')
            } else if (skillsNo === 4) {
                embedreact.react('🇦')
                embedreact.react('🇧')
                embedreact.react('🇨')
                embedreact.react('🇩')
            }
            const filter = (reaction, user) => {
                return user.id === message.author.id && ['🇦', '🇧', '🇨', '🇩'].includes(reaction.emoji.name)
            }
            const collector = await embedreact.awaitReactions(filter, { time: 15000, max: 1 })
            if (!collector.size) return message.channel.send('You did not choose an option')
            else if (collector.first()._emoji.name === '🇦') {
                oldskill = charData.passives[0]
                return rmvskill(message, oldskill)
            } else if (collector.first()._emoji.name === '🇧') {
                oldskill = charData.passives[1]
                return rmvskill(message, oldskill)
            } else if (collector.first()._emoji.name === '🇨') {
                oldskill = charData.passives[2]
                return rmvskill(message, oldskill)
            } else if (collector.first()._emoji.name === '🇩') {
                oldskill = charData.passives[3]
                return rmvskill(message, oldskill)
            }
        }
    }
}