import styled from "styled-components";

export const Container = styled.main`
  padding: 48px 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 24px 55px;
  }
`;
