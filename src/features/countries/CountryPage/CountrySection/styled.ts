import styled from "styled-components";

export const StyledCountrySection = styled.section`
  margin-top: 80px;
  padding-bottom: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 64px;
  }
`;
