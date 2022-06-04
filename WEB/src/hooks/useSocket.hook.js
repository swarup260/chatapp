import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Manager } from "socket.io-client";

import { SET_DAILOGBOX_STATE } from "../store/app";
import functions from "../utils/functions";

export default function useSocket() {
    const [isConnected, setIsConnected] = useState(false)

    const dispatch = useDispatch()


    const manager = new Manager(`http://${window.location.hostname}:5000`)

    const socket = manager.socket("/")

    const notification = manager.socket("/notification")
    const message = manager.socket("/message")
    const chat = manager.socket("/chat")

    useEffect(() => {

        socket.on("connect", () => {
            setIsConnected(true)
            dispatch(SET_DAILOGBOX_STATE(functions.setSuccessAlert("CONNECTED !!")))
        })

        socket.on("disconnect", () => {
            setIsConnected(false)
            dispatch(SET_DAILOGBOX_STATE(functions.setErrorAlert({ message: "NOT CONNECTED!" })))
        })


        chat.on("ROOM_LIST", (payload) => {
            console.log({ payload })
        })

        chat.on("NEW_USER_JOIN", (payload) => {
            console.log({ payload })
        })

        message.on("RECEIVE_MSG", (payload) => {
            console.log({ payload })
        })

        chat.on("ACTIVE_USERS", (payload) => {
            console.log({ payload })
        })


        return () => {
            socket.off("connect")
            socket.off("disconnect")
            notification.off("NEW_USER_JOIN")
            message.off("RECEIVE_MSG")
            chat.off("ROOM_LIST")
            chat.off("ACTIVE_USERS")
        }

    }, [isConnected])

    return {
        isConnected,
        notification,
        chat,
        message
    }

} 