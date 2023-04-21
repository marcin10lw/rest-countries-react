import Search from "../Search";
import SelectRegion from "../SelectRegion";
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
