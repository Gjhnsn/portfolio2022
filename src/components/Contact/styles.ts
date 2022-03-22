import styled from "styled-components";

export const ContactTitle = styled.h2`
    margin-top: 50px;
    margin-bottom: 25px;
    font-size: 50px;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
`;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  width: 100%;
  padding: 0 20px;
`;

export const MessageBox = styled.textarea`
  height: 100px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.tertiaryColor};
  border-radius: 5px;
  resize: none;
  padding: 10px;
  color: white;
  outline: none;
`;

export const InputField = styled.input`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.tertiaryColor};
  border-radius: 5px;
  height: 40px;
  padding: 0 10px;
  color: white;
  outline: none;
`;



export const SubmitButton = styled.button`
  border: 1px solid blue;
  padding: 8px 25px;
  align-self: center;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.accentColor};
  border-radius: 5px;
`;
