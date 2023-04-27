import { ThemeProvider } from "styled-components";
import Countries from "./features/countries/Countries";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { useContext } from "react";
import { ColorModeContext } from "./ColorModeContext";

function App() {
  const { isDarkModeOn } = useContext(ColorModeContext);

  return (
    <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Countries />
    </ThemeProvider>
  );
}

export default App;
