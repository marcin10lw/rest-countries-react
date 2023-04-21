import { ArrowWrapper, SelectRegionArrow, StyledSelectRegion } from "./styled";

const SelectRegion = () => {
  return (
    <StyledSelectRegion>
      Filter by Region
      <ArrowWrapper>
        <SelectRegionArrow />
      </ArrowWrapper>
    </StyledSelectRegion>
  );
};

export default SelectRegion;
