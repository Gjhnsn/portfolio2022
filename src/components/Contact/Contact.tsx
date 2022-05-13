import React, { useState } from "react";
import Layout from "../../common/Layout/Layout";
import { Underline } from "../About/styles";
import { HeaderContainer } from "../Projects/styles";
import {
  InputColumn,
  InputField,
  InputWrapper,
  MessageBox,
  SubmitButton,
  ContactTitle,
  ContactForm,
  ResultMessage,
  MessageWrapper,
  EmptyNotification,
} from "./styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const [emptyFieldMessage, setEmptyFieldMessage] = useState(false);

  const handleContactSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (
      inputName.trim() === "" ||
      inputEmail.trim() === "" ||
      inputMessage.trim() === ""
    ) {
      inputError();
      return false;
    } else {
      setEmptyFieldMessage(false);

      emailjs
        .sendForm(
          `${process.env.REACT_APP_SERVICE_ID}`,
          `${process.env.REACT_APP_TEMPLATE_ID}`,
          e.currentTarget,
          `${process.env.REACT_APP_USER_ID}`
        )
        .then(
          (result) => {
            setSuccessMessage(true);
            console.log(result.text);
          },
          (error) => {
            setErrorMessage(true);
            console.log(error.text);
          }
        );
      clearState();
      window.setTimeout(() => {
        setSuccessMessage(false);
        setErrorMessage(false);
      }, 4000);
    }
  };

  const clearState = () => {
    setInputEmail("");
    setInputMessage("");
    setInputName("");
  };

  // ------------------------------- empty input messages
  const emptyFieldError = () => {
    return <EmptyNotification>please fill all text fields</EmptyNotification>;
  };

  const inputError = () => {
    setEmptyFieldMessage(true);
    window.setTimeout(() => setEmptyFieldMessage(false), 3300);
  };

  //------------ contact form submission messages
  const renderSuccessMessage = () => (
    <MessageWrapper>
      <ResultMessage successMessage={successMessage}>
        Thanks for reaching out!
      </ResultMessage>
    </MessageWrapper>
  );

  const renderErrorMessage = () => (
    <MessageWrapper>
      <ResultMessage successMessage={successMessage}>
        Oops! Something went wrong.
      </ResultMessage>
    </MessageWrapper>
  );

  return (
    <section id="contact">
      <Layout>
        <HeaderContainer>
          <h2>Contact</h2>
          <Underline />
        </HeaderContainer>

        <ContactTitle>
          {emptyFieldMessage ? emptyFieldError() : "lets connect!"}
        </ContactTitle>

        <ContactForm onSubmit={handleContactSubmit}>
          <InputWrapper>
            <InputColumn>
              <InputField
                type="text"
                placeholder="name"
                name="name"
                value={inputName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputName(e.target.value)
                }
              />
              <InputField
                type="email"
                placeholder="email"
                name="email"
                value={inputEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputEmail(e.target.value)
                }
              />
            </InputColumn>
            <InputColumn>
              <MessageBox
                placeholder="message"
                name="message"
                value={inputMessage}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setInputMessage(e.target.value)
                }
              />
            </InputColumn>
          </InputWrapper>
          <SubmitButton type="submit" value="Send Message">Send Message</SubmitButton>
          {successMessage && renderSuccessMessage()}
          {errorMessage && renderErrorMessage()}
        </ContactForm>
      </Layout>
    </section>
  );
};

export default Contact;
