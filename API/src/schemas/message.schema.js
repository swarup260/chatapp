const mongoose = require("mongoose");
const { Schema } = require("mongoose")

const messageSchema = {
    body: {
        type: String,
        required: true,
    },
    userID: {
        type: Number,
        required: true
    },
    room: {
        type:Schema.Types.ObjectId,
        ref:"rooms"
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
    
}

module.exports = mongoose.model("messages", messageSchema, "messages");