const rpgModel = require("../models/rpgSchema")
module.exports = async (message, charData,newskill) => {
    if (charData.passives.includes(newskill)) return message.channel.send(`You already know how to use **${newskill}**`)
    try {
        await rpgModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $push: {
                    passives: newskill,
                },
                $inc: {
                    freeSP: -1,
                },
            }
        )
        message.channel.send(`**${newskill}** upgraded sucessfully`)
    } catch (err) {
        console.log(err)
    }
}