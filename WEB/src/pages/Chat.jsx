import { useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import VerticalTabs from "../components/Chat/VerticalTabs";

import { socket } from "../config/socket";
import { CircularProgress } from "@mui/material";
import BaseModal from "../components/Home/Modal/BaseModal";

export default function Chat() {
  const dispatch = useDispatch();

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