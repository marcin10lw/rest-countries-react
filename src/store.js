import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/countries/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
