import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { nanoid } from "nanoid";

type Country = {
  id: string;
  flags: {
    png: string;
    alt: string;
  };
  name: {
    common: string;
  };
  altSpellings: string[];
  capital: string;
  population: number;
  region: string;
};

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    status: "idle",
  },
  reducers: {
    fetchCountries: (state) => {
      state.status = "loading";
    },
    fetchCountriesSuccess: (state, { payload: countries }) => {
      state.status = "success";
      state.countries = countries.map((country: {}) => {
        return {
          ...country,
          id: nanoid(),
        };
      });
    },
    fetchCountriesError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchCountries, fetchCountriesSuccess, fetchCountriesError } =
  countriesSlice.actions;

const selectCountriesState = (state: RootState) => state.countries;

export const selectCountries = (state: RootState) =>
  selectCountriesState(state).countries;

export const selectCountriesByQuery = (
  state: RootState,
  query: string | null
): Country[] => {
  const countries: Country[] = selectCountries(state);

  if (query === "" || query === null) {
    return countries;
  }

  const countryNamesIncludeQuery = (country: Country) => {
    const trimmedQuery = query.trim();

    return (
      country.name.common
        .toLocaleUpperCase()
        .includes(trimmedQuery?.toLocaleUpperCase()) ||
      country.altSpellings.some((altName) =>
        altName.toLocaleUpperCase().includes(trimmedQuery.toLocaleUpperCase())
      )
    );
  };

  return countries.filter((country) => countryNamesIncludeQuery(country));
};

export const selectStatus = (state: RootState) =>
  selectCountriesState(state).status;

export default countriesSlice.reducer;
