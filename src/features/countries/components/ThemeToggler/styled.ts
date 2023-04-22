import styled from "styled-components";
import { ReactComponent as TogglerImage } from "./toggle-icon.svg";
import { TRANSITION_DURATION, TRANSITION_TIMING } from "../../transition";

export const TogglerWrapper = styled.div``;

export const TogglerButton = styled.button`
  padding: 0;
  font-weight: 600;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
  transition: color ${TRANSITION_DURATION} ${TRANSITION_TIMING};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
  }
`;

export const ToggleIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TogglerIcon = styled(TogglerImage)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.textColor};
  transition: color 1s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
    height: 216x;
  }
`;
