import { Container } from "../common/Container";
import {} from "react-redux";
import { useContext, useState } from "react";
import Loader from "../common/Loader";
import Error from "../common/Error";
import Navigation from "./Navigation";
import CountriesList from "./CountriesList";
import Pagination from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../getCountries";
import useCountries from "./useCountries";
import { CountriesFilterParamsContext } from "../common/CountriesFilterParamsContext";

const CountriesPage = () => {
  const [countriesPerPage] = useState(25);
  const { status } = useQuery(["countries"], getCountries);
  const { region } = useContext(CountriesFilterParamsContext);
  const { countries } = useCountries(region);

  return (
    <Container>
      <main>
        {status === "loading" && <Loader />}
        {status === "success" && (
          <>
            <Navigation />
            <CountriesList
              countriesPerPage={countriesPerPage}
              countries={countries}
            />
            <Pagination
              countriesPerPage={countriesPerPage}
              countries={countries}
            />
          </>
        )}
        {status === "error" && <Error />}
      </main>
    </Container>
  );
};

export default CountriesPage;
