import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        isLogin: false
    },
    reducers: {
        login: async () => {

        },
        register: async () => {

        }
    }
})

export const {
    login,
    register
} = slice.actions;


export default slice.reducer;