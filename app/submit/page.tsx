"use client";

import Layout from "@/components/Layout";
import React from "react";
import { HomePageContainer } from "../home/styles";
import { PageTitle } from "@/components/Common/Text";
import {
  FormContainer,
  FromGroup,
  QuestionContainer,
  SubmitContainer,
} from "./styles";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Input from "@/components/Common/Input";
import CheckBox from "@/components/Common/CheckBox";
import Button from "@/components/Common/Button";

const checkboxData = [
  "Android SDK",
  "React Native SDK",
  "Crypto payments",
  "iOS SDK",
  "PCI DSS",
];

const Submit = () => {
  return (
    <Layout>
      <HomePageContainer>
        <PageTitle mb={53}>Submission</PageTitle>
        <SubmitContainer mb={30}>
          <FormContainer>
            <FromGroup>
              <Input pattern="primary" label="Name" />
              <Input pattern="primary" label="Origin countryame" />
              <Input pattern="primary" label="Processing fee model comment" />
              <Input pattern="primary" label="Fees info" />
              <Input pattern="primary" label="3D Secure" />
              <Input pattern="primary" label="Supported Countries Comment" />
              <Input
                pattern="primary"
                label="Prohibited and Restricted Business"
              />
            </FromGroup>
            <FromGroup>
              <Input pattern="primary" label="Logo" />
              <Input pattern="primary" label="Website" />
              <Input pattern="primary" label="Processing fee model" />
              <Input
                pattern="primary"
                label="Processing fee value (some examples)"
              />
              <Input pattern="primary" label="Embeded web checkout" />
              <Input pattern="primary" label="Supported Countries" />
              <Input
                pattern="primary"
                label="Supported Alternative Payment Methods"
              />
            </FromGroup>
          </FormContainer>
          {checkboxData.map((item: string, key: number) => (
            <CheckBox key={key} italic={true} label={item} />
          ))}
        </SubmitContainer>
        <Button mb={59} pattern="fill" fontSize="md">
          Submit
        </Button>
        <FrequentlyAskedQuestions mb={50} />
        <QuestionContainer></QuestionContainer>
      </HomePageContainer>
    </Layout>
  );
};

export default Submit;
