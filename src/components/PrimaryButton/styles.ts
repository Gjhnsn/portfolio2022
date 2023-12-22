import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid blue;
  padding: 8px 25px;
  align-self: center;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.accentColor};
  border-radius: 5px;
  cursor: pointer;
  font-family: "Sora", sans-serif;
  letter-spacing: 0.3px;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }
`;
