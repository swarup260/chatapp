import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from "./auth";
import appReducer from "./app";
import socketReducer from "./socket"
import chatReducer from "./chat"



export default combineReducers({
    auth: persistReducer({ key: 'auth', storage }, authReducer),
    app: persistReducer({ key: 'app', storage }, appReducer),
    chat: persistReducer({ key: 'chat', storage }, chatReducer),
    socket: socketReducer
});
