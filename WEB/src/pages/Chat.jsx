import { useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { SET_DAILOGBOX_STATE  } from "../store/app";
import { useState } from "react"
import func from "../utils/functions";

export default function Chat() {
  const [isConnected, setIsConnected] = useState(false)
  const dispatch = useDispatch();

  if (!socket) {
    return <CircularProgress />;
  }

  if (!isConnected) {
    return <CircularProgress />
  }
  if (isConnected) {
    return (
      <Container maxWidth="m">
        <h1>HELLO </h1>
      </Container>
    )
  }
}