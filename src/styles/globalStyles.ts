import { createGlobalStyle } from "styled-components";
import { uiSize } from "../utils/mobileScreens";

interface ITheme {
  body: string;
  headerText: string;
  accentColor: string;
  contentText: string;
  secondartText: string;
  tertiaryColor: string;
  borderWidth: string;
  aboutBorder: string;
  gradientColor: string;
  secondaryGradient: string;
  projectGradient: string;
  navGradient: string;
  mobileNavGradient: string;
  boxShadow: string;
  secondaryBoxShadow: string;
  linkHoverColor: string;
  sendMessageHover: string;
}

type GlobalThemeProps = {
  theme: ITheme;
};

export const GlobalStyles = createGlobalStyle<GlobalThemeProps>`

    body {
        background-color: ${(props) => props.theme.body};
    }

    // ---------- Hero page needs to be full screen
    .landing {
      min-height: 100vh;
    }

    h1 {
      color: ${(props) => props.theme.headerText};
      font-weight: 600;
      font-size: 5rem;
      letter-spacing: 6px;
      font-family: 'Sora', sans-serif;
    }

    h2 {
      color: ${(props) => props.theme.headerText};
      font-weight: 500;
      font-size: 4rem;
      letter-spacing: 6px;
      font-family: 'Sora', sans-serif;

      @media ${uiSize.bigTablet} {
        font-size: 3.5rem;
      }

      @media ${uiSize.smallTablet} {
        font-size: 2.5rem
      }

      @media ${uiSize.mobile} {
        font-size: 2rem;
      }
    }

    h3 {
      color: ${(props) => props.theme.accentColor};
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: 3px;
      font-family: 'Sora', sans-serif;

      @media ${uiSize.bigTablet} {
      }

      @media ${uiSize.smallTablet} {
        font-size: 1.5rem
      }

      @media ${uiSize.mobile} {
        font-size: 1.3rem;
      }
    }

    p {
        color: ${(props) => props.theme.contentText};
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 30px;

        @media ${uiSize.smallTablet} {
          font-weight: 400;
          
        }

        @media ${uiSize.mobile} {
          font-size: 1rem;
          letter-spacing: 0;
        }
      }

    li {
      color: ${(props) => props.theme.accentColor};
      display: flex;
      font-family: 'JetBrains Mono', monospace;

    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.headerText};
      font-family: 'Sora', sans-serif;
      font-size: .85rem;
    }

    // -------------------------- keep input styles with autocomplete/focus
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus {
      border: 1px solid ${(props) => props.theme.tertiaryColor};
      -webkit-text-fill-color: white;
      -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme.body} inset;
      box-shadow: 0 0 0px 1000px ${(props) => props.theme.body} inset;
      transition: background-color 5000s ease-in-out 0s;
}
`;

// -------------------------- theme modes

export const darkTheme = {
  body: "#181E1B",
  headerText: "#F5EEE6",
  accentColor: "#D7AF70",
  contentText: "#DDD",
  secondaryText: "#A8A8A8",
  tertiaryColor: "#7A8872",
  borderWidth: "2px",
  aboutBorder:
    "RGBA(215,175,112,1) 7px 7px, RGBA(215,175,112,.7) 14px 14px, RGBA(215,175,112,.2) 21px 21px",
  gradientColor: "(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
  secondaryGradient: "(rgba(95, 106, 89, 0.5), rgba(95, 106, 89, 0.6))",
  projectGradient: "(rgba(40, 40, 40, 0.5), rgba(40, 40, 40, 0.5))",
  mobileProjectGradient: "(rgba(18, 18, 18, 0.92), rgba(18, 18, 18, 0.92))",
  navGradient: "rgba(24, 30, 27, .85)",
  mobileNavBackdrop: "rgba(95, 106, 89, .85)",
  boxShadow: `-6px 6px 15px rgba(0, 0, 0, .95)`,
  secondaryBoxShadow: `6px -6px 15px rgba(0, 0, 0, .75)`,
  linkHoverColor: `#CFCFC5`,
  sendMessageHover: `rgba(215, 175, 112, .3)`,
};

export const lightTheme = {
  body: "#CFCFC5",
  headerText: "#181E1B",
  accentColor: "#485B49",
  contentText: "#222",
  secondaryText: "#565858",
  tertiaryColor: "#5D4733",
  borderWidth: "3px",
  aboutBorder:
    "RGBA(72, 91, 73,1) 7px 7px, RGBA(72, 91, 73,.7) 14px 14px, RGBA(72, 91, 73,.2) 21px 21px",
  gradientColor: "(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
  secondaryGradient: "(rgba(137, 114, 93, 0.4), rgba(137, 114, 93, 0.6))",
  projectGradient: "(rgba(191, 191, 181, .5), rgba(191, 191, 181, .5))",
  mobileProjectGradient: "(rgba(191, 191, 181, .95), rgba(191, 191, 181, .95))",
  navGradient: "rgba(207, 207, 197, .85)",
  mobileNavBackdrop: "rgba(207, 207, 197, .65)",
  boxShadow: `rgba(0, 0, 0, 0.4) -1px 3px 10px`,
  secondaryBoxShadow: `rgba(0, 0, 0, 0.35) 1px -3px 10px`,
  linkHoverColor: `#896B4D`,
  sendMessageHover: `rgba(120, 147, 125, .3)`,
};