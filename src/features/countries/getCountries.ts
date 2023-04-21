import axios from "axios";

export const getCountries = async () => {
  const { data } = await axios.get("https://restcouies.com/v3.1/all");
  return data;
};
