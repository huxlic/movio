import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'react-loading-skeleton/dist/skeleton.css'
import "./index.css";
import "react-circular-progressbar/dist/styles.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/movio">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
