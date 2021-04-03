const pluslevel = require('../../tasks/levelup')

module.exports = {

    name: 'uplevel',

    description: 'set level of char',

    cooldown: 30,

    async execute(client, message, args, Discord, charData) {

        if (message.member.roles.cache.has('827011712556990484')) {
            if (!charData) return message.channel.send('Please create a character first with **~create**')
            pluslevel(message, charData, 0)
        }
    }
}
