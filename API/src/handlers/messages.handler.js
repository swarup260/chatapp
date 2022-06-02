module.exports.EVENTS = {
    SEND_MSG: "SEND_MSG",
    RECEIVE_MSG: "RECEIVE_MSG"
}
/**
 * 
 * @param {import("socket.io").Server} socket 
 */
module.exports.messageHandler = socket  => {

    socket.on(EVENTS.SEND_MSG, payload => {
        console.log({ payload })
        const { room, message } = payload
        /* save code */
        socket.to(room).emit(EVENTS.RECEIVE_MSG, message)
    })

}