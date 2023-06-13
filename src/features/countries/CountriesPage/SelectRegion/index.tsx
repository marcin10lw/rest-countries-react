import { useContext, useEffect, useRef, useState } from "react";
import { CountriesFilterParamsContext } from "../../common/CountriesFilterParamsContext";
import { listVariants, itemVariants } from "./variants";
import { motion } from "framer-motion";
import { regions } from "./regions";
import {
  SelectButton,
  SelectRegionArrow,
  WindowList,
  OpenWindowButton,
  StyledSelectRegion,
} from "./styled";

const SelectRegion = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const { region, changeRegion, setCurrentPage } = useContext(
    CountriesFilterParamsContext
  );
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsWindowOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const windowText = region
    ? regions.find(({ alias }) => region === alias)?.name
    : "Filter by Region";

  const onButtonClick = (alias: string) => {
    changeRegion(alias);
    setCurrentPage(1);
  };

  return (
    <StyledSelectRegion ref={menuRef}>
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
