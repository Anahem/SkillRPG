const rpgModel = require("../models/rpgSchema")
const skilladd = require('./addskill')

const buster = async (message, Discord, charData) => {
    const attachment = new Discord.MessageAttachment('./images/buster.png', 'buster.png')
    const newEmbed = new Discord.MessageEmbed()
        .setTitle(`Select **${charData.class} SPEC** ability`)
        .addFields(
            { name: 'Cluster Nade', value: 'Blanket an area with cluster nades' },
            { name: 'Orbital Precision', value: 'Call a precise orbital strike on a target' },
            { name: 'Tempered Aloy', value: 'Strike with your imperial issued blade' },
            { name: 'Bulwark of Wrath', value: 'Deploy a shield of flames to protect yourself and damage those nearby' },
        )
        .attachFiles(attachment)
        .setImage(`attachment://buster.png`)
    let embedreact = await message.channel.send(newEmbed)
    embedreact.react('🇦')
    embedreact.react('🇧')
    embedreact.react('🇨')
    embedreact.react('🇩')
    const filter = (reaction, user) => {
        return user.id === message.author.id && ['🇦', '🇧', '🇨', '🇩'].includes(reaction.emoji.name)
    }
    const collector = await embedreact.awaitReactions(filter, { time: 15000, max: 1 })
    let newskill = 'no skill'
    if (!collector.size) return message.channel.send('You did not choose an option')
    else if (collector.first()._emoji.name === '🇦') {
        newskill = 'Cluster Nade'
    } else if (collector.first()._emoji.name === '🇧') {
        newskill = 'Orbital Precision'
    } else if (collector.first()._emoji.name === '🇨') {
        newskill = 'Tempered Aloy'
    } else if (collector.first()._emoji.name === '🇩') {
        newskill = 'Bulwark of Wrath'
    }
    skilladd(message, charData, newskill)
}

const psion = async (message, Discord, charData) => {
    const attachment = new Discord.MessageAttachment('./images/psion.png', 'psion.png')
    const newEmbed = new Discord.MessageEmbed()
        .setTitle(`Select **${charData.class} SPEC** ability`)
        .addFields(
            { name: 'Psychical Blast', value: 'Blasts the region fron of you' },
            { name: 'E.M.F', value: 'Infect surroing area with a blanket of EMF' },
            { name: 'Kinetic Grasp', value: 'Grasp the target with kinetic tendrils' },
            { name: 'Mind Tempest', value: 'Release a sharp mental storm' },
        )
        .attachFiles(attachment)
        .setImage(`attachment://psion.png`)
    let embedreact = await message.channel.send(newEmbed)
    embedreact.react('🇦')
    embedreact.react('🇧')
    embedreact.react('🇨')
    embedreact.react('🇩')
    const filter = (reaction, user) => {
        return user.id === message.author.id && ['🇦', '🇧', '🇨', '🇩'].includes(reaction.emoji.name)
    }
    const collector = await embedreact.awaitReactions(filter, { time: 15000, max: 1 })
    let newskill = 'no skill'
    if (!collector.size) return message.channel.send('You did not choose an option')
    else if (collector.first()._emoji.name === '🇦') {
        newskill = 'Psychical Blast'
    } else if (collector.first()._emoji.name === '🇧') {
        newskill = 'E.M.F'
    } else if (collector.first()._emoji.name === '🇨') {
        newskill = 'Kinetic Grasp'
    } else if (collector.first()._emoji.name === '🇩') {
        newskill = 'Mind Tempest'
    }
    skilladd(message, charData, newskill)
}

const sentry = async (message, Discord, charData) => {
    const attachment = new Discord.MessageAttachment('./images/sentry.png', 'sentry.png')
    const newEmbed = new Discord.MessageEmbed()
        .setTitle(`Select **${charData.class} SPEC** ability`)
        .addFields(
            { name: 'Reactor Beam', value: '1000 degrees of pure energy. From your heart to theirs' },
            { name: 'Tracker Hornets', value: 'Mini missiles that track nearby targets' },
            { name: 'Vorpal Blades', value: 'Hidden vorpal blades attached to your arms' },
            { name: 'Infection Protocol', value: 'Release poisonous pores that affect biological beings' },
        )
        .attachFiles(attachment)
        .setImage(`attachment://sentry.png`)
    let embedreact = await message.channel.send(newEmbed)
    embedreact.react('🇦')
    embedreact.react('🇧')
    embedreact.react('🇨')
    embedreact.react('🇩')
    const filter = (reaction, user) => {
        return user.id === message.author.id && ['🇦', '🇧', '🇨', '🇩'].includes(reaction.emoji.name)
    }
    const collector = await embedreact.awaitReactions(filter, { time: 15000, max: 1 })
    let newskill = 'no skill'
    if (!collector.size) return message.channel.send('You did not choose an option')
    else if (collector.first()._emoji.name === '🇦') {
        newskill = 'Reactor Beam'
    } else if (collector.first()._emoji.name === '🇧') {
        newskill = 'Tracker Hornets'
    } else if (collector.first()._emoji.name === '🇨') {
        newskill = 'Vorpal Blades'
    } else if (collector.first()._emoji.name === '🇩') {
        newskill = 'Infection Protocol'
    }
    skilladd(message, charData, newskill)
}

const voidlock = async (message, Discord, charData) => {
    const attachment = new Discord.MessageAttachment('./images/voidlock.png', 'voidlock.png')
    const newEmbed = new Discord.MessageEmbed()
        .setTitle(`Select **${charData.class} SPEC** ability`)
        .addFields(
            { name: 'Desolate Suffering', value: 'Curse of the cold eternal suffering' },
            { name: 'Call of the Ether', value: 'Spirits scattered, answer your call' },
            { name: 'Asteroid Shower', value: 'Pull asteroids and bend them to your will' },
            { name: 'Cosmic Pheonix', value: 'Stars die, their lifeforce left behind, consume it and be reborn' },
        )
        .attachFiles(attachment)
        .setImage(`attachment://voidlock.png`)
    let embedreact = await message.channel.send(newEmbed)
    embedreact.react('🇦')
    embedreact.react('🇧')
    embedreact.react('🇨')
    embedreact.react('🇩')
    const filter = (reaction, user) => {
        return user.id === message.author.id && ['🇦', '🇧', '🇨', '🇩'].includes(reaction.emoji.name)
    }
    const collector = await embedreact.awaitReactions(filter, { time: 15000, max: 1 })
    let newskill = 'no skill'
    if (!collector.size) return message.channel.send('You did not choose an option')
    else if (collector.first()._emoji.name === '🇦') {
        newskill = 'Desolate Suffering'
    } else if (collector.first()._emoji.name === '🇧') {
        newskill = 'Call of the Ether'
    } else if (collector.first()._emoji.name === '🇨') {
        newskill = 'Asteroid Shower'
    } else if (collector.first()._emoji.name === '🇩') {
        newskill = 'Cosmic Pheonix'
    }
    skilladd(message, charData, newskill)
}

const sage = async (message, Discord, charData) => {
    const attachment = new Discord.MessageAttachment('./images/sage.png', 'sage.png')
    const newEmbed = new Discord.MessageEmbed()
        .setTitle(`Select **${charData.class} SPEC** ability`)
        .addFields(
            { name: 'Ancient Guardian', value: 'For generations your ancestors have guarded the library' },
            { name: 'Thornes of Knowledge', value: 'Burden your enemies with corrupted knowledge' },
            { name: 'Arcane Concord', value: 'Bind your enemy in arcane trappings' },
            { name: 'Galvanic Overload', value: 'Command the intrinsic energy from nearby objects' },
        )
        .attachFiles(attachment)
        .setImage(`attachment://sage.png`)
    let embedreact = await message.channel.send(newEmbed)
    embedreact.react('🇦')
    embedreact.react('🇧')
    embedreact.react('🇨')
    embedreact.react('🇩')
    const filter = (reaction, user) => {
        return user.id === message.author.id && ['🇦', '🇧', '🇨', '🇩'].includes(reaction.emoji.name)
    }
    const collector = await embedreact.awaitReactions(filter, { time: 15000, max: 1 })
    let newskill = 'no skill'
    if (!collector.size) return message.channel.send('You did not choose an option')
    else if (collector.first()._emoji.name === '🇦') {
        newskill = 'Ancient Guardian'
    } else if (collector.first()._emoji.name === '🇧') {
        newskill = 'Thornes of Knowledge'
    } else if (collector.first()._emoji.name === '🇨') {
        newskill = 'Arcane Concord'
    } else if (collector.first()._emoji.name === '🇩') {
        newskill = 'Galvanic Overload'
    }
    skilladd(message, charData, newskill)
}

module.exports = { buster, psion, sentry, voidlock, sage }