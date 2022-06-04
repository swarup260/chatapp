import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "socketEvent",
    initialState: {

    },
    reducers: {
        JOIN_ROOM(state,{payload}){
            const { socket } = payload
            /* fire to socket EVENT */
            socket.emit("",{  })
        },
        CREATE_ROOM(state,{payload}){
            const { socket } = payload
            /* fire to socket EVENT */
            socket.emit("",{  })
        },
        SEND_MSG(state,{payload}){
            const { socket } = payload
            /* fire to socket EVENT */
            socket.emit("",{  })
        }
    }
})

/* Export All ActionType */
export const {
    SET_SOCKET,
    SET_NOTIFICATION_SOCKET
} = slice.actions;


/* Export  reducer */
export default slice.reducer;

/* Export All Selector */
export const socketInstance = ({ entities }) => entities.socket.socketInstance
export const notificationSocketInstance = ({ entities }) => entities.socket.notificationSocketInstance