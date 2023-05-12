import { PropsWithChildren, createContext, useState } from "react";

type CountriesFilterParamsState = {
  region: string;
  currentPage: number;
  changeRegion: (newRegion: string) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export const CountriesFilterParamsContext = createContext(
  {} as CountriesFilterParamsState
);

export const CountriesFilterParamsProvider = ({
  children,
}: PropsWithChildren) => {
  const [region, setRegion] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const changeRegion = (newRegion: string) => {
    setRegion((region) => {
      if (region === newRegion) {
        return "";
      }

      return newRegion;
    });
  };

  const value = {
    region,
    currentPage,
    changeRegion,
    setCurrentPage,
  };

  return (
    <CountriesFilterParamsContext.Provider value={value}>
      {children}
    </CountriesFilterParamsContext.Provider>
  );
};
