import { io } from "socket.io-client";

import { SET_IS_LOADING } from "../store/app";
import { SET_SOCKET,SET_NOTIFICATION_SOCKET } from "../store/socket";
import { SET_DAILOGBOX_STATE } from "../store/app";
import func from "../utils/functions";


export const channels = {
    NOTIFICATION: "notification"
}

export const socketEvent = {
    SEND_MESSAGE: 'SEND_MESSAGE',
    RECIEVE_MESSAGE: 'RECIEVE_MESSAGE',
    BOARDCAST_MESSAGE: 'BOARDCAST_MESSAGE',
    USER_CONNECTED: 'USER_CONNECTED',
    CREATE_NEW_ROOM: 'CREATE_NEW_ROOM',
    JOIN_ROOM: "JOIN_ROOM"
}




export const initialSocketInstance = ({ dispatch }) => {
    try {
        dispatch(SET_IS_LOADING(true));
        /* intialize Socket Instance */
        const socket = io(`http://${window.location.hostname}:5000`);
        const notificationSocket = io(`http://${window.location.hostname}:5000/${channels.NOTIFICATION}`);

        // if (socket.disconnected) {
        //     throw new Error("SERVER DOWN 😪!!!")
        // }

        notificationSocket.on("connect",() => dispatch(SET_NOTIFICATION_SOCKET(notificationSocket)))

        socket.on("connect", () => {

            if (!socket.connected) {
                throw new Error("NOT CONNNECTED 😪!!!")
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

