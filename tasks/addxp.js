const rpgModel = require("../models/rpgSchema")
const pluslevel = require('./levelup')
module.exports = async (message, charData, xp) => {
    try {
        await rpgModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $inc: {
                    xpoints: xp,
                },
            }
        )
        if ((charData.xpoints + xp) >= charData.xpToNext) {
            let totalXP = charData.xpoints + xp
            let overflow = totalXP - charData.xpToNext
            pluslevel(message, charData, overflow)
        }
    } catch (err) {
        console.log(err)
    }
}
