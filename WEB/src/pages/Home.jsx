import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import LoadingContainer from "../components/Home/LoadingContainer";
import BaseModal from "../components/Home/Modal/BaseModal";
import VerticalTabs from "../components/Chat/VerticalTabs";
import { SET_SOCKET } from "../store/socket";
import { SET_DAILOGBOX_STATE,SET_IS_LOADING  } from "../store/app";
import func from "../utils/functions"

export default function Home() {

  const [isConnected,setIsConnected] = useState(false)

  const dispatch = useDispatch();
  /* socket.io example */
  /* intialize Socket Instance */
  const socket = io(`http://${window.location.hostname}:5000`);

  useEffect(() => {

    socket.on("connect", () => {
      if (!socket.connected) {
        throw new Error("NOT CONNNECTED 😪!!!")
      }

      setIsConnected(true)
      /* emit new event */
      dispatch(SET_SOCKET(socket))
      dispatch(SET_DAILOGBOX_STATE(func.setSuccessAlert("CONNECTED !!!")));
      dispatch(SET_IS_LOADING(false));
    })

    socket.on('disconnect', () => {
      /* emit new event */
      dispatch(SET_SOCKET(""))
      dispatch(SET_DAILOGBOX_STATE(func.setErrorAlert("NOT CONNNECTED 😪!!!")));
      dispatch(SET_IS_LOADING(true));
    });


    return () => {
      socket.off('connect');
      socket.off('disconnect');
    }
  }, [])

  if (!isConnected) {
    return (
      <LoadingContainer />
    );
  }

  if (isConnected) {
    return (
      <Container maxWidth="m">
        <BaseModal />
        <VerticalTabs />
      </Container>
    );
  }
}
