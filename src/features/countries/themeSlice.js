import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMoneOn: false,
  },
  reducers: {},
});

export const {} = themeSlice.actions;

export default themeSlice.reducer;
