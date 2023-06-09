const theme = {
  breakpoints: {
    mobile: 780,
    tablet: 1200,
  },
};

export const lightTheme = {
  ...theme,
  colors: {
    textColor: "hsl(200, 15%, 8%)",
    inputColor: "hsl(0, 0%, 52%)",
    backgroundColor: "hsl(0, 0%, 98%)",
    elementsColor: "hsl(0, 0%, 100%)",
    shadowColor: "hsl(0, 0%, 65%)",
    countriesShadowColor: "hsl(0, 0%, 81%)",
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    textColor: "hsl(0, 0%, 100%)",
    inputColor: "hsl(0, 0%, 100%)",
    backgroundColor: "hsl(207, 26%, 17%)",
    elementsColor: "hsl(209, 23%, 22%)",
    shadowColor: "hsl(0, 0%, 3%)",
    countriesShadowColor: "hsl(0, 0%, 0% / 15%)",
  },
};

export const customTheme = lightTheme || darkTheme;
