import { useDispatch } from "react-redux";
import { setIsDarkModeOn } from "../themeSlice";
import { TogglerButton, TogglerIcon, TogglerWrapper } from "./styled";

const ThemeToggler = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(setIsDarkModeOn());
  };

  return (
    <TogglerWrapper>
      <TogglerButton onClick={onButtonClick}>
        <TogglerIcon />
        Dark Mode
      </TogglerButton>
    </TogglerWrapper>
  );
};

export default ThemeToggler;
