import ThemeToggler from "../ThemeToggler";
import { HeaderTitle, HeaderWrapper, StyledHeader } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <HeaderTitle>Where in the world?</HeaderTitle>
        <ThemeToggler />
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
