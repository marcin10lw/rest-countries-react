type Currency = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

type Language = {
  [key: string]: string;
};

export type CountryType = {
  id: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  altSpellings: string[];
  capital: string;
  tld: string[];
  population: number;
  region: string;
  subregion: string;
  currencies: Currency;
  languages: Language;
  borders: string[];
  cca3: string;
};
