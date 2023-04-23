import { useSelector } from "react-redux";
import { fetchCountries, selectStatus } from "../countriesSlice";
import { Container } from "../components/Container";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Navigation from "../components/Navigation";
import CountriesList from "./CountriesList";

const CountriesPage = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <Container>
      {status === "loading" && <Loader />}
      {status === "success" && (
        <>
          <Navigation />
          <CountriesList />
        </>
      )}
      {status === "error" && <Error />}
    </Container>
  );
};

export default CountriesPage;
