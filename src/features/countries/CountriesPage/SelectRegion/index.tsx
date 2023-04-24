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
import { useSelector } from "react-redux";
import {
  selectSelectedRegion,
  setCurrentPage,
  setRegion,
} from "../../countriesSlice";
import { useDispatch } from "react-redux";
import { regions } from "./regions";

const SelectRegion = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const region = useSelector(selectSelectedRegion);

  const dispatch = useDispatch();

  const windowText = region
    ? regions.find(({ alias }) => region === alias)?.name
    : "Filter by Region";

  const onButtonClick = (alias: string) => {
    dispatch(setRegion(alias));
    dispatch(setCurrentPage(1));
  };

  return (
    <StyledSelectRegion>
      <OpenWindowButton
        as={motion.button}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsWindowOpen((isWindowOpen) => !isWindowOpen)}
      >
        {windowText}
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
        {regions.map(({ id, alias, name }) => (
          <motion.li key={id} variants={itemVariants}>
            <SelectButton
              isActive={alias === region}
              onClick={() => onButtonClick(alias)}
            >
              {name}
            </SelectButton>
          </motion.li>
        ))}
      </WindowList>
    </StyledSelectRegion>
  );
};

export default SelectRegion;
