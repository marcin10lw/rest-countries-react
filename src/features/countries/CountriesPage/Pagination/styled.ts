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

  ${({ active }: { active: boolean }) =>
    active &&
    css`
      outline: 1px solid ${({ theme }) => theme.colors.textColor};
    `}
`;
