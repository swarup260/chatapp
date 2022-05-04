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
        SET_DAILOGBOX_STATE: (state, { payload }) => {
            return { ...state, dailog: payload }
        }
    }
})


export const {
    SET_DAILOGBOX_STATE
} = slice.actions;


export default slice.reducer;


export const dailogState = ({ entities }) => entities.app.dailog