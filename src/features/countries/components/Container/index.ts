import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 0 80px;
  margin-inline: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 16px;
  }

  ${({ location }: { location?: string }) =>
    location === "countryPage" &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 0 28px;
      }
    `}
`;
