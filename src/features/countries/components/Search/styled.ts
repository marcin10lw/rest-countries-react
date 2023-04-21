import styled from "styled-components";
import { ReactComponent as SearchImage } from "./search.svg";
import { TRANSITION_DURATION, TRANSITION_TIMING } from "../../transition";

export const StyledSearch = styled.div`
  max-width: 480px;
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.inputColor};
  transition: color ${TRANSITION_DURATION} ${TRANSITION_TIMING};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 100%;
  }
`;

export const SearchIconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.elementsColor};
  padding-left: 32px;
  border-radius: 5px 0 0 5px;
  display: flex;
  align-items: center;
  margin-right: -1px;
  transition: background-color ${TRANSITION_DURATION} ${TRANSITION_TIMING};
`;

export const SearchIcon = styled(SearchImage)`
  width: 18px;
  height: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
    height: 16px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.elementsColor};
  color: ${({ theme }) => theme.colors.inputColor};
  padding: 18px 0 18px 24px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 0 5px 5px 0;
  border: none;
  font-size: 14px;
  transition-property: background-color, color;
  transition-duration: ${TRANSITION_DURATION};
  transition-timing-function: ${TRANSITION_TIMING};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputColor};
    transition: color ${TRANSITION_DURATION} ${TRANSITION_TIMING};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 14px 0 14px 26px;
    font-size: 12px;
  }
`;
