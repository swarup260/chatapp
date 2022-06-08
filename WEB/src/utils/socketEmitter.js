import { Socket } from "socket.io-client"

class SocketEmitter {

    constructor() {
        this.socket = ''
    }


    setSocket(socket) {

        if (!(socket instanceof Socket)) {
            throw new Error("Must Be Instance of Socket")
        }

        this.socket = socket

        return this
    }

    getSocket() {
        return this.socket
    }

    createRoom({ room }) {

        console.log({ room })

        this.socket.emit("CREATE_ROOM", { room })

        return this
    }

    joinRoom({ room, user }) {
        console.log({ room, user })

        this.socket.emit("JOIN_ROOM", { room, user })

        return this
    }

    sendMsg({ room, message, user }) {
        console.log({ room, message, user })

        this.socket.emit("SEND_MSG", { room, message, user })

        return this
    }


}


export default new SocketEmitter()