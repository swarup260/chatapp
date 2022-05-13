/* Dependencies  */
const { createServer } = require('http')

/* Constant */
const PORT = process.env.PORT || 5000

/* Server Initialize */
const app = require('./src/app')
const server = createServer(app.callback())
/* socket initalize */
require('./src/createSocket')(server)


server.listen(PORT, () => console.log(`Server RUNNING AT http://127.0.0.1:${PORT}`))
