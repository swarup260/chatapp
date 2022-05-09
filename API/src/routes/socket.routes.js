
const { eventEnum, channels } = require("../config/socketEventEnum")
const consoleEmitter = require("../events/console.event")



/**
 * 
 * @param {import("socket.io")} socket 
 */
const socketRouter = (io) => (socket) => {

    console.log(io.of(`/${channels.NOTIFICATION}`).sockets.size)
    console.log("USER CONNECTED")
    /* message handler */
    /* notifed handler */
    socket.on(eventEnum.SEND_MESSAGE, (data) => consoleEmitter.emit("print", data))

    socket.on(eventEnum.CREATE_NEW_ROOM, (val) => consoleEmitter.emit("print",{ val, namespace: "public" }))
}


module.exports = socketRouter