/* Dependencies  */
const { createServer } = require('http')

/* Constant */
const PORT = process.env.PORT || 5000

/* Server Initialize */
const app = require('./src/app')
const socketRouter = require('./src/routes/socket.routes')
const server = createServer(app.callback())
const io = require('./src/createSocket')(server)



io.of("/notification").on("connection", (socket) => {
    console.log("USER CONNECTED IN NAMESPACE")
    socket.on("CREATE_NEW_ROOM", (val) => console.log({ val, namespace: "NAMESPACE" }))
})
io.on("connection", socketRouter(io))


const { persistentMessageEvent, EVENTS } = require('./src/events/persistentMessage.event')
// persistentMessageEvent.emit(EVENTS.SAVE, { body: "hello", userID: 1 })

server.listen(PORT, () => console.log(`Server RUNNING AT http://127.0.0.1:${PORT}`))
