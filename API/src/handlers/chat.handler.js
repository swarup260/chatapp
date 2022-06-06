const { v4: uuidv4 } = require('uuid')
/* TEST */
function formatMessage({ name }) {
    return {
        id: uuidv4(),
        name
    }
}
/* TEST */

const EVENTS = {
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
const chatHandler = socket => {

    socket.emit(EVENTS.ROOM_LIST, rooms)

    socket.on(EVENTS.CREATE_ROOM, ({ roomName }) => {

        console.log({ roomName })
        /* save room */

        const isExist = rooms.findIndex(val => val.roomName == roomName)

        if (!isExist) {

            const room = formatMessage({
                roomName
            })

            rooms.push(room)
            socket.emit(EVENTS.ROOM_LIST, rooms)
        }


    })

    socket.on(EVENTS.JOIN_ROOM, ({ room, user }) => {
        console.log({ room, user })
        /* save room */
        socket.socketsJoin(room)
        socket.emit(NOTIFCATION_EVENTS.NEW_USER_JOIN, { room, user })
    })


}

module.exports = {
    EVENTS,
    chatHandler
}