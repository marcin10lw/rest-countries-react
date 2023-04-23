import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { nanoid } from "nanoid";

type Country = {
  id: string;
  flags: {
    png: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
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
    selectedRegion: "",
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
    setRegion: (state, { payload: region }) => {
      if (state.selectedRegion === region) {
        state.selectedRegion = "";
      } else {
        state.selectedRegion = region;
      }
    },
  },
});

export const {
  fetchCountries,
  fetchCountriesSuccess,
  fetchCountriesError,
  setRegion,
} = countriesSlice.actions;

const selectCountriesState = (state: RootState) => state.countries;

export const selectCountries = (state: RootState) =>
  selectCountriesState(state).countries;

export const selectCountryById = (
  state: RootState,
  id: string | undefined
): Country =>
  selectCountries(state).find((country: Country) => country.id === id)!;

export const selectSelectedRegion = (state: RootState) =>
  selectCountriesState(state).selectedRegion;

const selectCountriesByRegion = (state: RootState) => {
  const region: string = selectSelectedRegion(state);
  const countries: Country[] = selectCountries(state);

  const countriesByRegion: Country[] = countries.filter((country) => {
    return country.region?.toLocaleUpperCase() === region.toLocaleUpperCase();
  });

  return countriesByRegion;
};

export const selectCountriesByQuery = (
  state: RootState,
  query: string | null
): Country[] => {
  const region = selectSelectedRegion(state);
  const countries: Country[] = region
    ? selectCountriesByRegion(state)
    : selectCountries(state);

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
      ) ||
      country.name.official
        .toLocaleUpperCase()
        .includes(trimmedQuery.toLocaleUpperCase())
    );
  };

  return countries.filter((country) => countryNamesIncludeQuery(country));
};

export const selectStatus = (state: RootState) =>
  selectCountriesState(state).status;

export default countriesSlice.reducer;
