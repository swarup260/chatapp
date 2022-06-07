import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import reducer from "./reducer"
import socketMiddleware from "./middlewares/socket.middleware"


/* 

* app global state 
* toast notification 
* user and auth 
* chat emitter   (socket events )

*/
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

export default function () {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                    // Ignore these field paths in all actions
                    ignoredActionPaths: ['payload.socket'],
                }
                // serializableCheck: false
            }),
            socketMiddleware
        ]
    })
}
