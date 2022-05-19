import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import VerticalTabs from "../components/Chat/VerticalTabs";

import { initialSocketInstance } from "../config/socket";
import { socketInstance } from "../store/socket";
import { CircularProgress } from "@mui/material";
import BaseModal from "../components/Home/Modal/BaseModal";

export default function Chat() {
  const socket = useSelector(socketInstance);
  const dispatch = useDispatch();

  useEffect(() => initialSocketInstance({ dispatch }), []);

  if (!socket) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="m">
      <BaseModal/>
      <VerticalTabs />
    </Container>
  );
}