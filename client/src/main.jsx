import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./chat/index.css"; // Ensure ChatApp styles are included

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
