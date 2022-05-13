const { Server } = require('socket.io')
const { createAdapter } = require("@socket.io/mongo-adapter")
const initAdapter = require('./config/initSocketAdapter')
const socketRoutes = require('./routes/socket.routes')
const { default: mongoose } = require('mongoose')

module.exports = function (server) {
    /* socket setup */
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            credentials: true
        }
    })


    /* Socket Adapter Setup   */

    initAdapter().then((mongoCollection) => {
        io.adapter(createAdapter(mongoose));
    }).catch((err) => {
        throw err
    });

    socketRoutes(io)
}