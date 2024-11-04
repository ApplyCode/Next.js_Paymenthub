import React from "react";
import Image from "next/image";
import {
  FooterContainer,
  LinkContainer,
  LinkItem,
  LogoContainerFooter,
  MobileReality,
  TaxId,
  TaxInfoContainer,
} from "./styles";
import markLight from "@/assets/images/mark/mark-light.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainerFooter>
        <Image src={markLight} width={207} height={25} alt="sad" />
        <TaxInfoContainer>
          <MobileReality>Mobile Reality</MobileReality>
          <TaxId>TAX ID: PL7010559296</TaxId>
        </TaxInfoContainer>
      </LogoContainerFooter>
      <LinkContainer>
        <LinkItem>Privacy Policy</LinkItem>
        <LinkItem>Terms of Use</LinkItem>
      </LinkContainer>
    </FooterContainer>
  );
};

export default Footer;
