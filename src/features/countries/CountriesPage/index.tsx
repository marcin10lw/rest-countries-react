import { useSelector } from "react-redux";
import {
  fetchCountries,
  selectCountries,
  selectStatus,
} from "./countriesSlice";
import { Container } from "../components/Container";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Country from "../components/Country";
import { Link } from "react-router-dom";
import { GridList } from "./styled";
import Loader from "../components/Loader";
import Error from "../components/Error";

type Country = {
  id: string;
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  capital: string;
  population: number;
  region: string;
};

const CountriesPage = () => {
  const countries: Country[] = useSelector(selectCountries);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <Container>
      {status === "loading" && <Loader />}
      {status === "success" && (
        <GridList>
          {countries.map((country) => (
            <li key={country.id}>
              <Link to={`/countries/${country.id}`}>
                <Country
                  image={country.flags.png}
                  name={country.name.common}
                  capital={country.capital}
                  population={country.population}
                  region={country.region}
                />
              </Link>
            </li>
          ))}
        </GridList>
      )}
      {status === "error" && <Error />}
    </Container>
  );
};

export default CountriesPage;