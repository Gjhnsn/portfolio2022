import React from "react";
import Layout from "../../common/Layout/Layout";
import { Underline } from "../About/styles";
import { HeaderContainer } from "../Projects/styles";
import { FormWrapper, InputColumn, InputField, InputWrapper, MessageBox, SubmitButton } from "./styles";

const Contact = () => {
  return (
    <Layout>
      <HeaderContainer>
        <h2>Contact</h2>
        <Underline />
      </HeaderContainer>
      <h2>Lets Get In Touch</h2>
      <FormWrapper>
        <InputWrapper>
          <InputColumn>
            <InputField type="text" placeholder="name" />
            <InputField type="email" placeholder="email" />
          </InputColumn>
          <MessageBox placeholder="message" />
        </InputWrapper>
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormWrapper>
    </Layout>
  );
};

export default Contact;
