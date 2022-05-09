import styled, { keyframes } from "styled-components";
import { IMessageProps } from "../../utils/models";
import { uiSize } from "../../utils/mobileScreens";

const success = "#66bb6a";
const error = "#e57373";

export const ContactTitle = styled.h3`
  margin-top: 100px;
  margin-bottom: 25px;
  color: ${(props) => props.theme.accentColor};

  @media ${uiSize.smallTablet} {
    margin-bottom: 0;
    margin-top: 50px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 75px;
  position: relative;
  margin-bottom: 0px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  @media ${uiSize.smallTablet} {
  flex-direction: column;
}
  `;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 25px;
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
  font-family: 'Sora', sans-serif;
  letter-spacing: .3px;
`;

export const InputField = styled.input`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.tertiaryColor};
  border-radius: 5px;
  height: 40px;
  padding: 0 10px;
  color: ${(props) => props.theme.contentText};
  outline: none;
  font-family: 'Sora', sans-serif;
  letter-spacing: .3px;

  @media ${uiSize.smallTablet} {
    margin-top: 25px;
  }
`;

export const SubmitButton = styled.input`
  border: 1px solid blue;
  padding: 8px 25px;
  align-self: center;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.accentColor};
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Sora', sans-serif;
  letter-spacing: .3px;


  &:hover {
    background-color: ${(props) => props.theme.sendMessageHover};
  }
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
  display: flex;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  bottom: 0;

 
`;

export const ResultMessage = styled.p<IMessageProps>`
  background-color: ${(props) => (props.successMessage ? success : error)};
  border-radius: 5px;
  font-size: .9rem;
  font-family: 'Sora', sans-serif;
  font-weight: 300;
  color: white;
  letter-spacing: .8px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  animation: ${AnimateMessage} 2.8s 1 ease-in-out forwards;
`;
