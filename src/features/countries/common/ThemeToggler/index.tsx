import { useContext } from "react";
import { ToggleThemeContext } from "../ColorModeContext";

import { motion, useAnimation } from "framer-motion";
import {
  ToggleIconWrapper,
  TogglerButton,
  TogglerIcon,
  TogglerWrapper,
} from "./styled";

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
  const { toggleTheme } = useContext(ToggleThemeContext);

  const onButtonClick = () => {
    toggleTheme();
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
