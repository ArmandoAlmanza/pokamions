import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./Components/Header/Header";
import Pokemon from "./Components/Pokemons/Pokemons";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/pokemon" element={<Pokemon />} />

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
