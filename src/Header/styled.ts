import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.elementsColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
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
  font-weight: 800;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;
