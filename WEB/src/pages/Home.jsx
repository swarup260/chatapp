import Container from "@mui/material/Container";
import MessageListWindow from "../components/Chat/MessageListWindow";
import ChataForm from "../components/Chat/ChatForm";
import { useDispatch, useSelector } from "react-redux";
import { socketInstance } from "../store/socket";
import { useEffect } from "react";
import { initialSocketInstance } from "../config/socket"
import { CircularProgress } from "@mui/material";
import { isApiLoading } from "../store/app";



export default function Home() {

  const socket = useSelector(socketInstance)
  const dispatch = useDispatch()

  useEffect(() => initialSocketInstance({ dispatch }), [])


  if (!socket || !socket.connected) {
    return (
      <Container maxWidth="m">
        < CircularProgress />
      </Container>
    );
  }

  if (socket && socket.connected) {
    return (
      <Container maxWidth="m">
        <MessageListWindow />
        <ChataForm />
      </Container>
    );
  }

}
