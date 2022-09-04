import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyledEngineProvider } from "@mui/material";
import { NavProvider } from "./context/nav-context";
import { DetailsProvider } from "./context/details-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <NavProvider>
        <DetailsProvider>
          <App />
        </DetailsProvider>
      </NavProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
