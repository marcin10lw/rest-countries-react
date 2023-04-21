import styled from "styled-components";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";

export const StyledError = styled.section`
  text-align: center;
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const ErrorIcon = styled(BiError)`
  height: 40px;
  width: 40px;
`;

export const ErrorTitle = styled.h2`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.p`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const ErrorLink = styled(Link)`
  font-weight: 600;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 18px;
  text-decoration: underline;
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
