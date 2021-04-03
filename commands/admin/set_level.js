const setlev = require('../../tasks/setlev')

module.exports = {

    name: 'setlevel',

    description: 'set level of char',

    cooldown: 3,

    async execute(client, message, args, Discord, charData) {

        if (message.member.roles.cache.has('827011712556990484')) {
            if (!charData) return message.channel.send('Please create a character first with **~create**')
            const tarlevel = args[0]
            setlev(message, tarlevel)
        }
    }
}



/* if (tarlevel % 1 != 0 || tarlevel < 0 || tarlevel >= 25) return message.channel.send(`Enter a valid number bewtween 0 and 25`)

            const basexp = 10
            const xpexpo = 1.5
            const nextlevel = parseInt(tarlevel) + parseInt(1)
            const xpnext = Math.round(parseInt(basexp) * Math.pow(parseInt(nextlevel), parseFloat(xpexpo)))
            const newSP = parseInt(tarlevel) * 2

            try {
                await rpgModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $set: {
                            charLevel: tarlevel,
                            xpoints: 0,
                            xpToNext: xpnext,
                            freeSP: newSP,
                        },
                    }
                )
                return message.channel.send(`Your new level is ${tarlevel}`)
            } catch (err) {
                console.log(err)
            } */