import { call, select, takeEvery } from "redux-saga/effects";
import { selectIsDarkModeOn, setIsDarkModeOn } from "./themeSlice";
import { saveThemeToLocalStorage } from "./themeLocalStorage";

function* watchSaveIsDarkThemeToLocalStorageHandler() {
  const isDarkModeOn = yield select(selectIsDarkModeOn);
  yield call(saveThemeToLocalStorage, isDarkModeOn);
}

export function* watchSaveIsDarkThemeToLocalStorage() {
  yield takeEvery("*", watchSaveIsDarkThemeToLocalStorageHandler);
}
