import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Sidebar />} />
        </Routes>
    );
};

export default App;
