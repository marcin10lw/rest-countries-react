import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

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

const selectThemeStatus = (state) => state.theme;
export const selectIsDarkModeOn = (state) =>
  selectThemeStatus(state).isDarkModeOn;

export default themeSlice.reducer;
