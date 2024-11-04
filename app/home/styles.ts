import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  text-align: center;
  padding: 172px 28px 50px 340px;

  @media (max-width: 768px) {
    padding: 150px 25px 50px 25px;
    transition: 0.3s;
  }
`;

export const PaymentService = styled.div`
  width: 100%;
  text-align: center;
  padding: 172px 28px 0px 340px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  padding: 34px 35px 35px;
  border: 1px solid #a5a5a5;
  border-radius: 10px;
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Country = styled.span`
  color: #24232b;
  font-weight: 700;
  line-height: 26px;
  font-size: 28px;
`;

export const CountriesPaymentContainer = styled.div<{
  mb?: number;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: ${(props) => props.mb || 0}px;
`;

export const OnlinePaymentServiceProviders = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1255px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const SearchWithLimit = styled.div`
  width: 369px;
`;

export const SearchContainer = styled.div`
  padding: 30px 0px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const TakeawysList = [
  "Payment providers offer seamless and secure payment experiences for businesses of all sizes",
  "Businesses can accept payments in multiple currencies and from customers around the world",
  "Integration with existing systems and platforms is made easy through robust APIs",
  "Transparent pricing, fraud prevention tools, and user-friendly interfaces are common features among these providers",
];
