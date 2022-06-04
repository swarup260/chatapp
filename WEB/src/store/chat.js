import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "chat",
    initialState: {
        rooms: {},
        roomList: [],
        activeRoom:''
    },
    reducers: {
        ADD_NEW_ROOM: (state, { payload }) => {
            return state
        },
        ADD_ROOM_MESSAGES: (state, { payload }) => {
            return state
        },
        SET_ACTIVE_ROOM:(state,{payload}) => ({...state,activeRoom:payload})
    }
})

/* Export All ActionType */
export const {
    ADD_ROOM,
    ADD_ROOM_MESSAGES,
    SET_ACTIVE_ROOM
} = slice.actions

/* Export  reducer */
export default slice.reducer;

/* Export All Selector */
export const chatRoomMessageList = roomName => ({ entities }) => (entities.chat.rooms[roomName]?.messageList || [])
export const allRooms = ({ entities }) => entities.chat.rooms
export const roomList = ({ entities }) => entities.chat.roomList
export const activeRoom = ({entities}) => entities.chat.activeRoom