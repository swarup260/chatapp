const EVENTS = {
    /* message Events */
    SEND_MSG: "SEND_MSG",
    RECEIVE_MSG: "RECEIVE_MSG",
    /* notification Event */
    NEW_USER_JOIN: "NEW_USER_JOIN",
    /* chatroom Events */
    ROOM_LIST: "ROOM_LIST",
    ACTIVE_USERS: "ACTIVE_USERS",
    JOIN_ROOM: "JOIN_ROOM",
    CREATE_ROOM: "CREATE_ROOM"

}
/**
 * 
 * @param {import("socket.io-client").Socket} socket 
 * @returns 
 */
const socketMiddleware = ({getState, dispatch}) => next => action => {
    console.log(getState())
    return next(action)
}

export default socketMiddleware