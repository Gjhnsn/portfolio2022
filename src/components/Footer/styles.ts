import styled from "styled-components";
import background from "../../assets/flower.jpg";

export const FooterBackGround = styled.div`
  width: 100%;
  height: 245px;
  /* background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 245px;
      right: 0;
      background: rgba(40, 40, 40, 0.5);  
  }
`;

export const FooterText = styled.p`
    color: #CFCFC5;
    z-index: 5;
    position: relative;
`