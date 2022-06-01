const EVENTS = {
    ROOM_LIST: "ROOM_LIST",
    ACTIVE_USERS: "ACTIVE_USERS",
    JOIN_ROOM: "JOIN_ROOM",
    CREATE_ROOM: "CREATE_ROOM"
}

const rooms = []
/**
 * 
 * @param {import("socket.io").Server} socket 
 */
module.exports = function (socket) {

    socket.emit("ROOM_LIST", rooms)

    socket.on("CREATE_ROOM", ({ roomName }) => {

        console.log({ roomName })

        if (!rooms.includes(roomName)) {
            rooms.push(roomName)
            socket.emit("ROOM_LIST", rooms)
        }


    })

    socket.on("JOIN_ROOM",({ roomName }) => {
        socket.socketsJoin(roomName)

        socket.emit("")
    })


}