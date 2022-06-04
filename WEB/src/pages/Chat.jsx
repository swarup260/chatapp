import { useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import { socket } from "../config/socket";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { SET_DAILOGBOX_STATE  } from "../store/app";
import { useState } from "react"
import func from "../utils/functions";

export default function Chat() {
  const [isConnected, setIsConnected] = useState(false)
  const dispatch = useDispatch();

  if (!socket) {
    return <CircularProgress />;
  }

  useEffect(() => {
    socket.on('connect', () => {
      console.log("CONNECTED")
      setIsConnected(true)
      /* emit new event */
      dispatch(SET_DAILOGBOX_STATE(func.setSuccessAlert("CONNECTED !!!")));
    })

    socket.on("ROOM_LIST",(rooms) => {
      console.log({rooms})
      rooms.forEach(room => dispatch(SET_ROOM(room)))
    })


    socket.on('disconnect', () => {
      setIsConnected(false)
      dispatch(SET_DAILOGBOX_STATE(func.setErrorAlert("NOT CONNECTED !!!")));
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  }, [socket])

  if (!isConnected) {
    return <CircularProgress />
  }
  if (isConnected) {
    return (
      <Container maxWidth="m">
        <h1>HELLO </h1>
      </Container>
    )
  }
}