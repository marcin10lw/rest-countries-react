import { motion } from "framer-motion";
import { listVariants, itemVariants } from "./variants";
import {
  SelectButton,
  SelectRegionArrow,
  WindowList,
  OpenWindowButton,
  StyledSelectRegion,
} from "./styled";
import { useContext, useState } from "react";
import { regions } from "./regions";
import { CountriesFilterParamsContext } from "../../CountriesFilterParamsContext";

const SelectRegion = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const { region, changeRegion, setCurrentPage } = useContext(
    CountriesFilterParamsContext
  );

  const windowText = region
    ? regions.find(({ alias }) => region === alias)?.name
    : "Filter by Region";

  const onButtonClick = (alias: string) => {
    changeRegion(alias);
    setCurrentPage(1);
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
