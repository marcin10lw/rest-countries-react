import { useSearchParams } from "react-router-dom";
import {
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
  StyledSearch,
} from "./styled";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams({ country: "" });
  const query = searchParams.get("country");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.trim() === "") {
      searchParams.delete("country");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ country: value });
    }
  };

  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchInput
        value={query || ""}
        placeholder="Search for a country..."
        onChange={onInputChange}
      />
    </StyledSearch>
  );
};

export default Search;
