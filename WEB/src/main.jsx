import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router";
import AlertDailogBox from "./components/AlertDailogBox"

import { Provider } from "react-redux";
import store from './store'

const container = document.querySelector("#root");
const root = createRoot(container);



root.render(
    <Provider store={store()}>
        <AlertDailogBox />
        <AppRouter />
    </Provider>
);
