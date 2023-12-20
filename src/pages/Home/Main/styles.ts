import styled from "styled-components";
import { uiSize } from "../../../utils/mobileScreens";

export const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1600px;
  padding: 0 150px;
  display: block;
  justify-content: center;

  @media ${uiSize.bigTablet} {
    max-width: 1280px;
  }

  @media ${uiSize.tablet} {
    max-width: 1000px;
  }

  @media ${uiSize.smallTablet} {
    max-width: 750px;
    padding: 0 50px;
  }

  @media ${uiSize.mobileLandscape} {
    max-width: 650px;
    padding: 0 50px;
  }

  @media ${uiSize.mobile} {
    max-width: 100vw;
    padding: 0 20px;
  }

  @media ${uiSize.smallMobile} {
    max-width: 100vw;
    padding: 0 20px;
  }
`;
