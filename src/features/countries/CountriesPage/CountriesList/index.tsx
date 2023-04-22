import { useSelector } from "react-redux";
import { StyledCountriesList } from "./styled";
import { selectCountriesByQuery } from "../countriesSlice";
import { Link, useSearchParams } from "react-router-dom";
import Country from "../../components/Country";
import { RootState } from "../../../../store";

const CountriesList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("country");
  const countries = useSelector((state: RootState) =>
    selectCountriesByQuery(state, query)
  );

  return (
    <StyledCountriesList>
      {countries.map((country) => (
        <li key={country.id}>
          <Link to={`/countries/${country.id}`}>
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
