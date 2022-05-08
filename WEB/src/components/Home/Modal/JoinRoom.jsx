import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";


import { useState } from "react";
import { useSelector } from "react-redux";

import { roomList } from "../../../store/chat";
import { isApiLoading } from "../../../store/app";

import SubmitButton from "../../Login/SubmitButton";

export default function JoinRoom() {
  const [room, setRoom] = useState("");
  const rooms = useSelector(roomList);
  const isLoading = useSelector(isApiLoading)

  const handleChange = (event) => setRoom(event.target.value);

  const handleSubmit = () => {};

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
          {rooms.map((room) => (
            <MenuItem value={room}>{room}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <SubmitButton title={"JOIN"} isLoading={isLoading} muiProps={{color:"success"}} />
    </Box>
  );
}
