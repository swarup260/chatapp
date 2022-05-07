import Box from "@mui/material/Box";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../chat.css";
import { chatRoomMessageList } from "../../store/chat";
import Message from "./Message";

export default function MessageListWindow() {

  const messagesEndRef = useRef(null);

  const messageList = useSelector(chatRoomMessageList("public"));


  useEffect(() => {
    messagesEndRef.current.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [messageList]);

  return (
    <Box ref={messagesEndRef}>
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
