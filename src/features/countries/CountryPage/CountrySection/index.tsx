import { useSelector } from "react-redux";
import Country from "../../components/Country";
import { Country as CountryType } from "../../types";
import { selectCountries } from "../../countriesSlice";
import { StyledCountrySection } from "./styled";

const CountrySection = ({ country }: { country: CountryType[] }) => {
  const countries = useSelector(selectCountries);

  return (
    <StyledCountrySection>
      <Country
        name={country[0].name.common}
        nativeName={
          country[0].name.nativeName &&
          country[0].name.nativeName[
            Object.keys(country![0].name.nativeName)[0]
          ].common
        }
        image={country[0].flags.svg}
        alt={country[0].flags.alt}
        population={country[0].population}
        capital={country[0].capital}
        domain={country[0].tld[0]}
        region={country[0].region}
        subregion={country[0].subregion}
        currencies={
          country![0].currencies &&
          Object.keys(country![0].currencies).map((currency) => {
            return country[0].currencies[currency].name;
          })
        }
        languages={
          country![0].languages &&
          Object.keys(country![0].languages).map((language) => {
            return country[0].languages[language];
          })
        }
        borderCountries={
          countries &&
          country[0].borders &&
          country[0].borders.map((border) => {
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
