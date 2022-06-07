import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "socketEvent",
    initialState: {
        rooms: [],
        messages: [],
        activeRoom: {}
    },
    reducers: {
        JOIN_ROOM: (state, { payload }) => {
            const { socket, room, user } = payload
            return { ...state }
        },
        CREATE_ROOM: (state, { payload }) => {
            // const { room, user } = payload
            console.log({ payload })
            return { ...state }
        },
        SEND_MSG: (state, { payload }) => {
            const { socket } = payload
            return { ...state }
        },
        SET_ACTIVE_ROOM: (state, { payload }) => {

            const { room } = payload

            return { ...state, activeRoom: room }
        }
    }
})

/* Export All ActionType */
export const {
    JOIN_ROOM,
    CREATE_ROOM,
    SEND_MSG,
    SET_ACTIVE_ROOM
} = slice.actions;


/* Export  reducer */
export default slice.reducer;

/* Export All Selector */