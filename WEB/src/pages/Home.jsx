import { useDispatch, useSelector } from "react-redux";
import { socketInstance } from "../store/socket";
import { useEffect } from "react";
import { initialSocketInstance } from "../config/socket";
import Container from "@mui/material/Container";

import LoadingContainer from "../components/Home/LoadingContainer";
import BaseModal from "../components/Home/Modal/BaseModal";
import VerticalTabs from "../components/Chat/VerticalTabs";

export default function Home() {

  const socket = useSelector(socketInstance);
  const dispatch = useDispatch();

  useEffect(() => initialSocketInstance({ dispatch }), []);

  if (!socket || !socket.connected) {
    return (
      <LoadingContainer />
    );
  }

  if (socket && socket.connected) {
    return (
      <Container maxWidth="m">
        <BaseModal />
        <VerticalTabs />
      </Container>
    );
  }
}
