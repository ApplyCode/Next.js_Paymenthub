import styled from "styled-components";

export const FAQContainer = styled.div<{ mb: 0 }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin-bottom: ${(props) => props.mb || 0}px;
`;

export const QuestionAndAnswers = [
  {
    que: "How many payment service providers are there?",
    aws: "There are numerous payment service providers in the market today, offering a variety of online payment solutions to businesses and consumers.",
  },
  {
    que: "What are the most popular payment services?",
    aws: "Some of the most popular payment services include PayPal, Stripe, Square, Venmo, and Apple Pay, among others.",
  },
  {
    que: "What is an example of a payment service provider?",
    aws: "An example of a payment service provider is PayPal, which allows users to make online payments, transfer money, and accept payments.",
  },
  {
    que: "Who is considered a payment service provider?",
    aws: "A payment service provider is any company or platform that facilitates online transactions between buyers and sellers, offering secure and efficient payment processing services.",
  },
];
