import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { HashRouter } from "react-router-dom";
import { ToggleThemeProvider } from "./ColorModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CountriesFilterParamsProvider } from "./features/countries/CountriesFilterParamsContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HashRouter>
          <ToggleThemeProvider>
            <CountriesFilterParamsProvider>
              <App />
            </CountriesFilterParamsProvider>
          </ToggleThemeProvider>
        </HashRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
