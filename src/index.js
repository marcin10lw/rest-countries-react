import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { HashRouter } from "react-router-dom";
import { ToggleThemeProvider } from "./ColorModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ToggleThemeProvider>
          <App />
        </ToggleThemeProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
