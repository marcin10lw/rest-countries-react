import { motion } from "framer-motion";
import { listVariants, itemVariants } from "./variants";
import {
  SelectButton,
  SelectRegionArrow,
  WindowList,
  OpenWindowButton,
  StyledSelectRegion,
} from "./styled";
import { useState } from "react";

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

      <WindowList
        as={motion.ul}
        initial={false}
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
      </WindowList>
    </StyledSelectRegion>
  );
};

export default SelectRegion;
