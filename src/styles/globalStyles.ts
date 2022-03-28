import { createGlobalStyle } from "styled-components";

interface ITheme {
  body: string;
  headerText: string;
  accentColor: string;
  contentText: string;
  secondartText: string;
  tertiaryColor: string;
  gradientColor: string;
  secondaryGradient: string;
  projectGradient: string;
  boxShadow: string;
  secondaryBoxShadow: string;
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
      font-size: 75px;
      letter-spacing: 6px;
      // ------------------- temp font
      font-family: Arial;
    }

    h2 {
      color: ${(props) => props.theme.headerText};
      font-weight: 600;
      font-size: 64px;
      letter-spacing: 6px;
      // ------------------- temp font
      font-family: Arial;
    }

    h3 {
      color: ${(props) => props.theme.accentColor};
      font-size: 35px;
      font-weight: 300;
      letter-spacing: 3px;
      // ------------------- temp font
      font-family: Arial;
    }

    p {
        color: ${(props) => props.theme.contentText};
    }

    li {
      color: ${(props) => props.theme.accentColor};
      display: flex;
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
  headerText: "#CFCFC5",
  accentColor: "#D7AF70",
  contentText: "#FFFFFF",
  secondaryText: "#5C5C5C",
  tertiaryColor: "#5F6A59",
  gradientColor: "(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82))",
  secondaryGradient: "(rgba(95, 106, 89, 0.6), rgba(95, 106, 89, 0.6))",
  projectGradient: "rgba(18, 18, 18, .85)",
  navGradient: "rgba(24, 30, 27, .85)",
  boxShadow: `-6px 6px 15px rgba(0, 0, 0, .95)`,
  secondaryBoxShadow: `6px -6px 15px rgba(0, 0, 0, .95)`,
};

export const lightTheme = {
  body: "#CFCFC5",
  headerText: "#181E1B",
  accentColor: "#5F6A59",
  contentText: "#000000",
  secondaryText: "#5C5C5C",
  tertiaryColor: "#5D4733",
  gradientColor: "(rgba(40, 40, 40, .9), rgba(40, 40, 40, .9))",
  secondaryGradient: "(rgba(93, 71, 51, 0.6), rgba(93, 71, 51, 0.6))",
  projectGradient: "rgba(255, 255, 255, .65)",
  navGradient: "rgba(207, 207, 197, .85)",
  boxShadow: `rgba(0, 0, 0, 0.4) -1px 3px 10px`,
  secondaryBoxShadow: `rgba(0, 0, 0, 0.25) 1px -3px 10px`,
};
