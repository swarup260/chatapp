import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer"

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { SET_SOCKET } from "./socket";
import socketMiddleware from "./middlewares/socket.middleware";

export default function () {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [SET_SOCKET.type, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
            // serializableCheck: false
        }).concat(socketMiddleware)
    })
}