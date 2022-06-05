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
            /* fire to socket EVENT */
            socket.emit("JOIN_ROOM", { room, user })
        },
        CREATE_ROOM: (state, { payload }) => {
            const { socket, roomObj, user } = payload
            /* fire to socket EVENT */
            socket.emit("CREATE_ROOM", { roomObj, user })
            const { rooms } = state
            let newRoom = []

            const isRoomExist = rooms.findIndex((room) => (room.roomName == roomObj.roomName))
            if (!isRoomExist) {
                newRoom = [...rooms, roomObj]
            }

            return { ...state, rooms: newRoom, activeRoom: roomObj }
        },
        SEND_MSG: (state, { payload }) => {
            const { socket } = payload
            /* fire to socket EVENT */
            socket.emit("", {})
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