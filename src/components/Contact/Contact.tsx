import React, { FormEvent, SyntheticEvent } from "react";
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


const Contact = () => {

  const handleContactSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_t6smmz3", "template_op1gczb", e.currentTarget, 'user_3HL2H9IUkZuYfmKKeeEFa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.currentTarget.reset()
  };

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
            <InputField type="text" placeholder="name" name='name' />
            <InputField type="email" placeholder="email" name='email' />
          </InputColumn>
          <InputColumn>
            <MessageBox placeholder="message" name='message' />
          </InputColumn>
        </InputWrapper>
        <SubmitButton type="submit" value='Send Message'></SubmitButton>
      </ContactForm>
    </Layout>
  );
};

export default Contact;
