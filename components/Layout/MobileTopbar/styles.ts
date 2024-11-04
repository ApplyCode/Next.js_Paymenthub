import styled from "styled-components";

export const MobileTopbarContainer = styled.div`
  width: 100%;
  height: 102px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-right: 1px solid rgba(228, 228, 228, 0.1);
  padding-right: 28px;
  flex-shrink: 0;
  z-index: 1000;
  background: #FFFFFF;
  position: fixed;
  box-shadow: 0px 2px 17px 0px #00000040;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: #292d36;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    width: 312px;
    padding-top: 32px;

    transition: 0.3s;
  }
`;
export const MarkContainer = styled.div`
  display: flex;
  height: 102px;
  width: 300px;
  border-right: 1px solid #F2F2F2;
  align-items: center;
  justify-content: center;
  padding: 48px 0 36px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 263px;
  align-items: center;
  justify-content: space-between;
  padding: 48px 0 36px;
`;
