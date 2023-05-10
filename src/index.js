import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "../public/style.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
