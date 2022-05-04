import { useSelector } from "react-redux"

import Login from "./pages/Login";
import Home from "./pages/Home";
import { isUserLogin } from "./store/auth";


export default function App() {

  const isLogin = useSelector(isUserLogin)

  if (!isLogin) {
    return <Login />;
  }

  return <Home />;
}
