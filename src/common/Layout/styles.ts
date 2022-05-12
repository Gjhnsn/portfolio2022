import styled from "styled-components";
import { uiSize } from "../../utils/mobileScreens";

export const LayoutContainer = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

  @media ${uiSize.bigTablet} {
    max-width: 900px;
  }

  @media ${uiSize.tablet} {
    max-width: 750px;
  }

  @media ${uiSize.smallTablet} {
    max-width: 550px;
    padding: 55px 0;
  }

  @media ${uiSize.mobileLandscape} {
    max-width: 530px;
  }

  @media ${uiSize.mobile} {
    padding: 55px 0;
  }
`;