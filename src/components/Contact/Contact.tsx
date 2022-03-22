import React from "react";
import Layout from "../../common/Layout/Layout";
import { Underline } from "../About/styles";
import { HeaderContainer } from "../Projects/styles";
import {
  FormWrapper,
  InputColumn,
  InputField,
  InputWrapper,
  MessageBox,
  SubmitButton,
  ContactTitle,
} from "./styles";

const Contact = () => {
  return (
    <Layout>
      <HeaderContainer>
        <h2>Contact</h2>
        <Underline />
      </HeaderContainer>
      <ContactTitle>Lets Get In Touch</ContactTitle>
      <FormWrapper>
        <InputWrapper>
          <InputColumn>
            <InputField type="text" placeholder="name" />
            <InputField type="email" placeholder="email" />
          </InputColumn>
          <InputColumn>
            <MessageBox placeholder="message" />
          </InputColumn>
        </InputWrapper>
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormWrapper>
    </Layout>
  );
};

export default Contact;
