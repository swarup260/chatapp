import { io } from "socket.io-client";

export const channels = {
    NOTIFICATION: "notification"
}

export const socketEvent = {
    SEND_MESSAGE: 'SEND_MESSAGE',
    RECIEVE_MESSAGE: 'RECIEVE_MESSAGE',
    BOARDCAST_MESSAGE: 'BOARDCAST_MESSAGE',
    USER_CONNECTED: 'USER_CONNECTED',
    CREATE_NEW_ROOM: 'CREATE_NEW_ROOM',
    JOIN_ROOM: "JOIN_ROOM",
    NEW_JOIN:"NEW_JOIN"
}


/* socket.io example */
/* intialize Socket Instance */
export const socket = io(`http://${window.location.hostname}:5000`);
export const notificationSocket = io(`http://${window.location.hostname}:5000/notification`);
