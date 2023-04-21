import styled, { css } from "styled-components";
import { ReactComponent as ArrowImage } from "./arrow.svg";
import { TRANSITION_DURATION, TRANSITION_TIMING } from "../../transition";

export const StyledSelectRegion = styled.div`
  position: relative;
  max-width: 200px;
  width: 100%;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 14px;
  transition: color ${TRANSITION_DURATION} ${TRANSITION_TIMING};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
    align-self: flex-start;
  }
`;

export const OpenWindowButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 18px 24px;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.elementsColor};
  border-radius: 5px;
  cursor: pointer;
  transition-property: background-color, color, opacity;
  transition-duration: ${TRANSITION_DURATION};
  transition-timing-function: ${TRANSITION_TIMING};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 14px 24px;
  }

  &:hover {
    opacity: 0.75;
  }
`;

export const SelectRegionArrow = styled(ArrowImage)`
  width: 12px;
  height: 12px;
  transition: transform 300ms ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 10px;
    height: 10px;
  }

  ${({ open }: { open: boolean }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
`;

export const SelectWindow = styled.ul`
  position: absolute;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  background-color: ${({ theme }) => theme.colors.elementsColor};
  z-index: 99;
  border-radius: inherit;
  width: 100%;
  padding: 16px 24px;
  top: 56px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: background-color ${TRANSITION_DURATION} ${TRANSITION_TIMING};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    top: 46px;
  }
`;

export const SelectButton = styled.button`
  padding: 0;
  background-color: transparent;
  color: inherit;
  border: none;
  width: 100%;
  text-align: start;
  cursor: pointer;
  transition: opacity 140ms ease-in-out;

  &:hover {
    opacity: 0.75;
  }
`;
