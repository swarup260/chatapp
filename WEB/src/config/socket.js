import { io } from "socket.io-client";

import { SET_IS_LOADING } from "../store/app";
import { SET_SOCKET } from "../store/socket";
import { SET_DAILOGBOX_STATE } from "../store/app";
import func from "../utils/functions";

export const socketEvent = {
    SEND_MESSAGE: 'SEND_MESSAGE',
    RECIEVE_MESSAGE: 'RECIEVE_MESSAGE',
    BOARDCAST_MESSAGE: 'BOARDCAST_MESSAGE',
    USER_CONNECTED: 'USER_CONNECTED'
}


export const initialSocketInstance = ({ dispatch }) => {
    try {
        dispatch(SET_IS_LOADING(true));
        /* intialize Socket Instance */
        const socket = io(`http://${window.location.hostname}:5000`);

        socket.on("connect",() => {
            
            if (!socket.connected) {
                throw new Error("NOT CONNNECTED !!!")
            }

            /* emit new event */
            dispatch(SET_SOCKET(socket))
            dispatch(SET_DAILOGBOX_STATE(func.setSuccessAlert("CONNECTED !!!")));
            dispatch(SET_IS_LOADING(false));
        })
        
        return () => socket.close();
    } catch (error) {
        dispatch(SET_DAILOGBOX_STATE(func.setErrorAlert(error)));
        dispatch(SET_IS_LOADING(false));
    }
}

