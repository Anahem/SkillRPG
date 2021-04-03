const mongoose = require("mongoose")

const rpgSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true },
    serverID: { type: String, require: true },
    charName:{type: String, default: 'Default Name'},
    class: { type: String, default: 'No Class'},
    totalSP: { type: Number, default: 0 },
    freeSP: { type: Number, default: 0 },
    xpoints: {type: Number, default: 0},
    charLevel: {type: Number, default: 0},
    xpToNext: {type: Number, default: 10},
    krones: {type: Number, default: 1000},
    passives: {type: Array,}
})

const model = mongoose.model("rpgModels", rpgSchema)

module.exports = model