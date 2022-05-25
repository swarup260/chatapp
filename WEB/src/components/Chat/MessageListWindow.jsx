import Box from "@mui/material/Box";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../chat.css";
import { socketEvent, socket } from "../../config/socket";
import { activeRoom, chatRoomMessageList, SET_ROOM_MESSAGE } from "../../store/chat";
import Message from "./Message";

export default function MessageListWindow() {

  const messagesEndRef = useRef(null);

  const room = useSelector(activeRoom)
  const messageList = useSelector(chatRoomMessageList(room));
  const dispatch = useDispatch()

  useEffect(() => {
    socket.on(socketEvent.RECIEVE_MESSAGE, function (message) {
      dispatch(SET_ROOM_MESSAGE({ roomName:room,message}))
    })

    return () => {
      socket.off(socketEvent.RECIEVE_MESSAGE)
    }
  })

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
