import styled from "styled-components";
import { TRANSITION_DURATION, TRANSITION_TIMING } from "../../transition";
import { ReactComponent as GoBackImage } from "./go-back.svg";

export const StyledGoBack = styled.nav`
  margin-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 40px;
  }
`;

export const GoBackIcon = styled(GoBackImage)`
  width: 20px;
  height: 20px;
  transition: transform 120ms ease-in-out;
`;

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.elementsColor};
  color: ${({ theme }) => theme.colors.textColor};
  border: none;
  border-radius: 6px;
  padding: 10px 39px 10px 32px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  transition-property: background-color, color, opacity;
  transition-duration: ${TRANSITION_DURATION};
  transition-timing-function: ${TRANSITION_TIMING};

  &:hover {
    opacity: 0.75;

    ${GoBackIcon} {
      transform: translateX(-4px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
    gap: 8px;
    padding: 6px 24px;
  }
`;
