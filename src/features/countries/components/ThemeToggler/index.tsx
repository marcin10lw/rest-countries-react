import {
  ToggleIconWrapper,
  TogglerButton,
  TogglerIcon,
  TogglerWrapper,
} from "./styled";
import { motion, useAnimation } from "framer-motion";
import { useContext } from "react";
import { ColorModeContext } from "../../../../ColorModeContext";

const iconVariants = {
  open: {
    scale: [1, 1.2, 1],
    rotate: [0, 360],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const ThemeToggler = () => {
  const animation = useAnimation();
  const { toggleIsDarkModeOn } = useContext(ColorModeContext);

  const onButtonClick = () => {
    toggleIsDarkModeOn();
    animation.start("open");
  };

  return (
    <TogglerWrapper>
      <TogglerButton onClick={onButtonClick}>
        <ToggleIconWrapper
          as={motion.div}
          variants={iconVariants}
          animate={animation}
        >
          <TogglerIcon />
        </ToggleIconWrapper>
        Dark Mode
      </TogglerButton>
    </TogglerWrapper>
  );
};

export default ThemeToggler;
