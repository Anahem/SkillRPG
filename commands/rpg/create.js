const rpgModel = require("../../models/rpgSchema")
const newclass = require('./class')
const newN = require('./name')

module.exports = {

    name: 'create',

    description: 'creates a rpg profile if it does not already exist',

    cooldown: 30,

    async execute(client, message, args, Discord, charData) {

        if (!charData) {
            let profile = await rpgModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
            })
            profile.save()


            await newN.execute(client, message, args, Discord, profile)
            await newclass.execute(client, message, args, Discord, profile)  
        } else return message.channel.send('You already have a character')
    }
}