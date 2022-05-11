const mongoose = require("mongoose");


const persistentMessageSchema = {
    body: {
        type: String,
        required: true,
    },
    userID: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
}

module.exports = mongoose.model("messages", persistentMessageSchema, "messages");