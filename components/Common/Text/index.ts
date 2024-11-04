import styled from "styled-components";

export const PageTitle = styled.div<{
  mb?: number;
}>`
  color: #24232b;
  font-weight: 700;
  font-size: 48px;
  text-align: left;
  line-height: 44px;
  margin-bottom: ${(props) => props.mb || 0}px;
`;

export const DescriptionSm = styled.div<{
  mb?: number;
}>`
  text-align: left;
  color: #868686;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: ${(props) => props.mb || 0}px;
`;

export const DescriptionMd = styled.div<{
  mb?: number;
}>`
  color: #868686;
  font-weight: 400;
  text-align: left;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: ${(props) => props.mb || 0}px;
`;

export const DescriptionMdBold = styled.div<{
  mb?: number;
}>`
  text-align: left;
  color: #24232b;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: ${(props) => props.mb || 0}px;
`;

export const Question = styled.span<{
  mb?: number;
  width: number;
}>`
  color: #24232b;
  font-weight: 700;
  display: inline-block;
  font-size: 24px;
  line-height: 30px;
  position: relative;
  text-align: left;
  margin-bottom: ${(props) => props.mb || 0}px;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: ${(props) => props.width}px;
    height: 13px; /* Height of the underline */
    background: #d858304d;
    bottom: 0;
    left: -5px;
    z-index: -1;
  }
`;

export const DescriptionLi = styled.li<{
  mb?: number;
}>`
  list-style-type: none;
  &::before {
    content: "•"; /* Custom bullet */
    color: gray; /* Change bullet color */
    display: inline-block; /* Ensure it stays inline with text */
    width: 10px; /* Adjust bullet position */
    margin-right: 5px; /* Adjust spacing between bullet and text */
  }
  padding-left: 18px;
  color: #868686;
  font-weight: 400;
  text-align: left;
  font-size: 22px;
  line-height: 26px;
  margin-left: -10px;
  margin-bottom: ${(props) => props.mb || 0}px;
`;
