import { createRoot } from "react-dom/client";
import AppRouter from "./router";
import "./index.css";

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<AppRouter />);
