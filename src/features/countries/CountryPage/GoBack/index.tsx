import { useNavigate } from "react-router-dom";
import { GoBackButton, GoBackIcon, StyledGoBack } from "./styled";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <StyledGoBack>
      <GoBackButton onClick={() => navigate(-1)}>
        <GoBackIcon />
        Back
      </GoBackButton>
    </StyledGoBack>
  );
};

export default GoBack;
