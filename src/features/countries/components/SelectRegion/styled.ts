import styled from "styled-components";
import { ReactComponent as ArrowImage } from "./arrow.svg";
import { TRANSITION_DURATION, TRANSITION_TIMING } from "../../transition";

export const StyledSelectRegion = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.elementsColor};
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 18px 24px;
  transition-property: background-color, color;
  transition-duration: ${TRANSITION_DURATION};
  transition-timing-function: ${TRANSITION_TIMING};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
    padding: 14px 24px;
    align-self: flex-start;
  }
`;

export const ArrowWrapper = styled.div`
  width: 12px;
  height: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 10px;
    height: 10px;
  }
`;

export const SelectRegionArrow = styled(ArrowImage)``;
