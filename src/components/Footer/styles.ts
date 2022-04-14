import styled from "styled-components";
import background from "../../assets/flower.jpg";

export const FooterBackGround = styled.div`
  width: 100%;
  height: 80px;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 80px;
    right: 0;
    background: rgba(40, 40, 40, 0.5);
  }
`;

export const FooterText = styled.p`
  color: lightgray;
  position: relative;
  z-index: 1;
  letter-spacing: 2px;
  font-weight: 100;
`;

