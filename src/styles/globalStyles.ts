import { createGlobalStyle } from "styled-components";

interface ITheme {
    body: string,
    headerText: string,
    accentColor: string,
    contentText: string,
    secondartText: string,
    tertiaryColor: string,
}

type GlobalThemeProps = {
    theme: ITheme
}

export const GlobalStyles = createGlobalStyle<GlobalThemeProps>`
    body {
        background-color: ${(props) => props.theme.body}
    }
    p {
        color: ${(props) => props.theme.contentText}
    }
`;

// need to hook up toggle

export const darkTheme = {
  body: "#181E1B",
  headerText: "#CFCFC5",
  accentColor: "#D7AF70",
  contentText: "#FFFFFF",
  secondaryText: "#5C5C5C",
  tertiaryColor: "#5F6A59",
};

export const lightTheme = {
  body: "#CFCFC5",
  headerText: "#181E1B",
  accentColor: "#5F6A59",
  contentText: "#000000",
  secondaryText: "#5C5C5C",
  tertiaryColor: "#5D4733",
};
