import { Container } from '@mui/material'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/Signup";
import Chat from "../pages/Chat";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/chat" element={<Chat />} />
        <Route
          path="*"
          element={
            <Container fixed className="m-5">
              <p>There's nothing here!</p>
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
