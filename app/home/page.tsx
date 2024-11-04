"use client";

import React from "react";
import {
  HomePageContainer,
  OnlinePaymentServiceProviders,
  SearchContainer,
  SearchWithLimit,
  TakeawysList,
  Wrapper,
} from "./styles";
import Layout from "@/components/Layout";
import Card from "@/components/Common/Card";

import {
  DescriptionLi,
  DescriptionMd,
  PageTitle,
  Question,
} from "@/components/Common/Text";

import Help from "@/components/Help";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Input from "@/components/Common/Input";
import PaymentListPerCountry from "@/components/PaymentListPerCountry";

const takeSwaylistSpread = TakeawysList.map((item: string, key: number) => (
  <DescriptionLi key={key} mb={6}>
    {item}
  </DescriptionLi>
));

const Home = () => {
  return (
    <Layout>
      <HomePageContainer>
        <OnlinePaymentServiceProviders>
          <PageTitle mb={26}>Online Payment Service Providers</PageTitle>
          <DescriptionMd mb={16}>
            First global payments providers list for SaaS and online buinsesses.
          </DescriptionMd>
          <DescriptionMd mb={16}>
            Online payment service providers play a crucial role in today's
            digital economy, enabling businesses to accept payments from
            customers all over the world. With the growth of e-commerce and the
            increasing demand for seamless and secure payment experiences, it's
            essential for businesses to choose the right online payment service
            provider. The main goal of Payven Hub by Mobile Reality is to give
            comprehesive information about online payment service providers of
            2024 worlwide, highlighting their key features, benefits, and why
            businesses rely on them for their payment processing needs.
          </DescriptionMd>
          <Question mb={16} width={185}>
            <Wrapper>Key Takeaways</Wrapper>{" "}
          </Question>
          {takeSwaylistSpread}
        </OnlinePaymentServiceProviders>
        <SearchContainer>
          <SearchWithLimit>
            <Input pattern="search" />
          </SearchWithLimit>
        </SearchContainer>
        <PaymentListPerCountry />
        <DescriptionMd mb={10}>
          Choosing the right online payment service provider is crucial for
          businesses looking to thrive in the digital economy. Many of providers
          from our list offer seamless and secure payment experiences, robust
          APIs for easy integration, and a wide range of payment options.
          Transparent pricing, fraud prevention tools, and user-friendly
          interfaces are common features among these providers. By leveraging
          these payment service providers, businesses can streamline their
          online payment processes, expand their reach, and drive growth in the
          ever-evolving digital landscape.
        </DescriptionMd>
        <DescriptionMd mb={16}>
          So, which online payment service provider will you choose to meet your
          business needs in 2024? Contact us if you need support!
        </DescriptionMd>
        <FrequentlyAskedQuestions mb={50} />
        <Help />
      </HomePageContainer>
    </Layout>
  );
};

export default Home;
