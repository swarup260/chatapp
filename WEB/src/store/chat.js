import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "chat",
    initialState: {
        rooms: {},
        roomList: [],
        activeRoom:''
    },
    reducers: {
        SET_ROOM: (state, { payload }) => {
            const { rooms, roomList } = state
            const newRoom = {
                [payload]: {
                    roomName: payload,
                    messageList: []
                }
            }
            let newRoomList = roomList.indexOf(payload) > 0 ? [...roomList] : [...roomList,payload]

            return { ...state, rooms: { ...rooms, ...newRoom }, roomList:newRoomList }
        },
        SET_ROOM_MESSAGE: (state, { payload }) => {
            const rooms = state.rooms
            const { roomName, message } = payload

            if (!state.rooms[roomName]) throw new Error("Chat Room Doesn't Exists!")

            const messageList = state.rooms[roomName].messageList
            const updateRoomChat = { ...rooms[roomName], messageList: [...messageList, message] }
            return { ...state, rooms: { ...rooms, [roomName]: updateRoomChat } }
        },
        SET_ACTIVE_ROOM:(state,{payload}) => ({...state,activeRoom:payload})
    }
})

/* Export All ActionType */
export const {
    SET_ROOM,
    SET_ROOM_MESSAGE,
    SET_ACTIVE_ROOM
} = slice.actions

/* Export  reducer */
export default slice.reducer;

/* Export All Selector */
export const chatRoomMessageList = roomName => ({ entities }) => (entities.chat.rooms[roomName]?.messageList || [])
export const allRooms = ({ entities }) => entities.chat.rooms
export const roomList = ({ entities }) => entities.chat.roomList
export const activeRoom = ({entities}) => entities.chat.activeRoom