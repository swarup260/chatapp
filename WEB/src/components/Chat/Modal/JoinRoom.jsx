import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { roomList } from "../../../store/chat";
import { isApiLoading,SET_IS_MODAL_OPEN,userData } from "../../../store/app";
import SubmitButton from "../../Login/SubmitButton";
import socketEmitter from "../../../utils/socketEmitter";
import useSocket from "../../../hooks/useSocket.hook";

export default function JoinRoom() {
  const [room, setRoom] = useState("");
  const roomsObject = useSelector(roomList);
  const rooms = Object.values(roomsObject);
  const isLoading = useSelector(isApiLoading)
  const dispatch = useDispatch()

  const { socket } = useSocket();

  const handleChange = (event) => setRoom(event.target.value);
  const user = useSelector(userData)

  const handleSubmit = (event) => {
    event.preventDefault();
      dispatch(SET_IS_MODAL_OPEN(false))

      socketEmitter
        .setSocket(socket)
        .joinRoom({ room:roomsObject[room], user });



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
            <MenuItem value={room.id} key={index}>{room.roomName}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <SubmitButton title={"JOIN"} isLoading={isLoading} muiProps={{color:"success"}} />
    </Box>
  );
}
