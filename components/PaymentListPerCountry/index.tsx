import React, { useState } from "react";
import {
  ArgentinaPaymentList,
  AustraliaPaymentList,
  CanadaPaymentList,
  FrancePaymentList,
  IndiaPaymentList,
  IrelandPaymentList,
  ItalyPaymentList,
  NetherlandsPaymentList,
  NewZealandPaymentList,
  PolandPaymentList,
  UKPaymentList,
  USAPaymentList,
} from "@/utils/CountiesPaymetList";
import {
  Container,
  CountriesPaymentContainer,
  Country,
  SubContainer,
} from "@/app/home/styles";
import Card from "../Common/Card";

const PaymentList = [
  {
    country: "USA",
    payList: USAPaymentList,
  },
  {
    country: "United Kingdom",
    payList: UKPaymentList,
  },
  {
    country: "Poland",
    payList: PolandPaymentList,
  },
  {
    country: "New Zealand",
    payList: NewZealandPaymentList,
  },
  {
    country: "Netherlands",
    payList: NetherlandsPaymentList,
  },
  {
    country: "Italy",
    payList: ItalyPaymentList,
  },
  {
    country: "Irend",
    payList: IrelandPaymentList,
  },
  {
    country: "India",
    payList: IndiaPaymentList,
  },
  {
    country: "France",
    payList: FrancePaymentList,
  },
  {
    country: "Canada",
    payList: CanadaPaymentList,
  },
  {
    country: "Australia",
    payList: AustraliaPaymentList,
  },
  {
    country: "Argentina",
    payList: ArgentinaPaymentList,
  },
];

const PaymentListPerCountry = () => {
  const [active, setActive] = useState({ country: "", selected: "" });

  const handleCardClick = (titleData, _countData) => {
    setActive({ country: _countData, selected: titleData });
  };

  const spreadPaymentList = (items: any[], countData: string) =>
    items.map((item: any) => (
      <Card
        setActive={setActive}
        country={countData}
        active={active}
        key={item.title}
        title={item.title}
        description={item.description}
        size={item.size}
        onClick={(e) => {
          handleCardClick(item.title, countData);
        }}
      />
    ));

  const spreadList = PaymentList.map((countryData: any) => (
    <Container key={countryData.country}>
      <Country>{countryData.country}</Country>
      <SubContainer>
        {spreadPaymentList(countryData.payList, countryData.country)}
      </SubContainer>
    </Container>
  ));
  return (
    <CountriesPaymentContainer mb={20}>{spreadList}</CountriesPaymentContainer>
  );
};

export default PaymentListPerCountry;
