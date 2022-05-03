import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/Signup";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
