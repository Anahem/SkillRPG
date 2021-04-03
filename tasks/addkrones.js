const rpgModel = require("../models/rpgSchema")
module.exports = async (message, charData, kronesamt) => {
    try {
        await rpgModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $inc: {
                    krones: kronesamt,
                },
            }
        )
    } catch (err) {
        console.log(err)
    }
}
