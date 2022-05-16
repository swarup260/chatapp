import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { isApiLoading, userData } from "../../../store/app";
import InputField from "../../InputField";
import SubmitButton from "../../Login/SubmitButton";
import { socketInstance } from "../../../store/socket";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

import { socketEvent } from "../../../config/socket";
import { SET_ROOM } from "../../../store/chat";

export default function CreateRoom() {
  const isLoading = useSelector(isApiLoading);
  const dispatch = useDispatch();
  const { id:userID } = useSelector(userData)
  let navigate = useNavigate()

  const socket = useSelector(socketInstance)

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const room = data.get("newRoom");
      if (room == "") {
        return false;
      }

      socket.emit(socketEvent.CREATE_NEW_ROOM,{room,userID})
      dispatch(SET_ROOM(room))
      navigate("/chat", { replace: true });

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column" }}
      component="form"
      onSubmit={handleSubmit}
    >
      <InputField
        label="Create New Room"
        name="newRoom"
        validate={Joi.string()
          .required({ tlds: { allow: false } })
          .min(5)}
      />
      <SubmitButton title={"Create"} isLoading={isLoading} />
    </Box>
  );
}
