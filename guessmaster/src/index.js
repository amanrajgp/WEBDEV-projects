// import React from "react";
// import Reactdom from "react-dom";
import "./index.css"
// import App from "./App"
// Reactdom.render(<App/>,document.getElementById("root"));
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);