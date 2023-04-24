import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import Country from "../components/Country";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchCountry,
  selectCountry,
  selectCountryStatus,
} from "./countrySlice";
import { useSelector } from "react-redux";
import { fetchCountries, selectCountries } from "../countriesSlice";

const CountryPage = () => {
  const { name } = useParams();
  const country = useSelector(selectCountry);
  const countries = useSelector(selectCountries);
  const status = useSelector(selectCountryStatus);
  const dispatch = useDispatch();
  console.log(country);

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchCountry(name!));
  }, [name]);

  return (
    <Container location="countryPage">
      <main>
        {status === "loading" && <Loader />}
        {status === "success" && country && (
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
                return countries.find((country) => country.cca3 === border)!
                  .name.common;
              })
            }
            location="countryPage"
          />
        )}
        {status === "error" && <Error />}
      </main>
    </Container>
  );
};

export default CountryPage;
