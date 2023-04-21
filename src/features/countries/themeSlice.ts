import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";
import { RootState } from "../../store";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkModeOn: getThemeFromLocalStorage(),
  },
  reducers: {
    setIsDarkModeOn: (state) => {
      state.isDarkModeOn = !state.isDarkModeOn;
    },
  },
});

export const { setIsDarkModeOn } = themeSlice.actions;

const selectThemeStatus = (state: RootState) => state.theme;
export const selectIsDarkModeOn = (state: RootState) =>
  selectThemeStatus(state).isDarkModeOn;

export default themeSlice.reducer;
