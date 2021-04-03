const rpgModel = require("../models/rpgSchema")
module.exports = async (message, charData, newName) => {
    try {
        await rpgModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $set: {
                    charName: newName,
                },
            }
        )
        message.channel.send(`Character named **${newName}**`)
    } catch (err) {
        console.log(err)
    }
}
