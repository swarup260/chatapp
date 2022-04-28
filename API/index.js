/* Dependencies  */
const http = require('http')
const { Server } = require('socket.io')

/* Constant */
const PORT = process.env.PORT || 5000

const app = require('./src/app')
const server = http.createServer(app.callback())

/* socket setup */
const io = new Server(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
})

/* io handler */
const socketHandler = require('./src/socket')
io.on('connection', socketHandler)


server.listen(PORT, () => console.log(`Server RUNNING AT http://127.0.0.1:${PORT}/`))