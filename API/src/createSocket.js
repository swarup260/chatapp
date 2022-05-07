const { Server } = require('socket.io')

module.exports = function (server) {
    /* socket setup */
    return new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            credentials: true
        }
    })

}