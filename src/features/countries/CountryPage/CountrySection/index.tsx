import Country from "../../common/Country";
import { CountryType } from "../../common/types";
import { StyledCountrySection } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../getCountries";

const CountrySection = ({ country }: { country: CountryType }) => {
  const { data: countries } = useQuery<CountryType[]>(
    ["countries"],
    getCountries
  );

  return (
    <StyledCountrySection>
      <Country
        name={country.name.common}
        nativeName={
          country.name.nativeName &&
          country.name.nativeName[Object.keys(country!.name.nativeName)[0]]
            .common
        }
        image={country.flags.svg}
        alt={country.flags.alt}
        population={country.population}
        capital={country.capital}
        domain={country.tld[0]}
        region={country.region}
        subregion={country.subregion}
        currencies={
          country!.currencies &&
          Object.keys(country!.currencies).map((currency) => {
            return country.currencies[currency].name;
          })
        }
        languages={
          country!.languages &&
          Object.keys(country!.languages).map((language) => {
            return country.languages[language];
          })
        }
        borderCountries={
          countries &&
          country.borders &&
          country.borders.map((border) => {
            return countries.find((country) => country.cca3 === border)!.name
              .common;
          })
        }
        location="countryPage"
      />
    </StyledCountrySection>
  );
};

export default CountrySection;
