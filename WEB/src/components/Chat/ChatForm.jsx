import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Joi from "joi";

import InputField from "../InputField";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../store/app";
import { socketEvent } from "../../config/socket";
import { useState } from "react";
import { SET_ROOM_MESSAGE } from "../../store/chat";
import { socket } from "../../config/socket";

export default function ChataForm() {
  const [messageBody, setMessageBody] = useState("");
  
  const { id } = useSelector(userData);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => setMessageBody(e.target.value);

  const sendMessageHandler = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const messageBody = data.get("message");
      if (messageBody == "") {
        return false;
      }

      const message = {
        message: messageBody,
        id,
      }
      socket.emit(socketEvent.SEND_MESSAGE, message);

      dispatch(SET_ROOM_MESSAGE({ roomName: "public", message }))

      setMessageBody("")

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#cfe8fc",
        height: "10vh",
        maxWidth: "800px",
        width: "100%",
        margin: "0 auto",
      }}
      component="form"
      onSubmit={sendMessageHandler}
      noValidate
    >
      <div className="flex justify-between">
        <InputField
          name="message"
          label="Message"
          type="message"
          id="message"
          size="small"
          sx={{ margin: "14px" }}
          validate={Joi.string().required()}
          onChange={onChangeHandler}
          value={messageBody}
        />
        <Button
          variant="contained"
          color="success"
          size="small"
          sx={{ margin: "14px" }}
          type="submit"
        >
          Send
        </Button>
      </div>
    </Box>
  );
}
