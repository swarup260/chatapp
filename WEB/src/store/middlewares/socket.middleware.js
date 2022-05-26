import { io } from "socket.io-client"

/**
 * 
 * @param {Object} param0 
 * @param {String} param0.URL
 * @param {Array} param0.listeners
 * @param {Array} param0.emitters
 * @returns 
 */
const socketMiddleware = ({ URL, listeners, emitters }) => {

    const socket = io(URL)
    return store => next => action => {

        const { type, payload } = action
        if (type.match('socket/')) {
            const [_, event] = type.split('socket/')

            /* Listeners */
            if (listeners.includes(event)) {
                socket.on(event,val => store.dispatch(action(val)))
            }

            /* Emitter */
            if (emitters.includes(event)) {
                socket.emit(event,payload)
            }
        }

        next(action)
    }
}



export default socketMiddleware


