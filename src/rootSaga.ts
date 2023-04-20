import { all } from "redux-saga/effects";
import { watchSaveIsDarkThemeToLocalStorage } from "./features/countries/themeSaga";

export default function* rootSaga() {
  yield all([watchSaveIsDarkThemeToLocalStorage()]);
}
