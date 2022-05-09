const { EventEmitter } = require("node:events")

class Console extends EventEmitter {

}

const consoleEmitter = new Console()


consoleEmitter.on("print", (val) => console.log(val))


module.exports = consoleEmitter