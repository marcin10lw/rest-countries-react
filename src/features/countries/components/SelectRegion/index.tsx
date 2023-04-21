import {
  SelectButton,
  SelectRegionArrow,
  SelectWindow,
  OpenWindowButton,
  StyledSelectRegion,
} from "./styled";
import { useState } from "react";

const SelectRegion = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  return (
    <StyledSelectRegion>
      <OpenWindowButton
        onClick={() => setIsWindowOpen((isWindowOpen) => !isWindowOpen)}
      >
        Filter by Region
        <SelectRegionArrow />
      </OpenWindowButton>
      {isWindowOpen && (
        <SelectWindow>
          <li>
            <SelectButton>Africa</SelectButton>
          </li>
          <li>
            <SelectButton>America</SelectButton>
          </li>
          <li>
            <SelectButton>Asia</SelectButton>
          </li>
          <li>
            <SelectButton>Europe</SelectButton>
          </li>
          <li>
            <SelectButton>Oceania</SelectButton>
          </li>
        </SelectWindow>
      )}
    </StyledSelectRegion>
  );
};

export default SelectRegion;
