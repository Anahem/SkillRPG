const rpgModel = require("../../models/rpgSchema")

module.exports = {

    name: 'class',

    description: 'change class',

    cooldown: 15,

    async execute(client, message, args, Discord, charData) {

        if (!charData) return message.channel.send('Please create a character first with **~create**')

        message.reply(`What class do you want?`)
        const classes = ['BUSTER', 'PSION', 'SENTRY', 'VOIDLOCK', 'SAGE']
        const newEmbed = new Discord.MessageEmbed()
            .setTitle('Choose Class')
            .addFields(
                { name: '**BUSTER**', value: 'Ex member of the elite sec-ops imperial brigade. Earns rent as a crypto merc these days' },
                { name: '**PSION**', value: 'Cybernetical nanochip implants allow you to exert and manipulate psychokinetic fields' },
                { name: '**SENTRY**', value: 'An AI driven mecha-bot that has achieved conscience and now lives by its own protocols' },
                { name: '**VOIDLOCK**', value: 'A life in space has changed you to be able to control the same void that sought to consume you' },
                { name: '**SAGE**', value: 'A curator from the great library, you exist to guard the holy data that brings order to civilizations' },
            )
        message.channel.send(newEmbed)
        const filter = m => {
            return m.author.id === message.author.id
        }
        const collector = await message.channel.awaitMessages(filter, { max: 1, time: 30000 })

        if (!collector.size) return message.channel.send('You did not answer')

        let choice = collector.first().content.toUpperCase();
        
        if (!classes.includes(choice)) return message.channel.send('Please enter a valid class name')
        if (choice === charData.class) return message.channel.send('Please select a different class than your current class')
        else {
            await rpgModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $set: {
                        class: choice,
                        freeSP: charData.charLevel,
                        passives: []
                    }
                }
            )
            message.channel.send(`Class set to **${choice}**. All skills have been reset`)
        }
    }
}

