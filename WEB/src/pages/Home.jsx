import { useDispatch, useSelector } from "react-redux";
import { socketInstance } from "../store/socket";
import { useEffect } from "react";
import { initialSocketInstance } from "../config/socket";

import LoadingContainer from "../components/Home/LoadingContainer";
import BaseModal from "../components/Home/Modal/BaseModal";

export default function Home() {

  const socket = useSelector(socketInstance);
  const dispatch = useDispatch();

  useEffect(() => initialSocketInstance({ dispatch }), []);

  useEffect(() =>{
    /* fetch user room  */
    /* if null show modal  */
    /* else chat move to chat screen */
    // window.history.pushState("", undefined, "/chat")
  })

  if (!socket || !socket.connected) {
    return (
      <LoadingContainer/>
    );
  }

  if (socket && socket.connected) {
    return (
      <BaseModal/>
    );
  }
}
