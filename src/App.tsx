import { ThemeProvider } from "styled-components";
import Countries from "./features/countries/Countries";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { selectIsDarkModeOn } from "./features/countries/themeSlice";

function App() {
  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  return (
    <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Countries />
    </ThemeProvider>
  );
}

export default App;
