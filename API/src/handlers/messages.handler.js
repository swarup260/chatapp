const { errorResponseBody } = require("../util/function")
const CODE = require("../config/ResponseCode")

const EVENT = {
    SEND_MESSAGE: 'SEND_MESSAGE',
    RECIEVE_MESSAGE: 'RECIEVE_MESSAGE',
    BOARDCAST_MESSAGE: 'BOARDCAST_MESSAGE',
    USER_CONNECTED: 'USER_CONNECTED',
    CREATE_NEW_ROOM: 'CREATE_NEW_ROOM'
}


module.exports = class MessageHandler {
    /**
     * 
     * @param {Object} param 
     * @param {import("../services/message.service")} param.messageService 
     */
    constructor({ messageService }) {
        this.messageService = messageService
    }


    /**
     * 
     * @param {import("socket.io").Server} socket 
     */
    baseHandler(socket) {

        socket.on(EVENT.SEND_MESSAGE, this.sendMessage)
        socket.on(EVENT.RECIEVE_MESSAGE, this.recieve)
    }

    sendMessage(val) {
        console.log({ val })
    }

}