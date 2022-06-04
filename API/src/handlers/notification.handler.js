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
        const { room, username } = payload
        /* save code */
        const message = `New User Joined ${username}`
        socket.to(room).emit(EVENTS.NEW_USER_JOIN, { room, message })
    })

}

module.exports = {
    EVENTS,
    notificationHandler
}