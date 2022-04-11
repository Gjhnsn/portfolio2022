import styled, { keyframes } from "styled-components";
import { IMessageProps } from "../../utils/models";

const success = "#66bb6a";
const error = "#e57373";

export const ContactTitle = styled.h2`
  margin-top: 50px;
  margin-bottom: 25px;
  font-size: 50px;
`;

export const ContactForm = styled.form`
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
  justify-content: space-between;
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
  color: ${(props) => props.theme.contentText};
  outline: none;
`;

export const InputField = styled.input`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.tertiaryColor};
  border-radius: 5px;
  height: 40px;
  padding: 0 10px;
  color: ${(props) => props.theme.contentText};
  outline: none;
`;

export const SubmitButton = styled.input`
  border: 1px solid blue;
  padding: 8px 25px;
  align-self: center;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.accentColor};
  border-radius: 5px;
`;

//-------------- contact result messages

const AnimateMessage = keyframes`
{
  0% {
    width: 0%;
    opacity: 0;
    padding: 10px 0;
  }
  25% {
    width: 100%;
    opacity: 1;
    padding: 10px;
  }
  75% {
    width: 100%;
    opacity: 1;
    padding: 10px;
  }
  90% {
    opacity: .9;
  }
100% {
  width: 0%;
  opacity: 0;
  padding: 10px 0;
}
}`;

export const MessageWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

export const ResultMessage = styled.p<IMessageProps>`
  background-color: ${(props) => (props.successMessage ? success : error)};
  border-radius: 5px;
  font-size: 18px;
  color: white;
  letter-spacing: 2px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  animation: ${AnimateMessage} 2.8s 1 ease-in-out forwards;
`;
