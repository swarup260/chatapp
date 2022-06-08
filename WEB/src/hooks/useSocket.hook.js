import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";

import { SET_DAILOGBOX_STATE } from "../store/app";
import { ADD_NEW_ROOM } from "../store/chat";
import functions from "../utils/functions";

export default function useSocket() {
    const [isConnected, setIsConnected] = useState(false)

    const dispatch = useDispatch()


    const socket = io(`http://${window.location.hostname}:5000`)

    useEffect(() => {

        socket.on("connect", () => {
            setIsConnected(true)
            dispatch(SET_DAILOGBOX_STATE(functions.setSuccessAlert("CONNECTED !!")))
        })

        socket.on("disconnect", () => {
            setIsConnected(false)
            dispatch(SET_DAILOGBOX_STATE(functions.setErrorAlert({ message: "NOT CONNECTED!" })))
        })


        socket.on("ROOM_LIST", (payload) => {
            console.log({ payload })
            payload.forEach(room => {
                dispatch(ADD_NEW_ROOM(room))
            });
        })


        socket.on("NEW_USER_JOIN", (payload) => {
            console.log({ payload })
        })

        socket.on("RECEIVE_MSG", (payload) => {
            console.log({ payload })
        })

        socket.on("ACTIVE_USERS", (payload) => {
            console.log({ payload })
        })


        return () => {
            socket.off("connect")
            socket.off("disconnect")
            socket.off("NEW_USER_JOIN")
            socket.off("RECEIVE_MSG")
            socket.off("ROOM_LIST")
            socket.off("ACTIVE_USERS")
        }

    }, [isConnected])

    return {
        isConnected,
        socket
    }

} 