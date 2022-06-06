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
    NEW_USER_JOIN: "NEW_USER_JOIN"
}
/**
 * 
 * @param {import("socket.io").Server} socket 
 */
const notificationHandler = socket => {


    socket.on(EVENTS.NEW_USER_JOIN, payload => {

        console.log({ payload })
        const { room, user } = payload
        /* save code */
        const message = `New User Joined ${user.username}`
        socket.to(room).emit(EVENTS.NEW_USER_JOIN, formatMessage({
            body: message,
            userID: user.id,
            roomID: room.id
        }))
    })

}

module.exports = {
    EVENTS,
    notificationHandler
}