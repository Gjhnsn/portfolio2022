import { useNavigate } from "react-router";
import { Divider, Wrapper, Section } from "./styles";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    console.log('clicked');
    navigate("/");
}

  return (
    <Section>
      <Wrapper>
        <h3>404</h3>
        <Divider></Divider>
        <p>Oops, this page does not exist.</p>
      </Wrapper>
      <PrimaryButton onClick={handleNavigation}>Go Home</PrimaryButton>
    </Section>
  );
};

export default NotFound;
