import { all } from "redux-saga/effects";
import { watchSaveIsDarkThemeToLocalStorage } from "./features/countries/themeSaga";
import { countriesSaga } from "./features/countries/countriesSaga";

export default function* rootSaga() {
  yield all([watchSaveIsDarkThemeToLocalStorage(), countriesSaga()]);
}
