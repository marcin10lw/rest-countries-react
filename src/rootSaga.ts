import { all } from "redux-saga/effects";
import { countrySaga } from "./features/countries/CountryPage/countrySaga";

export default function* rootSaga() {
  yield all([countrySaga()]);
}
