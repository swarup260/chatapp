module.exports.EVENTS = {
    ROOM_LIST: "ROOM_LIST",
    ACTIVE_USERS: "ACTIVE_USERS",
    JOIN_ROOM: "JOIN_ROOM",
    CREATE_ROOM: "CREATE_ROOM"
}

const { EVENTS: NOTIFCATION_EVENTS } = require("./notification.handler")

const rooms = []
/**
 * 
 * @param {import("socket.io").Server} socket 
 */
module.exports.chatHandler = socket => {

    socket.emit(EVENTS.ROOM_LIST, rooms)

    socket.on(EVENTS.CREATE_ROOM, ({ roomName }) => {

        console.log({ roomName })
        /* save room */

        if (!rooms.includes(roomName)) {
            rooms.push(roomName)
            socket.emit(EVENTS.ROOM_LIST, rooms)
        }


    })

    socket.on(EVENTS.JOIN_ROOM, ({ room, username }) => {
        console.log({ room, username })
        /* save room */
        socket.socketsJoin(room)
        socket.emit(NOTIFCATION_EVENTS.NEW_USER_JOIN, { room, username })
    })


}