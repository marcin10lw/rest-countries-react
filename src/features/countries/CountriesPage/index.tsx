import { useSelector } from "react-redux";
import { fetchCountries, selectStatus } from "../countriesSlice";
import { Container } from "../components/Container";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Navigation from "./Navigation";
import CountriesList from "./CountriesList";
import Pagination from "./Pagination";

const CountriesPage = () => {
  const [countriesPerPage, setCountriesPerPage] = useState(25);

  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <Container>
      <main>
        {status === "loading" && <Loader />}
        {status === "success" && (
          <>
            <Navigation />
            <CountriesList countriesPerPage={countriesPerPage} />
            <Pagination countriesPerPage={countriesPerPage} />
          </>
        )}
        {status === "error" && <Error />}
      </main>
    </Container>
  );
};

export default CountriesPage;
