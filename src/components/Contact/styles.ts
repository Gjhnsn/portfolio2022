import styled, { keyframes } from "styled-components";
import { IMessageProps } from "../../utils/models";
import { uiSize } from "../../utils/mobileScreens";

const success = "#66bb6a";
const error = "#e57373";

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
  padding-bottom: 70px;
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
  font-family: "Sora", sans-serif;
  letter-spacing: 0.3px;
  display: flex;
  align-items: flex-start;
`;

export const InputField = styled.input`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.tertiaryColor};
  border-radius: 5px;
  height: 40px;
  padding: 0 10px;
  color: ${(props) => props.theme.contentText};
  outline: none;
  font-family: "Sora", sans-serif;
  letter-spacing: 0.3px;

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
  font-family: "Sora", sans-serif;
  letter-spacing: 0.3px;

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
    padding: 8px 0;
  }
  25% {
    width: 100%;
    opacity: 1;
    padding: 8px 10px;
  }
  75% {
    width: 100%;
    opacity: 1;
    padding: 8px 10px;
  }
  90% {
    opacity: .9;
  }
100% {
  width: 0%;
  opacity: 0;
  padding: 8px 0; 
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
  font-size: 0.9rem;
  font-family: "Sora", sans-serif;
  font-weight: 300;
  color: white;
  letter-spacing: 0.8px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  animation: ${AnimateMessage} 2.8s 1 ease-in-out forwards;
`;

const shake = keyframes`

0% {
  opacity: 0;
}

10% {
  opacity: 1
}

  2.5%, 23% {
    transform: translate3d(-1px, 0, 0);
  }
  
  5%, 20% {
    transform: translate3d(2px, 0, 0);
  }

  7.5%, 12.5%, 16.5% {
    transform: translate3d(-4px, 0, 0);
  }

  10%, 15% {
    transform: translate3d(4px, 0, 0);
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const EmptyNotification = styled.h3`
  color: ${(props) => props.theme.accentColor};
  bottom: 0;
  width: 100%;
  text-align: center;
  animation: ${shake} 3.1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;
