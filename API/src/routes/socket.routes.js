
const socketEventEnum =  require("../config/socketEventEnum")

/**
 * 
 * @param {import("socket.io")} socket 
 */
const socketRouter = function (socket) {
    console.log("USER CONNECTED")
    /* message handler */
    /* notifed handler */
    socket.on(socketEventEnum.SEND_MESSAGE,(data) =>  console.log(data))
}


module.exports = socketRouter