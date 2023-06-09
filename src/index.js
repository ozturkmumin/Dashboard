import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/reset.scss";
import "./scss/styles.scss";

import App from "./App";
import { AreaChart } from "@tremor/react";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
  
);
