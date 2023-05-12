import { StyledCountriesList } from "./styled";
import { Link } from "react-router-dom";
import Country from "../../components/Country";
import { CountriesFilterParamsContext } from "../../CountriesFilterParamsContext";
import { useContext } from "react";
import { CountryType } from "../../types";

type CountriesListProps = {
  countriesPerPage: number;
  countries: CountryType[];
};

const CountriesList = ({ countriesPerPage, countries }: CountriesListProps) => {
  const { currentPage } = useContext(CountriesFilterParamsContext);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;

  const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex);

  return (
    <StyledCountriesList>
      {currentCountries.map((country) => (
        <li key={country.id}>
          <Link to={`/countries/${country.name.common}`}>
            <Country
              image={country.flags.png}
              name={country.name.common}
              capital={country.capital}
              population={country.population}
              region={country.region}
              alt={country.flags.alt}
            />
          </Link>
        </li>
      ))}
    </StyledCountriesList>
  );
};

export default CountriesList;
