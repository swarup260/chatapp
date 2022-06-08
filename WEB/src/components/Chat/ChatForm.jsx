import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Joi from "joi";

import InputField from "../InputField";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../store/app";
import { useState } from "react";
import socketEmitter from "../../utils/socketEmitter";
import useSocket from "../../hooks/useSocket.hook";
import { activeRoom } from "../../store/chat";

export default function ChataForm() {
  const { socket } = useSocket();

  const [messageBody, setMessageBody] = useState("");

  const room = useSelector(activeRoom);

  const user = useSelector(userData);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => setMessageBody(e.target.value);

  const sendMessageHandler = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const message = data.get("message");
      if (message == "") {
        return false;
      }

      console.log({ message });

      socketEmitter.setSocket(socket).sendMsg({ message, user, room });

      setMessageBody("");
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
