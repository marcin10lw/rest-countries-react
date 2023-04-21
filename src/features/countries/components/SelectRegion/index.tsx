import { motion, Variants } from "framer-motion";
import {
  SelectButton,
  SelectRegionArrow,
  SelectWindow,
  OpenWindowButton,
  StyledSelectRegion,
} from "./styled";
import { useState } from "react";

const listVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const SelectRegion = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  return (
    <StyledSelectRegion>
      <OpenWindowButton
        as={motion.button}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsWindowOpen((isWindowOpen) => !isWindowOpen)}
      >
        Filter by Region
        <SelectRegionArrow open={isWindowOpen} />
      </OpenWindowButton>

      <SelectWindow
        as={motion.ul}
        variants={listVariants}
        animate={isWindowOpen ? "open" : "closed"}
        style={{
          pointerEvents: isWindowOpen ? "auto" : "none",
        }}
      >
        <motion.li variants={itemVariants}>
          <SelectButton>Africa</SelectButton>
        </motion.li>
        <motion.li variants={itemVariants}>
          <SelectButton>America</SelectButton>
        </motion.li>
        <motion.li variants={itemVariants}>
          <SelectButton>Asia</SelectButton>
        </motion.li>
        <motion.li variants={itemVariants}>
          <SelectButton>Europe</SelectButton>
        </motion.li>
        <motion.li variants={itemVariants}>
          <SelectButton>Oceania</SelectButton>
        </motion.li>
      </SelectWindow>
    </StyledSelectRegion>
  );
};

export default SelectRegion;
