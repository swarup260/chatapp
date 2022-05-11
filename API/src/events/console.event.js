// const { EventEmitter } = require("node:events")

// class Console extends EventEmitter {

//     constructor(...params) {
//         super(...params)
//         this.middleware = []
//     }

//     use(fn) {
//         if (!(typeof fn == "function")) throw new Error("Middleware Must be Function !")
//         this.middleware.push(fn)
//     }

//     emit(...params) {
//         const args = params[1]
//         this.fnMiddleware(args).then(super.emit(...params)).catch(err => { throw new Error(err) })
//     }

//     fnMiddleware(args) {
//         const dispatch = () => { }
//         this.middleware.forEach(fn => {
//             fn(args, dispatch)
//         })

//         return Promise.resolve()
//     }

// }

// const consoleEmitter = new Console()



// consoleEmitter.use((context, next) => {
//     context.messageBody = Buffer.from(context.messageBody, "base64").toString("ascii")
//     context.dateTime = new Date(),
//         context.userID = 1
//     return
// })


// consoleEmitter.on("SAVE_MESSAGE", (val) => console.log(val))



// consoleEmitter.emit("SAVE_MESSAGE", { messageBody: Buffer.from("Hello World").toString('base64') })


// module.exports = consoleEmitter




// // console.log(Buffer.from(iv,"hex").toString('hex'))

// const message = "HELLO WORLD"

// const cipher = crypto.createCipheriv("aes-192-ccm", Buffer.from("password"), iv, {
//     authTagLength: 16
// })

// cipher.setAAD(Buffer.from("0123456789","hex"),{
//     plaintextLength : Buffer.byteLength(message)
// })

// const cipherText = cipher.update(message, "utf8")
// cipher.final()

// console.log(cipherText)


