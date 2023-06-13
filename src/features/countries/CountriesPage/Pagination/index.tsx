import { useContext } from "react";

import { CountriesFilterParamsContext } from "../../common/CountriesFilterParamsContext";
import { CountryType } from "../../common/types";
import {
  PaginationButton,
  PaginationWrapper,
  StyledPagination,
} from "./styled";

type PaginationProps = {
  countriesPerPage: number;
  countries: CountryType[];
};

const Pagination = ({ countriesPerPage, countries }: PaginationProps) => {
  const { setCurrentPage, currentPage } = useContext(
    CountriesFilterParamsContext
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const EXAMPLE_DELAY = 700;
  const onButtonClick = (number: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setCurrentPage(number);
    }, EXAMPLE_DELAY);
  };

  return (
    <StyledPagination>
      <PaginationWrapper>
        {pageNumbers.map((number) => (
          <PaginationButton
            key={number}
            active={number === currentPage}
            onClick={() => onButtonClick(number)}
          >
            {number}
          </PaginationButton>
        ))}
      </PaginationWrapper>
    </StyledPagination>
  );
};

export default Pagination;
