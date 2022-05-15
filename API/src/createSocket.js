const { Server } = require('socket.io')
const { createAdapter } = require("@socket.io/mongo-adapter")
const socketRoutes = require('./routes/socket.routes')
const mongoose = require('mongoose')

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
    const collection = mongoose.connection.createCollection("chatCapped", {
        capped: true,
        size: 1e6
    })
    collection
        .then(db => io.adapter(createAdapter(db)))
        .catch(error => {
            /* Collection already exists */
           if (error.code == 48) {
               io.adapter(createAdapter(mongoose.connection.collection("chatCapped")))
               return;
           } 
           console.log(error)
        })
    // io.adapter(createAdapter(mongoose.connection.createCollection("chat")));

    socketRoutes(io)
}