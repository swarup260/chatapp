import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import VerticalTabs from "../components/Chat/VerticalTabs";

import { initialSocketInstance } from "../config/socket";

export default function Chat(){

  const dispatch = useDispatch();

  useEffect(() => initialSocketInstance({ dispatch }), []);

 return(
    <Container maxWidth="m">
    <VerticalTabs/>
  </Container>
 )   
}