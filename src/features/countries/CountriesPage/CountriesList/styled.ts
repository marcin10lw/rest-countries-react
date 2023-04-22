import styled from "styled-components";

export const StyledCountriesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  justify-content: center;
  gap: 75px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: repeat(auto-fill, minmax(0, 264px));
  }
`;
