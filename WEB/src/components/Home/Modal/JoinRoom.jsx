// import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { roomList } from "../../../store/chat";
import { isApiLoading,isModalOpen,SET_IS_MODAL_OPEN,userData } from "../../../store/app";
import { socketEvent,socket } from "../../../config/socket";
import SubmitButton from "../../Login/SubmitButton";
import { SET_ROOM } from "../../../store/chat";

export default function JoinRoom() {
  const [room, setRoom] = useState("");
  const rooms = useSelector(roomList);
  const isLoading = useSelector(isApiLoading)
  const isOpen = useSelector(isModalOpen)
  const dispatch = useDispatch()

  // let navigate = useNavigate()
  const handleChange = (event) => setRoom(event.target.value);
  const { id:userID } = useSelector(userData)

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit(socketEvent.JOIN_ROOM,{room,userID})
      dispatch(SET_ROOM(room))
      dispatch(SET_IS_MODAL_OPEN(false))
      // navigate("/chat", { replace: true });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} component="form" onSubmit={handleSubmit} noValidate>
      <FormControl required sx={{ mt: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">
          Existing Rooms
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={room}
          label="Existing Rooms"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {rooms.map((room,index) => (
            <MenuItem value={room} key={index}>{room}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <SubmitButton title={"JOIN"} isLoading={isLoading} muiProps={{color:"success"}} />
    </Box>
  );
}
