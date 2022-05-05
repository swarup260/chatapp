import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from "./auth";
import appReducer from "./app";



export default combineReducers({
    auth: persistReducer({ key: 'auth', storage }, authReducer),
    app: persistReducer({ key: 'app', storage }, appReducer)
});
