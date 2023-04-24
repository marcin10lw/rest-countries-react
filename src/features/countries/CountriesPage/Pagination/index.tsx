import { useSelector } from "react-redux";
import {
  PaginationButton,
  PaginationWrapper,
  StyledPagination,
} from "./styled";
import {
  selectCountries,
  selectCountriesByQuery,
  selectCurrentPage,
  setCurrentPage,
} from "../../countriesSlice";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../../../store";
import { useDispatch } from "react-redux";

type PaginationProps = {
  countriesPerPage: number;
};

const Pagination = ({ countriesPerPage }: PaginationProps) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("country");
  const currentPage = useSelector(selectCurrentPage);
  const countries = useSelector((state: RootState) =>
    selectCountriesByQuery(state, query)
  );
  const dispatch = useDispatch();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const EXAMPLE_DELAY = 700;
  const onButtonClick = (number: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      dispatch(setCurrentPage(number));
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
