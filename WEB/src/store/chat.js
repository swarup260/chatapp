import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "chat",
    initialState: {
        messageList: {},
        roomList: {},
        activeRoom: ''
    },
    reducers: {
        ADD_NEW_ROOM: (state, { payload }) => {

            const { roomList } = state

            const { id } = payload

            const newRoomList = { ...roomList }

            if (!roomList[id]) {
                newRoomList[id] = payload
            }

            return { ...state, roomList: { ...newRoomList } }
        },
        ADD_ROOM_MESSAGES: (state, { payload }) => {
            return state
        },
        SET_ACTIVE_ROOM: (state, { payload }) => ({ ...state, activeRoom: payload })
    }
})

/* Export All ActionType */
export const {
    ADD_NEW_ROOM,
    ADD_ROOM_MESSAGES,
    SET_ACTIVE_ROOM
} = slice.actions

/* Export  reducer */
export default slice.reducer;

/* Export All Selector */
export const chatRoomMessageList = ({ id,_ }) => ({ entities }) => Object.values(entities.chat.messageList).filter( message => message.roomID == id )
export const allRooms = ({ entities }) => entities.chat.rooms
export const roomList = ({ entities }) => entities.chat.roomList
export const activeRoom = ({ entities }) => entities.chat.activeRoom