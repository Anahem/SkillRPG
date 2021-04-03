const incxp = require('../../tasks/addxp')
const addkrone = require('../../tasks/addkrones')
const adventuretime = new Map()

module.exports = {

    name: 'adventure',

    description: 'go on an adventure',

    cooldown: 3,

    async execute(client, message, args, Discord, charData) {

        if (!charData) return message.channel.send('Please create a character first with **~create**')
        if (adventuretime.has(message.author.id)) {

            const current_time = Date.now()
            const expiration_time = adventuretime.get(message.author.id)
            const timeleft = (expiration_time - current_time) / 1000

            if (timeleft > 120) return message.reply(`Character already on an adventrue for **${(timeleft / 60).toFixed(0)}** more minutes.`)
            else return message.reply(`Character already on an adventrue for **${timeleft.toFixed(0)}** more seconds.`)
        }

        message.channel.send('What adventure are you willing to expirience?')
        const newEmbed = new Discord.MessageEmbed()
            .setTitle('Pick your adventure')
            .addFields(
                { name: '**A . Abandoned Outpost**', value: 'Quick in, Quick out. 5mins' },
                { name: '**B . Pirate Convoy**', value: 'Clean exit. No traces. 15mins' },
                { name: '**C . Star Base**', value: 'VIP extraction. High sec, bring your A game. 1hr' },
            )
        let embedreact = await message.channel.send(newEmbed)
        embedreact.react('🇦')
        embedreact.react('🇧')
        embedreact.react('🇨')

        const filter = (reaction, user) => {
            return user.id === message.author.id && ['🇦', '🇧', '🇨'].includes(reaction.emoji.name)
        }
        let timetofin = 0
        let xpreward = 0
        let kronereward = 0
        
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); 
          }

        const collector = await embedreact.awaitReactions(filter, { time: 10000, max: 1 })

        if (!collector.size) return message.channel.send('You did not choose an option')
        else if (collector.first()._emoji.name === '🇦') {
            timetofin = 300000
            xpreward = 2
            min = 0
            max = 2000
            kronereward = getRandomInt(min, max)
            
        } else if (collector.first()._emoji.name === '🇧') {
            timetofin = 900000
            xpreward = 5
            min = 1000
            max = 5000
            kronereward = getRandomInt(min, max)
        } else if (collector.first()._emoji.name === '🇨') {
            timetofin = 3600000
            xpreward = 20
            min = 5000
            max = 19000
            kronereward = getRandomInt(min, max)
        }
        const expiration_time = collector.first().message.createdTimestamp + timetofin
        adventuretime.set(message.author.id, expiration_time)
        const xpearned = xpreward
        setTimeout(() => {
            adventuretime.delete(message.author.id)
            message.reply(`Character returned from adventure. They earned **${xpreward} XP** and **${kronereward} Krones**`)            
            incxp(message, charData, xpearned)
            addkrone(message, null, kronereward)
        }, timetofin)
        message.channel.send(`Character sent on adventure. Time before they return : **${timetofin / 60000} minutes**`)
    }
}
