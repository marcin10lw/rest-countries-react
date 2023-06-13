import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getCountry } from "./getCountry";
import { Container } from "../common/Container";
import Loader from "../common/Loader";
import GoBack from "./GoBack";
import CountrySection from "./CountrySection";
import Error from "../common/Error";

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
