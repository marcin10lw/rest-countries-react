import { PropsWithChildren, useEffect, useState } from "react";
import { createContext } from "react";
import usePrefersColorScheme from "use-prefers-color-scheme";

const getInitialState = (initialValue: string) => {
  const localStorageTheme = JSON.parse(localStorage.getItem("theme") as string);

  if (localStorageTheme === null) {
    return initialValue;
  }

  return localStorageTheme;
};

type ToggleThemeContextState = {
  theme: string;
  toggleTheme: () => void;
};

export const ToggleThemeContext = createContext({} as ToggleThemeContextState);

export const ToggleThemeProvider = ({ children }: PropsWithChildren) => {
  const prefersColorScheme = usePrefersColorScheme();
  const [theme, setTheme] = useState<string>(
    getInitialState(prefersColorScheme)
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => {
      if (theme === "dark") return "light";

      return "dark";
    });
  };

  const value = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ToggleThemeContext.Provider value={value}>
      {children}
    </ToggleThemeContext.Provider>
  );
};
