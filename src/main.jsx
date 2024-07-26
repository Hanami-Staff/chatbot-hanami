// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Sidebar } from "./components";
import { BotProvider } from "./context/BotContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BotProvider>
      <>
        <Sidebar />
        <App />
      </>
    </BotProvider>
  // </React.StrictMode>
);
