const mongoose = require("mongoose");


const roomSchema= {
    name: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
}

module.exports = mongoose.model("rooms", roomSchema, "rooms");