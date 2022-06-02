import { io } from "socket.io-client";

/* socket.io example */
/* intialize Socket Instance */
export const socket = io(`http://${window.location.hostname}:5000`);
export const messageSocket = io(`http://${window.location.hostname}:5000/message`);
export const chatSocket = io(`http://${window.location.hostname}:5000/chat`);
export const notificationSocket = io(`http://${window.location.hostname}:5000/notification`);
