import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LinkContextProvider } from "./Context/LinkContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LinkContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LinkContextProvider>
  </React.StrictMode>
);
