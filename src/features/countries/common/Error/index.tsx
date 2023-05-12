import {
  ErrorLink,
  ErrorIcon,
  ErrorMessage,
  ErrorTitle,
  StyledError,
} from "./styled";

const Error = () => {
  return (
    <StyledError>
      <ErrorIcon />
      <ErrorTitle>Oops, something went wrong...</ErrorTitle>
      <ErrorMessage>
        Please check your internet connection or come back later
      </ErrorMessage>
      <ErrorLink to="/">Go back</ErrorLink>
    </StyledError>
  );
};

export default Error;
