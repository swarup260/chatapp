const { v4: uuidv4 } = require('uuid')
/* TEST */
function roomObject({ roomName }) {
    return {
        id: uuidv4(),
        roomName
    }
}


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

const rooms = []
const users = []


const EVENTS = {
    ROOM_LIST: "ROOM_LIST",
    ACTIVE_USERS: "ACTIVE_USERS",
    JOIN_ROOM: "JOIN_ROOM",
    CREATE_ROOM: "CREATE_ROOM",
    NEW_USER_JOIN: "NEW_USER_JOIN",
    SEND_MSG: "SEND_MSG",
    RECEIVE_MSG: "RECEIVE_MSG"
}


const mainHandler = io => socket => {

    console.log("USER CONNECTED !")

    /* CHAT ROOM */

    socket.emit(EVENTS.ROOM_LIST, rooms)

    socket.on(EVENTS.CREATE_ROOM, ({ room }) => {

        const { roomName } = room

        console.log({ roomName })
        /* save room */

        const isExist = rooms.findIndex(val => val.roomName == roomName)

        if (isExist == -1) {

            const room = roomObject({
                roomName
            })

            rooms.push(room)
            socket.emit(EVENTS.ROOM_LIST, rooms)
        }


    })

    /* NOTIFICATION  */

    socket.on(EVENTS.JOIN_ROOM, ({ room, user }) => {
        console.log({ room, user })
        /* save room */

        const  { roomName } = room

        socket.join(roomName)

        /* save code */
        const message = `New User Joined ${user.username}`
        socket.to(roomName).emit(EVENTS.NEW_USER_JOIN, formatMessage({
            body: message,
            userID: user.id,
            roomID: room.id
        }))
    })

    /* MESSAGE */

    socket.on(EVENTS.SEND_MSG, payload => {
        console.log(EVENTS.SEND_MSG,{ payload })
        const { room, message, user } = payload
        /* save code */
        socket.broadcast.emit(EVENTS.RECEIVE_MSG, formatMessage({
            body: message,
            userID: user.id,
            roomID: room.id
        }))
    })

}

module.exports = {
    mainHandler
}