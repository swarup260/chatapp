
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

        socket.on("CREATE_NEW_ROOM",val => console.log(val))
        socket.on("JOIN_ROOM",val => console.log(val))
        socket.on("SEND_MESSAGE",val => socket.emit("RECIEVE_MESSAGE",val))

    })
}
