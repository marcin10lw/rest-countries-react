import axios from "axios";

const wait = (exampleResponseDelay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, exampleResponseDelay);
  });

export const getCountries = async () => {
  await wait(1000);
  const { data } = await axios.get("https://restcountries.com/v3.1/all");

  return data;
};
