import styled, { keyframes } from "styled-components";

export const LoaderWrapper = styled.div`
  margin: 50px auto;
  text-align: center;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  }

  50% {
  stroke-dasharray: 90, 200;
  stroke-dashoffset: -35px;
  }

  100% {
  stroke-dashoffset: -125px;
  }
`;

export const StyledLoader = styled.svg`
  width: 3.25em;
  transform-origin: center;
  animation: ${rotate} 2s linear infinite;

  circle {
    fill: none;
    stroke: hsl(214, 97%, 59%);
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;
