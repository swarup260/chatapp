import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "socket",
    initialState: {
        socketInstance: null,
        notificationSocketInstance:null
    },
    reducers: {
        SET_SOCKET: (state, { payload }) => ({ ...state, socketInstance: payload }),
        SET_NOTIFICATION_SOCKET: (state, { payload }) => ({ ...state, notificationSocketInstance: payload })
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