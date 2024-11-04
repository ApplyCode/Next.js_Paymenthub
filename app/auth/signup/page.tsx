"use client";

import React from "react";
import {
  BothInput,
  DescriptionLgBold,
  FormContainer,
  GoogleButton,
  ImageContainer,
  InputGroup,
  LetterContainer,
  PageContainer,
  QueContainer,
  SignLink,
  SignQue,
  SignTitle,
  SubmitForm,
  WelcomeContainer,
  WelcomeTitle,
} from "./styles";
import google from "@/assets/images/icons/google.svg";
import Image from "next/image";
import mark from "@/assets/images/mark/mark.svg";
import signImage from "@/assets/images/bg/Speech_bubble.svg";
import { PageTitle } from "@/components/Common/Text";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import CheckBox from "@/components/Common/CheckBox";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  return (
    <PageContainer>
      <ImageContainer>
        <Image src={signImage} width={443} height={406} alt="sad" />
        <WelcomeContainer>
          <WelcomeTitle>Welcome to Payven Hub by Mobile Reality!</WelcomeTitle>
          <DescriptionLgBold>
            Gain exclusive insights into the latest payment solutions and
            enhance you business operations.
          </DescriptionLgBold>
        </WelcomeContainer>
      </ImageContainer>
      <FormContainer>
        <Image src={mark} width={207} height={23} alt="sad" />
        <SubmitForm>
          <SignTitle>Create an Account</SignTitle>
          <InputGroup>
            <GoogleButton>
              <Image src={google} width={20} height={20} alt="sad" />{" "}
              <LetterContainer>CONTINUE WITH GOOGLE</LetterContainer>
            </GoogleButton>
            <BothInput>
              <Input
                pattern="secondary"
                label="FIRST NAME"
              ></Input>
              <Input
                pattern="secondary"
                label="LAST NAME"
              ></Input>
            </BothInput>
            <Input pattern="secondary" label="EMAIL" ></Input>
            <BothInput>
              <Input
                pattern="secondary"
                label="CREATE PASSWORD"
                
              ></Input>
              <Input
                pattern="secondary"
                label="CONFIRM PASSWORD"
               
              ></Input>
            </BothInput>
            <CheckBox
              density={true}
              label="Creating an account means you agree with our"
              aLink="Terms & Conditions."
            />
          </InputGroup>
          <Button fontSize="sm">SIGN UP</Button>
          <QueContainer>
            <SignQue>Already have an account?</SignQue>
            <SignLink
              onClick={(e) => {
                router.push("/auth/signin");
              }}
            >
              Sign In
            </SignLink>
          </QueContainer>
        </SubmitForm>
      </FormContainer>
    </PageContainer>
  );
};

export default SignUp;
