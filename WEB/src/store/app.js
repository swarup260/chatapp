import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "app",
    initialState: {
        dailog: {
            isOpen: false,
            type: "success",
            message: "hello",
        },
        isLoading: false,
        user : {}
    },
    reducers: {
        SET_DAILOGBOX_STATE: (state, { payload }) => ({ ...state, dailog: payload }),
        SET_IS_LOADING: (state, { payload }) => ({ ...state, isLoading: payload }),
        SET_USER: (state, { payload }) => ({ ...state, user: payload })
    }
})

/* Export All ActionType */
export const {
    SET_DAILOGBOX_STATE,
    SET_IS_LOADING,
    SET_USER
} = slice.actions;


/* Export  reducer */
export default slice.reducer;

/* Export All Selector */
export const dailogState = ({ entities }) => entities.app.dailog
export const isApiLoading = ({ entities }) => entities.app.isLoading
export const userData = ({ entities }) => entities.app.user