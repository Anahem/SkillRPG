const rpgModel = require("../models/rpgSchema")
module.exports = async (message, charData, overflow) => {


    const SPgain = 1
    const basexp = 10
    const xpexpo = 1.5
    const nextlevel = parseInt(charData.charLevel) + parseInt(2)
    const xpnext = Math.round(parseInt(basexp) * Math.pow(parseInt(nextlevel), parseFloat(xpexpo)))

    try {
        await rpgModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $inc: {
                    charLevel: 1,
                    freeSP: SPgain,
                },
                $set: {
                    xpoints: overflow,
                    xpToNext: xpnext,
                }
            },
        )
        return message.channel.send(`You leveled up!!! You are now **Level ${charData.charLevel + 1}** `)
    } catch (err) {
        console.log(err)
    }
}
