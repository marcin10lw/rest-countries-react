import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchCountry,
  fetchCountryError,
  fetchCountrySuccess,
} from "./countrySlice";
import { getCountry } from "./getCountry";
import { AxiosResponse } from "axios";

const EXAMPLE_DELAY = 500;

function* fetchCountryHandler({
  payload: name,
}: ReturnType<typeof fetchCountry>) {
  try {
    yield delay(EXAMPLE_DELAY);
    const country: AxiosResponse = yield call(getCountry, name);
    yield put(fetchCountrySuccess(country));
  } catch (error) {
    yield delay(EXAMPLE_DELAY);
    yield put(fetchCountryError());
  }
}

export function* countrySaga() {
  yield takeLatest(fetchCountry.type, fetchCountryHandler);
}
