import {
  BorderCountries,
  CountryDetail,
  CountryDetails,
  CountryImage,
  CountryInfo,
  CountryName,
  DetailsWrapper,
  StyledCountry,
} from "./styled";

type CountryProps = {
  image: string;
  name: string;
  nativeName?: string;
  population: number;
  region: string;
  subregion?: string;
  capital: string;
  domain?: string;
  currencies?: string[];
  languages?: string[];
  borderCountries?: string[];
  alt: string;
  location?: string;
};

const Country = ({
  image,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  domain,
  currencies,
  languages,
  borderCountries,
  alt,
  location,
}: CountryProps) => {
  return (
    <StyledCountry location={location}>
      <CountryImage location={location} src={image} alt={alt} />
      <CountryInfo location={location}>
        <CountryName location={location}>{name}</CountryName>
        <CountryDetails location={location}>
          <DetailsWrapper location={location}>
            {nativeName && (
              <CountryDetail>
                Native Name:<span>{nativeName}</span>
              </CountryDetail>
            )}
            <CountryDetail>
              Population:
              <span>
                {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </CountryDetail>
            <CountryDetail>
              Region:<span>{region}</span>
            </CountryDetail>
            {subregion && (
              <CountryDetail>
                Sub Region:<span>{subregion}</span>
              </CountryDetail>
            )}
            <CountryDetail>
              Capital:<span>{capital}</span>
            </CountryDetail>
          </DetailsWrapper>
          <DetailsWrapper location={location}>
            {domain && (
              <CountryDetail>
                Top Level Domain:<span>{domain}</span>
              </CountryDetail>
            )}
            {currencies && (
              <CountryDetail>
                Currencies:<span>{currencies.join(", ")}</span>
              </CountryDetail>
            )}
            {languages && (
              <CountryDetail>
                Languages:<span>languages to map</span>
              </CountryDetail>
            )}
          </DetailsWrapper>
        </CountryDetails>
        {borderCountries && (
          <BorderCountries>
            Border Countries:
            <div>
              {borderCountries.map((country) => (
                <span key={country}>{country}</span>
              ))}
            </div>
          </BorderCountries>
        )}
      </CountryInfo>
    </StyledCountry>
  );
};

export default Country;
