import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Layout />
        <App />
    </BrowserRouter>
);
