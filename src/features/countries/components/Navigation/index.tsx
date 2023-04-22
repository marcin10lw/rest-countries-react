import Search from "../../CountriesPage/Search";
import SelectRegion from "../../CountriesPage/SelectRegion";
import { StyledNavigation } from "./styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Search />
      <SelectRegion />
    </StyledNavigation>
  );
};

export default Navigation;
