import { Link } from "react-router-dom";
import ThemeToggler from "../ThemeToggler";
import { HeaderTitle, HeaderWrapper, StyledHeader } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Link to="/countries">
          <HeaderTitle>Where in the world?</HeaderTitle>
        </Link>
        <ThemeToggler />
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
