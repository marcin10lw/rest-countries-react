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
import CountrySection from "./CountrySection";
import GoBack from "./GoBack";

const CountryPage = () => {
  const { name } = useParams();
  const country = useSelector(selectCountry);
  const status = useSelector(selectCountryStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchCountry(name!));
  }, [name]);

  return (
    <Container location="countryPage">
      <main>
        {status === "loading" && <Loader />}
        {status === "success" && country && (
          <>
            <GoBack />
            <CountrySection country={country} />
          </>
        )}
        {status === "error" && <Error />}
      </main>
    </Container>
  );
};

export default CountryPage;
