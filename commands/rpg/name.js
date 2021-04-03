const setname = require('../../tasks/rename')

module.exports = {

    name: 'name',

    description: 'set a new name',

    cooldown: 15,

    async execute(client, message, args, Discord, charData) {

        if (!charData) return message.channel.send('Please create a character first with **#create**')

        message.reply(`What do you want to name your character`)
        const filter = m => {
            return m.author.id === message.author.id
        }
        const collector = await message.channel.awaitMessages(filter, { max: 1, time: 10000 })

        if (!collector.size) return message.channel.send('You did not answer')

        let choice = collector.first().content
        await setname(message, charData, choice)   
    }
}
