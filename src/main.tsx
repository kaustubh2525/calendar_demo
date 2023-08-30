import "@/styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import CalendarWrapper from "./context/Calendar/CalendarWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CalendarWrapper>
        <App />
      </CalendarWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
