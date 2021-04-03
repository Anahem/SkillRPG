const rpgModel = require("../../models/rpgSchema")

const cooldowns = new Map()

module.exports = async (Discord, client, message) => {
    const prefix = process.env.PREFIX;

    
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let charData = await rpgModel.findOne({ userID: message.author.id })

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);
    if (!command) return message.reply('incorrect command')

    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection())
    }

    const current_time = Date.now()
    const time_stamps = cooldowns.get(command.name)
    const cooldown_amount = (command.cooldown) * 1000

    if(time_stamps.has(message.author.id)) {
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount

        if(current_time < expiration_time) {
            const time_left = (expiration_time - current_time) / 1000

            if(time_left > 120) {
               return message.reply(`Please wait ${(time_left/60).toFixed(0)} more minutes before using ${command.name}`)
            } else return message.reply(`Please wait ${time_left.toFixed(0)} more seconds before using ${command.name}`)
        }
    }

    time_stamps.set(message.author.id, current_time)
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount)

    if(command) command.execute(client, message, args, Discord, charData);

} 