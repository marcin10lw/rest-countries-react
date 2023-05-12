import { ThemeProvider } from "styled-components";
import Countries from "./features/countries/Countries";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { useContext } from "react";
import { ToggleThemeContext } from "./features/countries/common/ColorModeContext";

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
