import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { socketInstance } from "../store/socket";
import { useEffect } from "react";
import { initialSocketInstance } from "../config/socket";
import { CircularProgress } from "@mui/material";
import { isApiLoading } from "../store/app";
import VerticalTabs from "../components/Chat/VerticalTabs";
import InputField from "../components/InputField";
import { useState } from "react";
import { Button } from "@mui/material";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function Home() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const socket = useSelector(socketInstance);
  const dispatch = useDispatch();

  useEffect(() => initialSocketInstance({ dispatch }), []);

  if (!socket || !socket.connected) {
    return (
      <Container maxWidth="m">
        <CircularProgress />
      </Container>
    );
  }

  if (socket && socket.connected) {
    return (
      <Container>
        {/* <VerticalTabs/> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ADD NEW ROOM
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <InputField label="Room Name" />
              <Button variant="contained" color="success">
                ADD
              </Button>
            </Typography>
          </Box>
        </Modal>
      </Container>
    );
  }
}
