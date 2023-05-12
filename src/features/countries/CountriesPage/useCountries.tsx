import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../getCountries";
import { CountryType } from "../common/types";
import { nanoid } from "nanoid";
import { useSearchParams } from "react-router-dom";

const useCountries = (region: string) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("country");
  const { data: responseCountries, status } = useQuery<CountryType[]>(
    ["countries"],
    getCountries
  );
  const countriesWithId = responseCountries?.map((country) => ({
    ...country,
    id: nanoid(),
  }));

  const countries = region
    ? countriesWithId?.filter((country) => {
        return (
          country.region?.toLocaleUpperCase() === region.toLocaleUpperCase()
        );
      })
    : countriesWithId;

  if (query === "" || query === null) {
    return { countries: countries ?? [], status };
  }

  if (!countries) {
    return { countries: [], status };
  }

  const countryNamesIncludeQuery = (country: CountryType) => {
    const trimmedQuery = query?.trim();

    return (
      country.name.common
        .toLocaleUpperCase()
        .includes(trimmedQuery?.toLocaleUpperCase()) ||
      country.altSpellings.some((altName) =>
        altName.toLocaleUpperCase().includes(trimmedQuery.toLocaleUpperCase())
      ) ||
      country.name.official
        .toLocaleUpperCase()
        .includes(trimmedQuery.toLocaleUpperCase())
    );
  };

  const filteredCountries = countries?.filter((country) =>
    countryNamesIncludeQuery(country)
  );

  return { countries: filteredCountries ?? [], status };
};

export default useCountries;
