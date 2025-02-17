import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap first
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is included
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/_global.scss"; // Ensure global styles are imported

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
