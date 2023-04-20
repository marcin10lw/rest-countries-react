import styled from "styled-components";
import { IoMoonOutline } from "react-icons/io5";
import { ReactComponent as TogglerImage } from "./toggle-icon.svg";

export const TogglerWrapper = styled.div``;

export const TogglerButton = styled.button`
  padding: 0;
  font-weight: 600;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
  }
`;

export const TogglerIcon = styled(TogglerImage)`
  width: 20px;
  height: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
    height: 216x;
  }
`;
