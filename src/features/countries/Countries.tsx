import { useEffect } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import {
  fetchCountries,
  selectCountries,
  selectStatus,
} from "./countriesSlice";
import { useSelector } from "react-redux";

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const status = useSelector(selectStatus);
  console.log(countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return <Header />;
};

export default Countries;
