import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {
  const isLogin = false;

  if (!isLogin) {
    return <Login />;
  }

  return <Home />;
}
