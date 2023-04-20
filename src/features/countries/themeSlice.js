import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkModeOn: false,
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
