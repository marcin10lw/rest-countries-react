import styled, { css } from "styled-components";
import { TRANSITION_DURATION, TRANSITION_TIMING } from "../../transition";

export const StyledPagination = styled.nav`
  margin-top: 60px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 6px;
  }
`;

export const PaginationButton = styled.button`
  padding: 8px 0;
  min-width: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.elementsColor};
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 14px;
  cursor: pointer;
  transition-property: background-color, color, opacity;
  transition-duration: ${TRANSITION_DURATION};
  transition-timing-function: ${TRANSITION_TIMING};

  &:hover {
    opacity: 0.75;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 10px;
    min-width: 22px;
  }

  ${({ active }: { active: boolean }) =>
    active &&
    css`
      outline: 1px solid ${({ theme }) => theme.colors.textColor};
    `}
`;
