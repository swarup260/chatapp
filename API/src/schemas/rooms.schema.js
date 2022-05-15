const mongoose = require("mongoose");


const roomSchema= {
    rooms: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
}

module.exports = mongoose.model("rooms", roomSchema, "rooms");