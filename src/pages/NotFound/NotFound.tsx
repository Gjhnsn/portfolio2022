import { useNavigate } from "react-router";
import { Button, Divider, Wrapper } from "./styles";

const NotFound = () => {

    const navigate = useNavigate()

  return (
    <Wrapper>
      <h3>404</h3>
      <Divider></Divider>
      <p>Oops, this page does not exist.</p>
      <Button onClick={() => navigate('/')}>Go Home</Button>
    </Wrapper>
  );
};

export default NotFound;
