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
} from "./styles";
import emailjs from "@emailjs/browser";
import { render } from "@testing-library/react";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const handleContactSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

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
    e.currentTarget.reset();
    window.setTimeout(() => {
      setSuccessMessage(false);
      setErrorMessage(false);
    }, 3000);
  };

  //------------ call this under successful submission instead of at end of function
  const renderSuccessMessage = () => (
    <div>
      <p>Thanks for getting in touch!</p>
    </div>
  );

  const renderErrorMessage = () => (
    <div>
      <p>oops! Something went wrong.</p>
    </div>
  );

  return (
    <Layout>
      <HeaderContainer>
        <h2>Contact</h2>
        <Underline />
      </HeaderContainer>
      <ContactTitle>Lets Get In Touch</ContactTitle>
      <ContactForm onSubmit={handleContactSubmit}>
        <InputWrapper>
          <InputColumn>
            <InputField type="text" placeholder="name" name="name" />
            <InputField type="email" placeholder="email" name="email" />
          </InputColumn>
          <InputColumn>
            <MessageBox placeholder="message" name="message" />
          </InputColumn>
        </InputWrapper>
        <SubmitButton type="submit" value="Send Message"></SubmitButton>
        {successMessage && renderSuccessMessage()}
        {errorMessage && renderErrorMessage()}
      </ContactForm>
    </Layout>
  );
};

export default Contact;
