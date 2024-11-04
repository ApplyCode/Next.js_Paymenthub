"use client";

import React from "react";
import {
  DescriptionLgBold,
  FormContainer,
  GoogleButton,
  ImageContainer,
  InputGroup,
  PageContainer,
  QueContainer,
  SignLink,
  SignQue,
  SignTitle,
  SubmitForm,
  WelcomeContainer,
  WelcomeTitle,
} from "../signup/styles";
import Image from "next/image";
import signImage from "@/assets/images/bg/Speech_bubble.svg";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import mark from "@/assets/images/mark/mark.svg";
import google from "@/assets/images/icons/google.svg";
import { DontRemeberPassContainer, DontRemPassword } from "./styles";
import { DescriptionMdBold } from "@/components/Common/Text";
import { useRouter } from "next/navigation";

const SignIn = () => {
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
          <SignTitle>Log In</SignTitle>
          <InputGroup>
            <GoogleButton>
              <Image src={google} width={20} height={20} alt=":( not found" />{" "}
              LOG IN WITH GOOGLE
            </GoogleButton>
            <DescriptionMdBold>
              Or log in with a personal account
            </DescriptionMdBold>
            <Input pattern="secondary" label="EMAIL"></Input>
            <DontRemeberPassContainer>
              <Input pattern="secondary" label="PASSWORD"></Input>
              <DontRemPassword>Don't remember the password</DontRemPassword>
            </DontRemeberPassContainer>
          </InputGroup>
          <Button fontSize="sm">LOG IN</Button>
          <QueContainer>
            <SignQue>Or</SignQue>
            <SignLink
              onClick={(e) => {
                router.push("/auth/signup");
              }}
            >
              create an account
            </SignLink>
          </QueContainer>
        </SubmitForm>
      </FormContainer>
    </PageContainer>
  );
};

export default SignIn;
