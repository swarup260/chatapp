
const rooms = []
const users = []


/**
 * 
 * @param {import("socket.io").Server} io 
 */
module.exports = function socketRoute(io) {

    // io.on("connection", () => console.log("USER CONNECTED ON MAIN CHANNEL"))

    // io.of("/notification").on("connection", () => console.log("USER CONNECTED ON NOTIFICATION CHANNEL"))

    // io.of("/chat").on("connection", () => console.log("USER CONNECTED ON CHAT CHANNEL"))


    io.on("connection", socket => {

        console.log("USER CONNECTED ON MAIN CHANNEL")


        io.emit("ROOM_LIST",rooms)

        socket.on("CREATE_NEW_ROOM",({room,userID}) => {

            /* rooms pushed */
            rooms.push(room)
            /* user pused */
            users.push(userID)

            io.socketsJoin(room)
        })

        socket.on("JOIN_ROOM",({room,userID}) => {
            io.socketsJoin(room)
        })
        
        socket.on("SEND_MESSAGE",val => {
            console.log({val})
            socket.broadcast.emit("RECIEVE_MESSAGE",val)
        })
    })

}
