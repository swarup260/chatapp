import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "socket",
    initialState: {
        socketInstance: null,
    },
    reducers: {
        SET_SOCKET: (state, { payload }) => ({ ...state, socketInstance: payload })
    }
})

/* Export All ActionType */
export const {
    SET_SOCKET
} = slice.actions;


/* Export  reducer */
export default slice.reducer;

/* Export All Selector */
export const socketInstance = ({ entities }) => entities.socket.socketInstance