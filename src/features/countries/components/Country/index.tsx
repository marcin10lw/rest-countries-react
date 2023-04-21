import {
  CountryDetail,
  CountryDetails,
  CountryImage,
  CountryInfo,
  CountryName,
  StyledCountry,
} from "./styled";

type CountryProps = {
  image: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

const Country = ({
  image,
  name,
  population,
  region,
  capital,
}: CountryProps) => {
  return (
    <StyledCountry>
      <CountryImage src={image} alt={name} />
      <CountryInfo>
        <CountryName>{name}</CountryName>
        <CountryDetails>
          <CountryDetail>
            Population: <span>{population}</span>
          </CountryDetail>
          <CountryDetail>
            Region: <span>{region}</span>
          </CountryDetail>
          <CountryDetail>
            Capital: <span>{capital}</span>
          </CountryDetail>
        </CountryDetails>
      </CountryInfo>
    </StyledCountry>
  );
};

export default Country;
