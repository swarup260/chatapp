import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import Joi from "joi";
import { useEffect } from "react";

import {
  isApiLoading,
  SET_DAILOGBOX_STATE,
  SET_IS_MODAL_OPEN,
  userData,
} from "../../../store/app";
import InputField from "../../InputField";
import SubmitButton from "../../Login/SubmitButton";
import functions from "../../../utils/functions";
import useSocket from "../../../hooks/useSocket.hook";
import { CREATE_ROOM } from "../../../store/socketEvent";
import socketEmitter from "../../../utils/socketEmitter";

export default function CreateRoom() {
  const isLoading = useSelector(isApiLoading);
  const user = useSelector(userData);
  const dispatch = useDispatch();

  const { socket } = useSocket();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const roomName = data.get("newRoom");
      if (roomName == "") return false;

      const room = { roomName };
      /* fire socket event */
      /* set room as active room */
      /* set room as empty string */
      socketEmitter
        .setSocket(socket)
        .createRoom({ room })
        .joinRoom({ room, user });

      dispatch(SET_IS_MODAL_OPEN(false))
      

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
