import Box from "@mui/material/Box";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../chat.css";
import { socketEvent } from "../../config/socket";
import { userData } from "../../store/app";
import { chatRoomMessageList, SET_ROOM_MESSAGE } from "../../store/chat";
import { socketInstance } from "../../store/socket";
import Message from "./Message";

export default function MessageListWindow() {

  const messagesEndRef = useRef(null);

  const messageList = useSelector(chatRoomMessageList("public"));
  const dispatch = useDispatch()


  const socket = useSelector(socketInstance)
  const { id } = useSelector(userData)

  useEffect(() => {
    
    socket.on(socketEvent.RECIEVE_MESSAGE,function(message){
      // console.log({message})
      dispatch(SET_ROOM_MESSAGE({ roomName:"public",message}))
    })

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
