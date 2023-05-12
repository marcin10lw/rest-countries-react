import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";

export const getCountries = async () => {
  await wait(1000);
  const { data } = await axios.get("https://restcountries.com/v3.1/all");

  return data;
};
