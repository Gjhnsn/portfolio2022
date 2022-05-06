import styled from "styled-components";
import background from "../../assets/flower.jpg";
import { uiSize } from "../../utils/mobileScreens";

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
  z-index: 1;

  @media ${uiSize.mobileLandscape} {
    /* display: none; */
    height: 140px;
    align-items: flex-end;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 80px;
    right: 0;
    background: rgba(40, 40, 40, 0.85);

    @media ${uiSize.mobileLandscape} {
    height: 140px;
  }
  }
`;

export const FooterText = styled.p`
  color: #c4c4c4;
  position: relative;
  z-index: 1;
  letter-spacing: 2px;
  font-weight: 200;

  @media ${uiSize.mobileLandscape} {
    padding-bottom: 20px;
    font-size: .9rem;
  }
`;

