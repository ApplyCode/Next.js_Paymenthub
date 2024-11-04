import styled from "styled-components";

export const SidebarContainer = styled.div<{ openside: boolean }>`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1px solid rgba(228, 228, 228, 0.1);
  padding: 0px;
  padding-top: 154px;
  flex-shrink: 0;
  color: white;
  z-index: 100;
  background: #121115;
  overflow-y: overlay;
  position: fixed;
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
    transform: translateX(${(props) => (props.openside ? 0 : -100)}%);
    transition: 0.3s;
    padding-top: 102px;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  background: whi
  align-items: center;
  margin-bottom: 36px;
 
`;

export const MenuContainer = styled.div`
  margin-bottom: 64px;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  outline: none;
  position: fixed;
  top: 24px;
  left: 332px;
  padding: 0;
  z-index: 1000;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 15;
  background: rgba(49, 52, 63, 0.24);
  backdrop-filter: blur(18px);
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 52px;
  padding: 10px;

  @media (min-width: 769px) {
    display: none;
  }
`;
