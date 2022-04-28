const EVENT = require('./event')
const handlers = require('./handlers')
module.exports = async function (socket) {
    socket.on(EVENT.SEND_MESSAGE, await handlers.sendMessageHandler)
    socket.on(EVENT.RECIEVE_MESSAGE, await handlers.recieveMessageHandler)
    socket.on(EVENT.BOARDCAST_MESSAGE, await handlers.boardCastMessageHandler)
}