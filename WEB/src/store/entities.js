import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import sessionStorage from "redux-persist/es/storage/session";

import authReducer from "./auth";
import appReducer from "./app";
import socketReducer from "./socket"
import chatReducer from "./chat"



export default combineReducers({
    auth: persistReducer({ key: 'auth', storage: sessionStorage }, authReducer),
    app: persistReducer({ key: 'app', storage: sessionStorage }, appReducer),
    chat: persistReducer({ key: 'chat', storage: sessionStorage }, chatReducer),
    socket: socketReducer
});
