import styled from "styled-components";
import { ReactComponent as ArrowImage } from "./arrow.svg";
import { TRANSITION_DURATION, TRANSITION_TIMING } from "../../transition";

export const StyledSelectRegion = styled.div`
  position: relative;
  max-width: 200px;
  width: 100%;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  background-color: ${({ theme }) => theme.colors.elementsColor};
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 14px;
  border-radius: 5px;
  transition-property: background-color, color;
  transition-duration: ${TRANSITION_DURATION};
  transition-timing-function: ${TRANSITION_TIMING};

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
  background-color: transparent;
  cursor: pointer;
  transition: color ${TRANSITION_DURATION} ${TRANSITION_TIMING},
    opacity 140ms ease-in-out;

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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 10px;
    height: 10px;
  }
`;

export const SelectWindow = styled.ul`
  position: absolute;
  z-index: 99;
  background-color: inherit;
  box-shadow: inherit;
  border-radius: inherit;
  width: 100%;
  padding: 16px 24px;
  top: 56px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: initial;

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
