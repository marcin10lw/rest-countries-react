import styled from "styled-components";
import { TRANSITION_DURATION } from "../../transition";

export const StyledCountry = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.elementsColor};
  color: ${({ theme }) => theme.colors.textColor};
  transition-property: background-color, color, transform, box-shadow;
  transition-duration: ${TRANSITION_DURATION};
  transition-timing-function: ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.shadowColor};
  }
`;

export const CountryImage = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

export const CountryInfo = styled.div`
  padding: 24px 24px 46px;
`;

export const CountryName = styled.h2`
  font-weight: 800;
  font-size: 18px;
  margin: 0;
`;

export const CountryDetails = styled.div`
  margin-top: 16px;
`;

export const CountryDetail = styled.div`
  margin-top: 8px;
  font-weight: 600;
  font-size: 14px;

  span {
    font-weight: 300;
  }
`;
