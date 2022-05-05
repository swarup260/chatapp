import Box from "@mui/material/Box";
import { useRef, useEffect } from "react";
import "../../chat.css";
import Message from "./Message";

export default function MessageListWindow() {
  const messagesEndRef = useRef(null);

  const messageList = new Array(50).fill(undefined).map((_, index) => ({
    message: `Message #${index}`,
    userID: index % 2 == 0 ? 1 : 0,
  }));

  useEffect(() => {
    messagesEndRef.current.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [messageList]);

  return (
    <Box
      ref={messagesEndRef}
    >
      <div className="chat">
        <div className="chat__wrapper">
          {messageList.map((messageObject, index) => (
            <Message {...messageObject} key={index} />
          ))}
        </div>
      </div>
    </Box>
  );
}
