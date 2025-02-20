import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import BrowserRouter
import "./index.css";
import App from "./App";
import { CurrentListProvider, CurrentSongProvider } from "./helpers/CurrentListContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentListProvider>
      <CurrentSongProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
      </CurrentSongProvider>
    </CurrentListProvider>
  </React.StrictMode>
);

reportWebVitals();
