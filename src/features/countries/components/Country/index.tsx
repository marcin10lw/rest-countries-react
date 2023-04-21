import { useState } from "react";
import {
  CountryDetail,
  CountryDetails,
  CountryImage,
  CountryInfo,
  CountryName,
  StyledCountry,
} from "./styled";

type CountryProps = {
  image: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  alt: string;
};

const Country = ({
  image,
  name,
  population,
  region,
  capital,
  alt,
}: CountryProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <StyledCountry>
      <CountryImage onLoad={() => setImageLoaded(true)} src={image} alt={alt} />
      <CountryInfo>
        <CountryName>{name}</CountryName>
        <CountryDetails>
          <CountryDetail>
            Population: <span>{population}</span>
          </CountryDetail>
          <CountryDetail>
            Region: <span>{region}</span>
          </CountryDetail>
          <CountryDetail>
            Capital: <span>{capital}</span>
          </CountryDetail>
        </CountryDetails>
      </CountryInfo>
    </StyledCountry>
  );
};

export default Country;
