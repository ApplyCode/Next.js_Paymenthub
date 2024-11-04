import styled from "styled-components";

const backgroundColor = {};

export const ArrowContainer = styled.div`
  cursor: default;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export const MenuItemContainer = styled.li<{ active: boolean }>`
  position: relative;
  width: 100%;
  height: 77px;
  list-style: none;
  margin: 4px 0;
  align-items: center;
  padding: 26px 55px;
  transition: 0.2s;
  font-size: 20px;
  background: ${(props) => (props.active ? `#f53103` : ``)};
  cursor: pointer;
  &:hover {
    background: #f53103;
  }
`;

export const Label = styled.span<{ active: boolean; isChild: boolean }>`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: ${(props) => (props.isChild ? 12 : 14)}px;
  line-height: ${(props) => (props.isChild ? 20 : 24)}px;
  color: ${(props) => (props.active ? `#FFF` : `#777e90`)};
  @media (max-width: 768px) {
    margin-left: 12px;
  }
`;
