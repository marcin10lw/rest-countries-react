import { useSearchParams } from "react-router-dom";
import {
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
  StyledSearch,
} from "./styled";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams({ country: "" });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value) {
      setSearchParams({ country: value });
    } else {
      searchParams.delete("country");
      setSearchParams(searchParams);
    }
  };

  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchInput
        placeholder="Search for a country..."
        onChange={onInputChange}
      />
    </StyledSearch>
  );
};

export default Search;
