import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { Add } from "@mui/icons-material";

import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { roomList } from "../../../store/chat";

export default function BaseModal() {

  const [isOpen,setIsOpen ] = useState(true)

  const rooms =  useSelector(roomList) 


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

  useEffect(()=>{
    rooms.length == 0 ? setIsOpen(true) : setIsOpen(false) 
  },[])

  return (
    <Container>
    <IconButton
        aria-label="add"
        size="large"
        variant="contained"
        sx={{
          position: "fixed",
          right: 0,
          bottom: 0,
          margin: "20px 20px",
          background: "green",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Add fontSize="inherit" />
      </IconButton>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            JOIN ROOM
          </Typography>
          <CreateRoom />
          <Divider sx={{ mt: 2 }}>OR</Divider>
          <JoinRoom />
        </Box>
      </Modal>
    </Container>
  );
}
