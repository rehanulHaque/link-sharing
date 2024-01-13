const mongoose = require("mongoose")
const shortid = require("shortid")

const urlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortid.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("url", urlSchema)