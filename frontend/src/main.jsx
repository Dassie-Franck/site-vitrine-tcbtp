import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { AppProviders } from "./presentation/app/providers/AppProviders";
import { App } from "./presentation/app/App";
import "./index.css";



const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <AppProviders>
        <App />
      </AppProviders>
    </HelmetProvider>
  </StrictMode>
);