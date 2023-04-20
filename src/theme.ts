const theme = {
  breakpoints: {
    mobile: 767,
  },
};

export const lightTheme = {
  ...theme,
  colors: {
    textColor: "hsl(200, 15%, 8%)",
    inputColor: "hsl(0, 0%, 52%)",
    backgroundColor: "hsl(0, 0%, 98%)",
    elementsColor: "hsl(0, 0%, 100%)",
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    textColor: "hsl(0, 0%, 100%)",
    backgroundColor: "hsl(207, 26%, 17%)",
    elementsColor: "hsl(209, 23%, 22%)",
  },
};

export type ThemeProps = {
  theme: typeof lightTheme | typeof darkTheme;
};
