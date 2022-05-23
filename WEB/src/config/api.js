import axios from "axios";
import {
    SET_IS_LOGIN,
    SET_TOKEN,
} from "../store/auth";

import { SET_IS_LOADING, SET_USER } from "../store/app"
import { SET_DAILOGBOX_STATE } from "../store/app";
import func from "../utils/functions";


const baseUrl = 'http://127.0.0.1:5000'

export const endpoints = {
    USERS: `${baseUrl}/users`,
    LOGIN: `${baseUrl}/users/login`,
    REGISTER: `${baseUrl}/users/register`
}


export const apiCall = async ({ endpoint, data, dispatch,navigate }) => {
    try {
        dispatch(SET_IS_LOADING(true));
        const result = await axios.post(endpoint, data);

        if (result.status != 200) {
            throw new Error("API ERROR");
        }

        if (!result.data.status) {
            throw new Error(result.data.message);
        }


        /* fetch user data  */

        const userResult = await axios.get(endpoints.USERS,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${result.data.token}`
            }
        })

        if (userResult.status != 200) {
            throw new Error("API ERROR");
        }

        dispatch(SET_DAILOGBOX_STATE(func.setSuccessAlert(result.data.message)));
        dispatch(SET_TOKEN(result.data.token));
        dispatch(SET_USER(userResult.data.data))
        dispatch(SET_IS_LOGIN(true));
        dispatch(SET_IS_LOADING(false));

        // redirect to home 

        navigate("/home", { replace: true });

    } catch (error) {
        dispatch(SET_DAILOGBOX_STATE(func.setErrorAlert(error)));
        dispatch(SET_IS_LOADING(false));
    }
}
