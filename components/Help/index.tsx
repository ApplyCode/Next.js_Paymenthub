import React from "react";
import { FormContainer, HelpContainer, InputGroup } from "./styles";
import { DescriptionMd, Question } from "../Common/Text";
import Input from "../Common/Input";
import CheckBox from "../Common/CheckBox";
import Button from "../Common/Button";

const Help = () => {
  return (
    <HelpContainer>
      <Question mb={20} width={225}>
        Do you need help ?
      </Question>
      <FormContainer>
        <DescriptionMd>
          If you look for payment provider for your online business, our fintech
          team from Mobile Reality is ready to help you with selection and
          intergration.
        </DescriptionMd>
        <InputGroup>
          <Input pattern="primary" label="Name" />
          <Input pattern="primary" label="Email Address" />
          <Input pattern="primary" label="Message" textarea={true} />
          <CheckBox
            label="Yes i would like to agreed with that your"
            aLink="privacy and policy."
          />
        </InputGroup>
        <Button mb={30}>Submit</Button>
      </FormContainer>
    </HelpContainer>
  );
};

export default Help;
