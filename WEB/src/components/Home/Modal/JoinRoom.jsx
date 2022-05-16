import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { roomList } from "../../../store/chat";
import { isApiLoading,userData } from "../../../store/app";
import { socketEvent } from "../../../config/socket";
import SubmitButton from "../../Login/SubmitButton";
import { socketInstance } from "../../../store/socket";
import { SET_ROOM } from "../../../store/chat";

export default function JoinRoom() {
  const [room, setRoom] = useState("");
  const rooms = useSelector(roomList);
  const isLoading = useSelector(isApiLoading)
  const dispatch = useDispatch()

  const socket = useSelector(socketInstance)
  let navigate = useNavigate()

  const handleChange = (event) => setRoom(event.target.value);
  const { id:userID } = useSelector(userData)

  const handleSubmit = () => {
    event.preventDefault();
    socket.emit(socketEvent.JOIN_ROOM,{room,userID})
      dispatch(SET_ROOM(room))
      navigate("/chat", { replace: true });
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
