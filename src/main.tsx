import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // ✅ Import Bootstrap JS


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
