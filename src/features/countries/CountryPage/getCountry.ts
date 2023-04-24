import axios from "axios";

export const getCountry = async (name: string) => {
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  return data;
};
