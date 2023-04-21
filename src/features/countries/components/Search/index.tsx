import {
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
  StyledSearch,
} from "./styled";

const Search = () => {
  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchInput placeholder="Search for a country..." />
    </StyledSearch>
  );
};

export default Search;
