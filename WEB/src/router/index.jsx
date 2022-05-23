import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/Signup";
import NotFound from '../pages/NotFound';
import RequireAuth from "../components/RequireAuth";
import Home from "../pages/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="*" element={<NotFound/> }/>
      </Routes>
    </BrowserRouter>
  );
}
