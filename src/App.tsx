import { useContext } from "react";

import { ToggleThemeContext } from "./features/countries/common/ColorModeContext";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Countries from "./features/countries/Countries";

function App() {
  const { theme } = useContext(ToggleThemeContext);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Countries />
    </ThemeProvider>
  );
}

export default App;
