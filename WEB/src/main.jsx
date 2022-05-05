import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router";
import AlertDailogBox from "./components/AlertDailogBox"

import { Provider } from "react-redux";
import store from './store'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const createStore = store()
const persistor = persistStore(createStore);

const container = document.querySelector("#root");
const root = createRoot(container);



root.render(
    <Provider store={createStore}>
        <PersistGate persistor={persistor}>
            <AlertDailogBox />
            <AppRouter />
        </PersistGate>
    </Provider>
);
