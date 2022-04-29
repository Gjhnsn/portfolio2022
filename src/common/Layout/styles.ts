import styled from "styled-components";
import { uiSize } from "../../utils/mobileScreens";

export const LayoutContainer = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  /* temporary border for styling structure */
  border: 1px solid blue;

  @media ${uiSize.bigTablet} {
    max-width: 900px;
  }

  @media ${uiSize.tablet} {
    max-width: 750px;
  }

  @media ${uiSize.smallTablet} {
    max-width: 550px;
  }

  @media ${uiSize.mobileLandscape} {
    max-width: 430px;
  }

  @media ${uiSize.mobile} {
    max-width: 350px;
  }
`;