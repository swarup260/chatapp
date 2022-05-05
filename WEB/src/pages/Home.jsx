import Container from "@mui/material/Container";
import MessageListWindow from "../components/Chat/MessageListWindow";
import ChataForm from "../components/Chat/ChatForm";



export default function Home() {

  return (
    <Container maxWidth="m">
      <MessageListWindow />
      <ChataForm />
    </Container>
  );
}
