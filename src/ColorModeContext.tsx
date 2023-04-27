import { PropsWithChildren, useEffect, useState } from "react";
import { createContext } from "react";

const getInitialState = () => {
  const localStorageTheme = JSON.parse(localStorage.getItem("theme") as string);

  if (localStorageTheme === null) {
    return false;
  }

  return localStorageTheme;
};

type ColorModeContextState = {
  isDarkModeOn: boolean;
  toggleIsDarkModeOn: () => void;
};

export const ColorModeContext = createContext({} as ColorModeContextState);

export const ColorModeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(getInitialState());

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkModeOn));
  }, [isDarkModeOn]);

  const toggleIsDarkModeOn = () => {
    setIsDarkModeOn((isDarkModeOn) => !isDarkModeOn);
  };

  const value = {
    isDarkModeOn,
    toggleIsDarkModeOn: toggleIsDarkModeOn,
  };

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};
