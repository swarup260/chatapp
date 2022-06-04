
const { messageHandler } = require('../handlers/messages.handler')
const { chatHandler } = require('../handlers/chat.handler')
const { notificationHandler } = require('../handlers/notification.handler')


/**
 * 
 * @param {import("socket.io").Server} io 
 */
module.exports = function socketRoute(io) {

    io.on("connection",() => console.log("USER CONNECTED !!"))

    io.of("/message").on("connection",messageHandler)

    io.of("/chat").on("connection",chatHandler)

    io.of("/notification").on("connection" , notificationHandler)


}
