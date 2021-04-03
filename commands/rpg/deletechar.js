module.exports = {

    name: 'delete',

    description: 'delete a character',

    cooldown: 300,

    async execute(client, message, args, Discord, charData) {

        charData.deleteOne({ userID: message.author.id })

        message.channel.send('Character deleted successfully')
    }
}