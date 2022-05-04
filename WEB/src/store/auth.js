import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        isLogin: false,
        isLoading: false
    },
    reducers: {
        SET_TOKEN(state,{ payload }){
            return { ...state,token:payload}
        },
        SET_IS_LOGIN(state,{ payload }){
            return { ...state,isLogin:payload }
        },
        SET_IS_LOADING(state,{ payload }){
            return { ...state,isLoading:payload }
        }
    }
})

export const {
    SET_TOKEN,
    SET_IS_LOGIN,
    SET_IS_LOADING
} = slice.actions;


export default slice.reducer;



export const isUserLogin = ({ entities }) => entities.auth.isLogin
export const isApiLoading = ({ entities }) => entities.auth.isLoading