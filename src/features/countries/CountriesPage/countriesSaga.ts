import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchCountries,
  fetchCountriesError,
  fetchCountriesSuccess,
} from "./countriesSlice";
import { getCountries } from "../getCountries";
import { AxiosResponse } from "axios";

const EXAMPLE_DELAY = 500;

function* fetchCountriesHandler() {
  yield delay(EXAMPLE_DELAY);

  try {
    const countries: AxiosResponse = yield call(getCountries);
    yield put(fetchCountriesSuccess(countries));
  } catch (error) {
    yield put(fetchCountriesError());
  }
}

export function* countriesSaga() {
  yield takeLatest(fetchCountries.type, fetchCountriesHandler);
}
