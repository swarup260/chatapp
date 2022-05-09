import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { isApiLoading } from "../../../store/app";
import InputField from "../../InputField";
import SubmitButton from "../../Login/SubmitButton";
import { notificationSocketInstance,socketInstance } from "../../../store/socket";
import Joi from "joi";
import { socketEvent } from "../../../config/socket";

export default function CreateRoom() {
  const isLoading = useSelector(isApiLoading);
  const dispatch = useDispatch();

  const notificationSocket = useSelector(notificationSocketInstance)
  const socket = useSelector(socketInstance)

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const roomName = data.get("newRoom");
      if (roomName == "") {
        return false;
      }

      console.log({roomName})

      notificationSocket.emit(socketEvent.CREATE_NEW_ROOM,roomName)
      socket.emit(socketEvent.CREATE_NEW_ROOM,roomName)

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
