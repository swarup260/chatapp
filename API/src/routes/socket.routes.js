
const { messageHandler } = require('../handlers/messages.handler')

const { notificationHandler } = require('../handlers/notification.handler')

const { chatHandler } = require('../handlers/chat.handler')

/**
 * 
 * @param {import("socket.io").Server} io 
 */
module.exports = function socketRoute(io) {

    io.on("/message",messageHandler)

    io.on("/chat",chatHandler)

    io.on("/notification",notificationHandler)

}
