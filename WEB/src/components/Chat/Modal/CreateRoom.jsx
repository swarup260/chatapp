import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import Joi from "joi";

import {
  isApiLoading,
  SET_DAILOGBOX_STATE,
  userData,
} from "../../../store/app";
import InputField from "../../InputField";
import SubmitButton from "../../Login/SubmitButton";
import functions from "../../../utils/functions";
import useSocket from "../../../hooks/useSocket.hook";
import { CREATE_ROOM } from "../../../store/socketEvent";

export default function CreateRoom() {
  const isLoading = useSelector(isApiLoading);
  const user = useSelector(userData);
  const dispatch = useDispatch();

  const { chat: socket } = useSocket();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const roomName = data.get("newRoom");
      if (roomName == "") return false;

      const room = { roomName };
      console.log({ room, user });
      /* fire socket event */
      dispatch(CREATE_ROOM({ room, user ,socket }))
      /* set room as active room */
      /* set room as empty string */
    } catch (error) {
      dispatch(SET_DAILOGBOX_STATE(functions.setErrorAlert(error)));
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
