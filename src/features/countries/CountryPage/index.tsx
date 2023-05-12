import { useParams } from "react-router-dom";
import { Container } from "../common/Container";
import Loader from "../common/Loader";
import Error from "../common/Error";
import CountrySection from "./CountrySection";
import GoBack from "./GoBack";
import { useQuery } from "@tanstack/react-query";
import { getCountry } from "./getCountry";

const CountryPage = () => {
  const { name } = useParams();
  const { data: country, status } = useQuery(["country", name], getCountry);

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
