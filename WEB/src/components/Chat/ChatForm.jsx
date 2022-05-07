import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Joi from "joi";

import InputField from "../InputField";
import { useDispatch, useSelector } from "react-redux";
import { socketInstance } from "../../store/socket";
import { userData } from "../../store/app";
import { socketEvent } from "../../config/socket";

export default function ChataForm() {


  const socket = useSelector(socketInstance)
  const user = useSelector(userData)
  const { id } = user
  const dispatch = useDispatch()




  const sendMessageHandler = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const message = data.get("message");
      if (message == "") {
        return false;
      }

      socket.emit(socketEvent.SEND_MESSAGE, {
        message,
        id
      })

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Box
      sx={{ bgcolor: "#cfe8fc", height: "10vh", maxWidth: "800px", width: "100%", margin: "0 auto" }}
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
