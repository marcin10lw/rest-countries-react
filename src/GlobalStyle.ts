import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { ThemeProps } from "./theme";
import {
  TRANSITION_DURATION,
  TRANSITION_TIMING,
} from "./features/countries/transition";

export const GlobalStyle = createGlobalStyle<ThemeProps>`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    transition: background-color ${TRANSITION_DURATION} ${TRANSITION_TIMING};

    a {
      text-decoration: none;
    }

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
  }
`;
