
// const { messageHandler } = require('../handlers/messages.handler')
// const { chatHandler } = require('../handlers/chat.handler')
// const { notificationHandler } = require('../handlers/notification.handler')


const {  mainHandler } = require('../handlers/main.handler')

/**
 * 
 * @param {import("socket.io").Server} io 
 */
module.exports = function socketRoute(io) {

    io.on("connection", mainHandler(io))

    // io.of("/message").on("connection",messageHandler)

    // io.of("/chat").on("connection",chatHandler(io))

    // io.of("/notification").on("connection" , notificationHandler)

}
