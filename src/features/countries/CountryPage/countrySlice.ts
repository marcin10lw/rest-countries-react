import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { Country } from "../types";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    country: null,
    status: "idle",
  },
  reducers: {
    fetchCountry: (state, { payload: name }: { payload: string }) => {
      state.status = "loading";
    },
    fetchCountrySuccess: (state, { payload: country }) => {
      state.country = country;
      state.status = "success";
    },
    fetchCountryError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchCountry, fetchCountrySuccess, fetchCountryError } =
  countrySlice.actions;

const selectCountryState = (state: RootState) => state.country;

export const selectCountry = (state: RootState): Country[] | null =>
  selectCountryState(state).country;

export const selectCountryStatus = (state: RootState) =>
  selectCountryState(state).status;

export default countrySlice.reducer;
