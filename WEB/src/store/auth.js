import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        isLogin: false
    },
    reducers: {
        SET_TOKEN: (state, { payload }) => ({ ...state, token: payload }),
        SET_IS_LOGIN: (state, { payload }) => ({ ...state, isLogin: payload }),
        RESET_AUTH:(state,_) => ({...state,token:"",isLogin: false})
    }
})

/* Export All ActionType */
export const {
    SET_TOKEN,
    SET_IS_LOGIN,
    RESET_AUTH
} = slice.actions;

/* Export  reducer */
export default slice.reducer;

/* Export All Selector */
export const isUserLogin = ({ entities }) => entities.auth.isLogin
