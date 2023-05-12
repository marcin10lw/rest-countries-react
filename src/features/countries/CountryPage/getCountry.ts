import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";
import { CountryType } from "../common/types";
import { wait } from "../common/wait";

export const getCountry: QueryFunction<
  CountryType,
  ["country", string | undefined]
> = async ({ queryKey }) => {
  const name = queryKey[1];

  await wait(1000);
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  return data[0];
};
