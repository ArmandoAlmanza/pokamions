import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HelloWorld from "./Components/HelloWorld/HelloWorld";

import "./styles/app.scss";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/expenses" element={<HelloWorld />} />

                {/* Path to no where */}
                <Route
                    path="*"
                    element={
                        <main className="NoFoundPage">
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);
