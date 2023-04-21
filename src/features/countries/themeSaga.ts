import {
  SagaReturnType,
  SelectEffect,
  call,
  select,
  takeEvery,
} from "redux-saga/effects";
import { selectIsDarkModeOn } from "./themeSlice";
import { saveThemeToLocalStorage } from "./themeLocalStorage";

function* watchSaveIsDarkThemeToLocalStorageHandler() {
  const isDarkModeOn: SelectEffect = yield select(selectIsDarkModeOn);
  yield call(saveThemeToLocalStorage, isDarkModeOn);
}

export function* watchSaveIsDarkThemeToLocalStorage() {
  yield takeEvery("*", watchSaveIsDarkThemeToLocalStorageHandler);
}
