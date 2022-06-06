const { v4: uuidv4 } = require('uuid')
/* TEST */
function formatMessage({ body, type = "string", userID, roomID }) {
    return {
        id: uuidv4(),
        body,
        userID,
        type,
        roomID
    }
}
/* TEST */

const EVENTS = {
    SEND_MSG: "SEND_MSG",
    RECEIVE_MSG: "RECEIVE_MSG"
}
/**
 * 
 * @param {import("socket.io").Server} socket 
 */
const messageHandler = socket => {

    socket.on(EVENTS.SEND_MSG, payload => {
        console.log({ payload })
        const { room, message, user } = payload
        /* save code */
        socket.to(room).emit(EVENTS.RECEIVE_MSG, formatMessage({
            body: message,
            userID: user.id,
            roomID: room.id
        }))
    })

}

module.exports = {
    EVENTS,
    messageHandler
}