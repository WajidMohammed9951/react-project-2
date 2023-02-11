import ReactDom from "react-dom/client";
import React from 'react';

import './Index.css'
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)