import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import themeReducer from "./features/countries/themeSlice";
import countriesReducer from "./features/countries/countriesSlice";
import countryReducer from "./features/countries/CountryPage/countrySlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    country: countryReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
