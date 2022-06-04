import LoadingContainer from "../components/Home/LoadingContainer";
import ChatWindow from "../components/Chat/ChatWindow";
import useSocket from "../hooks/useSocket.hook";
import AppHeader from "../components/AppHeader";

export default function Home() {

  const { isConnected } = useSocket()
  return (
    <>
      <AppHeader />
      {isConnected ? <ChatWindow /> : <LoadingContainer />}
    </>
  )
}