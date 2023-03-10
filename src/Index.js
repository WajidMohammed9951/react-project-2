import ReactDom from "react-dom/client";
import React from 'react';
import App from "./App.js";
import { AppProvider } from "./context.js";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <AppProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </AppProvider>
)