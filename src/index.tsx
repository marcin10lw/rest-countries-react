import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ToggleThemeProvider } from "./features/countries/common/ColorModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CountriesFilterParamsProvider } from "./features/countries/common/CountriesFilterParamsContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <ToggleThemeProvider>
          <CountriesFilterParamsProvider>
            <App />
          </CountriesFilterParamsProvider>
        </ToggleThemeProvider>
      </HashRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
