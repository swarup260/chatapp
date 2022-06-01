import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import LoadingContainer from "../components/Home/LoadingContainer";
import BaseModal from "../components/Home/Modal/BaseModal";
import VerticalTabs from "../components/Chat/VerticalTabs";
import { SET_DAILOGBOX_STATE  } from "../store/app";
import func from "../utils/functions";
import { socket } from "../config/socket";
import { SET_ROOM } from "../store/chat";

export default function Home() {

  const [isConnected, setIsConnected] = useState(false)
  const dispatch = useDispatch()

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
    return <LoadingContainer />
  }
  if (isConnected) {
    return (
      <Container maxWidth="m">
        <BaseModal />
        <VerticalTabs />
      </Container>
    )
  }
}