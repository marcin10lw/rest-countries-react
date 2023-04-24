import styled, { css } from "styled-components";
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

  ${({ location }: { location?: string }) =>
    location === "countryPage" &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      background-color: transparent;
      align-items: center;
      gap: 144px;

      &:hover {
        transform: none;
        box-shadow: none;
      }
    `}
`;

export const CountryImage = styled.img`
  width: 100%;
  aspect-ratio: 5 / 3;
  object-fit: cover;
  border-radius: 5px 5px 0 0;

  ${({ location }: { location?: string }) =>
    location === "countryPage" &&
    css`
      border-radius: 10px;
    `}
`;

export const CountryInfo = styled.div`
  padding: 24px 24px 46px;

  ${({ location }: { location?: string }) =>
    location === "countryPage" &&
    css`
      padding: 0;
    `}
`;

export const CountryName = styled.h2`
  font-weight: 800;
  font-size: 18px;
  margin: 0;

  ${({ location }: { location?: string }) =>
    location === "countryPage" &&
    css`
      font-size: 32px;
    `}
`;

export const CountryDetails = styled.div`
  font-size: 14px;
  display: grid;
  grid-template-columns: auto;
  gap: 8px;
  margin-top: 16px;

  ${({ location }: { location?: string }) =>
    location === "countryPage" &&
    css`
      grid-template-columns: repeat(2, 1fr);
      font-size: 16px;
      margin-top: 24px;
      gap: 16px;
    `}
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ location }: { location?: string }) =>
    location === "countryPage" &&
    css`
      gap: 14px;
    `}
`;

export const CountryDetail = styled.div`
  font-weight: 600;
  line-height: 20px;

  span {
    font-weight: 300;
    margin-left: 6px;
  }
`;

export const BorderCountries = styled.div`
  font-weight: 600;
  margin-top: 68px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  span {
    font-weight: 300;
    min-width: 96px;
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.colors.elementsColor};
    text-align: center;
    border-radius: 2px;
    font-size: 14px;
  }
`;
