import styled from "styled-components";
import { HiOutlineMoon } from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import { uiSize } from "../../utils/mobileScreens";

export const TogglePlaceholder = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;

  @media ${uiSize.mobile} {
    margin-bottom: 0;
  }
`;

export const SunIcon = styled(FiSun)`
  color: #5f6a59;
  height: auto;
  width: 28px;
  transition: all 0.3s ease;
  color: ${(props) => props.theme.tertiaryColor};

  @media ${uiSize.mobileLandscape} {
    width: 25px;
  }

  @media ${uiSize.mobile} {
    color: #c4c4c4;
    height: auto;
  width: 28px;
  }

  &:hover {
    transform: translateY(-3px);
    color: ${(props) => props.theme.linkHoverColor};
  }
`;

export const MoonIcon = styled(HiOutlineMoon)`
  color: #5d4733;
  height: auto;
  width: 28px;
  transition: all 0.3s;
  color: ${(props) => props.theme.tertiaryColor};

  @media ${uiSize.mobileLandscape} {
    width: 25px;
  }

  @media ${uiSize.mobile} {
    color: #c4c4c4;
    height: auto;
  width: 28px;
  }

  &:hover {
    transform: translateY(-3px);
    color: ${(props) => props.theme.linkHoverColor};
  }
`;
