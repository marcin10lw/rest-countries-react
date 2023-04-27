import { all } from "redux-saga/effects";
import { countriesSaga } from "./features/countries/countriesSaga";
import { countrySaga } from "./features/countries/CountryPage/countrySaga";

export default function* rootSaga() {
  yield all([countriesSaga(), countrySaga()]);
}
