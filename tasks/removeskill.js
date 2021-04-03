const rpgModel = require("../models/rpgSchema")
module.exports = async (message, oldskill) => {
    try {
        await rpgModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $pull: {
                    passives: oldskill,
                },
                $inc: {
                    freeSP: 1,
                },
            }
        )
        message.channel.send(`**${oldskill}** unlearned sucessfully`)
    } catch (err) {
        console.log(err)
    }
}