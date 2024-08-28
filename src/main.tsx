import "./styles/index.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { SortingAlgorithmProvider } from "./context";
import { App } from "./app";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <SortingAlgorithmProvider>
         <App />
      </SortingAlgorithmProvider>
   </StrictMode>
);
