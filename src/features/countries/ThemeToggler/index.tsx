import { TogglerButton, TogglerIcon, TogglerWrapper } from "./styled";

const ThemeToggler = () => {
  return (
    <TogglerWrapper>
      <TogglerButton>
        <TogglerIcon />
        Dark Mode
      </TogglerButton>
    </TogglerWrapper>
  );
};

export default ThemeToggler;
