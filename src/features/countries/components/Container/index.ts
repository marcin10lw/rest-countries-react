import styled from "styled-components";

export const Container = styled.main`
  padding: 0 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 55px;
  }
`;
