const { v4: uuidv4 } = require('uuid')
/* TEST */
function formatMessage({ roomName }) {
    return {
        id: uuidv4(),
        roomName
    }
}


function formatNotificationMessage({ body, type = "string", userID, roomID }) {
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
    ROOM_LIST: "ROOM_LIST",
    ACTIVE_USERS: "ACTIVE_USERS",
    JOIN_ROOM: "JOIN_ROOM",
    CREATE_ROOM: "CREATE_ROOM",
    NEW_USER_JOIN: "NEW_USER_JOIN"
}


const rooms = []
/**
 * 
 * @param {import("socket.io").Server} socket 
 */
const chatHandler = io => socket => {

    socket.emit(EVENTS.ROOM_LIST, rooms)

    socket.on(EVENTS.CREATE_ROOM, ({ room }) => {

        const { roomName } = room

        console.log({ roomName })
        /* save room */

        const isExist = rooms.findIndex(val => val.roomName == roomName)

        if (isExist == -1) {

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

        const  { roomName } = room

        socket.join(roomName)

        /* save code */
        const message = `New User Joined ${user.username}`
        socket.to(roomName).emit(EVENTS.NEW_USER_JOIN, formatNotificationMessage({
            body: message,
            userID: user.id,
            roomID: room.id
        }))
    })


}

module.exports = {
    EVENTS,
    chatHandler
}