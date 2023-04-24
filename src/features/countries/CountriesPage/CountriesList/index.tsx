import { useSelector } from "react-redux";
import { StyledCountriesList } from "./styled";
import {
  selectCountriesByQuery,
  selectCurrentPage,
} from "../../countriesSlice";
import { Link, useSearchParams } from "react-router-dom";
import Country from "../../components/Country";
import { RootState } from "../../../../store";

type CountriesListProps = {
  countriesPerPage: number;
};

const CountriesList = ({ countriesPerPage }: CountriesListProps) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("country");
  const currentPage = useSelector(selectCurrentPage);

  const countries = useSelector((state: RootState) =>
    selectCountriesByQuery(state, query)
  );
  const sortedCountries = [...countries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;

  const currentCountries = sortedCountries.slice(
    firstCountryIndex,
    lastCountryIndex
  );

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
