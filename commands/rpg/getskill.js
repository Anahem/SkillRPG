const rpgModel = require("../../models/rpgSchema")
const skillslist = require('../../tasks/skills')

module.exports = {

    name: 'getskill',

    description: 'get a new passive',

    cooldown: 5,

    execute(client, message, args, Discord, charData) {
        if (!charData) return message.channel.send('Please create a character first with **~create**')
        if (!charData.freeSP > 0) return message.channel.send('Dont have any free skill points. Level up to get more skill points.')
        if (charData.passives.length > 3) return message.channel.send('You are at max skill capacity. Unlearn a skill if you want to learn new skills')
        if (charData.class === 'BUSTER') return skillslist.buster(message, Discord, charData)
        if (charData.class === 'PSION') return skillslist.psion(message, Discord, charData)
        if (charData.class === 'SENTRY') return skillslist.sentry(message, Discord, charData)
        if (charData.class === 'VOIDLOCK') return skillslist.voidlock(message, Discord, charData)
        if (charData.class === 'SAGE') return skillslist.sage(message, Discord, charData)
    }
}
