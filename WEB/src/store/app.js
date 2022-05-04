import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "app",
    initialState: {
        dailog: {
            isOpen: false,
            type: "success",
            message: "hello"
        }
    },
    reducers: {
        setDailogBox: (state, { payload }) => {
            state.dailog = payload
        }
    }
})


export const {
    setDailogBox
} = slice.actions;


export default slice.reducer;


export const dailogState = ({ entities }) => entities.app.dailog