import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

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
      state.countries = countries;
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
export const selectStatus = (state: RootState) =>
  selectCountriesState(state).status;

export default countriesSlice.reducer;
