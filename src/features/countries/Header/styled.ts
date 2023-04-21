import styled from "styled-components";
import { TRANSITION_DURATION, TRANSITION_TIMING } from "../transition";

export const StyledHeader = styled.header`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  background-color: ${({ theme }) => theme.colors.elementsColor};
  transition: background-color ${TRANSITION_DURATION} ${TRANSITION_TIMING};
`;

export const HeaderWrapper = styled.div`
  padding: 24px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 30px 16px;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textColor};
  transition: color ${TRANSITION_DURATION} ${TRANSITION_TIMING};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;
