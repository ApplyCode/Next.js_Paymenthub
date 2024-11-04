import styled from "styled-components";

const cardSize = {
  sm: 70,
  lg: 132,
};

export const CardContainer = styled.div<{
  size: "sm" | "lg";
  active: boolean;
}>`
  padding: 22px;
  display: flex;
  background: ${(props) => (props.active ? "#f53103" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#f53103")};
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 23%;
  min-height: ${(props) => cardSize[props.size]}px;
  box-shadow: 0px 0px 12px 0px #00000040;
  border-radius: 6px;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background: #f53103;
    color: #ffffff;
    box-shadow: 0px 0px 20px 0px #00000040 inset;
    span {
      color: #ffffff;
    }
    div {
      color: #ffffff;
    }
  }
  @media (max-width: 1440px) {
    width: 30.5%;
  }
  @media (max-width: 1024px) {
    width: 47%;
  }
  @media (max-width: 840px) {
    width: 99%;
  }
  @media (max-width: 768px) {
    width: 47%;
  }
  @media (max-width: 768px) {
    width: 99%;
  }
`;

export const Title = styled.span<{ active: boolean }>`
  text-align: left;
  font-weight: 500;
  font-size: 26px;
  line-height: 26px;
  color: #24232b;
  color: ${(props) => (props.active ? "#ffffff" : "#24232b")};
`;

export const Description = styled.div<{ active: boolean }>`
  text-align: left;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: ${(props) => (props.active ? "#ffffff" : "#868686")};
`;
