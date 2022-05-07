/* Dependencies  */
const { createServer } = require('http')

/* Constant */
const PORT = process.env.PORT || 5000

/* Server Initialize */
const app = require('./src/app')
const socketRouter = require('./src/routes/socket.routes')
const server = createServer(app.callback())
const io = require('./src/createSocket')(server)

io.on("connection", socketRouter)

server.listen(PORT, () => console.log(`Server RUNNING AT http://127.0.0.1:${PORT}`))
