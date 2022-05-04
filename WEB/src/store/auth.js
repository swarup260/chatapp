import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setDailogBox } from "./app";


const slice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        isLogin: false
    },
    reducers: {
        login: async (state, { payload }) => {
            const dispatch = useDispatch()
            try {
                
            } catch (error) {
                // dispatch(setDailogBox({ }))
            }
        },
        register: async (state, { payload }) => {
            try {
                
            } catch (error) {
                // dispatch(setDailogBox({ }))
            }
        }
    }
})

export const {
    login,
    register
} = slice.actions;


export default slice.reducer;



export const isUserLogin = ({ entities }) => entities.auth.isLogin